let list = [{
        "CJSJ": "2020-02",
        "PGCODE": 1,
        "PGZT": "良好"
    },
    {
        "CJSJ": "2020-03",
        "PGCODE": 1,
        "PGZT": "良好"
    },
    {
        "CJSJ": "2020-04",
        "PGCODE": 1,
        "PGZT": "良好"
    },
    {
        "CJSJ": "2020-05",
        "PGCODE": 2,
        "PGZT": "一般"
    },
    {
        "CJSJ": "2020-06",
        "PGCODE": 1,
        "PGZT": "良好"
    }
] //数据 

let colorList = [{
        name: "差",
        color: "#61ff00"
    },
    {
        name: "一般",
        color: "#ffe500"
    },
    {
        name: "良好",
        color: "#de8d0f"
    },
    {
        name: "好",
        color: "#bc2016"
    }
] //颜色数组


let xAxisData = []
let seriesData = []
let colorAry = []
let LinearGradientAry = []
list.map((item, index) => {
    xAxisData.push(item.CJSJ)
    seriesData.push(item.PGCODE)
    colorAry.push(colorList[item.PGCODE].color)
})

// 调整渐变色
switch (colorAry.length) {
    case 1:
        LinearGradientAry = [{
                offset: 0,
                color: colorAry[0]
            },
            {
                offset: 1,
                color: colorAry[0]
            }
        ]
        break;
    case 2:
        LinearGradientAry = [{
                offset: 0,
                color: colorAry[0]
            },
            {
                offset: 1,
                color: colorAry[1]
            }
        ]
        break;
    default:
        let colorPercent = 1 / (colorAry.length - 1)
        colorAry.map((item, index) => {
            let obj = {}
            if (index == colorAry.length - 2) {
                obj = {
                    offset: 1,
                    color: item
                }
            } else {
                obj = {
                    offset: index * colorPercent,
                    color: item
                }
            }
            LinearGradientAry.push(obj)
        })
        break;
}

// tooltip
let tooltip = (params) => {
    let obj = params[0];
    let str = "";
    switch (params[0].value) {
        case 3:
            str = "差";
            break;
        case 2:
            str = "一般";
            break;
        case 1:
            str = "良好";
            break;
        case 0:
            str = "好";
            break;
    }
    str = `${obj.axisValueLabel}</br>现状 : ${str}`;
    return str;
}
// Y轴label
let func = (value) => {
    let texts = [];
    switch (value) {
        case 3:
            texts.push("差");
            break;
        case 2:
            texts.push("一般");
            break;
        case 1:
            texts.push("良好");
            break;
        case 0:
            texts.push("好");
            break;
    }
    return texts;

}


option = {
    backgroundColor: "#333",
    tooltip: {
        trigger: "axis",
        axisPointer: {
            lineStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                            offset: 0,
                            color: "rgba(0, 255, 233,0)"
                        },
                        {
                            offset: 0.5,
                            color: "rgba(255, 255, 255,1)"
                        },
                        {
                            offset: 1,
                            color: "rgba(0, 255, 233,0)"
                        }
                    ],
                    global: false
                }
            }
        },
        formatter: tooltip
    },
    grid: {
        top: 30,
        right: 0,
        left: 50,
        bottom: 30
    },
    dataZoom: [{
            type: "inside",
            show: true,
            start: 0,
            end: 100
        },
        {
            type: "inside",
            start: 10,
            end: 100
        }
    ],
    xAxis: {
        type: "category",
        data: xAxisData,
        axisLine: {
            lineStyle: {
                color: "#105578",
                width: 2
            }
        },
        axisLabel: {
            margin: 10,
            color: "rgb(215,234,245)",
            textStyle: {
                fontSize: 16
            }
            // interval: 0,
            // rotate: 40
        }
    },
    yAxis: {
        type: "value",
        name: "",
        nameTextStyle: {
            fontSize: 12,
            color: "rgba(53,107,144,1)"
        },
        axisLabel: {
            formatter: func
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#0f5378",
                width: 2
            }
        },
        splitLine: {
            lineStyle: {
                color: "rgba(15,83,122,0.2)"
            }
        }
    },
    series: [{
        data: seriesData,
        type: "line",
        barWidth: 10,
        smooth: true,
        symbol: "none",
        itemStyle: {
            normal: {
                color: colorAry[colorAry.length - 1].color,
                lineStyle: {
                    width: 2,
                    type: "solid",
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        1,
                        0,
                        LinearGradientAry
                    ) //线条渐变色
                }
            },
            emphasis: {
                color: colorAry[colorAry.length - 1].color,
                lineStyle: {
                    width: 2,
                    type: "dotted",
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        1,
                        0,
                        LinearGradientAry
                    )
                }
            }
        }
    }]
}