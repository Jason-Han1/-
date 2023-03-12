option = {
  series: [{
    type: 'gauge',
    min: 0,
    max: 100,
    splitNumber: 10,
    axisLabel: {
      color: 'rgba(146, 179, 207, 1)',
    },
    axisLine: {
      lineStyle: {
        width: 10,
        color: [[0.6, 'rgba(129, 201, 38, 0.5)'], [0.8, 'rgba(129, 201, 38, 0.7)'], [1, 'rgba(129, 201, 38, 1)']]
      }
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(146, 179, 207, 0.5)',
      },
    },
    axisTick: {
      show: false
    },
    pointer: { // 分隔线
      shadowColor: 'auto',
      //默认透明
      shadowBlur: 10,
      length: '50%',
      width: 2
    },
    itemStyle: {
      color: 'rgba(129, 201, 38, 1)',
      borderColor: 'rgba(129, 201, 38, 1)',
      borderWidth: 2
    },
    anchor: {
      show: true,
      showAbove: true,
      size: 25,
      itemStyle: {
        borderWidth: 5,
        borderColor: 'rgba(129, 201, 38, 1)'
      }
    },
    detail: {
      formatter: '{value} %',
    },
    data: [{
      value: 50,
      title: {
        color: '#464646',
        // 标题颜色
      },
      detail: {
        color: '#464646',
        // 数据详情颜色
        offsetCenter: ['0%', '70%'],
      },
    },
    ],
  },
  ],
};