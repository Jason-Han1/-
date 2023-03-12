option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        alignWithLabel: true,
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: '直接访问',
      type: 'bar',
      barWidth: '60%',
      label: {
        show: true,
        position: 'top',
        fontSize: 20
      },
      data: [
        ['Mon', 2],
        {
          value: ['Tue', 20],
          itemStyle: {
            color: 'red',
          },
        },
        ['Fri', 10],
        ['Sat', 3304],
        ['Sun', 2200],
      ],
    },
  ],
};
myChart.on('click', (params) => {
  const { dataIndex } = params
  console.log('点击', dataIndex, params)
})