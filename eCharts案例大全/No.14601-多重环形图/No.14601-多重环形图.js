var labelLine = {
    show: false
};
option = {
    textStyle: {
        fontSize: 30,
        fontWeight: 'normal'
    },
    backgroundColor:'rgba(0,0,0,0.8)',
    title: {
        show: true,
        text: '多重环形图',
        top: 'middle',
        left: 405,
        textStyle: {
            color: 'yellow',
            fontSize: 32,
            fontWeight: 'bold'
        }
    },
    series: [{
        name: '',
        type: 'pie',
        radius: ['75%', '85%'],
        center: ['60%', '50%'],
        startAngle: 0,
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: ((100 - 95)),
            name: 'o1',
            itemStyle: {
                normal: {
                    opacity: 0
                }
            }
        }, {
            value: 95 / 2,
            name: '准确率',
            itemStyle: {
                normal: {
                    color: 'blue',
                    shadowBlur:35,
                    shadowColor:'white',
                    label: {
                        show: true,
                        padding: [-100, 0, 0, 0],
                        position: 'outside',
                        formatter: function(data) {
                            return data.name + ' ' + data.value * 2 + '%'
                        }
                    },
                    labelLine: labelLine
                }
            }
        }, {
            value: ((100 - 95)),
            name: 'o2',
            itemStyle: {
                normal: {
                    opacity: 0
                }
            }
        }]
    }, {
        name: '',
        type: 'pie',
        radius: ['65%', '75%'],
        center: ['60%', '50%'],
        startAngle: 0,
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: ((100 - 90)),
            name: 'o1',
            itemStyle: {
                normal: {
                    opacity: 0
                }
            }
        }, {
            value: 90 / 2,
            name: '覆盖率',
            itemStyle: {
                normal: {
                    color: 'yellow',
                    shadowBlur:35,
                    shadowColor:'white',
                    label: {
                        show: true,
                        padding: [0, 0, 0, 0],
                        position: 'outside',
                        formatter: function(data) {
                            return data.name + ' ' + data.value * 2 + '%'
                        }
                    },
                    labelLine: labelLine
                }
            }
        }, {
            value: ((100 - 90)),
            name: 'o2',
            itemStyle: {
                normal: {
                    opacity: 0
                }
            }
        }]
    }, {
        name: '',
        type: 'pie',
        radius: ['55%', '65%'],
        center: ['60%', '50%'],
        startAngle: 0,
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: ((100 - 83)),
            name: 'o1',
            itemStyle: {
                normal: {
                    opacity: 0
                }
            }
        }, {
            value: 83 / 2,
            name: '涨幅',
            itemStyle: {
                normal: {
                    color: 'white',
                    shadowBlur:35,
                    shadowColor:'white',
                    label: {
                        show: true,
                        padding: [100, 30, 0, 0],
                        position: 'outside',
                        formatter: function(data) {
                            return data.name + ' ' + data.value * 2 + '%'
                        }
                    },
                    labelLine: labelLine
                }
            }
        }, {
            value: ((100 - 83)),
            name: 'o2',
            itemStyle: {
                normal: {
                    opacity: 0
                }
            }
        }]
    }]
};