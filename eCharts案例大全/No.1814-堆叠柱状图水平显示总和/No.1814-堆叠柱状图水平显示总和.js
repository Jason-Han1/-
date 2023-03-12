option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none',
    },
    formatter(param) {
      param.pop();

      console.log(param);
      return param;
    },
  },
  xAxis: {
    axisLine: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
    splitLine: {
      show: false,
    },
  },
  yAxis: {
    type: 'category',

    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisLabel: {
      color: '#555',
      margin: 24,
    },

    data: ['AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF', 'JJJ'],
  },
  series: [
    {
      type: 'bar',
      stack: 'total',
      barWidth: 26,
      data: [20, 182, 191, 234, 290, 330, 310],
    },
    {
      type: 'bar',
      stack: 'total',
      barWidth: 26,
      data: [120, 182, 191, 234, 290, 330, 310],
    },
    {
      type: 'bar',
      stack: 'total',
      barWidth: 26,
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      type: 'bar',
      stack: 'total',
      barWidth: 26,
      data: [320, 182, 191, 234, 290, 330, 310],
    },
    {
      type: 'bar',
      stack: 'total',
      barWidth: 26,
      data: [420, 182, 191, 234, 290, 330, 310],
    },

    // total
    {
      type: 'bar',
      zlevel: -1,
      barWidth: 26,
      barGap: '-100%',
      label: {
        show: true,
        position: 'right',
        distance: 8,
      },
      itemStyle: {
        color: 'transparent',
      },
      emphasis: {
        itemStyle: {
          borderWidth: 4,
          borderColor: '#fff',
          shadowColor: '#5448F2',
          shadowBlur: 8,
        },
      },
      data: [1100, 910, 955, 1170, 1450, 1650, 1550],
    },
  ],
};
