// -10% ~ 10% 随机数
const rnd = () => 0.2 * Math.random() - 0.1 + 0.003;
// 随机漫步
const randomWalk = (count) => {
  const ps = [1];
  for (let i = 1; i < count; i++) {
    ps[i] = Number((ps[i - 1] * (1 + rnd())).toFixed(2));
  }
  return ps;
};

// const prices = randomWalk(500);

// localStorage.setItem('rnd_prices', JSON.stringify(prices));
const prices = JSON.parse(localStorage.getItem('rnd_prices'));

// 不限制交易次数 一共可以交易多少次
const getInfinity = (prices) => {
    const bIdxs = [];
    const sIdxs = [];
    let value = 0;
    
    for (let i = 1; i < prices.length - 1; i++) {
        const prev = prices[i -1];
        const current = prices[i];
        const next = prices[i + 1];
        // 买点
        if (current <= prev && current < next) {
            bIdxs.push(i);
            value -= current;
        }
        // 卖点
        if(current > prev && current >= next) {
            sIdxs.push(i);
            value += current;
        }
    }
    
    // 如果第一笔是卖 将第一个数据作为买点
    if (sIdxs[0] < bIdxs[0]) {
        bIdxs.unshift(0);
        value -= prices[0];
    }
    
    // 如果最后一笔是买，将最后一个数据作为卖点
    if (bIdxs[bIdxs.length - 1] > sIdxs[sIdxs.length - 1]) {
        sIdxs.push(prices.length - 1);
        value += prices[prices.length - 1];
    }
    
    return {bIdxs, sIdxs, value};
};

const dropMinTrade = (prices, {bIdxs, sIdxs, value}) => {
    let minBIndex = 0;
    let minSIndex = 0;
    let minValue = prices[sIdxs[0]] - prices[bIdxs[0]];
    
    for (let i = 1; i < bIdxs.length; i++) {
        const v = prices[sIdxs[i]] - prices[bIdxs[i]];
        const p = prices[sIdxs[i - 1]] - prices[bIdxs[i]];
        if (v < minValue) {
            minBIndex = i;
            minSIndex = i;
            minValue = v;
        }
        if (p < minValue) {
            minBIndex = i;
            minSIndex = i - 1;
            minValue = p;
        }
    }
    
    bIdxs.splice(minBIndex, 1);
    sIdxs.splice(minSIndex, 1);
    value = value - minValue;

    return {bIdxs, sIdxs, value};
};

// 另一种算法
const getKMax = (arr, k) => {
    let inf = getInfinity(arr);
    
    if (k >= inf.bIdxs.length) {
        return inf;
    }
    
    while(inf.bIdxs.length > k) {
        inf = dropMinTrade(arr, inf);
    }
    return inf;
};

// 限制交易k次 最大的收益
const getDPKMax = (arr, k) => {
    const {bIdxs, sIdxs, value} = getInfinity(arr);
    
    if (k >= bIdxs.length) {
        return {bIdxs, sIdxs, value};
    }

    const len = arr.length;
    
    const dk = k * 2;
    const tb = [];
    const tbIdxs = [];
    for (let j = 0; j <= dk; j++) {
        tb[j] = Array(len + 1 - j).fill(0);
        tbIdxs[j] = Array(len + 1 - j).fill(0);
    }
    
    for (let j = 1; j <= dk; j++) {
        const sign = j % 2 === 0 ? -1 : 1;
        for (let i = len -1 -j; i >= 0; i--) {
            if (tb[j - 1][i + 1] + sign * arr[i] > tb[j][i + 1]) {
                tb[j][i] = tb[j - 1][i + 1] + sign * arr[i];
                tbIdxs[j][i] = tbIdxs[j - 1][i + 1] + ',' + i;
            } else {
                tb[j][i] = tb[j][i + 1];
                tbIdxs[j][i] = tbIdxs[j][i + 1];
            }    
        }
    }
    
    const maxValue = tb[dk][0];
    const idxs = tbIdxs[dk][0].split(',').slice(1).map(Number).reverse();
    
    return {
        value: maxValue,
        bIdxs: idxs.filter((_,i) => i % 2 === 0),
        sIdxs: idxs.filter((_,i) => i % 2 === 1)
    };
};

const dataSet = prices.map((v, index) => [index, v]);

// 上证日线数据
const shDataUrl = 'https://money.finance.sina.com.cn/quotes_service/api/json_v2.php/CN_MarketData.getKLineData?symbol=sh000001&scale=240&ma=no&datalen=8000';

// fetch(shDataUrl,{
//     method: 'GET',
//     mode: 'cors',
// }).then(res => {
//     console.log(res, res.json())
//     return res.json();
// }).then(json => {
//     console.log('...gggg...', json);
// }).catch(err => {
//     console.log('...err..', err);
// });

// console.time('....ggggg...');
const { bIdxs, sIdxs } = getKMax(prices, 6);
// console.timeEnd('....ggggg...');

const markPoints = [];
bIdxs.forEach(v => {
  markPoints.push({
    name : '买点',
    coord: [v, dataSet[v][1]],
    symbolOffset: [0, 10],
    itemStyle: {
      color:'red',
    },
   });
});

sIdxs.forEach(v => {
  markPoints.push({
    name : '卖点',
    coord: [v, dataSet[v][1]],
    symbolOffset: [0, -10],
    itemStyle: {
      color:'yellowgreen',
    },
   });
});

option = {
    backgroundColor: '#080b30',
    title: {
        text: 'quan-infinity',
        textStyle: {
          color: '#fff',  
        },
    },
    tooltip: {
        trigger: 'axis',
        formatter: params => {
            const item = params[0];
            return item.marker + item.data[0] + ', ' + item.data[1];
        }
    },
    grid: {
        left: 64,
        right: 16,
        bottom: 80,
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.3)'
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    },
    yAxis: {
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: 'rgba(255,255,255,0.3)',
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.3)'
            }
        },
    },
    dataZoom: [
        {
            type: 'inside',
            start: 0,
            end: 1000
        },
        {
            start: 0,
            end: 1000,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }
    ],
    series: [{
        type: 'line',
        lineStyle: {
            color: "#6c50f3",
        },
        markPoint : {
            symbol: 'circle',
            symbolSize: 10,
            data : markPoints,
        },
        data: dataSet,
    }],
};