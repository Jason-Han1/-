option = {
    title: {
        text: '对数轴示例',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        formatter: '{a} <br/>{b} : {c}'
    },
    legend: {
        left: '10',
        data: ['测试数据']
    },
    xAxis: {
        type: 'category',
        name: 'x',
        splitLine: {show: false},
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'log',
        name: 'y'
    },
    series: [ 
        {
            name: '测试数据',
            type: 'line',
            data: [2, 4, 6, 9, 81, 247, 741, 2223, 8889, 335],
            // stack:'222',
            itemStyle: {
                normal: {
                    lineStyle: {
                        type: 'dashed',
                        color: '#001'
                    }
                }
            }, 
            areaStyle:{
                color: '#001'
            }
        },
        {
            name: '隐藏数据',
            type: 'line',
            data: [2, 4, 6, 9, 81, 247, 741, 2223, 8889],
            // stack:'111',
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: '#001'
                    }
                }
            }
        },
        {
            name: "闪烁",
            type: 'effectScatter',
            coordinateSystem: 'cartesian2d',
            data: [['10',335]], //2d坐标系
            symbolSize: 6,
            // stack:'333',
            showEffectOn: 'render',
            tooltip: {
                show: false
            }, 
            rippleEffect: {
                brushType: 'stroke',
                period: 2,
                scale: 4
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#001',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};