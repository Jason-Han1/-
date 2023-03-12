var option = {
    "backgroundColor": "#051E44",
    "grid": {
        "left": 50,
        "right": 50,
        "top": 20,
        "bottom": 20,
        "containLabel": true
    },
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        },
        "textStyle": {
            "align": "left",
            "fontSize": 18,
            "color": "#fff",
            "fontStyle": "normal",
            "fontWeight": "normal",
            "fontFamily": "sans-serif"
        },
        "extraCssText": "box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2)",
        "showContent": true,
        "alwaysShowContent": false,
        "backgroundColor": "rgba(50,50,50,0.7)",
        "borderColor": "#333"
    },
    "xAxis": {
        "type": "value",
        "max": 120,
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "axisLabel": {
            "show": true,
            textStyle: {
                color: '#fff',
                fontSize: 10
            }
        },
        "axisTick": {
            "show": false
        },
    },
    "yAxis": {
        "type": "category",
        offset: 10,
        "axisLine": {
            "show": true,
            lineStyle: {
                color: '#B3AFA1',
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "fontSize": 10,
                "color": "#fff"
            }
        },
        "data": ["工位1", "工位2", "工位3", "工位4",
            '工位5', '工位6', '工位7', '工位8'
        ]
    },
    "series": [{
        name: 'stackleft',
        "type": "bar",
        "barWidth": 6,
        "stack": "b",
        "legendHoverLink": false,
        "itemStyle": {
            "normal": {
                "color": "transparent"
            }
        },
        tooltip: {
            show: false
        },
        "data": [1, 1, 1, 1, 1, 1, 1, 1]
    }, {
        name: 'GDP',
        "type": "bar",
        "barWidth": 12,
        "stack": "b",
        "legendHoverLink": false,
        "silent": true,
        "itemStyle": {
            "normal": {
                "barBorderRadius": 30,
                "color": {
                    "type": "linear",
                    "x": 0,
                    "y": 0,
                    "x2": 1,
                    "y2": 0,
                    "colorStops": [{
                        "offset": 0,
                        "color": "#1FDFE9"
                    }, {
                        "offset": 1,
                        "color": "#96FAFF"
                    }],
                    "globalCoord": false
                }
            }
        },
        "data": [98, 95, 56, 90, 30, 20, 10, 100]
    }, {
        name: 'bg',
        tooltip: {
            show: false
        },
        "type": "bar",
        "barWidth": 12,
        "barGap": "-150%",
        "itemStyle": {
            "normal": {
                "barBorderRadius": 30,
                "color": "rgba(0,0,0,0)",
                "borderWidth": 1,
                "borderColor": "#736C56"
            }
        },
        "data": [120, 120, 120, 120, 120, 120, 120, 120],
        "z": 1
    }]
};