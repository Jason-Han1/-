option = {
  backgroundColor: '#043654',
  series: [
      {
    name: '刻度',
    type: 'gauge',
    radius: '50%',
    splitNumber: 6, //刻度数量
    startAngle: 225,
    endAngle: -45,
    axisLine: {
      show: true,
      lineStyle: {
        width: 1,
        color: [[1,'rgba(0,0,0,0)']]
      }
    },//仪表盘轴线
    axisLabel: {
      show: false,
      color:'#fff',
      distance:30
    },//刻度标签。
    axisTick: {
      show: true,
      splitNumber: 10,
      lineStyle: {
        color: '#09C2FF',
        width: 2
      },
      length: -18
    },//刻度样式
    splitLine: {
      show: true,
      length: -30,
      lineStyle: {
        color: '#09C2FF'
      }
    },//分隔线样式
    detail: {
      show: false
    },
    pointer: {
      show: false
    }
  },
   {
      type: 'gauge',
      radius: '55%',
      center: ['50%', '50%'],
      splitNumber: 0, //刻度数量
      startAngle: 225,
    endAngle: -45,
      axisLine: {
        show: true,
        lineStyle: {
          width: 15,
          color: [
            [
              0.5, new echarts.graphic.LinearGradient(
              0, 0, 1, 0, [{
              offset: 0,
              color: '#40A4F5'
            },
              {
                offset: 1,
                color: '#60D3FD'
              }
            ]
              )
            ],
            [
              1, 'rgba(65,62,84,0)'
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
        offsetCenter: [0, '26%'], // x, y，单位px
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
      data: [
        { value: 50.26 }
      ]
    }
  ]
};