option = {
  series: [
    {
      name: '',
      type: 'gauge',
      detail: false,
      splitNumber: 10, //刻度数量
      radius: '100%', //图表尺寸
      center: ['50%', '50%'],
      startAngle: 0, //开始刻度的角度
      endAngle: 360, //结束刻度的角度
      axisLine: {
        show: false
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: '#3ABDF8',
          width: 10
        },
        length: 5,
        splitNumber: 5
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      }
    },
    {
      name: '',
      type: 'gauge',
      detail: false,
      splitNumber: 10, //刻度数量
      radius: '92%', //图表尺寸
      center: ['50%', '50%'],
      startAngle: 0, //开始刻度的角度
      endAngle: 360, //结束刻度的角度
      axisLine: {
        show: false
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: '#3ABDF8',
          width: 15
        },
        length: 15,
        splitNumber: 7
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      }
    }
  ]
}
