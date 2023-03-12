option = {
    backgroundColor: '#fff',
    "color": "#00AA72",
    "legend": {
        "show": false
    },
    "xAxis": {
        "type": "time",
        "boundaryGap": [
            "20%",
            "20%"
        ],
        "splitNumber": 10,
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "axisLabel": {
            "color": "#9aa5b5",
            "fontFamily": "PingFangSC"
        },
        "axisTick": {
            "show": false
        },
        "min": 1567753200000,
        "max": 1567854000000 //max为19:00
    },
    "grid": {
        "left": 10,
        "right": 20,
        "top": 10,
        "bottom": 0,
        "containLabel": true
    },
    "tooltip": {
        "trigger": "item",
        "backgroundColor": "#1d2b3a",
        "padding": [
            8,
            12
        ],
        "borderRadius": 3,
        "textStyle": {
            "fontSize": 12,
            "color": "#ffffff",
            "fontFamily": "Roboto"
        }
    },
    "yAxis": {
        "type": "value",
        "minInterval": 1,
        "axisLine": {
            "show": false
        },
        "splitLine": {
            "lineStyle": {
                "color": "#f2f4f6"
            }
        },
        "axisLabel": {
            "color": "#9aa5b5",
            "fontFamily": "PingFangSC"
        },
        "axisTick": {
            "show": false
        }
    },
    "series": {
        "name": "概览",
        "type": "bar",
        "barWidth": 12,
        "barCategoryGap": 17,
        "showSymbol": false,
        "data": [
            [
                1567760400000,
                0,
                1567756800000,
                1567764000000
            ],
            [
                1567767600000,
                0,
                1567764000000,
                1567771200000
            ],
            [
                1567774800000,
                0,
                1567771200000,
                1567778400000
            ],
            [
                1567782000000,
                0,
                1567778400000,
                1567785600000
            ],
            [
                1567789200000,
                0,
                1567785600000,
                1567792800000
            ],
            [
                1567796400000,
                0,
                1567792800000,
                1567800000000
            ],
            [
                1567803600000,
                0,
                1567800000000,
                1567807200000
            ],
            [
                1567810800000,
                0,
                1567807200000,
                1567814400000
            ],
            [
                1567818000000,
                0,
                1567814400000,
                1567821600000
            ],
            [
                1567825200000,
                0,
                1567821600000,
                1567828800000
            ],
            [
                1567832400000,
                0,
                1567828800000,
                1567836000000
            ],
            [
                1567839600000,
                2,
                1567836000000,
                1567843200000
            ],
            [
                1567846800000,
                {
                 value: 2,
                 itemStyle: {
                     color : 'red'
                 }
                },
                1567843200000,
                1567850400000
            ]
        ],
        "itemStyle": {
            "emphasis": {
                "shadowColor": "rgba(0, 170, 114, 0.7)",
                "shadowBlur": 8
            }
        }
    }
}