var barColors = [
    {
        normal:"rgb(178, 219, 255)",
        LinearGradientColor:["rgb(139,200,255)","rgb(178,218,255)","rgb(139,200,255)"],
        active: "rgba(2, 137, 255, 1)"
    },
    {
        normal:"rgb(177, 254, 251)",
        LinearGradientColor: ["rgb(140,238,249)","rgb(182,245,251)","rgb(140,238,249)"],
        active: "rgba(0, 218, 242, 1)"
    },
    {
        normal:"rgb(177, 203, 255)",
        LinearGradientColor: ["rgb(140,178,255)","rgb(178,218,255)","rgb(176,202,255)"],
        active: "rgba(0, 84, 255, 1)"
    },
    {
        normal:"rgb(250, 226, 172)",
        LinearGradientColor: ["rgb(248,215,143)","rgb(250,228,177)","rgb(248,215,143)"],
        active: "rgba(240, 164, 0, 1)"
    }
]


option = {
   title: {
                    x: 'left',                // 水平安放位置，默认为左对齐，可选为：
                                    // 'center' ¦ 'left' ¦ 'right'
                                    // ¦ {number}（x坐标，单位px）
                    y: 'top',             // 垂直安放位置，默认为全图顶端，可选为：
                                    // 'top' ¦ 'bottom' ¦ 'center'
                                    // ¦ {number}（y坐标，单位px）
                    text:'标题标题标题标题',
                    //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
                    borderWidth: 0,           // 标题边框线宽，单位px，默认为0（无边框）
                    padding: 5,             // 标题内边距，单位px，默认各方向内边距为5，
                                            // 接受数组分别设定上右下左边距，同css
                    textStyle: {
                        fontSize: 14,
                        fontWeight: 'bolder',
                        color: '#333'                             // 主标题文字颜色
                    },
                },
                grid: {
                    y2: 0,
                    x2: 20,
                    y: 60,
                    x: 0,
                    containLabel: true
                },
                tooltip: {
                    // show: false,
                    trigger: 'item',
                    padding: 1,
                    formatter: function(param) {
                        console.log('param',param)
                        var resultTooltip =
                            "<div style='background:rgba(13,5,30,.6);border:1px solid rgba(255,255,255,.2);padding:5px;border-radius:3px;'>" +
                            "<div style='padding-top:5px;'>"+
                            "<span style=''> " +param.name + "：</span>" +
                            "<span style=''>" + param.value + "</span><span>" + attr.unit + "</span>"+
                            "</div>" +
                            "</div>";
                        return resultTooltip
                    }
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    axisTick: {
                        length: 0,
                    },
                    // name: "月",
                    // nameTextStyle: {
                    //     color: "#666666",
                    //     fontSize: 14
                    // },
                    axisLine: {
                        show: false,
                        // lineStyle: {
                        //     color: "#F1F1F1"
                        // }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        color: "#666666",
                        margin: 30, //刻度标签与轴线之间的距离。
                    },
                    splitLine: {
                        show: false
                    },
                    data: [1,2,3,4],
                },
                yAxis: {
                    show:false,
                    type: 'value'
                },
                series: [
                    {//柱底圆片
                        name: "",
                        type: "pictorialBar",
                        symbolSize: [24, 12],//调整截面形状
                        symbolOffset: [0, 5],
                        z: 0,
                        itemStyle: {
                                normal: {
                                    // color: "rgb(178, 219, 255)"
                                    color: function(params) {
                                        // return barColors[params.dataIndex % 4].normal;
                                        return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                            {
                                                offset: 0,
                                                color: barColors[params.dataIndex % 4].LinearGradientColor[0]
                                            },
                                            {
                                                offset: 0.5,
                                                color: barColors[params.dataIndex % 4].LinearGradientColor[1]
                                            },
                                            {
                                                offset: 1,
                                                color: barColors[params.dataIndex % 4].LinearGradientColor[0]
                                            }
                                        ])
                                    }
                                }
                            },
                        data: [10,20,13,40]
                    }, 
                    
                    //柱体
                    {
                        name: '',
                        type: 'bar',
                        barWidth: 24,
                        barGap: '0%',
                        itemStyle: {
                                "normal": {
                                    label: {
                                        show: true,		//开启显示
                                        position: 'top',	//在上方显示
                                        distance: 10,
                                        textStyle: {	    //数值样式
                                            color: 'rgba(139, 147, 167, 1)',
                                            fontSize: 14
                                        }
                                    },
                                    // color: "rgb(178, 219, 255)"
                                    color: function(params) {
                                        // return barColors[params.dataIndex % 4].normal;
                                        return {
                                            "x": 0,
                                            "y": 0,
                                            "x2": 1,
                                            "y2": 0,
                                            "type": "linear",
                                            "global": false,
                                            "colorStops": [{
                                                offset: 0,
                                                color: barColors[params.dataIndex % 4].LinearGradientColor[0]
                                            },
                                            {
                                                offset: 0.5,
                                                color: barColors[params.dataIndex % 4].LinearGradientColor[1]
                                            },
                                            {
                                                offset: 1,
                                                color: barColors[params.dataIndex % 4].LinearGradientColor[0]
                                            }]
                                        }
                                    }
                                }
                            },
                    
                        data: [10,20,13,40]
                    }, 
                    
                    //柱顶圆片
                    {
                        name: "",
                        type: "pictorialBar",
                        symbolSize: [24, 12],//调整截面形状
                        symbolOffset: [0, -6],
                        z: 12,
                        symbolPosition: "end",
                            itemStyle: {
                                normal: {
                                    // color: "rgb(141,202,255)"
                                    // color: function(params) {
                                    //     return barColors[params.dataIndex % 4].active;
                                    // }
                                    color: function(params) {
                                        // return barColors[params.dataIndex % 4].normal;
                                        return new echarts.graphic.RadialGradient(0.5, 0.5, 1.0, [          // 由中心向四周渐变
                                            {
                                                offset: 0,
                                                color: barColors[params.dataIndex % 4].LinearGradientColor[1]
                                            },
                                            {
                                                offset: 1,
                                                color: barColors[params.dataIndex % 4].active
                                            }
                                        ])
                                    }
                                }
                            },
                        data: [10,20,13,40]
                    }
                ]
};