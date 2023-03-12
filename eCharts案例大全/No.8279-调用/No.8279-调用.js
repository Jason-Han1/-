option = {
    title: {
        text: "调用",
        subtext: "调用分析"
    },
    tooltip: {
        trigger: "axis"
    },
    legend: {
        data: ["调用次数", "成功次数", "失败次数"]
    },
    grid: {
        left: '5%',
        right: '3%'
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: "none"
            },
            dataView: {
                readOnly: false
            },
            magicType: {
                type: ["line", "bar"]
            },
            restore: {},
            saveAsImage: {}
        }
    },
    dataZoom: [{
            startValue: "2019-05-24"
        },
        {
            type: "inside"
        }
    ],
    xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
            "2019-05-21",
            "2019-05-22",
            "2019-05-23",
            "2019-05-24",
            "2019-05-25",
            "2019-05-26",
            "2019-05-27"
        ]
    },
    yAxis: {
        type: "value",
        axisLabel: {
            formatter: "{value} 次"
        }
    },
    series: [{
            name: "调用次数",
            type: "line",
            data: [10, 20, 41, 14, 100, 300, 37],
            markPoint: {
                data: [{
                        type: "max",
                        name: "最大值"
                    },
                    {
                        type: "min",
                        name: "最小值"
                    }
                ]
            },
            itemStyle: {
                color: "#5bd1db"
            },
            lineStyle: {
                width: 3
            },
            markLine: {
                label: {
                    show: true,
                    position: "middle",
                    formatter: "{b}: {c} 次"
                },
                symbol: 'none',
                data: [{
                        type: "average",
                        name: "平均值"
                    },

                ]
            }
        },
        {
            name: "成功次数",
            type: "line",
            data: [5, 20, 40, 12, 30, 222, 33],
            markPoint: {
                data: [{
                        type: "max",
                        name: "最大值"
                    },
                    {
                        type: "min",
                        name: "最小值"
                    }
                ]
            },
            itemStyle: {
                color: "#00ef09"
            },
            lineStyle: {
                width: 3
            },
            markLine: {
                label: {
                    show: true,
                    position: "middle",
                    formatter: "{b}: {c} 次"
                },
                symbol: 'none',
                data: [{
                    type: "average",
                    name: "平均值"
                }]
            }
        },
        {
            name: "失败次数",
            type: "line",
            data: [0, 0, 1, 2, 1, 20, 0],
            markPoint: {
                data: [{
                        type: "max",
                        name: "最大值"
                    },
                    {
                        type: "min",
                        name: "最小值"
                    }
                ]
            },
            itemStyle: {
                color: "#EB5252"
            },
            lineStyle: {
                width: 3
            },
            markLine: {
                label: {
                    show: true,
                    position: "middle",
                    formatter: "{b}: {c} 次"
                },
                symbol: 'none',
                data: [{
                    type: "average",
                    name: "平均值"
                }]
            }
        }
    ]
}