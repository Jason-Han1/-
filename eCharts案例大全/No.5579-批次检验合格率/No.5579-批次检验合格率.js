option = {
    grid: {
        top: "10%",
        bottom: "50%"
    },
    title: {
        text: "批次检验情况",
        textStyle: {
            //fontWeight:48,
            //fontSize: 26,
        },
        top: "1%",
        left: '10%'
    },
    backgroundColor: "#FFF",
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            label: {
                show: true
            }
        }
    },
    legend: {
        data: ["检验合格率", "免检率", "送检批次", "合格批次", "免检批次"],
        top: "3%",
        right: '10',
        textStyle: {
            color: "#000",
            fontSize: 12
        }
    },
    xAxis: {
        data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月"
        ],
        axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
                color: '#26D9FF',
                width: 2
            }
        },
        axisTick: {
            show: true //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#000", //X轴文字颜色
                fontSize: 16
            }
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ["rgba(250,250,250,0.1)", "rgba(250,250,250,0)"]
            }
        }
    },
    yAxis: [{
            type: "value",
            /*name: "亿元",*/
            nameTextStyle: {
                color: "#000",
                fontSize: 16
            },
            max: function(value) {
                return value.max;
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: true
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#26D9FF',
                    width: 2
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#000",
                    fontSize: 16
                }
            },

        },
        {
            type: "value",
            /*name: "同比",*/
            nameTextStyle: {
                color: "#26D9FF",
                fontSize: 16
            },
            position: "right",
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            min: function(value) {
                return value.min - 5;
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#26D9FF',
                    width: 2
                }
            },
            axisLabel: {
                show: true,
                formatter: "{value} %", //右侧Y轴文字显示
                textStyle: {
                    color: "#000",
                    fontSize: 16
                }
            }
        }
    ],
    series: [{
            name: "检验合格率",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 8, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#AFEEEE",
                borderColor: "#AFEEEE",
                width: 2,
                shadowColor: "#AFEEEE",
                shadowBlur: 4
            },
            lineStyle: {
                color: "#AFEEEE",
                width: 2,
                shadowColor: "#AFEEEE",
                shadowBlur: 4
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(61,126,235, 0.5)"
                    },
                    {
                        offset: 1,
                        color: "rgba(61,126,235, 0)"
                    }
                ])
            },
            markPoint: {
                //symbol: 'diamond',
               
                data: [{
                        type: 'max',
                        symbolSize: 35,
                        name: '最大值'
                    },
                    {
                        type: 'min',
                         symbolSize: 35,
                        name: '最小值'
                    }
                ]
            },
            data: [98, 99, 98, 98, 97, 99]
        },
        //62.62%	63.43%	70.31%	72.87%	71.10%	76.39%
        {
            name: "免检率",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 8, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#F0E68C",
                borderColor: "#F0E68C",
                width: 2,
                shadowColor: "#F0E68C",
                shadowBlur: 4
            },
            lineStyle: {
                color: "#F0E68C",
                width: 2,
                shadowColor: "#F0E68C",
                shadowBlur: 4
            },
            markPoint: {
                data: [{
                        type: 'max',
                        name: '最大值'
                    },
                    {
                        type: 'min',
                        name: '最小值'
                    }
                ]
            },
            /*areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(61,126,235, 0.5)"
                    },
                    {
                        offset: 1,
                        color: "rgba(61,126,235, 0)"
                    }
                ])
            },*/
            data: [62.62, 63.43, 70.31, 72.87, 71.10, 76.39]
        },
        {
            name: "送检批次",
            type: "bar",
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(61,126,235, 1)"
                        },
                        {
                            offset: 1,
                            color: "rgba(61,126,235, 0)"
                        }
                    ]),
                    borderColor: 'rgba(102,120,148,0.2)',
                    /*borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(160,196,225, 1)"
                        },
                        {
                            offset: 1,
                            color: "rgba(61,126,235, 1)"
                        }
                    ]),*/
                    borderWidth: 2
                }
            },
            data: [2331, 1032, 3045, 2992, 2538, 4190]
        },
        {
            name: "合格批次",
            type: "bar",
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(15,197,243,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(15,197,243,0)'
                    }]),
                    borderColor: 'rgba(102,120,148,0.2)',
                    /*borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(180,240,255,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(15,197,243,1)'
                    }]),*/
                    borderWidth: 2
                }
            },
            data: [2309, 1026, 3024, 2985, 2528, 4174]
        },
        {
            name: "免检批次",
            type: "bar",
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(102,120,148,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(102,120,148,0)'
                    }]),
                    borderColor: 'rgba(102,120,148,0.2)',
                    borderWidth: 2
                }
            },
            data: [2241, 1003, 2399, 2917, 2528, 4097]
        }
    ]
};