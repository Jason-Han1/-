option = {
 tooltip: {
  trigger: 'axis',
 },
 legend: {
  data: ['在线车辆', '车辆行驶告警','驾驶员驾驶告警'],
 },
 grid: {
  left: '3%',
  right: '4%',
  bottom: '3%',
  containLabel: true,
 },
 xAxis: {
  type: 'category',
  boundaryGap: false, //坐标轴两边留白
  data: ['12201', '12202', '12203', '12204', '12301', '12302', '12303', '12304', '12401', '12402', '12403', '12404'],
  axisLabel: {
   //坐标轴刻度标签的相关设置。
   interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
   //	margin:15,
   textStyle: {
    color: '#1B253A',
    fontStyle: 'normal',
    fontFamily: '微软雅黑',
    fontSize: 12,
   },
  },
  axisTick: {
   show: false,
  },
  axisLine: {
   lineStyle: {
    color: '#E5E9ED',
    // opacity:0.2
   },
  },
  splitLine: {
   show: false,
  },
 },
 yAxis: [
  {
   type: 'value',
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
     color: '#E5E9ED',
     // 	opacity:0.1
    },
   },
  },
 ],
 series: [
  {
   name: '在线车辆',
   type: 'line',
   itemStyle: {
    normal: {
     color: '#1EE882',
     lineStyle: {
      color: '#1EE882',
      width: 1,
     },
     areaStyle: {
      color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
       {
        offset: 0,
        color: 'rgba(30,232,130,0)',
       },
       {
        offset: 1,
        color: 'rgba(30,232,130,0.5)',
       },
      ]),
     },
    },
   },
   data: [1, 2, 3, 3, 5, 6, 5, 3, 6, 5, 5, 4],
  },
  {
   name: '车辆行驶告警',
   type: 'line',
   itemStyle: {
    normal: {
     color: 'rgba(253,222,9,1)',
     lineStyle: {
      color: 'rgba(253,222,9,1)',
      width: 1,
     },
     areaStyle: {
      color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
       {
        offset: 0,
        color: 'rgba(253,222,9,0)',
       },
       {
        offset: 1,
        color: 'rgba(253,222,9,0.5)',
       },
      ]),
     },
    },
   },
   data: [9, 5, 7, 8, 6, 7, 8, 7, 7, 6, 8, 6],
  },
  {
   name: '驾驶员驾驶告警',
   type: 'line',
   itemStyle: {
    normal: {
     color: 'rgba(250,34,71,1)',
     lineStyle: {
      color: 'rgba(250,34,71,1)',
      width: 1,
     },
     areaStyle: {
      color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
       {
        offset: 0,
        color: 'rgba(250,34,71,0)',
       },
       {
        offset: 1,
        color: 'rgba(250,34,71,0.5)',
       },
      ]),
     },
    },
   },
   data: [10, 2, 8, 22, 5, 3, 5, 9, 2, 6, 3, 6],
  },
 ],
};
