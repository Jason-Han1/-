var img = {
    a: "/asset/images/rectangle1.svg",
    b: "/asset/images/rectangle-gray.svg",
};
option = {
    grid: [{
            show: false,
            left: "5%",
            top: "14%",
            bottom: "13%",
            right: "0%",
            containLabel: false,
        },
        {
            show: false,
            left: "5%",
            top: "12%",
            bottom: "11%",
            right: "0%",
            containLabel: false,
        }
    ],
    yAxis: [{
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            gridIndex: 0
        },
        {
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            gridIndex: 1
        }
    ],
    xAxis: [{
            type: "category",
            data: ["城区A", "城区B", "城区C", "城区D"],
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: "dashed",
                    color: "#3e86dd"
                }
            },
            axisLabel: {
                margin: 28,
                textStyle: {
                    color: "#949599",
                    fontSize: 12,
                }

            },
            gridIndex: 0
        },
        {
            type: "category",
            data: ["城区A", "城区B", "城区C", "城区D"],
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: "dashed",
                    color: "#3e86dd"
                }
            },
            axisLabel: {
                margin: 28,
                textStyle: {
                    color: "#949599",
                    fontSize: 12,
                }

            },
            gridIndex: 1
        }
    ],
    series: [{
            z: 6,
            type: "pictorialBar",
            symbolSize: ['108', '8'],
            animation: true,
            xAxisIndex: 0,
            yAxisIndex: 0,
            symbol: 'image://' + img.a,
            barCategoryGap: '20%',
            symbolRepeat: "fixed",
            symbolMargin: 2,
            symbolClip: true,
            symbolPosition: "start",
            symbolOffset: [0, 0],
            data: [60, 85, 90, 90],
            label: {
                normal: {
                    show: false
                }
            },
        },
        {
            z: 2,
            type: "pictorialBar",
            barCategoryGap: '20%',
            symbolMargin: 2,
            xAxisIndex: 0,
            yAxisIndex: 0,
            symbol: 'image://' + img.b,
            itemStyle: {
                normal: {
                    opacity: 0.8
                }
            },
            symbolSize: ['108', '8'],
            animation: true,
            symbolRepeat: "fixed",
            symbolPosition: "start",
            symbolOffset: [0, 0],
            data: [60, 85, 90, 90],
            label: {
                normal: {
                    show: false
                }
            },
        },
        {
            z: 8,
            name: '框',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            barGap: '-100%',
            data: [100, 100, 100, 100],
            itemStyle: {
                normal: {
                    color: 'none',
                    borderColor: '#69686A',
                    borderWidth: 2,
                    barBorderRadius: 5,
                }
            }
        }
    ]
};