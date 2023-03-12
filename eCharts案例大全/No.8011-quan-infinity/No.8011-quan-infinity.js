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

const prices = randomWalk(101);

// 交易次数不限制
const profit = (prices) => {
  console.log('start======================>');
  if (!prices || !prices.length) {
    return [0, 0];
  }

  const buyIdxs = [];
  const sellIdxs = [];
  
  let buyIndex = 0;
  let sellIndex = 0;
 
  let p0 = 0;
  console.log('buy=====>', 0, prices[0]);
  let p1 = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    const p = prices[i];
    const temp = p0;
    if (p1 + p > p0) {
      console.log('sell=====>', i, p);
      if (!buyIdxs.includes(buyIndex)) {
        buyIdxs.push(buyIndex);
      }
      sellIndex = i;
      p0 = p1 + p;
    }
    if (temp - p > p1) {
      console.log('buy=====>', i, p);
      if (!sellIdxs.includes(sellIndex) && sellIndex > 0) {
        sellIdxs.push(sellIndex);
      }
      buyIndex = i;
      p1 = temp - p;
    }
  }

  if (sellIdxs[sellIdxs.length - 1] < sellIndex) {
    sellIdxs.push(sellIndex);
  }

  return [
    buyIdxs, sellIdxs, 
    buyIdxs.length, sellIdxs.length
  ];
};

// 波峰波谷
const profit2 = (prices) => {
    if (!prices.length) {
        return [];
    }

    const tradeList = [];
    const buy = (index) => {
        tradeList.push({
            buyIndex: index,
            sellIndex: -1,
        });
    };
    const sell = (index) => {
        const trade = tradeList[tradeList.length - 1];
        if (trade) {
            trade.sellIndex = index;
        }
    };

    let prev = prices[0];
    // 0-> 初始趋势不明   -1 -> 熊市   1 -> 牛市
    let trend = 0;
    for (let i = 0; i < prices.length; i++) {
        const p = prices[i];
        const delta = p - prev;
        if (trend <= 0 && delta > 0) {
            buy(i - 1);
            trend = 1;
        }
        if (trend >= 0 && delta < 0) {
            sell(i - 1);
            trend = -1;
        }
        prev = p;
    }
    // 最后一天卖出
    const lastTrade = tradeList[tradeList.length - 1];
    if (lastTrade.sellIndex === -1) {
        lastTrade.sellIndex === prices.length - 1;
    }
    console.log(tradeList);
    return tradeList;
};

const [bIdxs, sIdxs] = profit(prices);

profit2(prices);

const data = prices.map((v, index) => [index, v]);
const markPoints = [];

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
        data,
    }],
};