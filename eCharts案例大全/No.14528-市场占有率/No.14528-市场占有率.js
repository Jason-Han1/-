option = {
    "title": {
        "text": '市场占有率',
        "top": '85%',
        "left": '40%',
        "textStyle": {
            "fontSize": 28,
            "fontWeight": "bold",
            "color": "#bcbfff"
        }
    },
    "tooltip": {
        "trigger": 'item',
        "formatter": "{a} : ({d}%)"
    },
    "series": [{
        "name": "市场分配率 内圈",
        "startAngle": 303,
        "center": [
            "50%",
            "50%"
        ],
        "radius": [
            "49%",
            "50%"
        ],
        //是否顺时针
        "clockWise": false,
        "hoverAnimation": false,
        "type": "pie",
        "data": [{
            "value": 85,
            "name": "",
            "label": {
                "normal": {
                    "show": true,
                    "formatter": '{d} %',
                    "textStyle": {
                        "fontSize": 28,
                        "fontWeight": "bold"
                    },
                    "position": "center"
                }
            },
            "labelLine": {
                "show": false
            },
            "itemStyle": {
                "normal": {
                    "color": "#4386f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#743A3A'
                    }, {
                        offset: 1,
                        color: '#CE8328'
                    }]),
                    "borderWidth": 15
                },
                "emphasis": {
                    "color": "#2326f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#66202d'
                    }, {
                        offset: 1,
                        color: '#5d4f6d'
                    }]),
                    "borderWidth": 15
                }
            },
        }, {
            "name": " ",
            "value": 15,
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    },
                    "color": 'rgba(0,0,0,0)',
                    "borderColor": 'rgba(0,0,0,0)',
                    "borderWidth": 0
                },
                "emphasis": {
                    "color": 'rgba(0,0,0,0)',
                    "borderColor": 'rgba(0,0,0,0)',
                    "borderWidth": 0
                }
            }
        }]
    }, {
        "name": "市场分配率 外圈",
        "startAngle": 136,
        "center": [
            "50%",
            "50%"
        ],
        "radius": [
            "59%",
            "60%"
        ],
        "clockWise": false,
        "hoverAnimation": false,
        "type": "pie",
        "data": [{
            "value": 30,
            "name": "",
            "label": {
                "normal": {
                    "show": true,
                  // "formatter": '{d} %',
                    "textStyle": {
                        "fontSize": 28,
                        "fontWeight": "bold"
                    },
                    "position": "center"
                }
            },
            "labelLine": {
                "show": false
            },
            "itemStyle": {
                "normal": {
                    "color": "#4d4f4d",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#77a2ff'
                    }, {
                        offset: 1,
                        color: '#70ffac'
                    }]),
                    "borderWidth": 1
                },
                "emphasis": {
                    "color": "#5886f0",
                    "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#47b6b2'
                    }, {
                        offset: 1,
                        color: '#4d4f4d'
                    }]),
                    "borderWidth": 1
                }
            },
        }, {
            "name": " ",
            "value": 70,
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    },
                    "color": 'rgba(0,0,0,0)',
                    "borderColor": 'rgba(0,0,0,0)',
                    "borderWidth": 0
                },
                "emphasis": {
                    "color": 'rgba(0,0,0,0)',
                    "borderColor": 'rgba(0,0,0,0)',
                    "borderWidth": 0
                }
            }
        }]
    }]
};