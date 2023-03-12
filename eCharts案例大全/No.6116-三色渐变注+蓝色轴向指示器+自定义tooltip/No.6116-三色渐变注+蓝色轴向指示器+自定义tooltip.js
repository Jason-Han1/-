var xData = ["6:00", "7:00", "8:00", "9:00", "10:00", "11:00"];
const dataBase = {
    '智能摄像头': [400, 500, 300, 300, 300, 400],
    '智能饲喂器': [400, 500, 300, 300, 300, 400],
    '智能环空设备': [400, 500, 300, 300, 300, 400],
    '智能环空设备1': [400, 500, 300, 300, 300, 400],
}
const color = ['#A35AE0', '#66FF66', '#0CEBEA', '#1fa9e3']
let serviceList = []
let index = 0
for (let key in dataBase) {
    let item = {
        name: key,
        type: 'bar',
        barWidth: '15%',
        yAxisIndex: index,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: color[index]
                }, {
                    offset: 1,
                    color: 'rgba(18,155,249,0)'
                }]),
                barBorderRadius: 11,
            }
        },
        data: dataBase[key]
    }
    index++
    serviceList.push(item)
}
var option = {
    backgroundColor: '#060B1C',
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'none',
        padding: 5,
        formatter: function(param) {
            var resultTooltip = "<div style='background:rgba(13,5,30,.6);border:1px solid rgba(255,255,255,.2);padding:5px;border-radius:3px;'>" +
                "<div style='text-align:center;'>" + param[0].name + "</div>" +
                "<div style='padding-top:5px;'>";
            for (var i = 0; i < param.length; i++) {
                resultTooltip +=
                    "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:" + param[i].color.colorStops[0].color + ";'></span>" +
                    "<span style=''> " + param[i].seriesName + ": </span>" +
                    "<span style='color:" + param[i].color + "'>" + param[i].value + "</span></span></br>"

            }
            resultTooltip += "</div>";

            return resultTooltip
        }
    },
    grid: {
        left: '150',
        top: '10%',
        right: '150',
        bottom: '10%',
    },
    legend: {
        show: true,
        icon: 'circle',
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
        data: xData,
        axisLabel: {
            show: true,
            fontSize: 9,
            textStyle: {
                color: "#C9C8CD" //X轴文字颜色
            },
            formatter: function(value) {
                // var str = "";
                // str += value.substring(0, 4) + "\n";
                // str += value.substring(5, 10);
                return value;
            }
        },
        axisLine: {
            show: false //不显示x轴
        },
        axisTick: {
            show: false //不显示刻度
        },
        // boundaryGap: false,
        splitLine: {
            show: false,
            width: 0.08,
            lineStyle: {
                type: "solid",
                color: "#03202E"
            }
        }
    }],
    yAxis: [{
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                inside: false,
                show: true,
                lineStyle: {
                    color: color[0]
                }
            },
            axisLabel: {
                textStyle: {
                    color: color[0]
                }
            },
            splitLine: {
                show: false
            }
        },
        {
            type: 'value',
            position: 'left',
            axisTick: {
                show: false
            },
            offset: 60,
            axisLine: {
                inside: false,
                show: true,
                lineStyle: {
                    color: color[1]
                }
            },
            axisLabel: {
                textStyle: {
                    color: color[1]
                }
            },
            splitLine: {
                show: false
            }
        },
        {
            type: 'value',
            position: 'right',
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: color[2]
                },
                formatter: function(value) {
                    return value
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: color[2]
                }
            },
            splitLine: {
                show: false
            }
        }, {
            type: 'value',
            position: 'right',
            axisTick: {
                show: false
            },
            offset: 60,
            axisLabel: {
                textStyle: {
                    color: color[3]
                },
                formatter: function(value) {
                    return value
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: color[3]
                }
            },
            splitLine: {
                show: false
            }
        }
    ],
    series: serviceList
};