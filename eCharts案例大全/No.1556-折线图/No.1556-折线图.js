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
  trigger: 'item',
 },
 legend: {
  show: true,
  x: 'center',
  y: '35',

  icon: 'stack',
  itemWidth: 10,
  itemHeight: 10,
  textStyle: {
   color: '#1bb4f6',
  },
 },
 xAxis: [
  {
   name: '月份',
   type: 'category',
   boundaryGap: false,
   axisLabel: {
    color: '#fff',
   },
   axisLine: {
    show: true,
    lineStyle: {
     color: '#fff',
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
   data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  },
 ],
 yAxis: [
  {
   type: 'value',
   name: '数量',

   axisLabel: {
    formatter: '{value}',
    textStyle: {
     color: '#fff',
    },
   },
   axisLine: {
    show: true,
    lineStyle: {
     color: '#fff',
    },
   },
   axisTick: {
    show: false,
   },
   splitLine: {
    show: true,
    lineStyle: {
     color: '#fff',
    },
   },
  },
 ],
 series: [
  {
   type: 'line',
   stack: '总量',
   symbol: 'circle',
   symbolSize: 8,
   itemStyle: {
    normal: {
     color: '#0092f6',
     lineStyle: {
      color: '#0092f6',
      width: 1,
     },
     areaStyle: {
      //color: '#94C9EC'
      color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
       {
        offset: 0,
        color: 'rgba(7,44,90,0.3)',
       },
       {
        offset: 1,
        color: 'rgba(0,146,246,0.9)',
       },
      ]),
     },
    },
   },
   markPoint: {
    itemStyle: {
     normal: {
      color: 'red',
     },
    },
   },
   data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330],
  },
 ],
};
