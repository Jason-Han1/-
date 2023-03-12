var dataset = [{
    "time": [
        "2017-07-12 15:08:05",
        "2017-07-12 15:08:10",
        "2017-07-12 15:08:15",
        "2017-07-12 15:08:20",
        "2017-07-12 15:08:25",
        "2017-07-12 15:08:30",
        "2017-07-12 15:08:35",
        "2017-07-12 15:08:40",
        "2017-07-12 15:08:45",
        "2017-07-12 15:08:50",
        "2017-07-12 15:08:55",
        "2017-07-12 15:09:00"
    ],
    "cpu": [
        "50",
        "55",
        "40",
        "70",
        "80",
        "85",
        "47",
        "58",
        "47",
        "58",
        "47",
        "58"
    ],
    "memory": [
        "47",
        "58",
        "96",
        "28",
        "25",
        "58",
        "47",
        "74",
        "52",
        "14",
        "25",
        "84"
    ],
    "network": [
        "17",
        "04",
        "14",
        "47",
        "25",
        "14",
        "14",
        "25",
        "14",
        "82",
        "14",
        "42"
    ]
}]
var set = [{
        "name": "cpu",
        "color": "#2E8CC4",
        "final_color": "blue",
        "chartPosition": "1",
        "min": "0",
        "max": "100",
        "unit": "%"
    }, {
        "name": "memory",
        "color": "#AF5DC6",
        "final_color": "purple",
        "chartPosition": "2",
        "min": "0",
        "max": "100",
        "unit": "%"
    }, {
        "name": "network",
        "color": "#9ACD76",
        "final_color": "green",
        "chartPosition": "3",
        "min": "0",
        "max": "100",
        "unit": "%"
    }]
    /**
     * 三层折线图
     * param1  echarts的初始化id  echarts.init(document.getElementById('xxx'))
     * param2  json数据  时间，数据集1，数据集2，数据集3
     * param3  参数属性(name，color，final_color,chartPosition,min,max)  json
     */
function Broken_line(id, dataset, param) {
    var color = "#9A9A9C"; //param  字体颜色  color
    var background = "#202624"; //背景
    // var divwidth = document.getElementById(id).offsetWidth; //幕板宽
    // var divheight = document.getElementById(id).offsetHeight; //幕板高
    var divwidth = 200;
    var divheight = 400;
    // var size = $("#" + id).css('fontSize');//字体
    var size = 16;
    var height = parseInt(size) + 10; //离顶部距离
    var width = parseInt(size) * 2 + 2; //距离两边的距离
    var spacing = (divheight - height) / 3.1
    var Myecharts = "mycharts_" + id;
    // Myecharts = echarts.init(document.getElementById(id));
    var count = dataset[0].time.length;//点数
    var data = {
        time: []
    };
    for (var i = 0; i < param.length; i++) {
        data[param[i].name] = [];
    }//插入数据
    
    //对数据处理，分别获取每个表格的数据最大值，最小值以及拥有的名字
    var min_1 = "";
    var min_2 = "";
    var min_3 = "";
    var name_1 = [];
    var name_2 = [];
    var name_3 = [];
    var interval_1 = "";
    var interval_2 = "";
    var interval_3 = "";
    for (var i = 0; i < param.length; i++) {
        if (param[i].chartPosition == 1) {
            min_1 = param[i].min;
            interval_1 = param[i].max - param[i].min;
            name_1.push(param[i].name)
        } else if (param[i].chartPosition == 2) {
            min_2 = param[i].min;
            interval_2 = param[i].max - param[i].min;
            name_2.push(param[i].name)
        } else if (param[i].chartPosition == 3) {
            min_3 = param[i].min;
            interval_3 = param[i].max - param[i].min;
            name_3.push(param[i].name)
        }
    }

//根据名字以及数据获得数据所占比例
    function init(name, data) {
        for (var i = 0; i < name_1.length; i++) {
            if (name = name_1[i]) {
                return (data - min_1) / interval_1 * 100
            }
        }
        for (var i = 0; i < name_2.length; i++) {
            if (name = name_2[i]) {
                return (data - min_2) / interval_2 * 100
            }
        }
        for (var i = 0; i < name_3.length; i++) {
            if (name = name_3[i]) {
                return (data - min_3) / interval_3 * 100
            }
        }
    }




//插入数据
    for (var i = 0; i < count; i++) {
        data.time.push([new Date(dataset[0].time[i]), new Date(dataset[0].time[i])]);
        for (var j = 0; j < param.length; j++) {
            data[param[j].name].push([new Date(dataset[0].time[i]), init(param[j].name, dataset[0][param[j].name][i])]);
        }
    }

    function makeXAxis(gridIndex, opt) {
        return echarts.util.merge({
            type: 'time',
            gridIndex: gridIndex,
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: color
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                textStyle: {
                    fontSize: parseInt(size),
                    margin: 10
                }
            },
            //***************改******************************
            splitLine: {
                show: false,
                lineStyle: {
                    color: color
                }
            },
            min: data.time[0][0],
            max: data.time[count - 1][0],
            axisPointer: {
                lineStyle: {
                    color: 'transparent'
                }
            }
        }, opt || {}, true);
    }

    function makeYAxis(gridIndex, opt) {
        return echarts.util.merge({
            type: 'value',
            gridIndex: gridIndex,
            nameLocation: 'middle',
            nameTextStyle: {
                color: color, //左图标的颜色
                //fontSize: '30%'
            },
            boundaryGap: false,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: color
                }
            }, //左边线条颜色
            axisLabel: {
                show: true,
                // interval: '0',
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: color,
                    width: 0.3
                }
            },
            position: 'right',
            min: 0,
            max: 100
        }, opt || {}, true);
    }

    function makeGrid(top, opt) {
        return echarts.util.merge({
            top: top,
            height: spacing,
            left: width,
            right: width
        }, opt || {}, true);
    }
    var serious = [];
    for (var i = 0; i < param.length; i++) {
        //for(var j = 1; j < 4; j++){
        if (param[i].chartPosition == 1) {
            serious.push({
                name: param[i].name,
                type: 'line',
                symbol: 'circle',
                symbolSize: 2,
                xAxisIndex: 3,
                yAxisIndex: 3,
                itemStyle: {
                    normal: {
                        color: param[i].color,
                        borderWidth: 1
                    }
                },
                data: data[param[i].name],
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: param[i].color
                        }, {
                            offset: 1,
                            color: param[i].final_color
                        }], false)
                    }
                }

            });
        }
        if (param[i].chartPosition == 2) {
            serious.push({
                name: param[i].name,
                type: 'line',
                symbol: 'circle',
                symbolSize: 2,
                xAxisIndex: 1,
                yAxisIndex: 1,
                itemStyle: {
                    normal: {
                        color: param[i].color,
                        borderWidth: 1
                    }
                },
                data: data[param[i].name],
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: param[i].color
                        }, {
                            offset: 1,
                            color: param[i].final_color
                        }], false)
                    }
                }

            });
        }
        if (param[i].chartPosition == 3) {
            serious.push({
                name: param[i].name,
                type: 'line',
                symbol: 'circle',
                symbolSize: 2,
                xAxisIndex: 2,
                yAxisIndex: 2,
                itemStyle: {
                    normal: {
                        color: param[i].color,
                        borderWidth: 1
                    }
                },
                data: data[param[i].name],
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: param[i].color
                        }, {
                            offset: 1,
                            color: param[i].final_color
                        }], false)
                    }
                }

            });
        }
        //}
    }
    option = {
        backgroundColor: background,
        tooltip: {
            trigger: 'axis',
            backgroundColor: '#fff',
            borderColor: 'rgba(0, 0, 200, 0.2)',
            borderWidth: 1,
            borderRadius: 0,
            padding: 1,
            formatter: function(params) {
                if (params.length) {
                    params.unshift({
                        //seriesName: 'time',
                        //value: [null, ""],
                        //color: '#5193f2'
                    });
                    return echarts.util.map(['cpu', 'memory', 'network'], function(seriesName) {
                        for (var i = 0; i < params.length; i++) {
                            var param = params[i];
                            var style = 'color: ' + param.color;
                            if (param.seriesName === seriesName) {
                                return '<span style="' + style + '">' +
                                    param.seriesName +
                                    ':</span><span style="' +
                                    style + '">' + param.value[1] + '</span>';
                            }
                        }
                    }).join('<br>');
                }
            }
        },
        axisPointer: {
            link: [{
                xAxisIndex: 'all'
            }],
            snap: true
        },
        grid: [
            makeGrid(height),
            makeGrid(height + spacing),
            makeGrid(height + spacing * 2),
            makeGrid(height, {
                height: spacing
            }),
            makeGrid(height, {
                show: true,
                height: spacing * 3,
                borderColor: color,
                borderWidth: 1,
                z: 2
            })
        ],
        xAxis: [
            makeXAxis(0),
            makeXAxis(1),
            makeXAxis(2),
            makeXAxis(3, {
                axisLine: {
                    show: false
                }
            }),
            makeXAxis(4, {
                position: 'top',
                axisLine: {
                    show: false,
                    onZero: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: color,
                        width: 0.3
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: color
                    }
                },
                axisPointer: {
                    show: true,
                    lineStyle: {
                        color: '#478cf1',
                        width: 0.5
                    }
                }
            })
        ],
        yAxis: [
            makeYAxis(0, {
                // name: param[0].name
            }),
            makeYAxis(1, {
                // name: param[1].name
            }),
            makeYAxis(2, {
                // name: param[2].name
            }),
            makeYAxis(3),
            makeYAxis(4)
        ],
        series: serious
    };
    myChart.setOption(option)
// 数据实时更新部分
    // this.update_Broken_line = function(message) {
    //     var name_set = [];
    //     var sign = [];
    //     for (var i = 0; i < message.length; i++) {
    //         if (message[i].chartType == "line") {
    //             name_set.push(message[i].chartName);
    //             sign.push(i);
    //         }
    //     }
    //     if (name_set.length != 0) {
    //         data.time.splice(0, 1);
    //         data.time.push([new Date(message[0].values[0].timeStamp), new Date(message[0].values[0].timeStamp)]);
    //         for (var j = 0; j < param.length; j++) {
    //             var isexist = 0;
    //             var issign = "";
    //             data[param[j].name].splice(0, 1);
    //             for (var i = 0; i < name_set.length; i++) {
    //                 if (param[j].name == name_set[i]) {
    //                     isexist = 1;
    //                     issign = i;
    //                 }
    //             }
    //             if (isexist == 1) {
    //                 data[param[j].name].push([new Date(message[0].values[0].timeStamp), init(param[j].name, message[issign].values[0].value)]);
    //             } else {
    //                 data[param[j].name].push([new Date(message[0].values[0].timeStamp), data[param[j].name][data[param[j].name].length - 1][1]]);
    //             }
    //         }
    //     }
    //     serious_update = [];
    //     for (var i = 0; i < param.length; i++) {
    //         for (var j = 1; j < 4; j++) {
    //             if (param[i].chartPosition == j) {
    //                 serious_update.push({
    //                     name: param[i].name,
    //                     data: data[param[i].name]
    //                 });
    //             }
    //         }
    //     }
    //     myChart.setOption({
    //         xAxis: [
    //             makeXAxis(0),
    //             makeXAxis(1),
    //             makeXAxis(2),
    //             makeXAxis(3),
    //             makeXAxis(4, {
    //                 axisLabel: {
    //                     show: true,
    //                     showMaxLabel: true,
    //                     showMinLabel: true,
    //                     textStyle: {
    //                         color: color
    //                     }
    //                 }
    //             })
    //         ],
    //         series: serious_update
    //     });
    // }
}
Broken_line("main", dataset, set)