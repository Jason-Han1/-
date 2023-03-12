option = {
    title: {
        text: "耗时",
        subtext: "耗时分析"
    },
    tooltip: {
        trigger: "axis"
    },
    legend: {
        data: ["总共耗时"]
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
        name: "总共耗时",
        type: "line",
        data: [1210, 20, 41, 112, 100, 300, 37],
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
    }]
}