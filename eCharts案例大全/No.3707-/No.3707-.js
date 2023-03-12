option = {
    color: ["#65779E"],
    tooltip: {
        trigger: "axis",
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: "5%", //距离dom间距
        right: "4%",
        top: "10%",
        bottom: "1%"
    },
    legend: {
        data: [{
                name: "待审核",
                icon: "circle"
            },
            {
                name: "被退回",
                icon: "circle"
            },
            {
                name: "审核通过",
                icon: "circle"
            }
        ],
        // 大小 和位置 文字样式
        itemGap: 12,
        right: 20,
        textStyle: {
            fontSize: 14,
            color: "#5D6C8E",
            fontFamily: "SourceHanSansCN-Regular"
        }
    },
    xAxis: [{
        type: "value",
        axisPointer: {
            type: "shadow"
        },
        // 横坐标 分割线等取消显示
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    }],
    yAxis: [{
            type: "category",
            inverse: true,
            axisLabel: {
                verticalAlign: "bottom",
                align: "left",
                padding: [0, 10, 20, 6],
                textStyle: {
                    fontSize: 16,
                    color: "#65779E",
                    fontFamily: "SourceHanSansCN-Regular"
                }
            },
            // 纵坐标数据
            data: [
                "政府救援队伍",
                "企业救援队伍",
                "社会救援队伍",
                "物资储备库",
                "物资装备",
                "避难场所",
                "应急专家"
            ],
            yAxisIndex: 0,
            // 横坐标 分割线等取消显示
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            }
        },
        {
            type: "category",
            // inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                inside: false,
                verticalAlign: "bottom",
                // 位置 上右下左
                padding: [0, 10, 10, -40],
                lineHeight: "40",
                textStyle: {
                    fontSize: 20,
                    color: "#5D6C8E",
                    fontFamily: "SourceHanSansCN-Regular"
                }
            },
            // 统计的总量 用纵坐标模拟
            data: [111, 222, 333, 111, 222, 333, 11]
        }
    ],
    series: [{
            name: "待审核",
            type: "bar",
            // 宽度
            barWidth: "16",
            // 堆叠
            stack: "总量",
            showBackground: true,
            // 全部背景
            backgroundStyle: {
                color: "#EEF2F9"
            },
            data: [10, 11, 6, 8, 6, 9, 10],
            itemStyle: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 16
                    },
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        1,
                        0,
                        [{
                                offset: 0,
                                color: "#FFF0A0"
                            },
                            {
                                offset: 1,
                                color: "#FFD355"
                            }
                        ],
                        false
                    )
                }
            }
        },
        {
            name: "被退回",
            type: "bar",
            // 宽度
            barWidth: "16",
            // 堆叠
            stack: "总量",
            showBackground: true,
            // 全部背景
            backgroundStyle: {
                color: "#EEF2F9"
            },
            data: [10, 11, 6, 8, 6, 9, 10],
            itemStyle: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 16
                    },
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        1,
                        0,
                        [{
                                offset: 0,
                                color: "#FFABAC"
                            },
                            {
                                offset: 1,
                                color: "#FF6772"
                            }
                        ],
                        false
                    )
                }
            }
        },
        {
            name: "审核通过",
            type: "bar",
            // 宽度
            barWidth: "16",
            // 堆叠
            stack: "总量",
            showBackground: true,
            // 全部背景
            backgroundStyle: {
                color: "#EEF2F9"
            },
            data: [10, 11, 6, 8, 6, 9, 10],
            itemStyle: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 16
                    },
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        1,
                        0,
                        [{
                                offset: 0,
                                color: "#90BEFF"
                            },
                            {
                                offset: 1,
                                color: "#5EA1FF"
                            }
                        ],
                        false
                    )
                }
            }
        }
    ]
};