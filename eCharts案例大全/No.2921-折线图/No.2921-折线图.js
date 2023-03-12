            const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']
            option = {
                legend: {
                    icon: 'line',
                    top: '-8%',
                    left: '15%',
                    itemWidth: 6,
                    itemGap: 20,
                    textStyle: {
                        color: '#556677'
                    }
                },
                grid: {
                    top: '15%',
                    right: '3%',
                    left: '12%',
                    bottom: '12%'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        label: {
                            show: true,
                            // backgroundColor: '#fff',
                            // color: '#556677',
                            // borderColor: 'rgba(0,0,0,0)',
                            // shadowColor: 'rgba(0,0,0,0)',
                            // shadowOffsetY: 0
                        },
                        lineStyle: {
                            width: 0
                        }
                    },
                    // backgroundColor: '#fff',
                    // textStyle: {
                    //     color: '#5c6c7c'
                    // },
                    // padding: [10, 10],
                    // extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
                },
                xAxis: [{
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0.12)'
                        }
                    },
                    axisTick: { //y轴刻度线
                        show: false
                    },
                    axisLabel: {
                        margin: 0,
                        color: 'rgba(80, 176, 223, 1)',
                        textStyle: {
                            fontSize: 11
                        },
                    },
                }],
                yAxis: [{
                    name: '(万元)',
                    nameTextStyle: {
                        color: "rgba(80, 176, 223, 1)",
                        fontSize: 11,
                        padding: [-10, 0, -10, -30]
                    },
                    axisLabel: {
                        formatter: '{value}',
                        color: 'rgba(80, 176, 223, 1)',
                        fontSize: 11
                    },
                    axisTick: { //y轴刻度线
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: 'rgba(255,255,255,1)'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#06263b'
                        }
                    }
                }],
                series: [
                    {
                        name: '2020年',
                        type: 'line',
                        data: [10, 10, 30, 12, 15, 3, 7, 10, 30, 12, 15, 3, 7],
                        symbolSize: 1,
                        symbol: 'circle',
                        smooth: true,
                        yAxisIndex: 0,
                        showSymbol: false,
                        lineStyle: {
                            width: 3,
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: 'rgba(255, 255, 255, 1)'
                            },
                                {
                                    offset: 1,
                                    color: 'rgba(1, 255, 246, 1)'
                                }
                            ]),
                            shadowColor: 'rgba(158,135,255, 0.3)',
                            shadowBlur: 10,
                            shadowOffsetY: 2
                        },
                        itemStyle: {
                            normal: {
                                color: colorList[0],
                                borderColor: colorList[0]
                            }
                        }
                    },
                    {
                        name: '2019年',
                        type: 'line',
                        data: [30, 12, 15, 3, 7, 10, 30, 12, 15, 3, 7, 10, 10],
                        symbolSize: 1,
                        symbol: 'circle',
                        smooth: true,
                        yAxisIndex: 0,
                        showSymbol: false,
                        lineStyle: {
                            width: 3,
                            color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                                offset: 1,
                                color: 'rgba(1, 255, 246, 1)'
                            },
                                {
                                    offset: 0,
                                    color: 'rgba(255, 255, 255, 1)'
                                }
                            ]),
                            shadowColor: 'rgba(158,135,255, 0.3)',
                            shadowBlur: 10,
                            shadowOffsetY: 2
                        },
                        itemStyle: {
                            normal: {
                                color: colorList[1],
                                borderColor: colorList[1]
                            }
                        }
                    }
                ]
            };