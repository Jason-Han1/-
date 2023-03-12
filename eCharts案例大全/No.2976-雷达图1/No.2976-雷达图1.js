option = {
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '15%',
    containLabel: true,
  },
  tooltip: {},
  dataset: {},
  radar: {
    // shape: 'circle',
    name: {
      textStyle: {
        color: '#9B9B9B',
        fontSize: 10,
      },
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(255,255,255,.2)',
      },
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(255,255,255,.2)',
      },
    },
    splitArea: {
      areaStyle: {
        color: ['rgba(1, 15, 49, 0.86)'],
      },
    },
    indicator: [
      { name: '上学', max: 200 },
      { name: '上班', max: 200 },
      { name: '购物', max: 200 },
      { name: '娱乐休闲', max: 200 },
      { name: '看病', max: 200 },
    ],
  },
  series: [
    {
      type: 'radar',
      symbol: 'none',
      data: [
        {
          value: [100, 50, 20, 100, 30],
          name: '出行目的',
        },
      ],
      itemStyle: {
        color: '',
        show: false,
      },
      lineStyle: {
        color: '#44FFFD',
      },
      areaStyle: {
        color: 'rgba(68, 255, 253, 0.3)',
      },
    },
  ],
};
