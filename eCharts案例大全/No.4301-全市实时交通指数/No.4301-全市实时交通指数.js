option = {
    "backgroundColor": "rgb(0, 16, 42)",
    "textStyle": {
        "color": "#333333"
    },
    "title": {
        "show": true,
        "text": "全市实时交通指数",
        "textStyle": {
            "fontSize": 18,
            "color": "rgba(255, 255, 255, 1)"
        },
        "left": 10,
        "top": 5
    },
    "legend": {
        "show": true,
        "right": "10%",
        "top": 15,
        "textStyle": {
            "color": "#667A95"
        }
    },
    "tooltip": {
        "show": true,
        "trigger": "item",
        "axisPointer": {
            "type": "line"
        },
        "backgroundColor": "rgba(50,50,50,0.7)",
        "borderColor": "#333",
        "borderWidth": 0,
        "padding": 5,
        "textStyle": {
            "color": "#fff",
            "fontSize": 14
        }
    },
    "toolbox": {
        "show": false,
        "orient": "horizontal",
        "itemSize": 15,
        "itemGap": 10,
        "showTitle": true,
        "feature": {
            "dataZoom": {},
            "restore": {},
            "dataView": {},
            "magicType": {},
            "brush": {},
            "saveAsImage": {}
        }
    },
    "dataset": {
        "dimensions": [
            "时间点",
            "今日交通指数",
            "昨日交通指数"
        ],
        "source": [
            [
                "01:00",
                "0.1",
                "0.1"
            ],
            [
                "02:00",
                "0.2",
                "0.1"
            ],
            [
                "03:00",
                "0.2",
                "0.2"
            ],
            [
                "04:00",
                "0.3",
                "0.2"
            ],
            [
                "05:00",
                "1.3",
                "1"
            ],
            [
                "06:00",
                "1.9",
                "1.3"
            ],
            [
                "07:00",
                "4.1",
                "4.2"
            ],
            [
                "08:00",
                "4.6",
                "4.5"
            ],
            [
                "09:00",
                "3.9",
                "3.5"
            ],
            [
                "10:00",
                "5.3",
                "5.8"
            ],
            [
                "11:00",
                "5.9",
                "6"
            ],
            [
                "12:00",
                "7.9",
                "6.1"
            ],
            [
                "13:00",
                "6.1",
                "5.3"
            ],
            [
                "14:00",
                "4.2",
                "3.9"
            ],
            [
                "15:00",
                "5.9",
                "5.3"
            ],
            [
                "16:00",
                "6.1",
                "5.3"
            ],
            [
                "17:00",
                "8.6",
                "8.5"
            ],
            [
                "18:00",
                "9.1",
                "8.9"
            ],
            [
                "19:00",
                "",
                "5.4"
            ],
            [
                "20:00",
                "",
                "5.2"
            ],
            [
                "21:00",
                "",
                "4.9"
            ],
            [
                "22:00",
                "",
                "4.3"
            ],
            [
                "23:00",
                "",
                "3.5"
            ],
            [
                "24:00",
                "",
                "2.8"
            ]
        ],
        "sourceHeader": false
    },
    "xAxis": {
        "show": true,
        "type": "category",
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#667A95"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {}
        },
        "axisLabel": {
            "show": true,
            "color": "rgb(203,206,213)"
        }
    },
    "yAxis": {
        "show": true,
        "type": "value",
        "axisLabel": {
            "show": true,
            "color": function(value, index) {
                if (index === 1) {
                    return "rgb(57,113,86)"
                } else if (index === 2) {
                    return "rgb(149,159,98)"
                } else if (index === 3) {
                    return "rgb(161,144,62)"
                } else if (index === 4) {
                    return "rgb(210,116,55)"
                } else if (index === 5) {
                    return "rgb(228,51,57)"
                } else {
                    return "rgb(255,255,255)"
                }
            },
        },
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitLine": {
            "lineStyle": {
                "type": "dashed",
                "color": ["rgb(255,255,255)", "rgb(57,113,86)", "rgb(149,159,98)", "rgb(161,144,62)", "rgb(210,116,55)", "rgb(228,51,57)"]
            }
        }
    },
    "geo": {
        "show": false,
        "map": "china"
    },
    "series": [{
            "type": "line",
            "name": "今日",
            "coordinateSystem": "cartesian2d",
            "encode": {
                "x": "\u65f6\u95f4\u70b9",
                "y": "\u4eca\u65e5\u4ea4\u901a\u6307\u6570"
            },
            "symbol": "none",
            "smooth": true,
            "areaStyle": {
                "color": {
                    "type": "linear",
                    "x": 0,
                    "y": 0,
                    "x2": 0,
                    "y2": 1,
                    "colorStops": [{
                        "offset": 0,
                        "color": "#E7323B" // 0% 处的颜色
                    }, {
                        "offset": 0.5,
                        "color": "#ECB745" // 100% 处的颜色
                    }, {
                        "offset": 1,
                        "color": "#80E98A" // 100% 处的颜色
                    }],
                    "global": false // 缺省为 false
                },
                "opacity": 0.3
            },
            "lineStyle": {
                "color": {
                    "type": "linear",
                    "x": 0,
                    "y": 0,
                    "x2": 0,
                    "y2": 1,
                    "colorStops": [{
                        "offset": 0,
                        "color": "#E7323B" // 0% 处的颜色
                    }, {
                        "offset": 0.5,
                        "color": "#ECB745" // 100% 处的颜色
                    }, {
                        "offset": 1,
                        "color": "#80E98A" // 100% 处的颜色
                    }],
                    "global": false // 缺省为 false
                }
            }
        },
        {
            "type": "line",
            "name": "昨日",
            "coordinateSystem": "cartesian2d",
            "encode": {
                "x": "\u65f6\u95f4\u70b9",
                "y": "\u6628\u65e5\u4ea4\u901a\u6307\u6570"
            },
            "symbol": "none",
            "smooth": true,
            "lineStyle": {
                "color": "rgb(155,161,173)"
            }
        }
    ]
};