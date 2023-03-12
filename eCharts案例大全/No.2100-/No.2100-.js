var option = {
    "tooltip": {
        "trigger": "axis",
        "textStyle": {
            "fontSize": "100%"
        }
    },
    "xAxis": {
        "type": "category",
        "axisLine": {
            "show": false,
            "lineStyle": {
                "color": "#B5B5B5"
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "margin": 30,
            "textStyle": {
                "color": "#FFF"
            },
            "fontSize": 9
        },
        "data": [
            "沈阳联动部",
            "长春联动部",
            "大连联动部",
            "哈尔滨联动部"
        ]
    },
    "yAxis": [
        {
            "type": "value",
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#B5B5B5"
                }
            },
            "splitLine": {
                "show": false
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#FFF"
                },
                "fontSize": 10
            }
        }
    ],
    "series": [
        {
            "type": "bar",
            "name": "8月保本点预算",
            "data": [
                600000,
                250000,
                92649.09,
                250000
            ],
            "barMaxWidth": "auto",
            "barWidth": 26,
            "z": -1,
            "barGap": "-100%",
            "itemStyle": {
                "color": {
                    "x": 0,
                    "y": 0,
                    "x2": 0,
                    "y2": 1,
                    "type": "linear",
                    "opacity": 0.7,
                    "global": false,
                    "colorStops": [
                        {
                            "offset": 0,
                            "color": "RGB(44,196,136,0.3)"
                        },
                        {
                            "offset": 1,
                            "color": "RGB(44,196,136,0.8)"
                        }
                    ]
                }
            }
        },
        {
            "name": "8月累计完成应收",
            "type": "bar",
            "data": [
                335926.58,
                136957.81,
                13786.31,
                40141.62
            ],
            "barMaxWidth": "auto",
            "barWidth": 26,
            "z": 4,
            "barGap": "-100%",
            "itemStyle": {
                "color": {
                    "x": 0,
                    "y": 0,
                    "x2": 0,
                    "y2": 1,
                    "type": "linear",
                    "opacity": 0.7,
                    "global": false,
                    "colorStops": [
                        {
                            "offset": 0,
                            "color": "RGB(202,170,42,0.3)"
                        },
                        {
                            "offset": 1,
                            "color": "RGB(202,170,42,0.8)"
                        }
                    ]
                }
            }
        },
        {
            "name": "8月预计应收",
            "type": "bar",
            "data": [
                600000,
                250000,
                100000,
                250000
            ],
            "z": 3,
            "barGap": "-100%",
            "barMaxWidth": "auto",
            "barWidth": 26,
            "itemStyle": {
                "color": {
                    "x": 0,
                    "y": 0,
                    "x2": 0,
                    "y2": 1,
                    "opacity": 0.7,
                    "type": "linear",
                    "global": false,
                    "colorStops": [
                        {
                            "offset": 0,
                            "color": "rgba(50,255,238,0.3)"
                        },
                        {
                            "offset": 1,
                            "color": "rgba(50,255,238,0.8)"
                        }
                    ]
                }
            }
        },
        {
            "data": [
                1,
                1,
                1,
                1
            ],
            "type": "pictorialBar",
            "symbolOffset": [
                0,
                "50%"
            ],
            "symbolSize": [
                26,
                10
            ],
            "zlevel": 2,
            "itemStyle": {
                "normal": {
                    "color": "RGB(44,196,136)"
                }
            }
        },
        {
            "data": [
                600000,
                250000,
                92649.09,
                250000
            ],
            "type": "pictorialBar",
            "symbolPosition": "end",
            "symbolOffset": [
                0,
                "-50%"
            ],
            "symbolSize": [
                26,
                10
            ],
            "zlevel": 2,
            "itemStyle": {
                "normal": {
                    "color": "RGB(44,196,136)"
                }
            }
        },
        {
            "data": [
                335926.58,
                136957.81,
                13786.31,
                40141.62
            ],
            "type": "pictorialBar",
            "symbolPosition": "end",
            "symbolOffset": [
                0,
                "-50%"
            ],
            "symbolSize": [
                26,
                10
            ],
            "zlevel": 5,
            "itemStyle": {
                "normal": {
                    "color": "#caaa2a"
                }
            }
        },
        {
            "data": [
                600000,
                250000,
                100000,
                250000
            ],
            "type": "pictorialBar",
            "symbolPosition": "end",
            "symbolOffset": [
                0,
                "-50%"
            ],
            "symbolSize": [
                26,
                10
            ],
            "zlevel": 2,
            "itemStyle": {
                "normal": {
                    "color": "rgba(50,255,238,0.8)"
                }
            }
        },
        {
            "name": "内层波浪",
            "type": "pictorialBar",
            "silent": true,
            "symbolSize": [
                47,
                16
            ],
            "symbolOffset": [
                0,
                11
            ],
            "z": 10,
            "itemStyle": {
                "normal": {
                    "color": "transparent",
                    "borderColor": "#5BFCF4",
                    "borderType": "solid",
                    "borderWidth": 8
                }
            },
            "data": [
                1,
                1,
                1,
                1
            ]
        },
        {
            "name": "内层波浪",
            "type": "pictorialBar",
            "silent": true,
            "symbolSize": [
                62,
                22
            ],
            "symbolOffset": [
                0,
                17
            ],
            "z": 10,
            "itemStyle": {
                "normal": {
                    "color": "transparent",
                    "borderColor": "#5BFCF4",
                    "borderType": "solid",
                    "borderWidth": 8
                }
            },
            "data": [
                1,
                1,
                1,
                1
            ]
        }
    ],
    "grid": {
        "top": "10%",
        "left": "15%",
        "right": "2%",
        "bottom": "25%"
    },
    "legend": {
        "data": [
            "8月保本点预算",
            "8月累计完成应收",
            "8月预计应收"
        ],
        "textStyle": {
            "fontSize": 10,
            "color": "#fff"
        },
        "itemWidth": 25,
        "itemHeight": 15,
        "itemGap": 15,
        "bottom": "3%",
        "selectedMode": false
    },
    "backgroundColor": "rgba(0, 0, 0, .7)"
}