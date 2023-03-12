option = {
    "title": {
        "show": false
    },
    "series": [{
        "type": "pie",
        "hoverAnimation": false,
        "radius": ["55", "65"],
        "center": ["50%", "50%"],
        "startAngle": 225,
        "labelLine": {
            "normal": {
                "show": false
            }
        },
        "label": {
            "normal": {
                "position": "center"
            }
        },
        "data": [{
            "value": 100,
            "itemStyle": {
                "normal": {
                    "color": "#E1E8EE"
                }
            }
        }, {
            "value": 32,
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    },
                    "color": "rgba(0,0,0,0)",
                    "borderWidth": 0
                }
            }
        }]
    }, {
        "type": "pie",
        "hoverAnimation": false,
        "radius": ["55", "65"],
        "center": ["50%", "50%"],
        "startAngle": 225,
        "labelLine": {
            "normal": {
                "show": false
            }
        },
        "label": {
            "normal": {
                "position": "center"
            }
        },
        "data": [{
            "value": "50",
            "itemStyle": {
                "normal": {
                    "color": "#58C4EF"
                }
            },
            "label": {
                "normal": {
                    "formatter": "{c}%",
                    "position": "center",
                    "show": true,
                    "padding": [30, 0, 0, 0],
                    "textStyle": {
                        "fontSize": "20",
                        "fontWeight": "normal",
                        "color": "#58C4EF"
                    }
                }
            }
        }, {
            "value": 82,
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    },
                    "color": "rgba(0,0,0,0)",
                    "borderWidth": 0
                }
            }
        }]
    }]
}