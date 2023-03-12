option = {
  backgroundColor: '#050c12',
  color: [
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 1,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#838632' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#fef335' // 100% 处的颜色
        }
      ],
      global: false // 缺省为 false
    },
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 1,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#33ceff' // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#156ea9' // 100% 处的颜色
        }
      ],
      global: false // 缺省为 false
    }
  ],
  grid: {
    left: '3%',
    right: '4%',
    bottom: '13%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'value',
      show: false
    }
  ],
  yAxis: [
    {
      show: true,
      type: 'category',
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 3,
          color: '#1dfffd'
        }
      },
      z: 3,
      data: ['Mon', 'Tue', 'Wed']
    }
  ],
  series: [
    {
      name: 'Income',
      type: 'bar',
      barGap: '-100%',
      barWidth: 40,
      label: {
        show: true,
        fontSize: 30,
        color: '#fff',
        position: ['80%', -40]
      },
      itemStyle: {
        barBorderRadius: [0, 4, 24, 0],
        borderWidth: 15,
        borderColor: 'rgba(0,0,0,0)'
      },
      data: [320, 302, 341]
    },
    {
      name: 'Expenses',
      type: 'bar',
      barGap: '-100%',
      barWidth: 40,
      label: {
        show: true,
        fontSize: 30,
        color: '#fff',
        position: ['8%', -40],
        formatter: (param) => {
          return param.value * -1;
        }
      },
      itemStyle: {
        barBorderRadius: [4, 0, 0, 24],
        borderWidth: 15,
        borderColor: 'rgba(0,0,0,0)'
      },
      data: [-320, -132, -101]
    },
    {
      name: 'Income',
      type: 'bar',
      barGap: '-100%',
      barWidth: 40,
      label: {
        show: false,
        position: ['95%', -20]
      },
      itemStyle: {
        barBorderRadius: [0, 4, 24, 0],
        borderWidth: 3,
        borderColor: '#2b9dcc',
        color: 'rgba(0,0,0,0)'
      },
      data: [600, 600, 600]
    },
    {
      name: 'Income',
      type: 'bar',
      barGap: '-100%',
      barWidth: 40,
      label: {
        show: false,
        position: ['95%', -20]
      },
      itemStyle: {
        barBorderRadius: [4, 0, 0, 24],
        borderWidth: 3,
        borderColor: '#2b9dcc',
        color: 'rgba(0,0,0,0)'
      },
      data: [-600, -600, -600]
    }
  ]
};
