var xAxisData = ['4/6', '4/7', '4/8', '4/9', '4/10', '4/11', '4/12'];
option = {
    backgroundColor: '#ffffff',
    grid: {
        left: '2%',
        top: "12%",
        bottom: "12%",
        right: "12%",
        containLabel: true
    },

    xAxis: [{
        type: 'category',
        axisLine: {
            show: false,
            lineStyle: {
                color: '#6173A3'
            }
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#999',
                fontSize: 20
            }
        },
        axisTick: {
            show: false
        },
        data: xAxisData,
    }, ],
    yAxis: [{
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        scale: true,
        minInterval: 10,
        axisLabel: {
            show: false,
            textStyle: {
                color: '#9ea7c4',
                fontSize: 14
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#6173A3'
            }
        },
    }],

    //折线分段颜色
    visualMap: {
        show: false,
        dimension: 1,
        pieces: [{
                gte: 85,
                lte: 100,
                color: '#f7cb50'
            }, {
                gte: 75,
                lte: 85,
                color: '#babdd7'
            },
            {
                gte: 65,
                lte: 75,
                color: '#997d49'
            },
            {
                gte: 0,
                lte: 65,
                color: '#d9d9d9'
            }
        ]
    },
    series: [{
            type: 'line',
            lineStyle: {
                width: 5
            },
            showSymbol: false,
            animation: false,
            hoverAnimation: false,
            data: [85],

        }, {
            type: 'line',
            lineStyle: {
                width: 5
            },
            showSymbol: false,
            animation: false,
            hoverAnimation: false,
            data: [65],

        },
        {
            type: 'line',
            lineStyle: {
                width: 5
            },
            showSymbol: false,
            animation: false,
            hoverAnimation: false,
            data: [79, 79, 65, 76, 77, 76, 76],

            //表示线
            markLine: {
                symbol: 'none',
                silent: true,
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                label: {
                    position: 'start'
                },
                data: [{
                        yAxis: 85,
                        lineStyle: {
                            width: 2,
                            color: '#f7cb50'
                        },
                        label: {
                            show: false
                        }
                    },
                    {
                        yAxis: 75,
                        lineStyle: {
                            width: 2,
                            color: '#babdd7'
                        },
                        label: {
                            show: false
                        }
                    },
                    {
                        yAxis: 76,
                        lineStyle: {
                            width: 2,
                            color: '#ff000033'
                        },
                        label: {
                            show: false
                        }
                    },
                    {
                        yAxis: 65,
                        lineStyle: {
                            width: 2,
                            color: '#997d49'
                        },
                        label: {
                            show: false
                        }
                    }
                ]
            },
            markPoint: {
                silent: true,
                label: {
                    fontSize: 24
                },
                data: [{
                        yAxis: 85,
                        x: '100%',
                        symbolSize: 0.1,
                        label: {
                            textStyle: {
                                color: '#fff'
                            },
                            padding: [10, 10],
                            fontSize: 24,
                            borderRadius: 12,
                            backgroundColor: '#f7cb5066',
                            position: 'left',
                            formatter: '金牌'
                        }
                    },
                    {
                        yAxis: 75,
                        x: '100%',
                        symbolSize: 0.1,
                        label: {
                            textStyle: {
                                color: '#fff'
                            },
                            padding: [10, 10],
                            fontSize: 24,
                            borderRadius: 12,
                            backgroundColor: '#babdd766',
                            position: 'left',
                            formatter: '银牌'
                        }
                    },
                    {
                        yAxis: 76,
                        x: '1%',
                        symbolSize: 0.1,
                        label: {
                            textStyle: {
                                color: '#fff'
                            },
                            padding: [10, 10],
                            fontSize: 24,
                            borderRadius: 12,
                            backgroundColor: '#ffaaaa',
                            position: 'right',
                            formatter: '平均：75.4分'
                        }
                    },
                    {
                        yAxis: 65,
                        x: '100%',
                        symbolSize: 0.1,
                        label: {
                            textStyle: {
                                color: '#fff'
                            },
                            padding: [10, 10],
                            fontSize: 24,
                            borderRadius: 12,
                            backgroundColor: '#997d4966',
                            position: 'left',
                            formatter: '铜牌'
                        }
                    }
                ]
            }
        }
    ]
}