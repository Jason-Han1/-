option = {
    backgroundColor: "#404A59",
    color: ['#ffd285', '#ff733f', '#ec4863'],

    title: [{
        text: '企业分析',
        left: '45%',
        top: '6%',
        textStyle: {
            color: '#fff'
        }
    }/*, {
        text: '用户来源占比',
        left: '83%',
        top: '6%',
        textAlign: 'center',
        textStyle: {
            color: '#fff'
        }
    }*/],
    tooltip: {
        trigger: 'axis'
    },
    
    grid: {
        left: '30%',
        right: '35%',
        top: '20%',
        bottom: '20%',
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
            },
            interval:0,
            rotate:40 
        },
        
        boundaryGap: false,
        data: ['东华门街道', '景山', '交道口', '安定门', '北新桥', '东四', 
        '朝阳门','建国门','东直门','和平里','前门','崇文门外','东花市',
        '龙潭','体育馆路','天坛','永定门外','前门管委会','王府井建管办',
        '北京站管理处']
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
        //name: '在大理',
        smooth: true,
        type: 'line',
        symbolSize: 8,
      	symbol: 'circle',
        data: [650, 566, 390, 500, 960, 820, 560,900, 500, 390, 500, 1002, 820, 800,
        900, 500, 390, 500, 1126, 820]
    },/* {
        name: '标准版',
        smooth: true,
        type: 'line',
        symbolSize: 8,
      	symbol: 'circle',
        data: [70, 50, 50, 87, 90, 80, 70]
    }, {
        name: '潍V',
        smooth: true,
        type: 'line',
        symbolSize: 8,
      	symbol: 'circle',
        data: [290, 200,20, 132, 15, 200, 90]
    }, */
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
            value: 335,
            //name: '用户来源分析',
            itemStyle: {
                normal: {
                    color: '#ffd285'
                }
            },
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        color: '#ffd285',
                        fontSize: 20

                    }
                }
            }
        }, {
            value: 180,
            //name: '占位',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#87CEFA'
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#ffd285',
                    },
                    formatter: '\n有职业危害因素企业占比'
                }
            }
        }]
    },
    {
        type: 'pie',
        center: ['15%', '33%'],
        radius: ['25%', '30%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 435,
            name: '用户来源分析',
            itemStyle: {
                normal: {
                    color: '#ff733f'
                }
            },
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        color: '#ff733f',
                        fontSize: 20

                    }
                }
            }
        }, {
            value: 300,
            name: '占位1',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#87CEFA'


                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#FF4500',
                    },
                    formatter: '\n有危险化学品企业占比'
                }
            }
        }]
    },
    {
        type: 'pie',
        center: ['15%', '72%'],
        radius: ['25%', '30%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 500,
            name: '用户来源分析',
            itemStyle: {
                normal: {
                    color: '#ff733f'
                }
            },
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        color: '#ff733f',
                        fontSize: 20

                    }
                }
            }
        }, {
            value: 80,
            name: '占位',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#87CEFA'


                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#FF4500',
                    },
                    formatter: '\n有特种设备企业占比'
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
            value: 435,
            name: '用户来源分析',
            itemStyle: {
                normal: {
                    color: '#ff733f'
                }
            },
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        color: '#ff733f',
                        fontSize: 20

                    }
                }
            }
        }, {
            value: 100,
            name: '占位',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#87CEFA'


                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#FF4500',
                    },
                    formatter: '\n有天然气企业占比'
                }
            }
        }]
    }]
}