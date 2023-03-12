option ={
    "title": {
        "show": false,
        "text": "",
        "x": "center",
        "padding": 0,
        "top": "2%",
        "textStyle": {
            "color": "#000",
            "fontSize": "140%"
        }
    },
    "grid": {
        "left": "30%",
        "top": "30%",
        "right": "10%",
        "bottom": "15%"
    },
    "legend": {
        "show": true,
        "top": "5%",
        "width": "100%",
        "height": 10,
        "itemWidth": 15,
        "itemHeight": 7,
        "itemGap": 0,
        "data": [
            "平均值项:公差上限",
            "平均值项:上控制线",
            "平均值项:下控制线",
            "平均值项:公差下限",
            "平均值项:左前束",
            "平均值项:左外倾",
            "平均值项:右前束",
            "平均值项:右外倾"
        ]
    },
    "tooltip": {
        "trigger": "axis",
        "textStyle": {
            "fontSize": "80%"
        }
    },
    "xAxis": {
        "type": "category",
        "data": [
            "2020-06-01",
            "2020-06-02",
            "2020-06-03",
            "2020-06-04",
            "2020-06-05",
            "2020-06-06",
            "2020-06-07",
            "2020-06-08",
            "2020-06-09",
            "2020-06-10",
            "2020-06-11",
            "2020-06-12",
            "2020-06-13",
            "2020-06-14",
            "2020-06-15"
        ],
        "axisLabel": {
            "show": true,
            "fontSize": "80%",
            "color": "#000",
            "rotate": 0,
            "interval": "auto"
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#000"
            }
        },
        "axisTick": {
            "show": true,
            "alignWithLabel": true
        }
    },
    "yAxis": {
        "type": "value",
        "name": "",
        "position": "left",
        "splitNumber": 5,
        "axisLabel": {
            "show": true,
            "fontSize": "80%",
            "color": "#000"
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#000"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "rgba(255,255,255,0)"
                ]
            }
        },
        "axisTick": {
            "show": true
        }
    },
    "color": [],
    "series": [
        {
            "name": "平均值项:公差上限",
            "type": "line",
            "showSymbol": true,
            "symbol": "circle",
            "data": [
                0.35,
                0.35,
                0.35,
                0.35,
                0.35,
                0.35,
                0.35,
                0.35,
                0.35,
                0.35,
                0.35,
                0.35,
                0.35,
                0.35,
                0.35
            ],
            "itemStyle": {
                "normal": {
                    "color": "blue"
                }
            },
            "lineStyle": {
                "normal": {
                    "color": "blue"
                }
            }
        },
        {
            "name": "平均值项:上控制线",
            "type": "line",
            "showSymbol": true,
            "symbol": "circle",
            "data": [
                0.3291667,
                0.3291667,
                0.3291667,
                0.3291667,
                0.3291667,
                0.3291667,
                0.3291667,
                0.3291667,
                0.3291667,
                0.3291667,
                0.3291667,
                0.3291667,
                0.3291667,
                0.3291667,
                0.3291667
            ],
            "itemStyle": {
                "normal": {
                    "color": "red"
                }
            },
            "lineStyle": {
                "normal": {
                    "color": "red"
                }
            }
        },
        {
            "name": "平均值项:下控制线",
            "type": "line",
            "showSymbol": true,
            "symbol": "circle",
            "data": [
                0.2041667,
                0.2041667,
                0.2041667,
                0.2041667,
                0.2041667,
                0.2041667,
                0.2041667,
                0.2041667,
                0.2041667,
                0.2041667,
                0.2041667,
                0.2041667,
                0.2041667,
                0.2041667,
                0.2041667
            ],
            "itemStyle": {
                "normal": {
                    "color": "green"
                }
            },
            "lineStyle": {
                "normal": {
                    "color": "green"
                }
            }
        },
        {
            "name": "平均值项:公差下限",
            "type": "line",
            "showSymbol": true,
            "symbol": "circle",
            "data": [
                0.1833333,
                0.1833333,
                0.1833333,
                0.1833333,
                0.1833333,
                0.1833333,
                0.1833333,
                0.1833333,
                0.1833333,
                0.1833333,
                0.1833333,
                0.1833333,
                0.1833333,
                0.1833333,
                0.1833333
            ],
            "itemStyle": {
                "normal": {
                    "color": "purple"
                }
            },
            "lineStyle": {
                "normal": {
                    "color": "purple"
                }
            }
        },
        {
            "name": "平均值项",
            "type": "line",
            "showSymbol": true,
            "symbol": "circle",
            "data": [
                0.2483905,
                0.254254,
                0.234557,
                0.243188,
                0.2477928,
                0.2462216,
                0.2593038,
                0.2564347,
                0.2654392,
                0.2720892,
                0.2752938,
                0.2705727,
                0.2621904,
                0.2782546,
                0.2780303
            ],
            
            "itemStyle": {
                "normal": {
                    "color": "yellow",
                    label : {show: true}
                }
            },
            "lineStyle": {
                "normal": {
                    "color": "yellow"
                }
            }
        },
        // {
        //     "name": "平均值项:左外倾",
        //     "type": "line",
        //     "showSymbol": true,
        //     "symbol": "circle",
        //     "itemStyle": {
        //         "normal": {
        //             "color": "#336699"
        //         }
        //     },
        //     "lineStyle": {
        //         "normal": {
        //             "color": null
        //         }
        //     }
        // },
        // {
        //     "name": "平均值项:右前束",
        //     "type": "line",
        //     "showSymbol": true,
        //     "symbol": "circle",
        //     "itemStyle": {
        //         "normal": {
        //             "color": "#336699"
        //         }
        //     },
        //     "lineStyle": {
        //         "normal": {
        //             "color": null
        //         }
        //     }
        // },
        // {
        //     "name": "平均值项:右外倾",
        //     "type": "line",
        //     "showSymbol": true,
        //     "symbol": "circle",
        //     "itemStyle": {
        //         "normal": {
        //             "color": "#336699"
        //         }
        //     },
        //     "lineStyle": {
        //         "normal": {
        //             "color": null
        //         }
        //     }
        // }
    ]
}
