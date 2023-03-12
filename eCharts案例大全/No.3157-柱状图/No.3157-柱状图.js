var data1 = ['20', '30', '40', '20'];
var data2 = ['20', '30', '40', '20'];
var legendData = ['合同节点', '已完成节点'];
var xAxisData = ['国铁', '城轨', '检修', '海外'];
var colorArr = ['#FF9C98', '#3082FF', '#00C9D9', '#FEAF1B'];
var barWidth = 12;
option = {
 tooltip: {
  trigger: 'axis',
  axisPointer: {
   // 坐标轴指示器，坐标轴触发有效
   type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
  },
 },
 legend: {
  itemWidth: 10,
  itemHeight: 10,
  padding: [10, 20],
  backgroundColor: '#F9F9F9',
  borderRadius: 20,
  // 大小 和位置 文字样式
  itemGap: 8,
  x: 'center',
  top: 10,
  textStyle: {
   fontSize: 12,
   color: '#5D6C8E',
   fontFamily: 'PingFang',
  },
 },
 // 	年度完成率和季度完成率颜色
 color: colorArr,
 grid: {
  left: '3%',
  right: '4%',
  top: '10%',
  bottom: '3%',
  containLabel: true,
 },
 xAxis: [
  {
   type: 'category',
   axisLine: {
    lineStyle: {
     color: 'E6EAF3',
    },
   },
   axisLabel: {
    //坐标轴刻度标签的相关设置。
    interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
    margin: 15,
    textStyle: {
     color: '#4B525E',
     fontStyle: 'normal',
     fontSize: 12,
     fontFamily: 'PingFang',
    },
   },
   data: xAxisData,
  },
 ],
 yAxis: [
  {
   type: 'value',
   axisLabel: {
    //坐标轴刻度标签的相关设置。
    interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
    margin: 15,
    textStyle: {
     color: '#4B525E',
     fontStyle: 'normal',
     fontSize: 12,
     fontFamily: 'PingFang',
    },
   },
   axisLine: {
    lineStyle: {
     color: '#E6EAF3',
    },
   },
   splitLine: {
    show: false,
   },
  }
 ],
 series: [
  {
   name: legendData[0],
   type: 'bar',
   yAxisIndex: 0,
   barWidth: barWidth,
   itemStyle: {
    normal: {
     show: true,
     borderWidth: 0,
    },
   },
   data: data1,
  },
  {
   name: legendData[1],
   type: 'bar',
   yAxisIndex: 0,
   itemStyle: {
    normal: {
     show: true,
     borderWidth: 0,
    },
   },
   barWidth: barWidth,
   data: data2,
  }
 ],
};
