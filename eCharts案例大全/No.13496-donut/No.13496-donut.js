app.title = '环形图';
option = {
    backgroundColor: '#000',
    color: ['#FE0404', '#00DC58', '#FBA200', '#00CEFF'],
    tooltip: {
        show: false
    },
    series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['30%', '45%'],
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
                    length: 45
                }
            },
            data: [{
                    value: 335,
                    name: '危急'
                },
                {
                    value: 310,
                    name: '高危'
                },
                {
                    value: 234,
                    name: '中危'
                },
                {
                    value: 135,
                    name: '低危'
                }
            ],
            z: 5
        },
        {
            type: 'pie',
            radius: '60%',
            data: [{
                value: 430,
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
            z: 5,
            tooltip: {
                show: false
            },
            hoverAnimation: false,
            label: {
                normal: {
                    position: 'center',
                    formatter: '{c|{c}} {text|台}',
                    color: '#fff',
                    rich: {
                        c: {
                            fontWeight: 'bold',
                            color: '#fff',
                            fontSize: 40
                        },
                        text: {
                            color: '#5B7DA3'
                        }
                    }
                }
            }
        },
        {
            type: 'pie',
            radius: '60%',
            data: [{
                value: 430,
                itemStyle: {
                    normal: {
                        borderWidth: 2,
                        color: 'rgba(0,0,0,0)',
                        borderColor: '#202D3C'
                    }
                }
            }],
            labelLine: {
                normal: {
                    show: false
                }
            },
            z: 1,
            tooltip: {
                show: false
            },
            hoverAnimation: false,
            label: {
                normal: {
                   show: false
                }
            }
        },
        {
            name: 'x',
            type: 'pie',
            radius: ['0', '10%'],
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
            radius: ['45%', '55%'],
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
            radius: ['45%', '50%'],
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