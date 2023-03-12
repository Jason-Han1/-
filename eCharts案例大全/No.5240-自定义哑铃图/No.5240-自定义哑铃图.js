var fontSize = (val) => {
    return val
}

json = [{
    service: 'a',
    low: 10,
    high: 20
}, {
    service: 'b',
    low: 5,
    high: 90
}, {
    service: 'c',
    low: 80,
    high: 100
}, {
    service: 'd',
    low: 50,
    high: 60
}]

let data = []
let categoryData = []
for (let i = 0; i < json.length; i++) {
    categoryData.push(json[i].service) //y轴类目值
    data.push([
        json[i].service, //y轴类目值
        json[i].low, //low，哑铃左端值
        json[i].high //high，哑铃右端值
    ]);
}

// 哑铃图配置项
let renderItem = (params, api) => {
    let yValue = api.value(0);//index：0,1,2,3
    let highPoint = api.coord([api.value(1), yValue]);//high值转为坐标位置
    let lowPoint = api.coord([api.value(2), yValue]);//low值转为坐标位置
    let style = api.style({
        stroke: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#d3d3d3'
            },
            {
                offset: 1,
                color: '#27bbfe'
            }
        ]),
    });
    // low侧填充颜色
    let styleh = api.style({
        fill: "#d3d3d3"
    });
    let stylel = api.style({
        fill: "#27bbfe"
    });

    return {
        type: 'group',
        children: [{
            type: 'line',
            shape: {
                y1: highPoint[1],
                x1: highPoint[0],
                y2: lowPoint[1],
                x2: lowPoint[0]
            },
            style: style
        }, {
            type: 'circle',
            shape: {
                cy: lowPoint[1],
                cx: lowPoint[0],
                r: fontSize(5)
            },
            style: stylel
        }, {
            type: 'circle',
            shape: {
                cy: highPoint[1],
                cx: highPoint[0],
                r: fontSize(5)
            },
            style: styleh
        }]
    };
}

option = {
    backgroundColor: '#012248',
    color: ["#d3d3d3", "#27bbfe"],
    legend: {
        show: true,
        icon: "circle",
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 9,
        left: "center",
        top: "20%",
        textStyle: {
            fontSize: fontSize(14),
            color: "#ffffff"
        },
        data: ["low", "high"]
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: (params) => {
            return params[0].value[0] + "<br/>" + "low：" + params[0].value[1] + "<br/>" + "high：" + params[0].value[2]
        }
    },
    xAxis: {
        axisLine: {
            symbol: ['none', 'arrow'],
            symbolSize: [5, 10],
            lineStyle: {
                color: "#00c7ff",
                type: 'dotted',
            }
        },
        axisLabel: {
            showMinLabel: false,
            showMaxLabel: false,
            textStyle: {
                fontSize: fontSize(14),
                color: "#ffffff"
            }

        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        data: categoryData,
        axisLine: {
            show: false
        },
        axisLabel: {
            margin: fontSize(30),
            textStyle: {
                fontSize: fontSize(14),
                color: "#ffffff"
            }

        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    grid: {
        top: "center",
        left: "center",
        containLabel: true
    },
    series: [{
            type: 'custom', //自定义系列
            name: 'low',
            itemStyle: {
                normal: {
                    borderWidth: 1, //哑铃线粗细
                }
            },
            renderItem: renderItem, //自定义图形渲染的逻辑
            encode: {
                y: 0, //y轴对应data数据
                x: [1, 2] //x轴对应data数据
            },
            data: data
        },
        // 单纯为了legend显示
        {
            name: "high",
            type: 'custom',
            show: false
        }
    ]
}