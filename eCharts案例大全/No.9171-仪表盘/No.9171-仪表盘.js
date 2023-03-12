option = {
    "title": {
        "textStyle": {
            "color": "#757575",
            "fontStyle": "normal",
            "fontWeight": "bolder",
            "fontFamily": "sans-serif",
            "fontSize": "18"
        }
    },
    "legend": {
        "show": true,
        "type": "scroll",
        "textStyle": {
            "color": "#666666"
        },
        "right": ["0"]
    },
    "series": [
        {
        "type": "gauge",
        "radius": 95,
        "detail": {
            "show": true,
            "formatter": "{value}%",
            "color": "#64f1b4",
            "textStyle": {
                "fontSize": "20"
            },
            "offsetCenter": [0, 66]
        },
        "center": ["50%", "50%"],
        "splitNumber": 10,
        "axisLabel": {
            "show": true,
            "color": "a",
            "textStyle": {
                "fontSize": 14
            },
            "distance": 16
        },
        "axisTick": {
            "length": 6,
            "lineStyle": {
                "width": 1,
                "color": "auto"
            }
        },
        "axisLine": {
            "lineStyle": {
                "width": 2,
                "color": [
                    [1, {
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "type": "linear",
                        "global": false,
                        "colorStops": [{
                            "offset": 0,
                            "color": "#06ee89"
                        }, {
                            "offset": 0.7,
                            "color": "#64f1b4"
                        }, {
                            "offset": 1,
                            "color": "#9ff1cd"
                        }]
                    }]
                ]
            }
        },
        "pointer": {
            "length": 50,
            "width": 6
        },
        "splitLine": {
            "length": 10,
            "lineStyle": {
                "width": 1,
                "color": "auto"
            }
        },
        "data": [{
            "value": 0
        }]
    }, {
        "type": "gauge",
        "radius": 95,
        "detail": {
            "show": true,
            "formatter": "{value}%",
            "color": "#64f1b4",
            "textStyle": {
                "fontSize": "20"
            },
            "offsetCenter": [0, 66]
        },
        "center": ["50%", "50%"],
        "axisLabel": {
            "show": false
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "width": 0,
                "color": "auto",
                "opacity": 0
            }
        },
        "axisLine": {
            "show": false,
            "lineStyle": {
                "width": 0,
                "color": [
                    [1, "#06ee89"]
                ],
                "opacity": 0
            }
        },
        "pointer": {
            "show": false
        },
        "splitLine": {
            "show": false,
            "lineStyle": {
                "width": 0,
                "color": "auto",
                "opacity": 0
            }
        },
        "data": [{
            "value": 0
        }]
    }, {
        "zlevel": 1,
        "type": "pie",
        "radius": [79, 76],
        "center": ["50%", "50%"],
        "data": [{
            "value": 3,
            "itemStyle": {
                "normal": {
                    "borderWidth": 5,
                    "borderColor": {
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "type": "linear",
                        "global": false,
                        "colorStops": [{
                            "offset": 0,
                            "color": "#06ee89"
                        }, {
                            "offset": 0.7,
                            "color": "#64f1b4"
                        }, {
                            "offset": 1,
                            "color": "#9ff1cd"
                        }]
                    }
                }
            }
        }, {
            "value": 1,
            "itemStyle": {
                "opacity": 0
            }
        }],
        "tooltip": {
            "show": false
        },
        "startAngle": 225,
        "hoverAnimation": false,
        "legendHoverLink": false,
        "label": {
            "normal": {
                "show": false
            }
        },
        "labelLine": {
            "normal": {
                "show": false
            }
        },
        "itemStyle": {
            // "opacity": 0
        }
    }],
    "color": ["rgba(0,0,0,0)", "rgba(0,0,0,0)"],
}