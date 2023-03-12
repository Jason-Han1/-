option = {
  title: {
    text: '上下双柱状图',
  },
  tooltip: {
    show: true,
  },
  grid: [
    {
      show: false,
      top: '10%',
      bottom: '8%',
      containLabel: true,
      height: '37%',
    },
    {
      show: false,
      top: '51%',
      bottom: '8%',
      height: '0%',
    },
    {
      show: false,
      bottom: '8%',
      containLabel: true,
      height: '37%',
    },
  ],
  xAxis: [
    {
      type: 'category',
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    {
      gridIndex: 1,
      data: ['2011', '2012', '2013', '2014', '2015'],
    },
    {
      gridIndex: 2,
      type: 'category',
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
    {
      gridIndex: 1,
      type: 'category',
      inverse: true,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    {
      gridIndex: 2,
      type: 'value',
      inverse: true,
    },
  ],
  series: [
    {
      name: '数据1',
      type: 'bar',
      barWidth: 25,
      stack: '1',
      data: [10, 20, 30, 40, 50],
    },
    {
      name: '数据1',
      type: 'bar',
      barWidth: 25,
      stack: '1',
      data: [],
    },
    {
      name: '数据2',
      type: 'bar',
      xAxisIndex: 2,
      yAxisIndex: 2,
      barWidth: 25,
      stack: '2',
      data: [10, 20, 30, 40, 50],
    },
  ],
};
