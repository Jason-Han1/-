option = {
    backgroundColor: '#091636',
    title: {
        text: 'demo Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
         axisLine:{
            lineStyle:{
                color:'#aaa',
            }
        }
    },
    yAxis: {
        splitLine:{
            lineStyle:{
                type:'dashed',
                color:'#333'
            }
        },
        axisLine:{
            lineStyle:{
                color:'#aaa',
            }
        }
    },
    series: [
        {
        type: 'line',
        data:[320, 152, 101, 152, 390, 330, 210],
        color:'rgba(217,247,249,1)',
        areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(217,247,249,0.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(217,247,249,0)'
                        }
                    ], false),
                    shadowColor: 'rgba(217,247,249,0.9)',
                    shadowBlur: 20
                }
            },
    },
        {
        type: 'line',
        data:[150, 244, 191, 234, 191, 330, 310],
        color:'rgba(108,80,243,0.7)',
        areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(108,80,243,0.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(108,80,243,0)'
                        }
                    ], false),
                    shadowColor: 'rgba(108,80,243, 0.9)',
                    shadowBlur: 20
                }
            },
    },
        {
            type: 'effectScatter',
            showEffectOn: 'render',
            rippleEffect: {
                period: 10,
                scale: 4,
                brushType: 'fill'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: 'rgba(217,247,249,1)',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data: [320, 152, 101, 152, 390, 330, 210],
        },
        {
            type: 'effectScatter',
            showEffectOn: 'render',
            rippleEffect: {
                period: 10,
                scale: 4,
                brushType: 'fill'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: 'rgba(108,80,243,1)',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data: [150, 244, 191, 234, 191, 330, 310],
        },
    
    ]
};