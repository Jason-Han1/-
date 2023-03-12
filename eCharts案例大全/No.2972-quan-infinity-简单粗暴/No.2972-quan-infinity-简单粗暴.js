// -10% ~ 10% 随机数
const rnd = () => 0.2 * Math.random() - 0.1;
// 随机漫步
const randomWalk = (count) => {
  const ps = [1];
  for (let i = 1; i < count; i++) {
    ps[i] = Number((ps[i - 1] * (1 + rnd())).toFixed(2));
  }
  return ps;
};

const prices = randomWalk(100);

const dataSet = prices.map((v, index) => [index, v]);

const getInfinity = (prices) => {
    const bIdxs = [];
    const sIdxs = [];
    
    for (let i = 1; i < prices.length - 1; i++) {
        const prev = prices[i -1];
        const current = prices[i];
        const next = prices[i + 1];
        // 买点
        if (current <= prev && current < next) {
            bIdxs.push(i);
        }
        // 卖点
        if(current > prev && current >= next) {
            sIdxs.push(i);
        }
    }
    
    // 如果第一笔是卖 将第一个数据作为买点
    if (sIdxs[0] < bIdxs[0]) {
        bIdxs.unshift(0);
    }
    
    // 如果最后一笔是买，将最后一个数据作为卖点
    if (bIdxs[bIdxs.length - 1] > sIdxs[sIdxs.length - 1]) {
        sIdxs.push(prices.length - 1);
    }
    
    return {bIdxs, sIdxs};
};

const { bIdxs, sIdxs } = getInfinity(prices);

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
            console.log(params);
            const item = params[0];
            return item.marker + item.data[1];
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