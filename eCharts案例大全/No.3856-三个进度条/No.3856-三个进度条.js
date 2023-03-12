var num1 = 75;
var num2 = 80;
var num3 = 55;
option = {
    backgroundColor: '#393265',
    title: [{
        text: '16%',
        left: '15%',
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
            radius: ['30%', '33%'],
            center: ['15%', '50%'],
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
                            }])
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
                // 这块设置空白颜色
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
            radius: ['45%', '50%'],
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
                            }])
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
            radius: ['30%', '33%'],
            center: ['85%', '50%'],
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
                            }])
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
        //里面嵌套的园
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['29%', '28.6%'],
            center: ['15%', '50%'],
            startAngle: 16, //起始角度
            tooltip: {
                show: false
            },
            label: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 20,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: "#2CB7D7",
                            borderColor: "#2CB7D7",
                        }
                    }
                },
                {
                    value: 30,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderColor: 'transparent',

                        }
                    }
                },
                {
                    value: 20,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: "#2CB7D7",
                            borderColor: "#2CB7D7",
                        }
                    }
                },
                {
                    value: 30,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderColor: 'transparent',

                        }
                    }
                },
                {
                    value: 20,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: "#2CB7D7",
                            borderColor: "#2CB7D7",
                        }
                    }
                },
                {
                    value: 30,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderColor: 'transparent',

                        }
                    }
                },
                {
                    value: 20,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: "#2CB7D7",
                            borderColor: "#2CB7D7",
                        }
                    }
                },
                {
                    value: 30,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderColor: 'transparent',

                        }
                    }
                }
            ]
        },
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['44%', '43.6%'],
            center: ['50%', '50%'],
            startAngle: 16, //起始角度
            tooltip: {
                show: false
            },
            label: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 20,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: "#2CB7D7",
                            borderColor: "#2CB7D7",
                        }
                    }
                },
                {
                    value: 30,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderColor: 'transparent',

                        }
                    }
                },
                {
                    value: 20,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: "#2CB7D7",
                            borderColor: "#2CB7D7",
                        }
                    }
                },
                {
                    value: 30,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderColor: 'transparent',

                        }
                    }
                },
                {
                    value: 20,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: "#2CB7D7",
                            borderColor: "#2CB7D7",
                        }
                    }
                },
                {
                    value: 30,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderColor: 'transparent',

                        }
                    }
                },
                {
                    value: 20,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: "#2CB7D7",
                            borderColor: "#2CB7D7",
                        }
                    }
                },
                {
                    value: 30,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderColor: 'transparent',

                        }
                    }
                }
            ]
        },
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['29%', '28.6%'],
            center: ['85%', '50%'],
            startAngle: 16, //起始角度
            tooltip: {
                show: false
            },
            label: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 20,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: "#2CB7D7",
                            borderColor: "#2CB7D7",
                        }
                    }
                },
                {
                    value: 30,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderColor: 'transparent',

                        }
                    }
                },
                {
                    value: 20,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: "#2CB7D7",
                            borderColor: "#2CB7D7",
                        }
                    }
                },
                {
                    value: 30,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderColor: 'transparent',

                        }
                    }
                },
                {
                    value: 20,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: "#2CB7D7",
                            borderColor: "#2CB7D7",
                        }
                    }
                },
                {
                    value: 30,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderColor: 'transparent',

                        }
                    }
                },
                {
                    value: 20,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: "#2CB7D7",
                            borderColor: "#2CB7D7",
                        }
                    }
                },
                {
                    value: 30,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderColor: 'transparent',

                        }
                    }
                }
            ]
        }
    ]
};