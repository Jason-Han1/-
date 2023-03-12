var attr = [{
    name: "智能环空设备",
    unit: "台"

}, {
    name: "智能饲喂器",
    unit: "台"
}, {
    name: "摄像头",
    unit: "只"
}]
var xData = ["2020-08-07", "2020-08-08", "2020-08-09", "2020-08-10", "2020-08-11", "2020-08-12", "2020-08-13", "2020-08-14", "2020-08-15"];
var lines = [
    [400, 400, 300, 300, 300, 400, 400, 400, 350],
    [400, 500, 500, 500, 500, 400, 400, 500, 500],
    [400, 600, 700, 700, 1000, 400, 400, 600, 700]
];
var option = {
    backgroundColor: '#020933',
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'none',
        padding: 5,
        formatter: function(param) {
            console.log(param);
            var resultTooltip = "<div style='background:rgba(13,5,30,.6);border:1px solid rgba(255,255,255,.2);padding:5px;border-radius:3px;'>" +
                "<div style='text-align:center;'>" + param[0].name + "</div>" +
                "<div style='padding-top:5px;'>";
            for (var i = 0; i < param.length; i++) {
                resultTooltip +=
                    "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:" + param[i].color.colorStops[0].color + ";'></span>" +
                    "<span style=''> " + param[i].seriesName + ": </span>" +
                    "<span style='color:" + param[i].color + "'>" + param[i].value + "</span></span><span>" + attr[i].unit + "</span></br>"

            }
            resultTooltip += "</div>";

            return resultTooltip
        }
    },
    grid: {
        left: '10%',
        top: '8%',
        right: '5%',
        bottom: '19%',
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
                color: "#beceff" //X轴文字颜色
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
        // boundaryGap: false,
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
        // scale: true, //坐标轴起点不限制0
        axisLabel: {
            show: true,
            textStyle: {
                fontSize: 9,
                color: "#beceff" //X轴文字颜色
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
    series: [

        {
            name: '智能摄像头',
            type: 'bar',
            barWidth: '10%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#A35AE0'
                    }, {
                        offset: 1,
                        color: '#6830E7'
                    }]),
                    barBorderRadius: 11,
                }
            },
            data: lines[0]
        },
        {
            name: '智能饲喂器',
            type: 'bar',
            barWidth: '10%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#66FF66'
                    }, {
                        offset: 1,
                        color: '#00CA98'
                    }]),
                    barBorderRadius: 11,
                }

            },
            data: lines[1]
        }, {
            name: '智能环空设备',
            type: 'bar',
            barWidth: '10%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#0CEBEA'
                    }, {
                        offset: 1,
                        color: '#368BFF'
                    }]),
                    barBorderRadius: 12,
                },
            },
            data: lines[2]
        }
    ]
};