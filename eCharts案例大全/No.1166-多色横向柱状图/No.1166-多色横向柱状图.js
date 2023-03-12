var data = {
  area: ['实际完成数', '理论完成数', '计划完成数'],
  legend: ['完成数'],
  data: [
    [
      { value: 17.6, itemStyle: { color: '#4cd1c3' } },
      { value: 22, itemStyle: { color: '#5179ff' } },
      { value: 67, itemStyle: { color: '#fda124' } },
    ],
  ],
};
var colors = ['#5179ff', '#4cd1c3', '#33b4ff', '#fda124'];
var attackSourcesColor = [
  new echarts.graphic.LinearGradient(0, 1, 1, 1, [
    {
      offset: 0,
      color: '#7d9bff',
    },
    {
      offset: 1,
      color: '#5179ff',
    },
  ]),
  new echarts.graphic.LinearGradient(0, 1, 1, 1, [
    {
      offset: 0,
      color: '#6fe1d5',
    },
    {
      offset: 1,
      color: '#4cd1c3',
    },
  ]),
  new echarts.graphic.LinearGradient(0, 1, 1, 1, [
    {
      offset: 0,
      color: '#56d1ff',
    },
    {
      offset: 1,
      color: '#33b4ff',
    },
  ]),
  new echarts.graphic.LinearGradient(0, 1, 1, 1, [
    {
      offset: 0,
      color: '#ffd55e',
    },
    {
      offset: 1,
      color: '#fda124',
    },
  ]),
];
// 多维数组重组
const newdata = data.data;
var option = {
  color: colors,
  grid: {
    left: '20%',
    right: '10',
    height: 300,
    width: '65%',
    top: '30',
    //   containLabel: true
  },
  xAxis: {
    type: 'value',
    // max: 100,
    axisLabel: {
      color: '#999999',
      formatter: '{value} ',
    },
    axisLine: {
      lineStyle: {
        color: '#999999',
      },
      width: 5,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed', // 分割线
        color: '#cccccc',
      },
    },
  },
  yAxis: {
    type: 'category',
    axisLabel: {
      color: '#cccccc',
      fontSize:19
    },
    axisLine: {
      lineStyle: {
        color: '#cccccc',
      },
      width: 2,
    },
    data: data.area,
  },
  series: [],
};
for (var i = 0; i < data.legend.length; i++) {
  option.series.push({
    name: data.legend[i],
    color: attackSourcesColor[i],
    type: 'bar',
    stack: '总量',
    barWidth: '80%',
    label: {
      show: true,
      color: '#fff',
      align: 'center',
      formatter: '{c}',
      fontSize: 18,
    },
    itemStyle: {
      // 柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
      normal: {
        // 柱形图圆角，初始化效果
        barBorderRadius: 5,
        borderWidth: 2,
        borderColor: '#fff',
      },
    },
    data: newdata[i],
  });
}
option;
