var Xdata = ["2020-01", "2020-02", "2020-03", "2020-04", "2020-05", "2020-06", "2020-07"]
var Ydata = [0, 2, 4, 6, 8, 10]
var LineYdata = [1.5, 1.5, 1.5, 1.5, 1.5, 1.5 , 1.5]
var ydata = [0.1, 1.05, 0.34, 0.71, 0.04, 0.47, 0.15]

var option = {
                grid: {
                    left: "15%"
                },
                legend: {
                    show: true,
                    left: 'right',
                    margin: [0, 40],
                    selectedMode: false,
                    y: 'top',
                    data: ['氨氮标准值', '氨氮'],
                    textStyle: { //字体大小

                        fontSize: 16,
                        color: '#fff'

                    },

                },

                xAxis: [
                    {
                        type: "category",
                        data: Xdata,
                        axisLine: {
                            lineStyle: {
                                color: "rgba(0, 255, 234, 0.1)"
                            }
                        },
                        axisLabel: {
                            fontSize: 14,
                            color: "#eee"
                        }
                    }
                ],
                yAxis: [
                    {
                        type: "value",
                        // name: "亿元",
                        axisTick: {
                            show: false
                        },
                        nameTextStyle: {
                            fontSize: 16,
                            margin: [20, 10]
                        },
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: "#eee"
                            }
                        },
                        axisLabel: {
                            fontSize: 20
                        },
                    },
                    {
                        type: "value",
                        // name: "%",
                        axisTick: {
                            show: false
                        },
                        nameTextStyle: {
                            fontSize: 20
                        },
                        splitLine: {
                            lineStyle: {
                                color: "rgba(0, 255, 234, 0.3)"
                            }
                        },
                        axisLabel: {
                            fontSize: 20
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: "#eee"
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: "氨氮",
                        type: "bar",
                        data: ydata,
                        barWidth: 20,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: "rgba(0, 255, 234, 0.6)"
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(0, 255, 234, 0.2)"
                                    }
                                ])
                            }
                        }
                    },
                    {
                        name: "氨氮标准值",
                        type: "line",
                        yAxisIndex: 1,
                        data: LineYdata,
                        barWidth: 10,
                        symbol: "circle",
                        itemStyle: {
                            normal: {
                                color: "rgba(0, 255, 234, 0.8)",
                                background: "rgba(0, 255, 234, 0.8)",
                                barBorderRadius: 9,
                                lineStyle: {
                                    type: "dotted",
                                    color: "rgba(0, 255, 234, 0.8)"
                                }
                            }
                        }
                    }
                ]
            };