
option = {
 backgroundColor: '#11183c',
 grid: {
  left: '5%',
  right: '10%',
  top: '20%',
  bottom: '15%',
  containLabel: true,
 },
 tooltip: {
  show: true,
  trigger: 'axis',
  backgroundColor: 'rgba(40,84,151, .9)',
  textStyle:{
    color:'#fff'
  },
  borderColor:'transparent',
  // formatter: '{b0}{a0}<br />{c0}<br />{b1}{a1}<br />{c1}<br />{b2}{a2}<br />{c2}',
  formatter: function (params) {
   let tip=''
   for(var i=0;i<params.length;i++){
     tip+= '<div style="display:inline-block;width:10px;height:10px;border-radius:20px;background-color:'+params[i].color+' ">'+'</div>'
     +'&nbsp;'+params[i].name+params[i].seriesName+'<br/>'+'&nbsp;&nbsp;&nbsp;'+
     '<span style="color:'+params[i].color+'">'+params[i].value+'%'+'</span>'
     +'<br/>'
   }
   return tip
     
  }
 },
 legend: {
  show: true,
  x: '63%',
  y: '12%',
  icon: 'circle',
  itemWidth: 8,
  itemHeight: 8,
  textStyle: {
   color: '#fff',
   fontSize:'16px',
  },
  itemGap:30,
  data: ['满意度', '实现率', '网办率'],
 },
 xAxis: [
  {
   type: 'category',
   boundaryGap: false,
   axisLabel: {
    fontSize:'16px',
    color: '#fff',
   },
   axisLine: {
    show: false,
    lineStyle: {
     color: '#397cbc',
    },
   },
   axisTick: {
    show: false,
   },
   splitLine: {
    show: false,
    lineStyle: {
     color: '#195384',
    },
   },
   data: ['1月', '2月', '3月', '4月', '5月', '6月'],
  },
 ],
 yAxis: [
  {
   type: 'value',
   // name: '信息量',
   min: 0,
   max: 100,
   axisLabel: {
    formatter: '{value}',
    textStyle: {
     fontSize:'16px',
     color: '#fff',
    },
   },
   axisLine: {
    show: false,
    lineStyle: {
     color: '#27b4c2',
    },
   },
   axisTick: {
    show: false,
   },
   splitLine: {
    show: true,
    lineStyle: {
     type:'dashe',
     color: '#11366e',
    },
   },
  },
  {
   type: 'value',
   // name: '浏览量',
   min: 0,
   max: 100,
   axisLabel: {
    formatter: '{value} ',
    textStyle: {
     fontSize:'16px',
     color: '#fff',
    },
   },
   axisLine: {
    show: false,
    lineStyle: {
     color: '#186afe',
    },
   },
   axisTick: {
    show: false,
   },
   splitLine: {
    show: false,
    lineStyle: {
     color: '#11366e',
    },
   },
  },
 ],
 series: [
  {
   name: '满意度',
   type: 'line',
   // stack: '总量',
   symbol: 'circle',
   symbolSize: 8,
   itemStyle: {
    normal: {
     color: '#FFD336',
     lineStyle: {
      color: '#FFD336',
      width: 1,
     },
    },
   },
   
   data: [96.5, 96.1, 98.6,96.3, 94.2, 98.8],
  },
  {
   name: '实现率',
   type: 'line',
   // stack: '总量',
   symbol: 'circle',
   symbolSize: 8,
   itemStyle: {
    normal: {
     color: '#4AC0F8',
     lineStyle: {
      color: '#4AC0F8',
      width: 1,
     },
    },
   },
   data: [84.3, 76.9, 82.1,67.5, 76.5, 78.6],
  },
  {
   name: '网办率',
   type: 'line',
   // stack: '总量',
   symbol: 'circle',
   symbolSize: 8,
   itemStyle: {
    normal: {
     color: '#E83A7E',
     lineStyle: {
      color: '#E83A7E',
      width: 1,
     },
    },
   },
   data: [35.1, 43.2, 26.3, 43.5, 21.3, 28.6],
  },
 ],
};
