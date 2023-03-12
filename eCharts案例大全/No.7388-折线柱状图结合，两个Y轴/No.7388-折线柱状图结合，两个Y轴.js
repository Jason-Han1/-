var data1 = ['50', '60', '30'];
var data2 = ['40', '60', '20'];
var data3 = ['30', '50', '10'];
option = {
 backgroundColor: '#fff',
 tooltip: {
  		axisPointer: {            // 坐标轴指示器，坐标轴触发有效
  			type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
  		}
 },
 // 	年度完成率和季度完成率颜色
 color: ['#071960', '#1740B4', '#1962CA', '#F87A0F', '#FF3574'],
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
     color: '#1B3F81',
    },
   },
   axisLabel: {
    //坐标轴刻度标签的相关设置。
    interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
    margin: 15,
    textStyle: {
     color: '#6B9DD7',
     fontStyle: 'normal',
     fontSize: 14,
    },
   },
   data: ['第一次', '第二次', '第三次'],
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
     color: '#6B9DD7',
     fontStyle: 'normal',
     fontFamily: '微软雅黑',
     fontSize: 14,
    },
   },
   axisLine: {
    lineStyle: {
     color: '#1B3F81',
    },
   },
   splitLine: {
    lineStyle: {
     color: '#1B3F81',
    },
   },
  }
 ],
 series: [
  {
   name: '年度指标',
   type: 'bar',
   yAxisIndex: 0,
   barWidth: '40px',
   itemStyle: {
    normal: {
     show: true,
     borderWidth: 0,
    },
   },
   data: data1,
  },
  {
   name: '季度指标',
   type: 'bar',
   yAxisIndex: 0,
   itemStyle: {
    normal: {
     show: true,
     borderWidth: 0,
    },
   },
   barWidth: '40px',
   data: data2,
  },
  {
   name: '完成值',
   type: 'bar',
   yAxisIndex: 0,
   barWidth: '40px',
   itemStyle: {
    normal: {
     show: true,
     borderWidth: 0,
    },
   },
   data: data3,
  }
 ],
};
