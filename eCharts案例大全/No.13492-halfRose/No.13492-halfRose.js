app.title = '环形图';
option = {
    backgroundColor: '#000',
    // color: ['#FE0404', '#00CEFF', '#00DC58', '#FBA200', '#00CEFF'],
    tooltip: {
        show: false
    },
    series: [{
            name: '访问来源',
            type: 'pie',
            center: ['20%', '50%'],
            radius: ['10%', '45%'],
            roseType: 'area',
            avoidLabelOverlap: false,
            label: {
                normal: {
                    formatter: '{b|{b}} {c|{c}} 台',
                    color: '#fff',
                    rich: {
                        b: {
                            color: '#fff'
                        },
                        c: {
                            fontWeight: 'bold'
                        }
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    lineStyle: {
                        color: '#274862'
                    },
                    length: 0,
                    length2: 200
                }
            },
            data: [{
                    value: 20,
                    name: '危急',
                    itemStyle: {
                        normal: {
                            color: '#FE0404'
                        }
                    }
                },
                {
                    value: 34,
                    name: '高危',
                    itemStyle: {
                        normal: {
                            color: '#FBA200'
                        }
                    }
                },
                {
                    value: 160,
                    name: '中危',
                    itemStyle: {
                        normal: {
                            color: '#00CEFF'
                        }
                    }
                },
                {
                    value: 216,
                    name: '低危',
                    itemStyle: {
                        normal: {
                            color: '#00DC58'
                        }
                    }
                },
                {
                    name: 'x',
                    value: 0,
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    name: 'y',
                    value: 0,
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    name: 'z',
                    value: 0,
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    name: 'w',
                    value: 0,
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            ],
            z: 5
        },
        {
            type: 'pie',
            radius: '60%',
            center: ['20%', '50%'],
            data: [{
                value: 1,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        borderColor: '#1F2C3A'
                    }
                },
            }, {
                value: 1,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        borderColor: 'rgba(0,0,0,0)'
                    }
                }
            }],
            labelLine: {
                normal: {
                    show: false
                }
            },
            z: 6,
            tooltip: {
                show: false
            },
            hoverAnimation: false
        },
        {
            name: 'x',
            type: 'pie',
            radius: ['0', '10%'],
            center: ['20%', '50%'],
            data: [{
                value: 1,
                itemStyle: {
                    normal: {
                        color: '#243443',
                        shadowBlur: 50,
                        shadowColor: '#202E3B'
                    },
                    emphasis: {
                        color: '#243443',
                        shadowBlur: 50,
                        shadowColor: '#202E3B'
                    }
                }
            }, {
                value: 1,
                itemStyle: {
                    normal: {
                        opacity: 0
                    },
                    emphasis: {
                         opacity: 0
                    }
                }
            }],
            labelLine: {
                normal: {
                    show: false
                }
            },
            z: 2,
            tooltip: {
                show: false
            },
            hoverAnimation: false
        },
        {
            name: 'x',
            type: 'pie',
            radius: ['10%', '20%'],
            center: ['20%', '50%'],
            data: [{
                value: 1,
                itemStyle: {
                    normal: {
                        color: '#202E3B',
                        shadowBlur: 50,
                        shadowColor: '#1C2834'
                    },
                    emphasis: {
                        color: '#202E3B',
                        shadowBlur: 50,
                        shadowColor: '#1C2834'
                    }
                }
            }, {
                value: 1,
                itemStyle: {
                    normal: {
                        opacity: 0
                    },
                    emphasis: {
                         opacity: 0
                    }
                }
            }],
            labelLine: {
                normal: {
                    show: false
                }
            },
            z: 2,
            tooltip: {
                show: false
            },
            hoverAnimation: false
        },
        {
            name: 'x',
            type: 'pie',
            radius: ['20%', '30%'],
            center: ['20%', '50%'],
            data: [{
                value: 1,
                itemStyle: {
                    normal: {
                        color: '#1C2834',
                        shadowBlur: 50,
                        shadowColor: '#1b1e25'
                    },
                    emphasis: {
                        color: '#1C2834',
                        shadowBlur: 50,
                        shadowColor: '#1b1e25'
                    }
                }
            }, {
                value: 1,
                itemStyle: {
                    normal: {
                        opacity: 0
                    },
                    emphasis: {
                         opacity: 0
                    }
                }
            }],
            labelLine: {
                normal: {
                    show: false
                }
            },
            z: 2,
            tooltip: {
                show: false
            },
            hoverAnimation: false
        },
        {
            name: 'x',
            type: 'pie',
            radius: ['30%', '40%'],
            center: ['20%', '50%'],
            data: [{
                value: 1,
                itemStyle: {
                    normal: {
                        color: '#111A27',
                        shadowBlur: 50,
                        shadowColor: '#1b1e25'
                    },
                    emphasis: {
                        color: '#111A27',
                        shadowBlur: 50,
                        shadowColor: '#1b1e25'
                    }
                }
            }, {
                value: 1,
                itemStyle: {
                    normal: {
                        opacity: 0
                    },
                    emphasis: {
                         opacity: 0
                    }
                }
            }],
            labelLine: {
                normal: {
                    show: false
                }
            },
            z: 2,
            tooltip: {
                show: false
            },
            hoverAnimation: false
        },
        {
            name: 'x',
            type: 'pie',
            radius: ['40%', '50%'],
            center: ['20%', '50%'],
            data: [{
                value: 1,
                itemStyle: {
                    normal: {
                        color: '#111A27',
                        shadowBlur: 50,
                        shadowColor: '#1b1e25'
                    },
                    emphasis: {
                        color: '#111A27',
                        shadowBlur: 50,
                        shadowColor: '#1b1e25'
                    }
                }
            }, {
                value: 1,
                itemStyle: {
                    normal: {
                        opacity: 0
                    },
                    emphasis: {
                         opacity: 0
                    }
                }
            }],
            labelLine: {
                normal: {
                    show: false
                }
            },
            z: 2,
            tooltip: {
                show: false
            },
            hoverAnimation: false
        },
        {
            name: 'x',
            type: 'pie',
            radius: ['50%', '60%'],
            center: ['20%', '50%'],
            itemStyle: {
                normal: {
                    color: '#0C141C',
                    shadowBlur: 50,
                    shadowColor: '#1b1e25'
                },
                emphasis: {
                    color: '#0C141C',
                    shadowBlur: 50,
                    shadowColor: '#1b1e25'
                }
            },
            data: [{
                value: 1
            }, {
                value: 1,
                itemStyle: {
                    normal: {
                        opacity: 0
                    },
                    emphasis: {
                         opacity: 0
                    }
                }
            }],
            labelLine: {
                normal: {
                    show: false
                }
            },
            z: 2,
            tooltip: {
                show: false
            },
            hoverAnimation: false
        }
    ]
};