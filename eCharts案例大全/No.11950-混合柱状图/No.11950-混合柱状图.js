var option = {
    "color": ["#c2080d", "#c96614", "#f9f51e", "#c91486", "#2dbf17", "#000000"],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "backgroundColor": "rgba(0, 0, 0, 0.8)",
        "axisPointer": {
            "type": "cross"
        }
    },
    "legend": {
        "x": "center",
        "y": "top",
        "show": true,
        "textStyle": {
            "color": "#858585"
        },
        "data": ["未受控", "电量不足", "脱帽", "倒地", "SOS"]
    },
    "grid": {
        "borderWidth": 0
    },
    "dataZoom": [{
        "show": true,
        "realtime": true,
        "start": 66.4,
        "end": 100,
        "fillerColor": "#eae6f2",
        "borderColor": "#3897c5",
        "textStyle": {
            "color": "#3897c5"
        },
        "handleStyle": {
            "color": "#008acd"
        }
    }, {
        "type": "inside",
        "realtime": true,
        "start": 66.4,
        "end": 100
    }],
    "xAxis": {
        "name": "时间",
        "type": "time",
        "position": "bottom",
        "boundaryGap": false,
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#858585"
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "show": false,
            "textStyle": {
                "color": "#858585",
                "fontSize": 14
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "type": "dashed"
            }
        },
        "max": 1552060800000,
        "min": 1551974400000,
        "interval": 300000
    },
    "yAxis": {
        "name": "记录类型（注：SOS红色表示未处理，蓝色表示处理了）",
        "type": "category",
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#858585",
                "width": 2
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#404d5b",
                "fontSize": 14
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "type": "dashed"
            }
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#858585"
            }
        },
        "data": ["未受控", "电量不足", "脱帽", "倒地", "SOS"]
    },
    "series": [{
        "type": "scatter",
        "name": "SOS",
        "color": ["#c2080d"],
        "data": []
    }, {
        "type": "bar",
        "stack": 1,
        "name": "未受控",
        "color": ["#000000"],
        "itemStyle": {
            "normal": {
                "barBorderRadius": 0
            }
        },
        "markLine": {
            "symbol": "none",
            "itemStyle": {
                "normal": {
                    "lineStyle": {
                        "type": "solid",
                        "width": 8,
                        "barBorderRadius": 0
                    }
                },
                "emphasis": {
                    "lineStyle": {
                        "width": 15
                    },
                    "barBorderRadius": 0
                }
            },
            "data": []
        }
    }, {
        "type": "bar",
        "stack": 1,
        "name": "电量不足",
        "color": ["#c91486"],
        "itemStyle": {
            "normal": {
                "barBorderRadius": 0
            }
        },
        "markLine": {
            "symbol": "none",
            "itemStyle": {
                "normal": {
                    "lineStyle": {
                        "type": "solid",
                        "width": 8,
                        "barBorderRadius": 0
                    }
                },
                "emphasis": {
                    "lineStyle": {
                        "width": 15
                    },
                    "barBorderRadius": 0
                }
            },
            "data": []
        }
    }, {
        "type": "bar",
        "stack": 1,
        "name": "脱帽",
        "color": ["#c96614"],
        "itemStyle": {
            "normal": {
                "barBorderRadius": 0
            }
        },
        "markLine": {
            "symbol": "none",
            "itemStyle": {
                "normal": {
                    "lineStyle": {
                        "type": "solid",
                        "width": 8,
                        "barBorderRadius": 0
                    }
                },
                "emphasis": {
                    "lineStyle": {
                        "width": 15
                    },
                    "barBorderRadius": 0
                }
            },
            "data": []
        }
    }, {
        "type": "bar",
        "stack": 1,
        "name": "倒地",
        "color": ["#f9f51e"],
        "itemStyle": {
            "normal": {
                "barBorderRadius": 0
            }
        },
        "markLine": {
            "symbol": "none",
            "itemStyle": {
                "normal": {
                    "lineStyle": {
                        "type": "solid",
                        "width": 8,
                        "barBorderRadius": 0
                    }
                },
                "emphasis": {
                    "lineStyle": {
                        "width": 15
                    },
                    "barBorderRadius": 0
                }
            },
            "data": []
        }
    }, {
        "type": "bar",
        "stack": 1,
        "name": "SOS",
        "color": ["#c2080d"],
        "itemStyle": {
            "normal": {
                "barBorderRadius": 0
            }
        },
        "markLine": {
            "symbol": "none",
            "itemStyle": {
                "normal": {
                    "lineStyle": {
                        "type": "solid",
                        "width": 8,
                        "barBorderRadius": 0
                    }
                },
                "emphasis": {
                    "lineStyle": {
                        "width": 15
                    },
                    "barBorderRadius": 0
                }
            },
            "data": []
        }
    }, {
        "type": "bar",
        "stack": 1,
        "name": "脱帽",
        "color": ["#c96614"],
        "itemStyle": {
            "normal": {
                "barBorderRadius": 0
            }
        },
        "markLine": {
            "symbol": "none",
            "itemStyle": {
                "normal": {
                    "lineStyle": {
                        "type": "solid",
                        "width": 8,
                        "barBorderRadius": 0
                    }
                },
                "emphasis": {
                    "lineStyle": {
                        "width": 15
                    },
                    "barBorderRadius": 0
                }
            },
            "data": [
                [{
                    "xAxis": 1552031793000,
                    "yAxis": "脱帽",
                    "tooltip": {
                        "startTime": "2019-03-08 15:56:33",
                        "endTime": "2019-03-08 16:11:33",
                        "eventName": "脱帽",
                        "sip": "53.53.53.2"
                    }
                }, {
                    "xAxis": 1552032693000,
                    "yAxis": "脱帽"
                }]
            ]
        }
    }, {
        "type": "scatter",
        "name": "SOS",
        "color": ["#1d94f9"],
        "itemStyle": {
            "normal": {
                "barBorderRadius": 0
            }
        },
        "data": [{
            "value": [1552031930000, 4],
            "tooltip": {
                "endTime": "2019-03-08 18:45:16",
                "eventName": "SOS",
                "startTime": "2019-03-08 15:58:50"
            }
        }]
    }, {
        "type": "bar",
        "stack": 1,
        "name": "未受控",
        "color": ["#000000"],
        "itemStyle": {
            "normal": {
                "barBorderRadius": 0
            }
        },
        "markLine": {
            "symbol": "none",
            "itemStyle": {
                "normal": {
                    "lineStyle": {
                        "type": "solid",
                        "width": 8,
                        "barBorderRadius": 0
                    }
                },
                "emphasis": {
                    "lineStyle": {
                        "width": 15
                    },
                    "barBorderRadius": 0
                }
            },
            "data": [
                [{
                    "xAxis": 1552032000000,
                    "yAxis": "未受控",
                    "tooltip": {
                        "startTime": "2019-03-08 16:00:00",
                        "endTime": "2019-3-14 11:22:31",
                        "eventName": "未受控",
                        "sip": "53.53.53.2"
                    }
                }, {
                    "xAxis": 1552060799000,
                    "yAxis": "未受控"
                }]
            ]
        }
    }, {
        "type": "bar",
        "stack": 1,
        "name": "脱帽",
        "color": ["#c96614"],
        "itemStyle": {
            "normal": {
                "barBorderRadius": 0
            }
        },
        "markLine": {
            "symbol": "none",
            "itemStyle": {
                "normal": {
                    "lineStyle": {
                        "type": "solid",
                        "width": 8,
                        "barBorderRadius": 0
                    }
                },
                "emphasis": {
                    "lineStyle": {
                        "width": 15
                    },
                    "barBorderRadius": 0
                }
            },
            "data": [
                [{
                    "xAxis": 1552032994000,
                    "yAxis": "脱帽",
                    "tooltip": {
                        "startTime": "2019-03-08 16:16:34",
                        "endTime": "2019-3-14 11:22:31",
                        "eventName": "脱帽",
                        "sip": "53.53.53.2"
                    }
                }, {
                    "xAxis": 1552060799000,
                    "yAxis": "脱帽"
                }]
            ]
        }
    }]
};