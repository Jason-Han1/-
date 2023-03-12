   var option = {
       backgroundColor: '#03111D',
                tooltip: {
                    trigger: 'axis',
                },
                grid: {
                    left: '2%',
                    right: '4%',
                    bottom: '14%',
                    top:'16%',
                    containLabel: true
                },
                legend: {
                    data: ['完成产值', '目标产值', '完成率'],
                    left: '7%',
                    top:'5%',
                    textStyle: {
                        color: "#666666"
                    },
                    itemWidth: 15,
                    itemHeight: 10,
                    itemGap: 25
                },
                xAxis: {
                    type: 'category',
                    data: ['2012','2013','2014','2015','2016','2017','2018','2019'],
                    axisLabel: {
                        color: '#A0A4AA'
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                        color: 'rgba(65, 97, 128, 0.5)',
                        },
                    },
                    axisTick: {
                        alignWithLabel: true
                    }
                },
                yAxis: [{
                        type: 'value',
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(163, 163, 163, 0.5)',
                                type: 'dashed'
                            }
                        },
                        axisLabel: {
                            color: '#A0A4AA'
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                            color: 'rgba(65, 97, 128, 0.5)',
                            },
                        },
                    },
                    {
                        type: "value",
                        name: "",
                        nameTextStyle: {
                            color: "#666666"
                        },
                        position: "right",
                        axisLine: {
                            lineStyle: {
                                color: '#cdd5e2'
                            }
                        },
                        splitLine: {
                            show: false,
                        },
                        axisLabel: {
                            show: false,
                            formatter: "{value} %", //右侧Y轴文字显示
                            textStyle: {
                                color: "#666666"
                            }
                        }
                    }
                ],
                series: [{
                    name: '完成产值',
                    type: 'bar',
                    barWidth: '12px',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#12BDDF'
                            }, {
                                offset: 1,
                                color: 'rgba(24, 253, 255, 0)'
                            }]),
                        },
                    },
                    data: [400, 400, 300, 300, 300, 400, 400, 400, 300]
                },
                    {
                        name: '目标产值',
                        type: 'bar',
                        barWidth: '12px',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#DE9600'
                                }, {
                                    offset: 1,
                                    color: 'rgba(255, 183, 24,0)'
                                }]),
                            }
                        },
                        data: [380, 300, 260, 240, 268, 275, 168, 333, 22]
                    },{
                        name: "完成率",
                        type: "line",
                        yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                        smooth: true, //平滑曲线显示

                        symbol: "circle", //标记的图形为实心圆
                        symbolSize: 0, //标记的大小
                        itemStyle: {
                            normal: {
                                color: '#0AF37A',
                                borderColor: '#0AF37A',  //圆点透明 边框
                                borderWidth: 0,
                                lineStyle: {
                                    color: "#0AF37A"
                                },
                                  areaStyle: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                      offset: 0,
                                      color: '#46C118'
                                    },{
                                      offset: 1,
                                      color: 'rgba(12, 162, 13, 0)'
                                    }])
                                  },
                            },
                        },
                        data: [50, 80, 60, 39.6, 82.9, 48.8, 53, 50]
                    }
                ]
            };