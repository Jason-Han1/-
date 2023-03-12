option = {
    backgroundColor: '#ffffff',
    "tooltip": {
        "show": true
    },
    "xAxis": [{
        "type": "category",
        "show": false
    }],
    "yAxis": [{
        "type": "value",
        "show": false
    }],
    "series": [{
        "type": "pie",
        "radius": ["0%", "35%"],
        "startAngle": [90],
        "label": {
            "normal": {
                "position": "center",
                "fontSize": 14,
                "color": "#ffffff",
                "lineHeight": 20
            }
        },
        "data": [{
            "value": 6,
            "name": "总数",
            "itemStyle": {
                "normal": {
                    "color": {
                        "x": 0,
                        "y": 0,
                        "x2": 1,
                        "y2": 0,
                        "type": "linear",
                        "global": false,
                        "colorStops": [{
                            "offset": 0,
                            "color": "#1d86e2"
                        }, {
                            "offset": 1,
                            "color": "#1360ad"
                        }]
                    }
                }
            }
        }]
    }, {
        "type": "pie",
        "radius": ["43%", "51%"],
        "startAngle": [224],
        "label": {
            "normal": {
                "position": "outside",
                "fontSize": 14,
                "color": "#333333",
                "lineHeight": 10,
                "borderWidth": 10,
                "borderRadius": 4
            }
        },
        "labelLine": {
            "normal": {
                "show": true,
                "lineStyle": {
                    "type": "solid",
                    "color": "#333333"
                },
                "length": 10,
                "length2": 10
            }
        },
        "data": [{
            "value": 1,
            "name": "未检测",
            "itemStyle": {
                "normal": {
                    "color": "#dddddd"
                }
            }
        }, {
            "value": 1,
            "name": "安全",
            "itemStyle": {
                "normal": {
                    "color": "#51d688"
                }
            }
        }, {
            "value": 1,
            "name": "信息",
            "itemStyle": {
                "normal": {
                    "color": "#48cd7f"
                }
            }
        }, {
            "value": 1,
            "name": "低危",
            "itemStyle": {
                "normal": {
                    "color": "#1a78cf"
                }
            }
        }, {
            "value": 1,
            "name": "中危",
            "itemStyle": {
                "normal": {
                    "color": "#fead33"
                }
            }
        }, {
            "value": 1,
            "name": "高危",
            "itemStyle": {
                "normal": {
                    "color": "#ff4d4a"
                }
            }
        }]
    }]
}