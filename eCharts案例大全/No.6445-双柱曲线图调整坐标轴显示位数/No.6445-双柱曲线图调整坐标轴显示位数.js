option = {
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            "shadowStyle": {
                "color": "rgba(0,27,251,0.03)"
            }
        },
        "textStyle": {
            "color": "#fff"
        }
    },
    "grid": {
        "x": 45,
        "y": 65,
        "x2": 50,
        "y2": 80,
        "borderWidth": 1
    },
    "legend": {
        "data": [
            "总数",
            "已办结数",
            "办结率"
        ],
        "left": 50,
        "bottom": 14,
        "icon": "circle",
        "itemWidth": 10,
        "selectedMode": false,
        "orient": "horizontal"
    },
    "xAxis": [{
        "type": "category",
        "data": [
            "部门1",
            "部门2",
            "部门3",
            "部门4",
            "部门5",
            "部门6",
            "部门7",
            "部门8",
            "部门9",
            "部门10"
        ],
        "axisLabel": {
            "interval": 0,
            "rotate": 40,
            "textStyle": {
                "color": "#666"
            }
        },
        "axisTick": {
            "show": false,
            "alignWithLabel": true
        },
        "axisLine": {
            "lineStyle": {
                "color": "#F2F4F8"
            }
        },
        "splitArea": {
            "show": true
        },
    }],
    "yAxis": [{
            "name": "件",
            "splitLine": {
                "show": false
            },
            "splitArea": {
                "show": false
            },
            "axisTick": {
                "show": false,
                "alignWithLabel": true
            },
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#bbb"
                }
            },
            "axisLabel": {
                "interval": 0,
                "textStyle": {
                    "color": "#bbb"
                }
            }
        },
        {
            "name": "办结率（%）",
            // "max": 1,
            "splitLine": {
                "show": false
            },
            "axisTick": {
                "show": false,
                "alignWithLabel": true
            },
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#bbb"
                }
            },
            "axisLabel": {
                "interval": 0,
                "textStyle": {
                    "color": "#bbb"
                },
                "formatter": function (value, index){
                    console.log(value,index)
                    var numStr = value.toString();
                    var arr = numStr.split(".");
                    if(arr[1]&&arr[1].length>0){
                        console.log(numStr)
                        return Number(numStr).toFixed(2);
                    }else{
                        return value;
                    }
                }
            }
        }
    ],
    "series": [{
            "name": "总数",
            "type": "bar",
            "yAxisIndex": 0,
            "barWidth": "14",
            "data": [
                200,
                150,
                140,
                200,
                180,
                120,
                80,
                120,
                240,
                210
            ],
            "label": {
                "show": true,
                "position": "top",
                "distance": 20,
                "verticalAlign": "middle",
                "textStyle": {
                    "color": "black",
                    "fontSize": 12
                }
            },
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
                                "color": "#458EF3"
                            },
                            {
                                "offset": 1,
                                "color": "#89D8FE"
                            }
                        ]
                    },
                    "barBorderRadius": [
                        14,
                        14,
                        0,
                        0
                    ]
                }
            }
        },
        {
            "name": "已办结数",
            "type": "bar",
            "yAxisIndex": 0,
            "symbolSize": [
                14,
                "100%"
            ],
            "barWidth": "14",
            "barGap": "60%",
            "data": [
                100,
                90,
                80,
                120,
                120,
                50,
                30,
                50,
                140,
                110
            ],
            "label": {
                "show": true,
                "position": "top",
                "distance": 20,
                "verticalAlign": "middle",
                "textStyle": {
                    "color": "black",
                    "fontSize": 12
                }
            },
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
                                "color": "rgba(250,180,101,0.8)"
                            },
                            {
                                "offset": 1,
                                "color": "rgba(250,180,101,1)"
                            }
                        ]
                    },
                    "barBorderRadius": [
                        14,
                        14,
                        0,
                        0
                    ]
                }
            }
        },
        {
            "name": "办结率",
            "type": "line",
            "data": [
                "0.66",
                "0.77",
                "0.99",
                "0.11",
                "0.54",
                "0.88",
                "0.22",
                "0.44",
                "0.33",
                "0.22"
            ],
            "yAxisIndex": 1,
            "smooth": true,
            "symbolSize": 0,
            "lineStyle": {
                "color": "#2fca95",
                "width": 2
            },
            "itemStyle": {
                "normal": {
                    "color": "#2fca95"
                }
            },
            "markLine": {
                "label": {
                    "show": true,
                    "position": "end"
                },
                "lineStyle": {
                    "color": "#2fca95"
                },
                "data": [{
                    "name": "平均值",
                    "yAxis": 52.54
                }]
            }
        }
    ]
};