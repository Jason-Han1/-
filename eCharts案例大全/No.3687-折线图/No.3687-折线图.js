
option = {
    backgroundColor: '#080b30',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 255, 233,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 233,0)'
                    }],
                    global: false
                }
            }
        }
    },
    grid: {
        'x': 50,
        'y': 10,
        'x2': 30,
        'y2': 40,
        'bottom': 60,
        'borderWidth': 1
    },
    xAxis: [{
        show: true,
        type: 'category',
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#ACCFFF',
        },
        axisLine: {
            lineStyle: {
                color: '#344B83',
            }
        },
        boundaryGap: true,
        data: ['8：00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00']

    }],

    yAxis: [{
        type: 'value',
        splitLine: {
            show: true
        },
        axisLabel: {
            color: '#ACCFFF',
        },
        axisLine: {
            lineStyle: {
                color: '#344B83',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#344B83',
            }
        }
    }],
    series: [{
            smooth: true,
            name: '风向风速',
            type: 'line',
            showAllSymbol: true,
            symbolSize: 25,
            lineStyle: {
                normal: {
                    color: '#6c50f3',
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5
                }
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#6c50f3'
                }
            },
            itemStyle: {
                color: '#6c50f3',
                borderColor: '#fff',
                borderWidth: 3,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2
            },
            tooltip: {
                show: true
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(108,80,243,0.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(108,80,243,0)'
                        }
                    ], false),
                    shadowColor: 'rgba(108,80,243, 0.9)',
                    shadowBlur: 20
                }
            },
            data: [{
                    value: 50.84,
                    durection: '北风'
                },
                {
                    value: 25.97,
                    durection: '西北风'
                },
                {
                    value: 32.79,
                    durection: '西风'
                },
                {
                    value: 81.55,
                    durection: '西南风'
                },
                {
                    value: 38.35,
                    durection: '南风'
                },
                {
                    value: 14.02,
                    durection: '东南风'
                },
                {
                    value: 24.02,
                    durection: '东风'
                },
                {
                    value: 54.02,
                    durection: '东北风'
                }
            ]
        }

    ]
}