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

const profit = (prices) => {
  console.log('start======================>');
  if (!prices || !prices.length) {
    return [0, 0];
  }

  let sellIndex = 0;
  let buyIndex = 0;
  
  let trybuyIndex = 0;
 
  let p0 = 0;
  console.log('buy=====>', 0, prices[0]);
  let p1 = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    const p = prices[i];
    if (p1 + p > p0) {
      console.log('sell=====>', i, p);
      sellIndex = i;
      buyIndex = trybuyIndex;
      p0 = p1 + p;
    }
    if (-p > p1) {
      console.log('buy=====>', i, p);
      trybuyIndex = i;
      p1 = -p;
    }
  }

  return [buyIndex, sellIndex];
};


const profit2 = (prices) => {
  if (!prices || !prices.length) {
    return [0, 0];
  }

  const trade = {
    buyIndex: -1,
    sellIndex: -1,
  };

  let delta = 0;
  let minIndex = 0;

  for (let i = 0; i < prices.length; i++) {
    const p = prices[i];
    const minp = prices[minIndex];
    if (p < minp) {
      minIndex = i;
      continue;
    }
    if (delta < (p - minp)) {
      delta = (p - minp);
      trade.buyIndex = minIndex;
      trade.sellIndex = i;
    }
  }

  return [trade.buyIndex, trade.sellIndex];
};


const [bIdx, sIdx] = profit(prices);

const data = prices.map((v, index) => [index, v]);

option = {
    backgroundColor: '#080b30',
    title: {
        text: 'quan',
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
            symbolSize: 20,
            data : [
                {
                    name : '最大值',
                    coord: [sIdx, data[sIdx][1]],
                    symbolOffset: [0, -25],
                    itemStyle: {
                        color:'yellowgreen',
                    },
                    
                },
                {
                    name : '最小值',
                    coord: [bIdx, data[bIdx][1]],
                    symbolOffset: [0, 25],
                    itemStyle: {
                        color:'red',
                    },
                }
            ],
        },
        data,
    }],
};