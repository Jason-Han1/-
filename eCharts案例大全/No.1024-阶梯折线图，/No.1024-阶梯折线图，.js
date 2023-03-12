option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value',
    minInterval: 1
  },
  legend: {},
  color:['red','black','green'],
  series: [
    {
      name: '曲线1',
      type: 'line',
      step: 'end',
      data: [
        {
          value: 1,
          symbolRotate: 0,
          symbol: 'none',
          symbolSize: 0
        },
        {
          value: 0,
          symbolRotate: 180,
          symbol: 'arrow',
          symbolSize: 15
        },
        {
          value: 1, // 具体的值
          symbolRotate: 0, // 旋转角度，从高到低是180，从低到高是0
          symbol: 'arrow', // arrow有剪头，none是没有剪头
          symbolSize: 15
        },
        {
          value: 0,
          symbolRotate: 180,
          symbol: 'arrow',
          symbolSize: 15
        },
        {
          value: 1,
          symbolRotate: 0,
          symbol: 'arrow',
          symbolSize: 15
        }
      ]
    },
    {
      name: '分割线1',
      type: 'line',
      symbol: 'none',
      lineStyle:{
       type: 'dashed'
      },
      data: [1.5, 1.5, 1.5, 1.5, 1.5, 1.5]
    },
    {
      name: '曲线2',
      type: 'line',
      step: 'end',
      data: [
        {
          value: 2,
          symbolRotate: 0,
          symbol: 'none',
          symbolSize: 0
        },
        {
          value: 3,
          symbolRotate: 0,
          symbol: 'arrow',
          symbolSize: 15
        },
        {
          value: 2,
          symbolRotate: 180,
          symbol: 'arrow',
          symbolSize: 15
        },
        {
          value: 3,
          symbolRotate: 0,
          symbol: 'arrow',
          symbolSize: 15
        },
        {
          value: 2,
          symbolRotate: 180,
          symbol: 'arrow',
          symbolSize: 15
        }
      ]
    }
  ]
};
