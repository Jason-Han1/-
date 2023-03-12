const splitNumber = 40;
const axisWidth = 20;
const max = 100;
const min = 60;

const common = {
  axisTick: {
    show: false
  },
  axisLabel: {
    show: false
  },
  splitLine: {
    show: true,
    length: axisWidth,
    lineStyle: {
      width: 3,
      color: 'rgba(0, 0, 0, 0.16)'
    },
  },
};
const option = {
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%'
  },
  series: [{
      name: '指标',
      type: 'gauge',
      min,
      max,
      data: [{
        value: min,
        name: '仪表盘'
      }],
      title: {
        offsetCenter: [0, '-60%']
      },
      pointer: {
        length: '70%',
        width: 3
      },
      splitNumber,
      axisLine: { // 坐标轴线
        show: true,
        lineStyle: { // 属性lineStyle控制线条样式
          width: axisWidth - 1,
          color: [
            [1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#FF2F89'
              },
              {
                offset: 0.5,
                color: '#FFBB2F'
              },
              {
                offset: 1,
                color: '#15FFD1'
              }
            ])]
          ]
        }
      },
      ...common,
      axisLabel: {
        show: true
      },
    },
    // 阴影层
    {
      type: 'gauge',
      axisLine: {
        show: true,
        lineStyle: {
          width: axisWidth,
          color: [
            [0, 'rgba(0, 0, 0, .6)'],
            [1, 'rgba(0, 0, 0, .6)']
          ]
        }
      },
      detail: {
        show: false
      },
      pointer: {
        show: false
      },
      ...common,
    }, 
    // 外围灰色条纹
    {
      type: 'gauge',
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      pointer: {
        show: false
      },
      radius: '80%',
      detail: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 12,
          color: [
            [0, 'rgba(0, 0, 0, 0.08)'],
            [1, 'rgba(0, 0, 0, 0.08)']
          ]
        }
      }
    }, 
    // 外围刻度
    {
      type: 'gauge',
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      pointer: {
        show: false
      },
      radius: '80%',
      detail: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 2,
          color: [
            [0, 'rgba(0, 0, 0, 0.08)'],
            [1, 'rgba(0, 0, 0, 0.08)']
          ]
        }
      },
      splitLine: {
        length: -16,
        lineStyle: {
          width: 2,
          color: 'rgba(0, 0, 0, 0.08)'
        }
      }
    }
  ]
};

setInterval(function () {
  const value = min + Math.random() * (max - min);
  option.series[0].data[0].value = value.toFixed(2);

  const val2 = splitNumber - Math.ceil(((value - min) * splitNumber) / (max - min));

  Object.assign(option.series[1], {
    splitNumber: val2,
    startAngle: -45 + ((270 * val2) / splitNumber)
  });
  myChart.setOption(option, true);
}, 2000);
