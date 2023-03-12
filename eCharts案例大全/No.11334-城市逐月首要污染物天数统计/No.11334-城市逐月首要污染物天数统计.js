option = {
    "title": {
        "top": 2,
        "left": "10%",
        "text": "城市逐月首要污染物天数统计",
        "textStyle": {
            "color": "#000"
        }
    },
    "tooltip": {
        "position": "top",
        "backgroundColor": "#F7F9FB",
        "borderColor": "#92DAFF",
        "borderWidth": "1px",
        "textStyle": {
            "color": "black"
        }
    },
    "animation": false,
    "grid": {
        "top": "12%",
        "left": "14%",
        "right": "15%",
        "bottom": "8%"
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
    "xAxis": {
        "name": "月份",
        "type": "category",
        "data": ["1月", "2月", "3月", "4月", "5月"],
        "splitArea": {
            "show": true
        }
    },
    "yAxis": {
        "type": "category",
        "data": ["NO2", "CO", "O3", "PM10", "PM2.5", "SO2"],
        "splitArea": {
            "show": true
        }
    },
    "visualMap": {
        "min": 0,
        "max": 31,
        "calculable": true,
        "align": "top",
        "orient": "vertical",
        "right": 0,
        "y": "center"
    },
    "series": [{
        "name": "优良天数",
        "type": "heatmap",
        "data": [
            [0, 0, "1"],
            [0, 1, "-"],
            [0, 2, "-"],
            [0, 3, "-"],
            [0, 4, "-"],
            [0, 5, "-"],
            [1, 0, "-"],
            [1, 1, "-"],
            [1, 2, "-"],
            [1, 3, "-"],
            [1, 4, "-"],
            [1, 5, "-"],
            [2, 0, "-"],
            [2, 1, "-"],
            [2, 2, "-"],
            [2, 3, "-"],
            [2, 4, "-"],
            [2, 5, "-"],
            [3, 0, "-"],
            [3, 1, "-"],
            [3, 2, "-"],
            [3, 3, "-"],
            [3, 4, "-"],
            [3, 5, "-"],
            [4, 0, "-"],
            [4, 1, "-"],
            [4, 2, "-"],
            [4, 3, "-"],
            [4, 4, "-"],
            [4, 5, "-"]
        ],
        "label": {
            "normal": {
                "show": true
            }
        },
        "tooltip": {},
        "itemStyle": {
            "normal": {
                "shadowColor": "rgba(0,0,0,0.4)",
                "shadowBlur": 15
            }
        }
    }]
};