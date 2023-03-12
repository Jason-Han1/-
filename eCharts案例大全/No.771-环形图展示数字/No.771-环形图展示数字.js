option = {
    backgroundColor:'black',
    series: [
        {
            name: '遥感解译信息',
            type: 'pie',
            radius: ['25%', '30%'],
            center: ['15%', '50%'],
            startAngle: 225,
            color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#FDFF5C'
            }, {
                offset: 1,
                color: '#FFDB5C'
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
                 name: '遥感解译信息',
                    label: {
                        normal: {
                            formatter: '遥感解译信息',
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
                            formatter: '\n\n35',
                            textStyle: {
                                color: '#007ac6',
                                fontSize: 30

                            }
                        }
                    }
            },
            {
                value: 0,
                name: '%',
                    label: {
                        normal: {
                            formatter: '',
                            textStyle: {
                                color: '#fff',
                                fontSize: 16

                            }
                        }
                    }
            }]
        },
        {
            name: '局部监测信息',
            type: 'pie',
            radius: ['25%', '30%'],
            center: ['50%', '50%'],
            startAngle: 225,
            color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#9FE6B8'
            }, {
                offset: 1,
                color: '#32C5E9'
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
                 name: '局部监测信息',
                    label: {
                        normal: {
                            formatter: '局部监测信息',
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
                            formatter: '\n\n3534',
                            textStyle: {
                                color: '#007ac6',
                                fontSize: 30

                            }
                        }
                    }
            },
            {
                value: 0,
                name: '%',
                    label: {
                        normal: {
                            formatter: '',
                            textStyle: {
                                color: '#fff',
                                fontSize: 16

                            }
                        }
                    }
            }]
        },
        {
            name: '告警设备数量',
            type: 'pie',
            radius: ['25%', '30%'],
            center: ['85%', '50%'],
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
                            "color": '#FF9F7F'
                        }, {
                            "offset": 1,
                            "color": '#FB7293'
                        }]),
                    }
                },
                 name: '告警设备数量',
                    label: {
                        normal: {
                            formatter: '告警设备数量',
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
                            formatter: '\n\n3534',
                            textStyle: {
                                color: '#f125ff',
                                fontSize: 30

                            }
                        }
                    }
            },
            {
                value: 0,
                name: '%',
                    label: {
                        normal: {
                            formatter: '',
                            textStyle: {
                                color: '#fff',
                                fontSize: 16

                            }
                        }
                    }
            }]
        }
    ]
};