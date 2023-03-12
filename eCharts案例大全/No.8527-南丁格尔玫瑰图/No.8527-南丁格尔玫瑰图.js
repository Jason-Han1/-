option = {
    backgroundColor: 'rgb(43, 51, 59)',
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },

    "title": {
        "text": "南丁格尔玫瑰图--PieHalfRose",
        "left": "center",
        "top": 20,
        "textStyle": {
            "color": "#ccc"
        }
    },
    "calculable": true,
    "series": [{
        "type": "pie",
        "radius": [
           30,
            220
        ],
        "avoidLabelOverlap": false,
        "startAngle": 0,
        "center": [
            "50%",
            "50%"
        ],
        "roseType": "area",
        "selectedMode": "single",
        "label": {
            "normal": {
                "show": true,
                "formatter": "{b}{c}千万元"
            },
            "emphasis": {
                "show": true
            }
        },
        "labelLine": {
            "normal": {
                "show": true,
                "smooth": false,
                "length": 20,
                "length2": 10
            },
            "emphasis": {
                "show": true
            }
        },
        "data": [{
                "value": 900.58,
                "name": "义乌市1",
                "itemStyle": {
                    "normal": {
                        "color": "#f845f1"
                    }
                }
            },
            {
                "value": 1100.58,
                "name": "义乌市2",
                "itemStyle": {
                    "normal": {
                        "color": "#ad46f3"
                    }
                }
            },
            {
                "value": 2200.58,
                "name": "义乌市3",
                "itemStyle": {
                    "normal": {
                        "color": "#5045f6"
                    }
                }
            },
            {
                "value": 2300.58,
                "name": "义乌市4",
                "itemStyle": {
                    "normal": {
                        "color": "#4777f5"
                    }
                }
            },
            {
                "value": 3300.58,
                "name": "义乌市5",
                "itemStyle": {
                    "normal": {
                        "color": "#44aff0"
                    }
                }
            },
            {
                "value": 4400.58,
                "name": "义乌市6",
                "itemStyle": {
                    "normal": {
                        "color": "#45dbf7"
                    }
                }
            },
            {
                "value": 5500.58,
                "name": "义乌市7",
                "itemStyle": {
                    "normal": {
                        "color": "#f6d54a"
                    }
                }
            },
            {
                "value": 6600.58,
                "name": "义乌市8",
                "itemStyle": {
                    "normal": {
                        "color": "#f69846"
                    }
                }
            },
            {
                "value": 7800,
                "name": "义乌市9",
                "itemStyle": {
                    "normal": {
                        "color": "#ff4343"
                    }
                }
            },
            {
                "value": 900.58,
                "name": "义乌市1",
                "itemStyle": {
                    "normal": {
                        "color": "#f845f1"
                    }
                }
            },
            {
                "value": 1100.58,
                "name": "义乌市2",
                "itemStyle": {
                    "normal": {
                        "color": "#ad46f3"
                    }
                }
            },
            {
                "value": 2200.58,
                "name": "义乌市3",
                "itemStyle": {
                    "normal": {
                        "color": "#5045f6"
                    }
                }
            },
            {
                "value": 2300.58,
                "name": "义乌市4",
                "itemStyle": {
                    "normal": {
                        "color": "#4777f5"
                    }
                }
            },
            {
                "value": 3300.58,
                "name": "义乌市5",
                "itemStyle": {
                    "normal": {
                        "color": "#44aff0"
                    }
                }
            },
            {
                "value": 4400.58,
                "name": "义乌市6",
                "itemStyle": {
                    "normal": {
                        "color": "#45dbf7"
                    }
                }
            },
            {
                "value": 5500.58,
                "name": "义乌市7",
                "itemStyle": {
                    "normal": {
                        "color": "#f6d54a"
                    }
                }
            },
            {
                "value": 6600.58,
                "name": "义乌市8",
                "itemStyle": {
                    "normal": {
                        "color": "#f69846"
                    }
                }
            },
            {
                "value": 7800,
                "name": "义乌市9",
                "itemStyle": {
                    "normal": {
                        "color": "#ff4343"
                    }
                }
            }
            
        ]
    }]
};