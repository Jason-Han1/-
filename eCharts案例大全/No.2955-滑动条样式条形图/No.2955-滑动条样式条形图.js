option = {
    "xAxis": [
        {
            "show": false,
            "type": "value",
            "axisLabel": {
                "interval": "auto",
                "fontWeight": "normal",
                "strikethrough": false,
                "color": "#333",
                "underline": false,
                "fontFamily": "Microsoft Yahei",
                "fontSize": 14,
                "fontStyle": "normal",
                "rotate": 0,
                "show": true
            },
            "axisLine": {
                "show": false
            },
            "nameLocation": "end",
            "name": "",
            "nameTextStyle": {
                "fontWeight": "normal",
                "strikethrough": false,
                "color": "#333",
                "underline": false,
                "fontFamily": "Microsoft Yahei",
                "fontSize": 14,
                "fontStyle": "normal"
            },
            "splitLine": {
                "show": false
            }
        }
    ],
    "yAxis": [
        {
            "type": "category",
            "inverse": true,
            "axisLabel": {
                "show": true,
                "textStyle": {
                },
                formatter: (value) => {
                    console.log(value);
                    return value;
                },
                "rotate": 0,
                "fontFamily": "Microsoft Yahei",
                "fontSize": 14,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "color": "#333"
            },
            "splitLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "axisLine": {
                "show": false
            },
            "data": [
                "海鲜",
                "打印机用",
                "复印机用",
                "日用品",
                "点心",
                "谷类/麦片",
                "肉/家禽",
                "特制品"
            ],
            "nameTextStyle": {
                "fontWeight": "normal",
                "strikethrough": false,
                "color": "#333",
                "underline": false,
                "fontFamily": "Microsoft Yahei",
                "fontSize": 14,
                "fontStyle": "normal"
            },
            "name": "",
            "splitArea": {
                "areaStyle": {
                    "color": [
                        "rgba(200, 200, 200, 0.1)",
                        "transparent"
                    ]
                }
            }
        },
        {
            "type": "category",
            "axisTick": {
                "show": false
            },
            "axisLine": {
                "show": false
            },
            "show": true,
            "axisLabel": {
                "textStyle": {
                    "fontSize": "12"
                },
                "show": true,
                "rotate": 0,
                "fontFamily": "Microsoft Yahei",
                "fontSize": 14,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "color": "#333"
            },
            "data": [
                701,
                623,
                559,
                393,
                332,
                308,
                165,
                100
            ],
            "nameTextStyle": {
                "fontWeight": "normal",
                "strikethrough": false,
                "color": "#333",
                "underline": false,
                "fontFamily": "Microsoft Yahei",
                "fontSize": 14,
                "fontStyle": "normal"
            },
            "name": "",
            "splitLine": {
                "show": false
            },
            "splitArea": {
                "areaStyle": {
                    "color": [
                        "rgba(200, 200, 200, 0.1)",
                        "transparent"
                    ]
                }
            }
        }
    ],
    "grid": [
        {
            "show": false,
            "containLabel": true,
            "left": 10,
            "right": 40,
            "bottom": 10,
            "top": 10
        }
    ],
    "title": [],
    "series": [
        {
            "name": "值",
            "type": "bar",
            "zlevel": 1,
            "itemStyle": {
                "normal": {
                    "barBorderRadius": 30,
                    "color": "#26a69a"
                },
                "borderRadius": 5
            },
            "barWidth": 20,
            "data": [
                {
                    "value": [
                        701,
                        0
                    ],
                    "name": "海鲜"
                },
                {
                    "value": [
                        623,
                        1
                    ],
                    "name": "打印机用"
                },
                {
                    "value": [
                        559,
                        2
                    ],
                    "name": "复印机用"
                },
                {
                    "value": [
                        393,
                        3
                    ],
                    "name": "日用品"
                },
                {
                    "value": [
                        332,
                        4
                    ],
                    "name": "点心"
                },
                {
                    "value": [
                        308,
                        5
                    ],
                    "name": "谷类/麦片"
                },
                {
                    "value": [
                        165,
                        6
                    ],
                    "name": "肉/家禽"
                },
                {
                    "value": [
                        100,
                        7
                    ],
                    "name": "特制品"
                }
            ],
            "label": {
                "fontWeight": "normal",
                "strikethrough": false,
                "color": "auto",
                "underline": false,
                "fontFamily": "Microsoft Yahei",
                "fontSize": 14,
                "fontStyle": "normal",
                "rotate": 0,
                "show": false,
                "align": "center"
            },
            "barMaxWidth": 40,
            "markLine": {
                "label": {
                    "color": "#26a69a"
                }
            }
        },
        {
            "name": "背景",
            "type": "bar",
            "barWidth": 20,
             "barGap": '-100%',
            "data": [
                {
                    "value": [
                        800,
                        0
                    ],
                    "name": "海鲜"
                },
                {
                    "value": [
                        800,
                        1
                    ],
                    "name": "打印机用"
                },
                {
                    "value": [
                        800,
                        2
                    ],
                    "name": "复印机用"
                },
                {
                    "value": [
                        800,
                        3
                    ],
                    "name": "日用品"
                },
                {
                    "value": [
                        800,
                        4
                    ],
                    "name": "点心"
                },
                {
                    "value": [
                        800,
                        5
                    ],
                    "name": "谷类/麦片"
                },
                {
                    "value": [
                        800,
                        6
                    ],
                    "name": "肉/家禽"
                },
                {
                    "value": [
                        800,
                        7
                    ],
                    "name": "特制品"
                }
            ],
            "itemStyle": {
                "normal": {
                    "color": "rgba(105,131,242,.3)",
                    "barBorderRadius": 30
                },
                "borderRadius": [
                    5,
                    5,
                    0,
                    0
                ]
            },
            "label": {
                "fontWeight": "normal",
                "strikethrough": false,
                "color": "auto",
                "underline": false,
                "fontFamily": "Microsoft Yahei",
                "fontSize": 14,
                "fontStyle": "normal",
                "rotate": 0,
                "show": false,
                "align": "center"
            },
            "barMaxWidth": 40,
            "markLine": {
                "label": {
                    "color": "#26a69a"
                }
            }
        },
        {
            "name": "内圆",
            "type": "scatter",
            "hoverAnimation": false,
            "data": [
                {
                    "value": [
                        701,
                        0
                    ],
                    "name": "海鲜"
                },
                {
                    "value": [
                        623,
                        1
                    ],
                    "name": "打印机用"
                },
                {
                    "value": [
                        559,
                        2
                    ],
                    "name": "复印机用"
                },
                {
                    "value": [
                        393,
                        3
                    ],
                    "name": "日用品"
                },
                {
                    "value": [
                        332,
                        4
                    ],
                    "name": "点心"
                },
                {
                    "value": [
                        308,
                        5
                    ],
                    "name": "谷类/麦片"
                },
                {
                    "value": [
                        165,
                        6
                    ],
                    "name": "肉/家禽"
                },
                {
                    "value": [
                        100,
                        7
                    ],
                    "name": "特制品"
                }
            ],
            "yAxisIndex": 0,
            "symbolSize": 22,
            "itemStyle": {
                "normal": {
                    "color": "#26a69a",
                    "opacity": 1
                }
            },
            "zlevel": 2,
            "label": {
                "fontWeight": "normal",
                "strikethrough": false,
                "color": "auto",
                "underline": false,
                "fontFamily": "Microsoft Yahei",
                "fontSize": 14,
                "fontStyle": "normal",
                "rotate": 0,
                "show": false,
                "align": "center"
            }
        },
        {
            "name": "外圆",
            "type": "scatter",
            "hoverAnimation": false,
            "data": [
                {
                    "value": [
                        701,
                        0
                    ],
                    "name": "海鲜"
                },
                {
                    "value": [
                        623,
                        1
                    ],
                    "name": "打印机用"
                },
                {
                    "value": [
                        559,
                        2
                    ],
                    "name": "复印机用"
                },
                {
                    "value": [
                        393,
                        3
                    ],
                    "name": "日用品"
                },
                {
                    "value": [
                        332,
                        4
                    ],
                    "name": "点心"
                },
                {
                    "value": [
                        308,
                        5
                    ],
                    "name": "谷类/麦片"
                },
                {
                    "value": [
                        165,
                        6
                    ],
                    "name": "肉/家禽"
                },
                {
                    "value": [
                        100,
                        7
                    ],
                    "name": "特制品"
                }
            ],
            "yAxisIndex": 0,
            "symbolSize": 28,
            "symbol": "path://M512 960C264.576 960 64 759.424 64 512S264.576 64 512 64s448 200.576 448 448-200.576 448-448 448z m0-268.8a179.2 179.2 0 1 0 0-358.4 179.2 179.2 0 0 0 0 358.4z",
            "itemStyle": {
                "color": "rgb(255, 255, 255)",
                "opacity": 1,
                "borderColor": "rgba(44, 111, 226, 0.2)",
                "borderWidth": 2
            },
            "zlevel": 3,
            "label": {
                "fontWeight": "normal",
                "strikethrough": false,
                "color": "auto",
                "underline": false,
                "fontFamily": "Microsoft Yahei",
                "fontSize": 14,
                "fontStyle": "normal",
                "rotate": 0,
                "show": false,
                "align": "center"
            }
        }
    ],
    "legend": {
        "data": [
            "库存量"
        ],
        "type": "scroll",
        "show": false,
        "textStyle": {
            "fontWeight": "normal",
            "strikethrough": false,
            "color": "#888888",
            "underline": false,
            "fontFamily": "Microsoft Yahei",
            "fontSize": 12,
            "fontStyle": "normal"
        }
    },
    "tooltip": {
        "show": true,
        "trigger": "axis",
        "axisPointer": {
            "type": "none"
        },
        "backgroundColor": "rgba(255, 255, 255, .9)",
        "textStyle": {
            "color": "#333",
            "fontWeight": "normal",
            "strikethrough": false,
            "underline": false,
            "fontFamily": "Microsoft Yahei",
            "fontSize": 14,
            "fontStyle": "normal"
        },
        "extraCssText": {
            "box-shadow": "0 2px 10px rgba(0,0,0,.2)"
        },
        "borderColor": "rgba(204, 204, 204, .9)",
        "borderWidth": 1
    },
    "color": [
        {
            "colorStops": [
                {
                    "offset": 0,
                    "color": "rgb(56, 161, 217)"
                },
                {
                    "offset": 1,
                    "color": "rgb(99, 181, 225)"
                }
            ],
            "x": 0,
            "y": 0,
            "x2": 0,
            "y2": 1,
            "type": "linear",
            "global": false
        },
        {
            "colorStops": [
                {
                    "offset": 0,
                    "color": "rgb(50, 196, 232)"
                },
                {
                    "offset": 1,
                    "color": "rgb(96, 209, 237)"
                }
            ],
            "x": 0,
            "y": 0,
            "x2": 0,
            "y2": 1,
            "type": "linear",
            "global": false
        },
        {
            "colorStops": [
                {
                    "offset": 0,
                    "color": "rgb(102, 223, 226)"
                },
                {
                    "offset": 1,
                    "color": "rgb(145, 232, 234)"
                }
            ],
            "x": 0,
            "y": 0,
            "x2": 0,
            "y2": 1,
            "type": "linear",
            "global": false
        },
        {
            "colorStops": [
                {
                    "offset": 0,
                    "color": "rgb(158, 229, 184)"
                },
                {
                    "offset": 1,
                    "color": "rgb(198, 240, 213)"
                }
            ],
            "x": 0,
            "y": 0,
            "x2": 0,
            "y2": 1,
            "type": "linear",
            "global": false
        },
        {
            "colorStops": [
                {
                    "offset": 0,
                    "color": "rgb(254, 218, 95)"
                },
                {
                    "offset": 1,
                    "color": "rgb(254, 230, 146)"
                }
            ],
            "x": 0,
            "y": 0,
            "x2": 0,
            "y2": 1,
            "type": "linear",
            "global": false
        },
        {
            "colorStops": [
                {
                    "offset": 0,
                    "color": "rgb(254, 158, 127)"
                },
                {
                    "offset": 1,
                    "color": "rgb(254, 196, 178)"
                }
            ],
            "x": 0,
            "y": 0,
            "x2": 0,
            "y2": 1,
            "type": "linear",
            "global": false
        },
        {
            "colorStops": [
                {
                    "offset": 0,
                    "color": "rgb(250, 114, 146)"
                },
                {
                    "offset": 1,
                    "color": "rgb(252, 163, 184)"
                }
            ],
            "x": 0,
            "y": 0,
            "x2": 0,
            "y2": 1,
            "type": "linear",
            "global": false
        },
        {
            "colorStops": [
                {
                    "offset": 0,
                    "color": "rgb(224, 98, 172)"
                },
                {
                    "offset": 1,
                    "color": "rgb(232, 141, 194)"
                }
            ],
            "x": 0,
            "y": 0,
            "x2": 0,
            "y2": 1,
            "type": "linear",
            "global": false
        },
        {
            "colorStops": [
                {
                    "offset": 0,
                    "color": "rgb(230, 144, 208)"
                },
                {
                    "offset": 1,
                    "color": "rgb(239, 186, 226)"
                }
            ],
            "x": 0,
            "y": 0,
            "x2": 0,
            "y2": 1,
            "type": "linear",
            "global": false
        },
        {
            "colorStops": [
                {
                    "offset": 0,
                    "color": "rgb(231, 188, 242)"
                },
                {
                    "offset": 1,
                    "color": "rgb(246, 231, 250)"
                }
            ],
            "x": 0,
            "y": 0,
            "x2": 0,
            "y2": 1,
            "type": "linear",
            "global": false
        },
        {
            "colorStops": [
                {
                    "offset": 0,
                    "color": "rgb(131, 120, 232)"
                },
                {
                    "offset": 1,
                    "color": "rgb(171, 164, 239)"
                }
            ],
            "x": 0,
            "y": 0,
            "x2": 0,
            "y2": 1,
            "type": "linear",
            "global": false
        },
        {
            "colorStops": [
                {
                    "offset": 0,
                    "color": "rgb(157, 150, 243)"
                },
                {
                    "offset": 1,
                    "color": "rgb(200, 196, 248)"
                }
            ],
            "x": 0,
            "y": 0,
            "x2": 0,
            "y2": 1,
            "type": "linear",
            "global": false
        },
        {
            "colorStops": [
                {
                    "offset": 0,
                    "color": "rgb(150, 191, 253)"
                },
                {
                    "offset": 1,
                    "color": "rgb(200, 221, 254)"
                }
            ],
            "x": 0,
            "y": 0,
            "x2": 0,
            "y2": 1,
            "type": "linear",
            "global": false
        }
    ],
    "label": {
        "distance": 5
    }
};
