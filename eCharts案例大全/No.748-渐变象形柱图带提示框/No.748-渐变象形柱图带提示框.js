var labelimg = "/asset/get/s/data-1575019476644-Rak5eXt1.png";

option = {
    backgroundColor:"#0E233E",
    "grid": {
        "left": "6%",
        "top": "10%",
        "right": "3%",
        "bottom": "15%"
    },
    "legend": {
        "data": [
            "信息",
            "往下场所",
            "关系",
            "关联",
            "人",
            "物",
            "组织"
        ],
        "top": "92%",
        "icon": "circle",
        "textStyle": {
            "color": "#0DCAD2"
        }
    },
    "color": [
        "#534EE1",
        "#ECD64F",
        "#00E4F0",
        "#44D16D",
        "#124E91",
        "#BDC414",
        "#C8CCA5"
    ],
    "tooltip": {
        "position": "top",
    },
    "xAxis": {
        "type": "category",
        "data": [
            "信息",
            "往下场所",
            "关系",
            "关联",
            "人",
            "物",
            "组织"
        ],
        "axisLabel": {
            "show": false,
            "color": "#999999",
            "fontSize": 16
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
    },
    "yAxis": {
        "type": "value",
        "axisLabel": {
            "show": false,
            "color": "#999999",
            "fontSize": 16
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
    },
    "series": [{
            "name": "信息",
            "data": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "stack": "a",
            "type": "bar"
        },
        {
            "name": "往下场所",
            "data": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "stack": "a",
            "type": "bar"
        },
        {
            "name": "关系",
            "data": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "stack": "a",
            "type": "bar"
        },
        {
            "name": "关联",
            "data": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "stack": "a",
            "type": "bar"
        },
        {
            "name": "人",
            "data": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "stack": "a",
            "type": "bar"
        },
        {
            "name": "物",
            "data": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "stack": "a",
            "type": "bar"
        },
        {
            "name": "组织",
            "data": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "stack": "a",
            "type": "bar"
        },
        {
            "type": "pictorialBar",
            "name": "提示框值",
            "data": [{
                    "name": "",
                    "value": 868,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(params) {
                            var index = params.dataIndex;
                            var str = "{a|" + params.value  + "}\n{c|" + params.value + "个}";
                            return str;
                        },
                        "rich": {
                            "a": {
                                "fontSize": 18,
                                "color": "#534EE1",
                                "align": "center",
                                "height": 40
                            },
                            "c": {
                                "fontSize": 18,
                                "color": "#fff",
                                "padding": [
                                    -2,
                                    0,
                                    2,
                                    0
                                ],
                                "backgroundColor": {
                                    "image": labelimg
                                },
                                "align": "center",
                                "verticalAlign": "bottom",
                                "height": 50,
                                "lineHeight": 40,
                                "width": 100
                            }
                        }
                    },
                    "itemStyle": {
                        "normal": {
                            "color": {
                                "type": "linear",
                                "x": 0,
                                "y": 0,
                                "x2": 0,
                                "y2": 1,
                                "colorStops": [{
                                        "offset": 0,
                                        "color": "rgba(83,78,225,1)"
                                    },
                                    {
                                        "offset": 1,
                                        "color": "rgba(83,78,225,0)"
                                    }
                                ],
                                "global": false
                            }
                        }
                    }
                },
                {
                    "name": "",
                    "value": 306,
                    "label": {
                        "show": true,
                        "position": "top",
                         formatter: function(params) {
                            var index = params.dataIndex;
                            var str = "{a|" + params.value  + "}\n{c|" + params.value + "个}";
                            return str;
                        },
                        "rich": {
                            "a": {
                                "fontSize": 18,
                                "color": "#ECD64F",
                                "align": "center",
                                "height": 40
                            },
                            "c": {
                                "fontSize": 18,
                                "color": "#fff",
                                "padding": [
                                    -4,
                                    0,
                                    8,
                                    0
                                ],
                                "backgroundColor": {
                                    "image": labelimg
                                },
                                "align": "center",
                                "verticalAlign": "bottom",
                                "height": 45,
                                "lineHeight": 40,
                                "width": 100
                            }
                        }
                    },
                    "itemStyle": {
                        "normal": {
                            "color": {
                                "type": "linear",
                                "x": 0,
                                "y": 0,
                                "x2": 0,
                                "y2": 1,
                                "colorStops": [{
                                        "offset": 0,
                                        "color": "rgba(236,214,79,1)"
                                    },
                                    {
                                        "offset": 1,
                                        "color": "rgba(236,214,79,0)"
                                    }
                                ],
                                "global": false
                            }
                        }
                    }
                },
                {
                    "name": "",
                    "value": 162,
                    "label": {
                        "show": true,
                        "position": "top",
                         formatter: function(params) {
                            var index = params.dataIndex;
                            var str = "{a|" + params.value  + "}\n{c|" + params.value + "个}";
                            return str;
                        },
                        "rich": {
                            "a": {
                                "fontSize": 18,
                                "color": "#00E4F0",
                                "align": "center",
                                "height": 40
                            },
                            "c": {
                                "fontSize": 18,
                                "color": "#fff",
                                "padding": [
                                    -4,
                                    0,
                                    8,
                                    0
                                ],
                                "backgroundColor": {
                                    "image": labelimg
                                },
                                "align": "center",
                                "verticalAlign": "bottom",
                                "height": 45,
                                "lineHeight": 40,
                                "width": 100
                            }
                        }
                    },
                    "itemStyle": {
                        "normal": {
                            "color": {
                                "type": "linear",
                                "x": 0,
                                "y": 0,
                                "x2": 0,
                                "y2": 1,
                                "colorStops": [{
                                        "offset": 0,
                                        "color": "rgba(0,228,240,1)"
                                    },
                                    {
                                        "offset": 1,
                                        "color": "rgba(0,228,240,0)"
                                    }
                                ],
                                "global": false
                            }
                        }
                    }
                },
                {
                    "name": "",
                    "value": 362,
                    "label": {
                        "show": true,
                         formatter: function(params) {
                            var index = params.dataIndex;
                            var str = "{a|" + params.value  + "}\n{c|" + params.value + "个}";
                            return str;
                        },
                        "position": "top",
                        "rich": {
                            "a": {
                                "fontSize": 18,
                                "color": "#44D16D",
                                "align": "center",
                                "height": 40
                            },
                            "c": {
                                "fontSize": 18,
                                "color": "#fff",
                                "padding": [
                                    -4,
                                    0,
                                    8,
                                    0
                                ],
                                "backgroundColor": {
                                    "image": labelimg
                                },
                                "align": "center",
                                "verticalAlign": "bottom",
                                "height": 45,
                                "lineHeight": 40,
                                "width": 100
                            }
                        }
                    },
                    "itemStyle": {
                        "normal": {
                            "color": {
                                "type": "linear",
                                "x": 0,
                                "y": 0,
                                "x2": 0,
                                "y2": 1,
                                "colorStops": [{
                                        "offset": 0,
                                        "color": "rgba(68,209,109,1)"
                                    },
                                    {
                                        "offset": 1,
                                        "color": "rgba(68,209,109,0)"
                                    }
                                ],
                                "global": false
                            }
                        }
                    }
                },
                {
                    "name": "",
                    "value": 460,
                    "label": {
                        "show": true,
                        "position": "top",
                         formatter: function(params) {
                            var index = params.dataIndex;
                            var str = "{a|" + params.value  + "}\n{c|" + params.value + "个}";
                            return str;
                        },
                        "rich": {
                            "a": {
                                "fontSize": 18,
                                "color": "#124E91",
                                "align": "center",
                                "height": 30
                            },
                            "c": {
                                "fontSize": 18,
                                "color": "#fff",
                                "padding": [
                                    -4,
                                    0,
                                    8,
                                    0
                                ],
                                "backgroundColor": {
                                    "image": labelimg
                                },
                                "align": "center",
                                "verticalAlign": "bottom",
                                "height": 45,
                                "lineHeight": 40,
                                "width": 100
                            }
                        }
                    },
                    "itemStyle": {
                        "normal": {
                            "color": {
                                "type": "linear",
                                "x": 0,
                                "y": 0,
                                "x2": 0,
                                "y2": 1,
                                "colorStops": [{
                                        "offset": 0,
                                        "color": "rgba(18,78,145,1)"
                                    },
                                    {
                                        "offset": 1,
                                        "color": "rgba(18,78,145,0)"
                                    }
                                ],
                                "global": false
                            }
                        }
                    }
                },
                {
                    "name": "",
                    "value": 606,
                    "label": {
                        "show": true,
                        "position": "top",
                         formatter: function(params) {
                            var index = params.dataIndex;
                            var str = "{a|" + params.value  + "}\n{c|" + params.value + "个}";
                            return str;
                        },
                        "rich": {
                            "a": {
                                "fontSize": 18,
                                "color": "#BDC414",
                                "align": "center",
                                "height": 30
                            },
                            "c": {
                                "fontSize": 18,
                                "color": "#fff",
                                "padding": [
                                    -4,
                                    0,
                                    8,
                                    0
                                ],
                                "backgroundColor": {
                                    "image": labelimg
                                },
                                "align": "center",
                                "verticalAlign": "bottom",
                                "height": 45,
                                "lineHeight": 40,
                                "width": 100
                            }
                        }
                    },
                    "itemStyle": {
                        "normal": {
                            "color": {
                                "type": "linear",
                                "x": 0,
                                "y": 0,
                                "x2": 0,
                                "y2": 1,
                                "colorStops": [{
                                        "offset": 0,
                                        "color": "rgba(189,196,20,1)"
                                    },
                                    {
                                        "offset": 1,
                                        "color": "rgba(189,196,20,0)"
                                    }
                                ],
                                "global": false
                            }
                        }
                    }
                },
                {
                    "name": "",
                    "value": 506,
                    "label": {
                        "show": true,
                        "position": "top",
                         formatter: function(params) {
                            var index = params.dataIndex;
                            var str = "{a|" + params.value  + "}\n{c|" + params.value + "个}";
                            return str;
                        },
                        "rich": {
                            "a": {
                                "fontSize": 18,
                                "color": "#C8CCA5",
                                "align": "center",
                                "height": 30
                            },
                            "c": {
                                "fontSize": 18,
                                "color": "#fff",
                                "padding": [
                                    -4,
                                    0,
                                    8,
                                    0
                                ],
                                "backgroundColor": {
                                    "image": labelimg
                                },
                                "align": "center",
                                "verticalAlign": "bottom",
                                "height": 45,
                                "lineHeight": 40,
                                "width": 100
                            }
                        }
                    },
                    "itemStyle": {
                        "normal": {
                            "color": {
                                "type": "linear",
                                "x": 0,
                                "y": 0,
                                "x2": 0,
                                "y2": 1,
                                "colorStops": [{
                                        "offset": 0,
                                        "color": "rgba(200,204,165,1)"
                                    },
                                    {
                                        "offset": 1,
                                        "color": "rgba(200,204,165,0)"
                                    }
                                ],
                                "global": false
                            }
                        }
                    }
                }
            ],
            "stack": "a",
            "symbol": "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z"
        }
    ]
}