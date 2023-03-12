option = {
  legend: {},
  xAxis: {
    data: ['供应商A', '供应商B', '供应商C', '供应商D', '供应商E'],
  },
  yAxis: {
    min: 0,
    max: 100,
    interval: 25,
    gridIndex: 0,
  },
  series: [
    {
      name: '专家A',
      type: 'line',
      data: [30, 72, 71, 54, 30],
    },
    {
      name: '平均分',
      type: 'line',
      lineStyle: {
        type: 'dashed'
      },
      data: [20, 67, 41, 74, 60],
    },
  ],
};
