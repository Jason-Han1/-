option = {
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        },
        "backgroundColor": "rgba(0,0,0,0)"
    },
    "grid": {
        "top": "2%",
        "left": "2%",
        "right": "2%"
    },
    "color": ["#FF790c", "#1890ff", "#666666"],
    "legend": {
        "itemWidth": 8,
        "itemHeight": 8,
        "data": [{
            "name": "票房",
            "icon": "circle"
        }, {
            "name": "排映产出比",
            "icon": "path://M0,364.8h1024v294.4H0z"
        }, {
            "name": "排座产出比",
            "icon": "path://M0,364.8h1024v294.4H0z"
        }],
        "bottom": 0
    },
    "yAxis": [{
        "type": "category",
        "z": 99,
        "axisLine": {
            "show": true,
            "color": "#A3ADB6"
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "color": "#666666",
            "inside": true,
            "padding": [-8, 0, 0, 0]
        },
        "data": ["叶问4：完结篇", "宠爱", "冰雪奇缘2", "误杀", "天使陷落", "亲爱的新年好", "半个喜剧", "星球大战：天行者崛起"]
    }],
    "xAxis": [{
        "type": "value",

        "axisLine": {
            "show": false
        },
        "interval": 0.4,
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "formatter": "{value}"
        },
        "z": 2,
        "splitLine": {
            "show": true,
            "lineStyle": {
                "type": "dotted",
                "color": "#E9E9E9"
            }
        }
    }, {
        "type": "value",

        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "show": false
        },
        "z": 1,
        "splitLine": {
            "show": false
        }
    }],
    "series": [{
        "name": "",
        "type": "bar",
        "data": [0, 0, 0, 0, 0, 0, 0, 0],
        "xAxisIndex": 1,
        "yAxisIndex": 0,
        "barWidth": "50%"
    }, {
        "name": "票房",
        "type": "bar",
        "data": [391200, 317000, 247000, 124500, 63000, 61000, 20400, 20000],
        "xAxisIndex": 1,
        "yAxisIndex": 0,
        "barWidth": "30%"
    }, {
        "name": "排映产出比",
        "type": "line",
        "xAxisIndex": 0,
        "yAxisIndex": 0,
        "symbol": "none",
        "data": [1.46, 0.72, 2.03, 1.02, 0.86, 0.42, 0.42, 0.82]
    }, {
        "name": "排座产出比",
        "type": "line",
        "xAxisIndex": 0,
        "yAxisIndex": 0,
        "symbol": "none",
        "data": [1.06, 0.81, 4.44, 1.15, 1.17, 0.41, 0.19, 1.8],
        "markPoint": {
            "data": [{
                "symbol": "path://M512,512m-307.2,0a307.2,307.2,0,1,0,614.4,0,307.2,307.2,0,1,0-614.4,0Z",
                "symbolSize": 10,
                "itemStyle": {
                    "color": "#FF790C",
                    "borderColor": "#FFFFFF",
                    "borderWidth": 2
                },
                "xAxis": 4.44,
                "yAxis": "冰雪奇缘2"
            }, {
                "symbol": "path://M512,512m-307.2,0a307.2,307.2,0,1,0,614.4,0,307.2,307.2,0,1,0-614.4,0Z",
                "symbolSize": 10,
                "itemStyle": {
                    "color": "#FF790C",
                    "borderColor": "#FFFFFF",
                    "borderWidth": 2
                },
                "xAxis": 0.41,
                "yAxis": "亲爱的新年好"
            }, {
                "symbol": "path://M512,512m-307.2,0a307.2,307.2,0,1,0,614.4,0,307.2,307.2,0,1,0-614.4,0Z",
                "symbolSize": 10,
                "itemStyle": {
                    "color": "#FF790C",
                    "borderColor": "#FFFFFF",
                    "borderWidth": 2
                },
                "xAxis": 0.19,
                "yAxis": "半个喜剧"
            }, {
                "symbol": "path://M512,512m-307.2,0a307.2,307.2,0,1,0,614.4,0,307.2,307.2,0,1,0-614.4,0Z",
                "symbolSize": 10,
                "itemStyle": {
                    "color": "#FF790C",
                    "borderColor": "#FFFFFF",
                    "borderWidth": 2
                },
                "xAxis": 1.8,
                "yAxis": "星球大战：天行者崛起"
            }]
        },
        "markArea": {
            "itemStyle": {
                "color": "#FF790C"
            },
            "silent": true,
            "data": [
                [{
                    "xAxis": 0.8,
                }, {
                    "xAxis": 1.2
                }]
            ]
        }
    }]
}