option = {
    "backgroundColor": "#ffffff",
    "grid": {
        "top": "19%",
        "left": "5%",
        "right": "8%",
        "bottom": "9%",
        "containLabel": true
    },
    "tooltip": {
        "trigger": "axis"
    },
    "legend": {
        "top": "5%",
        "textStyle": {
            "color": "#333333",
            "fontSize": 12
        }
    },
    "xAxis": [{
        "name": ["筛选日期"],
        "nameLocation": "end",
        "nameTextStyle": {
            "fontSize": 14,
            "color": "#333",
            "align": "left",
            "padding": [20, 0, 40, -40]
        },
        "type": "category",
        "axisTick": {
            "alignWithLabel": true
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "#edeeee"
            }
        },
        "axisLine": {
            "lineStyle": {
                "color": "#edeeee"
            }
        },
        "axisLabel": {
            "color": "#333333",
            "fontSize": 14
        },
        "data": [1,5,2,6,7]
    }],
    "dataZoom": [{
        "type": "inside",
        "xAxisIndex": 0,
        "filterMode": "empty"
    }],
    "yAxis": [{
        "type": "value",
        "position": "left",
        "axisLine": {
            "lineStyle": {
                "color": "#edeeee"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "#edeeee"
            }
        },
        "axisLabel": {
            "color": "#333333",
            "formatter": "{value}",
            "fontSize": 14
        }
    }, {
        "type": "value",
        "position": "left",
        "axisLine": {
            "lineStyle": {
                "color": "#edeeee"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "#edeeee"
            }
        },
        "axisLabel": {
            "color": "#333333",
            "formatter": "{value}",
            "fontSize": 14
        }
    }, {
        "type": "value",
        "position": "left",
        "axisLine": {
            "lineStyle": {
                "color": "#edeeee"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "#edeeee"
            }
        },
        "axisLabel": {
            "color": "#333333",
            "formatter": "{value}",
            "fontSize": 14
        }
    }, {
        "type": "value",
        "position": "left",
        "axisLine": {
            "lineStyle": {
                "color": "#edeeee"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "#edeeee"
            }
        },
        "axisLabel": {
            "color": "#333333",
            "formatter": "{value}",
            "fontSize": 14
        }
    }, {
        "type": "value",
        "position": "left",
        "axisLine": {
            "lineStyle": {
                "color": "#edeeee"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "#edeeee"
            }
        },
        "axisLabel": {
            "color": "#333333",
            "formatter": "{value}",
            "fontSize": 14
        }
    }],
    "series": [{
        "name": "总数",
        "type": "bar",
        "yAxisIndex": 1,
        "barWidth": 20,
        "itemStyle": {
            "normal": {
                "color": "#7977d7"
            }
        },
        "label": {
            "normal": {
                "show": true,
                "position": "top",
                "color": "#333333",
                "fontSize": 14
            }
        },
        "data": [8,23,22,22,21]
    }, {
        "name": "高危",
        "type": "line",
        "symbolSize": 12,
        "symbol": "circle",
        "yAxisIndex": 1,
        "lineStyle": {
            "normal": {
                "width": 3,
                "color": "#ff4d4a"
            }
        },
        "itemStyle": {
            "normal": {
                "color": "#ff4d4a",
                "borderWidth": "2",
                "borderColor": "#ffffff"
            }
        },
        "data": [4,2,6,6,7]
    }, {
        "name": "中危",
        "type": "line",
        "symbolSize": 12,
        "symbol": "circle",
        "yAxisIndex": 1,
        "lineStyle": {
            "normal": {
                "width": 3,
                "color": "#fead33"
            }
        },
        "itemStyle": {
            "normal": {
                "color": "#fead33",
                "borderWidth": "2",
                "borderColor": "#ffffff"
            }
        },
        "data": [1,8,1,6,3]
    }, {
        "name": "低危",
        "type": "line",
        "symbolSize": 12,
        "symbol": "circle",
        "yAxisIndex": 1,
        "lineStyle": {
            "normal": {
                "width": 3,
                "color": "#1e88e5"
            }
        },
        "itemStyle": {
            "normal": {
                "color": "#1e88e5",
                "borderWidth": "2",
                "borderColor": "#ffffff"
            }
        },
        "data": [1,8,9,2,5]
    }, {
        "name": "信息",
        "type": "line",
        "symbolSize": 12,
        "symbol": "circle",
        "yAxisIndex": 1,
        "lineStyle": {
            "normal": {
                "width": 3,
                "color": "#48cd7f"
            }
        },
        "itemStyle": {
            "normal": {
                "color": "#48cd7f",
                "borderWidth": "2",
                "borderColor": "#ffffff"
            }
        },
        "data": [1,7,6,8,6]
    }]
}