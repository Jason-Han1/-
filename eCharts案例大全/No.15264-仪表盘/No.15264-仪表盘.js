var option = {
    title: {
        "text": 'PUE',
        "x": '50%',
        "y": '80%',
        "textAlign": "center",
        "textStyle": {
            "fontWeight": 'normal',
            "fontSize": 24,
            "color": "#bcbfff",
        },
        // "subtextStyle": {
        //     "fontWeight": 'bold',
        //     "fontSize": 32,
        //     "color": '#3ea1ff'
        // }
    },
    series: [{
            "name": ' ',
            "type": 'pie',
            "radius": ['68%', '70%'],
            "avoidLabelOverlap": false,
            "startAngle": 225,
            "color": ["#fff", "transparent"],
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
                "name": '',
                "itemStyle": {
                    "normal": {
                        "color": new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
                            "offset": 0,
                            "color": '#f125ff'
                        }, {
                            "offset": 1,
                            "color": '#2dcbff'
                        }]),
                    }
                }
            }, {
                "value": 25,
                "name": '',
                "itemStyle": {
                    "normal": {
                        color: 'rgba(0,0,0,0)'
                    }
                }
            }]
        }, {
            "name": '',
            "type": 'pie',
            "radius": ['50%', '68.1%'],
            "avoidLabelOverlap": false,
            "startAngle": 225,
            "color": ["#fff", "transparent"],
            "hoverAnimation": false,
            "legendHoverLink": false,
            "z": 10,
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
                "name": '50',
                "value": 37.5,
                "label": {
                    "normal": {
                        "show": true,
                        "formatter": '{b} %',
                        "textStyle": {
                            "fontSize": 28,
                            "fontWeight": "bold",
                            "color": "#5886f0",
                        },
                        "position": "center"
                    }
                },
                "itemStyle": {
                    "normal": {
                        "color": new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
                            "offset": 0,
                            "color": '#f125ff'
                        }, {
                            "offset": 1,
                            "color": '#2dcbff'
                        }]),
                    }
                }
            }, {
                "name": '',
                "value": 62.5,
                "itemStyle": {
                    "normal": {
                        color: 'rgba(0,0,0,0)'
                    }
                }
            }]
        }

    ]
};

