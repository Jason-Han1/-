option = {
    backgroundColor: '#152E4F',
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "lineStyle": {
                "color": "#285E94"
            }
        }
    },
    "legend": {
        "data": ["客运指数", "货运指数", "流量指数"],
        "textStyle": {
            "color": "#BADFFF"
        },
        "bottom": "1%",
        "icon": "circle"
    },
    "grid": {
        "left": "2%",
        "right": "2%",
        "bottom": "15%",
        "top": "8%",
        "containLabel": true
    },
    "xAxis": {
        "axisLine": {
            "lineStyle": {
                "color": "rgba(196, 196, 196, 0.1)"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "rgba(196, 196, 196, 0.1)"
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#50AFFF",
                "fontSize": "13"
            }
        },
        "data": ["01月", "02月", "03月", "04月", "05月", "06月", "07月", "08月", "09月", "10月", "11月", "12月"]
    },
    "yAxis": [{
        "type": "value",
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "textStyle": {
                "fontSize": "13",
                "color": "#50AFFF"
            }
        },
        "axisLine": {
            "lineStyle": {
                "color": "rgba(196, 196, 196, 0.1)"
            }
        },
        "splitLine": {
            "lineStyle": {
                "color": "rgba(196, 196, 196, 0.1)"
            }
        }
    }],
    "series": [{
        "name": "客运指数",
        "type": "line",
        "smooth": true,
        "symbol": "circle",
        "showSymbol": true,
         symbolSize: 15,
        "lineStyle": {
            "color": "rgba(225, 255, 104, 1)"
        },
        "areaStyle": {
            "normal": {
                "color": {
                    "x": 0,
                    "y": 0,
                    "x2": 0,
                    "y2": 1,
                    "type": "linear",
                    "global": false,
                    "colorStops": [{
                        "offset": 0,
                        "color": "rgba(225, 255, 104, 0.2)"
                    }, {
                        "offset": 0.6,
                        "color": "rgba(225, 255, 104, 0.1)"
                    }, {
                        "offset": 0.8,
                        "color": "rgba(225, 255, 104, 0.01)"
                    }]
                },
                "shadowColor": "rgba(225, 255, 104, 0.1)",
                "shadowBlur": 6
            }
        },
        "data": [50, 60, 70, 75, 78, 80, 70, 55, 55, 60, 70, 80],
        "color": "rgba(225, 255, 104, 1)"
    }, {
        "name": "货运指数",
        "type": "line",
        "smooth": true,
        "symbol": "circle",
        "showSymbol": false,
        "lineStyle": {
            "color": "rgba(90, 255, 164, 1)"
        },
        "areaStyle": {
            "normal": {
                "color": {
                    "x": 0,
                    "y": 0,
                    "x2": 0,
                    "y2": 1,
                    "type": "linear",
                    "global": false,
                    "colorStops": [{
                        "offset": 0,
                        "color": "rgba(90, 255, 164, 0.2)"
                    }, {
                        "offset": 0.6,
                        "color": "rgba(90, 255, 164, 0.1)"
                    }, {
                        "offset": 0.8,
                        "color": "rgba(90, 255, 164, 0.01)"
                    }]
                },
                "shadowColor": "rgba(90, 255, 164, 0.1)",
                "shadowBlur": 6
            }
        },
        "data": [40, 40, 45, 58, 60, 58, 40, 38, 40, 43, 56, 55],
        "color": "rgba(90, 255, 164, 1)"
    }, {
        "name": "流量指数",
        "type": "line",
        "smooth": true,
        "symbol": "circle",
        "showSymbol": false,
        "lineStyle": {
            "color": "rgba(86, 200, 255, 1)"
        },
        "areaStyle": {
            "normal": {
                "color": {
                    "x": 0,
                    "y": 0,
                    "x2": 0,
                    "y2": 1,
                    "type": "linear",
                    "global": false,
                    "colorStops": [{
                        "offset": 0,
                        "color": "rgba(86, 200, 255, 0.2)"
                    }, {
                        "offset": 0.6,
                        "color": "rgba(86, 200, 255, 0.1)"
                    }, {
                        "offset": 0.8,
                        "color": "rgba(86, 200, 255, 0.01)"
                    }]
                },
                "shadowColor": "rgba(86, 200, 255, 0.1)",
                "shadowBlur": 6
            }
        },
        "data": [60, 60, 50, 40, 45, 55, 65, 70, 63, 60, 60, 60],
        "color": "rgba(86, 200, 255, 1)"
    }]
}