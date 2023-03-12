option = {
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
            "探伤企业",
            "辐照企业",
            "其他",
        ],
        left: 'center',
        top: "0%",
        itemWidth: 12,
        itemHeight: 12,
        type: 'plain',
        textStyle: {
            color: '#fff',
            fontSize: 16
        },
    },
    xAxis: [{
        type: "category",
        data: ["海拉尔区", "海拉尔区", "扎兰屯市", "牙克石市", "根河市", "阿荣旗", "陈巴尔虎旗"],
        axisPointer: {
            type: "shadow"
        },
        axisTick: {
            show: true,
            // 刻度
            lineStyle: {
                color: "#1d2f50",
            },
            alignWithLabel: true
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: "#fff",
            }
        }
    }],
    yAxis: [{
            type: "value",
            axisLabel: {
                textStyle: {
                    fontSize: 14,
                    color: "#fff",
                }
            },
            yAxisIndex: 0,
            name: "家",
            nameTextStyle: {
                color: "#fff",
                fontSize: 14,
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#1d2f50"
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#315070'],
                    width: 1,
                    type: 'solid'
                }　　
            }
        },
        {
            type: "value",
            axisLabel: {
                textStyle: {
                    fontSize: 14,
                    color: "#fff",
                }
            },
            name: "百分比",
            nameTextStyle: {
                color: "#fff",
                fontSize: 14,
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            }
        }
    ],
    series: [{
            name: "探伤企业",
            type: "bar",
            barWidth: "15",
            stack: "总量",
            data: [10, 11, 6, 8, 6, 9, 10],
            itemStyle: {
                normal: {
                    color: "#00F6FF"
                }
            }
        },
        {
            name: "辐照企业",
            type: "bar",
            barWidth: "15",
            stack: "总量",
            data: [10, 11, 6, 8, 6, 9, 10],
            itemStyle: {
                normal: {
                    color: "#3C6EFF"
                }
            }
        },
        {
            name: "其他",
            type: "bar",
            barWidth: "15",
            stack: "总量",
            data: [10, 11, 6, 8, 6, 9, 10],
            itemStyle: {
                normal: {
                    color: "#F9CB27"
                }
            }
        },
        {
            name: "指标离线率",
            type: "line",
            barWidth: "5",
            yAxisIndex: 1,
            symbolSize: 10,
            smooth: true, //设置折线图平滑
            data: [30, 20, 40, 35, 23, 30, 50],
            itemStyle: {
                normal: {
                    color: "#1EE494"
                }
            }
        }
    ]
};