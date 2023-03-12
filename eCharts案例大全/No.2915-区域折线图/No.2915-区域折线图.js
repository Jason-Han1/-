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
                    }
                ],
                series: [
                    {
                        name: '销售额',
                        type: 'line',
                        smooth: true,
                        data: [10, 20, 33, 22, 26, 41, 30, 30, 40, 56, 31, 40, 30, 40],
                        symbol: 'circle',
                        symbolSize: 3,
                        itemStyle: {
                            normal: {
                                color: 'rgba(78, 199, 255, 1)',
                                borderColor: 'rgba(78, 199, 255, 1)',
                                lineStyle: {
                                    color: 'rgba(78, 199, 255, 1)'
                                }
                            }
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(78, 199, 255, 1)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(98, 227, 255, 0)'
                                }
                            ])
                        },
                    },
                    {
                        name: '税收',
                        type: 'line',
                        smooth: true,
                        data: [30, 50, 53, 42, 66, 71, 20, 80, 20, 66, 71, 20, 80, 20],
                        symbol: 'circle',
                        symbolSize: 3,
                        itemStyle: {
                            normal: {
                                color: 'rgba(12, 235, 255, 1)',
                                borderColor: 'rgba(12, 235, 255, 1)',
                                lineStyle: {
                                    color: 'rgba(12, 235, 255, 1)'
                                }
                            }
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(12, 235, 255, 1)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(98, 227, 255, 0)'
                                }
                            ])
                        },
                    },
                    {
                        name: '电量',
                        type: 'line',
                        smooth: true,
                        data: [10, 20, 43, 52, 16, 31, 40, 20, 10, 36, 21, 40, 20, 30],
                        symbol: 'circle',
                        symbolSize: 3,
                        itemStyle: {
                            normal: {
                                color: 'rgba(255, 126, 22, 1)',
                                borderColor: 'rgba(255, 126, 22, 1)',
                                lineStyle: {
                                    color: 'rgba(255, 126, 22, 1)'
                                }
                            }
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(255, 126, 22, 1)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(98, 227, 255, 0)'
                                }
                            ])
                        },
                    },
                    {
                        name: '用工',
                        type: 'line',
                        smooth: true,
                        data: [10, 20, 13, 32, 26, 31, 40, 30, 40, 36, 21, 40, 10, 30],
                        symbol: 'circle',
                        symbolSize: 3,
                        itemStyle: {
                            normal: {
                                color: 'rgba(0, 128, 255, 1)',
                                borderColor: 'rgba(0, 128, 255, 1)',
                                lineStyle: {
                                    color: 'rgba(0, 128, 255, 1)'
                                }
                            }
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(0, 128, 255, 1)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(98, 227, 255, 0)'
                                }
                            ])
                        },
                    },
                ]
            }