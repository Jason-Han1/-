var xData = ["2020-01", "2020-02", "2020-03", "2020-04", "2020-05", "2020-06"]
var line = ["1030", "205", "84","568","689","4587"];
var attr ={
    'name':'月平均单价',
    'unit':'元/单'
}
// var graphicData = ["A级:1000-10000元/人",
// "B级:10000-100000元/人",
// "C级:100000-10000000元/人",
// ];
var colors = []
option = {
    
   tooltip: {
           trigger: 'item',
        padding: 1,
        formatter: function(param) {
            
            var resultTooltip =
                "<div style='background:rgba(13,5,30,.6);border:1px solid rgba(255,255,255,.2);padding:5px;border-radius:3px;'>" +
                "<div style='text-align:center;'>" +  param.name + "</div>" +
                "<div style='padding-top:5px;'>"+
                "<span style=''> " +attr.name + ": </span>" +
                "<span style=''>" + param.value + "</span><span>" + attr.unit + "</span>"+
                "</div>" +
                "</div>";
            return resultTooltip
        }
        },
    // graphic: [{
    //     type: 'text',
    //     z: 100,
    //     right: '4%',
    //     top: '8%',
    //     style: {
    //         fill: '#81A5E8',
    //         text: graphicData.join('\n'),
    //         padding:[20,20],
    //         font: 'italic small-caps  18px/2 cursive',
            
    //     }
    // }],
    grid: {
        left: '5%',
        top: '10%',
        right: '5%',
        bottom: '10%',
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
        splitLine: {
            show: false,
            lineStyle: {
                color: '#eee',
                type: 'solid'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#888'
            },
        }
    }],
    yAxis: [{
        data: xData,
        axisLabel: {
            textStyle: {
                color: '#aaaaaa',
                fontSize:14
            },
            margin: 30, //刻度标签与轴线之间的距离。
        },

        axisLine: {
            show: false //不显示x轴
        },
        axisTick: {
            show: false //不显示刻度
        },
        boundaryGap: true,
        splitLine: {
            show: false,
            width: 0.08,
            lineStyle: {
                type: "solid",
                color: "#03202E"
            }
        }
    }],
    series: [
        {//柱底圆片
            name: "",
            type: "pictorialBar",
            symbolSize: [30, 60],//调整截面形状
            symbolOffset: ['-40%', 0],
            z: 12,
            itemStyle: {
                    "normal": {
                       color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: "rgba(23,237,194,1)"
                            },
                            {
                                offset: 1,
                                color: "rgba(89,211,255,1)"
                            }
                        ])
                    }
                },
            data: line
        }, 
        
        //柱体
        {
            name: '',
            type: 'bar',
            barWidth: 60,
            barGap: '0%',
            itemStyle: {
                    "normal": {
                        "color": {
                            "x": 0,
                            "y": 0,
                            "x2": 1,
                            "y2": 0,
                            "type": "linear",
                            "global": false,
                            "colorStops": [{//第一节下面
                                "offset": 0,
                                "color": "rgba(0,255,245,0.5)"
                            }, {
                                "offset": 1,
                                "color": "#43bafe"
                            }]
                        }
                    }
                },
           
            data: line
        }, 
        
        //柱顶圆片
        {
            name: "",
            type: "pictorialBar",
            symbolSize: [30, 60],//调整截面形状
            symbolOffset: ['40%', 0],
            z: 12,
            symbolPosition: "end",
                "itemStyle": {
                    "normal": {
                         color: new echarts.graphic.LinearGradient(0,0,1,0,
                            [{
                                    offset: 0,
                                    color: "rgba(23,237,194,1)"
                                },
                                {
                                    offset: 1,
                                    color: "rgba(89,211,255,1)"
                                }
                            ],
                            false
                        ),
                    }
                },
            data: line
        }
    ]
};