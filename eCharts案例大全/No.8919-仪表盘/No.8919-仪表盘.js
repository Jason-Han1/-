// 仪表盘
option =  {
    backgroundColor:'#000',
  title: {
    text: '62 | 38',
    x: 'center',
    y: '40%',
    textStyle: {
      color: '#fff',
      fontSize: 28,
      fontWeight: 'normal',
      fontFamily: 'DINPro-Light'
    }
  },
  series: [{
    type: 'gauge',
    radius: '70%',
    startAngle: '215',
    endAngle: '-35',
    splitNumber: 12,
    detail: {
      // offsetCenter: [0, 100],
      color: '#fff',
      fontSize: 28,
      formatter: ' '
    },
    pointer: {
      show: false
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: [
          [0, '#FFC700'],
          [80 / 100, '#FFC700'], // 数据
          [1, '#999999']
        ],
        width: 7
      }
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: true,
      length: 10,
      lineStyle: {
        width: 10,
        color: '#0F1519'
      }
    },
    axisLabel: {
      show: false
    }
  }
  ]
}
