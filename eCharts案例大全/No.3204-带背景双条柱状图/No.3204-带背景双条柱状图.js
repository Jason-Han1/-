option = {
 backgroundColor: 'rgba(19, 52, 89, .5)',
 title: {
  left: 'left',
  textStyle: {
   color: '#FFFFFF',
   fontSize: '14',
  },
 },
 tooltip: {
  trigger: 'axis',
  axisPointer: {
   type: 'shadow',
  },
  backgroundColor: 'rgba(9, 24, 48, 0.5)',
  borderColor: 'rgba(75, 253, 238, 0.4)',
  textStyle: {
   color: '#CFE3FC',
  },
  borderWidth: 1,
  formatter: function (params) {
   var str = '';
   for (let i = 0; i < params.length; i++) {
    if (i == 0) {
     str += `${params[i].name}<br/>${params[i].seriesName.slice(
      0,
      params[i].seriesName.indexOf('(')
     )}<br/><span>${params[0].data}</span>亿元<br/>`;
     continue;
    }
    str += `${params[i].seriesName.slice(
     0,
     params[i].seriesName.indexOf('(')
    )}<br/><span>${params[i].data}</span>人<br/>`;
   }
   return str;
  },
 },
 legend: [
  {
   data: ['纳税总额(亿元)'],
   top: '25',
   x: '50%',
   itemWidth: 14,
   borderColor: 'rgba(255, 192, 0, 1)',
   textStyle: {
    color: '#c1cadf',
    fontSize: 20,
   },
  },
  {
   data: ['用工人数(人)'],
   top: '25',
   x: '75%',
   itemWidth: 14,
   textStyle: {
    color: '#c1cadf',
    fontSize: 20,
   },
  },
 ],
 grid: {
  left: '30px',
  right: '30px',
  top: '80px',
  bottom: '30px',
  containLabel: true,
 },
 toolbox: {
  show: true,
  orient: 'vertical',
  x: 'right',
  y: 'center',
 },
 xAxis: [
  {
   type: 'category',
   boundaryGap: true,
   axisTick: {
    show: false,
   },
   data: ['顺义区', '房山区', '朝阳区', '大兴区', '海淀区', '昌平区', '西城区', '东城区', '丰台区'],
   axisLine: {
    lineStyle: {
     color: 'rgba(51, 176, 255, 1)',
    },
   },
   axisLabel: {
    interval: 0,
    color: 'rgba(207, 227, 252, 1)',
   },
  },
 ],
 yAxis: [
  {
   type: 'value',
   axisTick: {
    show: false,
   },
   axisLine: {
    lineStyle: {
     color: 'transparent',
    },
   },
   max: 102,
   axisLabel: {
    interval: 0,
    color: 'rgba(207, 227, 252, 1)',
    formatter: '',
   },
   splitLine: {
    show: false,
    lineStyle: {
     color: 'rgba(39, 57, 75, 1)',
     width: 1,
     type: 'solid',
    },
   },
  },
  {
   type: 'value',
   axisTick: {
    show: false,
   },

   axisLine: {
    lineStyle: {
     color: 'rgba(207, 227, 252, 1)t',
    },
   },
   min: 0,
   max: 102,
   axisLabel: {
    interval: 0,
    color: 'rgba(207, 227, 252, 1)',
    formatter: '',
   },
   splitLine: {
    show: false,
    lineStyle: {
     color: 'transparent',
     width: 1,
     type: 'solid',
    },
   },
  },
 ],
 series: [
  {
   type: 'bar',
   yAxisIndex: 0,
   zlevel: 0,
   name: '纳税总额(亿元)',
   showBackground: true,
   backgroundStyle: {
    color: 'rgba(22, 100, 105, .3)',
   },
   itemStyle: {
    normal: {
     color: new echarts.graphic.LinearGradient(
      0,
      0,
      0,
      1,
      [
       {
        offset: 0,
        color: 'rgba(0, 207, 201, 1)',
       },
       {
        offset: 1,
        color: 'rgba(0, 207, 201, 0.12)',
       },
      ],
      false
     ),
    },
   },
   barWidth: 24,
   data: [12, 23, 21, 32, 24, 35, 33, 22, 32],
  },

  {
   type: 'bar',
   yAxisIndex: 0,
   showBackground: true,
   backgroundStyle: {
    color: 'rgba(22, 100, 105, .3)',
   },
   zlevel: 1,
   name: '用工人数(人)',
   itemStyle: {
    normal: {
     color: new echarts.graphic.LinearGradient(
      0,
      0,
      0,
      1,
      [
       {
        offset: 0,
        color: 'rgba(0, 228, 255, 1)',
       },
       {
        offset: 1,
        color: 'rgba(76, 126, 255, 0.21)',
       },
      ],
      false
     ),
    },
   },
   barWidth: 24,
   data: [22, 33, 11, 12, 14, 15, 23, 42, 12],
  },
 ],
};
