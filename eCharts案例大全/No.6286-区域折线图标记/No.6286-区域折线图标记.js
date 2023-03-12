function minArray(array) {
    var min = array[0];
    var len = array.length;
    for (var i = 1; i < len; i++) {
        if ((array[i] && array[i] < min) || array[i] == 0 && array[i] < min) {
            min = array[i];
        }
    }
    return Number(min);
}

function maxArray(array) {
    var max = array[0];
    var len = array.length;
    for (var i = 0; i < len; i++) {
        if ((array[i] && array[i] > max) || array[i] == 0 && array[i] > max) {
            max = array[i];
        }
    }
    return Number(max);
}

var echartData = {
    "xAxis": ["2019-11-01 10:21:30", "2019-11-02 09:20:47", "2019-11-03 18:24:46", "2019-11-04 18:10:53", "2019-11-05 16:43:33", "2019-11-06 15:14:13", "2019-11-07 15:02:29", "2019-11-08 14:49:56", "2019-11-09 14:43:40", "2019-11-10 14:26:08", "2019-11-11 10:21:30", "2019-11-12 09:20:47", "2019-11-13 18:24:46", "2019-11-14 18:10:53", "2019-11-15 16:43:33", "2019-11-16 15:14:13", "2019-11-17 15:02:29", "2019-11-18 14:49:56", "2019-11-19 14:43:40", "2019-11-20 14:26:08", "2019-11-21 10:21:30", "2019-11-22 09:20:47", "2019-11-23 18:24:46", "2019-11-24 18:10:53", "2019-11-25 16:43:33", "2019-11-26 15:14:13", "2019-11-27 15:02:29", "2019-11-28 14:49:56", "2019-11-29 14:43:40", "2019-11-30 14:26:08", "2019-11-31 10:21:30", "2019-11-32 09:20:47", "2019-11-33 18:24:46", "2019-11-34 18:10:53", "2019-11-35 16:43:33", "2019-11-36 15:14:13", "2019-11-37 15:02:29", "2019-11-38 14:49:56", "2019-11-39 14:43:40", "2019-11-40 14:26:08"],
    "data": [73, 60, 87, 78, 78, 78, 72, 68, 68, 68, 73, 60, 87, 78, 78, 78, 72, 68, 68, 68, 73, 60, 87, 78, 78, 78, 72, 68, 68, 68, 73, 60, 87, 78, 78, 78, 72, 68, 68, 68]
}

//如果数据条数为1个，坐标标记出来，否则看不见
var sigle_point = {};
if (echartData.xAxis.length == 1) {
    sigle_point = {
        data: [{
            value: echartData.data[0],
            xAxis: echartData.xAxis[0],
            yAxis: echartData.data[0]
        }]
    };
}
var configData = {
    "unit": "次/分",
    "name": "心电",
    "ymin": 0,
    "ymax": 0,
    "markYmin": 60,
    "markYmax": 100
};

var minarr = minArray((echartData.data).concat([configData.markYmin])),
    maxarr = maxArray((echartData.data).concat([configData.markYmax]));
var scale = Number(((maxarr - minarr) / 100 + 1).toFixed(2).slice(0, -1));
configData.ymin = minarr / (scale == 1 ? 1.05 : scale);
configData.ymax = maxarr * (scale == 1 ? 1.05 : scale);


option = {
    backgroundColor: "#FFFFFF",
    title: {
        text: `${configData.name}趋势图 {unit|${configData.unit}}`,
        textStyle: {
            color: "#666666",
            fontSize: 14,
            fontWeight: "normal",
            rich: {
                unit: {
                    color: '#999999',
                    fontSize: 12,
                }

            }
        },
        top: "0",
        left: "3%"
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line', // 默认为直线，可选为：'line' | 'shadow'
            lineStyle: { // 直线指示器样式设置
                color: '#2AA2AA',
                type: 'solid',
                width: 1,
                opacity: 0.8
            }
        },
        enterable: true,
        confine: true,
        position: function(point, params, dom, rect, size) {
            // 固定在顶部
            //return [point[0], '20%'];

            var point = point[0],
                toowidth = 40;
            if (point < toowidth + 10) {
                toowidth = 5;
            } else if (point + toowidth > size.viewSize[0] - toowidth) {
                toowidth = toowidth * 2;
            }
            return [point - toowidth, '20%'];
        },
        formatter: function(params, ticket, callback) {
            params[0].name = params[0].seriesName;
            var detatime = "",
                detaildate = '';
            var detailcolor = '';
            var detailseries = '';
            var heartRate = '';
            for (var i = 0; i < params.length; i++) {

                detatime = params[i].axisValue;
                var a = detatime.split(" "),
                    b = a[0].split("-"),
                    c = a[1].split(":");
                detaildate = b[1] + "-" + b[2] + " " + c[0] + ":" + c[1];
                detailcolor = params[i].color;
                detailseries = params[i].name;
                heartRate = params[i].value;
            }

            //回显
            var html = "";
            html += '<div style="width:80px;">' + detaildate + '' +
                '<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + detailcolor + '"></span>' + detailseries + '：' + heartRate +
                '</div>';;
            return html;
        }
    },
    legend: {
        show: true,
        top: "0",
        right: '12',
        textStyle: {
            color: "#666666",
            fontWeight: "normal"
        },
        selectedMode: false
    },
    grid: {
        left: '3%',
        right: '3%',
        top: '30',
        bottom: '10',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        boundaryGap: false,
        inverse: true, //箭头是否反向显示
        data: echartData.xAxis,
        axisLabel: {
            formatter: function(xVal) {
                var x = xVal.split(" ")[0].split("-") /*,ddd=xVal.split(" ")[1].split(":")*/ ;
                return x[1] + "-" + x[2];
            },
            fontSize: "13",
            color: "#999999"
        },
        axisLine: {
            lineStyle: {
                width: '0.5',
                color: "#B3B3B3"
            }
        },
        axisTick: {
            show: false
        }
    },
    yAxis: [{
            type: 'value',
            splitLine: {
                show: false
            },
            position: 'left',
            axisLine: {
                lineStyle: {
                    width: '0.5',
                    color: "#B3B3B3"
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                formatter: ''
            },
            min: configData.ymin.toFixed(0) < 10 ? 0 : configData.ymin.toFixed(0),
            max: configData.ymax.toFixed(0) < 10 ? 10 : configData.ymax.toFixed(0)
        },
        {
            type: 'value',
            splitLine: {
                show: false
            },
            position: 'right',
            axisLine: {
                lineStyle: {
                    width: '0.5',
                    color: "#E7E7E7"
                }
            },
            axisTick: {
                show: false
            }
        }
    ],
    series: [{
            name: configData.name,
            type: 'line',
            symbol: "emptyCircle",
            symbolSize: 8,
            showAllSymbol: true,
            smooth: false,
            data: echartData.data,
            markPoint: sigle_point,
            markArea: {
                silent: true,
                show: true,
                itemStyle: {
                    normal: {
                        color: "#F4F9F0",
                        opacity: '1'
                    }
                },
                data: [
                    [{
                        yAxis: configData.markYmin
                    }, {
                        yAxis: configData.markYmax
                    }]
                ]
            },
            lineStyle: {

                color: "#2AA2AA",
                width: '2'

            },
            itemStyle: {
                color: "#2AA2AA",
                opacity: '1'

            },
            markLine: {
                silent: true,
                show: true,
                animation: false,
                symbol: 'none', //是否显示箭头
                lineStyle: {
                    normal: {
                        type: 'solid',
                        color: "#D7D7D7",
                        width: '0.5'
                    }
                },
                tooltip: {
                    formatter: ''
                },
                data: [{
                        xAxis: 0,
                        yAxis: configData.markYmax,
                        label: {
                            normal: {
                                formatter: configData.markYmax,
                                position: 'end',
                                color: "#999999"
                            }
                        }
                    },
                    {
                        xAxis: 0,
                        yAxis: configData.markYmin,
                        label: {
                            normal: {
                                formatter: configData.markYmin,
                                position: 'end',
                                color: "#999999"
                            }
                        }
                    }
                ]
            }
        },
        {
            name: '正常区间',
            type: 'bar',
            itemStyle: {
                color: "#E8F5E8",
                opacity: '1'
            },
            data: []
        }
    ]
};