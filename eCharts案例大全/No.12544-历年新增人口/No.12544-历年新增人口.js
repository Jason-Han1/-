option = {
    backgroundColor: "#404A59",
    color: ['#ffd285', '#ff733f', '#ec4863'],

    title: [{
        text: '历年新增人口',
        left: '1%',
        top: '6%',
        textStyle: {
            color: '#fff'
        }
    }, {
        text: '新增人口画像',
        left: '83%',
        top: '6%',
        textAlign: 'center',
        textStyle: {
            color: '#fff'
        }
    }],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        x: 300,
        top: '7%',
        textStyle: {
            color: '#ffd285',
        },
        data: ['非农业', '农业', '其他']
    },
    grid: {
        left: '1%',
        right: '35%',
        top: '16%',
        bottom: '6%',
        containLabel: true
    },
    toolbox: {
        "show": false,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        "axisLine": {
            lineStyle: {
                color: '#FF4500'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        },
        boundaryGap: false,
        data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
    },
    yAxis: {
        "axisLine": {
            lineStyle: {
                color: '#fff'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#fff'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        },
        type: 'value'
    },
    series: [{
            name: '非农业',
            smooth: true,
            type: 'line',
            symbolSize: 8,
            symbol: 'circle',
            data: [90, 110, 139, 142, 130, 142, 130, 133]
        }, {
            name: '农业',
            smooth: true,
            type: 'line',
            symbolSize: 8,
            symbol: 'circle',
            data: [70, 50, 50, 87, 90, 80, 70, 72]
        }, {
            name: '其他',
            smooth: true,
            type: 'line',
            symbolSize: 8,
            symbol: 'circle',
            data: [20, 22, 20, 32, 15, 20, 19, 22]
        },
        {
            type: 'pie',
            center: ['83%', '33%'],
            radius: ['25%', '30%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 180,
                name: '非农业',
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: '#ffd285'
                    }
                },
                label: {
                    normal: {
                        textStyle: {
                            color: '#ffd285',
                        },
                        formatter: '农业 {d} % \n',
                        fontSize: 15
                    }
                }
            }, {
                value: 180,
                name: '农业',
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: '#ff733f'
                    }
                },
                label: {
                    normal: {
                        textStyle: {
                            color: '#ff733f',
                        },
                        formatter: '非农业 {d} %  \n',
                        fontSize: 15
                    }
                }
            }, {
                value: 335,
                name: '其他',
                itemStyle: {
                    normal: {
                        color: '#ec4863'
                    }
                },
                label: {
                    normal: {
                        formatter: '其他 {d} %',
                        textStyle: {
                            color: '#ec4863',
                            fontSize: 15
                        }
                    }
                }
            }]
        },


        {
            type: 'pie',
            center: ['83%', '72%'],
            radius: ['25%', '30%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 180,
                name: '苗族',
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: '#ffd285'
                    }
                },
                label: {
                    normal: {
                        textStyle: {
                            color: '#ffd285',
                        },
                        formatter: '苗族 {d} % \n',
                        fontSize: 15
                    }
                }
            }, {
                value: 180,
                name: '土家族',
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: '#AACD06'
                    }
                },
                label: {
                    normal: {
                        textStyle: {
                            color: '#AACD06',
                        },
                        formatter: '土家族 {d} %  \n',
                        fontSize: 15
                    }
                }
            }, {
                value: 335,
                name: '满族',
                itemStyle: {
                    normal: {
                        color: '#ec4863'
                    }
                },
                label: {
                    normal: {
                        formatter: '满族 {d} %  \n',
                        textStyle: {
                            color: '#ec4863',
                            fontSize: 15
                        }
                    }
                }
            }, {
                value: 180,
                name: '布依族',
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: '#2568DA'
                    }
                },
                label: {
                    normal: {
                        textStyle: {
                            color: '#2568DA',
                        },
                        formatter: '布依族 {d} %  \n',
                        fontSize: 15
                    }
                }
            }, {
                value: 180,
                name: '白族',
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: '#ff733f'
                    }
                },
                label: {
                    normal: {
                        textStyle: {
                            color: '#ff733f',
                        },
                        formatter: '白族 {d} %  \n',
                        fontSize: 15
                    }
                }
            }]
        }
    ]
}