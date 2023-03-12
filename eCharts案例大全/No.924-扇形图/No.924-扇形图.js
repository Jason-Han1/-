option = {
    
    series: [
        {
            name: ' 现有公司（家）',
            type: 'pie',
            radius: ['25%', '30%'],
            center: ['30%', '30%'],
            startAngle: 225,
            color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#00a2ff'
            }, {
                offset: 1,
                color: '#70ffac'
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
                 name: '现有公司',
                    label: {
                        normal: {
                            formatter: '现有公司',
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
                            formatter: '\n35',
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
                            formatter: '家',
                            textStyle: {
                                color: '#fff',
                                fontSize: 16

                            }
                        }
                    }
            }]
        },
        {
            name: ' 在售项目',
            type: 'pie',
            radius: ['25%', '30%'],
            center: ['70%', '30%'],
            startAngle: 225,
            color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#00a2ff'
            }, {
                offset: 1,
                color: '#70ffac'
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
                 name: '在售项目',
                    label: {
                        normal: {
                            formatter: '在售项目',
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
                            formatter: '\n3534',
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
                            formatter: '个',
                            textStyle: {
                                color: '#fff',
                                fontSize: 16

                            }
                        }
                    }
            }]
        },
        {
            name: ' 现有门店',
            type: 'pie',
            radius: ['25%', '30%'],
            center: ['30%', '70%'],
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
                            "color": '#f125ff'
                        }, {
                            "offset": 1,
                            "color": '#2dcbff'
                        }]),
                    }
                },
                 name: '现有门店',
                    label: {
                        normal: {
                            formatter: '现有门店',
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
                            formatter: '\n3534',
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
                            formatter: '家',
                            textStyle: {
                                color: '#fff',
                                fontSize: 16

                            }
                        }
                    }
            }]
        },
         {
            name: '总人数',
            type: 'pie',
            radius: ['25%', '30%'],
            center: ['70%', '70%'],
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
                            "color": '#f125ff'
                        }, {
                            "offset": 1,
                            "color": '#2dcbff'
                        }]),
                    }
                },
                 name: '总人数',
                    label: {
                        normal: {
                            formatter: '总人数',
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
                            formatter: '\n835341',
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
                            formatter: '人',
                            textStyle: {
                                color: '#fff',
                                fontSize: 16

                            }
                        }
                    }
            }]
        },
    ]
};