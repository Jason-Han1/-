var demoData = {
    name: '时钟',
    value: 20,
    pos: ['50%', '50%'],
}

option = {
    backgroundColor: '#212121',
    series: [
        // 外侧光线
        {
            name: demoData.name,
            type: 'gauge',
            center: demoData.pos,
            radius: '60%',
            startAngle: 225,
            endAngle: -45,
            min: 0,
            max: 100,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 10,
                    color: [
                        [
                            demoData.value / 100, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: 'rgba(255,255,255,0)',
                                    },
                                    {
                                        offset: 1,
                                        color: '#0CD7F0',
                                    }
                                ]
                            )
                        ],
                        [
                            1, 
                        ]
                    ]
                }
            },
            axisTick: {
                show: 0,
            },
            splitLine: {
                show: 0,
            },
            axisLabel: {
                show: 0
            },
            pointer: {
                show: 0,
            },
            detail: {
                show: 0
            },
            data: [{
                value: demoData.value,
            }]
        },
        // 内圆
        {
            "name": '内圆',
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            "radius": '3%',
            "z": 0,

            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 0,
            }, {
                "value": 10,

                itemStyle: {
                    normal: {
                        color: "#3178ce"
                    },
                    emphasis: {
                        color: "#3178ce"
                    }
                }
            }]
        },
        // 圆环
        {
            "name": '小圆形',
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            "radius": ['3%', '5%'],
            "z": 0,
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 0,
            }, {
                "value": 10,

                itemStyle: {
                    normal: {
                        color: "#FFF"
                    },
                    emphasis: {
                        color: "#FFF"
                    }
                }
            }]
        },
        // 内侧指针、数值显示
        {
            name: demoData.name,
            type: 'gauge',
            center: demoData.pos,
            radius: '54%',
            startAngle: 226,
            endAngle: -46,
            min: 0,
            max: 100,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 30,
                    
                }
            },
            axisTick: {
                show: 0,
            },
            splitLine: {
                show: 0,
            },
            axisLabel: {
                show: 0
            },
            pointer: {
                show: true,
                length: '80%',
                width: 10,
                offsetCenter: [0, '50%'],
            },
            title: {
                show: false,
                offsetCenter: [0, '10%'],
                color: 'white',
                fontSize: 20,
                // backgroundColor: "#D8d8d8",
                borderRadius: 30,
                padding: 5
            },
            detail: {
                show: false,
                offsetCenter: [0, '50%'],
                textStyle: {
                    fontSize: 25,
                    color: '#fff'
                },
                formatter: [
                    '{value}',
                ].join('\n'),

                rich: {
                    name: {
                        fontSize: 20,
                        lineHeight: 10,
                        color: '#ddd',
                        padding: [30, 0, 0, 0]
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#00c4fa',
                }
            },
            data: [{
                value: demoData.value,
                name: demoData.name
            }]
        },
        // 外围刻度
        {
            type: 'gauge',
            center: demoData.pos,
            radius: '50%',
            splitNumber: 10,
            min: 0,
            max: 100,
            startAngle: 225,
            endAngle: -45,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [
                        [1, 'rgba(0,0,0,0)']
                    ]
                }
            }, //仪表盘轴线

            //刻度样式
            splitLine: {
                show: true,
                length: 6,
                lineStyle: {
                    width: 1,

                }
            }, //分隔线样式
            axisLabel: {
                show: false,
                distance: 10,
                textStyle: {
                    color: '#fff',
                    fontSize: '12',
                    fontWeight: 'bold'
                }
            },
            pointer: {
                show: 0
            },
            detail: {
                show: 0
            }
        },
    ]

};

