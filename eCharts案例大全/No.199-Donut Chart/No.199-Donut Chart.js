var num1 = 75;
var num2 = 80;
var num3 = 55;
option = {
    backgroundColor: '#393265',
    title: [{
        text: 'Donut Chart',
        x: '50%',
        y: 50,
        textAlign: 'center',
        textStyle: {
            fontSize: '30',
            fontWeight: '100',
            color: '#fff',
            textAlign: 'center',
        },
    }, {
        text: '16%',
        left: '19.5%',
        top: '47%',
        textAlign: 'center',
        textStyle: {
            fontSize: '50',
            fontWeight: '100',
            color: '#fff',
            textAlign: 'center',
        },
    }, {
        text: '7%',
        left: '49.5%',
        top: '47%',
        textAlign: 'center',
        textStyle: {
            fontSize: '50',
            fontWeight: '100',
            color: '#fff',
            textAlign: 'center',
        },
    }, {
        text: '31%',
        left: '79.5%',
        top: '47%',
        textAlign: 'center',
        textStyle: {
            fontSize: '50',
            fontWeight: '100',
            color: '#fff',
            textAlign: 'center',
        },
    }, ],
    series: [{
            type: 'pie',
            startAngle: 0,
            radius: ['31%', '33%'],
            center: ['20%', '50%'],
            data: [{
                    hoverOffset: 1,
                    value: num1,
                    name: '',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                                offset: 0,
                                color: '#ef29b1'
                            }, {
                                offset: 1,
                                color: '#fd7225'
                            }]),
                            shadowColor: '#1c1b3a',
                            shadowBlur: 1,
                            shadowOffsetX: '0',
                            shadowOffsetY: '25',
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    hoverAnimation: false,
                },
                {
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    value: 100 - num1,
                    hoverAnimation: false,
                    itemStyle: {
                        color: 'rgba(251, 200, 79, 0)',
                    },
                }
            ]
        },

        {
            type: 'pie',
            startAngle: 20,
            radius: ['31%', '33%'],
            center: ['50%', '50%'],
            data: [{
                    hoverOffset: 1,
                    value: num2,
                    name: '',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                                offset: 0,
                                color: '#ef29b1'
                            }, {
                                offset: 1,
                                color: '#fd7225'
                            }]),
                            shadowColor: '#1c1b3a',
                            shadowBlur: 1,
                            shadowOffsetX: '0',
                            shadowOffsetY: '25',
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    hoverAnimation: false,
                },
                {
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    value: 100 - num2,
                    hoverAnimation: false,
                    itemStyle: {
                        color: 'rgba(232, 85, 63, 0)',
                    },
                }
            ]
        },

        {
            type: 'pie',
            startAngle: -75,
            radius: ['31%', '33%'],
            center: ['80%', '50%'],
            data: [{
                    hoverOffset: 1,
                    value: num3,
                    name: '',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                                offset: 0,
                                color: '#ef29b1'
                            }, {
                                offset: 1,
                                color: '#fd7225'
                            }]),
                            shadowColor: '#1c1b3a',
                            shadowBlur: 1,
                            shadowOffsetX: '0',
                            shadowOffsetY: '25',
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    hoverAnimation: false,
                },
                {
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    value: 100 - num3,
                    hoverAnimation: false,
                    itemStyle: {
                        color: 'rgba(89, 180, 157, 0)',
                    },
                }
            ]
        },
    ]
};