option = {
    "title": {
        "text": "{value|12.6}\n{cn|平均时长}",
        "x": "center",
        "y": "center",
        "top": "46%",
        "left": "34%",
        "subtext": "",
        "textAlign": "center",
        "textStyle": {
            "color": "#999",
            "fontSize": "24",
            "rich": {
                "value": {
                    "fontSize": 40,
                    "color": "#333"
                },
                "cn": {
                    "fontSize": 32,
                    "color": "#666"
                },
                "cn2": {
                    "fontSize": 25,
                    "color": "#999999"
                }
            }
        }
    },
    "rich": {
        "a": {
            "color": "red",
            "lineHeight": 10
        },
        "b": {
            "backgroundColor": {
                "image": "xxx/xxx.jpg"
            },
            "height": 40
        }
    },
    "tooltip": {
        "show": false,
        "trigger": "item",
        "formatter": "{b}: <br />{c}人 <br />({d}%)"
    },
    legend: {
        "orient": "vertical",
        "align": "auto",
        "z": "103",
        "itemGap": 16,
        "itemWidth": 15,
        "top": 70,
        "right": 10,
        "width": "350px",
        "data": ["15年以上", "10-15年", "5-10年", "1-5年", "1年以下"],
        "selectedMode": true,
        "textStyle": {
            "color": "#666"
        }
    },
    "series": [{
        "legendHoverLink": false,
        "name": "收入达成",
        "type": "pie",
        "startAngle": "50",
        "radius": ["32%", "45%"],
        "center": ["35%", "53%"],
        "data": [{
            "value": [16],
            "name": "15年以上",
            "itemStyle": {
                "normal": {
                    "color": "#FFC77D"
                }
            },
            "areaStyle": {
                "normal": {
                    "opacity": 0.3
                }
            }
        }, {
            "value": [34],
            "name": "10-15年",
            "itemStyle": {
                "normal": {
                    "color": "#FF8973"
                }
            },
            "areaStyle": {
                "normal": {
                    "opacity": 0.3
                }
            }
        }, {
            "value": [5],
            "name": "5-10年",
            "itemStyle": {
                "normal": {
                    "color": "#D57CB7"
                }
            },
            "areaStyle": {
                "normal": {
                    "opacity": 0.3
                }
            }
        }, {
            "value": [4],
            "name": "1-5年",
            "itemStyle": {
                "normal": {
                    "color": "#71DDC7"
                }
            },
            "areaStyle": {
                "normal": {
                    "opacity": 0.3
                }
            }
        }, {
            "value": [0],
            "name": "1年以下",
            "itemStyle": {
                "normal": {
                    "color": "#83B3C9"
                }
            },
            "areaStyle": {
                "normal": {
                    "opacity": 0.3
                }
            }
        }],
        "label": {
            "normal": {
                "formatter": "50%",
                "color": "#666"
            }
        },
        "labelLine": {
            "normal": {
                "lineStyle": {
                    "width": 1,
                    "color": "#bababa"
                }
            }
        },
        "itemStyle": {
            "normal": {
                "borderColor": "#f2f4f5",
                "borderWidth": 3
            }
        }
    }]
}