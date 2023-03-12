var color = "#189cbb";
                var appusage_data = [{
                    name: "广州",
                    value: 8.4590
                }, {
                    name: "深圳",
                    value: 6.9897
                }, {
                    name: "北京首都",
                    value: 5.9408
                }, {
                    name: "郑州",
                    value: 4.2654
                }, {
                    name: "长沙",
                    value: 4.2405
                }, {
                    name: "上海浦东",
                    value: 4.1074
                }, {
                    name: "南昌",
                    value: 3.8093
                }, {
                    name: "重庆",
                    value: 3.4966
                }, {
                    name: "南京",
                    value: 2.8971
                }, {
                    name: "杭州",
                    value: 2.6753
                }];
                var scale = 1;
                option = {
                    // backgroundColor: '#0E2A43',
                    grid: {
                        left: "3%",
                        right: "2%",
                        bottom: "3%",
                        containLabel: true
                    },
                    yAxis: [{
                        type: "value",
                        max: 10,
                        // boundaryGap: ['20%'],
                        axisLabel: {
                           
                            textStyle: {
                                color: color,
                                fontSize: 14*scale,
                            }
                        },
                        axisTick: {
                            show: false,
                            lineStyle: {
                                color: color,
                            }
                        },
                        axisLine: {
                            
                            lineStyle: {
                                color: color,
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                
                                
                            }
                        },
                        name: '万人',
                        nameTextStyle: {
                            color: "#fff",
                            fontSize: 16*scale,
                            padding: [0, 0, 10, 0]
                        }
                    }],
                    xAxis: [{
                        type: "category",
                        data: ["广州","深圳","北京首都","郑州","长沙","上海浦东","南昌","重庆","南京","杭州"],
                        axisLabel: {
                            // inside: true,
                            
                            padding: [0, 15, 0, 0],
                            textStyle: {
                                color: color,
                                fontSize: 16*scale,
                            }
                        },
                        axisTick: {
                            show: false,
                            lineStyle: {
                                color: color,
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: color,
                            }
                        },
                        splitLine: {
                            show:false,
                            lineStyle: {
                               show:false,
                              
                            }
                        },
                        name: '',
                        nameTextStyle: {
                            color: "#fff",
                            fontSize: 16*scale,
                            padding: [0, 0, 10, 0]
                        }
                    }],

                    series: [{
                        name: "通过率",
                        type: "bar",
                        data: appusage_data,
                        barWidth: '50%',
                        barCategoryGap: "35%",
                        label: {
                            normal: {
                                show: true,
                                position: "top",
                                distance:20,
                                formatter: function(params) {
                                    return params.data.value;
                                },
                                textStyle: {
                                    color: "#ffc72b",
                                    fontSize: 16*scale
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: "#032b3e" // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: "#0d9abb" // 100% 处的颜色
                                }], false),
                            }
                        },
                        markLine: {
                            symbol: 'none',
                            data: [{
                                type: 'average',
                                valueIndex: 1,
                                lineStyle: {
                                    normal: {
                                        color: color,
                                        type: 'dashed',
                                        width: 0,
                                    }
                                },
                                label: {
                                    normal: {
                                        show: false,
                                    }
                                },
                            }]
                        },
                    }]
                };