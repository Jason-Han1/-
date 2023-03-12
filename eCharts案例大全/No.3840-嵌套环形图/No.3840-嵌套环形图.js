option = {
    backgroundColor: "#062a44",
    title: [{
            text: 25151,
            left: '49%',
            top: '45%',
            textAlign: 'center',
            textStyle: {
                fontSize: '16',
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center'
            }
        },
        {
            text: '累积覆盖牛只',
            left: '50%',
            top: '51%',
            textAlign: 'center',
            textStyle: {
                fontSize: '12',
                color: 'white',
                textAlign: 'center'
            }
        }
    ],
    grid: {
        width: '100%'
    },
    series: [{
            name: '由内而外第七个',
            type: 'pie',
            radius: ['90%', '65%'],
            hoverAnimation: false,
            startAngle: 225,
            endAngle: -45,
            min: 0,
            max: 100,
            itemStyle: {
                color: 'rgba(19,104,177,0.65)'
            },
            labelLine: {
                show: false
            },
            pointer: {
                show: false //指针
            },
            axisLine: {
                //整体颜色
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                //隐藏0和100旁边的白色刻度
                show: false
            },
            axisLabel: {
                show: false
            },
            detail: {
                //隐藏数据值
                show: false
            },
            data: [{
                value: 20
            }]
        },
        {
            //由里到外第六层
            name: '刻度',
            type: 'gauge',
            radius: '66%',
            min: 0, //最小刻度
            max: 10, //最大刻度
            splitNumber: 5, //刻度数量
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
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 7,
                lineStyle: {
                    color: '#14BADB',
                    width: 1
                },
                length: -8
            }, //刻度样式
            splitLine: {
                show: true,
                length: -20,
                lineStyle: {
                    color: '#14BADB'
                }
            }, //分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
        {
            //由里到外第五层
            type: 'pie',
            startAngle: 225,
            endAngle: -45,
            center: ['50%', '50%'],
            radius: ['55%', '53.5%'],
            hoverAnimation: false,
            data: [{
                    name: '',
                    value: 100,
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#1FA7E3'
                        }
                    }
                },
                {
                    name: '',
                    value: 35,
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0
                        }
                    }
                }
            ]
        },
        {
            //由里到外第四层
            type: 'gauge',
            radius: '45%',
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
                            0.9,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: 'rgba(10,235,176,0.9)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(12,91,212,0.9)'
                                }
                            ])
                        ],
                        [1, '#45C9FF']
                    ]
                }
            },
            //分隔线样式。
            splitLine: {
                show: false
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
                offsetCenter: [0, '-22%'], // x, y，单位px
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                }
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: true,
                offsetCenter: [0, '12%'],
                color: '#ffffff',
                formatter: function(params) {
                    return params
                },
                textStyle: {
                    fontSize: 14
                }
            },
            data: [{
                name: '',
                value: 0
            }]
        },
        {
            ////由里到外第三层 线
            type: 'pie',
            startAngle: 225,
            endAngle: -45,
            center: ['50%', '50%'],
            radius: ['31%', '31.1%'],
            hoverAnimation: false,
            data: [{
                    name: '',
                    value: 100,
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#1C96D4'
                        }
                    }
                },
                {
                    name: '',
                    value: 35,
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0
                        }
                    }
                }
            ]
        },
        {
            //由里到外第二层
            name: '刻度',
            type: 'gauge',
            radius: '26%',
            min: 0, //最小刻度
            max: 10, //最大刻度
            splitNumber: 5, //刻度数量
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
            }, //刻度标签。
            axisTick: {
                show: false,
                splitNumber: 5,
                lineStyle: {
                    color: '#018CF8',
                    width: 1
                },
                length: -2
            }, //刻度样式
            splitLine: {
                show: true,
                length: -10,
                lineStyle: {
                    color: '#018CF8'
                }
            }, //分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
        {
            name: '最里层',
            type: 'pie',
            radius: '24%',
            hoverAnimation: false,
            startAngle: 225,
            endAngle: -45,
            min: 0,
            max: 100,
            labelLine: {
                show: false
            },
            pointer: {
                show: false //指针
            },
            axisLine: {
                //整体颜色
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                //隐藏0和100旁边的白色刻度
                show: false
            },
            axisLabel: {
                show: false
            },
            data: [{
                value: 20,
                itemStyle: {
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                                offset: 1,
                                color: 'rgba(27,43,134, 1)' // 0% 处的颜色
                            },
                            {
                                offset: 0.85,
                                color: 'rgba(39,60,158, 1)' // 50% 处的颜色
                            },
                            {
                                offset: 0,
                                color: 'rgba(73,121,240, 1)' // 100% 处的颜色
                            }
                        ],
                        global: false // 缺省为 false
                    }
                }
            }]
        }
    ]
};