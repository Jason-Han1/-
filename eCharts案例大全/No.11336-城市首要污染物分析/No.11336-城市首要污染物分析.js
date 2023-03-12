var option = {
    "title": {
        "top": 2,
        "left": "center",
        "text": "城市首要污染物分析",
        "textStyle": {
            "color": "#000"
        }
    },
    "toolbox": {
        "feature": {
            "dataView": {
                "show": true,
                "readOnly": false
            },
            "restore": {
                "show": true
            },
            "saveAsImage": {
                "show": true
            }
        },
        "top": 2,
        "left": "right"
    },
    "tooltip": {
        "show": true,
        "formatter": "{a}: {c}%",
        "backgroundColor": "#F7F9FB",
        "borderColor": "#92DAFF",
        "borderWidth": "1px",
        "textStyle": {
            "color": "black"
        }
    },
    "color": ["#F65EAB", "#0E9EA9", "#FFBD6D", "#AB73CE", "#0099FD", "#996B6B"],
    "grid": {
        "top": "63%",
        "left": "9%",
        "right": "13%",
        "bottom": "8%"
    },
    "legend": {
        "top": "7%",
        "itemWidth": 20,
        "itemHeight": 12,
        "itemGap": 7,
        "data": [{
            "name": "NO2",
            "icon": "roundRect"
        }, {
            "name": "CO",
            "icon": "roundRect"
        }, {
            "name": "O3",
            "icon": "roundRect"
        }, {
            "name": "PM10",
            "icon": "roundRect"
        }, {
            "name": "PM2.5",
            "icon": "roundRect"
        }, {
            "name": "SO2",
            "icon": "roundRect"
        }]
    },
    "xAxis": {
        "name": "类别",
        "type": "category",
        "axisLine": {
            "show": true,
            "lineStyle": {
                "type": "solid"
            }
        },
        "axisLabel": {
            "show": true,
            "interval": 0,
            "rotate": 0,
            "textStyle": {
                "fontSize": 12,
                "color": "#000"
            }
        },
        "axisTick": {
            "show": false
        },
        "splitLine": {
            "lineStyle": {
                "type": "solid",
                "color": "#cfc3bd"
            }
        },
        "data": ["NO2", "CO", "O3", "PM10", "PM2.5", "SO2"]
    },
    "yAxis": {
        "name": "天",
        "type": "value",
        "axisTick": {
            "show": false
        },
        "splitLine": {
            "show": false,
            "lineStyle": {
                "type": "solid",
                "color": "#000"
            }
        }
    },
    "series": [{
        "type": "pie",
        "radius": "41%",
        "center": ["50%", "42%"],
        "label": {
            "normal": {
                "show": true,
                "formatter": "{b}\n{d}%",
                "textStyle": {
                    "fontSize": 12,
                    "color": "#000"
                }
            }
        },
        "itemStyle": {
            "normal": {
                "shadowColor": "rgba(0,0,0,0.4)",
                "shadowBlur": 15
            }
        },
        "tooltip": {
            "show": true,
            "formatter": "{b}\n{d}%"
        },
        "labelLine": {
            "normal": {
                "show": true,
                "length": 8,
                "length2": 7
            }
        },
        "data": [{
            "name": "NO2",
            "value": 10
        }, {
            "name": "CO",
            "value": 10
        }, {
            "name": "O3",
            "value": 0
        }, {
            "name": "PM10",
            "value": 0
        }, {
            "name": "PM2.5",
            "value": 0
        }, {
            "name": "SO2",
            "value": 0
        }]
    }, {
        "type": "bar",
        "silent": false,
        "itemStyle": {
            "normal": {
                "shadowColor": "rgba(0,0,0,0.4)",
                "shadowBlur": 15
            }
        },
        "label": {
            "normal": {
                "show": true,
                "position": "top",
                "textStyle": {
                    "fontSize": 12,
                    "color": "#000"
                }
            }
        },
        "tooltip": {
            "formatter": "{b}: {c}"
        },
        "data": [10, 10, 0, 0, 0, 0]
    }]
}