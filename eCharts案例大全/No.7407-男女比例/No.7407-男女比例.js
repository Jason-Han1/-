option = {
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {
                show: true,
                excludeComponents: ['toolbox'],
                pixelRatio: 2
            }
        }
    },
    "series": [{
            "center": [
                "50.0%",
                "50%"
            ],
            "radius": [
                "47%",
                "50%"
            ],
            "clockWise": false,
            "hoverAnimation": false,
            "type": "pie",
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": true,
                        "textStyle": {
                            "fontSize": 25,
                            "fontWeight": "bold"
                        },
                        "position": "center"
                    },
                    "labelLine": {
                        "show": false
                    },
                    "color": "#E15759",
                    "borderColor": "#E15759",
                    "borderWidth": 25
                },
                "emphasis": {
                    "label": {
                        "textStyle": {
                            "fontSize": 30,
                            "fontWeight": "bold"
                        }
                    },
                    "color": "#5886f0",
                    "borderColor": "#5886f0",
                    "borderWidth": 25
                }
            },
            "data": [{
                    "value": 77.6,
                    "name": "共2341个用户进行拜访\n77.6%被随访"
                },
                {
                    "name": " ",
                    "value": 22.4,
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": false
                            },
                            "labelLine": {
                                "show": false
                            },
                            "color": "#FF9F17 ",
                            "borderColor": "#FF9F17",
                            "borderWidth": 10
                        },
                        "emphasis": {
                            "color": "#5886f0",
                            "borderColor": "#5886f0",
                            "borderWidth": 0
                        }
                    }
                }
            ]
        },

    ]
};