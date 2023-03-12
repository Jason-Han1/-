var attr = [{
    name: "贷款",
    unit: "元"

}, {
    name: "支付",
    unit: "元"
}, {
    name: "农富宝",
    unit: "元"
}, {
    name: "农信保",
    unit: "元"

}, {
    name: "农信租",
    unit: "元"
}, {
    name: "农信险",
    unit: "元"
}]
var xData = ["2020-08-07", "2020-08-08", "2020-08-09", "2020-08-10", "2020-08-11", "2020-08-12", "2020-08-13", "2020-08-14", "2020-08-15"];
var lines = [
    [400, 400, 300, 300, 300, 400, 400, 400, 350],
    [400, 500, 500, 500, 500, 400, 400, 500, 500],
    [400, 600, 700, 700, 1000, 400, 400, 600, 700],
    [400, 400, 300, 300, 300, 400, 400, 400, 350],
    [400, 500, 500, 500, 500, 400, 400, 500, 500],
    [400, 600, 700, 700, 1000, 400, 400, 600, 700]
];

var series = []
for (var i = 0; i < lines.length; i++) {
    var item = {
        name: attr[i].name,
        type: 'bar',
        barWidth: 40,
        xAxisIndex: 0,
        yAxisIndex: 0,
        itemStyle: {
            barBorderRadius: 50,
            normal: {
                barBorderRadius: 50,
                color: function(params) {
                    // console.log(params);
                    // if(params.dataIndex == maxIndex){
                    //     colors= ["#fc532d","#fe7018","#ff8706"]
                    // }else{
                    colors = ["#33ffff", "#17a1e5"]
                    // }
                    return new echarts.graphic.LinearGradient(0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: colors[0]
                            },
                            {
                                offset: 1,
                                color: colors[1]
                            }
                        ]);
                }
            },
            emphasis: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [{
                            offset: 0,
                            color: '#F4CA1B'
                        },
                        {
                            offset: 1,
                            color: '#E29400'
                        }
                    ]
                )

            }
        },
        data: lines[i]
    }
    series.push(item);
}


var option = {
    backgroundColor: '#060B1C',
    tooltip: {
            trigger: 'item',
            backgroundColor: 'none',
            padding: 5,
            formatter: function(param) {

                var resultTooltip = "<div style='background:rgba(13,5,30,.6);border:1px solid rgba(255,255,255,.2);padding:5px;border-radius:3px;'>" +
                    "<div style='text-align:center;'>" + param.name + "</div>" +
                    "<div style='padding-top:5px;'>"+
                    "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:" + param.color.colorStops[0].color + ";'></span>" +
                    "<span style=''> " + param.seriesName + ": </span>" +
                    "<span style='color:" + param.color.colorStops[0].color + "'>" + param.value + "</span></span><span>元</span></br>"+ "</div>";

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
        itemWidth: 10.5,
        itemHeight: 6,
        itemGap: 0.1,
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
        axisPointer: { //轴指示器
            show: false,
            type: 'shadow',
            // z: 1,
            // shadowStyle: {
            //     color: {
            //         type: 'linear',
            //         x: 0,
            //         y: 0,
            //         x2: 0,
            //         y2: 1,
            //         colorStops: [{
            //             offset: 0,
            //             color: 'rgba(18,155,249,0)' // 0% 处的颜色
            //         }, {
            //             offset: 1,
            //             color: 'rgba(18,155,249,1)' // 100% 处的颜色
            //         }],
            //         global: false // 缺省为 false
            //     },
            //     shadowColor: 'rgba(0, 0, 0, 0.2)',
            //     shadowBlur: 5
            // }
        },

    }],
    yAxis: [{
        type: 'value',
        // scale: true, //坐标轴起点不限制0
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