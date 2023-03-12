option = {
  title: {
    text: '数据延时'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '10%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01],
    name: "延时(s)",
    min: 0,
    max: 100
  },
  yAxis: {
    type: 'category',
    data: ['t1', 't2', 't3', 'weather', 'machine', 'ship'],
  },
  series: [
    {
      type: 'bar',
      data: [83, 85, 85, 93, 96, 100]
    }
  ]
};
