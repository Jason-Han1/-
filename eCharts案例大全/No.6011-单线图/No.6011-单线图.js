var attr = [{
    name: "支付",
    unit: "元"

}, {
    name: "理财",
    unit: "亿元"
}, {
    name: "保险",
    unit: "元"
}]
var xData = ["2020-08-07", "2020-08-08", "2020-08-09", "2020-08-10", "2020-08-11", "2020-08-12", "2020-08-13", "2020-08-14", "2020-08-15"];
var lines = [
    [400, 380, 330, 300, 330, 470, 480, 400, 350],
    [400, 500, 540, 590, 500, 400, 430, 560, 500],
    [400, 600, 700, 740, 1000, 480, 400, 600, 700]
];

var series = []
for (var i = 0; i < lines.length; i++) {
    var item = {
        name: attr[i].name,
        type: 'line',
        lineStyle: {

            normal: {
                width: 3.5,
                // color: '#FF4F4F',
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#0066FF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#0099FF' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                shadowColor: '#0099FF',
                shadowBlur: 4,
                shadowOffsetY: 2
            }
        },
        symbol: 'emptyCircle',
        showSymbol: false, //是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示。
        itemStyle: {
            normal: {
                color: '#0099FF',
                shadowColor: 'rgba(0,153,255, 0.9)',
                shadowBlur: 2,
                borderWidth: 2,
                borderColor: "#F8F8FF",
            }
        },

        smooth: true,
        data: lines[i]
    }
    series.push(item);
}


var option = {
    backgroundColor: '#060B1C',
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'none',
        padding: 5,
        formatter: function(param) {
            var resultTooltip = "";
            resultTooltip =
                "<div style='background:rgba(13,5,30,.6);border:1px solid rgba(255,255,255,.2);padding:5px;border-radius:3px;'>" +
                "<div style='text-align:center;'>" + param[0].name + "</div>" +
                "<div style='padding-top:5px;'>" +
                "<span style='display: inline-block; width: 4px; height:10px; border-radius: 5px;background-color: " + param[0].color + ";'></span>" +
                "<span style=''> " + param[0].seriesName + ": </span>" +
                "<span style='color:" + param[0].color + "'>" + param[0].value + "</span></span><span>" + attr[param[0].seriesIndex].unit + "</span>" +
                "</div>";
            return resultTooltip
        }
    },
    grid: {
        left: '10%',
        top: '8%',
        right: '5%',
        bottom: '10%',
    },
    legend: {
        show: true,
        icon: 'none',
        orient: 'horizontal',
        top: '0.5%',
        right: '8%',
        itemWidth: 0,
        itemHeight: 0,
        itemGap: 0,
        selectedMode: 'single',
        selected: {
            // // 选中'系列1'
            // '贷款': false,
            // // 不选中'系列2'
            // '支付': true,
            // '农富宝': false,
            // '农信保': false,
            // '农信租': false,
            // '农信险': false,
            
        },
        textStyle: {
            fontSize: 16,
            color: '#10E6EB',
            backgroundColor: '#373F52',
            borderRadius:4,
            padding: [6, 10],

        },
        inactiveColor: '#ccc'
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
        axisPointer: {//轴指示器
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
    series: series
};