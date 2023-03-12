option = {
    backgroundColor: 'black',
    "xAxis": {
        "show": false
    },
    "grid": {
        "top": 5,
        "bottom": 25,
        "left": 130,
        "right": 20
    },
    "yAxis": [{
        "show": true,
        "offset": 95,
        "data": ["1    万盛经开区", "2    合川区", "3    巫溪县", "4    铜梁区", "5    荣昌区"],
        "inverse": true,
        "axisLine": {
            "show": false
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "color": "#fff",
            "align": "left",
            "fontSize": 14
        }
    }],
    "series": [{
        "name": "框",
        "type": "bar",
        "barGap": "-100%",
        "data": [100, 100, 100, 100, 100],
        "barWidth": 25,
        "itemStyle": {
            "normal": {
                "borderWidth": 3,
                "barBorderRadius": 15,
                "color": "rgba(102, 102, 102,0.5)"
            }
        },
        "label": {
            "show": true,
            "position": "insideRight",
            "color": "#fff",
            "padding": 10
        }
    }, {
        "name": "条",
        "type": "bar",
        "yAxisIndex": 0,
        "data": [68, 63, 61, 61, 53],
        "barWidth": 25,
        "itemStyle": {
            "normal": {
                "barBorderRadius": [0, 30, 30, 0],
                "color": {
                    "x": 0,
                    "y": 0,
                    "x2": 1,
                    "y2": 0,
                    "type": "linear",
                    "global": false,
                    "colorStops": [{
                        "offset": 0,
                        "color": "#554ADF"
                    }, {
                        "offset": 1,
                        "color": "#9275FD"
                    }]
                }
            }
        }
    }]
}