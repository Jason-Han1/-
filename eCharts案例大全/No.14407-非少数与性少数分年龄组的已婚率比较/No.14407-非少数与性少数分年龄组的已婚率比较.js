option = {
   
    color: ['#ffd285', '#ff733f', '#ec4863'],

    title: [{
        text: '非少数与性少数分年龄组的已婚率比较',
        left: '0%',
        top: '6%',
        textStyle: {
            color: '#ffd285'
        }
    }, {
        text: '我国已婚性少数婚姻形式',
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
        data: ['非少数', '性少数']
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
        data: ['90后', '80后', '70后', '60后及以前']
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
        name: '非少数',
        smooth: true,
        type: 'line',
        symbolSize: 8,
      	symbol: 'circle',
        data: [1.0, 28.7, 68.3, 70.6]
    }, {
        name: '性少数',
        smooth: true,
        type: 'line',
        symbolSize: 8,
      	symbol: 'circle',
        data: [0.6, 13.5, 42.7, 53.4]
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
            value: 84.1,
            name: '我国已婚性少数婚姻形式',
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
            value:15.9,
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
                    formatter: '\n与异性结婚'
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
            value: 2.6,
            name: '我国已婚性少数婚姻形式',
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
            value: 13.2,
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
                    formatter: '\n没有与异性结婚的性少数人群出国登记结婚'
                }
            }
        }]
    }]
}
