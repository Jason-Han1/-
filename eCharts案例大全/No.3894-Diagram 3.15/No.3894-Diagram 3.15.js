{
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        }
    },
    "legend": {
        "data": ["Manskapsbod\n(kWh/år)", "Kontorsbod\n(kWh/år)", "Kravnivå manskapsbod", "Kravnivå kontorsbod"],
        "bottom": "0"
    },
    "grid": [{
            "gridIndex": 0,
            "bottom": 160
        },
        {
            "height": 60,
            "gridIndex": 1,
            "bottom": 100
        },
        {
            "height": 60,
            "gridIndex": 2,
            "bottom": 100
        }
    ],
    "xAxis": [{
            "type": "category",
            "data": [
                "Tobin Properties",
                "Stockholmshem",
                "Besqab",
                "Riksbyggen",
                "Fastighetskontoret\n(parklek)"
            ],
            "axisLine": {
                "show": false
            },
            "axisLabel": {
                "color": "#000"
            },
            "splitLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            }
        },
        {
            "type": "category",
            "isSeries": 1,
            "gridIndex": 1,
            "axisLabel": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "axisLine": {
                "show": false
            }
        },
        {
            "type": "category",
            "isSeries": 1,
            "gridIndex": 2,
            "axisLabel": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "axisLine": {
                "show": false
            }
        }
    ],
    "yAxis": [{
            "type": "value",
            "boundaryGap": [0, 0.01],
            "max": 8000,
            "interval": 1000,
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#000"
                }
            },
            "axisLabel": {
                "color": "#000"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(0,0,0,.1)"
                }
            }
        },
        {
            "type": "value",
            "gridIndex": 1,
            "show": false

        },
        {
            "type": "value",
            "gridIndex": 2,
            "show": true,
            "axisLabel": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "axisLine": {
                "show": false
            },
            "splitLine": {
                "show": false
            }
        }
    ],
    "series": [{
            "yAxisIndex": 0,
            "type": "bar",
            "name": "Manskapsbod\n(kWh/år)",
            "barWidth": "25%",
            "data": [6873, 4369, 6055, 2880, 6100],
            "itemStyle": {
                "color": "#5B9BD5"
            }
        },
        {
            "yAxisIndex": 0,
            "name": "Kontorsbod\n(kWh/år)",
            "type": "bar",
            "barWidth": "25%",
            "data": [6873, 4369, 6055, 2880, 6100],
            "itemStyle": {
                "color": "#ED7D31"
            }
        },

        {

            "name": "Kravnivå kontorsbod",
            "type": "line",
            "data": [],
            "symbol": "line",
            "itemStyle": {
                "normal": {
                    "color": "#ED7D31"
                }
            },
            "markLine": {
                "data": [{
                    "yAxis": 4000,
                    "lineStyle": {
                        "normal": {
                            "color": "#ED7D31",
                            "width": 2,
                            "type": "solid"
                        }
                    }
                }]
            }
        },
        {

            "name": "Kravnivå manskapsbod",
            "type": "line",
            "data": [],
            "symbol": "line",
            "itemStyle": {
                "normal": {
                    "color": "#006ebf"
                }
            },
            "markLine": {
                "data": [{
                    "yAxis": 7000,
                    "lineStyle": {
                        "normal": {
                            "color": "#006ebf",
                            "width": 2,
                            "type": "solid"
                        }
                    }
                }]
            }
        },
        {
            "data": [{
                "name": "Brofästet",
                "value": "1"
            }],
            "type": "bar",
            "barWidth": "80%",
            "xAxisIndex": 2,
            "yAxisIndex": 2,
            "outerAxis": 1,
            "barGap": "0%",
            "cursor": "pointer",
            "label": {
                "show": true,
                "color": "#000",
                "position": "insideBottom",
                "textStyle": {
                    "color": "#000",
                    "fontSize": "12"
                },
                "formatter": "{b}"
            },
            "itemStyle": {
                "color": "transparent",
                "borderColor": "rgba(0,0,0,.2)",
                "borderWidth": 1
            }
        },
        {
            "data": [{
                "name": "Jackproppen",
                "value": "1"
            }],
            "type": "bar",
            "barWidth": "20%",
            "xAxisIndex": 2,
            "yAxisIndex": 2,
            "outerAxis": 1,
            "barGap": "0%",
            "cursor": "pointer",
            "label": {
                "show": true,
                "color": "#000",
                "position": "insideBottom",
                "textStyle": {
                    "color": "#000",
                    "fontSize": "12"
                },
                "formatter": "{b}"
            },
            "itemStyle": {
                "color": "transparent",
                "borderColor": "rgba(0,0,0,.2)",
                "borderWidth": 1
            }
        }
    ]
}