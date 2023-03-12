 option = {
                 title: {
                    textStyle: {
                        color: '#4DA3EC'
                    },
                    text: '剔除前5'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '5%',
                    bottom: '3%',
                    containLabel: true
                },
                legend: {
                    x: 'right',
                    show: true,
                    data: ['剔除数', '占比'],
                    textStyle: {
                        // fontSize: 5
                        color: "#4DA3EC"
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        axisLabel: {
                            show: true,
                            interval: 0
                        },
                        textStyle: {
                            color: '#4DA3EC'
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#2587A2'
                            }
                        },
                        axisTick: {
                            show: false,
                            lineStyle: {
                                color: '#2587A2'
                            }
                        },
                        data: [01,02,03,04,05],
                      }
                    ],
                    yAxis: [
                    {
                        type: 'value',
                        name: '剔除数',
                        textStyle: {
                        color: '#4DA3EC'
                        },
                        splitNumber: 3,
                        axisLabel: {
                            formatter: '{value}'
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#2587A2'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#2587A2'
                            }
                        },
                        axisTick: {
                            show: false,
                            lineStyle: {
                                color: '#2587A2'
                            }
                        },
                    },
                    {
                        type: 'value',
                        name: '占比',
                        textStyle: {
                            color: '#fff',
                        },
                        axisLabel: {
                            formatter: '{value}%'
                        },
                        splitLine: { show: false },
                        axisLine: {
                            lineStyle: {
                                color: '#2587A2'
                            }
                        },
                    }
                ],
                series: [
                    {
                        name: '剔除数',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        { offset: 0, color: '#83bff6' },
                                        { offset: 0.5, color: '#188df0' },
                                        { offset: 1, color: '#188df0' }
                                    ]
                                ),
                                label: {
                                    show: true,
                                    position: 'top'
                                }
                            }
                        },
                        data: [510, 364, 320, 230, 120]
                    },
                    {
                        name: '占比',
                        type: 'line',
                        itemStyle: {
                            normal: {
                                color: '#DAB61E',
                            }
                        },
                        smooth: true,
                        yAxisIndex: 1,
                        data: [40,30,20,10,5]
                    }
                ]
            };