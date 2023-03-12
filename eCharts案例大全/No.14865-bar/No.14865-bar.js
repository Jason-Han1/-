option={
    "title": {
        "text": ""
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "cross",
            "label": {
                "backgroundColor": "#6a7985"
            },
            "lineStyle": {
                "color": "#9eb2cb"
            }
        }
    },
    dataZoom: [
       {
                show: true,
                start: 94,
                end: 100,
                bottom:'30'
            },
            {
                type: 'inside',
                start: 94,
                end: 100
            }
    ],
    "toolbox": {
        "top": -6,
        "iconStyle": {
            "normal": {
                "textAlign": "right"
            }
        },
        "feature": {
            "magicType": {
                "type": [
                    "line",
                    "bar"
                ]
            }
        }
    },
    "legend": {
    top: 'bottom',
        "left": "2%",
        "textStyle": {
            "color": "#000"
        },
        "itemHeight": 10,
        "data": [
            "ALL_ALL_UV1",
            "ALL_ALL_UV2",
            "ALL_ALL_user1",
            "ALL_ALL_user2",
            "ALL_ALL_user3",
            "ALL_FR-2_UV1",
            "ALL_FR-2_UV2",
            "ALL_FR-2_user1",
            "ALL_FR-2_user2",
            "ALL_FR-2_user3",
            "ALL_FR-3_UV1",
            "ALL_FR-3_UV2",
            "ALL_FR-3_user1",
            "ALL_FR-3_user2",
            "ALL_FR-3_user3",
            "ALL_FR-4_UV1",
            "ALL_FR-4_UV2",
            "ALL_FR-4_user1",
            "ALL_FR-4_user2",
            "ALL_FR-4_user3",
            "ALL_FR-5_UV1",
            "ALL_FR-5_UV2",
            "ALL_FR-5_user1",
            "ALL_FR-5_user2",
            "ALL_FR-5_user3",
            "ALL_FR-6_UV1",
            "ALL_FR-6_UV2",
            "ALL_FR-6_user1",
            "ALL_FR-6_user2",
            "ALL_FR-6_user3"
        ],
        "type": "scroll"
    },
    "grid": {
      bottom: 90
    },
    "xAxis": [
        {
            "type": "category",
            "axisLabel": {
                "color": "#000"
            },
            "axisTick": {
                "show": false
            },
            "axisLine": {
                "onZero": true,
                "show": false,
                "lineStyle": {}
            },
            "boundaryGap": false,
            "data": [
                "00:00-01:00",
                "01:00-02:00",
                "02:00-03:00",
                "03:00-04:00",
                {
                    "value": "04:00-05:00",
                    "textStyle": {
                       
                    }
                }
            ]
        }
    ],
    "yAxis": [
        {
            "axisLabel": {
                "color": "#000"
            },
            "type": "value",
            "splitLine": {
                "lineStyle": {
                    "color": "#dfe4ea"
                }
            },
            "axisTick": {
                "show": false
            },
            "axisLine": {
                "show": false
            }
        }
    ],
    
    "series": [
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#28AAFF"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 500,
                    "value": 500
                },
                {
                    "name": "01:00-02:00",
                    "y": 110,
                    "value": 110
                },
                {
                    "name": "02:00-03:00",
                    "y": 120,
                    "value": 120
                },
                {
                    "name": "03:00-04:00",
                    "y": 130,
                    "value": 130
                },
                {
                    "name": "04:00-05:00",
                    "y": 140,
                    "value": 140
                }
            ],
            "name": "ALL_ALL_UV1",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#8cc4b7"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 200,
                    "value": 200
                },
                {
                    "name": "01:00-02:00",
                    "y": 300,
                    "value": 300
                },
                {
                    "name": "02:00-03:00",
                    "y": 400,
                    "value": 400
                },
                {
                    "name": "03:00-04:00",
                    "y": 500,
                    "value": 500
                },
                {
                    "name": "04:00-05:00",
                    "y": 600,
                    "value": 600
                }
            ],
            "name": "ALL_ALL_UV2",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#f5af40"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 50,
                    "value": 50
                },
                {
                    "name": "01:00-02:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "02:00-03:00",
                    "y": 70,
                    "value": 70
                },
                {
                    "name": "03:00-04:00",
                    "y": 80,
                    "value": 80
                },
                {
                    "name": "04:00-05:00",
                    "y": 90,
                    "value": 90
                }
            ],
            "name": "ALL_ALL_user1",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#28AAFF"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "01:00-02:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "02:00-03:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "03:00-04:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "04:00-05:00",
                    "y": 60,
                    "value": 60
                }
            ],
            "name": "ALL_ALL_user2",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#8cc4b7"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 70,
                    "value": 70
                },
                {
                    "name": "01:00-02:00",
                    "y": 40,
                    "value": 40
                },
                {
                    "name": "02:00-03:00",
                    "y": 10,
                    "value": 10
                },
                {
                    "name": "03:00-04:00",
                    "y": 10,
                    "value": 10
                },
                {
                    "name": "04:00-05:00",
                    "y": 40,
                    "value": 40
                }
            ],
            "name": "ALL_ALL_user3",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#f5af40"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 58,
                    "value": 58
                },
                {
                    "name": "01:00-02:00",
                    "y": 35,
                    "value": 35
                },
                {
                    "name": "02:00-03:00",
                    "y": 32,
                    "value": 32
                },
                {
                    "name": "03:00-04:00",
                    "y": 42,
                    "value": 42
                },
                {
                    "name": "04:00-05:00",
                    "y": 32,
                    "value": 32
                }
            ],
            "name": "ALL_FR-2_UV1",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#28AAFF"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 500,
                    "value": 500
                },
                {
                    "name": "01:00-02:00",
                    "y": 630,
                    "value": 630
                },
                {
                    "name": "02:00-03:00",
                    "y": 100,
                    "value": 100
                },
                {
                    "name": "03:00-04:00",
                    "y": 200,
                    "value": 200
                },
                {
                    "name": "04:00-05:00",
                    "y": 323,
                    "value": 323
                }
            ],
            "name": "ALL_FR-2_UV2",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#8cc4b7"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "01:00-02:00",
                    "y": 70,
                    "value": 70
                },
                {
                    "name": "02:00-03:00",
                    "y": 80,
                    "value": 80
                },
                {
                    "name": "03:00-04:00",
                    "y": 90,
                    "value": 90
                },
                {
                    "name": "04:00-05:00",
                    "y": 60,
                    "value": 60
                }
            ],
            "name": "ALL_FR-2_user1",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#f5af40"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "01:00-02:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "02:00-03:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "03:00-04:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "04:00-05:00",
                    "y": 60,
                    "value": 60
                }
            ],
            "name": "ALL_FR-2_user2",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#28AAFF"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 40,
                    "value": 40
                },
                {
                    "name": "01:00-02:00",
                    "y": 10,
                    "value": 10
                },
                {
                    "name": "02:00-03:00",
                    "y": 10,
                    "value": 10
                },
                {
                    "name": "03:00-04:00",
                    "y": 40,
                    "value": 40
                },
                {
                    "name": "04:00-05:00",
                    "y": 40,
                    "value": 40
                }
            ],
            "name": "ALL_FR-2_user3",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#8cc4b7"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 14,
                    "value": 14
                },
                {
                    "name": "01:00-02:00",
                    "y": 56,
                    "value": 56
                },
                {
                    "name": "02:00-03:00",
                    "y": 75,
                    "value": 75
                },
                {
                    "name": "03:00-04:00",
                    "y": 21,
                    "value": 21
                },
                {
                    "name": "04:00-05:00",
                    "y": 57,
                    "value": 57
                }
            ],
            "name": "ALL_FR-3_UV1",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#f5af40"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 400,
                    "value": 400
                },
                {
                    "name": "01:00-02:00",
                    "y": 500,
                    "value": 500
                },
                {
                    "name": "02:00-03:00",
                    "y": 432,
                    "value": 432
                },
                {
                    "name": "03:00-04:00",
                    "y": 600,
                    "value": 600
                },
                {
                    "name": "04:00-05:00",
                    "y": 500,
                    "value": 500
                }
            ],
            "name": "ALL_FR-3_UV2",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#28AAFF"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 70,
                    "value": 70
                },
                {
                    "name": "01:00-02:00",
                    "y": 80,
                    "value": 80
                },
                {
                    "name": "02:00-03:00",
                    "y": 90,
                    "value": 90
                },
                {
                    "name": "03:00-04:00",
                    "y": 50,
                    "value": 50
                },
                {
                    "name": "04:00-05:00",
                    "y": 60,
                    "value": 60
                }
            ],
            "name": "ALL_FR-3_user1",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#8cc4b7"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "01:00-02:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "02:00-03:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "03:00-04:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "04:00-05:00",
                    "y": 60,
                    "value": 60
                }
            ],
            "name": "ALL_FR-3_user2",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#f5af40"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 10,
                    "value": 10
                },
                {
                    "name": "01:00-02:00",
                    "y": 10,
                    "value": 10
                },
                {
                    "name": "02:00-03:00",
                    "y": 40,
                    "value": 40
                },
                {
                    "name": "03:00-04:00",
                    "y": 70,
                    "value": 70
                },
                {
                    "name": "04:00-05:00",
                    "y": 40,
                    "value": 40
                }
            ],
            "name": "ALL_FR-3_user3",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#28AAFF"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 43,
                    "value": 43
                },
                {
                    "name": "01:00-02:00",
                    "y": 223,
                    "value": 223
                },
                {
                    "name": "02:00-03:00",
                    "y": 132,
                    "value": 132
                },
                {
                    "name": "03:00-04:00",
                    "y": 34,
                    "value": 34
                },
                {
                    "name": "04:00-05:00",
                    "y": 54,
                    "value": 54
                }
            ],
            "name": "ALL_FR-4_UV1",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#8cc4b7"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 432,
                    "value": 432
                },
                {
                    "name": "01:00-02:00",
                    "y": 100,
                    "value": 100
                },
                {
                    "name": "02:00-03:00",
                    "y": 200,
                    "value": 200
                },
                {
                    "name": "03:00-04:00",
                    "y": 234,
                    "value": 234
                },
                {
                    "name": "04:00-05:00",
                    "y": 345,
                    "value": 345
                }
            ],
            "name": "ALL_FR-4_UV2",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#f5af40"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 55,
                    "value": 55
                },
                {
                    "name": "01:00-02:00",
                    "y": 50,
                    "value": 50
                },
                {
                    "name": "02:00-03:00",
                    "y": 45,
                    "value": 45
                },
                {
                    "name": "03:00-04:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "04:00-05:00",
                    "y": 60,
                    "value": 60
                }
            ],
            "name": "ALL_FR-4_user1",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#28AAFF"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "01:00-02:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "02:00-03:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "03:00-04:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "04:00-05:00",
                    "y": 60,
                    "value": 60
                }
            ],
            "name": "ALL_FR-4_user2",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#8cc4b7"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 10,
                    "value": 10
                },
                {
                    "name": "01:00-02:00",
                    "y": 10,
                    "value": 10
                },
                {
                    "name": "02:00-03:00",
                    "y": 40,
                    "value": 40
                },
                {
                    "name": "03:00-04:00",
                    "y": 40,
                    "value": 40
                },
                {
                    "name": "04:00-05:00",
                    "y": 40,
                    "value": 40
                }
            ],
            "name": "ALL_FR-4_user3",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#f5af40"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 75,
                    "value": 75
                },
                {
                    "name": "01:00-02:00",
                    "y": 89,
                    "value": 89
                },
                {
                    "name": "02:00-03:00",
                    "y": 14,
                    "value": 14
                },
                {
                    "name": "03:00-04:00",
                    "y": 56,
                    "value": 56
                },
                {
                    "name": "04:00-05:00",
                    "y": 75,
                    "value": 75
                }
            ],
            "name": "ALL_FR-5_UV1",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#28AAFF"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 100,
                    "value": 100
                },
                {
                    "name": "01:00-02:00",
                    "y": 200,
                    "value": 200
                },
                {
                    "name": "02:00-03:00",
                    "y": 300,
                    "value": 300
                },
                {
                    "name": "03:00-04:00",
                    "y": 400,
                    "value": 400
                },
                {
                    "name": "04:00-05:00",
                    "y": 500,
                    "value": 500
                }
            ],
            "name": "ALL_FR-5_UV2",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#8cc4b7"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 70,
                    "value": 70
                },
                {
                    "name": "01:00-02:00",
                    "y": 80,
                    "value": 80
                },
                {
                    "name": "02:00-03:00",
                    "y": 90,
                    "value": 90
                },
                {
                    "name": "03:00-04:00",
                    "y": 50,
                    "value": 50
                },
                {
                    "name": "04:00-05:00",
                    "y": 60,
                    "value": 60
                }
            ],
            "name": "ALL_FR-5_user1",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#f5af40"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "01:00-02:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "02:00-03:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "03:00-04:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "04:00-05:00",
                    "y": 60,
                    "value": 60
                }
            ],
            "name": "ALL_FR-5_user2",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#28AAFF"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 10,
                    "value": 10
                },
                {
                    "name": "01:00-02:00",
                    "y": 10,
                    "value": 10
                },
                {
                    "name": "02:00-03:00",
                    "y": 40,
                    "value": 40
                },
                {
                    "name": "03:00-04:00",
                    "y": 70,
                    "value": 70
                },
                {
                    "name": "04:00-05:00",
                    "y": 40,
                    "value": 40
                }
            ],
            "name": "ALL_FR-5_user3",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#8cc4b7"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 21,
                    "value": 21
                },
                {
                    "name": "01:00-02:00",
                    "y": 57,
                    "value": 57
                },
                {
                    "name": "02:00-03:00",
                    "y": 43,
                    "value": 43
                },
                {
                    "name": "03:00-04:00",
                    "y": 223,
                    "value": 223
                },
                {
                    "name": "04:00-05:00",
                    "y": 132,
                    "value": 132
                }
            ],
            "name": "ALL_FR-6_UV1",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#f5af40"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 500,
                    "value": 500
                },
                {
                    "name": "01:00-02:00",
                    "y": 600,
                    "value": 600
                },
                {
                    "name": "02:00-03:00",
                    "y": 600,
                    "value": 600
                },
                {
                    "name": "03:00-04:00",
                    "y": 100,
                    "value": 100
                },
                {
                    "name": "04:00-05:00",
                    "y": 200,
                    "value": 200
                }
            ],
            "name": "ALL_FR-6_UV2",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#28AAFF"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 55,
                    "value": 55
                },
                {
                    "name": "01:00-02:00",
                    "y": 50,
                    "value": 50
                },
                {
                    "name": "02:00-03:00",
                    "y": 45,
                    "value": 45
                },
                {
                    "name": "03:00-04:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "04:00-05:00",
                    "y": 60,
                    "value": 60
                }
            ],
            "name": "ALL_FR-6_user1",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#8cc4b7"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "01:00-02:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "02:00-03:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "03:00-04:00",
                    "y": 60,
                    "value": 60
                },
                {
                    "name": "04:00-05:00",
                    "y": 60,
                    "value": 60
                }
            ],
            "name": "ALL_FR-6_user2",
            "type": "bar"
        },
        {
            "symbol": "circle",
            "showSymbol": false,
            "markPoint": {
                "itemStyle": {}
            },
            "itemStyle": {
                "normal": {
                    "color": "#f5af40"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1
                }
            },
            "markLine": {
                "label": {
                    "normal": {
                        "formatter": "",
                        "position": "start"
                    }
                },
                "symbol": [
                    "none",
                    "none"
                ],
                "lineStyle": {
                    "normal": {
                        "color": "transparent"
                    },
                    "emphasis": {
                        "width": 0.5,
                        "type": "dotted",
                        "color": "#596c83"
                    }
                },
                "data": [
                    {
                        "type": "average",
                        "name": "平均值"
                    }
                ]
            },
            "data": [
                {
                    "name": "00:00-01:00",
                    "y": 10,
                    "value": 10
                },
                {
                    "name": "01:00-02:00",
                    "y": 10,
                    "value": 10
                },
                {
                    "name": "02:00-03:00",
                    "y": 40,
                    "value": 40
                },
                {
                    "name": "03:00-04:00",
                    "y": 40,
                    "value": 40
                },
                {
                    "name": "04:00-05:00",
                    "y": 40,
                    "value": 40
                }
            ],
            "name": "ALL_FR-6_user3",
            "type": "bar"
        }
    ]
}