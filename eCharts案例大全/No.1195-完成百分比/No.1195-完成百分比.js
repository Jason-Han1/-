option = {
  backgroundColor: "#062a44",
  series: [
    {
      type: 'gauge',
      radius: '40%',
      center: ['50%', '50%'],

      splitNumber: 0, //刻度数量
      startAngle: 269,
      endAngle: -90,
      axisLine: {
        show: true,
        lineStyle: {
          width: 15,
          color: [
            [
              0.9, new echarts.graphic.LinearGradient(
              0, 0, 1, 0, [{
              offset: 0,
              color: '#5c53de'
            },
              {
                offset: 1,
                color: '#18c8ff'
              }
            ]
              )
            ],
            [
              1, '#413e54'
            ]
          ]
        }
      },
      //分隔线样式。
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      pointer: {
        show: false
      },
      title: {
        show: true,
        offsetCenter: [0, '150%'], // x, y，单位px
        textStyle: {
          color: '#fff',
          fontSize: 20
        }
      },
      //仪表盘详情，用于显示数据。
      detail: {
        show: true,
        offsetCenter: [0, 0],
        color: '#ffffff',
        formatter: function(params) {
      return params
    },
    textStyle: {
      fontSize: 44
    }
    },
    data: [{
    name: "当前毕业率",
    value: 90.61
    }]
  }
  ]
};