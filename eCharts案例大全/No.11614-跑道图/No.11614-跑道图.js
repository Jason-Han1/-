option = {
    "color": ["#2b9fe8", "#87cefb", "#9c7ad3"],
    "title": {
        "text": "554家\n施工单位",
        "x": "24%",
        "y": "center",
        "textStyle": {
            "color": "#344563",
            "fontWeight": "bolder",
            "fontSize": 18
        }
    },
    "tooltip": {
        "show": true,
        "formatter": "{a} <br/>{b} : {c} ({d}%)"
    },
    "legend": {
        "itemGap": 5,
        "data": ["总承包", "专业承包", "劳务分包"],
        "orient": "vertival",
        "top": 26,
        "left": 150,
        "itemHeight": 10
    },
    "series": [{
        "name": "类型",
        "type": "pie",
        "clockWise": false,
        "hoverAnimation": false,
        "radius": [80, 95],
        "itemStyle": {
            "normal": {
                "label": {
                    "show": false
                },
                "labelLine": {
                    "show": false
                }
            }
        },
        "center": ["32%", "50%"],
        "data": [{
            "value": 299,
            "name": "总承包"
        }, {
            "value": 255,
            "tooltip": {
                "show": false
            },
            "name": "invisible",
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,0,0,0)",
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    }
                }
            }
        }]
    }, {
        "name": "类型",
        "type": "pie",
        "clockWise": false,
        "hoverAnimation": false,
        "radius": [65, 80],
        "itemStyle": {
            "normal": {
                "label": {
                    "show": false
                },
                "labelLine": {
                    "show": false
                }
            }
        },
        "center": ["32%", "50%"],
        "data": [{
            "value": 167,
            "name": "专业承包"
        }, {
            "value": 387,
            "tooltip": {
                "show": false
            },
            "name": "invisible",
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,0,0,0)",
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    }
                }
            }
        }]
    }, {
        "name": "类型",
        "type": "pie",
        "clockWise": false,
        "hoverAnimation": false,
        "radius": [50, 65],
        "itemStyle": {
            "normal": {
                "label": {
                    "show": false
                },
                "labelLine": {
                    "show": false
                }
            }
        },
        "center": ["32%", "50%"],
        "data": [{
            "value": 88,
            "name": "劳务分包"
        }, {
            "value": 466,
            "tooltip": {
                "show": false
            },
            "name": "invisible",
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,0,0,0)",
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    }
                }
            }
        }]
    }]
};