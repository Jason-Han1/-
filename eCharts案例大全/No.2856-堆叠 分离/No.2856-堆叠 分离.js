let chartData = [
  ['product', 'CB-Loan', 'PB-Loan', 'Other-Loan', 'CB-Deposit', 'PB-Deposit', 'Other-Deposit'],
  ['Last Year', 120, 132, 101, 134, 90, 230, 210],
  ['Last M', 120, 132, 101, 134, 90, 230, 210],
  ['Yesterday', 220, 182, 191, 234, 290, 330, 310],
  ['Today', 220, 182, 191, 234, 290, 330, 310],
  ['Budget', 220, 182, 191, 234, 290, 330, 310],
];

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
    },
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  yAxis: {
    type: 'value',
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: true,
      axisLabel: {
        interval: 0,
      },
      axisLine: {
        show: true,
      },
      axisTick: {
        show: false,
      },
    },
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
      splitArea: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
  ],
  dataset: {
    source: chartData,
  },
  series: [
    {
      xAxisIndex: 0,
      type: 'bar',
      barWidth: '30%',
      stack: 'total',
      label: {
        show: true,
      },
    },
    {
      xAxisIndex: 0,
      type: 'bar',
      barWidth: '30%',
      stack: 'total',
      label: {
        show: true,
      },
    },
    {
      xAxisIndex: 0,
      type: 'bar',
      barWidth: '30%',
      stack: 'total',
      label: {
        show: true,
      },
    },
    {
      xAxisIndex: 1,
      barGap: '-200%',
      type: 'bar',
      barWidth: '30%',
      stack: 'total2',
      label: {
        show: true,
      },
    },
    {
      xAxisIndex: 1,
      barGap: '-200%',
      type: 'bar',
      barWidth: '30%',
      stack: 'total2',
      label: {
        show: true,
      },
    },
    {
      xAxisIndex: 1,
      barGap: '-200%',
      type: 'bar',
      barWidth: '30%',
      stack: 'total2',
      label: {
        show: true,
      },
    },
    {
      xAxisIndex: 0,
      type: 'bar',
      barWidth: '30%',
      data: [],
    },
    {
      xAxisIndex: 1,
      type: 'bar',
      barWidth: '30%',
      data: [],
    },
  ],
};
