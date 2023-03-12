option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                },
                title: {
                    text: '截至2020年12月份数据统计',
                    textStyle: {
                        color: 'rgba(206, 229, 239, 1)',
                        fontWeight: '400',
                        fontSize: `12`,
                    },
                    left: '3%',
                    top: '5%',
                },
                legend: {
                    top: '5%',
                    right: '5%',
                    itemWidth: 14,
                    textStyle: {
                        color: '#c1cadf',
                        fontSize: 12
                    },
                },

                grid: {
                    left: '20px',
                    right: '0px',
                    top: '30%',
                    bottom: '0px',
                    containLabel: true
                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    x: 'right',
                    y: 'center'
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        axisTick: {
                            show: false
                        },
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                        axisLine: {
                            lineStyle: {
                                color: '#0d2a45'
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            color: 'rgba(80, 176, 223, 1)',
                            fontSize: 12
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisTick: {
                            show: true
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: 'rgba(120, 160, 236, 1)'
                            },
                            symbol: ['none', 'arrow'],
                            symbolSize: [5, 12],
                            symbolOffset: [0, 10]
                        },
                        axisTick: { //y轴刻度线
                            show: false
                        },
                        max: 102,
                        axisLabel: {
                            interval: 0,
                            color: 'rgba(80, 176, 223, 1)',
                            fontSize: 9
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(6, 31, 55, 1.00)',
                                width: 1,
                                type: 'solid'
                            }
                        }
                    },
                    {
                        type: 'value',
                        show: false,
                        axisTick: {
                            show: true
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(207, 227, 252, 1)t'
                            },
                            symbol: ['none', 'arrow'],
                            symbolSize: [5, 12],
                            symbolOffset: [0, 10]
                        },
                        min: 0,
                        max: 100,
                        axisLabel: {
                            interval: 0,
                            color: 'rgba(207, 227, 252, 1)',
                            formatter: '{value} %'
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: 'rgba(39, 57, 75, 1)',
                                width: 1,
                                type: 'solid'
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '优质',
                        yAxisIndex: 1,
                        type: 'line',
                        smooth: true,

                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(255, 130, 28, 1)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(98, 227, 255, 0)'
                                }
                            ])
                        },
                        data: [30, 50, 53, 42, 66, 71, 20, 80, 20, 66, 71, 20, 80, 20],
                        symbol: 'circle',
                        symbolSize: 0,
                        itemStyle: {
                            normal: {
                                color: '#d49957',
                                borderColor: '#d49957',
                                lineStyle: {
                                    color: 'rgba(255, 130, 28, 1)'
                                }
                            }
                        }
                    }, {
                        name: '低效',
                        yAxisIndex: 1,
                        type: 'line',
                        smooth: true,
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(228, 182, 191, 1.00)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(98, 227, 255, 0)'
                                }
                            ])
                        },
                        data: [34, 30, 23, 2, 16, 51, 40, 50, 40, 51, 20, 60, 70],
                        symbol: 'circle',
                        symbolSize: 0,
                        itemStyle: {
                            normal: {
                                color: '#FFFFFF',
                                borderColor: 'rgba(228, 182, 191, 1.00)',
                                lineStyle: {
                                    color: 'rgba(228, 182, 191, 1.00)'
                                }
                            }
                        }
                    },
                    {
                        type: 'bar',

                        yAxisIndex: 0,
                        name: '本企业',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        {
                                            offset: 0,
                                            color: '#0fd8ec'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(10, 235, 255, 0)'
                                        }
                                    ],
                                    false
                                )
                            }
                        },
                        barWidth: 16,
                        data: [12, 23, 21, 32, 24, 35, 33, 22, 32, 35, 33, 22, 32]
                    }
                ]
            }