// Generate data
var category = [];
var dottedBase = +new Date();
var lineData = [];
var barData = [];
for (let i = 0; i < 20; i++) {
  let date = new Date((dottedBase += 3600 * 24 * 1000));
  category.push([date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-'));
  let b = Math.random() * 200;
  let d = Math.random() * 200;
  barData.push(b);
  lineData.push(d + b);
}
// option
option = {
  backgroundColor: '#0f3958',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  xAxis: {
    data: category,
    axisLine: {
      lineStyle: {
        color: '#ccc',
      },
    },
  },
  yAxis: {
    splitLine: { show: false },
    axisLine: {
      lineStyle: {
        color: '#ccc',
      },
    },
  },
  series: [
    {
      name: 'bar',
      type: 'bar',
      barWidth: 10,
      itemStyle: {
        borderRadius: 5,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#14c8d4' },
          { offset: 1, color: '#43eec6' },
        ]),
      },
      data: barData,
    },
    {
      name: 'dotted',
      type: 'pictorialBar',
      symbol: 'rect',
      barGap: '-100%',
      barWidth: 10,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(20,200,212,0.5)' },
          { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
          { offset: 1, color: 'rgba(20,200,212,0)' },
        ]),
      },
      symbolRepeat: true,
      symbolSize: [12, 4],
      symbolMargin: 1,
      z: -12,
      data: lineData,
    },
  ],
};
