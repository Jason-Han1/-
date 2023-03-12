option = {
    backgroundColor: 'black',
    grid: {
        left: '10%',
        top: '-20%',
    },
    tooltip: {
        show: false,
    },
    xAxis: {
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    yAxis: {
        data: ["sss"],
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    },
    color: [
        new echarts.graphic.LinearGradient(
            0, 1, 0, 0,
            [{
                    offset: 0.5,
                    color: '#5C99C2'
                },
                {
                    offset: 1,
                    color: '#8CE6F6'
                }
            ]
        )
    ],
    series: [{
            type: "bar",
            name: "印\n刷\n机",
            stack: "1",
            label: {
                show: true,
                position: ['45%', 48],
                formatter: '{a}',
                align: "left",
                textStyle: {
                    fontSize: "12",
                    fontWeight: 500,
                    color: "#96F5F6",
                },
            },
            barWidth: '6%',
            data: [20],
            itemStyle: {
                barBorderRadius: [1, 0, 0, 1],
                borderColor: '#131717', //同背景色
                borderWidth: 5
            },
            tooltip: {
                show: true,
                position: 'top',
                formatter: '{c}%',
                backgroundColor: '#7DCDCF',
                textStyle: {
                    color: 'black'
                },
            }
        },
        {
            type: "bar",
            name: "贴\n片\n机",
            stack: "1",
            label: {
                show: true,
                position: ['45%', 48],
                formatter: '{a}',
                align: "left",
                textStyle: {
                    fontSize: "12",
                    fontWeight: 500,
                    color: "#96F5F6",
                },
            },
            barWidth: '6%',
            data: [20],
            itemStyle: {
                barBorderRadius: [1, 0, 0, 1],
                borderColor: '#131717', //同背景色
                borderWidth: 5
            },
            tooltip: {
                show: true,
                position: 'top',
                formatter: '{c}%',
                backgroundColor: '#7DCDCF',
                textStyle: {
                    color: 'black'
                },
            }
        },
        {
            type: "bar",
            name: "CNC",
            stack: "1",
            label: {
                show: true,
                position: ['45%', 48],
                formatter: '{a}',
                rotate: -90,
                align: "left",
                textStyle: {
                    fontSize: "12",
                    fontWeight: 500,
                    color: "#96F5F6",
                },
            },
            barWidth: '6%',
            data: [20],
            itemStyle: {
                barBorderRadius: [1, 0, 0, 1],
                borderColor: '#131717', //同背景色
                borderWidth: 5
            },
            tooltip: {
                show: true,
                position: 'top',
                formatter: '{c}%',
                backgroundColor: '#7DCDCF',
                textStyle: {
                    color: 'black'
                },
            }
        },
        {
            type: "bar",
            name: "注\n塑\n机",
            stack: "1",
            label: {
                show: true,
                position: ['45%', 48],
                formatter: '{a}',
                align: "left",
                textStyle: {
                    fontSize: "12",
                    fontWeight: 500,
                    color: "#96F5F6",
                },
            },
            barWidth: '6%',
            data: [20],
            itemStyle: {
                barBorderRadius: [1, 0, 0, 1],
                borderColor: '#131717', //同背景色
                borderWidth: 5
            },
            tooltip: {
                show: true,
                position: 'top',
                formatter: '{c}%',
                backgroundColor: '#7DCDCF',
                textStyle: {
                    color: 'black'
                },
            }
        },
        {
            type: "bar",
            name: "空\n压\n机",
            stack: "1",
            label: {
                show: true,
                position: ['45%', 48],
                formatter: '{a}',
                align: "left",
                textStyle: {
                    fontSize: "12",
                    fontWeight: 500,
                    color: "#96F5F6",
                },
            },
            barWidth: '6%',
            data: [10],
            itemStyle: {
                barBorderRadius: [1, 0, 0, 1],
                borderColor: '#131717', //同背景色
                borderWidth: 5
            },
            tooltip: {
                show: true,
                position: 'top',
                formatter: '{c}%',
                backgroundColor: '#7DCDCF',
                textStyle: {
                    color: 'black'
                },
            }
        },
    ],
}