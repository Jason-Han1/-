var fontSize = (val) => {
    return val
}

let x = []
for (let i = 0; i < 30; i++) {
    let now = new Date()
    let time = new Date(now.getTime() + i * 1000 * 60 * 60 * 24)
    x.push(time.getMonth() + '月' + time.getDate() + '日')
}
let name = ['a', 'b', 'c']
let data = []
for (let i = 0; i < name.length; i++) {
    let arr = []
    for (let j = 0; j < x.length; j++) {
        arr.push(Math.abs(Math.random() * 50+50).toFixed(2))
    }
    data.push(arr)
}
let series = [{
        name: "a",
        type: "line",
        smooth: true,
        itemStyle: {
            opacity: 0.8,
        },
        yAxisIndex: 0,
        symbolSize: 0,
        lineStyle: {
            width: 1.5,
            opacity: 0.9
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            color: "#ffffff",
            formatter: "{value}"
        },
        axisTick: {
            show: false
        },
        data: data[0]
    },
    {
        name: "b",
        type: "bar",
        barWidth: "30%",
        stack: 'stack',
        itemStyle: {
            normal: {
                opacity: 0.8,
            }
        },
        yAxisIndex: 1,
        lineStyle: {
            width: 1.5,
            opacity: 0.9
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            show: true,
        },
        axisLabel: {
            color: "#ffffff",
            formatter: "{value}"
        },
        axisTick: {
            show: false
        },
        data: data[1]
    },
    {
        name: "c",
        type: "bar",
        barWidth: "30%",
        stack: 'stack',
        itemStyle: {
            normal: {
                opacity: 0.8,
            }
        },
        yAxisIndex: 1,
        lineStyle: {
            width: 1.5,
            opacity: 0.9
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            show: true,
        },
        axisLabel: {
            color: "#ffffff",
            formatter: "{value}"
        },
        axisTick: {
            show: false
        },
        data: data[2]
    },
]
option = {
    backgroundColor: '#012248',
    color: ['#ebcc7b', '#00b7ee', '#f08080'],
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        icon: 'circle',
        itemWidth: fontSize(14),
        itemHeight: fontSize(14),
        itemGap: fontSize(7),
        left: 'center',
        top: "20%",
        textStyle: {
            color: "#ffffff",
            fontSize: fontSize(14),
        },
    },
    grid: {
        top: "center",
        left: "center",
        containLabel: true
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 100,
        xAxisIndex: [0],
        orient: 'horizontal'
    }, ],
    xAxis: [{
        type: "category",
        gridIndex: 0,
        splitLine: {
            show: true,
            interval: 1,
            lineStyle: {
                color: "rgba(255,255,255,0.3)"
            }
        },
        axisLine: {
            //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
                color: "#0c3b71"
            }
        },
        axisLabel: {
            //坐标轴刻度标签的相关设置
            show: true,
            color: "#ffffff",
            fontSize: fontSize(14)
        },
        axisTick: {
            alignWithLabel: true
        },
        data: x
    }],
    yAxis: [{
            type: "value",
            max: 100,
            min: 0,
            splitLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,0.1)"
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                color: "rgba(255,255,255,0.3)"
                }
            },
            axisLabel: {
                color: "#ffffff",
                fontSize: fontSize(14),
                formatter: "{value}",
                show: false,
            },
            axisTick: {
                show: false
            }
        },
        {
            type: "value",
            max: 200,
            min: 0,
            splitLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,0.1)"
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                color: "rgba(255,255,255,0.3)"
                }
            },
            axisLabel: {
                color: "#ffffff",
                fontSize: fontSize(14),
                formatter: "{value}",
                show: false,
            },
            axisTick: {
                show: false
            }
        }
    ],
    series: series
}