// 立体柱状图

const colors = [{
        type: "linear",
        x: 1,
        y: 0,
        x2: 0,
        y2: 0,
        colorStops: [{
                offset: 0,
                color: "#8331D9"
            },
            {
                offset: 0.5,
                color: "#720DFF"
            },
            {
                offset: 0.5,
                color: "#B635FC"
            },
            {
                offset: 1,
                color: "#7F2CF1"
            }
        ]
    },
    {
        type: "linear",
        x: 1,
        y: 0,
        x2: 0,
        y2: 0,
        colorStops: [{
                offset: 0,
                color: "#F27921"
            },
            {
                offset: 0.5,
                color: "#EE3E70"
            },
            {
                offset: 0.5,
                color: "#F48D35"
            },
            {
                offset: 1,
                color: "#C82957"
            }
        ]
    },
    {
        type: "linear",
        x: 1,
        y: 0,
        x2: 0,
        y2: 0,
        colorStops: [{
                offset: 0,
                color: "#F17620"
            },
            {
                offset: 0.5,
                color: "#F5D01C"
            },
            {
                offset: 0.5,
                color: "#EF8E08"
            },
            {
                offset: 1,
                color: "#FEDC44"
            }
        ]
    },
    {
        type: "linear",
        x: 1,
        y: 0,
        x2: 0,
        y2: 0,
        colorStops: [{
                offset: 0,
                color: "#4D34FF"
            },
            {
                offset: 0.5,
                color: "#244EFB"
            },
            {
                offset: 0.5,
                color: "#5034D9"
            },
            {
                offset: 1,
                color: "#316CE8"
            }
        ]
    },
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
    {
        type: "linear",
        x: 1,
        y: 0,
        x2: 0,
        y2: 0,
        colorStops: [{
                offset: 0,
                color: "#289DF5"
            },
            {
                offset: 0.5,
                color: "#0DE8FF"
            },
            {
                offset: 0.5,
                color: "#49B1FB"
            },
            {
                offset: 1,
                color: "#17E9FD"
            }
        ]
    },
    {
        type: "linear",
        x: 1,
        y: 0,
        x2: 0,
        y2: 0,
        colorStops: [{
                offset: 0,
                color: "#4FC3B2"
            },
            {
                offset: 0.5,
                color: "#49B5A3"
            },
            {
                offset: 0.5,
                color: "#57D1BF"
            },
            {
                offset: 1,
                color: "#5AD1BD"
            }
        ]
    }
];
const barWidth = 30;

option = {
    backgroundColor: '#182027',
    tooltip: {
        trigger: "item"
    },
     grid: {
        left: 40,
        right: 40,
        bottom: 100,
        top: 100,
        containLabel: true
    },
    xAxis: {
        data: ["1", "2", "3", "4", "5"],
        axisTick: {
            show: true
        },
        axisLine: {
                lineStyle: {
                    color: '#425b78'
                }
            },
            axisLabel: {
                color: '#b9bec6',
                 fontSize: 14
            }
    },
    yAxis: {
            type: 'value',
            name: '单位 / K㎡',
            nameTextStyle:{
                         color:"#b9bec6", 
                         fontSize:12,  
                     },
            axisLine: {
                lineStyle: {
                    color: '#425b78',
                    fontSize: 14
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#587485',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#b9bec6',

                },
            },
        },
    series: [{
            z: 1,
            type: "bar",
            barWidth: barWidth,
            data: [{
                    value: 220,
                    itemStyle: {
                        normal: {
                            color: colors[1]
                        }
                    }
                },
                {
                    value: 182,
                    itemStyle: {
                        normal: {
                            color: colors[2]
                        }
                    }
                },
                {
                    value: 191,
                    itemStyle: {
                        normal: {
                            color: colors[3]
                        }
                    }
                },
                {
                    value: 234,
                    itemStyle: {
                        normal: {
                            color: colors[4]
                        }
                    }
                },
                {
                    value: 290,
                    itemStyle: {
                        normal: {
                            color: colors[5]
                        }
                    }
                }
            ]
        },
        {
            z: 2,
            name: "底部",
            type: "pictorialBar",
            data: [{
                    value: 1,
                    itemStyle: {
                        normal: {
                            color: colors[1]
                        }
                    }
                },
                {
                    value: 1,
                    itemStyle: {
                        normal: {
                            color: colors[2]
                        }
                    }
                },
                {
                    value: 1,
                    itemStyle: {
                        normal: {
                            color: colors[3]
                        }
                    }
                },
                {
                    value: 1,
                    itemStyle: {
                        normal: {
                            color: colors[4]
                        }
                    }
                },
                {
                    value: 1,
                    itemStyle: {
                        normal: {
                            color: colors[5]
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
            name: "上部1",
            type: "pictorialBar",
            symbolPosition: "end",
            data: [{
                    value: 220,
                    itemStyle: {
                        normal: {
                            borderColor: colors[1],
                            borderWidth: 2,
                            color: colors[1]
                        }
                    }
                },
                {
                    value: 182,
                    itemStyle: {
                        normal: {
                            borderColor: colors[2],
                            borderWidth: 2,
                            color: colors[2]
                        }
                    }
                },
                {
                    value: 191,
                    itemStyle: {
                        normal: {
                            borderColor: colors[3],
                            borderWidth: 2,
                            color: colors[3]
                        }
                    }
                },
                {
                    value: 234,
                    itemStyle: {
                        normal: {
                            borderColor: colors[4],
                            borderWidth: 2,
                            color: colors[4]
                        }
                    }
                },
                {
                    value: 290,
                    itemStyle: {
                        normal: {
                            borderColor: colors[5],
                            borderWidth: 2,
                            color: colors[5]
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