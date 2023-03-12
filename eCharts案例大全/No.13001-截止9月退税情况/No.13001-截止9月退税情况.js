var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: "rgba(0,0,0,0)",
        borderWidth: 0
    },
    emphasis: {
        color: "rgba(0,0,0,0)",
        borderWidth: 0
    }
};


var dataStyle = {
    normal: {
        formatter: '{c}%',
        position: 'center',
        show: true,
        textStyle: {
            fontSize: '28',
            fontWeight: 'normal',
            color: '#fff'
        }
    }
};


option = {
    backgroundColor: '#142058',
    title: [
        {
        text: '截止9月退税情况',
        left:'center',
        x: '20',
        y: '80',
        textStyle: {
            color: '#fff',
            fontSize: 20
        }
    },{
        text: '出口退库',
        left: '29.8%',
        top: '60%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '16',
            color: '#fff',
            textAlign: 'center',
        },
    }, {
        text: '一般退库',
        left: '70%',
        top: '60%',
        textAlign: 'center',
        textStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: '16',
            textAlign: 'center',
        },
    }],
    series: [{
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['25%', '31%'],
            center: ['30%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 75,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#99da69'
                            }, {
                                offset: 1,
                                color: '#01babc'
                            }]),
                        }
                    },
                    label: dataStyle,
                }, {
                    value: 25,
                    itemStyle: placeHolderStyle,
                },

            ]
        },
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['25%', '31%'],
            center: ['70%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 25,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#9f3edd'
                            }, {
                                offset: 1,
                                color: '#4897f6'
                            }]),
                        }
                    },
                    label: dataStyle,
                }, {
                    value: 75,
                    itemStyle: placeHolderStyle,
                },

            ]
        },
        
        //外圈的边框
        {
            // name: '总人数',
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['31%', '32%'],
            center: ['30%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 75,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#01babc'
                            }, {
                                offset: 1,
                                color: '#99da69'
                            }]),
                        }
                    },
                }, {
                    value: 25,
                    itemStyle: placeHolderStyle,
                },

            ]
        },
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['31%', '32%'],
            center: ['70%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 75,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#4897f6'
                            }, {
                                offset: 1,
                                color: '#9f3edd'
                            }]),
                        }
                    },
                }, {
                    value: 25,
                    itemStyle: placeHolderStyle,
                },

            ]
        },
    ]
};