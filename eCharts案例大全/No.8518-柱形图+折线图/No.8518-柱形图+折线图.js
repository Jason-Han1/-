 var data = {
                XDatas: [1, 2, 3, 4, 5, 6, 7, 8],
                chargePile: [100, 200, 400, 200, 400, 100, 500, 200],
                home: [400, 100, 200, 100, 500, 600, 500, 200],
                es: [800, 100, 200, 100, 500, 200, 500, 200],
                price: [100, 100, 200, 100, 300, 200, 100, 200],
            };
            var barWidth = 25;
            var fontSize = 30;
            var fontColor = 'rgba(63,92,122,1)';
            var option = {
                color: ["rgb(21, 174, 206)", "rgb(128, 250, 254)", "rgb(75, 234, 95)", "rgb(97, 206, 113)", "rgb(255, 180, 0)"],
                tooltip: {
                    trigger: 'axis',
                    borderColor: '#43845D',
                    borderWidth: 1,
                    backgroundColor: 'rgba(11,42,89,0.3)',
                    borderRadius: 20,
                    padding: 10,
                    textStyle: {
                        color: '#fff',
                        fontSize: 30
                    },
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    itemWidth: 30,
                    itemHeight: 24,
                    textStyle: {
                        color: '#96A1A7',
                        fontSize: fontSize
                    },
                    data: [
                        'a', 'b', 'c', 'd', 'e'
                    ]
                },
                grid: {
                    left: '10%',
                    right: '4%',
                    bottom: '10%',
                },
                xAxis: [{
                    type: 'category',
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: fontColor
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: fontColor,
                            fontSize: fontSize
                        }
                    },
                    axisTick: {
                        show: false,
                    },
                    data: data.XDatas
                }],
                yAxis: [{
                    type: 'value',
                    name: '单位:元',
                    nameTextStyle: {
                        fontSize: fontSize,
                        color: fontColor,
                    },
                    axisLabel: {
                        formatter: '{value}',
                        textStyle: {
                            color: fontColor,
                            fontSize: fontSize
                        }
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: fontColor
                        }
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: '#11366e'
                        }
                    }
                }, {
                    type: "value",
                    name: '单位:元',
                    nameTextStyle: {
                        fontSize: fontSize,
                        color: fontColor,
                    },
                    position: "right",
                    splitLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        formatter: "{value} %", //右侧Y轴文字显示
                        textStyle: {
                            color: "#ebf8ac"
                        }
                    }
                }],
                series: [{
                    name: 'a',
                    type: 'bar',
                    barWidth: '15%',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#248ff7'
                            }, {
                                offset: 1,
                                color: '#6851f1'
                            }]),
                            barBorderRadius: 11,
                        }
                    },
                    data: data.home
                }, {
                    name: 'b',
                    type: 'bar',
                    barWidth: '15%',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#248ff7'
                            }, {
                                offset: 1,
                                color: '#6851f1'
                            }]),
                            barBorderRadius: 11,
                        }
                    },
                    data: data.es
                }, {
                    name: 'c',
                    type: 'bar',
                    barWidth: '15%',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#248ff7'
                            }, {
                                offset: 1,
                                color: '#6851f1'
                            }]),
                            barBorderRadius: 11,
                        }
                    },
                    data: data.chargePile
                }, {
                    name: 'd',
                    type: 'bar',
                    barWidth: '15%',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#248ff7'
                            }, {
                                offset: 1,
                                color: '#6851f1'
                            }]),
                            barBorderRadius: 11,
                        }
                    },
                    data: data.pv
                }, {
                    name: 'e',
                    type: 'line',
                    data: data.price,
                    label: {
                        normal: {
                            show: false,
                            position: 'top',
                            formatter: 'C',
                            textStyle: {
                                color: '#fff',
                                fontSize: fontSize
                            }
                        }
                    }
                }]
            };
