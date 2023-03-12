/*
 * 仪表盘所需数据
 */
var data = {
    title:'仪表盘',
    value:85.4,
    color:{
        pointer:'#a18488',    // 指针颜色
        splitLine:'#a9433d',  //分割线颜色
        pieMini:'#a18488',    //小圆形颜色
        pieMiddle:'#cb9154',  //中等圆形颜色
        piePlus:'#eabe89',    //大圆形颜色
        value:'#a18488',     //底部数值颜色
    },
}
//////////////////////////////////////////////////

option = {
    backgroundColor:'#fff',
    title: {
        show: true,
        text: data.title || "仪表盘",
        left: '15px',
        top: '10px',
        textStyle: {
            color: '#414957',
            fontSize: 16,
            fontFamily: '"Microsoft Yahei","微软雅黑"',
        }
    },
    series: [{
            "name": "仪表盘",
            "type": "gauge",
            "splitNumber": 10,
            "axisLine": {
                "lineStyle": {
                    "color": [
                        [data.value / 100, data.color.piePlus],
                        [1, "#fff"]
                    ],
                    "width": 30
                }
            },
            "axisTick": {
                "lineStyle": {
                    "color": data.color.splitLine||"#83af98",
                    "width": 2
                },
                "length": 10,
                "splitNumber": 4
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color":data.color.splitLine||"#83af98",
                    "width": 5
                },
                "length": 20,
            },
            "itemStyle": {
                "normal": {
                    "color": data.color.pointer||"#91a2bd" //指针颜色
                }
            },
            "detail": {
                "formatter": function(value) {
                    if (value != 0) {
                        var num = Math.round(value * 10) / 10;
                        return parseFloat(num).toFixed(1);
                    } else {
                        return 0;
                    }
                },
                "offsetCenter": [0, "100%"],
                "textStyle": {
                    "fontSize": 30,
                    fontWeight: '700',
                    // "color": "#83af98" //数值颜色
                    "color":data.color.value||'#83af98'
                }
            },
            "title": {
                "offsetCenter": [0, "100%"]
            },
            "data": [{
                "name": "",
                "value": data.value,
            }],
            pointer: {
                show: true,
                length: '100%',
                width: 10, //指针粗细
            },
        }, {
            "name": '中圆形',
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            "radius": ['0%', '25%'],
            "z": -10,
            // "avoidLabelOverlap": false,
            // "startAngle": startAngle,
            // "color": ["#83af98"],
            "hoverAnimation": false,
            "legendHoverLink": false,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": false
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 0,
                "name": '1',
                itemStyle: {
                    normal: {
                        color: "transparent"
                    }
                }
            }, {
                "value": 100,
                "name": '2',
                itemStyle: {
                    normal: {
                        color: data.color.pieMiddle||"#fe4365"
                    }
                }
            }]
        }, {
            "name": '小圆形',
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            "radius": ['0%', '10%'],
            "z": 10,
            // "avoidLabelOverlap": false,
            // "startAngle": startAngle,
            // "color": ["#91a2bd"],
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": false
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 0,
                "name": '1',
                itemStyle: {
                    normal: {
                        color: "transparent"
                    }
                }
            }, {
                "value": 100,
                "name": '2',
                itemStyle: {
                    normal: {
                        color: data.color.pieMini||"#fc9d9a"
                    },
                    emphasis: {
                        color: data.color.pieMini||"#fc9d9a"
                    }
                }
            }]
        },
        {
            "name": 'wrap',
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            "radius": ['7%', '90%'],
            "z": -11,
            "startAngle": -135,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": false
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                    "value": (360 - 98) * (data.value) / 100,
                    itemStyle: {
                        normal: {
                            color: data.color.piePlus
                        },
                        emphasis: {
                            color: data.color.piePlus
                        }
                    }
                },
                {
                    "value": (360 - 98) * (100 - data.value) / 100,
                    "name": '3',
                    itemStyle: {
                        normal: {
                            color: "#fff"
                        }
                    }
                },
                {
                    "value": 87,
                    "name": '1',
                    itemStyle: {
                        normal: {
                            color: "transparent"
                        }
                    }
                }
            ]
        }
    ]
}