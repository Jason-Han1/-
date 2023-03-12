option = {
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        }
    },
    "grid": {
        "top": "10%",
        "left": "3%",
        "right": "12%",
        "bottom": "5%",
        "containLabel": true
    },
    "legend": {
        "show": true,
        "bottom": 0,
        "left": "center",
        "data": [
            "Projekterad energianvändning",
            {
                "name": "Kravnivå",
                "icon": "path://M912 472v80a8 8 0 0 1-8 8H120a8 8 0 0 1-8-8v-80a8 8 0 0 1 8-8h784a8 8 0 0 1 8 8z"
            },
            {
                "name": "BBR",
                "icon": "path://M912 472v80a8 8 0 0 1-8 8H120a8 8 0 0 1-8-8v-80a8 8 0 0 1 8-8h784a8 8 0 0 1 8 8z"
            },
            {
                "name": "Beräknad energianvändning för befintlig\nbyggnad före åtgärder",
                "icon": "path://M912 472v80a8 8 0 0 1-8 8H120a8 8 0 0 1-8-8v-80a8 8 0 0 1 8-8h784a8 8 0 0 1 8 8z"
            }
        ]
    },
    "yAxis": {
        "type": "value",
        "boundaryGap": [
            0,
            0.01
        ],
        "max": 250,
        "interval": 25
    },
    "xAxis": {
        "type": "category",
        "data": [
            "Fastighetskontoret  (Hjorthagshallen)",
            "Vectura förskola",
            "SISAB skola",
            "Vectura förskola bef.",
            "SISAB skola bef.",
            "Region Stockholm (Spårvägsmuseet)",
            "CA Fastigheter (Klätterverket)",
            "CA Fastigheter (Hus 20)",
            "CA Fastigheter (Hus 10)",
            "Stockholms stad (Gasklocka 2)",
            "CA Fastigheter (Hus 8)"
        ],
        "axisLabel": {
            "rotate": 62
        }
    },
    "series": [{
            "name": "Projekterad energianvändning",
            "type": "bar",
            "barWidth": "25%",
            "data": [
                43.9,
                71,
                48,
                105,
                106,
                87,
                165,
                160,
                134,
                67,
                111
            ],
            "itemStyle": {
                "color": "#c9472d"
            }
        },
        {
            "name": "Kravnivå",
            "type": "line",
            "data": [],
            "symbol": "line",
            "itemStyle": {
                "normal": {
                    "color": "#c9472d"
                }
            },
            "markLine": {
                "symbolSize": 0,
                "data": [
                    [{
                            "yAxis": 88,
                            "name": "",
                            "x": "6%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#c9472d",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 88,
                            "x": "12%"
                        }
                    ],
                    [{
                            "yAxis": 71,
                            "name": "",
                            "x": "13.8%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#c9472d",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 71,
                            "x": "19.8%"
                        }
                    ],
                    [{
                            "yAxis": 78,
                            "name": "",
                            "x": "21.5%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#c9472d",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 78,
                            "x": "27.5%"
                        }
                    ],
                    [{
                            "yAxis": 251,
                            "name": "251",
                            "label": {
                                "show": true
                            },
                            "x": "28.5%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#c9472d",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 251,
                            "x": "34.3%"
                        }
                    ],
                    [{
                            "yAxis": 107,
                            "name": "",
                            "x": "36.3%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#c9472d",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 107,
                            "x": "42.3%"
                        }
                    ],
                    [{
                            "yAxis": 172,
                            "name": "",
                            "x": "44%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#c9472d",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 172,
                            "x": "50%"
                        }
                    ],
                    [{
                            "yAxis": 223,
                            "name": "",
                            "x": "51%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#c9472d",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 223,
                            "x": "57%"
                        }
                    ],
                    [{
                            "yAxis": 207,
                            "name": "",
                            "x": "58.8%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#c9472d",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 207,
                            "x": "64.8%"
                        }
                    ],
                    [{
                            "yAxis": 204,
                            "name": "",
                            "x": "66.4%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#c9472d",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 204,
                            "x": "72.4%"
                        }
                    ],
                    [{
                            "yAxis": 167.5,
                            "name": "",
                            "x": "81%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#c9472d",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 167.5,
                            "x": "87%"
                        }
                    ]
                ]
            }
        },
        {
            "name": "Beräknad energianvändning för befintlig\nbyggnad före åtgärder",
            "type": "line",
            "data": [],
            "symbol": "line",
            "itemStyle": {
                "normal": {
                    "color": "#000"
                }
            },
            "markLine": {
                "symbolSize": 0,
                "data": [
                    [{
                            "yAxis": 280,
                            "name": "502",
                            "x": "28.5%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#000",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 280,
                            "x": "34.5%"
                        }
                    ],
                    [{
                            "yAxis": 214,
                            "name": "",
                            "x": "36.3%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#000",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 214,
                            "x": "42.3%"
                        }
                    ],
                    [{
                            "yAxis": 260,
                            "name": "344",
                            "label": {
                                "show": true
                            },
                            "x": "44%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#000",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 260,
                            "x": "50%"
                        }
                    ],
                    [{
                            "yAxis": 275,
                            "name": "446",
                            "label": {
                                "show": true
                            },
                            "x": "51%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#000",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 275,
                            "x": "57%"
                        }
                    ],
                    [{
                            "yAxis": 265,
                            "name": "414",
                            "label": {
                                "show": true
                            },
                            "x": "58.8%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#000",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 265,
                            "x": "64.8%"
                        }
                    ],
                    [{
                            "yAxis": 260,
                            "name": "408",
                            "label": {
                                "show": true
                            },
                            "x": "66.4%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#000",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 260,
                            "x": "72.4%"
                        }
                    ],
                    [{
                            "yAxis": 255,
                            "name": "335",
                            "label": {
                                "show": true
                            },
                            "x": "81%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#000",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 255,
                            "x": "87%"
                        }
                    ]
                ]
            }
        },
        {
            "name": "BBR",
            "type": "line",
            "data": [],
            "symbol": "line",
            "itemStyle": {
                "normal": {
                    "color": "rgb(0,110,191)"
                }
            },
            "markLine": {
                "symbolSize": 0,
                "data": [
                    [{
                            "yAxis": 78,
                            "name": "",
                            "x": "6%",
                            "lineStyle": {
                                "normal": {
                                    "color": "rgb(0,110,191)",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 78,
                            "x": "12%"
                        }
                    ],
                    [{
                            "yAxis": 105,
                            "name": "105(PET)",
                            "label": {
                                "position": "insideMiddleBottom"
                            },
                            "x": "13.8%",
                            "lineStyle": {
                                "normal": {
                                    "color": "rgb(0,110,191)",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 105,
                            "x": "19.8%"
                        }
                    ],
                    [{
                            "yAxis": 112.7,
                            "name": "",
                            "x": "21.5%",
                            "lineStyle": {
                                "normal": {
                                    "color": "rgb(0,110,191)",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 112.7,
                            "x": "27.5%"
                        }
                    ]
                ]
            }
        }
    ]
}