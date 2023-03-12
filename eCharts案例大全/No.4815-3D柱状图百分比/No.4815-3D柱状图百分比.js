var data = 60; //百分比
var b = 80;
var c = 85;
option = {
    backgroundColor: '#000E1A',
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderColor: 'rgba(89,211,255,1)',
        borderWidth: 2,
        padding: 5,
        textStyle: {
            color: "rgba(89,211,255,1)",
            fontSize: 18,
            width: 300,
            height: 40,
        },
        formatter: '{c}' + '%',


        extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'

        // 自定义的 CSS 样式
    },
    grid: {
        bottom: "10%",
        top: "35%",
    },
    xAxis: {
        data: ["英语成绩优秀率", "数学成绩优秀率", "语文成绩优秀率"],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
            },
             margin: 30, //刻度标签与轴线之间的距离。
        }
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [

        // 头
        {
            name: "",
            type: "pictorialBar",
            symbolSize: [150, 45],
            symbolOffset: [0, -20],
            z: 12,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: "rgba(54,127,223,1)"
                            },
                            {
                                offset: 1,
                                color: "rgba(94,162,254,1)"
                            }
                        ],
                        false
                    ),
                }
            },
            data: [{
                name: "",
                value: 100,
                symbolPosition: "end",
             
            }, {
                name: "",
                value: 100,
                symbolPosition: "end",
            
            }, {
                name: "",
                value: 100,
                symbolPosition: "end",
          
            }]
        },


        //底部立体柱
        {
            name: "vvvv",
            stack: '1',
            type: 'bar',
         
            // label: {
            //     show: true,
            //     position: 'top',  //top / left / right / bottom / inside / insideLeft / insideRight / insideTop / insideBottom / insideTopLeft / insideBottomLeft / insideTopRight / insideBottomRight
            //     distance: 15,
            //     color: "#FFFE00",
            //     fontSize: 30,
            //     formatter: '{c}' + '%'
            // },

            silent: true,
            barWidth: 150,
            barGap: '-100%', // Make series be overlap
            data: [{
                value: data
            }, {
                value: b
            }, {
                value: c
            }],
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        type: "linear",
                        global: false,
                        colorStops: [{ //第一节下面
                            offset: 0,
                            color: "rgba(0,255,245,0.5)"
                        }, {
                            offset: 1,
                            color: "#43bafe"
                        }]
                    }
                }
            }
        },
        //三个最低下的圆片
        {
            name: "",
            type: "pictorialBar",
            symbolSize: [150, 30],
            symbolOffset: [0, 16],
            z: 12,
            itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgba(89,211,255,1)"
                            },
                            {
                                offset: 1,
                                color: "rgba(23,237,194,1)"
                            }
                        ])
                    }
                },
            data: [{
                name: "",
                value: "100",
                
            }, {
                name: "",
                value: "100",
           
            }, {
                name: "",
                value: "100",
            
            }]
        },
        // 中间圆片
        {
            name: "",
            type: "pictorialBar",
            symbolSize: [150, 42],
            symbolOffset: [0, -20],
             itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                            [{
                                    offset: 0,
                                    color: "rgba(89,211,255,1)"
                                },
                                {
                                    offset: 1,
                                    color: "rgba(23,237,194,1)"
                                }
                            ],
                            false
                        ),
                    }
                },
            z: 12,
            data: [{
                name: "",
                value: data,
                symbolPosition: "end",
               
            }, {
                name: "",
                value: b,
                symbolPosition: "end",
              
            }, {
                name: "",
                value: c,
                symbolPosition: "end",
               
            }]
        },
        //上部立体柱
        {
            //上部立体柱
            stack: '1',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#3E8BE6',
                    opacity: .7
                }
            },
            label: {
                show: true,
                position: 'top',  //top / left / right / bottom / inside / insideLeft / insideRight / insideTop / insideBottom / insideTopLeft / insideBottomLeft / insideTopRight / insideBottomRight
                distance: 20,
                color: "#FFFE00",
                fontSize: 30,
                formatter: function(item){
                    var a=100
                    return a-item.value+'%'
                }
            },
            silent: true,
            barWidth: 150,
            barGap: '-100%', // Make series be overlap
            data: [{
                name: "a",
                value: 100 - data
            }, {
                name: "b",
                value: 100 - b
            }, {
                name: "c",
                value: 100 - c
            }]
        }
    ]
};