option = {
  background: 'none',
  color: ['#04FEF9'],
  grid: {
    left: '3%',
    right: '3%',
    top: '3%',
    bottom: '13%',
  },
  yAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['X'],
      axisLabel: {
        color: '#00B4FF',
        fontFamily: 'YouSheBiaoTiHei',
        fontSize: '36',
         show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
  ],
  xAxis: {
    type: 'value',
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
  },
  series: [
    {
      tooltip: {
        show: false,
      },
      name: 'bg',
      type: 'pictorialBar',
      barWidth: '3',
      silent: true,
      symbol: 'rect',
      symbolRepeat: true,
      symbolMargin: 1,
      symbolSize: [4, 42],
      itemStyle: {
        color: '#08487759',
      },
      data: [100],
    },
    {
      type: 'pictorialBar',
      animation: true,
      animationDuration: 600,
      symbol: 'rect',
      symbolRepeat: true,
      symbolSize: [4, 42],
      symbolMargin: 1,
      barWidth: '3',
      itemStyle: {
        normal: {
          color: '#084877',
          label: {
            color: '#D2EFFE',
            fontFamily: 'Oswald',
            fontSize: '18',
            show: false,
            position: 'top',
          },
        },
      },
      data: [70],
    },
  ],
};
