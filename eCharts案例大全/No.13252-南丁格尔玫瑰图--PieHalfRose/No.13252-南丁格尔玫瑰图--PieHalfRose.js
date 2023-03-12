option = {
    backgroundColor: 'rgb(43, 51, 59)',
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
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
    calculable: true,
    "title": {
        "text": "南丁格尔玫瑰图--PieHalfRose",
        "left": "center",
        "top": 20,
        "textStyle": {
            "color": "#ccc"
        }
    },
    "calculable": true,
    "legend": {
        "icon": "circle",
        "x": "center",
        "y": "15%",
        "data": [
            "NL-3A",
            "FE-5A",
            "FE-3AC",
            "GX6",
            "FE-S1",
            "FE-7A",
            "KC-1B",
            "KC-2HB(15TD)",
            "KC-2(15TD)",
            "FE-7",
            "FE-3AD",
            "KC-2HB",
            "FE-4KACK-2",
            "NL-3",
            "FE-6",
            "unknown"
        ],
        "textStyle": {
            "color": "#fff"
        }
    },
    "series": [{
        "name": "",
        "type": "pie",
        "radius": [
            20,
            90//155
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
                "formatter": "{b}：{c}"
            },
            "emphasis": {
                "show": true
            }
        },
        "labelLine": {
            "normal": {
                "show": true,
                "smooth": false,
                "length": 10,
                "length2": 8
            },
            "emphasis": {
                "show": true
            }
        },
        "data": [{
                "value": 84067,
                "name": "NL-3A",
                "itemStyle": {
                    "normal": {
                        "color": "#f845f1"
                    }
                }
            },
            {
                "value": 78477,
                "name": "FE-5A",
                "itemStyle": {
                    "normal": {
                        "color": "#ad46f3"
                    }
                }
            },
            {
                "value": 45723,
                "name": "FE-3AC",
                "itemStyle": {
                    "normal": {
                        "color": "#5045f6"
                    }
                }
            },
            {
                "value": 40794,
                "name": "GX6",
                "itemStyle": {
                    "normal": {
                        "color": "#4777f5"
                    }
                }
            },
            {
                "value":33043,
                "name": "FE-S1",
                "itemStyle": {
                    "normal": {
                        "color": "#44aff0"
                    }
                }
            },
            {
                "value": 7690,
                "name": "FE-7A",
                "itemStyle": {
                    "normal": {
                        "color": "#45dbf7"
                    }
                }
            },
            {
                "value":3367,
                "name": "KC-1B",
                "itemStyle": {
                    "normal": {
                        "color": "#f6d54a"
                    }
                }
            },
            {
                "value": 553,
                "name": "KC-2HB(15TD)",
                "itemStyle": {
                    "normal": {
                        "color": "#f69846"
                    }
                }
            },
            {
                "value":489,
                "name": "KC-2(15TD)",
                "itemStyle": {
                    "normal": {
                        "color": "#ff4343"
                    }
                }
            },
            {
                "value":176,
                "name": "FE-7",
                "itemStyle": {
                    "normal": {
                        "color": "#ff4343"
                    }
                }
            },
            {
                "value":42,
                "name": "FE-3AD",
                "itemStyle": {
                    "normal": {
                        "color": "#ff4343"
                    }
                }
            },{
                "value":16,
                "name": "KC-2HB",
                "itemStyle": {
                    "normal": {
                        "color": "#ff4343"
                    }
                }
            },{
                "value":11,
                "name": "FE-4KACK-2",
                "itemStyle": {
                    "normal": {
                        "color": "#ff4343"
                    }
                }
            },{
                "value":5,
                "name": "NL-3",
                "itemStyle": {
                    "normal": {
                        "color": "#ff4343"
                    }
                }
            },{
                "value":4,
                "name": "FE-6",
                "itemStyle": {
                    "normal": {
                        "color": "#ff4343"
                    }
                }
            },{
                "value":4,
                "name": "unknown",
                "itemStyle": {
                    "normal": {
                        "color": "#ff4343"
                    }
                }
            }
        ]
    }]
};