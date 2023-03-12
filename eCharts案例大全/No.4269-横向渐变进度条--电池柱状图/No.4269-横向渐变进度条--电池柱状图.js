var data = ['数据一', '数据二', '数据三'];
var value = [0.6, 0.95, 0.85];
var arr = new Array(value.length).fill(1);
option = {
 backgroundColor: '#000',
 grid: {
  top: '8%',
  left: '15%',
  right: '17.3%',
  bottom: '10%',
 },
 tooltip: { show: false },
 xAxis: {
  type: 'value',
  min: 0,
  max: 1,
  axisLine: { show: false },
  splitLine: { show: false },
  axisLabel: { show: false },
  axisTick: { show: false },
 },
 yAxis: {
  //show: false,
  type: 'category',
  inverse: true,
  splitLine: { show: false },
  axisLine: { show: false },
  axisLabel: {
   show: true,
   interval: 0,
   margin: 10,
   textStyle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
   },
  },
  axisTick: { show: false },
  data: data,
 },
 series: [
  {
   //渐变数据内容
   type: 'bar',
   barWidth: '34%',
   animationDuration: 2000,
   itemStyle: {
    normal: {
     borderWidth: 0,
     color: {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 1,
      y2: 0,
      colorStops: [
       {
        offset: 0,
        color: '#00a0e9',
       },
       {
        offset: 1,
        color: '#00ffff',
       },
      ],
     },
    },
   },
   label: {
    show: false,
   },
   data: value,
   z: 0,
  },
  {
   //背景柱状图
   type: 'bar',
   barWidth: '34%',
   barGap: '-100%',
   animation: false,
   itemStyle: {
    normal: {
     borderWidth: 0,
     color: 'rgba(0,202,255,0.2)',
    },
   },
   data: arr,
   z: 0,
  },

  {
   //辅助分割图形
   type: 'pictorialBar',
   barWidth: '34%',
   symbol: 'rect',
   // symbolRotate:"-20",
   symbolMargin: '200%', //控制分割图形的大小
   symbolSize: [4, '100%'],
   symbolRepeat: true,
   animation: false,
   itemStyle: {
    normal: {
     color: '#000',
    },
   },
   label: {
    normal: {
     color: '#fff',
     show: true,
     position: ['101%', '40%'],
     fontSize: 22,
     fontWeight: 'bold',
     formatter: function (params) {
      return ' ' + value[params.dataIndex] * 100 + '%';
     },
    },
   },
   data: arr,
   z: 1,
  },
 ],
};
