 option = {
                   backgroundColor:"#222",
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            lineStyle: {
                                type: 'dotted',
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(255,255,255,0)'
                                    }, {
                                        offset: 1,
                                        color: 'rgba(255,255,255,0.3)',
                                    }],
                                    global: false
                                }
                            },
                        },
                        // formatter: '{b}走势',
                    },
                    legend: {

                        x: 'center',
                        y: '0',
                        icon: 'circle',
                        // selectedMode : 'single',
                        itemGap: 8,
                        textStyle: { color: 'rgba(255,255,255,.5)' },
                        itemWidth: 10,
                        itemHeight: 10,
                    },
                    grid: {
                        left: '20',
                        top: '30',
                        right: '15',
                        bottom: '20',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        splitLine: { show: false },
                        axisTick: { show: false },
                        axisLabel: {
                            textStyle: {
                                color: "rgba(255,255,255,.6)",
                                // fontSize: 10,
                            },
                        },
                        axisLine: {
                            show: false

                        },

                        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']

                    }, {

                        axisPointer: { show: false },
                        axisLine: { show: false },
                        position: 'bottom',
                        offset: 20,
                    }],

                    yAxis: [{
                        type: 'value',
                        axisTick: { show: false },
                        splitNumber: 3,
                        axisLabel: {
                            textStyle: {
                                color: "rgba(255,255,255,.6)",
                            },
                        },
                        axisLine: { show: false },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(255,255,255,.05)',
                                type: 'dashed'
                            }
                        }
                    }],
                    series: [

                        // {
                        //     name: '重大',
                        //     type: 'line',
                        //     smooth: true,
                        //     symbol: 'circle',
                        //     symbolSize: 4,
                        //     showSymbol: false,
                        //     lineStyle: {
                        //         normal: {
                        //             color: '#ff8a8a',
                        //             width: 1.5
                        //         }
                        //     },
                        //     areaStyle: {
                        //         normal: { color: 'rgba(201,86,86,.0)' }
                        //     },
                        //     itemStyle: {
                        //         normal: {
                        //             color: 'rgba(201,86,86,.8)',
                        //             borderColor: 'rgba(201,86,86,.3)',
                        //             borderWidth: 7
                        //         }
                        //     },
                        //     data: [4, 6, 4, 8, 6, 4, 6, 4, 8, 6, 8, 4, 6, 2, 5, 1, 7, 8, 4, 6, 2, 5, 1, 7, 4, 6, 4, 8, 6, 8, 4, 6, 2, 5, 1, 7]
                        // },
                        // ,
                        // {
                        //     name: '较大',
                        //     type: 'line',
                        //     smooth: true,
                        //     symbol: 'circle',
                        //     symbolSize: 4,
                        //     showSymbol: false,
                        //     lineStyle: {
                        //         normal: {
                        //             color: 'rgba(252,199,8,1)',
                        //             width: 1.5
                        //         }
                        //     },
                        //     areaStyle: {
                        //         normal: { color: 'rgba(252,199,8,.0)' }
                        //     },
                        //     itemStyle: {
                        //         normal: {
                        //             color: 'rgba(252,199,8,.8)',
                        //             borderColor: 'rgba(252,199,8,.3)',
                        //             borderWidth: 7
                        //         }
                        //     },
                        //     data: [8, 4, 6, 5, 6, 8, 4, 4, 6, 5, 4, 6, 2, 4, 6, 2, 1, 7, 6, 8, 4, 8, 4, 6, 5, 6, 8, 4],

                        // },

                        {
                            name: '一般',
                            type: 'line',
                            smooth: true,
                            symbol: 'circle',
                            symbolSize: 4,
                            showSymbol: false,
                            lineStyle: {
                                normal: {
                                    color: '#00b3f4',
                                    width: 2,
                                    shadowColor: 'rgba(0, 0, 0, .5)',
                                    shadowBlur: 3,
                                    shadowOffsetY: 3,
                                    shadowOffsetX: 4,
                                }
                            },
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(0,179,244,0.3)'
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(0,179,244,0)'
                                    }
                                    ], false),
                                    shadowColor: 'rgba(0,179,244, 0.9)',
                                    shadowBlur: 20
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: 'rgba(0,179,244,.8)',
                                    borderColor: 'rgba(0,179,244,.3)',
                                    borderWidth: 7,
                                    shadowColor: 'rgba(0, 0, 0, .4)',
                                    shadowBlur:3,
                                    shadowOffsetY: 3,
                                    shadowOffsetX: 3
                                }
                            },
                            data: [8, 6, 8, 4, 4, 6, 5, 4, 6, 2, 4, 6, 4, 8, 6, 8, 4, 6, 2, 5, 1, 7, 1, 7, 6, 8, 4, 4, 6, 5, 4, 6, 2],
                        }
                        ,
                        {
                            name: '轻微',
                            type: 'line',
                            smooth: true,
                            symbol: 'circle',
                            symbolSize: 4,
                            showSymbol: false,
                            lineStyle: {
                                normal: {
                                    color: '#00ca95',
                                    width: 2,
                                    shadowColor: 'rgba(0, 0, 0, .5)',
                                    shadowBlur: 3,
                                    shadowOffsetY: 3,
                                    shadowOffsetX: 4,
                                }
                            },
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(0,202,149,0.3)'
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(0,202,149,0)'
                                    }
                                    ], false),
                                    shadowColor: 'rgba(0,202,149, 0.9)',
                                    shadowBlur: 20
                                }
                            }, itemStyle: {
                                normal: {
                                    color: 'rgba(0,202,149,.8)',
                                    borderColor: 'rgba(0,202,149,.3)',
                                    borderWidth: 7,
                                    shadowColor: 'rgba(0, 0, 0, .5)',
                                    shadowBlur: 3,
                                    shadowOffsetY: 3,
                                    shadowOffsetX: 3,
                                }
                            },
                            data: [6, 2, 5, 1, 7, 4, 13, 4, 18, 6, 8, 4, 6, 2, 5, 1, 7, 4, 13, 4, 18, 6, 8, 4, 6, 2, 5, 1, 7, 4, 13, 4, 18, 6, 8, 4],

                        }

                    ]
                };
                