option = {
    backgroundColor: "#0d183d",
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "lineStyle": {
                "color": "#285E94"
            }
        }
    },
    "legend": {
        "data": [{
            "name": "客运指数",
            "textStyle": {
                "rich": {
                    "a": {
                        "width": 16,
                        "height": 10,
                        "borderRadius": 5,
                        "backgroundColor": "rgba(225, 255, 104,,1)"
                    }
                }
            }
        }, {
            "name": "货运指数",
            "textStyle": {
                "rich": {
                    "a": {
                        "width": 16,
                        "height": 10,
                        "borderRadius": 5,
                        "backgroundColor": "rgba(90, 255, 164,,1)"
                    }
                }
            }
        }, {
            "name": "流量指数",
            "textStyle": {
                "rich": {
                    "a": {
                        "width": 16,
                        "height": 10,
                        "borderRadius": 5,
                        "backgroundColor": "rgba(86, 200, 255,,1)"
                    }
                }
            }
        }],
        "bottom": "1%",
        "icon": "none",
         formatter(name) {
          const arr = [
            '{a|}',
            `{b|${name}}`,
          ]
          return arr.join('');
        },
        "textStyle": {
            "rich": {
                "a": {
                    "width": 16,
                    "height": 10,
                    "borderRadius": 5,
                    "backgroundColor": "#ccc"
                },
                "b": {
                    "fontSize": 14,
                    "align": "center",
                    "padding": [0, 5, 0, 5],
                    "lineHeight": 20,
                    "color": "#BADFFF"
                }
            }
        }
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
        "data": ["01月", "02月", "03月", "04月", "05月", "06月", "07月", "08月", "09月"]
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
        "symbol": "circle",
        "showSymbol": true,
        "symbolSize": 5,
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
        "data": [98.44, 51.69, 80.08, 87.43, 80.54, 87.84, 79.13, 80.67, 85.18],
        "color": "rgba(225, 255, 104, 1)"
    }, {
        "name": "货运指数",
        "type": "line",
        "symbol": "circle",
        "showSymbol": true,
        "symbolSize": 5,
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
        "data": [97.53, 37.53, 85.2, 100.27, 114.96, 157.02, 146.8, 121.35, 115.72],
        "color": "rgba(90, 255, 164, 1)"
    }, {
        "name": "流量指数",
        "type": "line",
        "symbol": "circle",
        "showSymbol": true,
        "symbolSize": 5,
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
        "data": [93.53, 44.45, 77.59, 86.92, 86.56, 101.42, 93.66, 88.05, 89.31],
        "color": "rgba(86, 200, 255, 1)"
    }]
}