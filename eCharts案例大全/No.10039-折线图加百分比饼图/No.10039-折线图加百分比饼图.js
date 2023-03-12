option = {
    backgroundColor: "#a73e5c",
    color: ['#ffd285', '#ff733f', '#ec4863'],

    title: [{
        text: '河南省主要城市空气质量指数',
        left: '1%',
        top: '6%',
        textStyle: {
            color: '#ffd285'
        }
    }, {
        text: '污染占比分析',
        left: '83%',
        top: '6%',
        textAlign: 'center',
        textStyle: {
            color: '#ffd285'
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
        data: ['郑州', '洛阳', '永城']
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
                color: '#c0576d'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: '#ffd285'
            }
        },
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        "axisLine": {
            lineStyle: {
                color: '#c0576d'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#c0576d'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: '#ffd285'
            }
        },
        type: 'value'
    },
    series: [{
        name: '郑州',
        smooth: true,
        type: 'line',
        symbolSize: 8,
      	symbol: 'circle',
        data: [90, 50, 39, 50, 120, 82, 80]
    }, {
        name: '洛阳',
        smooth: true,
        type: 'line',
        symbolSize: 8,
      	symbol: 'circle',
        data: [70, 50, 50, 87, 90, 80, 70]
    }, {
        name: '永城',
        smooth: true,
        type: 'line',
        symbolSize: 8,
      	symbol: 'circle',
        data: [290, 200,20, 132, 15, 200, 90]
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
            value: 335,
            name: '污染来源分析',
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
            name: '占位',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#b04459'
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#ffd285',
                    },
                    formatter: '\n汽车尾气'
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
            name: '污染来源分析',
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
                    color: '#b04459'


                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#ff733f',
                    },
                    formatter: '\n工业污染'
                }
            }
        }]
    }]
}