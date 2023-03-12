option = {
    backgroundColor:'#152439',
    title: [{
        text: '内容分类',
        x: 'center',
        y: 'bottom',
        textStyle: {
            color: '#fff',
            fontSize: 18,
            fontWeight: 'normal'
        }
    }, {
        text: '一级',
        left: '17.5%',
        top: '60%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '28',
            color: '#fff',
            textAlign: 'center',
        },
    }, {
        text: '二级',
        left: '49.5%',
        top: '60%',
        textAlign: 'center',
        textStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: '28',
            textAlign: 'center',
        },
    }, {
        text: '三级',
        left: '81.5%',
        top: '60%',
        textAlign: 'center',
        textStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: '28',
            textAlign: 'center',
        },
    }],
    series: [{
            type: 'pie',
            radius: ['30%', '35%'],
            center: ['18%', '50%'],
            startAngle: 225,
            color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#3e9def'
            }, {
                offset: 1,
                color: '#0356e2'
            }]), "transparent"],
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
                name: '',
                label: {
                    normal: {
                        formatter: '35%',
                        textStyle: {
                            color: '#0355df',
                            fontSize: 50

                        }
                    }
                }
            }, {
                value: 25,
                name: '%',

            }]
        },
        {
            name: '信息',
            type: 'pie',
            radius: ['30%', '35%'],
            center: ['50%', '50%'],
            startAngle: 225,
            color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#5ffe70'
            }, {
                offset: 1,
                color: '#41e350'
            }]), "transparent"],
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
                    name: '信息',
                    label: {
                        normal: {
                            formatter: '',
                            textStyle: {
                                color: '#fff',
                                fontSize: 16

                            }
                        }
                    }
                }, {
                    value: 25,
                    name: '%',
                    label: {
                        normal: {
                            formatter: '3534%',
                            textStyle: {
                                color: '#3de351',
                                fontSize: 50

                            }
                        }
                    }
                },
            ]
        },
        {
            name: '数量',
            type: 'pie',
            radius: ['30%', '35%'],
            center: ['82%', '50%'],
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
                    "itemStyle": {
                        "normal": {
                            "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                "offset": 0,
                                "color": '#ffad33'
                            }, {
                                "offset": 1,
                                "color": '#ff8b04'
                            }]),
                        }
                    },
                    name: '数量',
                    label: {
                        normal: {
                            formatter: '',
                            textStyle: {
                                color: '#fff',
                                fontSize: 16

                            }
                        }
                    }
                }, {
                    value: 25,
                    name: '%',
                    label: {
                        normal: {
                            formatter: '3534%',
                            textStyle: {
                                color: '#ff8a06',
                                fontSize: 50

                            }
                        }
                    }
                },
                {
                    value: 0,
                    name: '%',

                }
            ]
        }
    ]
};