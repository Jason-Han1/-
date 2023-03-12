option = {
    backgroundColor: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#041727' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#000D15' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    },
    textStyle: {
        color: "#b3babe"
    },
    legend: {
        top: 20,
        left: "2%",
        textStyle: {
            fontSize: 18
        },
        itemGap: 40,
        itemWidth: 40,
        itemHeight: 20,
        data: [{
                name: '数量(处)',
                textStyle: {
                    color: "#e2ab2b"

                }
            },
            {
                name: '数量(栋)',
                textStyle: {
                    color: "#03dda3"
                }
            }, {
                name: '建筑面积',
                textStyle: {
                    color: "#3ab2ff"
                }
            }, {
                name: '户数',
                textStyle: {
                    color: "#a8d6ff"
                }
            }
        ]
    },
    tooltip: {},
    dataset: {
        source: [
            ['product', '数量(处)', '数量(栋)', '建筑面积', '户数'],
            ['修缮过一次', 43, 85, 93, 20],
            ['修缮过两次', 83, 73, 55, 20],
            ['修缮过两次以上', 86, 65, 82, 20]
        ]
    },
    grid: {
        top: 90,
        left: "5%"
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            fontSize: 20
        }
    },
    yAxis: {
        axisLine: false,
        axisLabel: {
            fontSize: 20
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#123144",
                width: 3
            }

        }
    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{
            name: "数量(处)",
            type: 'bar',
            itemStyle: {
                color: "#e2ab2b"
            },
            label: {
                show: true,
                position: 'top',
                fontSize: 18
            },
            barWidth: 30
        },
        {
            name: "数量(栋)",
            type: 'bar',
            itemStyle: {
                color: "#03dda3"
            },
            label: {
                show: true,
                position: 'top',
                fontSize: 18
            },
            barWidth: 30
        },
        {
            name: "建筑面积",
            type: 'bar',
            itemStyle: {
                color: "#3ab2ff"
            },
            label: {
                show: true,
                position: 'top',
                fontSize: 18
            },
            barWidth: 30
        },
        {
            name: "户数",
            type: 'bar',
            itemStyle: {
                color: "#a8d6ff",
                width: 20
            },
            label: {
                show: true,
                position: 'top',
                fontSize: 18
            },
            barWidth: 30
        }
    ]
}