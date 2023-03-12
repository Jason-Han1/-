var fontSize = (val) => {
    return val
}

let x = []
for (let i = 0; i < 10; i++) {
    let now = new Date()
    let time = new Date(now.getTime() + i * 1000 * 60 * 60 * 24)
    x.push(time.getMonth() + '月' + time.getDate() + '日')
}
let name = ['a', 'b']
let data1 = []
let data2 = []
for (let j = 0; j < x.length; j++) {
    data1.push(Math.abs(Math.random() * 50 + 50).toFixed(2))
    data2.push(Math.abs(Math.random() * 50 / 2 + 50).toFixed(2))
}

option = {
    backgroundColor: '#012248',
    color: ['#00b7ee', '#ebcc7b'],
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
        left: "center",
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
        axisLine: {
            //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
                color: "#rgba(255,255,255,0.3)"
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
            min: 0,
            max:120,
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
                formatter: "{value}"
            },
            axisTick: {
                show: false
            }
        },
        {
            type: "value",
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
                formatter: "{value}"
            },
            axisTick: {
                show: false
            }
        },
    ],
    series: [{
            name: 'XX',
            type: "bar",
            yAxisIndex: 0,
            barWidth: "30%",
            itemStyle: {
                normal: {
                    barBorderRadius: 10,
                    opacity: 0.8,
                }
            },
            data: data1
        },
        {
            name: '平均XX',
            type: "line",
            yAxisIndex: 1,
            itemStyle: {
                opacity: 0.8,
            },
            symbolSize: 3,
            lineStyle: {
                width: 2,
                opacity: 0.9
            },
            data: data2
        },
    ]
}