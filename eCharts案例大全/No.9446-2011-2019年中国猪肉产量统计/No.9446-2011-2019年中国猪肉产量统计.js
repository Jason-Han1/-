option = {
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
    "tooltip": {
        "trigger": "item",
        "formatter": "{a}<br/>{b}:{c}万吨"
    },
    "title": {
        "text": "2011-2019年中国猪肉产量统计",
        "left": "center",
        "top": 400,
        "textStyle": {
            "color": "#5b7377"
        }
    },
    "calculable": true,
    "legend": {
        "icon": "circle",
        "x": "center",
        "y": "15%",
        "data": [
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019H1"
        ],
        "textStyle": {
            "color": "#fff"
        }
    },
    "series": [{
        "name": "猪肉产量",
        "type": "pie",
        "radius": [
            37,
            130
        ],
        "avoidLabelOverlap": false,
        "startAngle": 0,
        "center": [
            "50.1%",
            "34%"
        ],
        "roseType": "area",
        "selectedMode": "single",
        "label": {
            "normal": {
                "show": true,
                "formatter": "{c}万吨"
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
                "value": 5131.65,
                "name": "2011年",
                "itemStyle": {
                    "normal": {
                        "color": "#f845f1"
                    }
                }
            },
            {
                "value": 5443.55,
                "name": "2012年",
                "itemStyle": {
                    "normal": {
                        "color": "#ad46f3"
                    }
                }
            },
            {
                "value": 5618.6,
                "name": "2013年",
                "itemStyle": {
                    "normal": {
                        "color": "#5045f6"
                    }
                }
            },
            {
                "value": 5820.8,
                "name": "2014年",
                "itemStyle": {
                    "normal": {
                        "color": "#4777f5"
                    }
                }
            },
            {
                "value": 5645.41,
                "name": "2015年",
                "itemStyle": {
                    "normal": {
                        "color": "#44aff0"
                    }
                }
            },
            {
                "value": 5425.49,
                "name": "2016年",
                "itemStyle": {
                    "normal": {
                        "color": "#45dbf7"
                    }
                }
            },
            {
                "value": 5451.8,
                "name": "2017年",
                "itemStyle": {
                    "normal": {
                        "color": "#f6d54a"
                    }
                }
            },
            {
                "value": 5403.74,
                "name": "2018年",
                "itemStyle": {
                    "normal": {
                        "color": "#f69846"
                    }
                }
            },
            {
                "value": 2470,
                "name": "2019年H1",
                "itemStyle": {
                    "normal": {
                        "color": "#ff4343"
                    }
                }
            },
        ]
    }]
};