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
            "Uppmätt energianvändning",
            {"name":"Kravnivå","icon":"path://M912 472v80a8 8 0 0 1-8 8H120a8 8 0 0 1-8-8v-80a8 8 0 0 1 8-8h784a8 8 0 0 1 8 8z"},
            {"name":"BBR","icon":"path://M912 472v80a8 8 0 0 1-8 8H120a8 8 0 0 1-8-8v-80a8 8 0 0 1 8-8h784a8 8 0 0 1 8 8z"},
            {"name":"Beräknad energianvändning för befintlig\nbyggnad före åtgärder","icon":"path://M912 472v80a8 8 0 0 1-8 8H120a8 8 0 0 1-8-8v-80a8 8 0 0 1 8-8h784a8 8 0 0 1 8 8z"}
        ]
    },
    "yAxis": {
        "type": "value",
        "boundaryGap": [
            0,
            0.01
        ],
        "max": 120,
        "interval": 20
    },
    "xAxis": {
        "type": "category",
        "data": [
            "Norra 1",
            "Västra",
            "Värtaterminalen",
            "Norra 2",
            "Brofästet",
            "Jackproppen (bostäder)",
            "Jackproppen (parklek)",
            "Gasverket nya",
            "Gasverket bef",
            "Södra Värtan Södra",
            "Södra Värtan Norra",
            "Starkströmmen"
        ],
        "axisLabel": {
            "rotate": 55
        }
    },
    "series": [{
            "name": "Projekterad energianvändning",
            "type": "bar",
            "barWidth": "25%",
            "data": [{
                    "value": 63.8,
                    "itemStyle": {
                        "color": "rgba(0, 131, 124, .5)"
                    }
                },
                {
                    "value": 60.4,
                    "itemStyle": {
                        "color": "rgba(0, 131, 124, .5)"
                    }
                },
                {
                    "value": 52,
                    "itemStyle": {
                        "color": "rgba(0, 131, 124, .5)"
                    }
                },
                54.3,
                48.2,
                49.5,
                40,
                47.5,
                91.5,
                47.5,
                39,
                31.4
            ],
            "itemStyle": {
                "color": "#00837c"
            }
        },
        {
            "name": "Uppmätt energianvändning",
            "type": "bar",
            "barWidth": "25%",
            "data": [{
                    "value": 68.9,
                    "itemStyle": {
                        "color": "rgba(201, 71, 45, .5)"
                    }
                },
                {
                    "value": 76.3,
                    "itemStyle": {
                        "color": "rgba(201, 71, 45, .5)"
                    }
                },
                {
                    "value": 62.4,
                    "itemStyle": {
                        "color": "rgba(201, 71, 45, .5)"
                    }
                },
                69.5,
                64.9,
                0,
                0,
                0,
                0,
                0,
                0,
                0
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
                            "yAxis": 55,
                            "name": "",
                            "x": "27%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#c9472d",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 55,
                            "x": "45%"
                        }
                    ],
                    [{
                            "yAxis": 40,
                            "name": "",
                            "x": "46%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#c9472d",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 40,
                            "x": "52%"
                        }
                    ],
                    [{
                            "yAxis": 79,
                            "name": "",
                            "x": "53%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#c9472d",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 79,
                            "x": "59%"
                        }
                    ],
                    [{
                            "yAxis": 127,
                            "name": "190",
                            "label": {
                                "show": true
                            },
                            "x": "60%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#c9472d",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 127,
                            "x": "66%"
                        }
                    ],
                    [{
                            "yAxis": 45,
                            "name": "",
                            "x": "66.7%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#c9472d",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 45,
                            "x": "72.7%"
                        }
                    ],
                    [{
                            "yAxis": 40,
                            "name": "",
                            "x": "73.5%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#c9472d",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 40,
                            "x": "79.5%"
                        }
                    ],
                    [{
                            "yAxis": 45,
                            "name": "",
                            "x": "80.5%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#c9472d",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 45,
                            "x": "86.5%"
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
                    "color": "#7f7f7f"
                }
            },
            "markLine": {
                "symbolSize": 0,
                "data": [
                    [{
                            "yAxis": 110,
                            "name": "",
                            "x": "6%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#7f7f7f",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 110,
                            "x": "20%"
                        }
                    ],
                    [{
                            "yAxis": 90,
                            "name": "",
                            "x": "20%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#7f7f7f",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 90,
                            "x": "45%"
                        }
                    ],
                    [{
                            "yAxis": 123,
                            "name": "125",
                            "label": {
                                "show": true
                            },
                            "x": "46%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#7f7f7f",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 123,
                            "x": "52%"
                        }
                    ],
                    [{
                            "yAxis": 98.6,
                            "name": "",
                            "x": "53%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#7f7f7f",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 98.6,
                            "x": "59%"
                        }
                    ],
                    [{
                            "yAxis": 90,
                            "name": "",
                            "x": "67%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#7f7f7f",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 90,
                            "x": "80%"
                        }
                    ],
                    [{
                            "yAxis": 70,
                            "name": "",
                            "x": "80.5%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#7f7f7f",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 70,
                            "x": "86.5%"
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
                            "yAxis": 130,
                            "name": "380",
                            "label": {
                                "show": true
                            },
                            "x": "60%",
                            "lineStyle": {
                                "normal": {
                                    "color": "#000",
                                    "width": 2,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "yAxis": 130,
                            "x": "66%"
                        }
                    ]
                ]
            }
        }
    ]
};