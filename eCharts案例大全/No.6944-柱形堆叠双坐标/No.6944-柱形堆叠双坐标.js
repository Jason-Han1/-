option = {
    color: ["#3398DB"],
    tooltip: {
        trigger: "axis",
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: "3%",
        right: "4%",
        top: "18%",
        bottom: "1%",
        containLabel: true
    },
    legend: {
        data: [
            "< 3小时",
            "3-6 小时",
            "6-9 小时",
            "9-12 小时",
            ">= 12小时",
            "指标离线率"
        ],
        itemGap: 25,
        left: 20
    },
    xAxis: [{
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisPointer: {
            type: "shadow"
        },
        axisTick: {
            show: false,
            alignWithLabel: true
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                fontSize: 11,
                color: "#8F96A5",
                fontFamily: "SourceHanSansCN-Regular"
            }
        }
    }],
    yAxis: [{
            type: "value",
            axisLabel: {
                textStyle: {
                    fontSize: 11,
                    color: "#8F96A5",
                    fontFamily: "SourceHanSansCN-Regular"
                }
            },
            yAxisIndex: 0,
            name: "指标离线数",
            nameTextStyle: {
                color: "#8F96A5",
                fontSize: 16,
                padding: 20
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: "#F4F6F8"
                }
            }
        },
        {
            type: "value",
            axisLabel: {
                textStyle: {
                    fontSize: 11,
                    color: "#8F96A5",
                    fontFamily: "SourceHanSansCN-Regular"
                }
            },
            name: "指标离线率",
            nameTextStyle: {
                color: "#8F96A5",
                fontSize: 16,
                padding: 20
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: "#F4F6F8"
                }
            }
        }
    ],
    series: [{
            name: "< 3小时",
            type: "bar",
            barWidth: "32",
            stack: "总量",
            data: [10, 11, 6, 8, 6, 9, 10],
            itemStyle: {
                normal: {
                    color: "#63E5D5"
                }
            }
        },
        {
            name: "3-6 小时",
            type: "bar",
            barWidth: "32",
            stack: "总量",
            data: [10, 11, 6, 8, 6, 9, 10],
            itemStyle: {
                normal: {
                    color: "#80B0FF"
                }
            }
        },
        {
            name: "6-9 小时",
            type: "bar",
            barWidth: "32",
            stack: "总量",
            data: [10, 11, 6, 8, 6, 9, 10],
            itemStyle: {
                normal: {
                    color: "#F8F360"
                }
            }
        },
        {
            name: "9-12 小时",
            type: "bar",
            barWidth: "32",
            stack: "总量",
            data: [10, 11, 6, 8, 6, 9, 10],
            itemStyle: {
                normal: {
                    color: "#FEBF64"
                }
            }
        },
        {
            name: ">= 12小时",
            type: "bar",
            barWidth: "32",
            stack: "总量",
            data: [10, 11, 6, 8, 6, 9, 10],
            itemStyle: {
                normal: {
                    color: "#FE9FA2"
                }
            }
        },
        {
            name: "指标离线率",
            type: "line",
            barWidth: "5",
            yAxisIndex: 1,
            symbolSize: 10,

            data: [20, 52, 100, 99, 44, 22, 11],
            itemStyle: {
                normal: {
                    color: "#36C6EA"
                }
            }
        }
    ]
};