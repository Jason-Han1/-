var backgroundColor = "rgb(6,14,51)";
var color = ["#00af6e", "#e5af07", "#ab4ed3", "#0e6ee9"];

var labelData = [{
        value: 1,
        name: "1亿以下"
    },
    {
        value: 1,
        name: "1亿-5亿"
    },
    {
        value: 1,
        name: "5亿-10亿"
    },
    {
        value: 1,
        name: "10亿以上"
    }
];
var data = [{
        value: 40,
        name: "1亿以下"
    },
    {
        value: 70,
        name: "1亿-5亿"
    },
    {
        value: 50,
        name: "5亿-10亿"
    },
    {
        value: 60,
        name: "10亿以上"
    }
];


function angleText(i, num) {
    //每个元素的角度
    var everyAngle = 360 / num;
    //文字现在所在的角度
    var currentAngle = i * everyAngle + everyAngle / 2;
    //文字所在模块的所占角度
    var currentArea = (i + 1) * everyAngle;

    return 360 - currentAngle + 90;
    // return 360 - currentAngle;
}

for (let i = 0; i < labelData.length; i++) {
    labelData[i]["label"] = {};
    labelData[i]["label"]["rotate"] = angleText(i, labelData.length);
}

option = {
    backgroundColor: backgroundColor,

    tooltip: {
        trigger: "item",
        textStyle: {
            fontSize: 16,
            color: "#fff",
            fontFamily: "Microsoft YaHei"
        }
    },

    //
    angleAxis: {
        data: data,
        type: "category",
        startAngle: 180,
        z: 2,
        splitLine: {
            show: true,
            lineStyle: {
                color: "#19f1f530"
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
    },
    // 极坐标
    radiusAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitArea: {
            show: false,
            areaStyle: {
                color: "#19f1f53d"
            }
        }
    },
    polar: {
        center: ["50%", "50%"],
        radius: "65%"
    },
    series: [
        // 外侧圆环
        {
            type: "pie",
            radius: ["85.5%", "90%"],
            z: 5,
            label: {
                normal: {
                    show: false,
                    position: "inside"
                }
            },
            itemStyle: {
                normal: {
                    color: "#0e6ee920"
                }
            },
            animation: false,
            silent: true,
            data: [0]
        },
        {
            type: "pie",
            radius: ["85%", "85.5%"],
            z: 6,
            label: {
                normal: {
                    show: false,
                    position: "inside"
                }
            },
            itemStyle: {
                normal: {
                    color: "#19f1f5f0"
                }
            },
            animation: false,
            silent: true,
            data: [0]
        },
        {
            type: "pie",
            radius: ["70%", "70.5%"],
            z: 5,
            label: {
                normal: {
                    show: false,
                    position: "inside"
                }
            },
            itemStyle: {
                normal: {
                    color: "#19f1f5f0"
                }
            },
            animation: false,
            silent: true,
            data: [0]
        },
        {
            type: "pie",
            radius: ["70.5%", "85%"],
            startAngle: 180,
            z: 3,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 18,
                        color: "#19f1f5f0"
                    },
                    position: "inside"
                }
            },
            itemStyle: {
                normal: {
                    color: "#19f1f51f"
                    // borderColor: "#19f1f5f0"
                }
            },
            animation: false,
            silent: true,
            data: labelData
        },
        {
            type: "pie",
            radius: "70%",
            z: 1,
            label: {
                normal: {
                    show: false,
                    position: "inside"
                }
            },
            itemStyle: {
                normal: {
                    color: "#19f1f53d"
                }
            },
            animation: false,
            silent: true,
            data: [0]
        },
        // 极坐标
        {
            type: "bar",
            data: data,
            z: 9,
            coordinateSystem: "polar",
            itemStyle: {
                color: function(params) {
                    return color[params.dataIndex];
                }
            },
            trigger: "item"
        },
        // 内侧圆
        {
            type: "pie",
            radius: "10%",
            z: 10,
            label: {
                normal: {
                    show: false,
                    position: "inside"
                }
            },
            itemStyle: {
                normal: {
                    color: "#002935",
                    borderWidth: 0
                }
            },
            animation: false,
            silent: true,
            data: [0]
        }
    ]
};