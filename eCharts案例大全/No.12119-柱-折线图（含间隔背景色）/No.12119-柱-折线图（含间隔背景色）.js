option = {
    backgroundColor: '#0f375f',
    grid: {
        top: "25%",
        bottom: "10%"
    },
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
        data: ["同比", "投资额"],
        top: "15%",
        textStyle: {
            color: "#ffffff"
        }
    },
    xAxis: {
        data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
        ],
        axisLine: {
            show: false //隐藏X轴轴线
        },
        axisTick: {
            show: false //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#ebf8ac" //X轴文字颜色
            }
        }
    },
    yAxis: [{
            type: "value",
            name: "亿元",
            nameTextStyle: {
                color: "#ebf8ac"
            },
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
                textStyle: {
                    color: "#ebf8ac"
                }
            }
        },
        {
            type: "value",
            name: "同比",
            nameTextStyle: {
                color: "#ebf8ac"
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
        },
        {
            type: "value",
            gridIndex: 0,
            min: 50,
            max: 100,
            splitNumber: 8,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                }
            }
        }
    ],
    series: [{
            name: "同比",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#058cff"
            },
            lineStyle: {
                color: "#058cff"
            },
            areaStyle:{
                color: "rgba(5,140,255, 0.2)"
            },
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        },
        {
            name: "投资额",
            type: "bar",
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#6f3d9e"
                        },
                        {
                            offset: 1,
                            color: "#3637a3"
                        }
                    ])
                }
            },
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        }
    ]
};