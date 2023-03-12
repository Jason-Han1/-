var laber = ["增长", '减少'];
var rich = {
    top: {
        color: '#00E4FF',
        fontSize: 20,
        padding:[20,0,0,80]
    },
    bottom: {
        color: '#00E4FF',
        fontSize: 20,
        padding:[30,0,0,80]
    }
}
option = {
    backgroundColor: 'rgba(0,0,0,.5)',
    "xAxis": [{
        zlevel: 20,
        type: 'value',
        min: -50,
        max: 50,
        interval: 16.7,
        axisLabel: {
            margin: -450,
            formatter: function(value, index) {
                if(laber[index]=="增长"){
                    return "{top|增长}"  + "\n{bottom|减少}"
                }
            },
            lineStyle: {
                color: '#278dfb'
            },
            rich: rich
            // textStyle: {
            //     color: '#00E4FF',
            //     fontSize: 20
            // }
        },
        splitLine: {
            show: false,
        },
        splitArea: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(16,50,78,.5)',
                width: 3
            }
        },
    }],
    "yAxis": [{
        "min": -50,
        "max": 50,
        "show": false,
        "splitLine": {
            "show": false
        },
        "splitArea": {
            "show": false
        }
    }],
    "legend": {
        "show": false,
        "data": []
    },
    "tooltip": {
        "showContent": false,
        show: true
    },
    "sendDataSetting": {
        "selectParams": false,
        "selectCell": false
    },
    "visualMap": [{
        "show": false,
        "dimension": 2,
        "min": 1,
        "max": 3,
        "precision": 0.01,
        // "inRange": {
        //     "symbolSize": [10, 50]
        // }
    }],
    "series": [{
        zlevel: 20,
        type: 'scatter',
        symbol: 'circle',
        symbolSize: 150,
        label: {
            normal: {
                show: true,
                formatter: function(param) {
                    return param.data[2];
                },
                color: '#00E4FF',
                fontSize: 25
            },
        },
        itemStyle: {
            normal: {
                color: '#123E65',
                // fontSize:20
            },
        },
        data: [
            [-1, 0, '频繁', '#278DFB', 19]
        ],
    }, {
        zlevel: 20,
        name: '下降',
        type: 'effectScatter',
        symbol: 'circle',
        symbolSize: function(param, a) {
            return param[4];
        },
        itemStyle: {
            normal: {
                // color: function(param) {
                //     return param.data[3];
                // },
                color: '#FF7D7B'
            },
        },
        hoverAnimation: true,
        label: {
            color: '#000',
            normal: {
                textStyle: {
                    fontSize: 18,
                },
                position: 'bottom',
                show: true,
                formatter: function(param) {
                    return param.data[2];
                },
            },
        },

        "data": [
            [-40, -41, "天津麻花", "#FF7D7B", 10],
            [-50, -36, "海鲜大咖", "#FF7D7B", 10],
            [-31, 3, "面馆", "#BF54Fb", 10],
            [17, -46, "天津特产", "#FF7D7B", 10],
            [47, -36, "烤面筋", "#FF7D7B", 10],
            [1, 34, "海螺", "#FF7D7B", 10],
            [-45, -3, "鱼豆腐", "#FF7D7B", 10],
            [11, -7, "虾皮", "#FF7D7B", 10],
            [-2, -34, "牛蛙", "#FF7D7B", 10],
            [32, 34, "炸鸡", "#FF7D7B", 10],
            [8, 9, "冷饮", "#BF54Fb", 10],
        ],
        "markLine": {}
    }, {
        "name": "上升",
        "zlevel": 20,
        "type": "effectScatter",
        "symbol": "circle",
        itemStyle: {
            normal: {
                // color: function(param) {
                //     return param.data[3];
                // },
                color: '#FF7D7B'
            },
        },
        hoverAnimation: true,
        label: {
            color: "#000",
            normal: {
                textStyle: {
                    fontSize: 18
                },
                position: 'bottom',
                show: true,
                formatter: function(param) {
                    return param.data[2];
                },
            }
        },
        data: [
            [16, -47, "狗不理包子", "#FF7D7B", 15],
            [19, -23, "扇贝", "#FF7D7B", 10],
            [23, 33, "小龙虾", "#FF7D7B", 15],
            [-3, 44, "烤馒头", "#FF7D7B", 10],
            [-12, 12, "豆皮结", "#FF7D7B", 15],
            [12, -23, "凉皮", "#FF7D7B", 10],
        ],

    }, {
        "type": "pie",
        "radius": ["0", "45%"],
        "center": ["50%", "50%"],
        "zlevel": 2,
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
                        "color": "rgba(18,62,101, 0.1)"
                    }, {
                        "offset": 0.5,
                        "color": "rgba(18,62,101, 0.2)"
                    }, {
                        "offset": 0.95,
                        "color": "rgba(18,62,101, 0.1)"
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
            "value": 3357
        }]
    }, {
        "type": "pie",
        "radius": ["0%", "65%"],
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
                        "color": "rgba(18,62,101, 0.1)"
                    }, {
                        "offset": 0.5,
                        "color": "rgba(18,62,101, 0.2)"
                    }, {
                        "offset": 0.95,
                        "color": "rgba(18,62,101, 0.1)"
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
    }, {
        "type": "pie",
        "radius": ["0%", "90%"],
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
                        "color": "rgba(18,62,101, 0.1)"
                    }, {
                        "offset": 0.5,
                        "color": "rgba(18,62,101, 0.2)"
                    }, {
                        "offset": 0.95,
                        "color": "rgba(18,62,101, 0.1)"
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
    }],


};