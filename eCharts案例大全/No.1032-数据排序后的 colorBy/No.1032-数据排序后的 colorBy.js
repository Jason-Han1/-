const dataset = {
  dimensions: ['name', 'score'],
  source: [
    ['Hannah Krause', 314],
    ['Zhao Qian', 351],
  ]
};
const pieOption = {
  // dataset: [dataset],
  // 顺序排序数据
  dataset: [dataset].concat({
    transform: {
      type: 'sort',
      config: { dimension: 'score', order: 'desc' },
    },
  }),
  series: [
    {
      type: 'pie',
      // 通过 id 关联需要过渡动画的系列
      id: 'Score',
      radius: [0, '50%'],
      universalTransition: true,
      animationDurationUpdate: 1000,
      // 取排序后的数据
      datasetIndex: 1,
    }
  ]
};
const barOption = {
  dataset: [dataset],
  xAxis: {
    type: 'category'
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      // 通过 id 关联需要过渡动画的系列
      id: 'Score',
      // 每个数据都是用不同的颜色
      colorBy: 'data',
      encode: { x: 'name', y: 'score' },
      universalTransition: true,
      animationDurationUpdate: 1000
    }
  ]
};

option = barOption;

setInterval(() => {
  option = option === pieOption ? barOption : pieOption;
  // 使用 notMerge 的形式可以移除坐标轴
  myChart.setOption(option, true);
}, 2000);