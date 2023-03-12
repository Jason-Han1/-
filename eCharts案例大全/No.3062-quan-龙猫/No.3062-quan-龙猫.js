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

const prices = randomWalk(500);

// window.ttt = prices;
// console.log(prices, window);
// localStorage.setItem('ttt', JSON.stringify(prices));
// const prices = JSON.parse(localStorage.getItem('ttt'));

var data = prices.map((v, index) => [index, v]);
const markPoints = [];

const findMax = (arr, k) => {
    const len = arr.length;
    
    const tb = [];
    const tbIdxs = [];
    for (let j = 0; j <= k; j++) {
        tb[j] = Array(len + 1 - j).fill(0);
        tbIdxs[j] = Array(len + 1 - j).fill(0);
    }
    
    for (let j = 1; j <= k; j++) {
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
    
    return {
        value: tb[k][0],
        idxs: tbIdxs[k][0].split(',').slice(1).map(Number)
    };
};

const ret = findMax(prices, 10);
console.log(ret);

// const countData = [];
// for (let i = 1; i<=250; i++) {
//     const item = findMax(prices, 2*i);
//     countData.push(item.value);
// }
// localStorage.setItem('count_v', JSON.stringify(countData));
// console.log(countData)

const sIdxs = ret.idxs.filter((v, i) => i % 2 === 0);
const bIdxs = ret.idxs.filter((v, i) => i % 2 === 1);

bIdxs.forEach(v => {
  markPoints.push({
    name : '买点',
    coord: [v, data[v][1]],
    symbolOffset: [0, 10],
    itemStyle: {
      color:'red',
    },
  });
});

sIdxs.forEach(v => {
  markPoints.push({
    name : '卖点',
    coord: [v, data[v][1]],
    symbolOffset: [0, -10],
    itemStyle: {
      color:'yellowgreen',
    },
  });
});

const biIdxs = ret.idxs;
const biData = biIdxs.map(v => [v, data[v][1]])
if (!biIdxs.includes(0)) {
    biData.push([0, data[0][1]]);
}
const len = prices.length;
if (!biIdxs.includes(len - 1)) {
    biData.unshift([len - 1, data[len - 1][1]])
}

option = {
    backgroundColor: '#080b30',
    title: {
        text: 'quan-K',
        textStyle: {
          color: '#fff',  
        },
    },
    tooltip: {
        trigger: 'axis',
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
    series: [
        {
            type: 'line',
            lineStyle: {
                color: "#6c50f3"
            },
            showSymbol: false,
            symbolSize: 1,
            markPoint : {
                symbol: 'circle',
                symbolSize: 10,
                data : markPoints,
            },
            data,
        },
        {
            type: 'line',
            lineStyle: {
                color: "#fff",
            },
            data: biData,
        }
    ],
};