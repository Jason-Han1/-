option = {
    "dataset": {
        "source": [
            ["日期", "data1", "data2", "data3"],
            ["2013", 13000, 3000, 4000],
            ["2014", 16000, 7000, 8000],
            ["2015", 27000, 11000, 10000],
            ["2016", 20000, 10000, 8000],
            ["2017", 55000, 15000, 12000],
            ["2018", 28000, 11000, 16000]
        ]
    },
    "grid": {
        "left": 20,
        "right": 40,
        "bottom": 50,
        "top": 20,
        "containLabel": true
    },
    "xAxis": [{
        "type": "value",
        "axisLabel": {
            "color": "#999",
            "fontSize": 12,
            "fontWeight": "normal"
        },
        "name": "",
        "show": true,
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "#f0f0f0"
            }
        },
        "axisLine": {
            "lineStyle": {
                "color": "#f0f0f0"
            },
            "show": true
        },
        "nameTextStyle": {
            "color": "#999"
        }
    }],
    "yAxis": [{
        "type": "category",
        "axisLabel": {
            "color": "#999",
            "fontSize": 12,
            "fontWeight": "normal"
        },
        "boundaryGap": true,
        "name": "",
        "show": true,
        "splitLine": {
            "show": false,
            "lineStyle": {
                "color": "#f0f0f0"
            }
        },
        "axisLine": {
            "lineStyle": {
                "color": "#f0f0f0"
            },
            "show": true
        },
        "nameTextStyle": {
            "color": "#999"
        }
    }],
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        },
    },
    "legend": {
        "show": true,
        "type": "scroll",
        "bottom": 15,
        "left": "center"
    },
    "series": [{
        "type": "bar",
        "name": "data1",
        "itemStyle": {
            "barBorderRadius": 0
        },
        "barGap": "50%",
        "stack": "total",
        "label": {
            "color": "",
            "fontSize": 12,
            "fontWeight": "normal",
            "show": false
        },
        "barMaxWidth": 22.22222222222222,
        "barWidth": 22.22222222222222,
        "animation": true
    }, {
        "type": "bar",
        "name": "data2",
        "itemStyle": {
            "barBorderRadius": 0
        },
        "barGap": "50%",
        "stack": "total",
        "label": {
            "color": "",
            "fontSize": 12,
            "fontWeight": "normal",
            "show": false
        },
        "barMaxWidth": 22.22222222222222,
        "barWidth": 22.22222222222222,
        "animation": true
    }, {
        "type": "bar",
        "name": "data3",
        "itemStyle": {
            "barBorderRadius": 0
        },
        "barGap": "50%",
        "stack": "total",
        "label": {
            "color": "",
            "fontSize": 12,
            "fontWeight": "normal",
            "show": false
        },
        "barMaxWidth": 22.22222222222222,
        "barWidth": 22.22222222222222,
        "animation": true
    }],
    "title": {
        "show": false
    },
    "dataZoom": [{
        "type": "inside",
        "filterMode": "empty",
        "disabled": false,
        "show": false,
        "yAxisIndex": 0
    }]
}