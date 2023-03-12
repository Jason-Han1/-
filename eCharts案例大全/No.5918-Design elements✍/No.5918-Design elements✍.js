var num1 = 50;
var num2 = 60;
var num3 = 70;
option = {
    backgroundColor: '#0f253a',
    title: [{
        text: 'Design elements✍',
        x: '50%',
        y: 30,
        textAlign: 'center',
        textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 30,
            fontWeight: '100',
        },
    }, {
        text: 'Lorem ipsum',
        left: '49.5%',
        top: '48%',
        textAlign: 'center',
        textStyle: {
            fontSize: '16',
            color: '#fff',
            textAlign: 'center',
            fontWeight: '400',
        },
    }, ],
    series: [{
            type: 'pie',
            radius: ['25%', '32%'],
            center: ['50%', '50%'],
            z: 1,
            startAngle: 0,
            data: [{
                    hoverOffset: 1,
                    value: num1,
                    name: '',
                    itemStyle: {
                        color: '#df572d',
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter: "{r|{c}%}",
                            rich: {
                                r: {
                                    color: 'rgba(255,255,255,1)',
                                    fontWeight: 'bold',
                                    fontSize: 18,
                                },
                            },
                            position: 'inside',
                            color: '#FFF',
                            textShadowBlur: 5,
                            textShadowOffsetX: 1,
                            textShadowOffsetY: 2,
                            textShadowColor: 'rgba(0,0,0,0.3)',
                        },

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
                        color: 'rgba(0,0,0,0)',
                    },
                }
            ]
        },
        {
            type: 'pie',
            radius: ['28%', '29%'],
            center: ['50%', '50%'],
            z: 0,
            data: [{
                hoverOffset: 1,
                value: num1,
                name: '',
                itemStyle: {
                    color: '#d8d9d7',
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
            }, ]
        },
        {
            type: 'pie',
            radius: ['34%', '41%'],
            center: ['50%', '50%'],
            z: 1,
            startAngle: 10,
            data: [{
                    hoverOffset: 1,
                    value: num2,
                    name: '',
                    itemStyle: {
                        color: '#abc240',
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter: "{r|{c}%}",
                            rich: {
                                r: {
                                    color: 'rgba(255,255,255,1)',
                                    fontWeight: 'bold',
                                    fontSize: 18,
                                },
                            },
                            position: 'inside',
                            color: '#FFF',
                            textShadowBlur: 5,
                            textShadowOffsetX: 1,
                            textShadowOffsetY: 2,
                            textShadowColor: 'rgba(0,0,0,0.3)',
                        },

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
                        color: 'rgba(0,0,0,0)',
                    },
                }
            ]
        },
        {
            type: 'pie',
            radius: ['37%', '38%'],
            center: ['50%', '50%'],
            z: 0,
            data: [{
                hoverOffset: 1,
                value: num1,
                name: '',
                itemStyle: {
                    color: '#d8d9d7',
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
            }, ]
        },
        {
            type: 'pie',
            radius: ['43%', '50%'],
            center: ['50%', '50%'],
            z: 1,
            startAngle: 23,
            data: [{
                    hoverOffset: 1,
                    value: num3,
                    name: '',
                    itemStyle: {
                        color: '#50c8ac',
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter: "{r|{c}%}",
                            rich: {
                                r: {
                                    color: 'rgba(255,255,255,1)',
                                    fontWeight: 'bold',
                                    fontSize: 18,
                                },
                            },
                            position: 'inside',
                            color: '#FFF',
                            textShadowBlur: 5,
                            textShadowOffsetX: 1,
                            textShadowOffsetY: 2,
                            textShadowColor: 'rgba(0,0,0,0.3)',
                        },

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
                        color: 'rgba(0,0,0,0)',
                    },
                }
            ]
        },
        {
            type: 'pie',
            radius: ['46%', '47%'],
            center: ['50%', '50%'],
            z: 0,
            data: [{
                hoverOffset: 1,
                value: num1,
                name: '',
                itemStyle: {
                    color: '#d8d9d7',
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
            }, ]
        },
    ]
};