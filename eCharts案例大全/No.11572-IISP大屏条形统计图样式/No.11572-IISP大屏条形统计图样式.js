option = {
    "grid": [{
        "top": 10,
        "left": 10,
        "bottom": 0,
        "right": 6
    }],
    "barGap": "20",
    "xAxis": [{
        "show": false,
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": false
        }
    }],
    "yAxis": {
        "show": false,
        "type": "category",
        "axisLabel": {
            "fontSize": 16,
            "opacity": 0.9,
            "align": "right",
            "color": "#c0dff2",
            "show": false,
            "formatter": function(o) {
                return o.slice(0, 2)
            },
        },
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        }
    },
    "series": [{
        "name": "value",
        "type": "pictorialBar",
        "symbol": "rect",
        "barWidth": 15,
        "itemStyle": {
            "normal": {
                "barBorderRadius": 5,
                "color": "#58e2fa",
                "opacity": 0.9
            },
            "emphasis": {
                "barBorderRadius": 5,
                "color": "#58e2fa",
                "opacity": 0.9
            }
        },
        "symbolRepeat": true,
        "symbolSize": ["100%", "50%"],
        "symbolPosition": "start",
        "symbolMargin": 2,
        "symbolClip": true,
        "hoverAnimation": {
            "animation": false
        },
        "zlevel": 3,
        "data": [{
            "value": [58, "西风"],
            "itemStyle": {
                "normal": {
                    "color": "#008200"
                }
            }
        }, {
            "value": [90, "东风"],
            "itemStyle": {
                "normal": {
                    "color": "#66a700"
                }
            }
        }, {
            "value": [48, "政府单位"],
            "itemStyle": {
                "normal": {
                    "color": "#c6b200"
                }
            }
        }, {
            "value": [15, "先进制造"],
            "itemStyle": {
                "normal": {
                    "color": "#d28308"
                }
            }
        }, {
            "value": [66, "能源"],
            "itemStyle": {
                "normal": {
                    "color": "#ae501d"
                }
            }
        }]
    }, {
        "name": "barBorder",
        "type": "bar",
        "barWidth": 15,
        "itemStyle": {
            "normal": {
                "color": "none",
                "borderColor": "#21426C"
            }
        },
        "hoverAnimation": {
            "animation": false
        },
        "data": [{
            "value": [90, "西风"],
            "originalValue": 58
        }, {
            "value": [90, "东风"],
            "originalValue": 90
        }, {
            "value": [90, "政府单位"],
            "originalValue": 48
        }, {
            "value": [90, "先进制造"],
            "originalValue": 15
        }, {
            "value": [90, "能源"],
            "originalValue": 66
        }],
        "label": {
            "show": true,
            "position": 'insideRight',
            "offset":[0,-18],
            "color": "#c0dff2",
            "fontFamily": "VUI-Digital",
            "fontSize": 16
        },
        "zlevel": 4
    }, {
        "type": "pictorialBar",
        "name": "barFill",
        "symbol": "rect",
        "barWidth": 15,
        "itemStyle": {
            "normal": {
                "barBorderRadius": 5,
                "color": "#1f4274"
            },
            "emphasis": {
                "barBorderRadius": 5,
                "color": "#1f4274"
            }
        },
        "symbolRepeat": true,
        "symbolSize": ["100%", "50%"],
        "symbolPosition": "start",
        "symbolMargin": 2,
        "symbolClip": true,
        "hoverAnimation": {
            "animation": false
        },
        "data": [{
            "value": [90, "西风"],
            "originalValue": 58
        }, {
            "value": [90, "东风"],
            "originalValue": 90
        }, {
            "value": [90, "政府单位"],
            "originalValue": 48
        }, {
            "value": [90, "先进制造"],
            "originalValue": 15
        }, {
            "value": [90, "能源"],
            "originalValue": 66
        }],
        "label": {
            "show": true,
            "position": [0, -18],
            "color": "#c0dff2",
            "fontSize": 15
        },
        "animation": false,
        "zlevel": 2
    }]
}