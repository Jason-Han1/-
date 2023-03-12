option = {
    /*具体请切换版本*/
    "color": [
        "#f6ab32",
        "#f57e46",
        "#e35857",
        "#ac58c2",
        "#4eb468",
        "#51c4d0",
        "#5aabe6",
        "#6f7fe7"
    ],
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        },
        "textStyle": {
            "color": "#fff"
        }
    },
    "legend": {
        "data": [
            "人员费用",
            "专项",
            "团队建设",
            "渠道建设",
            "市场",
            "销售",
            "实施服务",
            "费用合计"
        ],
        "top": 17
    },
    "toolbox": {
        "show": false,
        "orient": "vertical",
        "x": "right",
        "y": "center",
        "feature": {
            "mark": {
                "show": true
            },
            "dataView": {
                "show": true,
                "readOnly": false
            },
            "magicType": {
                "show": true,
                "type": [
                    "line",
                    "bar",
                    "stack",
                    "tiled"
                ]
            },
            "restore": {
                "show": true
            },
            "saveAsImage": {
                "show": true
            }
        }
    },
    "calculable": true,
    "xAxis": {
        "type": "category",
        boundaryGap: ['20%', '90%'],
        "data": [
            "IBM"
        ],
        "axisTick": {
            "show": false
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#439cdc",
                /*办法3设置介个!*/
                "shadowBlur": 1,
                "shadowColor":"#439cdc",
                "shadowOffsetY": 1
            }
        },

        "axisLabel": {
            "textStyle": {
                "color": "#333333"
            }
        }
    },
    "yAxis": [
        {
            "type": "value",
            "axisLabel": {
                "textStyle": {
                    "color": "#333333"
                }
            },
            "splitLine": {
                "show": false
            },
            "axisLine": {
                "show": true,
                "lineStyle": {
                "color": "#439cdc",
                "shadowBlur": 1,
                "shadowColor":"#439cdc",
                "shadowOffsetY": 1
            }
            },
            "axisTick": {
                "show": false
            }
        }
    ],
    "series": [
        {
            "name": "人员费用",
            "type": "bar",
            "barWidth": 35,
            "stack": "再来一次",
            "data": [
                "0"
            ]
        },
        {
            "name": "专项",
            "type": "bar",
            "barWidth": 35,
            "stack": "再来一次",
            "data": [
                "9"
            ]
        },
        {
            "name": "团队建设",
            "type": "bar",
            "barWidth": 35,
            "stack": "再来一次",
            "data": [
                "9"
            ]
        },
        {
            "name": "渠道建设",
            "type": "bar",
            "barWidth": 35,
            "stack": "再来一次",
            "data": [
                "9"
            ]
        },
        {
            "name": "市场",
            "type": "bar",
            "barWidth": 35,
            "stack": "再来一次",
            "data": [
                "0"
            ]
        },
        {
            "name": "销售",
            "type": "bar",
            "barWidth": 35,
            "stack": "再来一次",
            "data": [
                "0"
            ]
        },
        {
            "name": "实施服务",
            "type": "bar",
            "barWidth": 35,
            "stack": "再来一次",
            "data": [
                "0"
            ]
        },
        {
            "name": "费用合计",
            "type": "bar",
            "barWidth": 35,
            "stack": "再来一次",
            "data": [
                "9"
            ]
        }
    ]
}