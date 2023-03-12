option = option = {
    "title": {
        "show": true,
        "text": "本月用电限额",
        "subtext": "--",
        "right": "0%",
        "top": "40%",
        "textStyle": {
            "fontSize": 12,
            "color": "#D7DBDD",
            "fontFamily": "PingFangSC-Regular",
            "fontWeight": 400
        },
        "subtextStyle": {
            "fontSize": 16,
            "color": "#D7DBDD",
            "fontFamily": "DINCond-Bold"
        }
    },
    "color": [{
        "x": 0,
        "y": 1,
        "x2": 0,
        "y2": 0,
        "type": "linear",
        "global": false,
        "colorStops": [{
            "offset": 1,
            "color": "#0BCF97"
        }, {
            "offset": 0,
            "color": "#0BCF7A"
        }]
    }, {
        "x": 0,
        "y": 1,
        "x2": 0,
        "y2": 0,
        "type": "linear",
        "global": false,
        "colorStops": [{
            "offset": 1,
            "color": "rgba(33,232,151,0.05)"
        }, {
            "offset": 0,
            "color": "rgba(33,232,151,0.05)"
        }]
    }],
    "tooltip": {
        "show": false,
        "trigger": "item",
        "padding": 0
    },
    "legend": {
        "show": false,
        "right": "0%",
        "icon": "circle",
        "textStyle": {
            "color": "#D7DBDD"
        },
        "top": "center",
        "itemGap": 20
    },
    "series": [{
        "name": "内圈",
        "type": "pie",
        "data": [{
            "value": "66.67",
            "itemStyle": {
                "normal": {
                    "color": "rgba(33,232,151,0.05)"
                }
            }
        }],
        "label": {
            "normal": {
                "show": true,
                "position": "center",
                "color": "#21E897",
                "fontSize": "18",
                "fontFamily": "DINCond-Bold"
            }
        },
        "labelLine": {
            "normal": {
                "show": false
            }
        },
        "radius": [0, "40%"],
        "hoverAnimation": false
    }, {
        "name": "外环",
        "type": "pie",
        "data": [{
            "value": 300,
            "name": "实际用能"
        }, {
            "value": 4,
            "name": "",
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    },
                    "color": "rgba(0, 0, 0, 0)",
                    "borderColor": "rgba(0, 0, 0, 0)",
                    "borderWidth": 0
                }
            }
        }, {
            "value": 100,
            "name": "剩余用能",
            "itemStyle": {
                "color": "transparent"
            }
        }, {
            "value": 4,
            "name": "",
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    },
                    "color": "rgba(0, 0, 0, 0)",
                    "borderColor": "rgba(0, 0, 0, 0)",
                    "borderWidth": 0
                }
            }
        }],
        "label": {
            "normal": {
                "show": false,
                "position": "center",
                "color": "#FAAE29",
                "fontSize": "18",
                "fontFamily": "DINCond-Bold"
            }
        },
        "labelLine": {
            "normal": {
                "show": false
            }
        },
        "radius": ["40%", "55%"],
        "avoidLabelOverlap": false
    }, {
        "name": "外环",
        "type": "pie",
        "data": [{
            "value": 300,
            "name": "实际用能",
            "itemStyle": {
                "color": "transparent"
            }
        }, {
            "value": 4,
            "name": "",
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    },
                    "color": "rgba(0, 0, 0, 0)",
                    "borderColor": "rgba(0, 0, 0, 0)",
                    "borderWidth": 0
                }
            }
        }, {
            "value": 100,
            "name": "剩余用能"
        }, {
            "value": 4,
            "name": "",
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    },
                    "color": "rgba(0, 0, 0, 0)",
                    "borderColor": "rgba(0, 0, 0, 0)",
                    "borderWidth": 0
                }
            }
        }],
        "label": {
            "normal": {
                "show": false,
                "position": "center",
                "color": "#FAAE29",
                "fontSize": "18",
                "fontFamily": "DINCond-Bold"
            }
        },
        "labelLine": {
            "normal": {
                "show": false
            }
        },
        "radius": ["50%", "55%"],
        "avoidLabelOverlap": false
    }]
}