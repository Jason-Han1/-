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

const prices = randomWalk(11);

// 交易次数不限制
const profit = (prices, kmax) => {
  console.log('start======================>');
  if (!prices || !prices.length) {
    return [0, 0];
  }
  const dp0 = [];
  const dp1 = [];
  for (let i = 0; i < prices.length; i++) {
    const p = prices[i];
    dp0[i] = [];
    dp1[i] = [];
    for (let k = kmax; k >= 1; k--) {
      if (i === 0) {
          dp0[i][k] = 0;
          dp1[i][k] = -p;
          continue;
      }
      if (dp1[i -1][k] + p > dp0[i-1][k]) {
          console.log('sell======>',i, k, p);
          dp0[i][k] = dp1[i -1][k] + p;
      } else {
          dp0[i][k] = dp0[i-1][k];
      }
      if (dp0[i-1][k-1] - p > dp1[i-1][k]) {
          console.log('buy======>', i, k, p);
          dp1[i][k] = dp0[i-1][k-1] - p;
      } else {
          dp1[i][k] = dp1[i-1][k];
      }
    }
  }
  
  console.log('vvv', dp0[prices.length - 1][kmax]);

  return [
   [],[]
  ];
};

const [bIdxs, sIdxs] = profit(prices, 2);

// 波峰波谷
const findValleyPeaks = (prices) => {
    if (!prices.length) {
        return [];
    }

    const tradeList = [];
    const buy = (index) => {
        tradeList.push({
            buyIndex: index,
            buyPrice: prices[index],
            sellIndex: -1,
            sellPrice: -Infinity,
        });
    };
    const sell = (index) => {
        const trade = tradeList[tradeList.length - 1];
        if (trade) {
            trade.sellIndex = index;
            trade.sellPrice = prices[index];
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
        lastTrade.sellPrice === prices[prices.length - 1];
    }
    return tradeList;
};

const mergeTrade = (trade1, trade2) => {
    if (trade2.buyPrice > trade1.buyPrice && trade2.sellPrice > trade1.sellPrice) {
        return {
            buyIndex: trade1.buyIndex,
            buyPrice: trade1.buyPrice,
            sellIndex: trade2.sellIndex,
            sellPrice: trade2.sellPrice,
        };
    } else if ((trade1.sellPrice - trade1.buyPrice) > (trade2.sellPrice - trade2.buyPrice)) {
        return {
            buyIndex: trade1.buyIndex,
            buyPrice: trade1.buyPrice,
            sellIndex: trade1.sellIndex,
            sellPrice: trade1.sellPrice,
        };
    } else {
        return {
            buyIndex: trade2.buyIndex,
            buyPrice: trade2.buyPrice,
            sellIndex: trade2.sellIndex,
            sellPrice: trade2.sellPrice,
        };
    }
};

const profit2 = (prices, kmax) => {
    const tradeList = findValleyPeaks(prices);
    if (kmax >= tradeList.length) {
        return tradeList;
    }
    
};



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