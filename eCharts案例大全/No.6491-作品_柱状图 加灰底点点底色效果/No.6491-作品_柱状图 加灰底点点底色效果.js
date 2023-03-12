option = {
    "tooltip": {
        "axisPointer": {
            "type": "none"
        },
        "trigger": "axis"
    },
    "legend": {
        "left": 50,
        "bottom": 14,
        "icon": "circle",
        "itemWidth": 10,
        "selectedMode": false,
        "orient": "horizontal"
    },
    "grid": {
        "x": 50,
        "y": 65,
        "x2": 50,
        "y2": 80,
        "borderWidth": 1
    },
    "xAxis": {
        "data": [
            "部门1",
            "部门2",
            "部门3",
            "部门4",
            "部门5",
            "部门6",
            "部门7",
            "部门8",
            "部门9",
            "部门10"
        ],
        "axisLine": {
            "lineStyle": {
                "color": "#F2F4F8"
            }
        },
        "axisLabel": {
            "interval": 0,
            "rotate": 40,
            "textStyle": {
                "color": "#666"
            }
        },
        "axisTick": {
            "show": false,
            "alignWithLabel": true
        }
    },
    "yAxis": [{
        "name": "工作日",
        "splitLine": {
            "show": false
        },
        "splitArea": {
            "show": true
        },
        "axisLine": {
            "show": false,
            "lineStyle": {
                "color": "#bbb"
            }
        },
        "axisTick": {
            "show": false,
            "alignWithLabel": true
        },
        "axisLabel": {
            "interval": 0,
            "textStyle": {
                "color": "#bbb"
            }
        }
    }],
    "series": [{
            "name": "督办办理时长",
            "type": "bar",
            "barWidth": 12,
            "itemStyle": {
                "normal": {
                    "color": {
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "type": "linear",
                        "global": false,
                        "colorStops": [{
                                "offset": 0,
                                "color": "#89D8FE"
                            },
                            {
                                "offset": 1,
                                "color": "#458EF3"
                            }
                        ]
                    },
                    "barBorderRadius": [
                        12,
                        12,
                        0,
                        0
                    ]
                }
            },
            "data": [
                25,
                45,
                80,
                60,
                32,
                100,
                72,
                55,
                60,
                40
            ]
        },
        {
            "type": "pictorialBar",
            "symbol": "rect",
            "itemStyle": {
                "color": "#EBEEF5",
                "barBorderRadius": 2
            },
            "emphasis": {
                "itemStyle": {
                    "color": "#EBEEF5",
                    "barBorderRadius": 2
                }
            },
            "tooltip": {
                "show": false
            },
            "silent": true,
            "symbolRepeat": true,
            "symbolSize": [
                12,
                4
            ],
            "symbolMargin": 1,
            "z": -10,
            "data": [
                150,
                150,
                150,
                150,
                150,
                150,
                150,
                150,
                150,
                150
            ]
        }
    ]
};