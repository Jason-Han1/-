option = {
    backgroundColor: '#0E1327',
    series: [{
            name: "上方线",
            type: "gauge",
            radius: '65%', // 动态
            startAngle: 115.5,
            endAngle: 67.5,
            axisLine: {
                lineStyle: {
                    color: [
                        [1, '#1A5B50'] // 动态
                    ],
                    width: 1
                }
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            detail: {
                show: false
            }
        },
        {
            name: "右方线",
            type: "gauge",
            radius: '65%', // 动态
            startAngle: 22.5,
            endAngle: -22.5,
            axisLine: {
                lineStyle: {
                    color: [
                        [1, '#1A5B50'] // 动态
                    ],
                    width: 1
                }
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            detail: {
                show: false
            }
        },
        {
            name: "下方线",
            type: "gauge",
            radius: '65%', // 动态
            startAngle: -67.5,
            endAngle: -115.5,
            axisLine: {
                lineStyle: {
                    color: [
                        [1, '#1A5B50'] // 动态
                    ],
                    width: 1
                }
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            detail: {
                show: false
            },

        },
        {
            name: "左方线",
            type: "gauge",
            radius: '65%', // 动态
            startAngle: -157.5,
            endAngle: 157.5,
            axisLine: {
                lineStyle: {
                    color: [
                        [1, '#1A5B50'] // 动态
                    ],
                    width: 1
                }
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            detail: {
                show: false
            },

        },
        {
            name: "右上方",
            type: "gauge",
            radius: '65%', // 动态
            startAngle: 60,
            endAngle: 30,
            splitNumber: 7,
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: '#1A5B50',
                    width: 4
                }
            },
            detail: {
                show: false
            },

        },
        {
            name: "右下方",
            type: "gauge",
            radius: '65%', // 动态
            startAngle: -30,
            endAngle: -60,
            splitNumber: 7,
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: '#1A5B50',
                    width: 4
                }
            },
            detail: {
                show: false
            },

        },
        {
            name: "左下方",
            type: "gauge",
            radius: '65%', // 动态
            startAngle: -122,
            endAngle: -152,
            splitNumber: 7,
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: '#1A5B50',
                    width: 4
                }
            },
            detail: {
                show: false
            },

        },
        {
            name: "左上方",
            type: "gauge",
            radius: '65%', // 动态
            startAngle: 152,
            endAngle: 122,
            splitNumber: 7,
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: '#1A5B50',
                    width: 4
                }
            },
            detail: {
                show: false
            },

        },
        {
            type: 'pie',
            radius: ['58%', '60%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,
            data: [{
                value: 90,
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#C4F72F' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#31F3FF' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                },
            }, {
                value: 10,
                itemStyle: {
                    color: '#2B3F43',
                },
            }]
        },
        {
            type: 'pie',
            radius: ['50%', '55%'],
            itemStyle: {
                label: {
                    show: true
                },
                labelLine: {
                    show: false
                }
            },
            hoverAnimation: false,
            data: [{
                value: 90,
                label: {
                    formatter: '{number|90}{percent|%}\n{text|这是文案}',
                    color: '#31F3FF',
                    fontSize: 60,
                    fontWeight: "bold",
                    position: 'center',
                    show: true,
                    rich: {
                        number: {
                            color: '#31F3FF',
                            fontSize: 60,
                            verticalAlign: 'bottom'
                        },
                        percent: {
                            color: '#31F3FF',
                            fontSize: 30,
                            verticalAlign: 'bottom'
                        },
                        text: {
                            color: '#FFFFFF',
                            fontSize: 30,
                            lineHeight: 50,
                            verticalAlign: 'bottom'

                        }
                    }
                },
                itemStyle: {
                    color: '#1D3B4F',
                },
            }, {
                value: 10,
                itemStyle: {
                    color: '#141D2C',
                },
            }]
        }
    ]
};