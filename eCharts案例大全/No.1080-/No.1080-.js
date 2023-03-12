option = {
 timeline: {
  data: ['2020-01', '2020-02', '2020-03'],
  axisType: 'category',
  autoPlay: true,
  playInterval: 5000,
  left: '10%',
  right: '10%',
  bottom: '3%',
  width: '80%',
  label: {
   normal: {
    textStyle: {
     color: '#ddd',
    },
   },
   emphasis: {
    textStyle: {
     color: '#fff',
    },
   },
  },
  symbolSize: 10,
  lineStyle: {
   color: '#555',
  },
  checkpointStyle: {
   borderColor: '#777',
   borderWidth: 2,
  },
  controlStyle: {
   showNextBtn: true,
   showPrevBtn: true,
   normal: {
    color: '#666',
    borderColor: '#666',
   },
   emphasis: {
    color: '#aaa',
    borderColor: '#aaa',
   },
  },
 },
 baseOption: {
  animation: true,
  animationDuration: 1000,
  animationEasing: 'cubicInOut',
  animationDurationUpdate: 1000,
  animationEasingUpdate: 'cubicInOut',
  grid: {
   right: '2%',
   top: '10%',
   bottom: '10%',
   width: '18%',
  },
  tooltip: {
   trigger: 'axis',
   axisPointer: {
    type: 'shadow',
    shadowStyle: {
     color: 'rgba(150,150,150,0.1)',
    },
   },
  },
  visualMap: {
   min: 0,
   max: 250,
   left: 'left',
   top: 'bottom',
   text: ['高', '低'],
   textStyle: {
    color: 'white',
   },
   calculable: true,
   colorLightness: [0.8, 100],
   color: ['#c05050', '#e5cf0d', '#5ab1ef'],
   dimension: 0,
  },
  geo: {
   show: true,
   map: 'china',
   roam: true,
   zoom: 1,
   center: [113.83531246, 34.0267395887],
   label: {
    emphasis: {
     show: true,
    },
   },
   itemStyle: {
    normal: {
     borderColor: 'rgba(147, 235, 248, 1)',
     borderWidth: 1,
     areaColor: {
      type: 'radial',
      x: 0.5,
      y: 0.5,
      r: 0.8,
      colorStops: [
       {
        offset: 0,
        color: 'rgba(147, 235, 248, 0)',
       },
       {
        offset: 1,
        color: 'rgba(147, 235, 248, .2)',
       },
      ],
      globalCoord: false,
     },
     shadowColor: 'rgba(128, 217, 248, 1)',
     shadowOffsetX: -2,
     shadowOffsetY: 2,
     shadowBlur: 10,
    },
    emphasis: {
     areaColor: '#389BB7',
     borderWidth: 0,
    },
   },
  },
 },
 options: [
  {
   xAxis: {
    type: 'value',
    scale: true,
    position: 'top',
    min: 0,
    boundaryGap: false,
    splitLine: {
     show: false,
    },
    axisLine: {
     show: false,
    },
    axisTick: {
     show: false,
    },
    axisLabel: {
     margin: 1,
     textStyle: {
      color: '#aaa',
     },
    },
   },
   yAxis: {
    type: 'category',
    nameGap: 16,
    axisLine: {
     show: true,
     lineStyle: {
      color: '#ddd',
     },
    },
    axisTick: {
     show: false,
     lineStyle: {
      color: '#ddd',
     },
    },
    axisLabel: {
     interval: 0,
     textStyle: {
      color: '#ddd',
     },
    },
    data: ['四川', '重庆', '西藏'],
   },
   series: [
    {
     name: 'light',
     type: 'scatter',
     coordinateSystem: 'geo',
     data: [
      {
       name: '四川',
       value: [103.9526, 30.7617, 3.09],
      },
      {
       name: '重庆',
       value: [108.384366, 30.439702, null],
      },
      {
       name: '西藏',
       value: [91.11, 29.97, 0],
      },
     ],
     label: {
      normal: {
       formatter: '{b}',
       position: 'right',
       show: true,
      },
      emphasis: {
       show: true,
      },
     },
     itemStyle: {
      normal: {
       color: '#1DE9B6',
      },
     },
    },
    {
     type: 'map',
     map: 'china',
     geoIndex: 0,
     aspectScale: 1,
     showLegendSymbol: false,
     label: {
      normal: {
       show: false,
      },
      emphasis: {
       show: false,
       textStyle: {
        color: '#fff',
       },
      },
     },
     roam: true,
     itemStyle: {
      normal: {
       areaColor: '#031525',
       borderColor: '#FFFFFF',
      },
      emphasis: {
       areaColor: '#2B91B7',
      },
     },
     animation: false,
     data: [
      [
       {
        year: '2020-01',
        name: '四川',
        value: 3.09,
        value1: 3.09,
       },
       {
        year: '2020-01',
        name: '重庆',
        value: null,
        value1: null,
       },
       {
        year: '2020-01',
        name: '西藏',
        value: 0,
        value1: 0,
       },
      ],
      [
       {
        year: '2020-02',
        name: '四川',
        value: 39.25,
        value1: 39.25,
       },
       {
        year: '2020-02',
        name: '重庆',
        value: 14.8,
        value1: 14.8,
       },
       {
        year: '2020-02',
        name: '西藏',
        value: 0,
        value1: 0,
       },
      ],
      [
       {
        year: '2020-03',
        name: '四川',
        value: 49.05,
        value1: 49.05,
       },
       {
        year: '2020-03',
        name: '重庆',
        value: 14.2,
        value1: 14.2,
       },
       {
        year: '2020-03',
        name: '西藏',
        value: 0,
        value1: 0,
       },
      ],
      [
       {
        year: '2020-04',
        name: '西藏',
        value: 0,
        value1: 0,
       },
       {
        year: '2020-04',
        name: '重庆',
        value: 0.77,
        value1: 0.77,
       },
       {
        year: '2020-04',
        name: '四川',
        value: 3.09,
        value1: 3.09,
       },
      ],
      [
       {
        year: '2020-05',
        name: '四川',
        value: 39.25,
        value1: 39.25,
       },
       {
        year: '2020-05',
        name: '重庆',
        value: null,
        value1: null,
       },
       {
        year: '2020-05',
        name: '西藏',
        value: 0,
        value1: 0,
       },
      ],
      [
       {
        year: '2020-06',
        name: '西藏',
        value: 0,
        value1: 0,
       },
       {
        year: '2020-06',
        name: '重庆',
        value: 14.2,
        value1: 14.2,
       },
       {
        year: '2020-06',
        name: '四川',
        value: 49.05,
        value1: 49.05,
       },
      ],
     ],
    },
    {
     type: 'effectScatter',
     coordinateSystem: 'geo',
     data: [
      {
       name: '四川',
       value: [103.9526, 30.7617, 3.09],
      },
      {
       name: '重庆',
       value: [108.384366, 30.439702, null],
      },
      {
       name: '西藏',
       value: [91.11, 29.97, 0],
      },
     ],
     showEffectOn: 'render',
     rippleEffect: {
      brushType: 'stroke',
     },
     hoverAnimation: true,
     label: {
      normal: {
       formatter: '{b}',
       position: 'right',
       show: true,
      },
     },
     itemStyle: {
      normal: {
       color: '#1DE9B6',
       shadowBlur: 10,
       shadowColor: '#1DE9B6',
      },
     },
     zlevel: 1,
    },
    {
     type: 'lines',
     zlevel: 2,
     effect: {
      show: true,
      period: 5,
      trailLength: 0.2,
      symbol: 'arrow',
      symbolSize: 6,
     },
     lineStyle: {
      normal: {
       color: '#1DE9B6',
       width: 1,
       opacity: 0.2,
       curveness: 0.3,
      },
     },
     data: [
      [
       {
        coord: [103.9526, 30.7617],
       },
       {
        coord: [121.4648, 31.2891],
        value: 3.09,
       },
      ],
      [
       {
        coord: [108.384366, 30.439702],
       },
       {
        coord: [121.4648, 31.2891],
        value: null,
       },
      ],
      [
       {
        coord: [91.11, 29.97],
       },
       {
        coord: [121.4648, 31.2891],
        value: 0,
       },
      ],
     ],
    },
   ],
  },
  {
   xAxis: {
    type: 'value',
    scale: true,
    position: 'top',
    min: 0,
    boundaryGap: false,
    splitLine: {
     show: false,
    },
    axisLine: {
     show: false,
    },
    axisTick: {
     show: false,
    },
    axisLabel: {
     margin: 1,
     textStyle: {
      color: '#aaa',
     },
    },
   },
   yAxis: {
    type: 'category',
    nameGap: 16,
    axisLine: {
     show: true,
     lineStyle: {
      color: '#ddd',
     },
    },
    axisTick: {
     show: false,
     lineStyle: {
      color: '#ddd',
     },
    },
    axisLabel: {
     interval: 0,
     textStyle: {
      color: '#ddd',
     },
    },
    data: ['西藏', '重庆', '四川'],
   },
   series: [
    {
     name: 'light',
     type: 'scatter',
     coordinateSystem: 'geo',
     data: [
      {
       name: '西藏',
       value: [91.11, 29.97, 0],
      },
      {
       name: '重庆',
       value: [108.384366, 30.439702, 14.8],
      },
      {
       name: '四川',
       value: [103.9526, 30.7617, 39.25],
      },
     ],
     label: {
      normal: {
       formatter: '{b}',
       position: 'right',
       show: true,
      },
      emphasis: {
       show: true,
      },
     },
     itemStyle: {
      normal: {
       color: '#EEDD78',
      },
     },
    },
    {
     type: 'map',
     map: 'china',
     geoIndex: 0,
     aspectScale: 1,
     showLegendSymbol: false,
     label: {
      normal: {
       show: false,
      },
      emphasis: {
       show: false,
       textStyle: {
        color: '#fff',
       },
      },
     },
     roam: true,
     itemStyle: {
      normal: {
       areaColor: '#031525',
       borderColor: '#FFFFFF',
      },
      emphasis: {
       areaColor: '#2B91B7',
      },
     },
     animation: false,
     data: [
      [
       {
        year: '2020-01',
        name: '四川',
        value: 3.09,
        value1: 3.09,
       },
       {
        year: '2020-01',
        name: '重庆',
        value: null,
        value1: null,
       },
       {
        year: '2020-01',
        name: '西藏',
        value: 0,
        value1: 0,
       },
      ],
      [
       {
        year: '2020-02',
        name: '四川',
        value: 39.25,
        value1: 39.25,
       },
       {
        year: '2020-02',
        name: '重庆',
        value: 14.8,
        value1: 14.8,
       },
       {
        year: '2020-02',
        name: '西藏',
        value: 0,
        value1: 0,
       },
      ],
      [
       {
        year: '2020-03',
        name: '四川',
        value: 49.05,
        value1: 49.05,
       },
       {
        year: '2020-03',
        name: '重庆',
        value: 14.2,
        value1: 14.2,
       },
       {
        year: '2020-03',
        name: '西藏',
        value: 0,
        value1: 0,
       },
      ],
      [
       {
        year: '2020-04',
        name: '西藏',
        value: 0,
        value1: 0,
       },
       {
        year: '2020-04',
        name: '重庆',
        value: 0.77,
        value1: 0.77,
       },
       {
        year: '2020-04',
        name: '四川',
        value: 3.09,
        value1: 3.09,
       },
      ],
      [
       {
        year: '2020-05',
        name: '四川',
        value: 39.25,
        value1: 39.25,
       },
       {
        year: '2020-05',
        name: '重庆',
        value: null,
        value1: null,
       },
       {
        year: '2020-05',
        name: '西藏',
        value: 0,
        value1: 0,
       },
      ],
      [
       {
        year: '2020-06',
        name: '西藏',
        value: 0,
        value1: 0,
       },
       {
        year: '2020-06',
        name: '重庆',
        value: 14.2,
        value1: 14.2,
       },
       {
        year: '2020-06',
        name: '四川',
        value: 49.05,
        value1: 49.05,
       },
      ],
     ],
    },
    {
     type: 'effectScatter',
     coordinateSystem: 'geo',
     data: [
      {
       name: '四川',
       value: [103.9526, 30.7617, 39.25],
      },
      {
       name: '重庆',
       value: [108.384366, 30.439702, 14.8],
      },
      {
       name: '西藏',
       value: [91.11, 29.97, 0],
      },
     ],
     showEffectOn: 'render',
     rippleEffect: {
      brushType: 'stroke',
     },
     hoverAnimation: true,
     label: {
      normal: {
       formatter: '{b}',
       position: 'right',
       show: true,
      },
     },
     itemStyle: {
      normal: {
       color: '#EEDD78',
       shadowBlur: 10,
       shadowColor: '#EEDD78',
      },
     },
     zlevel: 1,
    },
    {
     type: 'lines',
     zlevel: 2,
     effect: {
      show: true,
      period: 5,
      trailLength: 0.2,
      symbol: 'arrow',
      symbolSize: 6,
     },
     lineStyle: {
      normal: {
       color: '#EEDD78',
       width: 1,
       opacity: 0.2,
       curveness: 0.3,
      },
     },
     data: [
      [
       {
        coord: [121.4648, 31.2891],
        value: 39.25,
       },
       {
        coord: [103.9526, 30.7617],
       },
      ],
      [
       {
        coord: [121.4648, 31.2891],
        value: 14.8,
       },
       {
        coord: [108.384366, 30.439702],
       },
      ],
      [
       {
        coord: [121.4648, 31.2891],
        value: 0,
       },
       {
        coord: [91.11, 29.97],
       },
      ],
     ],
    },
   ],
  },
  {
   xAxis: {
    type: 'value',
    scale: true,
    position: 'top',
    min: 0,
    boundaryGap: false,
    splitLine: {
     show: false,
    },
    axisLine: {
     show: false,
    },
    axisTick: {
     show: false,
    },
    axisLabel: {
     margin: 1,
     textStyle: {
      color: '#aaa',
     },
    },
   },
   yAxis: {
    type: 'category',
    nameGap: 16,
    axisLine: {
     show: true,
     lineStyle: {
      color: '#ddd',
     },
    },
    axisTick: {
     show: false,
     lineStyle: {
      color: '#ddd',
     },
    },
    axisLabel: {
     interval: 0,
     textStyle: {
      color: '#ddd',
     },
    },
    data: ['西藏', '重庆', '四川'],
   },
   series: [
    {
     name: 'light',
     type: 'scatter',
     coordinateSystem: 'geo',
     data: [
      {
       name: '西藏',
       value: [91.11, 29.97, 0],
      },
      {
       name: '重庆',
       value: [108.384366, 30.439702, 14.2],
      },
      {
       name: '四川',
       value: [103.9526, 30.7617, 49.05],
      },
     ],
     label: {
      normal: {
       formatter: '{b}',
       position: 'right',
       show: true,
      },
      emphasis: {
       show: true,
      },
     },
     itemStyle: {
      normal: {
       color: '#32C5E9',
      },
     },
    },
    {
     type: 'map',
     map: 'china',
     geoIndex: 0,
     aspectScale: 1,
     showLegendSymbol: false,
     label: {
      normal: {
       show: false,
      },
      emphasis: {
       show: false,
       textStyle: {
        color: '#fff',
       },
      },
     },
     roam: true,
     itemStyle: {
      normal: {
       areaColor: '#031525',
       borderColor: '#FFFFFF',
      },
      emphasis: {
       areaColor: '#2B91B7',
      },
     },
     animation: false,
     data: [
      [
       {
        year: '2020-01',
        name: '四川',
        value: 3.09,
        value1: 3.09,
       },
       {
        year: '2020-01',
        name: '重庆',
        value: null,
        value1: null,
       },
       {
        year: '2020-01',
        name: '西藏',
        value: 0,
        value1: 0,
       },
      ],
      [
       {
        year: '2020-02',
        name: '四川',
        value: 39.25,
        value1: 39.25,
       },
       {
        year: '2020-02',
        name: '重庆',
        value: 14.8,
        value1: 14.8,
       },
       {
        year: '2020-02',
        name: '西藏',
        value: 0,
        value1: 0,
       },
      ],
      [
       {
        year: '2020-03',
        name: '四川',
        value: 49.05,
        value1: 49.05,
       },
       {
        year: '2020-03',
        name: '重庆',
        value: 14.2,
        value1: 14.2,
       },
       {
        year: '2020-03',
        name: '西藏',
        value: 0,
        value1: 0,
       },
      ],
      [
       {
        year: '2020-04',
        name: '西藏',
        value: 0,
        value1: 0,
       },
       {
        year: '2020-04',
        name: '重庆',
        value: 0.77,
        value1: 0.77,
       },
       {
        year: '2020-04',
        name: '四川',
        value: 3.09,
        value1: 3.09,
       },
      ],
      [
       {
        year: '2020-05',
        name: '四川',
        value: 39.25,
        value1: 39.25,
       },
       {
        year: '2020-05',
        name: '重庆',
        value: null,
        value1: null,
       },
       {
        year: '2020-05',
        name: '西藏',
        value: 0,
        value1: 0,
       },
      ],
      [
       {
        year: '2020-06',
        name: '西藏',
        value: 0,
        value1: 0,
       },
       {
        year: '2020-06',
        name: '重庆',
        value: 14.2,
        value1: 14.2,
       },
       {
        year: '2020-06',
        name: '四川',
        value: 49.05,
        value1: 49.05,
       },
      ],
     ],
    },
    {
     type: 'effectScatter',
     coordinateSystem: 'geo',
     data: [
      {
       name: '四川',
       value: [103.9526, 30.7617, 49.05],
      },
      {
       name: '重庆',
       value: [108.384366, 30.439702, 14.2],
      },
      {
       name: '西藏',
       value: [91.11, 29.97, 0],
      },
     ],
     showEffectOn: 'render',
     rippleEffect: {
      brushType: 'stroke',
     },
     hoverAnimation: true,
     label: {
      normal: {
       formatter: '{b}',
       position: 'right',
       show: true,
      },
     },
     itemStyle: {
      normal: {
       color: '#32C5E9',
       shadowBlur: 10,
       shadowColor: '#32C5E9',
      },
     },
     zlevel: 1,
    },
    {
     type: 'lines',
     zlevel: 2,
     effect: {
      show: true,
      period: 5,
      trailLength: 0.2,
      symbol: 'arrow',
      symbolSize: 6,
     },
     lineStyle: {
      normal: {
       color: '#32C5E9',
       width: 1,
       opacity: 0.2,
       curveness: 0.3,
      },
     },
     data: [
      [
       {
        coord: [103.9526, 30.7617],
       },
       {
        coord: [121.4648, 31.2891],
        value: 49.05,
       },
      ],
      [
       {
        coord: [108.384366, 30.439702],
       },
       {
        coord: [121.4648, 31.2891],
        value: 14.2,
       },
      ],
      [
       {
        coord: [91.11, 29.97],
       },
       {
        coord: [121.4648, 31.2891],
        value: 0,
       },
      ],
     ],
    },
   ],
  },
 ],
};
