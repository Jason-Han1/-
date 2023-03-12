option = option = {
    "title": {
        "text": "总预算金额 2017-2020",
        "left": "center",
        "textStyle":{
            "fontSize":10,
        "fontWeight":"normal"
        }
    },
    "backgroundColor": {
        "x": 0.3,
        "y": 0.3,
        "r": 0.8,
        "type": "radial",
        "global": false,
        "colorStops": [{
            "offset": 0,
            "color": "#f7f8fa"
        }, {
            "offset": 1,
            "color": "#cdd0d5"
        }]
    },
    "tooltip": {
        "show": true,
        "trigger": "item"
    },
    "grid": {
        "bottom": "20%"
    },
    "xAxis": [{
        "type": "category",
        "axisLabel": {
            "show": true,
            "textStyle": {
                "fontSize": 16,
                "color": "#000"
            }
        },
        "data": ["2020", "2019", "2018"]
    }],
    "yAxis": {
        "type": "value",
        "show": false
    },
    "series": [{
        "label": {
            "normal": {
                "show": true,
                "position": "inside",
                "color": "#000"
            }
        },
        "legendHoverLink": true,
        "type": "bar",
        "name": "费用",
        "stack": "sum",
        "data": [{
            "itemStyle": {
                "shadowBlur": 20,
                "shadowOffsetX": 5,
                "shadowColor": "rgba(0, 0, 0, 0.5)"
            },
            "value": 5477.49
        }, 4098.87, 6660.55],
        "itemStyle": {
            "color": "transparent",
            "borderWidth": 5,
            "borderColor": "red"
        }
    }]
}