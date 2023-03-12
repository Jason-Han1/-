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
                        name: '总榜',
                        type: 'line',
                        smooth: true,
                        data: [30, 50, 53, 42, 66, 71, 20, 80, 20, 66, 71, 20, 80, 20],
                        symbol: 'circle',
                        symbolSize: 0,
                        itemStyle: {
                            normal: {
                                color: 'rgba(0, 255, 222, 1)',
                                borderColor: 'rgba(0, 255, 222, 1)',
                                lineStyle: {
                                    color: 'rgba(0, 255, 222, 1)'
                                }
                            }
                        }
                    },
                    {
                        name: '本企业',
                        type: 'line',
                        smooth: true,
                        data: [34, 30, 23, 2, 16, 51, 40, 50, 40, 51, 20, 60, 70],
                        symbol: 'circle',
                        symbolSize: 0,
                        itemStyle: {
                            normal: {
                                color: 'rgba(0, 210, 255, 1)',
                                borderColor: 'rgba(0, 210, 255, 1)',
                                lineStyle: {
                                    color: 'rgba(0, 210, 255, 1)'
                                }
                            }
                        }
                    },
                    {
                        name: '行业',
                        type: 'line',
                        smooth: true,
                        data: [3, 3, 30, 20, 11, 21, 20, 30, 10, 21, 10, 50, 40],
                        symbol: 'circle',
                        symbolSize: 0,
                        itemStyle: {
                            normal: {
                                color: 'rgba(255, 130, 28, 1)',
                                borderColor: 'rgba(255, 130, 28, 1)',
                                lineStyle: {
                                    color: 'rgba(255, 130, 28, 1)'
                                }
                            }
                        }
                    },
                ]
            }