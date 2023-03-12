var xData = ["2021-01-01", "2021-01-02", "2021-01-03", "2021-01-04", "2021-01-05", "2021-01-06","2021-01-07", "2021-01-08", "2021-01-09", "2021-01-10", "2021-01-11", "2021-01-12", "2021-01-13", "2021-01-14", "2021-01-15", "2021-01-16", "2021-01-17", "2021-01-18", "2021-01-19", "2021-01-20", "2021-01-21", "2021-01-22", "2021-01-23", "2021-01-24", "2021-01-25", "2021-01-26", "2021-01-27", "2021-01-28", "2021-01-29", "2021-01-30", "2021-01-31"];
var lines = [
    ["236.77", "238.61", "238.70", "239.16", "237.20", "236.30", "236.09", "236.45", "236.12", "236.19", "234.89", "234.38", "234.94", "236.69", "234.86", "235.52", "234.68", "235.36", "236.77", "237.04", "236.32", "236.02", "236.15", "236.16", "236.38", "236.51", "236.04", "236.66", "236.73", "236.68", "238.51"],
    ["237.59", "238.49", "238.38", "238.12", "236.37", "237.61", "236.94", "236.57", "236.32", "237.04", "236.68", "234.44", "235.22", "236.45", "235.02", "235.01", "234.95", "236.48", "236.31", "237.53", "237.01", "236.63", "236.93", "236.04", "237.01", "236.81", "235.53", "237.24", "236.28", "238.05", "239.05"],
    ["247.59", "248.49", "238.38", "238.12", "238.37", "238.61", "239.94", "230.57", "235.32", "233.04", "232.68", "234.44", "235.22", "236.45", "235.02", "235.01", "234.95", "236.48", "236.31", "237.53", "237.01", "236.63", "236.93", "236.04", "239.01", "235.81", "235.53", "237.24", "236.28", "238.05", "239.05"],
]
var attrs = [{
    name: "A相电压",
    unit: ""
}, {
    name: "B相电压",
    unit: ""
}, {
    name: "C相电压",
    unit: ""
}];
option = {
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'none',
        padding: 5,
        formatter: function(param) {
            var resultTooltip = "";
            resultTooltip =
                "<div style='background:rgba(13,5,30,.6);border:1px solid rgba(255,255,255,.2);padding:5px;border-radius:3px;'>" +
                "<div style='text-align:center;'>" + param[0].name + "</div>" +
                "<div style='padding-top:5px;'>" + "<span style='display: inline-block; width: 4px; height:10px; border-radius: 5px;background-color: " + param[0].color + ";'></span>" +
                "<span style=''> " + param[0].seriesName + ": </span>" +
                "<span style='color:" + param[0].color + "'>" + param[0].value + "</span></span><span>" + attrs[0].unit + "</span>";
            for (var i = 1; i < param.length; i++) {
                resultTooltip +=
                    "<div style='padding-top:2px;'>" +
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
        left: '10%',
        top: '8%',
        right: '5%',
        bottom: '18%',
    },
    legend: {
        show: true,
        icon: 'roundRect',
        orient: 'horizontal',
        top: '0.5%',
        right: '8%',
        itemWidth: 18.5,
        itemHeight: 6,
        itemGap: 30,
        textStyle: {
            // color: '#FFFFFF'
            color: '#C9C8CD'
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
                str += value.substring(0, 4) + "\n";
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
                            color: '#0066ff' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#0099ff' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    shadowColor: '#0099ff',
                    shadowBlur: 4,
                    shadowOffsetY: 3
                }
            },
            symbol: 'emptyCircle',
            showSymbol: false,
            itemStyle: {
                normal: {
                    color: '#0099ff',
                    shadowColor: '#0099ff',
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
                            color: '#00cc99' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#66ff66' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    shadowColor: '#66ff66',
                    shadowBlur: 4,
                    shadowOffsetY: 3
                }
            },
            symbol: 'emptyCircle',
            showSymbol: false,
            itemStyle: {
                normal: {
                    color: '#66ff66',
                    shadowColor: '#66ff66',
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
                            color: '#db2365' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#fa676c' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    shadowColor: '#fa676c',
                    shadowBlur: 4,
                    shadowOffsetY: 3
                }
            },
            symbol: 'emptyCircle',
            showSymbol: false,
            itemStyle: {
                normal: {
                    color: '#fa676c',
                    shadowColor: '#fa676c',
                    shadowBlur: 2,
                    borderWidth: 2,
                    borderColor: "#F8F8FF"
                }
            },
            smooth: true
        }
    ]
};