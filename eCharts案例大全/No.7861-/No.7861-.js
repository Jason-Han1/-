option = {
    "color": ["#00e3ec", "#f7a059", "#fff45c", "#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
    "title": {
        "right": 16,
        "top": 16
    },
    "legend": {
        "right": 16,
        "top": 28,
        "show": false,
        "selectedMode": "multiple",
        "selected": {},
        "data": ["2017"]
    },
    "tooltip": {
        "trigger": "item"
    },
    "grid": {
        "top": 70,
        "right": 120,
        "left": 120,
        "containLabel": true
    },
    "xAxis": {
        "type": "category",
        "data": ["1", "2", "3", "4", "5"],
        "axisLine": {
            "show": false,
            "lineStyle": {
                "color": null
            }
        },
        "axisLabel": {
            "color": "#125187"
        },
        "axisTick": {
            "show": false
        },
        "boundaryGap": false,
        "name": "日\n期",
        "nameTextStyle": {
            "color": "#125187"
        },
        "nameGap": 15
    },
    "yAxis": [{
        "type": "value",
        "axisLine": {
            "show": false,
            "lineStyle": {
                "color": null
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "show": true,
            "color": "#125187"
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "red"
            },
        },
        "name": "单位：亿元",
        "nameGap": 26,
        "nameTextStyle": {
            "color": "#125187"
        }
    }, {
        "type": "value",
        "max": 100,
        "show": false
    }],
    "series": [{
        "hy": true,
        "data": ["100", "100", "100", "100", "100", ""],
        "type": "bar",
        "barWidth": 10,
        "barGap": "-100%",
        "yAxisIndex": 1,
        "itemStyle": {
            "barBorderRadius": 30,
            "color": "rgba(180, 180, 180, 0.2)"
        }
    }, {
        "name": "2017",
        "data": [15, 24, 66, 22, 5],
        "type": "bar",
        "barWidth": 10,
        "itemStyle": {
            "barBorderRadius": 30
        }
    }]
}