option = {
    backgroundColor:"#0e2469",
    title: [{
        text: "出库TOP5",
        textStyle: {
            color: "#ffffff",
            fontSize: 12
        },
        top: "top",
        left: "75%"
    }, {
        text: "入库TOP5",
        textStyle: {
            color: "#ffffff",
            fontSize: 12
        },
        top: "top",
        left: "35%"
    }],
    grid: [{
            top: "10%",
            bottom: "10%",
            left: '65%',
            width: "35%"
        },
        {
            top: "10%",
            left: '20%',
            width: "35%",
            bottom: "10%",
        }
    ],
    xAxis: [{
            type: 'value',
            gridIndex: 0,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#10899A'
                }
            },
            splitLine: {
                show: false,
            },

            axisLabel: {
                show: false
            }
        },
        {
            type: 'value',
            gridIndex: 1,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#10899A'
                }
            },
            splitLine: {
                show: false,
            },

            axisLabel: {
                show: false
            }
        },

    ],
    yAxis: [{
            gridIndex: 0,
            inverse: true,
            type: 'category',

            data: ['仓库1', '仓库2', '仓库3', '仓库4', '仓库5'],
            axisLabel: {
                textStyle: {
                    color: "#ffffff"
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#ffffff'
                }
            },
            splitLine: {
                show: false,
            }

        },
        {
            gridIndex: 1,
            inverse: true,
            type: 'category',

            data: ['仓库1', '仓库2', '仓库3', '仓库4', '仓库5'],
            axisLabel: {
                textStyle: {
                    color: "#ffffff"
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#ffffff'
                }
            },
            splitLine: {
                show: false,
            }
        }

    ],
    series: [{
            type: 'bar',
            itemStyle: {
                barBorderRadius: 10,
                color: '#4afffc'
            },
            barWidth: '10%',
            data: [320, 280, 220, 150, 110]
        },
        {
            type: 'bar',
            itemStyle: {
                barBorderRadius: 10,
                color: '#4afffc'
            },
            barWidth: '10%',
            data: [330, 300, 260, 220, 150],
            xAxisIndex: 1,
            yAxisIndex: 1,
        },

    ]
};