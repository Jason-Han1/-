let colorList = [
    "rgb(96, 255, 0)",
    "rgb(255, 229, 0)",
    "rgb(255, 159, 3)",
    "rgb(216, 30, 7)"
];
let data = [{
        name: "可控",
        value: 0,
    },
    {
        name: "轻微",
        value: 0,
    },
    {
        name: "严重",
        value: 0,
    },
    {
        name: "非常严重",
        value: 1,
    }
];
// 计算数据为空的不同条件
let num = 0;
data.map((item) => {
    if (item.value == 0) {
        num++
    }
})

// 总数 100 四分之三 75

let center = ["44%", "50%"];
let arrName = getArrayValue(data, "name"); //名称
let arrValue = getArrayValue(data, "value"); //数值
let sumValue = eval(arrValue.join("+")); //总和
let objData = array2obj(data, "name");
let optionData = getData(data);
// console.log("objData", objData);
// console.log("arrValue", arrValue);
// console.log("arrName", arrName);
// console.log("sumValue", sumValue);
// console.log("optionData", optionData);
// console.log("data", data);

function getArrayValue(array, key) {
    var key = key || "value";
    var res = [];
    if (array) {
        array.forEach(function(t) {
            res.push(t[key]);
        });
    }
    return res;
}
// 拼凑图例数据
function array2obj(array, key) {
    let resObj = {};
    for (let i = 0; i < array.length; i++) {
        let obj = {
            name: array[i].name,
            value: array[i].value,
            percent: sumValue == 0 ? 0 : (array[i].value / sumValue * 100).toFixed(1)
        };

        data[i].percent = sumValue == 0 ? 0 : (array[i].value / sumValue).toFixed(1)
        resObj[array[i][key]] = obj;
    }
    return resObj;
}

function getData(data) {
    var res = {
        series: [],
        yAxis: []
    };
    for (let i = 0; i < data.length; i++) {
        // console.log([70 - i * 15 + '%', 67 - i * 15 + '%']);
        let seriesData = null
        switch (num) {
            case 3: //有三项未0
                if (data[i].value == 0) {
                    seriesData = [{
                            value: 7.5,
                            name: data[i].name,
                            itemStyle: {
                                color: "rgba(136,220,255,0.1)",
                                borderWidth: 0
                            },
                            tooltip: {
                                show: false
                            },
                            hoverAnimation: false
                        },
                        {
                            value: 2.5,
                            name: "",
                            itemStyle: {
                                color: "rgba(0,0,0,0)",
                                borderWidth: 0
                            },
                            tooltip: {
                                show: false
                            },
                            hoverAnimation: false
                        },
                    ]
                } else {
                    seriesData = [{
                            value: 7.5,
                            name: data[i].name
                        },
                        {
                            value: 2.5,
                            name: "",
                            itemStyle: {
                                color: "rgba(0,0,0,0)",
                                borderWidth: 0
                            },
                            tooltip: {
                                show: false
                            },
                            hoverAnimation: false
                        },
                    ]
                }
                break;
            case 4: //有四项为0
                seriesData = [{
                    value: 7.5,
                    name: data[i].name,
                    itemStyle: {
                        color: "rgba(136,220,255,0.1)",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }, {
                    value: 2.5,
                    name: '',
                    itemStyle: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }]
                break;
            default:
                if (data[i].value == 0) {
                    seriesData = [{
                            value: 7.5,
                            name: data[i].name,
                            itemStyle: {
                                color: "rgba(136,220,255,0.1)",
                                borderWidth: 0
                            },
                            tooltip: {
                                show: false
                            },
                            hoverAnimation: false
                        },
                        {
                            value: 2.5,
                            name: "",
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
                } else {
                    seriesData = [{
                            value: parseFloat(data[i].percent) * 75,
                            name: data[i].name
                        },
                        {
                            value: (1 - parseFloat(data[i].percent)) * 75,
                            name: "",
                            itemStyle: {
                                color: "rgba(136,220,255,0.1)",
                                borderWidth: 0
                            },
                            tooltip: {
                                show: false
                            },
                            hoverAnimation: false
                        },
                        {
                            value: 25,
                            name: "",
                            itemStyle: {
                                color: "rgba(0,0,0,0)",
                                borderWidth: 0
                            },
                            tooltip: {
                                show: false
                            },
                            hoverAnimation: false
                        },
                    ]
                }

                break;
        }
        res.series.push({
            name: "",
            type: "pie",
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [73 - i * 15 + "%", 68 - i * 15 + "%"],
            center: center,
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
            data: seriesData
        });
        // 背景
        res.series.push({
            name: "",
            type: "pie",
            silent: true,
            z: 1,
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [73 - i * 15 + "%", 68 - i * 15 + "%"],
            center: center,
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
                        color: "rgb(3, 31, 62)",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                },
                {
                    value: 2.5,
                    name: "",
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
        });
        res.yAxis.push(data[i].percent);
    }
    return res;
}

option = {
    backgroundColor:"#666",
    legend: {
        show: true,
        icon: "circle",
        top: "12%",
        bottom: "40%",
        right: "0%",
        data: arrName,
        width: 20,
        padding: [0, 16],
        itemGap: 9,
        formatter: name => {

            let str =
                "{title|" +
                name +
                "}{value|" +
                " " +
                objData[name].value +
                " " +
                "}{value|(" +
                objData[name].percent +
                "%)}";
            return str;
        },

        textStyle: {
            rich: {
                title: {
                    fontSize: 12,
                    lineHeight: 12,
                    color: "#babe83"
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
        formatter: e => {
            console.log("e", e)
            let str = `${e.marker}${e.name}<br>${objData[e.name].value}(${objData[e.name].percent}%)`;
            return str;
        }
    },
    color: colorList,
    xAxis: [{
        show: false
    }],
    series: optionData.series
};