            option = {
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    top: '15%',
                    right: '3%',
                    left: '12%',
                    bottom: '12%'
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#ddd'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            interval: 0,
                            textStyle: {
                                color: 'rgba(80, 176, 223, 1)',
                                fontSize: 11
                            },
                            margin: 0
                        },
                        boundaryGap: false
                    }],
                yAxis: [{
                    name: '(万度)',
                    nameTextStyle: {
                        color: "rgba(80, 176, 223, 1)",
                        fontSize: 11,
                        padding: [-10, 0, -10, -40]
                    },
                    type: 'value',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#ddd'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: 'rgba(80, 176, 223, 1)',
                            fontSize: 11
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#06263b'
                        }
                    }
                }],
                series: [{
                    name: '',
                    type: 'line',
                    data: [5000, 2600, 1300, 1300, 1250, 1500, 5000, 2600, 1300, 1300, 1250, 1500, 1250, 1500],
                    symbolSize: 4,
                    symbol: 'circle',
                    smooth: true,
                    lineStyle: {
                        color: '#f7a552'
                    },
                    itemStyle: {
                        normal: {
                            color: '#f7a552',
                            borderColor: 'rgba(255, 255, 255, 1)'
                        }
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(231, 103, 0, 0.69)'
                        },
                            {
                                offset: 1,
                                color: 'rgba(231, 103, 0, 0.1)'
                            }
                        ])
                    },
                    emphasis: {
                        itemStyle: {
                            color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.5,
                                colorStops: [{
                                    offset: 0,
                                    color: '#fe9a8b'
                                },
                                    {
                                        offset: 0.4,
                                        color: '#fe9a8b'
                                    },
                                    {
                                        offset: 0.5,
                                        color: '#fff'
                                    }, {
                                        offset: 0.7,
                                        color: '#fff'
                                    }, {
                                        offset: 0.8,
                                        color: '#fff'
                                    }, {
                                        offset: 1,
                                        color: '#fff'
                                    }
                                ]
                            },
                            borderColor: '#fe9a8b',
                            borderWidth: 2
                        }
                    }
                }
                ]
            };