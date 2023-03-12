var option = {
    legend:{
        data:['学校','本群体'],
        top:'center',
        right: 10,
        orient: 'vertical',
        itemHeight:16,
        itemWidth:16,
        itemGap:20
    },
  series: [{
      name:'学校',
    type: 'gauge',
    min: 0,
    max: 100,
    splitNumber: 10,
    radius: '75%',
    center: ['50%', '55%'],
    startAngle: 210,
    endAngle: -30,
     axisLine: {
            show: true,
            lineStyle: {
                width: 25,
                color: [
                    [0.2, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#5CCFFF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#4C8EFA' // 100% 处的颜色
                }], false)],
                    [0.8, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00D0BF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#05C399' // 100% 处的颜色
                }], false)],
                    [1, new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: '#FF977B' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#FB6A66' // 100% 处的颜色
                }], false)],
                ],
                borderColor:'#000',
                borderWidth:'10',
            },
        },
        axisLabel: {
            show: true,
            color: "#999",
            fontSize: 12,
            distance: -5,
        }, //刻度标签。
        axisTick: {
            show: false,

        }, //刻度样式            
        splitLine: {
            show: false,
            length: "28%",
            lineStyle: {
                color: "#fff",
                width: 2,
            },
        },
    pointer: { // 分隔线
      shadowColor: 'auto', //默认透明
      shadowBlur: 5,
      length:'60%'
    },
    itemStyle: {
      color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: '#FDDA39' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#FEAD5A' // 100% 处的颜色
                }], false)
    },
    detail: {
      show: false,
      color: '#1e90ff'
    },
    data: [{
        value: 22
    }]
  }, {
      name:'本群体',
    type: 'gauge',
    min: 0,
    max: 100,
    splitNumber: 10,
    radius: '75%',
    center: ['50%', '55%'],
    startAngle: 210,
    endAngle: -30,
     axisLine: {
            show: true,
            lineStyle: {
                width: 25,
                color: [
                    [0.2, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#5CCFFF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#4C8EFA' // 100% 处的颜色
                }], false)],
                    [0.8, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00D0BF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#05C399' // 100% 处的颜色
                }], false)],
                    [1, new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: '#FF977B' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#FB6A66' // 100% 处的颜色
                }], false)],
                ],
                borderColor:'#000',
                borderWidth:'10',
            },
        },
        axisLabel: {
            show: true,
            color: "#999",
            fontSize: 12,
            distance: -5,
        }, //刻度标签。
        axisTick: {
            show: false,

        }, //刻度样式            
        splitLine: {
            show: false,
            length: "28%",
            lineStyle: {
                color: "#fff",
                width: 2,
            },
        },
    pointer: { // 分隔线
      shadowColor: 'auto', //默认透明
      shadowBlur: 5,
      length:'60%'
    },
    itemStyle: {
      color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: '#D480E6' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#FFCAFF' // 100% 处的颜色
                }], false)
    },
    detail: {
      show: false,
      offsetCenter: ['-40%', '40%'],
      color: '#5ec9db'
    },
    data: [{
        value: 82
    }]
  },{ // 背景圆环
        name: '',
        type: 'pie',
        radius: ['75%', '80%'],
        center: ['50%', '55%'],
        silent: true,
       // startAngle: 225,
       //endAngle: 0,
      startAngle: 210,
      endAngle: 0,
        labelLine: {
            normal: {
                show: false
            }
        },
        z: -1,
        data: [{
            value: 75,
            itemStyle: {
                color: '#EBF3FE',
                borderWidth: 2,
                borderColor: '#EBF3FE'
            }
        }, {
            value: 37.5,
            itemStyle: {
                color: 'transparent'
            }
        }]
    }],
};
return option;