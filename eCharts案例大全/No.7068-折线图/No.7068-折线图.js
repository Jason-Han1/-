// 初始化设置
var lens = 0;
var series_data = [];
var x_data = [];
var help_data = []; //复制数组，用于显示第二个series系列
var minData = 0;
var legendName = '平均运行速度';
 
series_data = [30, 20, 40, 20, 30, 20, 40, 30, 50, 20, 30, 20, 30, 20, 40, 20, 30, 20, 30, 20, 30, 20, 40, 20];
x_data = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
 
minData = getMinData(series_data); //得到最小值
help_data = fillData(series_data, minData, help_data); //得到辅助数组的值
 
option = {
    backgroundColor: "rgba(23,60,110,.5)",
    grid: {
        left: '20%',
        right: '20%',
        bottom: '20%',
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            return "时间：" + params[0].name + ":00<br/>" +
                params[0].seriesName + "：" + params[0].value + "Km/h<br/>";
        },
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: "rgba(50,243,255,1)",
                width: 2,
                type: 'dashed'
            }
        },
        backgroundColor: 'rgba(16,75,136,.5)',
        borderColor: "rgba(50,243,255,1)",
        borderWidth: 1,
    },
    legend: {
        data: legendName
    },
    calculable: true,
    xAxis: [{
        name: "h",
        nameLocation: 'end',
        type: 'category',
        data: x_data,
        nameTextStyle: {
            color: '#fff',
            fontSize: 12,
        }, //坐标轴名称的文字样式。
        boundaryGap: false,
        axisLine: { //坐标轴轴线相关设置
            show: true,
            lineStyle: {
                color: "rgba(48,194,255,1)",
                width: 2,
            },
        },
        axisTick: {
            show: false
        },
        splitLine: { //分割线
            show: true,
            lineStyle: {
                color: "rgba(48,194,255,.5)",
                width: 1,
                type: "solid"
            }
        },
        axisLabel: {
            show: true,
            margin: 10,
            textStyle: {
                color: "rgba(48,194,255,1)",
                fontSize: 16,
            }
        },
    }],
    yAxis: [{
        name: 'km/h',
        type: 'value',
        nameTextStyle: {
            color: "rgba(48,194,255,1)",
        }, //坐标轴名称的文字样式。
        axisLine: { //坐标轴轴线相关设置
            show: true,
            lineStyle: {
                color: "rgba(48,194,255,1)",
                width: 2,
            },
        },
        axisTick: {
            show: false
        }, //标记长度
        axisLabel: {
            show: true,
            margin: 10,
            textStyle: {
                color: "rgba(48,194,255,1)",
                fontSize: 16,
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: "rgba(48,194,255,.5)",
                width: 1,
                type: "solid"
            }
        }, //分割线
        splitArea: {
            show: true,
            areaStyle: {
                color: ["rgba(48,194,255,.2)", "rgba(48,194,255,.0)"],
            }
        },
 
    }],
    series: [{
            zlevel: 1,
            name: legendName,
            type: 'line',
            data: series_data,
            smooth:true,
            symbol: 'circle',
            symbolSize: 4,
            itemStyle: {
                normal: {
                    color: 'yellow',
                    borderColor: '#fff',
                    borderWidth: 1,
                    borderType: 'solid',
                    shadowColor: '#fff',
                    shadowBlur: 4,
                },
            },
            lineStyle: {
                normal: {
                    width: 4,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1, //从左到右
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: 'rgb(255,224,4,1)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(255,142,31,1)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            },
            areaStyle: { //折线颜色不取渐变色，取color设置值
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1, //从左到右，但不能从上到下，需要借助辅助系列
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: 'rgb(255,224,4,.2)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(255,142,31,1)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            },
        },
        {
            name: legendName,
            type: 'line',
            data: help_data,
            hoverAnimation: false, //禁止触发
            zlevel: 2,
            symbolSize: 0, //不显示拐点
            lineStyle: {
                normal: {
                    color: "rgba(48,194,255,0)"
                }
            },
            areaStyle: { //折线颜色不取渐变色，取color设置值
                normal: {
                    color: "rgba(48,194,255,.5)"
                }
            },
        }
    ]
};
function getMinData(series_data) { //求最小值
    var min = series_data[0];
    for (var i = 1; i < series_data.length; i++) {
        var cur = series_data[i];
        cur < min ? min = cur : null;
    }
    return min;
}
 
function fillData(series_data, minData) { //获取辅助数组的值
    for (var i = 0; i < series_data.length; i++) {
        help_data.push(minData / 2);
    }
    return help_data;
}
