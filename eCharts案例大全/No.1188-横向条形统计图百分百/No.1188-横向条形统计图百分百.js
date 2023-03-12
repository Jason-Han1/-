var data = {
  area: ['换机前', '换机后'],
  legend: ['50元以下', '50~70元', '70元~90元', '90以上'],
  data: [
    [17.6, 22.5],
    [17.1, 19.5],
    [22.5, 40.5],
    [22.8, 17.5],
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

  legend: {
    textStyle: {
      fontSize: 12,
      color: '#999999',
    },
    itemGap: 30, // 垂直间距
    orient: 'vertical', // 垂直显示
    left: '80%',
    top: '10%',
    // y: 'top', // 延Y轴居中
    // x: 'right', // 居右显示
    data: data.legend,
  },
  grid: {
    left: '10%',
    right: '10',
    height: 300,
    width: '65%',
    top: '30',
    //   containLabel: true
  },
  xAxis: {
    type: 'value',
    max: 100,
    axisLabel: {
      color: '#999999',
      formatter: '{value} %',
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
    barWidth: '45%',
    label: {
      show: true,
      color: '#fff',
      align: 'center',
      formatter: '{c}%',
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
