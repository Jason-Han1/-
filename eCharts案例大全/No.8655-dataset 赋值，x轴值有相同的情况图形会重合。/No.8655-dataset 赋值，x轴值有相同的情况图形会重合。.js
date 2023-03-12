option = {
    "name": "customData",
    "backgroundColor": '#000',
    "title": {
        "text": "接单量（平方米）",
        "left": 20,
        "top": -2,
        "textStyle": {
            "color": "rgba(225, 245, 254, 0.2)",
            "fontSize": 14,
            "fontWeight": "normal"
        }
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "label": {
                "backgroundColor": "#6a7985"
            },
            "lineStyle": {
                "type": "dashed"
            }
        },
        "padding": 15,
        "backgroundColor": "rgba(0,0,0,0.7)"
    },
    "dataset": {
        "dimensions": ["customerName", "customerArea"],
        "source": [{
            "customerName": "季泽国",
            "customerArea": "139874",
            "unit": "m²"
        }, {
            "customerName": "季泽国",
            "customerArea": "13955",
            "unit": "m²"
        }, {
            "customerName": "张一凡",
            "customerArea": "6391",
            "unit": "m²"
        }]
    },
    "xAxis": {
        "type": "category",
        "axisTick": {
            "show": false,
            "alignWithLabel": true,
            "lineStyle": {
                "color": "#E1F5FE"
            }
        },
        "axisLine": {
            "lineStyle": {
                "color": "#E1F5FE"
            }
        },
        "offset": 16
    },
    "yAxis": {
        "nameGap": 33,
        "nameRotate": 0,
        "axisLine": {
            "show": false,
            "lineStyle": {
                "color": "#E1F5FE"
            }
        },
        "axisLabel": {
            "textStyle": {
                "fontFamily": "Arial"
            }
        },
        "axisTick": {
            "show": false
        },
        "nameTextStyle": {
            "color": "rgba(225, 245, 254, 0.2)",
            "fontSize": 14
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "width": 1,
                "color": "rgba(225,245,254, 0.2)"
            }
        }
    },
    "grid": {
        "left": "25px",
        "right": "25px",
        "top": "40",
        "bottom": "40",
        "containLabel": true
    },
    "series": [{
        "type": "bar",
        "stack": "one",
        "encode": {
            "x": "customerName",
            "y": "customerArea"
        },
        "barWidth": 30,
        "itemStyle": {
            "normal": {
                "color": "#80DAFF",
                "emphasis": {
                    "barBorderWidth": 1,
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowOffsetY": 0,
                    "shadowColor": "rgba(0,0,0,0.5)"
                }
            }
        },
        "name": "接单量"
    }]
}