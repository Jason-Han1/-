option = {
    backgroundColor: "#062a44",
    series: [
        {
            name: '刻度',
            type: 'gauge',
            radius: '95%',
            splitNumber: 10, //刻度数量
            min: 0,
            max: 100,
            endAngle: -30,
            startAngle: 210,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 0

                }
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#ffffff',
                    width: 1
                },
                length: 10,
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                    color: '#ffffff'
                }
            },
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
        {
            name: '刻度数字',
            type: 'gauge',
            radius: '95%',
            splitNumber: 10, //刻度数量
            min: 0,
            max: 100,
            endAngle: -35,
            startAngle: 215,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 0,
                    shadowBlur: 0,
                    color: [
                        [1, '#ffffff']
                    ]
                }
            },
            axisLabel: {
                formatter: function(v) {
                    switch (v + '') {
                        case '0':
                            return '0%';
                        case '100':
                            return '100%';
                    }
                },
                show: true,
                distance: -25,
                fontSize: 20
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#ffffff',
                    width: 1
                },
                length: 10,
            },
            splitLine: {
                show: false,
                length: 20,
                lineStyle: {
                    color: '#ffffff'
                }
            },
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
        {
            name: '施工背景',
            type: 'gauge',
            radius: '65%',
            endAngle: -30,
            startAngle: 210,
            splitNumber: 0, //刻度数量
            axisLine: {
                lineStyle: {
                    shadowColor: 'rgba(93,183,255,0.50)',
                    shadowBlur: 10,
                    color: [
                        [1, '#c3e6fa']
                    ]
                }
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
        {
            name: '施工',
            type: 'gauge',
            radius: '65%',
            splitNumber: 0, //刻度数量
            startAngle: 210,
            endAngle: (240 - (240 / 100 * 50) - 30),
            axisLine: {
                lineStyle: {
                    shadowBlur: 0,
                    color: [
                        [
                            0.1, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [{
                                        offset: 0,
                                        color: '#5ff000'
                                    },
                                    {
                                        offset: 1,
                                        color: '#6fe700'
                                    }
                                ]
                            )
                        ],
                        [
                            0.2, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [{
                                        offset: 0,
                                        color: '#6fe700'
                                    },
                                    {
                                        offset: 1,
                                        color: '#86da00'
                                    }
                                ]
                            )
                        ],
                        [
                            0.3, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [{
                                        offset: 0,
                                        color: '#86da00'
                                    },
                                    {
                                        offset: 1,
                                        color: '#bebc00'
                                    }
                                ]
                            )
                        ],
                        [
                            0.4, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [{
                                        offset: 0,
                                        color: '#bebc00'
                                    },
                                    {
                                        offset: 1,
                                        color: '#ff9500'
                                    }
                                ]
                            )
                        ],
                        [
                            0.5, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [{
                                        offset: 0,
                                        color: '#ff9500'
                                    },
                                    {
                                        offset: 1,
                                        color: '#ff7500'
                                    }
                                ]
                            )
                        ],
                        [
                            0.6, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [{
                                        offset: 0,
                                        color: '#ff7500'
                                    },
                                    {
                                        offset: 1,
                                        color: '#ff5400'
                                    }
                                ]
                            )
                        ],
                        [
                            0.7, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [{
                                        offset: 0,
                                        color: '#ff5400'
                                    },
                                    {
                                        offset: 1,
                                        color: '#ff3600'
                                    }
                                ]
                            )
                        ],
                        [
                            0.8, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [{
                                        offset: 0,
                                        color: '#ff3600'
                                    },
                                    {
                                        offset: 1,
                                        color: '#ff1d00'
                                    }
                                ]
                            )
                        ],
                        [
                            0.9, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [{
                                        offset: 0,
                                        color: '#ff1d00'
                                    },
                                    {
                                        offset: 1,
                                        color: '#ff0700'
                                    }
                                ]
                            )
                        ],
                        [
                            1, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [{
                                        offset: 0,
                                        color: '#ff1d00'
                                    },
                                    {
                                        offset: 1,
                                        color: '#ff0700'
                                    }
                                ]
                            )
                        ]
                    ]
                }
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
        {
            name: '土建背景',
            type: 'gauge',
            radius: '45%',
            endAngle: -30,
            startAngle: 210,
            splitNumber: 0, //刻度数量
            axisLine: {
                lineStyle: {
                    shadowColor: 'rgba(93,183,255,0.50)',
                    shadowBlur: 10,
                    color: [
                        [1, '#c3e6fa']
                    ]
                }
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
        {
            name: '土建',
            title: {
                color: "#c3e6fa",
                fontWeight: 'bolder',
                fontSize: 20,
            },
            type: 'gauge',
            radius: '45%',
            splitNumber: 0, //刻度数量
            endAngle: -30,
            startAngle: 210,
            axisLine: {
                lineStyle: {
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10,
                    color: [
                        [
                            0.1, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [{
                                        offset: 0,
                                        color: '#5ff000'
                                    },
                                    {
                                        offset: 1,
                                        color: '#6fe700'
                                    }
                                ]
                            )
                        ],
                        [
                            0.2, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [{
                                        offset: 0,
                                        color: '#6fe700'
                                    },
                                    {
                                        offset: 1,
                                        color: '#86da00'
                                    }
                                ]
                            )
                        ],
                        [
                            0.3, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [{
                                        offset: 0,
                                        color: '#86da00'
                                    },
                                    {
                                        offset: 1,
                                        color: '#bebc00'
                                    }
                                ]
                            )
                        ],
                        [
                            0.4, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [{
                                        offset: 0,
                                        color: '#bebc00'
                                    },
                                    {
                                        offset: 1,
                                        color: '#ff9500'
                                    }
                                ]
                            )
                        ],
                        [
                            0.5, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [{
                                        offset: 0,
                                        color: '#ff9500'
                                    },
                                    {
                                        offset: 1,
                                        color: '#ff7500'
                                    }
                                ]
                            )
                        ],
                        [
                            0.6, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [{
                                        offset: 0,
                                        color: '#ff7500'
                                    },
                                    {
                                        offset: 1,
                                        color: '#ff5400'
                                    }
                                ]
                            )
                        ],
                        [
                            0.7, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [{
                                        offset: 0,
                                        color: '#ff5400'
                                    },
                                    {
                                        offset: 1,
                                        color: '#ff3600'
                                    }
                                ]
                            )
                        ],
                        [
                            0.8, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [{
                                        offset: 0,
                                        color: '#ff3600'
                                    },
                                    {
                                        offset: 1,
                                        color: '#ff1d00'
                                    }
                                ]
                            )
                        ],
                        [
                            0.9, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [{
                                        offset: 0,
                                        color: '#ff1d00'
                                    },
                                    {
                                        offset: 1,
                                        color: '#ff0700'
                                    }
                                ]
                            )
                        ],
                        [
                            1, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [{
                                        offset: 0,
                                        color: '#ff1d00'
                                    },
                                    {
                                        offset: 1,
                                        color: '#ff0700'
                                    }
                                ]
                            )
                        ]
                    ]
                }
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            detail: {
                show: false
            },
            pointer: {
                show: false
            },
            data: [{
                name: ""
            }]
        }
    ]
};