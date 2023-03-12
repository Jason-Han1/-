var data = ['唐山', '张家口', '秦皇岛', '承德', '廊坊', '送变电', '检修'];
var value = [40, 80,60,20,30,40,80];
var arr = new Array(value.length).fill(100);
option = {
 backgroundColor: '#FFF',

 xAxis: {
  data: data,
  position: 'bottom',
  type: 'category',
  axisLine: {
   show: true,
   lineStyle: {
    color: '#ECF1F6',
   },
  },
  axisTick: {
   show: false,
  },
  axisLabel: {
   show: true,
   rotate: 0,
   fontSize: 12,
   color: '#3A3A3C',
  },
  splitLine: {
   show: true,
   lineStyle: {
    color: ['#ECF1F6', '#ECF1F6'],
    width: 0,
    type: 'dashed',
   },
  },
  gridIndex: 0,
 },
 yAxis: {
  axisLine: {
   show: false,
  },
  axisTick: {
   show: false,
  },
  axisLabel: {
   show: true,
   rotate: 0,
   fontSize: 12,
   color: '#6E7D9C',
  },
  splitLine: {
   show: true,
   lineStyle: {
    color: ['#ECF1F6', '#ECF1F6'],
    width: 1,
    type: 'dashed',
   },
  },
 },
 series: [
  {
   //背景柱状图
   type: 'bar',
   barWidth: '10',
   barGap: '-100%',
   animation: false,
   itemStyle: {
    normal: {
     borderWidth: 0,
     barBorderRadius: [8, 8, 0, 0],
     color: '#faa537',
    },
   },
   data: value,
   z: 0,
  },

  {
   //辅助分割图形
  
   type: 'pictorialBar',
   barWidth: '112%',
   symbol: 'rect',
   symbolRotate: '-30', //倾斜度
   symbolMargin: '80%', //控制分割图形的大小
   symbolSize: ['100%', 4],
   symbolRepeat: true,
   animation: false,
   itemStyle: {
    normal: {
     barBorderRadius: [10, 10, 0, 0],
     color: '#FFF',
    },
   },
   label: {
    normal: {
     color: '#fff',
     show: true,
     position: ['100%', '45%'],
     fontSize: 22,
     fontWeight: 'bold',
     show:false
    },
   },
   data: arr,
   z: 1,
  },
 ],
};
