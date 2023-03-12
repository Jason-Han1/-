option = {
    "backgroundColor": "rgb(0, 16, 42)",
    "textStyle": {
        "color": "#333333"
    },
    "title": {
        "textStyle": {
            "fontSize": 18,
            "color": "rgba(255, 255, 255, 1)"
        },
        "show": true,
        "padding": 10,
        "text": "\u5168\u5e02\u4e8b\u6545\u7edf\u8ba1"
    },
    "legend": {
        "show": true
    },
    "tooltip": {
        "show": true,
        "trigger": "item",
        "axisPointer": {
            "type": "line"
        },
        "backgroundColor": "rgba(50,50,50,0.7)",
        "borderColor": "#333",
        "borderWidth": 0,
        "padding": 5,
        "textStyle": {
            "color": "#fff",
            "fontSize": 14
        }
    },
    "xAxis": {
        "show": false,
        "type": "value"
    },
    "yAxis": [{
        "show": true,
        "type": "category",
        "data": ["肇事逃逸", "单方事故", "车辆相撞", "行人被撞", "车辆剐蹭"],
        "axisLine": {
            "show": false,
            "lineStyle": {}
        },
        "axisTick": {
            "show": false,
            "lineStyle": {}
        },
        "axisLabel": {
            "show": true,
            "fontSize": 16,
            "color": "rgba(255, 255, 255, 1)"
        }
    }, {
        "show": true,
        "data": [40, 50, 200, 140, 120],
        "axisLine": {
            "show": false,
            "lineStyle": {}
        },
        "axisTick": {
            "show": false,
            "lineStyle": {}
        },
        "axisLabel": {
            "show": true,
            "fontSize": 16,
            "color": function(value, index) {
                if (value === "200") {
                    return "#FE7956"
                }
                return "#089CF6"
            }
        }
    }],
    "series": [{
            "name": "",
            "type": "bar",
            "yAxisIndex": 0,
            "data": [40, 50, 200, 140, 120],
            "barCategoryGap": 50,
            "barWidth": 6,
            "itemStyle": {
                "color": function(params) {
                    if (params.data === 200) {
                        return "#FE7956"
                    }
                    return "#089CF6"
                }
            }
        },
        {
            "name": '',
            "type": 'bar',
            "yAxisIndex": 1,
            "barCategoryGap": 20,
            "barWidth": 15,
            "data": [250, 250, 250, 250, 250],
            "itemStyle": {
                "color": "none",
                "barBorderRadius": 2,
                "borderColor": "#089CF6",
                "borderWidth": 0.5
            }
        }
    ]
};;