var percent = 63; //百分数
var text = 'a';
option = {
    backgroundColor: '#000',
    title: {
        show: true,
        text: text,
        x: '50%',
        y: '60%',
        textAlign: 'center',
        textStyle: {
            color: ' rgb(147,169,205) ',
            fontSize: 40,
        },

    },
    xAxis: {
        show: false, //是否展示x轴
        min: function(value) { //调整x轴上面数据的位置
            return value.min - 7;
        },
        max: function(value) {
            return value.max + 7;
        },
        splitLine: {
            lineStyle: {
                show: true,
                type: 'dashed'
            }
        },
        "axisLabel": {
            "interval": 0,
            rotate: 40,
            textStyle: {
                fontSize: 12,
                color: '#000'
            },
        },
        data: ['1', '2', '3', '4', '5']
    },
    yAxis: {
        show: false,
        name: '',
        max: 200,
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    series: [
        {
            "name": '',
            "type": 'pie',
            "radius": ['50%', '70%'],
            "avoidLabelOverlap": false,
            "startAngle": 210,
            color: [{
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0,
                y2: 0,
                colorStops: [{
                    offset: 0,
                    color: 'rgba(73, 239, 105,0.5)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(73, 239, 105,0)' // 100% 处的颜色
                }]
            }, 'transparent'],
            "hoverAnimation": false, //是否开启 hover 在扇区上的放大动画效果。
            "legendHoverLink": false, //是否启用图例 hover 时的联动高亮。
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": '30',
                        "fontWeight": 'bold'
                    }
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 66,
                "name": '1',
                itemStyle: {
                    borderWidth: 3,
                    borderColor: 'rgba(123,123,123,.5)'
                }
            }, {
                "value": 34,
                "name": '2',
                itemStyle: {
                    borderWidth: 0,
                    borderColor: 'transparent'
                }
            }]
        },
        {
            "name": ' ',
            "type": 'pie',
            "radius": ['45%', '47%'],
            "avoidLabelOverlap": false, //是否启用防止标签重叠策略
            "startAngle": 0,
            "hoverAnimation": false,
            "legendHoverLink": false,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": '30',
                        "fontWeight": 'bold'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 1,
                        y: 0,
                        x2: 0,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(50, 139, 221,0.9)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(50, 139, 221,0.2)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                    "value": 50,
                    "name": '1',
                    itemStyle: {
                        color: [{
                            type: 'linear',
                            x: 1,
                            y: 0,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(50, 139, 221,0.9)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(50, 139, 221,.2)' // 100% 处的颜色
                            }]
                        }, 'transparent'],
                    }
                },
                {
                    "value": 50,
                    "name": '2'
                }
            ]
        },
        {
            "name": '',
            "type": 'pie',
            "radius": ['50%', '70%'],
            "avoidLabelOverlap": false,
            "startAngle": -30,
            "color": ['rgba(34,34,34,.9)', "transparent", "transparent"],
            "hoverAnimation": false,
            "legendHoverLink": false,
            "clockwise": false, //饼图的扇区是否是顺时针排布。
            "itemStyle": {
                "normal": {
                    "borderColor": "transparent",
                    "borderWidth": "20"
                },
                "emphasis": {
                    "borderColor": "transparent",
                    "borderWidth": "20"
                }
            },
            "z": 10,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },

            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": (100 - percent) * 240 / 360,

                "label": {
                    normal: {
                        formatter: percent + '%',
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '90',
                            fontWeight: 'normal',
                            color: 'rgba(0,230,179,1)'
                        }
                    }
                },
                "name": ''
            }, {
                "value": 1,
                "name": ''
            }, {
                "value": 100 - (100 - percent) * 270 / 360,
                "name": ''
            }]
        },
        { // 底部
            name: '',
            type: 'pie',
            radius: ['50%', '70%'],

            startAngle: 210,
            endAngle: -30,
            labelLine: {
                show: false
            },
            z: 15,
            silent: true,
            label: {
                show: true,
                rich: {
                    a: {
                        color: '#fff',
                        fontSize: 32,
                        padding: [0, -80, -100, 0]
                    },
                    b: {
                        color: '#fff',
                        fontSize: 32,
                        padding: [0, 0, -100, -80]
                    }
                },
                formatter: function(val) { // 底部0和100
                    if (val.dataIndex === 0) {
                        return '{a|0}'
                    }
                    if (val.dataIndex === 2) {
                        return '{b|100}'
                    }
                }
            },
            data: [{ // 底部两条线
                value: 3,
                itemStyle: {
                    color: 'rgba(123,123,123,1)'
                }
            }, {
                value: 482,
                itemStyle: {
                    color: 'transparent'
                }
            }, {
                value: 3,
                itemStyle: {
                    color: 'rgba(123,123,123,1)'
                }
            }, {
                value: 245,
                itemStyle: {
                    color: 'transparent'
                }
            }]
        },
        {
            "name": ' ',
            "type": 'pie',
            "radius": ['25%', '35%'],
            "avoidLabelOverlap": false, //是否启用防止标签重叠策略
            "startAngle": 150,
            "hoverAnimation": false,
            "legendHoverLink": false,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": false,
                    "textStyle": {
                        "fontSize": '30',
                        "fontWeight": 'bold'
                    }
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                    "value": 34,
                    "name": '1',
                    itemStyle: {
                        color: [{
                            type: 'linear',
                            x: 1,
                            y: 0,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(50, 139, 221,0.4)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(50, 139, 221,.2)' // 100% 处的颜色
                            }]
                        }, 'transparent'],
                    }
                },
                {
                    "value": 66,
                    "name": '2'
                }
            ]
        },
        {
            name: '指针',
            type: 'gauge',
            pointer: {
                show: false,
            },
            radius: "54%",
            startAngle:90, //刻度起始
            endAngle:90, //刻度结束
            z: 4,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 16, //刻度节点线长度
                lineStyle: {
                    width: 3,
                    color: 'rgba(255,255,255, 0.9)',
                    shadowColor: 'rgba(255,255,255,.2)',
                    shadowBlur:5
                } //刻度节点线
            },
            axisLabel: {
                color: 'rgba(255,255,255,0)',
                fontSize: 12,
            }, //刻度节点文字颜色
            axisLine: {
                lineStyle: {
                    opacity: 0,
                }
            },
            detail:{
                show:false
            }
        },
        {
            name:'阴影',
               "type": 'pie',
            "radius": ['10%', '50%'],
            "avoidLabelOverlap": false,
            "startAngle": -22,
            // "color": ['transparent', "transparent", "transparent"],
            "hoverAnimation": false,
            "legendHoverLink": false,
            "clockwise": false, //饼图的扇区是否是顺时针排布。
            "itemStyle": {
                "normal": {
                    "borderColor": "transparent",
                    "borderWidth": "20"
                },
                "emphasis": {
                    "borderColor": "transparent",
                    "borderWidth": "20"
                }
            },
            "z": 10,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },

            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": (100 - percent) * 240 / 360,
                "label": {
                    normal: {
                        formatter: percent + '%',
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '90',
                            fontWeight: 'normal',
                            color: 'transparent'
                        }
                    }
                },
                itemStyle:{
                    normal:{
                        color:'rgba(255,255,255,0)'
                    }
                },
                "name": 'transparent'
            }, {
                "value": 10,
                "name": '',
                
            },
            {
                "value": 100 - (100 - percent) * 270 / 360,
                "name": '',
            }
            ]
            
        }

    ]
};