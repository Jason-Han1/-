option = {
    legend: {
        data: ['完成投资', '累计完成'],
        right: '10%',
        itemGap: 10,
        textStyle: {
            fontSize: 12,
            color: '#6AC9EA'
        }
    },
    grid: {
        top: '18%',
        left: '10%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        interval: 0, //标签全部显示
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        splitLine: {
            lineStyle: {
                color: 'rgba(1,172,255,0.2)'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#01ACFF'
            }
        },
        axisLabel: {
            textStyle: {
                color: "#6AC9EA",
                fontSize: 12
            },
            margin: 15
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
            type: 'value',
            name: '（万元）',
            min: 0,
            max: 250,
            interval: 50,
            nameTextStyle: {
                fontSize: 12
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(1,172,255,0.2)'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#01ACFF'
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#6AC9EA",
                    fontSize: 12
                }
            },
            axisTick: {
                show: false
            },
        },
        {
            type: 'value',
            min: 0,
            max: 25,
            splitLine: {
                lineStyle: {
                    color: 'rgba(1,172,255,0.2)'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#01ACFF'
                }
            },
            axisLabel: {
                formatter: '{value}%',
                textStyle: {
                    color: "#6AC9EA",
                    fontSize: 12
                }
            },
            axisTick: {
                show: false
            },

        }
    ],
    series: [{
            name: '完成投资',
            type: 'bar',
            zlevel: 2,
            barGap: '-100%',
            barWidth: '50%',
            symbol: 'roundRect',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, '-', '-', '-'],
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 1, 1, 0,
                    [{
                            offset: 0,
                            color: '#73ECBE'
                        },
                        {
                            offset: 1,
                            color: '#1FB3E4'
                        }
                    ]
                ),
                barBorderRadius: [1000, 1000, 0, 0],
            }

        }, {
            name: '完成投资',
            zlevel: 1,
            type: 'bar',
            barWidth: '50%',
            barGap: '-100%',
            symbol: 'roundRect',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 1, 1, 0,
                    [{
                            offset: 0,
                            color: '#BEBEBE'
                        },
                        {
                            offset: 1,
                            color: '#676767'
                        }
                    ]
                ),
                barBorderRadius: [1000, 1000, 0, 0],
            }

        },
        {
            name: '累计完成',
            type: 'line',
            stack: '已完成',
            symbol: "circle",
            yAxisIndex: 1,
            zlevel: 4,
            symbolSize: 10,
            smooth: false,
            lineStyle: {
                normal: {
                    type: 'solid'
                }
            },
            itemStyle: {
                normal: {
                    color: '#FFE156',
                    label: {
                        show: false,
                        formatter: '{c}万',
                        textStyle: {
                            color: '#FFE156',
                            fontWeight: 'bold'
                        }
                    }
                }
            },
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, '-', '-', '-']
        }, {
            name: '累计完成',
            type: 'line',
            zlevel: 3,
            yAxisIndex: 1,
            stack: '预计完成',
            symbol: "circle",
            symbolSize: 10,
            smooth: false,
            lineStyle: {
                normal: {
                    width: 2,
                    color: '#bcbcbc',
                    type: 'dashed'
                }
            },
            itemStyle: {
                normal: {
                    color: '#bcbcbc',
                    label: {
                        show: false,
                        formatter: '{c}万',
                        textStyle: {
                            color: '#6E6E6E',
                            fontWeight: 'bold'
                        }
                    }
                }
            },
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};