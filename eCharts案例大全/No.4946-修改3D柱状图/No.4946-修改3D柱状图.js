option = {
    backgroundColor: '#031245',
    "textStyle": {
        "color": "#c0c3cd",
        "fontSize": 14
    },
    "toolbox": {
        "show": false,
        "feature": {
            "saveAsImage": {
                "backgroundColor": "#031245"
            },
            "restore": {}
        },
        "iconStyle": {
            "borderColor": "#c0c3cd"
        }
    },
    "legend": {
        "top": 10,
        "itemWidth": 8,
        "itemHeight": 8,
        "icon": "circle",
        "left": "center",
        "padding": 0,
        "textStyle": {
            "color": "#c0c3cd",
            "fontSize": 14,
            "padding": [2, 0, 0, 0]
        }
    },
    "color": ["#00D7E9", "rgba(0, 215, 233, 0.9)"],
    "grid": {
        "containLabel": true,
        "left": 20,
        "right": 20,
        "bottom": 10,
        "top": 40
    },
    "xAxis": {
        "nameTextStyle": {
            "color": "#c0c3cd",
            "padding": [0, 0, -10, 0],
            "fontSize": 14
        },
        "axisLabel": {
            "color": "#c0c3cd",
            "fontSize": 14,
            "interval": 0
        },
        "axisTick": {
            show: false,
            "lineStyle": {
                "color": "#384267",
                "width": 1
            },
        },
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "lineStyle": {
                "color": "#335971",
            },
            "show": true
        },
        "data": ["1月", "2月", "3月", "4月", "5月", "6月"],
        "type": "category"
    },
    "yAxis": {
        "nameTextStyle": {
            "color": "#c0c3cd",
            "padding": [0, 0, -10, 0],
            "fontSize": 14
        },
        "axisLabel": {
            "color": "#c0c3cd",
            "fontSize": 14
        },
        "axisTick": {
            "lineStyle": {
                "color": "#668092",
                "width": 1
            },
            "show": true
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "#335971",
                // "type": "dashed"
            }
        },
        "axisLine": {
            "lineStyle": {
                "color": "#668092",
                "width": 1,
                // "type": "dashed"
            },
            "show": true
        },
        "name": ""
    },
    "series": [
        {
        "data": [200, 85, 112, 275, 305, 415],
        "type": "bar",
        "barMaxWidth": "auto",
        "barWidth": 30,
        "itemStyle": {
            "color": {
                "x": 0,
                "y": 0,
                "x2": 0,
                "y2": 1,
                "type": "linear",
                "colorStops": [{
                    "offset": 0,
                    "color": "#0D5EB1"
                }, {
                    "offset": 1,
                    "color": "#00D7E9"
                }]
            }
        },
        "label": {
            "show": true,
            "position": "top",
            "distance": 10,
            "color": "#fff"
        }
    }, {
        "data": [1, 1, 1, 1, 1, 1],
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbol": "diamond",
        "symbolOffset": [0, "50%"],
        "symbolSize": [30, 15],
    }, {
        "data": [200, 85, 112, 275, 305, 415],
        "type": "pictorialBar",
        "barMaxWidth": "20",
        
        "symbolPosition": "end",
        "symbol": "diamond",
        "symbolOffset": [0, "-50%"],
        "symbolSize": [30, 12],
        "zlevel": 2
    }
    ],
    "tooltip": {
        "show": true,
        formatter: '数据:{c0}'
    }
}