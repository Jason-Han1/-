const xData = ["本科", "大专", "硕士", "MBA", "其他"];
const yData = [220, 182, 191, 234, 290];
option = {
    backgroundColor: '##182037',
    tooltip: {
        trigger: "item"
    },
    xAxis: {
        data: xData,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: "#A1B5EB",
            fontSize: 12
        }
    },
    yAxis: {
        show: false
    },
    grid: {
        left: 0,
        right: 0
    },
    series: [{
            z: 1,
            type: "bar",
            barWidth: 30,
            data: yData
        },
        {
            z: 2,
            name: "底部",
            type: "pictorialBar",
            data: [{
                    value: 1,
                    itemStyle: {
                        normal: {
                            
                        }
                    }
                },
                {
                    value: 1,
                    itemStyle: {
                        normal: {
                            
                        }
                    }
                },
                {
                    value: 1,
                    itemStyle: {
                        normal: {
                            
                        }
                    }
                },
                {
                    value: 1,
                    itemStyle: {
                        normal: {
                            
                        }
                    }
                },
                {
                    value: 1,
                    itemStyle: {
                        normal: {
                            
                        }
                    }
                }
            ],
            symbol: "circle",
            symbolOffset: [0, "50%"],
            symbolSize: [30, 10],
            // symbolOffset: [0, -5],
            itemStyle: {
                normal: {
                    color: '#D53A35'
                }
            },
        },
        {
            z: 3,
            name: "上部1",
            type: "pictorialBar",
            symbolPosition: "end",
            data: [{
                    value: 220,
                    itemStyle: {
                        normal: {
                            
                            borderWidth: 2,
                            
                        }
                    }
                },
                {
                    value: 182,
                    itemStyle: {
                        normal: {
                            
                            borderWidth: 2,
                            
                        }
                    }
                },
                {
                    value: 191,
                    itemStyle: {
                        normal: {
                            
                            borderWidth: 2,
                            
                        }
                    }
                },
                {
                    value: 234,
                    itemStyle: {
                        normal: {
                            
                            borderWidth: 2,
                            
                        }
                    }
                },
                {
                    value: 290,
                    itemStyle: {
                        normal: {
                            
                            borderWidth: 2,
                            
                        }
                    }
                }
            ],
            symbol: "circle",
            symbolOffset: [0, "-45%"],
            symbolSize: [30 - 0, (10 * (30 - 0)) / 30],
            itemStyle: {
                normal: {
                    color: '#D53A35'
                }
            }
        }
    ]
}