option = {
    backgroundColor:"#000",
    title: [{
            text: "ms-wbt-server",
            x: '3.5%',
            y: '66%',
            textStyle: {
                fontSize: 20,
                color: '#FFF',
                align: 'center',
                fontWeight: 400,
                fontFamily: 'Microsoft YaHei',
            }
        },
        {
            text: "database",
            x: '24%',
            y: '66%',
            textStyle: {
                fontSize: 20,
                color: '#FFF',
                align: 'center',
                fontWeight: 400,
                fontFamily: 'Microsoft YaHei',
            }
        }, {
            text: "ftp",
            x: '46%',
            y: '66%',
            textStyle: {
                fontSize: 20,
                color: '#FFF',
                fontWeight: 400,
                align: 'center',
                fontFamily: 'Microsoft YaHei',
            }
        }, {
            text: "dns",
            x: '65%',
            y: '66%',
            textStyle: {
                fontSize: 20,
                color: '#FFF',
                fontWeight: 400,
                align: 'center',
                fontFamily: 'Microsoft YaHei',
            }
        }, {
            text: "http",
            x: '85%',
            y: '66%',
            textStyle: {
                fontSize: 20,
                color: '#FFF',
                fontWeight: 400,
                align: 'center',
                fontFamily: 'Microsoft YaHei',
            }
        },
    ],
    series: [{
            name: '订单数量',
            type: 'pie',
            radius: '15%',
            center: ['10%', '55%'],
            clockwise: true,
            data: [{
                value: 656,
                itemStyle: {
                    normal: {
                        color: '#51ebb3'
                    },
                },
                name: '大于100'
            }, {
                value: 151,
                itemStyle: {
                    normal: {
                        color: '#015480'
                    },
                },
                name: '小于100'
            }, ],
            label: {
                normal: {
                    show: false,
                    textStyle: {
                        color: '#999',
                        fontSize: 12,
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
        },
        {
            name: '发货数量',
            type: 'pie',
            radius: '15%',
            center: ['28%', '55%'],
            clockwise: true,
            data: [{
                value: 486,
                itemStyle: {
                    normal: {
                        color: '#c1fc7f'
                    },
                },
                name: '大于100'
            }, {
                value: 251,
                itemStyle: {
                    normal: {
                        color: '#015480'
                    },
                },
                name: '小于100'
            }, ],
            label: {
                normal: {
                    show: false,
                    textStyle: {
                        color: '#110',
                        fontSize: 12,
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
        },
        {
            name: '发货数量',
            type: 'pie',
            radius: '15%',
            center: ['48%', '55%'],
            clockwise: true,
            data: [{
                value: 86,
                itemStyle: {
                    normal: {
                        color: '#e9d850'
                    },
                },
                name: '大于100'
            }, {
                value: 251,
                itemStyle: {
                    normal: {
                        color: '#015480'
                    },
                },
                name: '小于100'
            }, ],
            label: {
                normal: {
                    show: false,
                    textStyle: {
                        color: '#110',
                        fontSize: 12,
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            }
        },
        {
            name: '发货数量',
            type: 'pie',
            radius: '15%',
            center: ['68%', '55%'],
            clockwise: true,
            data: [{
                value: 22,
                itemStyle: {
                    normal: {
                        color: '#eb9e5f'
                    },
                },
                name: '大于100'
            }, {
                value: 85,
                itemStyle: {
                    normal: {
                        color: '#015480'
                    },
                },
                name: '小于100'
            }, ],
            label: {
                normal: {
                    show: false,
                    textStyle: {
                        color: '#110',
                        fontSize: 12,
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            }
        },
        {
            name: '发货数量',
            type: 'pie',
            radius: '15%',
            center: ['88%', '55%'],
            clockwise: true,
            data: [{
                value: 15,
                itemStyle: {
                    normal: {
                        color: '#fe8175'
                    },
                },
                name: '大于100'
            }, {
                value: 85,
                itemStyle: {
                    normal: {
                        color: '#015480'
                    },
                },
                name: '小于100'
            }],
            label: {
                normal: {
                    show: false,
                    textStyle: {
                        color: '#110',
                        fontSize: 12,
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
        }

    ]
};