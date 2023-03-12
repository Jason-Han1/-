option = {
    "color": ["#4a7eba", "#be4b47", "#92d050"],
    "legend": {
        "data": [{
            "name": "预报水深",
            "icon": "path://m"
        }, {
            "name": "计划水深",
            "icon": "stack"
        }, {
            "name": "实测水深",
            "icon": "stack"
        }],
        "textStyle": {
            "color": "#ffffff",
            "fontSize": "12",
            "rich": {
                "top": {
                    "backgroundColor": "#4a7eba",
                    "padding": [10, 15, 10, 15]
                }
            }
        },
        formatter: function (name) {
            var str = "bottom";
            if (name === "预报水深") str = "top";
            return "{" + str + "|" + name + "}";
          },
        "itemHeight": 4,
        "itemWidth": 40,
        "borderRadius": 40,
        "bottom": 0,
        "left": -35
    },
    "tooltip": {
        "show": true
    },
    "grid": {
        "top": "3%",
        "left": "0%",
        "right": "4%",
        "bottom": "20%",
        "containLabel": true
    },
    "xAxis": {
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "lineStyle": {
                "color": "#ffffff"
            }
        },
        "scale": true,
        "inverse": true,
        "show": false,
        "axisTick": {
            "show": false
        },
        "max": 914,
        "boundaryGap": false,
        "position": "top",
        "axisLabel": {}
    },
    "yAxis": {
        "type": "value",
        "axisLine": {
            "lineStyle": {
                "color": "#ffffff"
            }
        },
        "inverse": true,
        "show": false,
        "axisTick": {
            "show": false
        },
        "splitLine": {
            "show": false
        }
    },
    "series": [{
        "name": "预报水深",
        "type": "line",
        "step": "end",
        "symbol": "none",
        "markPoint": {
            "symbolSize": [0, 1],
            "label": {
                "verticalAlign": "top",
                formatter: function (params) {
                  var str = params.value.split("");
                  var arr = [];
                  for (var i = 0; i < str.length; i++) {
                    var text = str[i];
                    arr.push(text);
                  }
                  return arr.join("\n");
                }
            },
            "data": [{
                "xAxis": 25.4,
                "yAxis": 1,
                "value": "浏河口"
            }, {
                "xAxis": 153.9,
                "yAxis": 1,
                "value": "江阴长江大桥"
            }, {
                "xAxis": 325,
                "yAxis": 1,
                "value": "新生圩"
            }, {
                "xAxis": 345,
                "yAxis": 1,
                "value": "燕子矶"
            }, {
                "xAxis": 438,
                "yAxis": 1,
                "value": "芜湖长江大桥"
            }, {
                "xAxis": 475,
                "yAxis": 1,
                "value": "高安圩"
            }, {
                "xAxis": 669,
                "yAxis": 1,
                "value": "吉阳矶"
            }, {
                "xAxis": 844,
                "yAxis": 1,
                "value": "上巢湖"
            }]
        },
        "markArea": {
            "data": [
                [{
                    "coord": [25.4, 0],
                    "itemStyle": {
                        "color": "#4a7ebb"
                    },
                    "value": 0
                }, {
                    "coord": [153.9, 12.5],
                    "value": 0,
                    "itemStyle": {
                        "color": "#4a7ebb"
                    }
                }],
                [{
                    "coord": [153.9, 0],
                    "itemStyle": {
                        "color": "#4a7ebb"
                    },
                    "value": 0
                }, {
                    "coord": [332.8, 12.5],
                    "value": 0,
                    "itemStyle": {
                        "color": "#4a7ebb"
                    }
                }],
                [{
                    "coord": [332.8, 0],
                    "itemStyle": {
                        "color": "#4a7ebb"
                    },
                    "value": 0
                }, {
                    "coord": [337, 10.8],
                    "value": 0,
                    "itemStyle": {
                        "color": "#4a7ebb"
                    }
                }],
                [{
                    "coord": [337, 0],
                    "itemStyle": {
                        "color": "#4a7ebb"
                    },
                    "value": 0
                }, {
                    "coord": [438, 9.2],
                    "value": 0,
                    "itemStyle": {
                        "color": "#4a7ebb"
                    }
                }],
                [{
                    "coord": [438, 0],
                    "itemStyle": {
                        "color": "#4a7ebb"
                    },
                    "value": 0
                }, {
                    "coord": [475, 7.5],
                    "value": 0,
                    "itemStyle": {
                        "color": "#4a7ebb"
                    }
                }],
                [{
                    "coord": [475, 0],
                    "itemStyle": {
                        "color": "#4a7ebb"
                    },
                    "value": 0
                }, {
                    "coord": [669, 6],
                    "value": 0,
                    "itemStyle": {
                        "color": "#4a7ebb"
                    }
                }],
                [{
                    "coord": [669, 0],
                    "itemStyle": {
                        "color": "#4a7ebb"
                    },
                    "value": 0
                }, {
                    "coord": [844, 5],
                    "value": 0,
                    "itemStyle": {
                        "color": "#4a7ebb"
                    }
                }]
            ]
        },
        "lineStyle": {
            "width": 0
        },
        "data": [
            [153.9, 0],
            [25.4, 12.5],
            [153.9, 12.5],
            [332.8, 10.8],
            [337, 9.2],
            [438, 7.5],
            [475, 6],
            [669, 5]
        ],
        "z": 1
    }, {
        "name": "计划水深",
        "type": "line",
        "step": "end",
        "symbol": "none",
        "lineStyle": {
            "width": 0
        },
        "markArea": {
            "data": [
                [{
                    "coord": [25.4, 11.9],
                    "value": 1,
                    "itemStyle": {
                        "color": "#be4b47"
                    }
                }, {
                    "coord": [153.9, 12.5],
                    "value": 1,
                    "itemStyle": {
                        "color": "#be4b47"
                    }
                }],
                [{
                    "coord": [153.9, 11.9],
                    "value": 1,
                    "itemStyle": {
                        "color": "#be4b47"
                    }
                }, {
                    "coord": [332.8, 12.5],
                    "value": 1,
                    "itemStyle": {
                        "color": "#be4b47"
                    }
                }],
                [{
                    "coord": [332.8, 9.9],
                    "value": 1,
                    "itemStyle": {
                        "color": "#be4b47"
                    }
                }, {
                    "coord": [337, 10.5],
                    "value": 1,
                    "itemStyle": {
                        "color": "#be4b47"
                    }
                }],
                [{
                    "coord": [337, 8.4],
                    "value": 1,
                    "itemStyle": {
                        "color": "#be4b47"
                    }
                }, {
                    "coord": [438, 9],
                    "value": 1,
                    "itemStyle": {
                        "color": "#be4b47"
                    }
                }],
                [{
                    "coord": [438, 6.9],
                    "value": 1,
                    "itemStyle": {
                        "color": "#be4b47"
                    }
                }, {
                    "coord": [475, 7.5],
                    "value": 1,
                    "itemStyle": {
                        "color": "#be4b47"
                    }
                }],
                [{
                    "coord": [475, 5.4],
                    "value": 1,
                    "itemStyle": {
                        "color": "#be4b47"
                    }
                }, {
                    "coord": [669, 6],
                    "value": 1,
                    "itemStyle": {
                        "color": "#be4b47"
                    }
                }],
                [{
                    "coord": [669, 4.4],
                    "value": 1,
                    "itemStyle": {
                        "color": "#be4b47"
                    }
                }, {
                    "coord": [844, 5],
                    "value": 1,
                    "itemStyle": {
                        "color": "#be4b47"
                    }
                }]
            ]
        },
        "data": [
            [669, 5],
            [475, 6],
            [438, 7.5],
            [337, 9],
            [332.8, 10.5],
            [153.9, 12.5],
            [25.4, 12.5]
        ],
        "z": 2
    }, {
        "name": "实测水深",
        "type": "line",
        "step": "end",
        "symbol": "none",
        "lineStyle": {
            "width": 0
        },
        "markArea": {
            "data": [
                [{
                    "coord": [332.8, 10.5],
                    "value": 2
                }, {
                    "coord": [337, 10.8],
                    "value": 2,
                    "itemStyle": {
                        "color": "#92d050"
                    },
                    "name": "燕子矶~新生圩",
                    "label": {
                        "show": false
                    }
                }],
                [{
                    "coord": [153.9, 12.2],
                    "value": 2
                }, {
                    "coord": [332.8, 12.5],
                    "value": 2,
                    "itemStyle": {
                        "color": "#92d050"
                    },
                    "name": "新生圩~江阴长江大桥",
                    "label": {
                        "show": false
                    }
                }],
                [{
                    "coord": [25.4, 12.2],
                    "value": 2
                }, {
                    "coord": [153.9, 12.5],
                    "value": 2,
                    "itemStyle": {
                        "color": "#92d050"
                    },
                    "name": "江阴长江大桥~浏河口",
                    "label": {
                        "show": false
                    }
                }]
            ]
        },
        "data": [
            [332.8, 10.8],
            [153.9, 12.5],
            [25.4, 12.5]
        ],
        "z": 3
    }, {
        "name": "城市",
        "type": "scatter",
        "markPoint": {
            "symbolOffset": [0, -5],
            "symbolSize": [0, 1],
            "label": {
                "textBorderWidth": 0,
                // color:'#000'
            },
            "data": [{
                "xAxis": 793,
                "yAxis": 0,
                "value": "九江"
            }]
        }
    }, {
        "name": "城市",
        "type": "scatter",
        "markPoint": {
            "symbolOffset": [0, -5],
            "symbolSize": [0, 1],
            "label": {
                "textBorderWidth": 0,
                // color:'#000'
            },
            "data": [{
                "xAxis": 639,
                "yAxis": 0,
                "value": "安庆"
            }]
        }
    }, {
        "name": "城市",
        "type": "scatter",
        "markPoint": {
            "symbolOffset": [0, -5],
            "symbolSize": [0, 1],
            "label": {
                "textBorderWidth": 0,
                // color:'#000'
            },
            "data": [{
                "xAxis": 442,
                "yAxis": 0,
                "value": "芜湖"
            }]
        }
    }, {
        "name": "城市",
        "type": "scatter",
        "markPoint": {
            "symbolOffset": [0, -5],
            "symbolSize": [0, 1],
            "label": {
                "textBorderWidth": 0,
                // color:'#000'
            },
            "data": [{
                "xAxis": 347,
                "yAxis": 0,
                "value": "南京"
            }]
        }
    }, {
        "name": "城市",
        "type": "scatter",
        "markPoint": {
            "symbolOffset": [0, -5],
            "symbolSize": [0, 1],
            "label": {
                "textBorderWidth": 0,
                // color:'#000'
            },
            "data": [{
                "xAxis": 274,
                "yAxis": 0,
                "value": "镇江"
            }]
        }
    }, {
        "name": "城市",
        "type": "scatter",
        "markPoint": {
            "symbolOffset": [0, -5],
            "symbolSize": [0, 1],
            "label": {
                "textBorderWidth": 0,
                // color:'#000'
            },
            "data": [{
                "xAxis": 65,
                "yAxis": 0,
                "value": "白茆"
            }]
        }
    }]
}