option = {
    "baseOption": {
        "color": ["#5C9E43", "#E9C51C", "#CD3127"],
        "textStyle": {
            "color": "#9aabaf",
            "fontSize": 10
        },
        "legend": {
            "data": [{
                "name": "Ok",
                "icon": "circle"
            }, {
                "name": "Warning",
                "icon": "circle"
            }, {
                "name": "Critical",
                "icon": "circle"
            }],
            "type": "scroll",
            "top": 5,
            "textStyle": {
                "fontSize": 12,
                "color": "#9aabaf"
            },
            "left": 270,
            "selectedMode": false
        },
        "grid": {
            "left": 60,
            "right": 40,
            "top": 40
        },
        "tooltip": {
            "trigger": "axis"
        },
        "toolbox": {
            "show": true,
            "top": 0,
            "right": 5,
            "feature": {
                "dataZoom": {
                    "yAxisIndex": false,
                    "xAxisIndex": [0]
                },
                "restore": {
                    "show": true
                },
                "saveAsImage": {
                    "name": "Pulse"
                }
            }
        },
        "xAxis": {
            "splitLine": {
                "show": false
            },
            "type": "time",
            "min": 1559199600000,
            "max": 1559286000000,
            "interval": 7200000,
            "axisLabel": {
                "color": "#f4f4f4"
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#9aabaf"
                }
            },
            "axisLine": {
                "lineStyle": {
                    "color": "#9aabaf"
                }
            }
        },
        "yAxis": {
            "type": "value",
            "max": 0.45,
            "splitLine": {
                "show": false
            },
            "boundaryGap": false,
            "nameLocation": "center",
            "nameGap": 40,
            "name": "Crash (AccelLMH)",
            "axisLine": {
                "lineStyle": {
                    "color": "#9aabaf"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#9aabaf"
                }
            },
            "axisLabel": {
                "color": "#f4f4f4",
                "fontSize": 10
            }
        },
        "dataZoom": [{
            "type": "slider",
            "filterMode": "weakFilter",
            "showDataShadow": false,
            "bottom": 5,
            "height": 10,
            "xAxisIndex": [0],
            "fillerColor": "#2C6D7C",
            "realtime": true,
            "borderColor": "transparent",
            "backgroundColor": "#e2e2e2",
            "handleIcon": "M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
            "handleSize": 10,
            "handleStyle": {
                "shadowBlur": 6,
                "shadowOffsetX": 1,
                "shadowOffsetY": 2,
                "shadowColor": "#aaa"
            },
            "labelFormatter": ""
        }, {
            "type": "inside",
            "filterMode": "weakFilter"
        }],
        "series": [{
            "name": "Ok",
            "type": "line",
            "data": []
        }, {
            "name": "Warning",
            "type": "line",
            "data": []
        }, {
            "name": "Critical",
            "type": "line",
            "data": []
        }, {
            "id": "sensorSeries0",
            "type": "line",
            "areaStyle": {
                "opacity": 0
            },
            "showSymbol": false,
            "data": [
                ["2019-05-30T15:07:01+08:00", "0.010"],
                ["2019-05-30T15:34:01+08:00", "0.000"],
                ["2019-05-30T16:01:01+08:00", "0.010"],
                ["2019-05-30T16:28:02+08:00", "0.010"],
                ["2019-05-30T16:55:02+08:00", "0.000"],
                ["2019-05-30T17:22:02+08:00", "0.000"],
                ["2019-05-30T17:49:02+08:00", "0.000"],
                ["2019-05-30T18:16:03+08:00", "0.000"],
                ["2019-05-30T18:43:03+08:00", "0.000"],
                ["2019-05-30T19:10:04+08:00", "0.000"],
                ["2019-05-30T19:37:04+08:00", "0.000"],
                ["2019-05-30T20:04:04+08:00", "0.000"],
                ["2019-05-30T20:31:04+08:00", "0.000"],
                ["2019-05-30T20:58:05+08:00", "0.000"],
                ["2019-05-30T21:25:06+08:00", "0.000"],
                ["2019-05-30T21:52:06+08:00", "0.000"],
                ["2019-05-30T22:19:06+08:00", "0.000"],
                ["2019-05-30T22:46:06+08:00", "0.000"],
                ["2019-05-30T23:13:06+08:00", "0.000"],
                ["2019-05-30T23:40:07+08:00", "0.010"],
                ["2019-05-31T00:07:08+08:00", "0.000"],
                ["2019-05-31T00:34:08+08:00", "0.010"],
                ["2019-05-31T01:01:08+08:00", "0.000"],
                ["2019-05-31T01:28:08+08:00", "0.010"],
                ["2019-05-31T01:55:08+08:00", "0.010"],
                ["2019-05-31T02:22:09+08:00", "0.010"],
                ["2019-05-31T02:49:09+08:00", "0.000"],
                ["2019-05-31T03:16:10+08:00", "0.000"],
                ["2019-05-31T03:43:10+08:00", "0.000"],
                ["2019-05-31T04:10:10+08:00", "0.000"],
                ["2019-05-31T04:37:11+08:00", "0.010"],
                ["2019-05-31T05:04:11+08:00", "0.000"],
                ["2019-05-31T05:31:11+08:00", "0.000"],
                ["2019-05-31T05:58:12+08:00", "0.000"],
                ["2019-05-31T06:25:12+08:00", "0.010"],
                ["2019-05-31T06:52:12+08:00", "0.000"],
                ["2019-05-31T07:19:12+08:00", "0.010"],
                ["2019-05-31T07:46:13+08:00", "0.010"],
                ["2019-05-31T08:13:13+08:00", "0.010"],
                ["2019-05-31T08:40:13+08:00", "0.000"],
                ["2019-05-31T09:07:13+08:00", "0.000"],
                ["2019-05-31T09:34:13+08:00", "0.010"],
                ["2019-05-31T10:01:14+08:00", "0.000"],
                ["2019-05-31T10:28:14+08:00", "0.000"],
                ["2019-05-31T10:55:14+08:00", "0.010"],
                ["2019-05-31T11:22:15+08:00", "0.000"],
                ["2019-05-31T11:49:15+08:00", "0.010"],
                ["2019-05-31T12:16:15+08:00", "0.000"],
                ["2019-05-31T12:43:15+08:00", "0.010"],
                ["2019-05-31T13:10:16+08:00", "0.000"],
                ["2019-05-31T13:37:16+08:00", "0.000"],
                ["2019-05-31T14:04:16+08:00", "0.000"],
                ["2019-05-31T14:31:16+08:00", "0.000"]
            ],
            "markLine": {
                "data": [{
                    "yAxis": 0.4,
                    "symbol": "none",
                    "lineStyle": {
                        "normal": {
                            "color": "#E9C51C"
                        }
                    },
                    "label": {
                        "position": "start",
                        "color": "#1b3c44",
                        "fontSize": 10,
                        "fontFamily": "\"Open Sans\"",
                        "backgroundColor": "#E9C51C",
                        "padding": [2, 3, 1, 8]
                    }
                }, {
                    "yAxis": 0.45,
                    "symbol": "none",
                    "lineStyle": {
                        "normal": {
                            "color": "#D42D2A"
                        }
                    },
                    "label": {
                        "position": "start",
                        "color": "#1b3c44",
                        "fontSize": 10,
                        "fontFamily": "\"Open Sans\"",
                        "backgroundColor": "#D42D2A",
                        "padding": [2, 3, 1, 8]
                    }
                }]
            },
            "markArea": {
                "label": {
                    "normal": {
                        "position": "insideBottomRight",
                        "offset": [0, 5],
                        "color": "#9aabaf",
                        "fontSize": 10
                    }
                },
                "data": [
                    [{
                        "name": "Warning",
                        "yAxis": 0.4
                    }, {
                        "yAxis": 0.4
                    }],
                    [{
                        "name": "Critical",
                        "yAxis": 0.45
                    }, {
                        "yAxis": 0.45
                    }]
                ]
            }
        }],
        "visualMap": {
            "type": "piecewise",
            "controller": {
                "inRange": {
                    "symbol": "circle",
                    "color": ["red", "blue"]
                }
            },
            "precision": 2,
            "show": false,
            "dimension": 1,
            "top": 7,
            "left": 260,
            "textStyle": {
                "color": "#F4F4F4"
            },
            "outOfRange": {
                "color": "#667579"
            },
            "pieces": [{
                "gt": 0,
                "lte": 0.4,
                "color": "#5C9E43"
            }, {
                "gt": 0.4,
                "lte": 0.45,
                "color": "#E9C51C"
            }, {
                "gt": 0.45,
                "lte": null,
                "color": "#D42D2A"
            }]
        }
    },
    "media": [{
        "query": {
            "maxWidth": 549
        },
        "option": {
            "toolbox": {
                "show": true,
                "top": 0,
                "right": 0
            },
            "legend": {
                "top": 70,
                "left": 0,
                "itemGap": 10
            },
            "grid": {
                "top": 110,
                "right": 10
            },
            "xAxis": {
                "splitLine": {
                    "show": false
                },
                "type": "time",
                "min": 1559199600000,
                "max": 1559286000000,
                "interval": 21600000,
                "axisLabel": {
                    "fontSize": 10,
                    "color": "#f4f4f4",
                    "align": "left",
                    "padding": [-4, 0, 0, 6]
                },
                "axisTick": {
                    "show": true,
                    "length": 15
                }
            }
        }
    }, {
        "option": {
            "legend": {
                "top": 5,
                "left": 270,
                "selectedMode": false
            },
            "toolbox": {
                "show": true,
                "top": 0,
                "right": 5
            },
            "grid": {
                "top": 40
            },
            "xAxis": {
                "splitLine": {
                    "show": false
                },
                "type": "time",
                "min": 1559199600000,
                "max": 1559286000000,
                "interval": 7200000,
                "axisLabel": {
                    "fontSize": 10,
                    "color": "#f4f4f4",
                    "align": "left",
                    "padding": [-4, 0, 0, 6]
                },
                "axisTick": {
                    "show": true,
                    "length": 15
                }
            }
        }
    }]
}