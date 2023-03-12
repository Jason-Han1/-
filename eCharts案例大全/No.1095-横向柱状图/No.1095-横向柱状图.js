option = {
  backgroundColor: '#12233E',
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  color: ['#5b9bd5'],
  xAxis: {
    show: false,
  },
  yAxis: {
    type: 'category',
    splitLine: {
      show: false,
    },
    axisTick: false,
    axisLine: {
      lineStyle: {
        color: '#8999B2',
      },
      // textStyle:{
      //     color:'#fff'
      // }
    },
    data: ['低指数', '中指数', '高指数'],
  },
  series: [
    {
      type: 'bar',
      barWidth: 15,
      // barMaxWidth: 60,
      animationDuration: 1500,
      label: {
        show: true,
        position: [4, -31],
        textStyle: {
          color: '#fff',
          fontSize: 32,
        },
        formatter: function (data) {
          return data.value + '%';
        },
      },
      itemStyle: {
        barBorderRadius: [0, 30, 30, 0],
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            { offset: 0,color: '#429AEC', },
            { offset: 1,color: '#05E3F7', },
          ],
          global: false
        },
      },
      data: [5.7, 41.8, 52.5],
    },
  ],
};
