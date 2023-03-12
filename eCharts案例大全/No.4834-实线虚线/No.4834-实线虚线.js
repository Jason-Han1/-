option = {
        "legend": {
            "data": ["中国", "中国预测", "美国", "美国预测", "德国", "德国预测", "法国", "法国预测"],
            "align": "center",
            "bottom": 0,
            "textStyle": {
                "color": "#ffffff"
            }
        },
        "tooltip": {
            "trigger": "axis"
        },
        "grid": {
            "left": "3%",
            "right": "4%",
            "top": "3%",
            "containLabel": true
        },
        "xAxis": {
            "type": "category",
            "boundaryGap": false,
            "data": ["2001", "2002", "2003", "2004"],
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#F0F0F0"
                }
            },
            "axisTick": {
                "show": false
            },
            "splitLine": {
                "show": false
            },
            "splitArea": {
                "show": false
            }
        },
        "yAxis": {
            "axisLine": {
                "color": "#F0F0F0",
                "lineStyle": {
                    "color": "#F0F0F0",
                    "opacity": 0
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": "#F0F0F0"
                }
            },
            "axisTick": {
                "show": false
            },
            "splitArea": {
                "show": false
            }
        },
        "series": [{
            "name": "中国",
            "type": "line",
            "data": [{
                "name": "2001",
                "value": 259
            }, {
                "name": "2002",
                "value": 108
            }, {
                "name": "2003",
                "value": 152
            }, ""],
            "itemStyle": {
                "color": "#B8DCFF"
            },
            "smooth": false,
            "lineStyle": {
                "type": "solid"
            }
        }, {
            "name": "中国预测",
            "type": "line",
            "data": [{
                "name": "2001",
                "value": 259
            }, {
                "name": "2002",
                "value": 108
            }, {
                "name": "2003",
                "value": 152
            }, {
                "name": "2004",
                "value": 80
            }],
            "itemStyle": {
                "color": "#B8DCFF"
            },
            "smooth": false,
            "lineStyle": {
                "type": "dashed"
            }
        }, {
            "name": "美国",
            "type": "line",
            "data": [{
                "name": "2001",
                "value": 193
            }, {
                "name": "2002",
                "value": 238
            }, {
                "name": "2003",
                "value": 73
            }, ""],
            "itemStyle": {
                "color": "#46C3EC"
            },
            "smooth": false,
            "lineStyle": {
                "type": "solid"
            }
        }, {
            "name": "美国预测",
            "type": "line",
            "data": [{
                "name": "2001",
                "value": 193
            }, {
                "name": "2002",
                "value": 238
            }, {
                "name": "2003",
                "value": 73
            }, {
                "name": "2004",
                "value": 166
            }],
            "itemStyle": {
                "color": "#46C3EC"
            },
            "smooth": false,
            "lineStyle": {
                "type": "dashed"
            }
        }, {
            "name": "德国",
            "type": "line",
            "data": [{
                "name": "2001",
                "value": 261
            }, {
                "name": "2002",
                "value": 190
            }, {
                "name": "2003",
                "value": 130
            }, ""],
            "itemStyle": {
                "color": "#A186FF"
            },
            "smooth": false,
            "lineStyle": {
                "type": "solid"
            }
        }, {
            "name": "德国预测",
            "type": "line",
            "data": [{
                "name": "2001",
                "value": 261
            }, {
                "name": "2002",
                "value": 190
            }, {
                "name": "2003",
                "value": 130
            }, {
                "name": "2004",
                "value": 161
            }],
            "itemStyle": {
                "color": "#A186FF"
            },
            "smooth": false,
            "lineStyle": {
                "type": "dashed"
            }
        }, {
            "name": "法国",
            "type": "line",
            "data": [{
                "name": "2001",
                "value": 263
            }, {
                "name": "2002",
                "value": 213
            }, {
                "name": "2003",
                "value": 110
            }, ""],
            "itemStyle": {
                "color": "#ECE995"
            },
            "smooth": false,
            "lineStyle": {
                "type": "solid"
            }
        }, {
            "name": "法国预测",
            "type": "line",
            "data": [{
                "name": "2001",
                "value": 263
            }, {
                "name": "2002",
                "value": 213
            }, {
                "name": "2003",
                "value": 110
            }, {
                "name": "2004",
                "value": 205
            }],
            "itemStyle": {
                "color": "#ECE995"
            },
            "smooth": false,
            "lineStyle": {
                "type": "dashed"
            }
        }],
        "backgroundColor": "rgba(0, 0, 0, 1)"
    }