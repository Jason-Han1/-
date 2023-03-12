option = {
    "grid": {
        "left": "50%",
        "right": "-10%",
        "bottom": "2%",
        "top": "7%",
        "containLabel": true
    },
    backgroundColor: "rgba(2,2,2,0.01)",
    "xAxis": {
        "type": "value",
        "min": 0,
        "inverse": true,
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "show": false
        }
    },
    "yAxis": {
        "type": "category",
        "data": [0, 7, 15, 16, 17],
        "inverse": true,
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "show": false
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "#fff",
                "width": 2
            }
        },
    },
    "series": [{
            "name": "",
            "type": "line",
            "connectNulls": true,
            "data": [{
                "value": 1.8,
                "name": 1,
                "text": null
            }, {
                "value": 5,
                "name": 3,
                "text": "8167.00"
            }, {
                "value": 6.5,
                "name": 4,
                "text": null
            }, {
                "value": 8,
                "name": 5,
                "text": null
            }, {
                "value": 8,
                "name": 5,
                "text": "3.05"
            }],
            "itemStyle": {
                "normal": {
                    color: "blue" //折线的拐点颜色
                },
            },
            "lineStyle": {
                "color": "#5ac1fc",
                "width": 2
            },
            "symbol": "circle",
            "symbolSize": 9,
            "label": {
                "show": true,
                "position": [-40, -5],
                formatter: function(params) {

                    return "第" + params.name + "名";
                },
                color: "black",
                "rich": {
                    "c": {
                        "color": "#575655",
                        "align": "center"
                    },
                    "b": {
                        "color": "#39b2ff",
                        "align": "center"
                    }
                }
            }
        },
        {
            "name": "世界排名",
            "type": "line",
            "connectNulls": true,
            "markArea": {
                "silent": true,
                "data": [
                    [{
                        "label": {
                            "show": true,
                            "color": "#464646",
                            "fontWeight": "bolder",
                            "position": ["120%", "0%"],
                            "offset": [-55, -28],
                            "formatter": "名称三\n{c|}",
                            "rich": {
                                "c": {
                                    "align": "left",
                                    "height": 21,
                                    "backgroundColor": {
                                        // "image": "image/1.f1feef4.png"
                                    }
                                }
                            }
                        },
                        "xAxis": 2,
                        "itemStyle": {
                            "color": "rgba(0,0,0,0.2)",
                            // "borderWidth": 2,
                            "borderType": "solid",
                            "borderColor": "#eeeeee"
                        },
                        "value": [0, 1]
                    }, {
                        "xAxis": 1.5,
                    }],
                    [{
                        "label": {
                            "show": true,
                            "color": "#464646",
                            "fontWeight": "bolder",
                            "position": ["100%", "0%"],
                            "offset": [-25, -28],
                            "formatter": "  {a|名称2}\n{c|}",
                            "rich": {
                                "a": {
                                    "color": "rgb(67, 137, 249)"
                                },
                                "c": {
                                    "align": "center",
                                    "height": 21,
                                    "backgroundColor": {
                                        // "image": "image/2.e49140a.png"
                                    }
                                }
                            }
                        },
                        "xAxis": 8,
                        "itemStyle": {
                            "color": {
                                "type": "linear",
                                "x": 1,
                                "y": 0,
                                "x2": 0,
                                "y2": 0,
                                "colorStops": [{
                                    "offset": 0,
                                    "color": "rgba(252,123,32,0.1)"
                                }, {
                                    "offset": 1,
                                    "color": "rgba(252,123,32,0.1)"
                                }],
                                "global": false
                            },
                            "borderWidth": 1,
                            "borderType": "solid",
                            "borderColor": "#eeeeee"
                        },
                        "value": [0, 2]
                    }, {
                        "xAxis": 5,
                    }],

                    [{
                        "label": {
                            "show": true,
                            "color": "#464646",
                            "fontWeight": "bolder",
                            "position": ["0%", "0%"],
                            "offset": [-15, -28],
                            "formatter": "wer",
                            "rich": {
                                "c": {
                                    "align": "left",
                                    "height": 21,
                                    "backgroundColor": {
                                        // "image": "image/4.01514f5.png"
                                    }
                                }
                            }
                        },
                        "yAxis": -5,
                        "xAxis": 5,
                        "itemStyle": {
                            "color": {
                                "type": "linear",
                                "x": 1,
                                "y": 0,
                                "x2": 0,
                                "y2": 0,
                                "colorStops": [{
                                    "offset": 0,
                                    "color": "RGBA(146, 134, 231, 0.1)"
                                }, {
                                    "offset": 1,
                                    "color": "RGBA(146, 134, 231, 0.1)"
                                }],
                                "global": false
                            }
                        }
                    }, {
                        // "yAxis": 2,
                        "xAxis": 2
                    }],
                    [{
                        "label": {
                            "show": true,
                            "color": "#464646",
                            "fontWeight": "bolder",
                            "position": ["10%", "0%"],
                            "offset": [-280, -28],
                            "formatter": "名称1",
                            "rich": {
                                "c": {
                                    "align": "left",
                                    "height": 21,
                                    "backgroundColor": {
                                        // "image": "image/4.01514f5.png"
                                    }
                                }
                            }
                        },
                        // "yAxis": 3,
                        "xAxis": 5,
                        "itemStyle": {
                            "color": {
                                "type": "linear",
                                "x": 1,
                                "y": 0,
                                "x2": 0,
                                "y2": 0,
                                "colorStops": [{
                                    "offset": 0,
                                    "color": "RGBA(146, 134, 231, 0.1)"
                                }, {
                                    "offset": 1,
                                    "color": "RGBA(146, 134, 231, 0.1)"
                                }],
                                "global": false
                            }
                        }
                    }, {
                        // "yAxis": 5,
                        "xAxis": 2
                    }],
                    [{
                        "label": {
                            "show": true,
                            "color": "#10a6ff",
                            "fontWeight": "bolder",
                            "position": ["0%", "0%"],
                            "offset": [290, 60],
                            "formatter": "{c|15分}",
                            "rich": {
                                "c": {
                                    "align": "left",
                                    "height": 20,
                                    "color": "blue",
                                    "fontSize": 20
                                }
                            }
                        },
                        "coord": [0, 0],
                        "x": 10,
                        "y": 28,
                        "itemStyle": {
                            "color": "#e3f3ff"
                        }
                    }, {
                        "coord": [100, 5],
                        "x": 10,
                        "y": 148.5
                    }],
                    [{
                        "label": {
                            "show": true,
                            "color": "#10a6ff",
                            "fontWeight": "bolder",
                            "position": ["0%", "0%"],
                            "offset": [290, 170],
                            "formatter": "{c|10分}",
                            "rich": {
                                "c": {
                                    "align": "left",
                                    "height": 20,
                                    "color": "blue",
                                    "fontSize": 20
                                }
                            }
                        },
                        "coord": [0, 0],
                        "x": 10,
                        "y": 28,
                        "itemStyle": {
                            "color": "#e3f3ff"
                        }
                    }, {
                        "coord": [100, 5],
                        "x": 10,
                        "y": 148.5
                    }],
                    [{
                        "label": {
                            "show": true,
                            "color": "#10a6ff",
                            "fontWeight": "bolder",
                            "position": ["0%", "0%"],
                            "offset": [290, 280],
                            "formatter": "{c|8分}",
                            "rich": {
                                "c": {
                                    "align": "left",
                                    "height": 20,
                                    "color": "blue",
                                    "fontSize": 20
                                }
                            }
                        },
                        "coord": [0, 0],
                        "x": 10,
                        "y": 28,
                        "itemStyle": {
                            "color": "#e3f3ff"
                        }
                    }, {
                        "coord": [100, 5],
                        "x": 10,
                        "y": 148.5
                    }],
                    [{
                        "label": {
                            "show": true,
                            "color": "#10a6ff",
                            "fontWeight": "bolder",
                            "position": ["0%", "0%"],
                            "offset": [290, 390],
                            "formatter": "{c|6分}",
                            "rich": {
                                "c": {
                                    "align": "left",
                                    "height": 20,
                                    "color": "blue",
                                    "fontSize": 20
                                }
                            }
                        },
                        "coord": [0, 0],
                        "x": 10,
                        "y": 28,
                        "itemStyle": {
                            "color": "#e3f3ff"
                        }
                    }, {
                        "coord": [100, 5],
                        "x": 10,
                        "y": 148.5
                    }],
                    [{
                        "label": {
                            "show": true,
                            "color": "#10a6ff",
                            "fontWeight": "bolder",
                            "position": ["0%", "0%"],
                            "offset": [290, 500],
                            "formatter": "{c|6分}",
                            "rich": {
                                "c": {
                                    "align": "left",
                                    "height": 20,
                                    "color": "blue",
                                    "fontSize": 20
                                }
                            }
                        },
                        "coord": [0, 0],
                        "x": 10,
                        "y": 28,
                        "itemStyle": {
                            "color": "#e3f3ff"
                        }
                    }, {
                        "coord": [100, 5],
                        "x": 10,
                        "y": 148.5
                    }],
                    [{
                        "label": {
                            "show": true,
                            "color": "#10a6ff",
                            "fontWeight": "bolder",
                            "position": ["0%", "0%"],
                            "offset": [160, 20],
                            "formatter": "{c|营业收入(亿元)}",
                            "rich": {
                                "c": {
                                    "align": "left",
                                    "height": 20,
                                    "color": "#5c5c5c",
                                    "fontSize": 14
                                }
                            }
                        },
                        "coord": [0, 0],
                        "x": 10,
                        "y": 70,
                        "itemStyle": {
                            "color": "#e3f3ff"
                        }
                    }, {
                        "coord": [100, 5],
                        "x": 10,
                        "y": 192.5
                    }],
                    [{
                        "label": {
                            "show": true,
                            "color": "#10a6ff",
                            "fontWeight": "bolder",
                            "position": ["0%", "0%"],
                            "offset": [160, 50],
                            "formatter": "{c|利润总额(亿元)}",
                            "rich": {
                                "c": {
                                    "align": "left",
                                    "height": 20,
                                    "color": "#5c5c5c",
                                    "fontSize": 14
                                }
                            }
                        },
                        "coord": [0, 0],
                        "x": 10,
                        "y": 150,
                        "itemStyle": {
                            "color": "#e3f3ff"
                        }
                    }, {
                        "coord": [100, 5],
                        "x": 10,
                    }],
                    [{
                        "label": {
                            "show": true,
                            "color": "#10a6ff",
                            "fontWeight": "bolder",
                            "position": ["0%", "0%"],
                            "offset": [160, 160],
                            "formatter": "{c|利润总额2(亿元)}",
                            "rich": {
                                "c": {
                                    "align": "left",
                                    "height": 20,
                                    "color": "#5c5c5c",
                                    "fontSize": 14
                                }
                            }
                        },
                        "coord": [0, 0],
                        "x": 10,
                        "y": 150,
                        "itemStyle": {
                            "color": "#e3f3ff"
                        }
                    }, {
                        "coord": [100, 5],
                        "x": 10,
                    }],
                    [{
                        "label": {
                            "show": true,
                            "color": "#10a6ff",
                            "fontWeight": "bolder",
                            "position": ["0%", "0%"],
                            "offset": [160, 270],
                            "formatter": "{c|利润总额3(亿元)}",
                            "rich": {
                                "c": {
                                    "align": "left",
                                    "height": 20,
                                    "color": "#5c5c5c",
                                    "fontSize": 14
                                }
                            }
                        },
                        "coord": [0, 0],
                        "x": 10,
                        "y": 150,
                        "itemStyle": {
                            "color": "#e3f3ff"
                        }
                    }, {
                        "coord": [100, 5],
                        "x": 10,
                        // "y": 192.5
                    }],
                    [{
                        "label": {
                            "show": true,
                            "color": "#10a6ff",
                            "fontWeight": "bolder",
                            "position": ["0%", "0%"],
                            "offset": [160, 380],
                            "formatter": "{c|利润总额4(亿元)}",
                            "rich": {
                                "c": {
                                    "align": "left",
                                    "height": 20,
                                    "color": "#5c5c5c",
                                    "fontSize": 14
                                }
                            }
                        },
                        "coord": [0, 0],
                        "x": 10,
                        "y": 150,
                        "itemStyle": {
                            "color": "#e3f3ff"
                        }
                    }, {
                        "coord": [100, 5],
                        "x": 10,
                    }]
                ]
            },
            "itemStyle": {
                "normal": {}
            },
            "lineStyle": {
                "color": "rgba(245, 166, 36, 1)",
                "width": 2
            }
        }
    ]
}