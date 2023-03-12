option = {
    "backgroundColor": "",
    "color": ["#1D9DFF", "#EFCB4C"],
    "tooltip": {
        "trigger": "item",
        "formatter": "{a} <br/>{b}: {c} ({d}%)"
    },
    "series": [{
            "zlevel": 1,
            "name": "消防报警类型",
            "type": "pie",
            "radius": ["50%", "80%"],
            "avoidLabelOverlap": false,
            "label": {
                "normal": {
                    "show": true,
                    "position": "inner",
                    "textStyle": {
                        "fontSize": "15",
                        "fontWeight": "normal",
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": "20",
                        "fontWeight": "bold"
                    }
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                    "value": 235,
                    "name": "回答"
                },
                {
                    "value": 110,
                    "name": "故障"
                },
            ],
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": false
                    }
                }
            }
        },
        {
            "name": "",
            "type": "pie",
            "selectedMode": "single",
            "radius": ["50%", "80%"],
            "startAngle": "135",
            "data": [{
                "value": 30,
                "name": "",
                "label": {
                    "normal": {
                        "show": true,
                        "formatter": " {a|异常统计} \n {c|{c}}",
                        "rich": {
                            "c": {
                                "color": "#00FFFF",
                                "fontSize": 60,
                                "fontWeight": "bold",
                                "lineHeight": 5
                            },
                            "b": {
                                "color": "#00FFFF",
                                "fontSize": 45,
                                "lineHeight": 5
                            },
                            "a": {
                                "align": "center",
                                "color": "#00FFFF",
                                "fontSize": 45,
                                "height": 100
                            },
                        },
                        "textStyle": {
                            "fontSize": 28,
                            "fontWeight": "bold"
                        },
                        "position": "center"

                    }
                }
            }, ]
        }
    ]
};