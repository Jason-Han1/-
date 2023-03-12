option = {
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "line",
            "label": {
                "show": false
            }
        },
        "backgroundColor": "rgba(255,255,255,0.95)",
        "color": "#666666",
        "borderWidth": "1",
        "borderColor": "#fff",
        "textStyle": {
            "color": "#666666",
            "fontSize": 12
        },
        "padding": [5, 10],
        "extraCssText": "box-shadow:0 2px 4px rgba(91,121,251,0.3);"
    },
    "legend": [
        {
        "x": "right",
        // "y": "top",
        "top": "10%",
        "icon": "circle",
        "itemWidth": 6,
        "itemHeight": 6,
        "data": ["单月10人数", "回落比", "全国", "刘莉"]
    },{
        "x": "right",
        // "y": "top",
        "top": "40%",
        "icon": "circle",
        "itemWidth": 6,
        "itemHeight": 6,
        "data": ["有效10人数",  "回落比", "全国", "刘莉"]
    },
    {
        "x": "right",
        "y": "top",
        "top": "70%",
        "icon": "circle",
        "itemWidth": 6,
        "itemHeight": 6,
        "data": ["新晋10人数", "降级10人数", "升降比", "全国", "刘莉"]
    }
    ],
    "grid": [{
        "left": "0",
        "right": "0",
        "top": "10%",
        "width": "100%",
        "height": "20%",
        "containLabel": false
    }, {
        "left": "0",
        "right": "0",
        "top": "40%",
        "width": "100%",
        "height": "20%",
        "containLabel": false
    }, {
        "left": "0",
        "right": "0",
        "top": "70%",
        "width": "100%",
        "height": "20%",
        "containLabel": false
    }],
    "xAxis": [{
        "gridIndex": 0,
        "type": "category",
        "data": ["201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909", "201910", "201911", "201912", "202001", "202002", "202003", "202004", "202005", "202006", "202007", "202008", "202009", "202010"],
        "axisPointer": {
            "type": "shadow"
        },
        "axisLine": {
            "show": true
        },
        "axisTick": {
            "show": false
        },
        "splitLine": {
            "show": false
        }
    }, {
        "gridIndex": 1,
        "type": "category",
        "data": ["201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909", "201910", "201911", "201912", "202001", "202002", "202003", "202004", "202005", "202006", "202007", "202008", "202009", "202010"],
        "axisPointer": {
            "type": "shadow"
        },
        "axisLine": {
            "show": true
        },
        "axisTick": {
            "show": false
        },
        "splitLine": {
            "show": false
        }
    }, {
        "gridIndex": 2,
        "type": "category",
        "data": ["201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909", "201910", "201911", "201912", "202001", "202002", "202003", "202004", "202005", "202006", "202007", "202008", "202009", "202010"],
        "axisPointer": {
            "type": "shadow"
        },
        "axisLine": {
            "show": true
        },
        "axisTick": {
            "show": false
        },
        "splitLine": {
            "show": false
        }
    }],
    "yAxis": [{
        "gridIndex": 0,
        "type": "value",
        show: true,
        "axisLabel": {
            "show": false,
            "formatter": "{value}"
        },
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitLine": {
            "show": false
        }
    }, {
        "gridIndex": 1,
        "type": "value",
        show: true,
        "axisLabel": {
            "show": false,
            "formatter": "{value}%"
        },
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitLine": {
            "show": false
        }
    }, {
    //     "gridIndex": 1,
    //     "type": "value",
    //     "axisLabel": {
    //         "show": false,
    //         "formatter": "{value}%"
    //     },
    //     "axisLine": {
    //         "show": false
    //     },
    //     "axisTick": {
    //         "show": false
    //     },
    //     "splitLine": {
    //         "show": false
    //     }
    // }, {
    //     "gridIndex": 1,
    //     "type": "value",
    //     "axisLabel": {
    //         "show": false,
    //         "formatter": "{value}%"
    //     },
    //     "axisLine": {
    //         "show": false
    //     },
    //     "axisTick": {
    //         "show": false
    //     },
    //     "splitLine": {
    //         "show": false
    //     }
    // }, {
    //     "gridIndex": 2,
    //     "type": "value",
    //     "axisLabel": {
    //         "show": false,
    //         "formatter": "{value}%"
    //     },
    //     "axisLine": {
    //         "show": false
    //     },
    //     "axisTick": {
    //         "show": false
    //     },
    //     "splitLine": {
    //         "show": false
    //     }
    // }, {
        "gridIndex": 2,
        "type": "value",
        show: true,
        "axisLabel": {
            "show": false,
            "formatter": "{value}%"
        },
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitLine": {
            "show": false
        }
    }],
    "series": [
        {
        "name": "单月10人数",
        xAxisIndex: 0, // 指定x轴
        yAxisIndex: 0, // 指定y轴
        "type": "bar",
        "data": [14, 52, 22, 20, 11, 25, 15, 56, 65, 87, 54, 45, 54, 87, 8, 7, 8, 63, 69, 45, 68, 24]
    }, {
        "xAxisIndex": 0,
        "yAxisIndex": 0,
        "name": "回落比",
        "type": "line",
        "data": [143, 52, 22, 20, 11, 25, 15, 56, 65, 87, 54, 45, 54, 87, 8, 7, 8, 63, 69, 45, 68, 24]
    }, {
        "name": "全国",
        "xAxisIndex": 0,
        "yAxisIndex": 0,
        "type": "line",
        "data": [14, 52, 22, 20, 11, 25, 15, 56, 65, 87, 54, 45, 54, 87, 8, 7, 8, 63, 69, 45, 68, 24]
    }, {
        "xAxisIndex": 0,
        "yAxisIndex": 0,
        "name": "刘莉",
        "type": "line",
        "data": [134, 52, 22, 20, 11, 25, 15, 56, 65, 87, 54, 45, 54, 87, 8, 7, 8, 63, 69, 45, 68, 24]
    }, {
        "xAxisIndex": 1,
        "yAxisIndex": 1,
        "name": "有效10人数",
        "type": "bar",
        "data": [142, 52, 22, 20, 11, 25, 15, 56, 65, 87, 54, 45, 54, 87, 8, 7, 8, 63, 69, 45, 68, 24]
    }, {
        "name": "回落比",
        "xAxisIndex": 1,
        "yAxisIndex": 1,
        "type": "line",
        "data": [14, 52, 22, 20, 11, 25, 15, 56, 65, 87, 54, 45, 54, 87, 8, 7, 8, 63, 69, 45, 68, 24]
    }, {
        "name": "全国",
        "xAxisIndex": 1,
        "yAxisIndex": 1,
        "type": "line",
        "data": [14, 52, 22, 20, 11, 25, 15, 56, 65, 87, 54, 45, 54, 87, 8, 7, 8, 63, 69, 45, 68, 24]
    }, {
        "xAxisIndex": 1,
        "yAxisIndex": 1,
        "name": "刘莉",
        "type": "line",
        "data": [134, 52, 22, 20, 11, 25, 15, 56, 65, 87, 54, 45, 54, 87, 8, 7, 8, 63, 69, 45, 68, 24]
    }, {
        "xAxisIndex": 2,
        "yAxisIndex": 2,
        "name": "新晋10人数",
        "type": "bar",
        "data": [14, 52, 22, 20, 11, 25, 15, 56, 65, 87, 54, 45, 54, 87, 8, 7, 8, 63, 69, 45, 68, 24]
    }, {
        "name": "降级10人数",
        "xAxisIndex": 1,
        "yAxisIndex": 1,
        "type": "line",
        "data": [14, 52, 22, 20, 11, 25, 15, 56, 65, 87, 54, 45, 54, 87, 8, 7, 8, 63, 69, 45, 68, 24]
    }, {   
        "xAxisIndex": 2,
        "yAxisIndex": 2,
        "name": "升降比",
        "type": "line",
        "data": [14, 52, 22, 20, 11, 25, 15, 56, 65, 87, 54, 45, 54, 87, 8, 7, 8, 63, 69, 45, 68, 24]
    }, {
        "xAxisIndex": 2,
        "yAxisIndex": 2,
        "name": "全国",
        "type": "line",
        "data": [134, 52, 22, 20, 11, 25, 15, 56, 65, 87, 54, 45, 54, 87, 8, 7, 8, 63, 69, 45, 68, 24]
    }, {
        "xAxisIndex": 2,
        "yAxisIndex": 2,
        "name": "刘莉",
        "type": "line",
        "data": [14, 52, 22, 20, 11, 25, 15, 56, 65, 87, 54, 45, 54, 87, 8, 7, 8, 63, 69, 45, 68, 24]
    }]
}