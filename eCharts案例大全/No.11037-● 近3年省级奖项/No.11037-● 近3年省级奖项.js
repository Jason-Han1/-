option = {
    "backgroundColor": "transparent",
    "title": {
        "show": false,
        "text": "● 近3年省级奖项",
        "textStyle": {
            "color": "#fff",
            "fontSize": 14
        }
    },
    "textStyle": {
        "color": "#6692e2",
        "fontSize": 14
    },
    "tooltip": {
        "trigger": "axis",
        "backgroundColor": "rgba(51,51,115,0.4)",
        "confine": true,
        "padding": [5, 10, 5, 10],
        "borderColor": "#403b94",
        "borderWidth": "1",
        "axisPointer": {
            "show": true,
            "lineStyle": {
                "color": {
                    "x": 0,
                    "y": 0,
                    "x2": 0,
                    "y2": 1,
                    "type": "linear",
                    "global": false,
                    "colorStops": [{
                        "offset": 0,
                        "color": "rgba(88,81,199,1)"
                    }, {
                        "offset": 0.5,
                        "color": "rgba(88,81,199,0.8)"
                    }, {
                        "offset": 1,
                        "color": "rgba(29,27,68, 0.3)"
                    }]
                },
                "width": 2
            }
        }
    },
    "legend": {
        "bottom": 0,
        "width": "100%",
        "itemWidth": 14,
        "itemHeight": 14,
        "selectedMode": false,
        "textStyle": {
            "color": []
        },
        "data": ["特等奖", "优胜奖", "一等奖", "二等奖", "三等奖"]
    },
    "grid": {
        "left": "3%",
        "right": "80",
        "bottom": "30",
        "top": "30",
        "containLabel": true
    },
    "xAxis": {
        "type": "value",
        "boundaryGap": true,
        "axisLine": {
            "lineStyle": {
                "color": "#4766A6"
            }
        },
        "splitLine": {
            "show": false
        }
    },
    "yAxis": {
        "type": "category",
        "axisLine": {
            "lineStyle": {
                "color": "#4766A6"
            }
        },
        "axisTick": {
            "alignWithLabel": true
        },
        "axisLabel": {
            "margin": 20
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "type": "dotted",
                "color": "#4766A6"
            }
        },
        "data": ["2017年", "2018年", "2019年"]
    },
    "color": ["#18c8ff", "#554dc7", "#f9cf67", "#fb9633", "#e92b77", "#293fcb", "#5b9fff", "#d373e8", "#18e1ff", "#0f9cff"],
    "series": [{
        "name": "特等奖",
        "type": "bar",
        "stack": "总量",
        "label": {
            "normal": {
                "show": false,
                "position": "insideRight"
            }
        },
        "data": ["1", "2", "1"],
        "barWidth": "22px"
    }, {
        "name": "优胜奖",
        "type": "bar",
        "stack": "总量",
        "label": {
            "normal": {
                "show": false,
                "position": "insideRight"
            }
        },
        "data": ["22", "13", "23"],
        "barWidth": "22px"
    }, {
        "name": "一等奖",
        "type": "bar",
        "stack": "总量",
        "label": {
            "normal": {
                "show": false,
                "position": "insideRight"
            }
        },
        "data": ["15", "43", "43"],
        "barWidth": "22px"
    }, {
        "name": "二等奖",
        "type": "bar",
        "stack": "总量",
        "label": {
            "normal": {
                "show": false,
                "position": "insideRight"
            }
        },
        "data": ["41", "80", "118"],
        "barWidth": "22px"
    }, {
        "name": "三等奖",
        "type": "bar",
        "stack": "总量",
        "label": {
            "normal": {
                "show": false,
                "position": "insideRight"
            }
        },
        "data": ["85", "124", "226"],
        "barWidth": "22px"
    }, {
        "name": "总数",
        "type": "bar",
        barCategoryGap: '100%',
        "itemStyle": {
            "normal": {
                "label": {
                    "show": true,
                    "position": ["103%", -28],
                    "textStyle": {
                        "color": "#6692e2"
                    },
                    "padding": [5, 8, 3, 8],
                    "backgroundColor": "#2a2f58",
                    "borderRadius": 10
                },
                "color": "transparent"
            }
        },
        "data": [164, 262, 411]
    }]
}