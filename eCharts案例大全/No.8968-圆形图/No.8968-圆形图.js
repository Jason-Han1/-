var value = 94.5;
option = {
    backgroundColor: '000',
    title: {
        text: `${value}`,
        subtext: 'Km/h',
        left: 'center',
        top: 'center', //top待调整
        textStyle: {
            color: '#fff',
            fontSize: 80,
            fontFamily: 'DINAlternate-Bold',
        },
        subtextStyle: {
            color: '#ff',
            fontSize: 35,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
        },
        itemGap: -4 //主副标题间距
    },
    xAxis: {
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        }
        // data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    series: [
        // 内圆
        {
            type: 'pie',
            radius: ['0', '50%'],
            center: ['50%', '50%'],
            z: -200,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#000'
                        },
                       
                        {
                            offset: 1,
                            color: '#000'
                        }
                    ]),
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: true
                    }
                },
            },
            label: {
                normal: {
                    position: "center",

                }
            },
            data: [100],
        },
        // 进度圈
        {
            type: 'pie',
            radius: ["60%", "55%"],
            startAngle:270,
            z:10,
            clockwise:false,
            hoverAnimation:false,
            data: [{
                    value: value,
    
                    itemStyle: {
                        normal: {
                            borderWidth: 10,
                            borderColor: {
                                colorStops: [{
                                    offset: 0,
                                    color: '#ffc303' || '#ffc303' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#ffc303' || '#ffc303' // 100% 处的颜色
                                }]
                            },
                            color: { // 完成的圆环的颜色
                                colorStops: [{
                                    offset: 0,
                                    color: '#ffc303' || '#ffc303' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#ffc303' || '#ffc303' // 100% 处的颜色
                                }]
                            },
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                        },
                    }
                },
                {
                    name: 'gap',
                    value: 110 - value,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 0,
                        }
                    },
                }
            ]
        },
        //刻度尺
        {
            // name: "白色圈刻度",
            type: "gauge",
            radius: "72%",
            startAngle: 225, //刻度起始
            endAngle: -134.8, //刻度结束
            z: 4,
            axisTick: {
                show: true,
                 lineStyle: {
                    width: 2,
                    color: 'rgba(1,244,255, 0.9)'
                } 
            },
            splitLine: {
                length: 16, //刻度节点线长度
                lineStyle: {
                    width: 2,
                    color: 'rgba(1,244,255, 0.9)'
                } //刻度节点线
            },
            axisLabel: {
                color: 'rgba(255,255,255,0)',
                fontSize: 12,
            }, //刻度节点文字颜色
            pointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    opacity: 0
                }
            },
            detail: {
                show: false
            },
            data: [{
                value: 0,
                name: ""
            }]
        },
       
        //最外层圈
        {
            "type": "pie",
            "radius": ["0%", "85%"],
            "center": ["50%", "50%"],
            "avoidLabelOverlap": false,
            hoverAnimation: false,
            
            "label": {
                "normal": {
                    "show": false,
                    "position": "center"
                },
                "emphasis": {
                    "show": false,
                    "textStyle": {
                        "fontWeight": "bold"
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": {
                        "type": "radial",
                        "x": 0.5,
                        "y": 0.5,
                        "r": 0.5,
                        "colorStops": [{
                            "offset": 0.05,
                             "color": "rgba(21,24,65, 0.2)"
                        }, {
                            "offset": 0.5,
                            "color": "rgba(21,24,65, 0.3)"
                        }, {
                            "offset": 0.95,
                            "color": "rgba(4,121,112,.6)",
                        }]
                    }
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 3235
            }]
        }
    ]
};