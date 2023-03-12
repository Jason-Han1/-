var fontSize = (val) => {
    return val * 100
}
let json = [{
    name: "a",
    value: 40
}, {
    name: "b",
    value: 30
}, {
    name: "c",
    value: 20
}, {
    name: "d",
    value: 10
}]
let xData = json.map((item) => {
    return item.name
})
let yData1 = json.map((item) => {
    return item.value
})
let yData2 = json.map((item) => {
    return item.value + Math.random() * 10
})
option = {
    backgroundColor: '#012248',
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        show: false,
        icon: 'circle',
        itemWidth: fontSize(0.10),
        itemHeight: fontSize(0.10),
        itemGap: fontSize(0.05),
        top: fontSize(0.01),
        left: fontSize(0.20),
        textStyle: {
            color: "#ffffff",
            fontSize: fontSize(0.11),
        },
    },
    grid: [{
        width: '80%',
        height: '40%',
        x: "10%",
        y: "10%",
        containLabel: true
    }, {
        width: '80%',
        height: '40%',
        x: "10%",
        y2: "9%",
        containLabel: true
    }],
    xAxis: [{
            type: "category",
            gridIndex: 0,
            axisLine: {
                //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: "#0c3b71"
                }
            },
            axisLabel: {
                //坐标轴刻度标签的相关设置
                show: false,
                color: "#ffffff",
                fontSize: fontSize(0.12)
            },
            axisTick: {
                show: false,
                alignWithLabel: true
            },
            data: xData
        },
        {
            type: "category",
            gridIndex: 1,
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
                fontSize: fontSize(0.12)
            },
            axisTick: {
                show: false,
                alignWithLabel: true
            },
            data: xData
        }
    ],
    yAxis: [{
        type: "value",
        gridIndex: 0,
        min: 0,
        max: 50,
        // splitNumber: 4,
        splitLine: {
            show: false,
            lineStyle: {
                color: "rgba(255,255,255,0.1)"
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#0c3b71"
            }
        },
        axisLabel: {
            color: "#ffffff",
            fontSize: fontSize(0.10),
            formatter: "{value}"
        },
        axisTick: {
            show: false
        }
    }, {
        type: "value",
        gridIndex: 1,
        min: 0,
        max: 50,
        // splitNumber: 4,
        splitLine: {
            show: false,
            lineStyle: {
                color: "rgba(255,255,255,0.1)"
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#0c3b71"
            }
        },
        axisLabel: {
            color: "#ffffff",
            fontSize: fontSize(0.10),
            formatter: "{value}"
        },
        axisTick: {
            show: false
        }
    }],
    series: [{
            name: "",
            type: "bar",
            barWidth: "30%",
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    color: "#00b7ee"
                }
            },
            label: {
                show: true,
                fontSize: fontSize(0.1),
                color: '#fff',
                position: 'top', //inside
                formatter: (params) => {
                    return params.value.toFixed(2)
                }
            },
            data: yData1
        },
        {
            name: "",
            type: "bar",
            barWidth: "30%",
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: "#00b7ee"
                }
            },
            label: {
                show: true,
                fontSize: fontSize(0.1),
                color: '#fff',
                position: 'top', //inside
                formatter: (params) => {
                    return params.value.toFixed(2)
                }
            },
            data: yData2
        }
    ]
}