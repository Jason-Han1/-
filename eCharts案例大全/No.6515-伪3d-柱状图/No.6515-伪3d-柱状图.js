// 立体柱状图

const colors = [
    {
        type: "linear",
        x: 1,
        y: 0,
        x2: 0,
        y2: 0,
        colorStops: [{
                offset: 0,
                color: "#20AAF8"
            },
            {
                offset: 0.5,
                color: "#2C74FF"
            },
            {
                offset: 0.5,
                color: "#27AEFA"
            },
            {
                offset: 1,
                color: "#4D8AFF"
            }
        ]
    },
    
];
const barWidth = 30;

option = {
    tooltip: {
        trigger: "item"
    },
    xAxis: {
        data: ["本科", "大专", "硕士", "MBA", "其他"],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: "#000",
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
            barWidth: barWidth,
            data: [{
                    value: 220,
                    itemStyle: {
                        normal: {
                            color: colors[0]
                        }
                    }
                },
                {
                    value: 182,
                    itemStyle: {
                        normal: {
                            color: colors[0]
                        }
                    }
                },
                {
                    value: 191,
                    itemStyle: {
                        normal: {
                            color: colors[0]
                        }
                    }
                },
                {
                    value: 234,
                    itemStyle: {
                        normal: {
                            color: colors[0]
                        }
                    }
                },
                {
                    value: 290,
                    itemStyle: {
                        normal: {
                            color: colors[0]
                        }
                    }
                }
            ],
        },
        {
            z: 2,
            name: "",
            type: "pictorialBar",
            data: [{
                    value: 220,
                    itemStyle: {
                        normal: {
                            color: colors[0]
                        }
                    }
                },
                {
                    value: 182,
                    itemStyle: {
                        normal: {
                            color: colors[0]
                        }
                    }
                },
                {
                    value: 191,
                    itemStyle: {
                        normal: {
                            color: colors[0]
                        }
                    }
                },
                {
                    value: 234,
                    itemStyle: {
                        normal: {
                            color: colors[0]
                        }
                    }
                },
                {
                    value: 290,
                    itemStyle: {
                        normal: {
                            color: colors[0]
                        }
                    }
                }
            ],
            symbol: "diamond",
            symbolOffset: [0, "50%"],
            symbolSize: [barWidth, 10]
        },
        {
            z: 3,
            name: "",
            type: "pictorialBar",
            symbolPosition: "end",
            data: [{
                    value: 220,
                    itemStyle: {
                        normal: {
                            color: colors[0]
                        }
                    }
                },
                {
                    value: 182,
                    itemStyle: {
                        normal: {
                            color: colors[0]
                        }
                    }
                },
                {
                    value: 191,
                    itemStyle: {
                        normal: {
                            color: colors[0]
                        }
                    }
                },
                {
                    value: 234,
                    itemStyle: {
                        normal: {
                            color: colors[0]
                        }
                    }
                },
                {
                    value: 290,
                    itemStyle: {
                        normal: {
                            color: colors[0]
                        }
                    }
                }
            ],
            symbol: "diamond",
            symbolOffset: [0, "-50%"],
            symbolSize: [barWidth - 4, (10 * (barWidth - 4)) / barWidth]
        }
    ]
}