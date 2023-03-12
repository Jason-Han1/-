option = {
  grid: { top: 40, left: 50, right: 10, bottom: 60 },
  xAxis: {
    type: 'category',
    data: ['超期事项', '计划内事项', '待办事项'],
    show: false,
    splitLine: { show: true, lineStyle: { type: 'solid' } },
    axisLine: { lineStyle: { color: '#D9D9D9' } },
    axisLabel: { color: '#666' },
    boundaryGap: true
  },
  yAxis: {
    type: 'value',
    show: false,
    splitLine: { show: true, lineStyle: { type: 'solid' } },
    axisLine: { lineStyle: { color: '#D9D9D9' } },
    axisLabel: { textStyle: { color: '#666' } },
    boundaryGap: true
  },
  series: [
    {
      name: '数据',
      type: 'pie',
      data: [
        {
          name: '超期事项',
          key: 'value',
          value: 2,
          itemStyle: { color: '#FFCA00' },
          emphasis: { itemStyle: { color: '#FFCA00' } }
        },
        {
          name: '计划内事项',
          key: 'value',
          value: 0,
          itemStyle: { color: '#F0F2F5' },
          emphasis: { itemStyle: { color: '#F0F2F5' } }
        }
      ],
      itemStyle: {},
      symbol: 'circle',
      radius: ['60%', '80%'],
      label: { show: false },
      hoverAnimation: false
    }
  ],
  legend: { show: false },
  tooltip: { trigger: 'item', padding: [10, 16] },
  title: {
    name: 'pie-title',
    text: '超期事项',
    subtext: '2',
    left: 'center',
    top: '35%',
    textStyle: { color: '#666', fontSize: 14, fontWeight: 400 },
    subtextStyle: { color: '#333', fontSize: 30, fontWeight: 500 }
  }
};
