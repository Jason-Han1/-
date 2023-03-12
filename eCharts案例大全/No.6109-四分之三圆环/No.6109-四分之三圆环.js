data = [{
        name: "名称1",
        value: 85
    },
    {
        name: "名称2",
        value: 71
    },
    {
        name: "名称3",
        value: 40
    },
    {
        name: "名称4",
        value: 20
    }
];
color = [
    ['#30C5DB', '#30C5DB'],
    ['#F88C41', '#F88C41'],
    ['#66C4F7', '#66C4F7'],
    ['#9F9CF7', '#9F9CF7'],
];
arrName = getArrayValue(data, "name");
arrValue = getArrayValue(data, "value");
sumValue = eval(arrValue.join('+'));
objData = array2obj(data, "name");
optionData = getData(data)

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
        series: [],
        legend: [],
    };
    for (let i = 0; i < data.length; i++) {
        if (data[i].value < 60) {
            var itemColor = {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: color[2][0] // 0% 处的颜色
                }, {
                    offset: 2 / 3,
                    color: color[2][1] // 100% 处的颜色
                }, {
                    offset: 1,
                    color: color[2][1] // 100% 处的颜色
                }],
                global: false // 缺省为 false
            };
        } else {
            if (data[i].value < 80) {
                var itemColor = {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: color[1][0] // 0% 处的颜色
                    }, {
                        offset: 0.5,
                        color: color[1][1] // 100% 处的颜色
                    }, {
                        offset: 1,
                        color: color[1][1] // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            } else {
                if (data[i].value < 100) {
                    var itemColor = {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: color[0][0] // 0% 处的颜色
                        }, {
                            offset: 2 / 3,
                            color: color[0][1] // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: color[0][1] // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                }
            }
        }
        res.series.push({
            name: '',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [70 - i * 15 + '%', 65 - i * 15 + '%'],
            center: ["50%", "50%"],
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
                normal: {
                    color: itemColor,
                }

            },
            data: [{
                value: data[i].value,
                name: data[i].name
            }, {
                value: 400 / 3 - data[i].value,
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
        });
        res.series.push({
            name: '',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [70 - i * 15 + '%', 65 - i * 15 + '%'],
            center: ["50%", "50%"],
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
                borderWidth: 5,
            },
            data: [{
                value: 7.5,
                itemStyle: {
                    color: "#E3F0FF",
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
        });
    }
    return res;
}
optionData.series.push({
                name: '刻度线',
                type: 'gauge',
                startAngle: 90,
                endAngle: 360,
                min: 0,
                max: 100,
                radius: '70%',
                center: ["50%", "50%"],
                title: {show:false},
                detail: {show:false},
                axisLine: {show: false,},
                axisTick: {length: 0,},
                splitLine: {
                    length: '100%',
                    show:true,
                    lineStyle: {
                        color: '#999',
                        width: 1,
                        type: 'solid',
                    },
                },
                axisLabel: { show:false},
                pointer: {show:false,},
                data: [{value: 0,}]
            },{
                name: '刻度值',
                type: 'gauge',
                startAngle: 90,
                endAngle: 360,
                min: 0,
                max: 100,
                radius: '75%',
                center: ["50%", "50%"],
                title: {show:false},
                detail: {show:false},
                axisLine: {show: false,},
                axisTick: {length: 0,},
                splitLine: {show:false,length:-23},
                axisLabel: {
                    color: '#000',
                    fontSize: 12,
                    verticalAlign:'top',
                    align:'left',
                    margin:0
                },
                pointer: {show:false,},
                data: [{value: 0,}]
            });

option = {
  backgroundColor:'#fff',
    legend: [{
        show: true,
        top: '15%',
        left: "50%",
        data: arrName,
        width: 100,
        itemGap: 48,
        itemWidth: 0,
        icon: 'none',
        formatter: function(name) {
            return "{title|" + name + "}{value| " + (objData[name].value / sumValue * 100).toFixed(2) + "%} "
        },
        textStyle: {
            rich: {
                title: {
                    fontSize: 16,
                    color: "#6D7383"
                },
                value: {
                    fontSize: 16,
                    color: "#009afe"
                }
            }
        },
    }],
    tooltip: {
        show: true,
        trigger: "item",
        confine: true,
        formatter: function(param) {
            return param.name + ' : ' + param.value + ' ( ' + (objData[param.name].value / sumValue * 100).toFixed(2) + "% ）"
        },
        textStyle: {
            rich: {
                title: {
                    fontSize: 20,
                    lineHeight: 30,
                    color: "#6D7383"
                },
                value: {
                    fontSize: 18,
                    lineHeight: 20,
                    color: "#4DA1FF"
                }
            }
        },
    },

    series: optionData.series
}