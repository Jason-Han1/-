  var colorArray =['rgba(3,189,69,1)','rgba(18,186,117,1)','rgba(3,189,69,1)','rgba(63,255,218,1)','rgba(26,253,104,1)']
     var text = "处置率";
     var data ={
         value:100,
         case_sb:300
     };


    var value = data.value;
    var nums = 0;
    if(parseInt(data.case_sb) !=0){
        nums = (data.value/data.case_sb * 100).toFixed(1)
    }
    option = {
        backgroundColor: '000',
        title: {
            text: nums+'%',
            subtext: text,
            left: 'center',
            top: '47%', //top待调整
            textStyle: {
                color: '#fff',
                fontSize: 28,
                fontFamily: 'hzgb',

            },
            subtextStyle: {
                color: '#ff',
                fontSize: 13,
                fontFamily: 'AdobeHeitiStd',
                top: 'center'
            },
            itemGap: 10 //主副标题间距
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
                radius: ['0', '30%'],
                center: ['50%', '50%'],
                z: 0,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: colorArray[0]
                        },
                            {
                                offset: 0.5,
                                color: colorArray[1]
                            },
                            {
                                offset: 1,
                                color: colorArray[2]
                            }
                        ]),
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                },
                label: {
                    normal: {
                        position: "center",

                    }
                },
                data: [data.case_sb],
            },
            // 进度圈
            {
                type: 'pie',
                clockWise: true,
                z: 1,
                radius: ["38%", "35%"],
                "center": ["50%", "50%"],
                data: [{
                    value: value,
                    itemStyle: {
                        normal: {
                            borderWidth: 3,
                            borderColor: {
                                colorStops: [{
                                    offset: 0,
                                    color: colorArray[3] // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: colorArray[4] // 100% 处的颜色
                                }]
                            },
                            color: { // 完成的圆环的颜色
                                colorStops: [{
                                    offset: 0,
                                    color: colorArray[3]// 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: colorArray[4] // 100% 处的颜色
                                }]
                            },
                            label: {
                                show: false
                            },
                            labelLine: {
                               normal:{
                                    show: false
                               }
                            },
                        },
                    }
                },
                    {
                        name: '',
                        value: data.case_sb - value,
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
                ],
                 label: {
                    show:false
                },
            },
            //刻度尺
            {
                // name: "白色圈刻度",
                type: "gauge",
                radius: "50%",
                "center": ["50%", "50%"],
                startAngle: 225, //刻度起始
                endAngle: -134.8, //刻度结束
                z: 4,
                axisTick: {
                    show: true,
                    length: 1,
                    lineStyle: {
                        width: 1,
                        color: 'rgba(1,244,255, 0.9)'
                    }
                },
                splitLine: {
                    length: 0, //刻度节点线长度
                    lineStyle: {
                        width: 1,
                        color: 'rgba(1,244,255, 0.9)'
                    } //刻度节点线
                },
                axisLabel: {
                    color: 'rgba(255,255,255,0)',
                    fontSize: 0,
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
            // 刻度圈
            {
                "type": "pie",
                "radius": ["0%", "60%"],
                "center": ["50%", "50%"],
                "avoidLabelOverlap": false,
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
                            "type": "linear",
                            "x": 0,
                            "y": 0,
                            "x2": 0,
                            "y2": 1,
                            "colorStops": [{
                                "offset": 0.05,
                                "color": "rgba(1,133,18, 0.2)"
                            }, {
                                "offset": 0.5,
                                "color": "rgba(1,133,18,0.3)"
                            }, {
                                "offset": 0.95,
                                "color": "rgba(1,133,18, 0.2)"
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
                    "value": 32350//3235
                }]
            },
            //最外层圈
            {
                "type": "pie",
                z: 5,
                "radius": ["0%", "70%"],
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
                            "type": "linear",
                            "x": 0,
                            "y": 0,
                            "x2": 0,
                            "y2": 1,
                            "colorStops": [{
                                "offset": 0.05,
                                "color": "rgba(21,24,65, 0.2)"
                            }, {
                                "offset": 0.5,
                                "color": "rgba(21,24,65, 0.3)"
                            }, {
                                "offset": 0.95,
                                "color": "rgba(21,24,65, 0.2)"
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
                    "value": 32350
                }]
            }
        ]
    };