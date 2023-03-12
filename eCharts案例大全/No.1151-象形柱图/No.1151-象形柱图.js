var maxData = 2000;
option = {
  backgroundColor:'#041437',
  tooltip: {},
  xAxis: {
    max: maxData,
    splitLine: { show: false },
    offset: 10,
    axisLine: {
      show: false 
    },
    axisLabel: {
     show: false 
    }
  },
  yAxis: {
    data: ['2013', '2014', '2015', '2016'],
    inverse: true,
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: {
      margin: 10,
      color: '#999',
      fontSize: 16
    }
  },
  grid: {
    top: 'center',
    height: 200,
    left: 70,
    right: 100
  },
  series: [
    {
      // current data
      type: 'pictorialBar',
      itemStyle:{
        color:'#01F4C3',
      },
      symbol: 'rect',
      symbolRepeat: 'fixed',
      symbolMargin: 5,
      symbolClip: true,
      symbolSize: [10,30],
      symbolBoundingData: maxData,
      data: [891, 1220, 660, 1670],
      z: 10
    },
    {
      type: 'pictorialBar',
      itemStyle: {
        color:'#fff',
      },
      label: {
        show: true,
        position: 'right',
        offset: [10, 0],
        color: 'green',
        fontSize: 18
      },
      animationDuration: 0,
      symbolRepeat: 'fixed',
      symbolMargin: 5,
      symbol: 'rect',
      symbolSize: [10,30],
      symbolBoundingData: maxData,
      data: [891, 1220, 660, 1670],
      z: 5
    }
  ]
};
