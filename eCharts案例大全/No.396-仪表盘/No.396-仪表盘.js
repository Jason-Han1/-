var percent =22; //百分数
var color_percent0 = '',
    color_percent100 = '',
    dotArray = [];


calculateDot(percent)//80%显示4个点，


function calculateDot(data) {
    if (data <= 20) {
        dotArray.push(80)
        color_percent0 = 'rgba(12,255,0,1)'
        color_percent100 = 'rgba(12,255,0,.3)'
    }else if (data > 20&&data<=40) {
        dotArray.push(...[80,80])
        color_percent0 = 'rgba(12,255,0,1)'
        color_percent100 = 'rgba(12,255,0,.3)'
    }else if (data > 40&&data<=60) {
        dotArray.push(...[80,80,80])
         color_percent0 = 'rgba(255,123,0,1)'
        color_percent100 = 'rgba(255,123,0,.3)'
    }else if (data > 60&&data<=80) {
        dotArray.push(...[80,80,80,80])
         color_percent0 = 'rgba(255,0,36,1)'
        color_percent100 = 'rgba(255,0,36,.3)'
    }else if (data > 80&&data<=100) {
        dotArray.push(...[80,80,80,80,80])
         color_percent0 = 'rgba(255,0,36,1)'
        color_percent100 = 'rgba(255,0,36,.3)'
    }

}





option = {
    backgroundColor: '#000',
    title: {
        "x": '50%',
        "y": '45%',
        textAlign: "center",
        top: '68%',//字体的位置
        'text': '哈哈',
        "textStyle": {

            "fontWeight": 'normal',
            "color": '#FFF',
            "fontSize": 60
        },
        "subtextStyle": {//副标题的文字的样式
            "fontWeight": 'bold',
            "fontSize": 18,
            "color": '#3ea1ff'
        },

    },
    xAxis: {
        show: false,//是否展示x轴
        min: function(value) {//调整x轴上面数据的位置
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
        name: '万元',
        max: 200,
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    series: [{
            "name": '',
            "type": 'pie',
            "radius": ['50%', '70%'],
            "avoidLabelOverlap": false,
            "startAngle": 225,
            "color": [{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0.4,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: color_percent0 // 0% 处的颜色
                }, {
                    offset: 1,
                    color: color_percent100 // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            }, 'none'],
            "hoverAnimation": false,//是否开启 hover 在扇区上的放大动画效果。
            "legendHoverLink": false,//是否启用图例 hover 时的联动高亮。
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
                "value": 75,
                "name": '1'
            }, {
                "value": 25,
                "name": '2'
            }]
        }, {
            "name": ' ',
            "type": 'pie',
            "radius": ['48%', '47%'],
            "avoidLabelOverlap": false,//是否启用防止标签重叠策略
            "startAngle": 225,

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
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 75,
                "name": '1'
            }, {
                "value": 25,
                "name": '2'
            }]
        }, {
            "name": '',
            "type": 'pie',
            "radius": ['50%', '70%'],
            "avoidLabelOverlap": false,
            "startAngle": 315,
            "color": ['rgba(34,34,34,.9)', "#ff7a00", "transparent"],
            "hoverAnimation": false,
            "legendHoverLink": false,
            "clockwise": false,//饼图的扇区是否是顺时针排布。
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
                "value": (100 - percent) * 270 / 360,

                "label": {
                    normal: {
                        formatter: percent + '%',
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '90',
                            fontWeight: 'normal',
                            color: '#fff'
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
        //总共有5个小球
        {
            name: '',
            symbolOffset:['20','0'],//就是把自己向上移动了一半的位置，在 symbol 图形是气泡的时候可以让图形下端的箭头对准数据点。
            type: 'scatter',

            data: [80, 80, 80, 80, 80]
        },
        //根据数据判断小球的颜色
        {
            name: '',

            type: 'scatter',
            symbolOffset:['20','0'],//移动小球的位置
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                offset: 0,
                color: color_percent0
            }, {
                offset: 1,
                color: color_percent100
            }]),
            data: dotArray
        },
        {//第一个线
            name: '',

            type: 'line',
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                offset: 0,
                color: color_percent0
            }, {
                offset: 1,
                color: color_percent100
            }]),
             symbol: "none",
            data: [85,85,85,85,85,85]
        },
        {//第二根线
            name: '',

            type: 'line',
             symbol: "none",//去掉横线上的小点
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                offset: 0,
                color: color_percent0
            }, {
                offset: 1,
                color: color_percent100
            }]),
            data: [75,75,75,75,75,75]
        }
    ]
};







































