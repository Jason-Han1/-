var highlight = 'white';

var leftData = {
    name: '正常',
    value: 80,
    unit: '%',
    pos: ['35%', '50%'],
    range: [0, 100],
    colora: 'rgba(193,136,244,0.9)',
    colorb: 'rgba(242,166,200,0.6)'
}
var rightData = {
    name: '异常',
    value: 50,
    unit: '%',
    pos: ['65%', '50%'],
    range: [0, 100],
    colora: 'rgba(193,136,244,0.9)',
    colorb: 'rgba(242,166,200,0.6)'
}
option = {
   backgroundColor: '#212121',
   series: [
       // 左侧
        // 内侧指针、数值显示
        {
            name: leftData.name,
            type: 'gauge',
            center: leftData.pos,
            radius: '60%',
            startAngle: 270,
            endAngle: 90,
            min: 0,
            max: 100,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 6,
                    color: [
                        [
                            leftData.value / 100, new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(0, 164, 164, 0)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(0, 164, 164, 1)',
                                    }
                                ]
                            )
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
                value: 0,
            }]
        },
        // 外围刻度
        {
            type: 'gauge',
            center: leftData.pos,
            radius: '50%', // 1行3个
            splitNumber: leftData.splitNum || 10,
            min: 0,
            max: 100,
            startAngle: 270,
            endAngle: 90,
            axisLine: {
                show: false,
            }, //仪表盘轴线
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'rgba(0, 164, 164, 1)',
                    width: 1
                },
                length: -6
            }, //刻度样式
            splitLine: {
                show: true,
                length: 10,
                lineStyle: {
                    color: 'rgba(0, 164, 164, 1)'
                }
            }, //分隔线样式
            axisLabel: {
                show: true,
                distance: 25,
                textStyle: {
                    color: highlight,
                    fontSize: '14',
                    fontWeight: 'bold',
                }
            },
            pointer: {
                show: 0
            },
            detail: {
                show: 0
            }
        },
        // 内侧指针、数值显示
        {
            name: leftData.name,
            type: 'gauge',
            center: leftData.pos,
            radius: '54%',
            startAngle: 270,
            endAngle: 90,
            min: 0,
            max: 100,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 50,
                    color: [
                        [
                            leftData.value / 100, new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(0, 164, 164, 0)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(0, 164, 164, 1)',
                                    }
                                ]
                            )
                        ],
                        [
                            1, 'rgba(255,255,255, 0)'
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
                show: false,
            },
            title: {
                show: true,
                offsetCenter: [0, '65%'],
                color: 'white',
                fontSize: 20,
                /* backgroundColor: "#D8d8d8",*/
                borderRadius: 21,
                padding: 5
            },
            detail: {
                show: true,
                offsetCenter: [0, 0],
                textStyle: {
                    fontSize: 30,
                    color: 'rgba(0, 164, 164, 1)'
                },
                formatter: [
                     (leftData.name || '') + '\n{value}'
                ].join('\n'),
            },
            data: [{
                value: leftData.value
            }]
        },
        // 右侧
        // 内侧指针、数值显示
        {
            name: rightData.name,
            type: 'gauge',
            center: rightData.pos,
            radius: '60%',
            clockwise: false,
            startAngle: -90,
            endAngle: 90,
            min: 0,
            max: 100,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 6,
                    color: [
                        [
                            rightData.value / 100, new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(255, 17, 17, 0)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(255, 17, 17, 1)',
                                    }
                                ]
                            )
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
                value: 0,
            }]
        },
        // 外围刻度
        {
            type: 'gauge',
            center: rightData.pos,
            radius: '50%', // 1行3个
            splitNumber: rightData.splitNum || 10,
            min: 0,
            max: 100,
            startAngle: -90,
            endAngle: 90,
            axisLine: {
                show: false,
            }, //仪表盘轴线
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'rgba(255, 17, 17, 1)',
                    width: 1
                },
                length: -6
            }, //刻度样式
            splitLine: {
                show: true,
                length: 10,
                lineStyle: {
                    color: 'rgba(255, 17, 17, 1)'
                }
            }, //分隔线样式
            axisLabel: {
                show: true,
                distance: 25,
                textStyle: {
                    color: highlight,
                    fontSize: '14',
                    fontWeight: 'bold',
                }
            },
            pointer: {
                show: 0
            },
            detail: {
                show: 0
            }
        },
        // 内侧指针、数值显示
        {
            name: rightData.name,
            type: 'gauge',
            center: rightData.pos,
            radius: '54%',
            clockwise: false,
            startAngle: -90,
            endAngle: 90,
            min: 0,
            max: 100,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 50,
                    color: [
                        [
                            rightData.value / 100, new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(255, 17, 17, 0)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(255, 17, 17, 1)',
                                    }
                                ]
                            )
                        ],
                        [
                            1, 'rgba(255,255,255, 0)'
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
                show: false,
            },
            title: {
                show: true,
                offsetCenter: [0, '65%'],
                color: 'white',
                fontSize: 20,
                /* backgroundColor: "#D8d8d8",*/
                borderRadius: 21,
                padding: 5
            },
            detail: {
                show: true,
                offsetCenter: [0, 0],
                textStyle: {
                    fontSize: 30,
                    color: 'rgba(255, 17, 17, 1)'
                },
                formatter: [
                     (rightData.name || '') + '\n{value}'
                ].join('\n'),
            },
            data: [{
                value: rightData.value
            }]
        }
    ]
};