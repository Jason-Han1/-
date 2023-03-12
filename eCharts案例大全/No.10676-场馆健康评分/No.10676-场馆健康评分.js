var percent = 0.87;
var score = (percent * 100) + "分";
option = {
    "backgroundColor": '#000',
    "title": {
        'subtext': '良好',
        'x': 'center',
        'y': '45%',
        "textStyle": {
            "color": '#fff',
            "fontSize":80
        },
        "text": score,
        "subtextStyle": {
            "color": '#00F5FF',
            "fontSize": 44
        }
    },
    "tooltip": {
        "show":false,
        "trigger": 'item',
        // "formatter": "{a} : ({d}分)"
    },
    "series": [{
            "name": "健康评分",
            "center": [
                "50%",
                "50%"
            ],
            "radius": [
                "49%",
                "50%"
            ],
            // "clockWise": false,
            "hoverAnimation": false,
            "type": "pie",
            "data": [{
                    "value":(percent *100),
                    "name": "",
                    "label": {
                        "normal": {
                            "show": false,
                            // "formatter": '{d} 分',
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
                            "color": "#00F6FF",
                            "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 1,
                                color: '#0097FF'
                            }, {
                                offset: 0,
                                color: '#00F6FF'
                            }]),
                            "borderWidth": 25
                        },
                        // "emphasis": {
                        //     "color": "#5886f0",
                        //     "borderColor": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        //         offset: 0,
                        //         color: '#85b6b2'
                        //     }, {
                        //         offset: 1,
                        //         color: '#6d4f8d'
                        //     }]),
                        //     "borderWidth": 25
                        // }
                    },
                },
                {
                    "name": " ",
                    "value": 16,
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
                            "borderWidth": 1
                        }
                    }
                }
            ]
        },
        {
            // "name": "CPU分配率 外圈",
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
        }
    ]
};