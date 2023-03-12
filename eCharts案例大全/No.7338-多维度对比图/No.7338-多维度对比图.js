option = {
    "toolbox": {
        "show": true,
        "top": "12%",
        "right": "5%"
    },
    "tooltip": {
        "trigger": "item",
        "confine": true
    },
    "legend": {
        "right": "center",
        "width": "90%",
        "itemWidth": 10,
        "data": [
            "A",
            "B",
            null,
            null,
            null,
            null,
            null,
            null
        ],
        "type": "scroll",
        "align": "left",
        "selectedMode": true,
        "selected": null
    },
    "grid": [{
            "gridIndex": 0,
            "bottom": 160
        },
        {
            "height": 60,
            "gridIndex": 1,
            "tooltip": {
                "show": false
            },
            "bottom": 100
        },
        {
            "height": 60,
            "gridIndex": 2,
            "tooltip": {
                "show": false
            },
            "bottom": 40
        }
    ],
    "xAxis": [{
            "type": "category",
            "data": [
                "上午7-11",
                "下午15-18",
                "中午12-14",
                "凌晨0-6",
                "晚上19-23",
                "上午7-11",
                "下午15-18",
                "中午12-14",
                "凌晨0-6",
                "晚上19-23",
                "上午7-11",
                "下午15-18",
                "中午12-14",
                "凌晨0-6",
                "晚上19-23",
                "上午7-11",
                "下午15-18",
                "中午12-14",
                "凌晨0-6",
                "晚上19-23"
            ],
            "gridIndex": 0,
            "zlevel": 3,
            "show": true,
            "axisLine": {
                "lineStyle": {
                    "color": "#B1B1B1"
                }
            },
            "axisLabel": {
                "textStyle": {
                    "color": "#424648"
                }
            }
        },
        {
            "type": "category",
            "isSeries": 1,
            "gridIndex": 1,
            "zlevel": 2,
            "show": true,
            "axisLine": {
                "show": false
            },
            "axisLabel": {
                "show": false
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
            "gridIndex": 2,
            "zlevel": 1,
            "show": true,
            "axisLine": {
                "show": false
            },
            "axisLabel": {
                "show": false
            },
            "splitLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            }
        }
    ],
    "yAxis": [{
            "type": "value",
            "axisLabel": {
                "formatter": "{value} ",
                "textStyle": {
                    "color": "#424648"
                }
            },
            "gridIndex": 0,
            "show": true,
            "splitLine": {
                "show": true
            },
            "axisLine": {
                "lineStyle": {
                    "color": "#B1B1B1"
                }
            }
        },
        {
            "type": "value",
            "gridIndex": 1,
            "show": true,
            "axisLabel": {
                "show": false
            },
            "splitLine": {
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
            "type": "value",
            "gridIndex": 2,
            "show": true,
            "axisLabel": {
                "show": false
            },
            "splitLine": {
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
    "series": [{
            "yAxisIndex": 0,
            "type": "bar",
            "name": "A",
            "stack": "总量0",
            "data": [{
                    "value": "2.01",
                    "originV": "2.01",
                    "percent_value": 50
                },
                {
                    "value": "1.90",
                    "originV": "1.9",
                    "percent_value": 50
                },
                {
                    "value": "1.78",
                    "originV": "1.78",
                    "percent_value": 50
                },
                {
                    "value": "1.84",
                    "originV": "1.84",
                    "percent_value": 50
                },
                {
                    "value": "2.11",
                    "originV": "2.11",
                    "percent_value": 50
                },
                {
                    "value": "2.07",
                    "originV": "2.07",
                    "percent_value": 50
                },
                {
                    "value": "1.95",
                    "originV": "1.95",
                    "percent_value": 50
                },
                {
                    "value": "1.83",
                    "originV": "1.83",
                    "percent_value": 50
                },
                {
                    "value": "1.90",
                    "originV": "1.9",
                    "percent_value": 50
                },
                {
                    "value": "2.18",
                    "originV": "2.18",
                    "percent_value": 50
                },
                {
                    "value": "0.53",
                    "originV": "0.53",
                    "percent_value": 50
                },
                {
                    "value": "0.66",
                    "originV": "0.66",
                    "percent_value": 50
                },
                {
                    "value": "0.51",
                    "originV": "0.51",
                    "percent_value": 50
                },
                {
                    "value": "0.60",
                    "originV": "0.6",
                    "percent_value": 50
                },
                {
                    "value": "0.44",
                    "originV": "0.44",
                    "percent_value": 50
                },
                {
                    "value": "0.58",
                    "originV": "0.58",
                    "percent_value": 50
                },
                {
                    "value": "0.72",
                    "originV": "0.72",
                    "percent_value": 50
                },
                {
                    "value": "0.55",
                    "originV": "0.55",
                    "percent_value": 50
                },
                {
                    "value": "0.65",
                    "originV": "0.65",
                    "percent_value": 50
                },
                {
                    "value": "0.47",
                    "originV": "0.47",
                    "percent_value": 50
                }
            ],
            "is_drilled": 0,
            "barGap": "30%",
            "cursor": "pointer",
            "label": {
                "show": false,
                "color": "#666",
                "position": "inside",
                "textStyle": {
                    "color": "#424648",
                    "fontSize": "12"
                }
            }
        },
        {
            "yAxisIndex": 0,
            "type": "bar",
            "name": "B",
            "stack": "总量0",
            "data": [{
                    "value": "2.01",
                    "originV": "2.01",
                    "percent_value": 50
                },
                {
                    "value": "1.90",
                    "originV": "1.9",
                    "percent_value": 50
                },
                {
                    "value": "1.78",
                    "originV": "1.78",
                    "percent_value": 50
                },
                {
                    "value": "1.84",
                    "originV": "1.84",
                    "percent_value": 50
                },
                {
                    "value": "2.11",
                    "originV": "2.11",
                    "percent_value": 50
                },
                {
                    "value": "2.07",
                    "originV": "2.07",
                    "percent_value": 50
                },
                {
                    "value": "1.95",
                    "originV": "1.95",
                    "percent_value": 50
                },
                {
                    "value": "1.83",
                    "originV": "1.83",
                    "percent_value": 50
                },
                {
                    "value": "1.90",
                    "originV": "1.9",
                    "percent_value": 50
                },
                {
                    "value": "2.18",
                    "originV": "2.18",
                    "percent_value": 50
                },
                {
                    "value": "0.53",
                    "originV": "0.53",
                    "percent_value": 50
                },
                {
                    "value": "0.66",
                    "originV": "0.66",
                    "percent_value": 50
                },
                {
                    "value": "0.51",
                    "originV": "0.51",
                    "percent_value": 50
                },
                {
                    "value": "0.60",
                    "originV": "0.6",
                    "percent_value": 50
                },
                {
                    "value": "0.44",
                    "originV": "0.44",
                    "percent_value": 50
                },
                {
                    "value": "0.58",
                    "originV": "0.58",
                    "percent_value": 50
                },
                {
                    "value": "0.72",
                    "originV": "0.72",
                    "percent_value": 50
                },
                {
                    "value": "0.55",
                    "originV": "0.55",
                    "percent_value": 50
                },
                {
                    "value": "0.65",
                    "originV": "0.65",
                    "percent_value": 50
                },
                {
                    "value": "0.47",
                    "originV": "0.47",
                    "percent_value": 50
                }
            ],
            "is_drilled": 0,
            "barGap": "30%",
            "cursor": "pointer",
            "label": {
                "show": false,
                "color": "#666",
                "position": "inside",
                "textStyle": {
                    "color": "#424648",
                    "fontSize": "12"
                }
            }
        },
        {
            "data": [{
                "name": "wifi",
                "value": "1"
            }],
            "type": "bar",
            "barWidth": "25%",
            "xAxisIndex": 1,
            "yAxisIndex": 1,
            "outerAxis": 1,
            "barGap": "0%",
            "cursor": "pointer",
            "label": {
                "show": true,
                "color": "#666",
                "position": "insideBottom",
                "textStyle": {
                    "color": "#424648",
                    "fontSize": "12"
                }
            },
            "itemStyle": {
                "color": "rgba(224,237,198, 1)"
            },
            "emphasis": {
                "itemStyle": {
                    "color": "rgba(224,237,198, 1)"
                }
            }
        },
        {
            "data": [{
                "name": "非wifi",
                "value": "1"
            }],
            "type": "bar",
            "barWidth": "25%",
            "xAxisIndex": 1,
            "yAxisIndex": 1,
            "outerAxis": 1,
            "barGap": "0%",
            "cursor": "pointer",
            "label": {
                "show": true,
                "color": "#666",
                "position": "insideBottom",
                "textStyle": {
                    "color": "#424648",
                    "fontSize": "12"
                }
            },
           
        },
        {
            "data": [{
                "name": "wifi",
                "value": "1"
            }],
            "type": "bar",
            "barWidth": "25%",
            "xAxisIndex": 1,
            "yAxisIndex": 1,
            "outerAxis": 1,
            "barGap": "0%",
            "cursor": "pointer",
            "label": {
                "show": true,
                "color": "#666",
                "position": "insideBottom",
                "textStyle": {
                    "color": "#424648",
                    "fontSize": "12"
                }
            },
            
        },
        {
            "data": [{
                "name": "非wifi",
                "value": "1"
            }],
            "type": "bar",
            "barWidth": "25%",
            "xAxisIndex": 1,
            "yAxisIndex": 1,
            "outerAxis": 1,
            "barGap": "0%",
            "cursor": "pointer",
            "label": {
                "show": true,
                "color": "#666",
                "position": "insideBottom",
                "textStyle": {
                    "color": "#424648",
                    "fontSize": "12"
                }
            },
          
        },
        {
            "data": [{
                "name": "idfa",
                "value": "1"
            }],
            "type": "bar",
            "barWidth": "60%",
            "xAxisIndex": 2,
            "yAxisIndex": 2,
            "outerAxis": 1,
            "barGap": "0%",
            "cursor": "pointer",
            "label": {
                "show": true,
                "color": "#666",
                "position": "insideBottom",
                "textStyle": {
                    "color": "#424648",
                    "fontSize": "12"
                }
            },
          

        },
        {
            "data": [{
                "name": "imei",
                "value": "1"
            }],
            "type": "bar",
            "barWidth": "40%",
            "xAxisIndex": 2,
            "yAxisIndex": 2,
            "outerAxis": 1,
            "barGap": "0%",
            "cursor": "pointer",
            "label": {
                "show": true,
                "color": "#666",
                "position": "insideBottom",
                "textStyle": {
                    "color": "#424648",
                    "fontSize": "12"
                }
            },
            

        }
    ],

}