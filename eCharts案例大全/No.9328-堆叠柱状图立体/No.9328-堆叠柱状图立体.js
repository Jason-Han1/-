option = {
    "title": {
        "text": "堆叠柱状图立体",
        "textStyle": {
            "color": "#ff0000",
            "fontSize": 60
        },
        "subtextStyle": {
            "color": "#999",
            "fontSize": 34
        },
        "x": "center",
        "top": "0%"
    },
    "grid": {
        "top": 200,
        "bottom": 100
    },
    "tooltip": {},
    "xAxis": {
        "data": ["一类", "二类", "三类"],
        "axisTick": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "axisLabel": {
            "show": false
        }
    },
    "yAxis": {
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "axisLabel": {
            "show": false
        }
    },
    series: [{
            "name": "",
            "type": "pictorialBar",
            "symbolSize": [100, 45],
            "symbolOffset": [0, -20],
            "z": 12,
            "data": [{
                "name": "一类",
                "value": "100",
                "symbolPosition": "end",
                "itemStyle": {
                    "normal": {
                        "color": "#25729e"
                    }
                }
            }, {
                "name": "二类",
                "value": "102",
                "symbolPosition": "end",
                "itemStyle": {
                    "normal": {
                        "color": "#ffcc00"
                    }
                }
            }, {
                "name": "三类",
                "value": "81",
                "symbolPosition": "end",
                "itemStyle": {
                    "normal": {
                        "color": "#b9b7ff"
                    }
                }
            }]
        }, {
            "name": "",
            "type": "pictorialBar",
            "symbolSize": [100, 45],
            "symbolOffset": [0, 20],
            "z": 12,
            "data": [{
                "name": "一类",
                "value": "100",
                "itemStyle": {
                    "normal": {
                        "color": "#25729e"
                    }
                }
            }, {
                "name": "二类",
                "value": "101",
                "itemStyle": {
                    "normal": {
                        "color": "#ff7800"
                    }
                }
            }, {
                "name": "三类",
                "value": "81",
                "itemStyle": {
                    "normal": {
                        "color": "#e9a5ff"
                    }
                }
            }]
        }, {
            "name": "",
            "type": "pictorialBar",
            "symbolSize": [150, 75],
            "symbolOffset": [0, 44],
            "z": 11,
            "data": [{
                "name": "一类",
                "value": "100",
                "itemStyle": {
                    "normal": {
                        "color": "transparent",
                        "borderColor": "#43bafe",
                        "borderWidth": 5
                    }
                }
            }, {
                "name": "二类",
                "value": "101",
                "itemStyle": {
                    "normal": {
                        "color": "transparent",
                        "borderColor": "#ff7800",
                        "borderWidth": 5
                    }
                }
            }, {
                "name": "三类",
                "value": "81",
                "itemStyle": {
                    "normal": {
                        "color": "transparent",
                        "borderColor": "#e9a5ff",
                        "borderWidth": 5
                    }
                }
            }]
        }

        , {
            name: '邮件营销',
            type: 'bar',
            barWidth: 100,
            barGap: '-100%',
            itemStyle: {
                // barBorderRadius: 20, 
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(55,255,249,1)"
                    },
                    {
                        offset: 1,
                        color: "rgba(0,222,215,0.2)"
                    }
                ])
            },
            "label": {
                "normal": {
                    "show": true,
                    "position": "top",
                    "distance": -70,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 40
                    }
                }
            },
            data: [{
                "name": "一类",
                "value": "100",
                "itemStyle": {
                    "normal": {
                        "color": {
                            "x": 0,
                            "y": 0,
                            "x2": 0,
                            "y2": 1,
                            "type": "linear",
                            "global": false,
                            "colorStops": [{
                                "offset": 0,
                                "color": "rgba(0,255,245,0.5)"
                            }, {
                                "offset": 1,
                                "color": "#43bafe"
                            }]
                        }
                    }
                }
            }, {
                "name": "二类",
                "value": "101",
                "itemStyle": {
                    "normal": {
                        "color": {
                            "x": 0,
                            "y": 0,
                            "x2": 0,
                            "y2": 1,
                            "type": "linear",
                            "global": false,
                            "colorStops": [{
                                "offset": 0,
                                "color": "rgba(255,204,0,0.5)"
                            }, {
                                "offset": 1,
                                "color": "#ff7800"
                            }]
                        }
                    }
                }
            }, {
                "name": "三类",
                "value": "81",
                "itemStyle": {
                    "normal": {
                        "color": {
                            "x": 0,
                            "y": 0,
                            "x2": 0,
                            "y2": 1,
                            "type": "linear",
                            "global": false,
                            "colorStops": [{
                                "offset": 0,
                                "color": "rgba(185,183,255,0.5)"
                            }, {
                                "offset": 1,
                                "color": "#e9a5ff"
                            }]
                        }
                    }
                }
            }]
        }, , { // 替代柱状图 默认不显示颜色，是最下方柱图（邮件营销）的value值 - 20 
            type: 'bar',
            barWidth: 100,
            barGap: '-100%',
            stack: '类别',
            itemStyle: {
                color: 'transparent'
            },
            data: [100, 102, 81]
        }


        , {
            "name": "", //头部
            "type": "pictorialBar",
            "symbolSize": [100, 45],
            "symbolOffset": [0, -20],
            "z": 12,
            "data": [{
                "name": "一类",
                "value": "320",
                "symbolPosition": "end",
                "itemStyle": {
                    "normal": {
                        "color": "#ff0000"
                    }
                }
            }, {
                "name": "二类",
                "value": "283",
                "symbolPosition": "end",
                "itemStyle": {
                    "normal": {
                        "color": "#ff0000"
                    }
                }
            }, {
                "name": "三类",
                "value": "272",
                "symbolPosition": "end",
                "itemStyle": {
                    "normal": {
                        "color": "#ff0000"
                    }
                }
            }]
        },
        {
            "name": "",
            "type": "pictorialBar",
            "symbolSize": [100, 45],
            "symbolOffset": [0, -20],
            "z": 12,
            "data": [{
                "name": "一类",
                "value": "103",
                "symbolPosition": "end",
                "itemStyle": {
                    "normal": {
                        "color": "#ff0000"
                    }
                }
            }, {
                "name": "二类",
                "value": "105",
                "symbolPosition": "end",
                "itemStyle": {
                    "normal": {
                        "color": "#ff0000"
                    }
                }
            }, {
                "name": "三类",
                "value": "84",
                "symbolPosition": "end",
                "itemStyle": {
                    "normal": {
                        "color": "#ff0000"
                    }
                }
            }]
        },
        {
            name: '类别',
            type: 'bar',
            barWidth: 100,
            barGap: '-100%',
            stack: '类别',
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1,
                        color: "rgba(0,255,100,0.5)"
                    },
                    {
                        offset: 1,
                        color: "rgba(0,255,100,0.5)"
                    }
                ])
            },
            "label": {
                "normal": {
                    "show": true,
                    "position": "top",
                    "distance": -70,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 40
                    }
                }
            },
            data: [{
                    "name": "一类",
                    "value": "220",
                    "trueVal": "22",
                    "itemStyle": {
                        "normal": {
                            "color": {
                                "x": 0,
                                "y": 0,
                                "x2": 0,
                                "y2": 1,
                                "type": "linear",
                                "global": false,
                                "colorStops": [{
                                    "offset": 1,
                                    "color": "rgba(0,255,100,0.5)"
                                }, {
                                    "offset": 1,
                                    "color": "#43bafe"
                                }]
                            }
                        }
                    }
                }, {
                    "name": "二类",
                    "value": "182",
                    "trueVal": "18",
                    "itemStyle": {
                        "normal": {
                            "color": {
                                "x": 0,
                                "y": 0,
                                "x2": 0,
                                "y2": 1,
                                "type": "linear",
                                "global": false,
                                "colorStops": [{
                                    "offset": 0,
                                    "color": "rgba(255,204,0,0.5)"
                                }, {
                                    "offset": 1,
                                    "color": "#ff7800"
                                }]
                            }
                        }
                    }
                }, {
                    "name": "三类",
                    "value": "191",
                    "trueVal": "19",
                    "itemStyle": {
                        "normal": {
                            "color": {
                                "x": 0,
                                "y": 0,
                                "x2": 0,
                                "y2": 1,
                                "type": "linear",
                                "global": false,
                                "colorStops": [{
                                    "offset": 0,
                                    "color": "rgba(185,183,255,0.5)"
                                }, {
                                    "offset": 1,
                                    "color": "#e9a5ff"
                                }]
                            }
                        }
                    }
                }


            ]
        }
    ]
};