data = [{
    name: "一",
    value: 4000
}, {
    name: "二",
    value: 300
}, {
    name: "仨",
    value: 20
}, {
    name: "四",
    value: 10
}]
let name = data.map((item) => item.name)
let value = data.map((item) => item.value)
let sum = value.reduce((a, b) => {
    return a + b
})
let color = [
    [
        "#FFB238",
        "#0FDEAE",
        "#198AFD",
        "#753DFD"
    ],
    ["rgba(24, 183, 142,0.1)",
        "rgba(1, 179, 238,0.1)",
        "rgba(22, 75, 205,0.1)",
        "rgba(52, 52, 176,0.1)"
    ]
]
let series = []
let yAxis = []
for (let i = 0; i < data.length; i++) {
    series.push({
        name: "",
        type: "pie",
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [45 - i * 10 + "%", 40 - i * 10 + "%"],
        center: ["40%", "50%"],
        label: {
            show: false
        },
        itemStyle: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            borderWidth: 5
        },
        data: [{
                value: data[i].value* 0.75,
                name: data[i].name,
            },
            {
                value: sum - data[i].value*0.75,
                name: "",
                itemStyle: {
                    color: 'transparent',
                },
                tooltip: {
                    show: false
                },
                hoverAnimation: false
            }
        ]
    })
    series.push({
        name: "",
        type: "pie",
        silent: true,
        z: 1,
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [45 - i * 10 + "%", 40 - i * 10 + "%"],
        center: ["40%", "50%"],
        label: {
            show: false
        },
        itemStyle: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            borderWidth: 5
        },
        data: [{
                value: 7.5,
                itemStyle: {
                    color: color[1][i],
                },
                tooltip: {
                    show: false
                },
                hoverAnimation: false
            },
            {
                value: 2.5,
                itemStyle: {
                    color: "rgba(0,0,0,0)",
                    borderWidth: 0
                },
                tooltip: {
                    show: false
                },
                hoverAnimation: false
            }
        ]
    })
    yAxis.push(((data[i].value / sum) * 100).toFixed(2) + "%")
}
option = {
    backgroundColor: '#012248',
    color: color[0],
    legend: {
        show: true,
        icon: "circle",
        top: "center",
        left: "65%",
        data: name,
        orient:'vertical',
        formatter: (name) => {
            return (
                "{title|" + name + "}\n{value|" + data.find((item) => {
                    return item.name == name
                }).value + "}{value|人}"
            );
        },
        textStyle: {
            rich: {
                title: {
                    fontSize: 14,
                    lineHeight: 20,
                    color: "rgb(0, 178, 246)"
                },
                value: {
                    fontSize: 14,
                    lineHeight: 20,
                    color: "#fff"
                }
            }
        }
    },
    tooltip: {
        show: true,
        trigger: "item",
        formatter: "{a}<br>{b}:{c}({d}%)"
    },
    grid: {
        top: "26%",
        left: "40%",
        width:"40%",
        height:"21%",
        containLabel: false
    },
    yAxis: [{
        type: "category",
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            inside: true,
            textStyle: {
                color: "#fff",
                fontSize: 14
            },
            show: true
        },
        data: yAxis
    }],
    xAxis: [{
        show: false,
    }],
    series: series
};