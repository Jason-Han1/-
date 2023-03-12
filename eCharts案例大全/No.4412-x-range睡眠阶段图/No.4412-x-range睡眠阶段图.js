option = {
    "color": [
        "#ff931e",
        "#1c8fbf",
        "#1f73aa",
        "#004a7b",
        "#97d7f3",
        "#adadad"
    ],
    "xAxis": {
        "type": "value",
        "min": 1608053282,
        "max": 1608082105,
        "axisLabel": {
            "color": "#ADADAD"
        },
        "axisLine": {
            "lineStyle": {
                "color": "#ADADAD"
            }
        },
        "splitLine": {
            "show": false,
            "lineStyle": {
                "color": "#e5e5e5"
            }
        },
        "axisTick": {
            "inside": true,
            "show": false
        },
        "boundaryGap": false,
        "scale": true
    },
    "dataZoom": [{
        "type": "inside",
        "xAxisIndex": 0,
        "startValue": 1608053282,
        "endValue": 1608082105
    }],
    "legend": {
        "top": "0%",
        "icon": "circle",
        "data": [{
                "name": "清醒"
            },
            {
                "name": "REM"
            },
            {
                "name": "N1"
            },
            {
                "name": "N2"
            },
            {
                "name": "N3"
            },
            {
                "name": "中断"
            },
            {
                "name": "离床"
            }
        ],
        "type": "scroll",
        "textStyle": {
            "color": "#ADADAD"
        },
        "pageTextStyle": {
            "color": "#ADADAD"
        }
    },
    "grid": {
        "right": "5%",
        "left": "10%",
        "top": "30%",
        "bottom": "25%"
    },
    "yAxis": {
        "type": "value",
        "splitNumber": 5,
        "max": 100,
        "axisLabel": {
            "show": true,
            "interval": "auto",
            "color": "#ADADAD"
        },
        "axisLine": {
            "lineStyle": {
                "color": "#ADADAD",
                "width": 1,
                "type": "dotted"
            }
        },
        "axisTick": {
            "show": false
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "type": "dashed",
                "color": "blue"
            }
        },
        "show": true
    },
    "tooltip": {
        "show": true,
        "formatter": "&nbsp;&nbsp;时间：{b} 状态：{c}",
        "trigger": "axis"
    },
    "series": [{
            "name": "清醒",
            "type": "line",
            "animation": false,
            "showSymbol": false,
            "showAllSymbol": false,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                            "xAxis": 1608053282
                        },
                        {
                            "xAxis": 1608053572
                        }
                    ]
                ],
                "animation": false,
                "itemStyle": {
                    "color": "#ff931e"
                }
            },
            "customerParma": "1"
        },
        {
            "name": "N1",
            "type": "line",
            "animation": false,
            "showSymbol": false,
            "showAllSymbol": false,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                            "xAxis": 1608053572
                        },
                        {
                            "xAxis": 1608053872
                        }
                    ]
                ],
                "animation": false,
                "itemStyle": {
                    "color": "#1c8fbf"
                }
            },
            "customerParma": "1"
        },
        {
            "name": "N2",
            "type": "line",
            "animation": false,
            "showSymbol": false,
            "showAllSymbol": false,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                            "xAxis": 1608053872
                        },
                        {
                            "xAxis": 1608055262
                        }
                    ]
                ],
                "animation": false,
                "itemStyle": {
                    "color": "#1f73aa"
                }
            },
            "customerParma": "1"
        },
        {
            "name": "N3",
            "type": "line",
            "animation": false,
            "showSymbol": false,
            "showAllSymbol": false,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                            "xAxis": 1608055262
                        },
                        {
                            "xAxis": 1608056662
                        }
                    ]
                ],
                "animation": false,
                "itemStyle": {
                    "color": "#004a7b"
                }
            },
            "customerParma": "1"
        },
        {
            "name": "N2",
            "type": "line",
            "animation": false,
            "showSymbol": false,
            "showAllSymbol": false,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                            "xAxis": 1608056662
                        },
                        {
                            "xAxis": 1608058032
                        }
                    ]
                ],
                "animation": false,
                "itemStyle": {
                    "color": "#1f73aa"
                }
            },
            "customerParma": "1"
        },
        {
            "name": "REM",
            "type": "line",
            "animation": false,
            "showSymbol": false,
            "showAllSymbol": false,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                            "xAxis": 1608058032
                        },
                        {
                            "xAxis": 1608059262
                        }
                    ]
                ],
                "animation": false,
                "itemStyle": {
                    "color": "#97d7f3"
                }
            },
            "customerParma": "1"
        },
        {
            "name": "N2",
            "type": "line",
            "animation": false,
            "showSymbol": false,
            "showAllSymbol": false,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                            "xAxis": 1608059262
                        },
                        {
                            "xAxis": 1608059992
                        }
                    ]
                ],
                "animation": false,
                "itemStyle": {
                    "color": "#1f73aa"
                }
            },
            "customerParma": "1"
        },
        {
            "name": "N3",
            "type": "line",
            "animation": false,
            "showSymbol": false,
            "showAllSymbol": false,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                            "xAxis": 1608059992
                        },
                        {
                            "xAxis": 1608061162
                        }
                    ]
                ],
                "animation": false,
                "itemStyle": {
                    "color": "#004a7b"
                }
            },
            "customerParma": "1"
        },
        {
            "name": "N2",
            "type": "line",
            "animation": false,
            "showSymbol": false,
            "showAllSymbol": false,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                            "xAxis": 1608061162
                        },
                        {
                            "xAxis": 1608062052
                        }
                    ]
                ],
                "animation": false,
                "itemStyle": {
                    "color": "#1f73aa"
                }
            },
            "customerParma": "1"
        },
        {
            "name": "REM",
            "type": "line",
            "animation": false,
            "showSymbol": false,
            "showAllSymbol": false,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                            "xAxis": 1608062052
                        },
                        {
                            "xAxis": 1608063822
                        }
                    ]
                ],
                "animation": false,
                "itemStyle": {
                    "color": "#97d7f3"
                }
            },
            "customerParma": "1"
        },
        {
            "name": "N2",
            "type": "line",
            "animation": false,
            "showSymbol": false,
            "showAllSymbol": false,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                            "xAxis": 1608063822
                        },
                        {
                            "xAxis": 1608066052
                        }
                    ]
                ],
                "animation": false,
                "itemStyle": {
                    "color": "#1f73aa"
                }
            },
            "customerParma": "1"
        },
        {
            "name": "N3",
            "type": "line",
            "animation": false,
            "showSymbol": false,
            "showAllSymbol": false,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                            "xAxis": 1608066052
                        },
                        {
                            "xAxis": 1608068692
                        }
                    ]
                ],
                "animation": false,
                "itemStyle": {
                    "color": "#004a7b"
                }
            },
            "customerParma": "1"
        },
        {
            "name": "N2",
            "type": "line",
            "animation": false,
            "showSymbol": false,
            "showAllSymbol": false,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                            "xAxis": 1608068692
                        },
                        {
                            "xAxis": 1608071622
                        }
                    ]
                ],
                "animation": false,
                "itemStyle": {
                    "color": "#1f73aa"
                }
            },
            "customerParma": "1"
        },
        {
            "name": "REM",
            "type": "line",
            "animation": false,
            "showSymbol": false,
            "showAllSymbol": false,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                            "xAxis": 1608071622
                        },
                        {
                            "xAxis": 1608073732
                        }
                    ]
                ],
                "animation": false,
                "itemStyle": {
                    "color": "#97d7f3"
                }
            },
            "customerParma": "1"
        },
        {
            "name": "N2",
            "type": "line",
            "animation": false,
            "showSymbol": false,
            "showAllSymbol": false,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                            "xAxis": 1608073732
                        },
                        {
                            "xAxis": 1608074562
                        }
                    ]
                ],
                "animation": false,
                "itemStyle": {
                    "color": "#1f73aa"
                }
            },
            "customerParma": "1"
        },
        {
            "name": "N3",
            "type": "line",
            "animation": false,
            "showSymbol": false,
            "showAllSymbol": false,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                            "xAxis": 1608074562
                        },
                        {
                            "xAxis": 1608075402
                        }
                    ]
                ],
                "animation": false,
                "itemStyle": {
                    "color": "#004a7b"
                }
            },
            "customerParma": "1"
        },
        {
            "name": "离床",
            "type": "line",
            "animation": false,
            "showSymbol": false,
            "showAllSymbol": false,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                            "xAxis": 1608075402
                        },
                        {
                            "xAxis": 1608075492
                        }
                    ]
                ],
                "animation": false,
                "itemStyle": {
                    "color": "#adadad"
                }
            },
            "customerParma": "1"
        },
        {
            "name": "清醒",
            "type": "line",
            "animation": false,
            "showSymbol": false,
            "showAllSymbol": false,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                            "xAxis": 1608075492
                        },
                        {
                            "xAxis": 1608076012
                        }
                    ]
                ],
                "animation": false,
                "itemStyle": {
                    "color": "#ff931e"
                }
            },
            "customerParma": "1"
        },
        {
            "name": "离床",
            "type": "line",
            "animation": false,
            "showSymbol": false,
            "showAllSymbol": false,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                            "xAxis": 1608076012
                        },
                        {
                            "xAxis": 1608076242
                        }
                    ]
                ],
                "animation": false,
                "itemStyle": {
                    "color": "#adadad"
                }
            },
            "customerParma": "1"
        },
        {
            "name": "清醒",
            "type": "line",
            "animation": false,
            "showSymbol": false,
            "showAllSymbol": false,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                            "xAxis": 1608076242
                        },
                        {
                            "xAxis": 1608076532
                        }
                    ]
                ],
                "animation": false,
                "itemStyle": {
                    "color": "#ff931e"
                }
            },
            "customerParma": "1"
        },
        {
            "name": "N1",
            "type": "line",
            "animation": false,
            "showSymbol": false,
            "showAllSymbol": false,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                            "xAxis": 1608076532
                        },
                        {
                            "xAxis": 1608076832
                        }
                    ]
                ],
                "animation": false,
                "itemStyle": {
                    "color": "#1c8fbf"
                }
            },
            "customerParma": "1"
        },
        {
            "name": "N2",
            "type": "line",
            "animation": false,
            "showSymbol": false,
            "showAllSymbol": false,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                            "xAxis": 1608076832
                        },
                        {
                            "xAxis": 1608078002
                        }
                    ]
                ],
                "animation": false,
                "itemStyle": {
                    "color": "#1f73aa"
                }
            },
            "customerParma": "1"
        },
        {
            "name": "N3",
            "type": "line",
            "animation": false,
            "showSymbol": false,
            "showAllSymbol": false,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                            "xAxis": 1608078002
                        },
                        {
                            "xAxis": 1608078532
                        }
                    ]
                ],
                "animation": false,
                "itemStyle": {
                    "color": "#004a7b"
                }
            },
            "customerParma": "1"
        },
        {
            "name": "N2",
            "type": "line",
            "animation": false,
            "showSymbol": false,
            "showAllSymbol": false,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                            "xAxis": 1608078532
                        },
                        {
                            "xAxis": 1608079082
                        }
                    ]
                ],
                "animation": false,
                "itemStyle": {
                    "color": "#1f73aa"
                }
            },
            "customerParma": "1"
        },
        {
            "name": "REM",
            "type": "line",
            "animation": false,
            "showSymbol": false,
            "showAllSymbol": false,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                            "xAxis": 1608079082
                        },
                        {
                            "xAxis": 1608080132
                        }
                    ]
                ],
                "animation": false,
                "itemStyle": {
                    "color": "#97d7f3"
                }
            },
            "customerParma": "1"
        },
        {
            "name": "N2",
            "type": "line",
            "animation": false,
            "showSymbol": false,
            "showAllSymbol": false,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                            "xAxis": 1608080132
                        },
                        {
                            "xAxis": 1608082082
                        }
                    ]
                ],
                "animation": false,
                "itemStyle": {
                    "color": "#1f73aa"
                }
            },
            "customerParma": "1"
        }
    ]
}