option = {
    "title": {},
    "color": [{
        "x": 0,
        "y": 1,
        "x2": 0,
        "y2": 0,
        "type": "linear",
        "global": false,
        "colorStops": [{
            "offset": 1,
            "color": "#faae29"
        }, {
            "offset": 0,
            "color": "#f6de19"
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
            "color": "#51d2fb"
        }, {
            "offset": 0,
            "color": "#28a6f6"
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
            "color": "#45f5c8"
        }, {
            "offset": 0,
            "color": "#0bcf7a"
        }]
    }],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "padding": 0
    },
    "series": [{
        "name": "内圈",
        "type": "pie",
        "data": [{
            "value": "39661.43",
            "itemStyle": {
                "normal": {
                    "color": "rgba(33,232,151,0.05)"
                }
            }
        }],
        "hoverAnimation": false,
        "hoverOffset": 10,
        "label": {
            "normal": {
                "show": true,
                "position": "center",
                "color": "rgba(33,232,151)",
                "fontSize": "18",
                "fontFamily": "DINCond-Bold"
            }
        },
        "labelLine": {
            "normal": {
                "show": false
            }
        },
        "radius": [0, "40%"]
    }, {
        "name": "外环",
        "type": "pie",
        "data": [{
            "value": 39661.43,
            "name": "峰",
            "itemStyle": {
                "color": {
                    "x": 0,
                    "y": 1,
                    "x2": 0,
                    "y2": 0,
                    "type": "linear",
                    "global": false,
                    "colorStops": [{
                        "offset": 1,
                        "color": "#faae29"
                    }, {
                        "offset": 0,
                        "color": "#f6de19"
                    }]
                }
            },
            "label": {
                "color": "rgba(255,255,255,.45)",
                "fontSize": 14,
                "rich": {
                    "a": {
                        "color": "#fff",
                        "fontSize": 20,
                        "lineHeight": 30
                    }
                }
            }
        }, {
            "value": 3111.751247,
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
            "value": 184913.95,
            "name": "平",
            "itemStyle": {
                "color": {
                    "x": 0,
                    "y": 1,
                    "x2": 0,
                    "y2": 0,
                    "type": "linear",
                    "global": false,
                    "colorStops": [{
                        "offset": 1,
                        "color": "#51d2fb"
                    }, {
                        "offset": 0,
                        "color": "#28a6f6"
                    }]
                }
            }
        }, {
            "value": 3111.751247,
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
            "value": 92937.09,
            "name": "谷",
            "itemStyle": {
                "color": {
                    "x": 0,
                    "y": 1,
                    "x2": 0,
                    "y2": 0,
                    "type": "linear",
                    "global": false,
                    "colorStops": [{
                        "offset": 1,
                        "color": "#45f5c8"
                    }, {
                        "offset": 0,
                        "color": "#0bcf7a"
                    }]
                }
            }
        }, {
            "value": 3111.751247,
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
        "hoverAnimation": true,
        "hoverOffset": 10,
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
        "radius": [65, 75],
        "avoidLabelOverlap": false
    }],
    "legend": {
        "show": true,
        "icon": "circle",
        "right": 0,
        "itemHeight": 10,
        "itemWidth": 10,
        "textStyle": {
            "color": "#D7DBDD"
        },
        "data": ["峰", "平", "谷"],
        "orient": "vertical",
        "top": "center",
        "itemGap": 20
    }
}