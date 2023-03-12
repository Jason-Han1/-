var xData = ["2020-01", "2020-02", "2020-03", "2020-04", "2020-05", "2020-06", "2020-07", "2020-08", "2020-09", "2020-10"];
var lines = [
    ["10", "29", "49", "31", "31", "31", "31", "31", "30", "17"],
    ["0", "19", "32", "30", "32", "30", "31", "31", "30", "17"],
    ["0", "18", "31", "30", "31", "43", "51", "50", "46", "19"],
    ["10", "31", "31", "29", "29", "27", "28", "28", "22", "15"],
    ["14", "59", "48", "30", "32", "29", "31", "31", "30", "17"],
    ["23", "58", "62", "61", "62", "60", "62", "62", "60", "34"]
];
var attrs = [{
    name: "北京",
    unit: "次数"
}, {
    name: "广东",
    unit: "次数"
}, {
    name: "湖北",
    unit: "次数"
}, {
    name: "陕西",
    unit: "次数"
}, {
    name: "上海",
    unit: "次数"
}, {
    name: "四川",
    unit: "次数"
}];

var colors = [
    ["#ff2400", "#e47833"],
    ["#ff00ff", "#ff00ff"],
    ["#d9d919", "#d9d919"],
    ["#00cc99", "#66ff66"],
    ["#0066ff", "#0099ff"],
    ["#db2365", "#fa676c"]
]
option = {
    toolbox: {
    show: true,
    feature: {
      dataZoom: {
          show: true,
        yAxisIndex: "none"
      },
      dataView: {
          show: true,
        readOnly: false
      },
      magicType: {
          show: true,
        type: ["line", "bar"]
      },
      restore: {},
      saveAsImage: {}
    }
  },
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'none',
        padding: 6,
        formatter: function(param) {
            var resultTooltip = "";
            resultTooltip =
                "<div style='background:rgba(13,5,30,.6);border:1px solid rgba(255,255,255,.2);padding:5px;border-radius:3px;'>" +
                "<div style='text-align:center;'>" + param[0].name + "</div>" +
                "<div style='padding-top:5px;'>"
            for (var i = 0; i < param.length; i++) {

                if (i > 0) {
                    resultTooltip += "<div style='padding-top:2px;'>"
                }

                resultTooltip +=
                    "<span style='display: inline-block; width: 4px; height:10px; border-radius: 5px;background-color: " + param[i].color + ";'></span>" +
                    "<span style=''> " + param[i].seriesName + ": </span>" +
                    "<span style='color:" + param[i].color + "'>" + param[i].value + "</span><span>" + attrs[i].unit + "</span>"

            }
            resultTooltip +=
                "</div>" +
                "</div>";
            return resultTooltip
        }

    },
    grid: {
        left: '5%',
        top: '8%',
        right: '5%',
        bottom: '15%',
    },
    legend: {
        show: true,
        icon: 'circle',
        orient: 'horizontal',
        top: '90.5%',
        right: 'center',
        itemWidth: 16.5,
        itemHeight: 6,
        // itemGap: 30,
        textStyle: {
            // color: '#FFFFFF'
            color: '#C9C8CD',
            fontSize: 14
        }
    },
    xAxis: [{
        type: 'category',
        // data: ['2019-01-01', '2019-02-01', '2019-03-01', '2019-04-01', '2019-05-01', '2019-06-01', '2019-07-01', '2019-08-01', '2019-09-01', '2019-10-01', '2019-11-01', '2019-12-01', '2020-01-01', '2020-02-01', '2020-03-01', '2020-04-01'],
        data: xData,
        axisLabel: {
            show: true,
            fontSize: 9,
            textStyle: {
                color: "#C9C8CD" //X轴文字颜色
            },
            formatter: function(value) {
                var str = "";
                // str += value.substring(0, 4) + "\n";
                str += value.substring(5, 10);
                return str;
            }
        },
        axisLine: {
            show: false //不显示x轴
        },
        axisTick: {
            show: false //不显示刻度
        },
        boundaryGap: false,
        splitLine: {
            show: true,
            width: 0.08,
            lineStyle: {
                type: "solid",
                color: "#03202E"
            }
        },
        axisPointer: { //轴指示器
            type: 'shadow',
            z: 1,
            shadowStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(18,155,249,0)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(18,155,249,1)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowBlur: 5
            }
        },

    }],
    yAxis: [{
        type: 'value',
        scale: true, //坐标轴起点不限制0
        axisLabel: {
            show: true,
            textStyle: {
                fontSize: 9,
                color: "#C9C8CD" //X轴文字颜色
            }
        },
        splitLine: {
            show: false,

        },
        axisTick: {
            show: false, //不显示刻度
        },
        axisLine: {
            show: false,
        },
        nameTextStyle: {
            color: "#FFFFFF"
        },
        splitArea: {
            show: false
        }
    }],
    series: [{
            name: attrs[0].name,
            type: 'line',
            // data: [10, 18, 5, 23, 14, 40, 58, 50, 45, 56, 53, 47, 45, 65, 55, 50],
            data: lines[0],
            lineStyle: {
                normal: {
                    width: 3.5,
                    // color: '#3374EB',
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: colors[0][0] // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: colors[0][1] // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    shadowColor: colors[0][1],
                    shadowBlur: 4,
                    shadowOffsetY: 3
                }
            },
            symbol: 'emptyCircle',
            showSymbol: false,
            itemStyle: {
                normal: {
                    color: colors[0][1],
                    shadowColor: colors[0][1],
                    shadowBlur: 2,
                    borderWidth: 2,
                    borderColor: "#F8F8FF"
                }
            },
            smooth: true
        },
        {
            name: attrs[1].name,
            type: 'line',
            // data: [23, 60, 20, 36, 23, 58, 81, 76, 68, 76, 73, 68, 65, 85, 75, 70],
            data: lines[1],
            lineStyle: {
                normal: {
                    width: 3.5,
                    // color: '#3374EB',
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: colors[1][0] // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: colors[1][1] // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    shadowColor: colors[1][1],
                    shadowBlur: 4,
                    shadowOffsetY: 3
                }
            },
            symbol: 'emptyCircle',
            showSymbol: false,
            itemStyle: {
                normal: {
                    color: colors[1][1],
                    shadowColor: colors[1][1],
                    shadowBlur: 2,
                    borderWidth: 2,
                    borderColor: "#F8F8FF"
                }
            },
            smooth: true
        },
        {
            name: attrs[2].name,
            type: 'line',
            // data: [23, 60, 20, 36, 23, 58, 81, 76, 68, 76, 73, 68, 65, 85, 75, 70],
            data: lines[2],
            lineStyle: {
                normal: {
                    width: 3.5,
                    // color: '#3374EB',
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: colors[2][0] // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: colors[2][1] // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    shadowColor: colors[2][1],
                    shadowBlur: 4,
                    shadowOffsetY: 3
                }
            },
            symbol: 'emptyCircle',
            showSymbol: false,
            itemStyle: {
                normal: {
                    color: colors[2][1],
                    shadowColor: colors[2][1],
                    shadowBlur: 2,
                    borderWidth: 2,
                    borderColor: "#F8F8FF"
                }
            },
            smooth: true
        },
        {
            name: attrs[3].name,
            type: 'line',
            // data: [23, 60, 20, 36, 23, 58, 81, 76, 68, 76, 73, 68, 65, 85, 75, 70],
            data: lines[3],
            lineStyle: {
                normal: {
                    width: 3.5,
                    // color: '#3374EB',
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: colors[3][0] // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: colors[3][1] // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    shadowColor: colors[3][1],
                    shadowBlur: 4,
                    shadowOffsetY: 3
                }
            },
            symbol: 'emptyCircle',
            showSymbol: false,
            itemStyle: {
                normal: {
                    color: colors[3][1],
                    shadowColor: colors[3][1],
                    shadowBlur: 2,
                    borderWidth: 2,
                    borderColor: "#F8F8FF"
                }
            },
            smooth: true
        },
        {
            name: attrs[4].name,
            type: 'line',
            // data: [23, 60, 20, 36, 23, 58, 81, 76, 68, 76, 73, 68, 65, 85, 75, 70],
            data: lines[4],
            lineStyle: {
                normal: {
                    width: 3.5,
                    // color: '#3374EB',
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: colors[4][0] // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: colors[4][1] // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    shadowColor: colors[4][1],
                    shadowBlur: 4,
                    shadowOffsetY: 3
                }
            },
            symbol: 'emptyCircle',
            showSymbol: false,
            itemStyle: {
                normal: {
                    color: colors[4][1],
                    shadowColor: colors[4][1],
                    shadowBlur: 2,
                    borderWidth: 2,
                    borderColor: "#F8F8FF"
                }
            },
            smooth: true
        },
        {
            name: attrs[5].name,
            type: 'line',
            // data: [23, 60, 20, 36, 23, 58, 81, 76, 68, 76, 73, 68, 65, 85, 75, 70],
            data: lines[5],
            lineStyle: {
                normal: {
                    width: 3.5,
                    // color: '#3374EB',
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: colors[5][0] // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: colors[5][1] // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    shadowColor: colors[5][1],
                    shadowBlur: 4,
                    shadowOffsetY: 3
                }
            },
            symbol: 'emptyCircle',
            showSymbol: false,
            itemStyle: {
                normal: {
                    color: colors[5][1],
                    shadowColor: colors[5][1],
                    shadowBlur: 2,
                    borderWidth: 2,
                    borderColor: "#F8F8FF"
                }
            },
            smooth: true
        }
    ]
};