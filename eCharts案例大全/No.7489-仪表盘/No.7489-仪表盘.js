option = {
    title: [{
    x: "16%",
    bottom: '5%',
    text: '单量',
  }, {
    x: "45%",
    bottom: '5%',
    text: 'SKU数',
  }, {
    x: "78%",
    bottom: '5%',
    text: '数量',
  }],
  tooltip: {
    formatter: '{b}:{c}'
  },

  series: [{
    type: 'gauge',
    min: 0,
    max: 5,
    splitNumber: 10,
    radius: '60%',
    center: ['50%', '55%'],
    startAngle: 210,
    endAngle: -30,
    axisLine: { // 坐标轴线
      lineStyle: { // 属性lineStyle控制线条样式
        color: [
          [1, '#1e90ff']
        ],
        width: 3,
        shadowColor: 'rgba(0, 0, 0, 0.1)', //默认透明
        shadowBlur: 10
      }
    },
    axisLabel: { // 坐标轴小标记
      fontWeight: 'bolder',
      color: '#000',
      shadowColor: 'rgba(0, 0, 0, 0.1)', //默认透明
      shadowBlur: 10
    },
    axisTick: { // 坐标轴小标记
      length: 15, // 属性length控制线长
      lineStyle: { // 属性lineStyle控制线条样式
        color: 'auto',
        shadowColor: 'auto', //默认透明
        shadowBlur: 10
      }
    },
    splitLine: { // 分隔线
      length: 25, // 属性length控制线长
      lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
        width: 3,
        color: 'auto',
        shadowColor: 'rgba(0, 0, 0, 0.1)', //默认透明
        shadowBlur: 10
      }
    },
    pointer: { // 分隔线
      shadowColor: 'auto', //默认透明
      shadowBlur: 5
    },
    itemStyle: {
      color: '#1e90ff'
    },
    detail: {
      show: true,
      color: '#1e90ff'
    },
    title: {
      show: true,
      offsetCenter: ['0', '-110%'],
      backgroundColor: '#1e90ff',
      padding: 5,
      color: '#fff'
    },
    data: [{
        name: '处理中',
        value: 3
    }]
  }, {
    type: 'gauge',
    min: 0,
    max: 5,
    splitNumber: 10,
    radius: '60%',
    center: ['50%', '55%'],
    startAngle: 210,
    endAngle: -30,
    axisLine: { // 坐标轴线
      lineStyle: { // 属性lineStyle控制线条样式
        color: [
          [1, '#1e90ff']
        ],
        width: 3,
        shadowColor: 'rgba(0, 0, 0, 0.1)', //默认透明
        shadowBlur: 10
      }
    },
    axisLabel: { // 坐标轴小标记
      fontWeight: 'bolder',
      color: '#000',
      shadowColor: 'rgba(0, 0, 0, 0.1)', //默认透明
      shadowBlur: 10
    },
    axisTick: { // 坐标轴小标记
      length: 15, // 属性length控制线长
      lineStyle: { // 属性lineStyle控制线条样式
        color: 'auto',
        shadowColor: 'auto', //默认透明
        shadowBlur: 10
      }
    },
    splitLine: { // 分隔线
      length: 25, // 属性length控制线长
      lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
        width: 3,
        color: 'auto',
        shadowColor: 'rgba(0, 0, 0, 0.1)', //默认透明
        shadowBlur: 10
      }
    },
    pointer: { // 分隔线
      shadowColor: 'auto', //默认透明
      shadowBlur: 5
    },
    itemStyle: {
      color: '#5ec9db'
    },
    detail: {
      show: true,
      offsetCenter: ['-40%', '40%'],
      color: '#5ec9db'
    },
    title: {
      show: true,
      offsetCenter: ['-40%', '-110%'],
      color: '#5ec9db'
    },
    data: [{
        name: '预计',
        value: 4
    }]
  }, {
    type: 'gauge',
    min: 0,
    max: 5,
    splitNumber: 10,
    radius: '60%',
    center: ['50%', '55%'],
    startAngle: 210,
    endAngle: -30,
    axisLine: { // 坐标轴线
      lineStyle: { // 属性lineStyle控制线条样式
        color: [
          [1, '#1e90ff']
        ],
        width: 3,
        shadowColor: 'rgba(0, 0, 0, 0.1)', //默认透明
        shadowBlur: 10
      }
    },
    axisLabel: { // 坐标轴小标记
      fontWeight: 'bolder',
      color: '#000',
      shadowColor: 'rgba(0, 0, 0, 0.1)', //默认透明
      shadowBlur: 10
    },
    axisTick: { // 坐标轴小标记
      length: 15, // 属性length控制线长
      lineStyle: { // 属性lineStyle控制线条样式
        color: 'auto',
        shadowColor: 'auto', //默认透明
        shadowBlur: 10
      }
    },
    splitLine: { // 分隔线
      length: 25, // 属性length控制线长
      lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
        width: 3,
        color: 'auto',
        shadowColor: 'rgba(0, 0, 0, 0.1)', //默认透明
        shadowBlur: 10
      }
    },
    pointer: { // 分隔线
      shadowColor: 'auto', //默认透明
      shadowBlur: 5
    },
    itemStyle: {
      color: '#000'
    },
    detail: {
      show: true,
      offsetCenter: ['40%', '40%'],
      color: '#000'
    },
    title: {
      show: true,
      offsetCenter: ['40%', '-110%'],
      color: '#000'
    },
    data: [{
        name: '实际',
        value: 2
    }]
  }, {
    type: 'gauge',
    center: ['20%', '55%'], // 默认全局居中
    radius: '50%',
    min: 0,
    max: 10,
    startAngle: 210,
    endAngle: 35,
    splitNumber: 5,
    axisLine: { // 坐标轴线
      lineStyle: { // 属性lineStyle控制线条样式
        color: [
          [0.29, 'lime'],
          [0.86, '#1e90ff'],
          [1, '#ff4500']
        ],
        width: 2,
        shadowColor: 'rgba(0, 0, 0, 0.1)', //默认透明
        shadowBlur: 10
      }
    },
    axisLabel: { // 坐标轴小标记
      fontWeight: 'bolder',
      color: 'auto',
      shadowColor: 'rgba(0, 0, 0, 0.1)', //默认透明
      shadowBlur: 10
    },
    axisTick: { // 坐标轴小标记
      length: 12, // 属性length控制线长
      lineStyle: { // 属性lineStyle控制线条样式
        color: 'auto',
        shadowColor: 'rgba(0, 0, 0, 0.1)', //默认透明
        shadowBlur: 10
      }
    },
    splitLine: { // 分隔线
      length: 20, // 属性length控制线长
      lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
        width: 3,
        color: 'auto',
        shadowColor: 'rgba(0, 0, 0, 0.1)', //默认透明
        shadowBlur: 10
      }
    },
    pointer: {
      width: 5,
      shadowColor: 'rgba(0, 0, 0, 0.1)', //默认透明
      shadowBlur: 5
    },
    itemStyle: {
      color: ['#f27d51', '#fdc765', '#5ec9db']
    },
    title: {
      show: false,
    },
    detail: {
      show: false,
    },
    data: ['23', '34', '14'],
  }, {
    type: 'gauge',
    center: ['80%', '55%'], // 默认全局居中
    radius: '50%',
    min: 0,
    max: 10,
    startAngle: 145,
    endAngle: -30,
    splitNumber: 5,
    axisLine: { // 坐标轴线
      lineStyle: { // 属性lineStyle控制线条样式
        color: [
          [0.29, 'lime'],
          [0.86, '#1e90ff'],
          [1, '#ff4500']
        ],
        width: 2,
        shadowColor: '#fff', //默认透明
        shadowBlur: 10
      }
    },
    axisLabel: { // 坐标轴小标记
      fontWeight: 'bolder',
      color: '#000',
      shadowColor: 'rgba(0, 0, 0, 0.1)', //默认透明
      shadowBlur: 10
    },
    axisTick: { // 坐标轴小标记
      length: 12, // 属性length控制线长
      lineStyle: { // 属性lineStyle控制线条样式
        color: 'auto',
        shadowColor: '#fff', //默认透明
        shadowBlur: 10
      }
    },
    splitLine: { // 分隔线
      length: 20, // 属性length控制线长
      lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
        width: 3,
        color: 'auto',
        shadowColor: 'rgba(0, 0, 0, 0.1)', //默认透明
        shadowBlur: 10
      }
    },
    pointer: {
      width: 5,
      shadowColor: 'rgba(0, 0, 0, 0.1)', //默认透明
      shadowBlur: 5
    },
    itemStyle: {
      color: '#fdc765'
    },
    title: {
      show: false
    },
    detail: {
      show: false
    },
    data: ['23', '34', '14'],
  }, {
    type: 'gauge',
    center: ['80%', '55%'], // 默认全局居中
    radius: '50%',
    min: 0,
    max: 10,
    startAngle: 145,
    endAngle: -30,
    splitNumber: 5,
    axisLine: { // 坐标轴线
      lineStyle: { // 属性lineStyle控制线条样式
        color: [
          [0.29, 'lime'],
          [0.86, '#1e90ff'],
          [1, '#ff4500']
        ],
        width: 2,
        shadowColor: '#fff', //默认透明
        shadowBlur: 10
      }
    },
    axisLabel: { // 坐标轴小标记
      fontWeight: 'bolder',
      color: '#000',
      shadowColor: 'rgba(0, 0, 0, 0.1)', //默认透明
      shadowBlur: 10
    },
    axisTick: { // 坐标轴小标记
      length: 12, // 属性length控制线长
      lineStyle: { // 属性lineStyle控制线条样式
        color: 'auto',
        shadowColor: '#fff', //默认透明
        shadowBlur: 10
      }
    },
    splitLine: { // 分隔线
      length: 20, // 属性length控制线长
      lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
        width: 3,
        color: 'auto',
        shadowColor: 'rgba(0, 0, 0, 0.1)', //默认透明
        shadowBlur: 10
      }
    },
    pointer: {
      width: 5,
      shadowColor: 'rgba(0, 0, 0, 0.1)', //默认透明
      shadowBlur: 5
    },
    itemStyle: {
      color: '#fdc765'
    },
    title: {
      show: false
    },
    detail: {
      show: false
    },
    data: [{
        name: '预计',
        value: 6
    }],
  }],
};