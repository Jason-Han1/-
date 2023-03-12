var option = {
 tooltip: {
  //提示框组件
  trigger: 'axis',
  formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
  axisPointer: {
   type: 'shadow',
   label: {
    backgroundColor: '#6a7985',
   },
  },
  tooltip: {
        trigger: "axis",
        axisPointer: {
          //type: "shadow",
          textStyle: {
            color: "#fff"
          }
        },

      },
  textStyle: {
   color: '#fff',
   fontStyle: 'normal',
   fontFamily: '微软雅黑',
   fontSize: 12,
  },
 },
 grid: {
  left: '1%',
  right: '4%',
  bottom: '6%',
  top: 30,
  padding: '0 0 10 0',
  containLabel: true,
 },
 legend: {
  //图例组件，颜色和名字
  right: 10,
  top: 0,
  itemGap: 16,
  itemWidth: 18,
  itemHeight: 10,
  data: [
   {
    name: '流入',
    //icon:'image://../wwwroot/js/url2.png', //路径
   },
   {
    name: '流出',
   },
  ],
  textStyle: {
   color: '#a8aab0',
   fontStyle: 'normal',
   fontFamily: '微软雅黑',
   fontSize: 12,
  },
 },
 xAxis: [
  {
   type: 'category',
   boundaryGap: true, //坐标轴两边留白
   data: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '17:00', '8:00'],
   axisLabel: {
    //坐标轴刻度标签的相关设置。
    interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
    margin: 15,
    textStyle: {
     color: '#078ceb',
     fontStyle: 'normal',
     fontFamily: '微软雅黑',
     fontSize: 12,
    },
   },
   axisTick: {
    //坐标轴刻度相关设置。
    show: false,
   },
   axisLine: {
    //坐标轴轴线相关设置
    lineStyle: {
     color: '#fff',
     opacity: 0.2,
    },
   },
   splitLine: {
    //坐标轴在 grid 区域中的分隔线。
    show: false,
   },
  },
 ],
 yAxis: [
  {
   type: 'value',
   splitNumber: 5,
   axisLabel: {
    textStyle: {
     color: '#a8aab0',
     fontStyle: 'normal',
     fontFamily: '微软雅黑',
     fontSize: 12,
    },
   },
   axisLine: {
    show: false,
   },
   axisTick: {
    show: false,
   },
   splitLine: {
    show: true,
    lineStyle: {
     color: ['#fff'],
     opacity: 0.06,
    },
   },
  },
 ],
 series: [
  {
   name: '牛',
   type: 'pictorialBar', //设置类型为象形柱状图
   symbol: 'roundRect', //图形类型，带圆角的矩形
   symbolOffset: [-5, 0],
   symbolMargin: '1', //图形垂直间隔
   barWidth: '10%', //柱图宽度
   barMaxWidth: '20%', //最大宽度
   animationDelay: (dataIndex, params) => {
    //每个图形动画持续时间
    return params.index * 50;
   },
   itemStyle: {
    normal: {
     color: (params) => {
      //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
      return new echarts.graphic.LinearGradient(0, 0, 1, 1, [
       {
        offset: 0,
        color: '#00C0FE',
       },
       {
        offset: 1,
        color: '#0F87FA',
       },
      ]);
     },
    },
   },
   z: 1,
   barGap: 0, //柱间距离
   symbolRepeat: true, //图形是否重复
   symbolSize: [14, 5], //图形元素的尺寸
   data: [9, 5, 4, 2, 9, 5, 4, 2, 10, 5],
   animationEasing: 'elasticOut', //动画效果
   stack: '2',
  },
  {
   name: '羊',
   type: 'pictorialBar', //设置类型为象形柱状图
   symbol: 'roundRect', //图形类型，带圆角的矩形
   barWidth: '10%', //柱图宽度
   symbolOffset: [5, 0],
   barMaxWidth: '20%', //最大宽度
   symbolMargin: '1', //图形垂直间隔
   animationDelay: (dataIndex, params) => {
    //每个图形动画持续时间
    return params.index * 50;
   },
   itemStyle: {
    normal: {
     color: (params) => {
      //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
      return new echarts.graphic.LinearGradient(0, 0, 1, 1, [
       {
        offset: 0,
        color: '#FEDB65',
       },
       {
        offset: 1,
        color: '#FF8B31',
       },
      ]);
     },
    },
   },
   z: 1,
   barGap: 0, //柱间距离
   symbolRepeat: true, //图形是否重复
   symbolSize: [14, 5], //图形元素的尺寸
   data: [2.9, 5, 4.4, 2.7, 5.7, 9, 5, 4, 2, 4, 1],
   animationEasing: 'elasticOut', //动画效果
   stack: '1',
  },
 ],
};
