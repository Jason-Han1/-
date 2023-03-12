option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
    },
  },
  legend: {},
  //两个不同的布局
  grid: [
    {
      left: 50,
      right: 50,
      top: 50,
      height: '40%',
    },
    {
      left: 50,
      right: 50,
      top: 300,
      height: '35%',
    },
  ],
  xAxis: [
    {
      type: 'value',
      position: 'top',
    },
    {
      type: 'value',
      gridIndex: 1,
    },
  ],
  yAxis: [
    {
      type: 'category',
      data: ['Mon'],
      position: 'left',
    },
    {
      type: 'category',
      data: ['Tue'],

      gridIndex: 1,
      position: 'left',
    },
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      stack: 'total',
      barWidth: 15,
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      data: [1],
    },
    {
      name: 'Mail Ad',
      type: 'bar',
      barWidth: 15,
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      data: [1],
    },
    {
      name: 'Direct',
      type: 'bar',
      stack: 'total1',
      barWidth: 15,
      xAxisIndex: 1,
      yAxisIndex: 1,
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      data: [1],
    },
    {
      name: 'Mail Ad',
      type: 'bar',
      stack: 'total1',
      barWidth: 15,
      xAxisIndex: 1,
      yAxisIndex: 1,
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      data: [1],
    },
  ],
};
