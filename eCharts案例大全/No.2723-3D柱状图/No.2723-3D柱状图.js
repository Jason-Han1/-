const xAxisData = ['ODS', 'DWD', 'ADS'];
const barData = [220, 182, 191];
const colors = [];
for (let i = 0; i < 3; i++) {
  colors.push({
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [
      { offset: 0, color: '#75a6fd' },
      { offset: 0.5, color: '#74a5fd' },
      { offset: 0.5, color: '#6099ff' },
      { offset: 1, color: '#5f98ff' },
    ],
  });
}
option = {
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'axis',
    formatter: '{b} : {c}',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {},
  xAxis: {
    data: xAxisData,
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      margin: 33,
      color: '#353d48',
      fontSize: 14,
    },
  },
  yAxis: {
    show: false,
  },
  series: [
    {
      type: 'bar',
      barWidth: 90,
      itemStyle: {
        color: function (params) {
          return colors[params.dataIndex % 7];
        },
      },
      label: {
        show: true,
        color: '#fff',
        fontSize: 14,
        position: 'insideBottom',
        offset: [0, -20],
      },
      data: barData,
    },
    {
      z: 3,
      type: 'pictorialBar',
      data: barData,
      symbol: 'diamond',
      symbolOffset: [0, '50%'],
      symbolSize: [90, 90 * 0.5],
      itemStyle: {
        color: function (params) {
          return colors[params.dataIndex % 7];
        },
      },
    },
    {
      z: 4,
      type: 'pictorialBar',
      data: barData,
      symbol: 'diamond',
      symbolPosition: 'end',
      symbolOffset: [0, '-50%'],
      symbolSize: [90, 90 * 0.5],
      itemStyle: {
        borderWidth: 0,
        color: 'rgb(79, 141, 253)',
      },
    },
  ],
};
