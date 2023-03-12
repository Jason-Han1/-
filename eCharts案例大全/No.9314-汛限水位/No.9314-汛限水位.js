option = {
    backgroundColor: '#000000',
    "title": {
        "text": "汛限水位",
        "top": 40,
        "right": "140",
        "textStyle": {
            "color": "#f99c2e",
            "fontSize": "16"
        }
    },
    "grid": {

        "left": "100",
        "right": "100",

    },
    "yAxis": [{
        "type": "category",
        "axisLine": {
            "show": false
        },
        "data": [
            "珊溪",
            "泽雅",
            "百丈漈",
            "赵山渡",
            "仰义"
        ],
        "axisLabel": {
            "textStyle": {
                "interval": 0,
                "fontSize": "16",
                "color": "rgba(255,255,255, 0.65)"
            }
        },
        "axisTick": {
            "show": false
        },
        "inverse": true
    }],
    "xAxis": [{
        "axisLine": {
            "show": false
        },
        "type": "value",
        "axisTick": {
            "show": false
        },
        "splitLine": {
            "show": false
        },
        "axisLabel": {
            "show": false
        }
    }],
    "series": [{
            "name": "水位监测",
            "type": "bar",
            "data": [
                "93.49",
                "93.27",
                "98.73",
                "97.50",
                "81.11"
            ],
            "barWidth": 12,
            "stack": "水位",
            "label": {
                "show": true,
                "position": "right",
                "offset": [
                    -60,
                    -12
                ],
                "rich": {
                    "error": {
                        "color": "#fb4d4e",
                        "fontSize": "16"
                    },
                    "warn": {
                        "color": "#f99c2e",
                        "fontSize": "16"
                    },
                    "info": {
                        "color": "rgba(255,255,255,0.65)",
                        "fontSize": "16"
                    },
                    "errorunit": {
                        "color": "#fb4d4e",
                        "fontSize": 12
                    },
                    "warnunit": {
                        "color": "#f99c2e",
                        "fontSize": 12
                    },
                    "infounit": {
                        "color": "rgba(255,255,255,0.65)",
                        "fontSize": 12
                    }
                }
            },
            "itemStyle": {

            },
            "markLine": {
                "show": true,
                "symbol": "none",
                "data": [{
                    "xAxis": 100
                }],
                "label": {
                    "formatter": ""
                },
                "lineStyle": {
                    "color": "#ffd736"
                }
            }
        },
        {
            "name": "背景",
            "type": "bar",
            "stack": "水位",
            "data": [
                16.5,
                16,
                11,
                12.5,
                28.89
            ],
            "barWidth": 5,
            "label": {
                "show": true,
                "position": "right",
                color: "#f99c2e"
            },
            "itemStyle": {
                "normal": {
                    "color": "#0c3162"
                }
            }
        }
    ]
}