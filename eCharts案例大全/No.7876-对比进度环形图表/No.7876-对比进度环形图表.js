var data = [{
            name: "本科",
            value: 754
        },
        {
            name: "硕士",
            value: 611
        },
        {
            name: "大专",
            value: 400
        },
        {
            name: "博士",
            value: 200
        }
    ],
    legend = [{
        name: "本科",
        backgroundColor: "#fff"
    }, "硕士", "大专", "博士"]
arrName = getArrayValue(data, "name");
arrValue = getArrayValue(data, "value");
sumValue = 1000;
var bgLineColor = "rgba(255,255,255,0.3)";
objData = array2obj(data, "name");
optionData = getData(data);
company="kW"
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

function array2obj(array, key) {
    var resObj = {};
    for (var i = 0; i < array.length; i++) {
        resObj[array[i][key]] = array[i];
    }
    return resObj;
}

function getData(data) {
    var res = {
        series: [{
                name: "大环",
                type: 'gauge',
                splitNumber: 15,
                radius: '85%',
                center: ['50%', '55%'],
                startAngle: 90,
                endAngle: -269.9999,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: [
                            [1, bgLineColor]
                        ]
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    length: 32,
                    lineStyle: {
                        color: 'auto',
                        width: 3.5
                    }
                },
                axisLabel: {
                    show: false
                },
                detail: {
                    show: false
                }
            },
            {
                name: '小环',
                type: 'gauge',
                splitNumber: 15,
                radius: '80%',
                center: ['50%', '55%'],
                startAngle: 90,
                endAngle: -269.9999,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: bgLineColor,
                        width: 3
                    },
                    length: 20,
                    splitNumber: 5
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                detail: {
                    show: false
                }
            },
        ],
        yAxis: []
    };
    for (let i = 0; i < data.length; i++) {
        res.series.push({
            name: '学历',
            type: 'pie',
            clockWise: false,
            z: 2,
            hoverAnimation: false,
            radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
            center: ["50%", "55%"],
            label: {
                show: false,

            },
            labelLine: {
                show: false
            },
            data: [{
                value: data[i].value,
                name: data[i].name,
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#0050E2'
                        }, {
                            offset: 1,
                            color: '#fff'
                        }],
                        global: false
                    }
                }
            }, {
                value: sumValue - data[i].value,
                name: '',
                itemStyle: {
                    color: "rgba(0,0,0,0)",
                    borderWidth: 0
                },
                tooltip: {
                    show: false
                },
                label: {
                    show: false
                },
                hoverAnimation: false
            }]
        });
        res.series.push({
            name: '背景线',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: false,
            hoverAnimation: false,
            radius: [73 - i * 15 + '%', 69 - i * 15 + '%'],
            center: ["50%", "55%"],
            label: {
                show: false
            },
            itemStyle: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false
                },
                borderWidth: 10,
            },
            data: [{
                value: 100,
                itemStyle: {
                    color: "rgba(255,255,255,0.3)",
                    borderWidth: 10
                },
                tooltip: {
                    show: false
                },
                hoverAnimation: false
            }]
        });
        res.yAxis.push(data[i].name);
    }
    return res;
}

option = {
    backgroundColor: 'rgb(8,20,67)',
    color: ["#fff"],
    grid: {
        top: '16%',
        bottom: '54%',
        left: "50%",
        containLabel: false
    },
    legend: {
        icon: "circle",
        orient: "vertical",
        right: "15%",
        top: "20%",
        textStyle: {
            color: "#fff",
        },
        formatter: function(params) {
          return params+"     "+objData[params].value+"  "+company;
        },
        data: legend
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        z: 3,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            inside: false,
            textStyle: {
                color: "RGB(78,184,252)",
                fontSize: 25,
            },
            show: false
        },
        data: optionData.yAxis
    }],
    xAxis: [{
        show: false
    }],
    series: optionData.series
};