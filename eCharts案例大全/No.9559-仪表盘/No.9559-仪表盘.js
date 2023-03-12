var value = 10;
var option = {
    backgroundColor: "transparent",
    xAxis: {
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    series: [
        // 内圆
        {
            type: 'pie',
            radius: ['0', '45%'],
            center: ['50%', '50%'],
            z: 4,
            label: {
                normal: {
                    position: "center",

                }
            },
            hoverAnimation: false,
            data: [{
                name: '剩余天数',
                value: 10,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: '#3f2c75'
                        }, {
                            offset: 0.5,
                            color: '#a290d5'
                        }, {
                            offset: 1,
                            color: '#3f2c75'
                        }])
                    }

                },
                label: {
                    normal: {
                        rich: {
                            a: {
                                color: '#fff',
                                align: 'center',
                                fontSize: 23,
                                fontWeight: "normal"
                            },
                            b: {
                                color: '#fff',
                                align: 'center',
                                fontSize: 54
                            },
                            c: {
                                color: '#fff',
                                align: 'center',
                                fontSize: 22
                            }

                        },
                        formatter: function(params) {
                            return "{a|" + "剩余天数" + "}\n\n" + "{b|" + params.value + "}" + "{c|天}";
                        },
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '14',
                            fontWeight: 'normal',
                            color: '#fff'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }

                }
            }],
        },
        //进度图
        {
            type: 'gauge',
            radius: '60%',
            center: ['50%', '50%'],
            min: 0,
            max: 1000,
            z: 5,
            splitNumber: 0, //刻度数量
            startAngle: 220,
            endAngle: -40,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 20,
                    color: [
                        [
                            1, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#3f2c75'
                                    },
                                    {
                                        offset: 1,
                                        color: '#a290d5'
                                    }
                                ]
                            )
                        ]
                    ]
                }
            },
            //分隔线样式。
            splitLine: {
                show: false,
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
                show: false,
                offsetCenter: [0, '-20%'], // x, y，单位px
                textStyle: {
                    color: '#ddd',
                    fontSize: 11
                }
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: false,
                offsetCenter: [0, '10%'],
                color: '#ddd',
                formatter: function(params) {
                    return params
                },
                textStyle: {
                    fontSize: 60
                }
            },
            data: [{
                name: "在线数量",
                value: 11111111111111111
            }]
        },
        //刻度尺
        {
            // name: "白色圈刻度",
            type: "gauge",
            radius: "67%",
            startAngle: 220,
            endAngle: -40,
            z: 2,
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#3f2c75',
                    width: 1
                },
                length: -8
            }, //刻度样式
            splitLine: {
                show: true,
                length: -20,
                lineStyle: {
                    color: '#3f2c75'
                }
            }, //分隔线样式
            axisLabel: {
                color: 'rgba(255,255,255,0)',
                fontSize: 12,
            }, //刻度节点文字颜色
            pointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    opacity: 0
                }
            },
            title: {
                show: true,
                offsetCenter: [-65, '84%'], // x, y，单位px
                textStyle: {
                    color: '#ddd',
                    fontSize: 11
                }
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: true,
                offsetCenter: [0, '84%'],
                color: '#ddd',
                formatter: function(params) {
                    return ''
                },
                textStyle: {
                    fontSize: 28
                }
            }
        },
    ]
}