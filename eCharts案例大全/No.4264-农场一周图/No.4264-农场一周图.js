const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']
option = {
    backgroundColor: '#fff',
    title: {
        text: '',
        textStyle: {
            fontSize: 12,
            fontWeight: 400
        },
        left: 'center',
        top: '5%'
    },
    legend: {
        icon: 'circle',
        top: '5%',
        right: '5%',
        itemWidth: 6,
        itemGap: 20,
        textStyle: {
            color: '#556677'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            label: {
                show: true,
                backgroundColor: '#fff',
                color: '#556677',
                borderColor: 'rgba(0,0,0,0)',
                shadowColor: 'rgba(0,0,0,0)',
                shadowOffsetY: 0
            },
            lineStyle: {
                width: 0
            }
        },
        backgroundColor: '#fff',
        textStyle: {
            color: '#5c6c7c'
        },
        padding: [10, 10],
        extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
    },
    grid: {
        top: '15%'
    },
    xAxis: [{
        type: 'category',
        data: ['01-04', '01-05', '01-06', '01-07', '01-08', '01-09', '01-10'],
        axisLine: {
            lineStyle: {
                color: '#DCE2E8'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#556677'
            },
            fontSize: 12,
            margin: 15
        },
        axisPointer: {
            label: {
                padding: [0, 0, 10, 0],
                margin: 15,
                fontSize: 12,
                backgroundColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#fff'
                    }, {
                        offset: 0.86,
                        color: '#fff'
                    }, {
                        offset: 0.86,
                        color: '#33c0cd'
                    }, {
                        offset: 1,
                        color: '#33c0cd'
                    }],
                    global: false
                }
            }
        },
        boundaryGap: false
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#DCE2E8'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#556677'
            }
        },
        splitLine: {
            show: false
        }
    }, {
        type: 'value',
        position: 'right',
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#556677'
            },
            formatter: '{value}'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#DCE2E8'
            }
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
            name: '商城',
            type: 'line',
            data: [10, 10, 30, 12, 15, 3, 7],
            symbolSize: 1,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            lineStyle: {
                width: 5,
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#9effff'
                    },
                    {
                        offset: 1,
                        color: '#9E87FF'
                    }
                ]),
                shadowColor: 'rgba(158,135,255, 0.3)',
                shadowBlur: 10,
                shadowOffsetY: 20
            },
            itemStyle: {
                normal: {
                    color: colorList[0],
                    borderColor: colorList[0]
                }
            }
        }, {
            name: '土地',
            type: 'line',
            data: [5, 12, 11, 14, 25, 16, 10],
            symbolSize: 1,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            lineStyle: {
                width: 5,
                color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                        offset: 0,
                        color: '#73DD39'
                    },
                    {
                        offset: 1,
                        color: '#73DDFF'
                    }
                ]),
                shadowColor: 'rgba(115,221,255, 0.3)',
                shadowBlur: 10,
                shadowOffsetY: 20
            },
            itemStyle: {
                normal: {
                    color: colorList[1],
                    borderColor: colorList[1]
                }
            }
        },
        {
            name: '认养',
            type: 'line',
            data: [150, 120, 170, 140, 500, 160, 110],
            symbolSize: 1,
            yAxisIndex: 1,
            symbol: 'circle',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                width: 5,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#fe9a'
                    },
                    {
                        offset: 1,
                        color: '#fe9a8b'
                    }
                ]),
                shadowColor: 'rgba(254,154,139, 0.3)',
                shadowBlur: 10,
                shadowOffsetY: 20
            },
            itemStyle: {
                normal: {
                    color: colorList[2],
                    borderColor: colorList[2]
                }
            }
        }
    ]
};