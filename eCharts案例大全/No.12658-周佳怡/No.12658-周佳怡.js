option = {
    backgroundColor: "#404A59",
    color: ['#ffd285', '#ff733f', '#ec4863'],

    title: [{
        text: '十年人口结构变化',
        left: '1%',
        top: '6%',
        textStyle: {
            color: '#fff'
        }
    }, {
        text: '2017人口画像',
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
        data: ['0-14', '15-64', '65及以上']
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
        data: ['2008','2009','2010','2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
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
            name: '0-14',
            smooth: true,
            type: 'line',
            symbolSize: 8,
            symbol: 'circle',
            data: [25232,24688,22259,22231,22342,22316,22569,22715,23091,23353]
        }, {
            name: '15-64',
            smooth: true,
            type: 'line',
            symbolSize: 8,
            symbol: 'circle',
            data: [96547,97419,99898,100243,100334,100557,100398,100361,100246,99808]
        }, {
            name: '65及以上',
            smooth: true,
            type: 'line',
            symbolSize: 8,
            symbol: 'circle',
            data: [11023,11343,11934,12261,12728,13199,13815,14386,14933,15847]
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
                value: 23353,
                name: '0-14',
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
                        formatter: '0-14 {d} % \n',
                            fontSize: 15
                    }
                }
            }, {
                value: 99808,
                name: '15-64',
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
                        formatter: '15-64 {d} %  \n',
                            fontSize: 15
                    }
                }
            }, {
                value: 15847,
                name: '65及以上',
                itemStyle: {
                    normal: {
                        color: '#ec4863'
                    }
                },
                label: {
                    normal: {
                        formatter: '65及以上 {d} %',
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
                value: 67871,
                name: '女性',
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
                        formatter: '女性 {d} % \n',
                            fontSize: 15
                    }
                }
            }, {
                value: 71137,
                name: '男性',
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
                        formatter: '男性 {d} %  \n',
                            fontSize: 15
                    }
                }
          
           
            }]
        }
    ]
}

