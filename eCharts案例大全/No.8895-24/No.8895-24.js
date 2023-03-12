option = {
    backgroundColor:'#fff',
    "animation": true,
    "title": {
        "text": '各类型缴费金额',
       // "subtext": "沥青工",
        "x": "center",
        "y": "center",
        "textStyle": {
            "color": "#333",
            "fontSize": 20,
            "fontWeight": "bold",
            "align": "center",
            "width": "200px"
        },
        "subtextStyle": {
            "color": "#333",
            "fontSize": 24,
            "fontWeight": "normal",
            "align": "center"
        }
    },
    "legend": {
        "width": "70%",
        "left": "center",
        "textStyle": {
            "color": "#333",
            "fontSize": 16
        },
        "icon": "circle",
        "right": "0",
        "bottom": "0",
        "padding": [30, 60],
        "itemGap": 40,
        "data": ["银行代收", "现金", "第三方支付", "支付宝", "银行代扣", "微信", "支票", "银联"]
    },
    "series": [{
        "type": "pie",
        "center": ["50%", "50%"],
        "radius": ["40%", "53%"],
        "color": ["#FEE449", "#00FFFF", "#00FFA8", "#9F17FF", "#FFE400", "#F76F01", "#01A4F7", "#FE2C8A"],
        "startAngle": 135,
        "labelLine": {
            "normal": {
                "length": 25
            }
        },
        "label": {
            "normal": {
                "formatter": "{b|{b}:}  {per|{d}%} ",
                "backgroundColor": "rgba(255, 147, 38, 0)",
                "borderColor": "transparent",
                "borderRadius": 4,
                "rich": {
                    "a": {
                        "color": "#999",
                        "lineHeight": 22,
                        "align": "center"
                    },
                    "hr": {
                        "borderColor": "#aaa",
                        "width": "100%",
                        "borderWidth": 1,
                        "height": 0
                    },
                    "b": {
                        "color": "#FF2C58",
                        "fontSize": 16,
                        "lineHeight": 33
                    },
                    "c": {
                        "fontSize": 14,
                        "color": "#eee"
                    },
                    "per": {
                        "color": "#01A4F7",
                        "fontSize": 14,
                        "padding": [5, 8],
                        "borderRadius": 2
                    }
                },
                "textStyle": {
                    "color": "#fff",
                    "fontSize": 16
                }
            }
        },
        "emphasis": {
            "label": {
                "show": true,
                "formatter": "{b|{b}:}  {per|{d}%}  ",
                "backgroundColor": "rgba(255, 147, 38, 0)",
                "borderColor": "transparent",
                "borderRadius": 4,
                "rich": {
                    "a": {
                        "color": "#999",
                        "lineHeight": 22,
                        "align": "center"
                    },
                    "hr": {
                        "borderColor": "#aaa",
                        "width": "100%",
                        "borderWidth": 1,
                        "height": 0
                    },
                    "b": {
                        "color": "#333",
                        "fontSize": 18,
                        "lineHeight": 33
                    },
                    "c": {
                        "fontSize": 14,
                        "color": "#eee"
                    },
                    "per": {
                        "color": "#FDF44E",
                        "fontSize": 25,
                        "padding": [5, 6],
                        "borderRadius": 2
                    }
                }
            }
        },
        "data": [{
            "name": "银行代收",
            "value": 3
        }, {
            "name": "现金",
            "value": 2
        }, {
            "name": "第三方支付",
            "value": 26
        }, {
            "name": "支付宝",
            "value": 24
        }, {
            "name": "银行代扣",
            "value": 12
        }, {
            "name": "微信",
            "value": 11
        }, {
            "name": "支票",
            "value": 3
        }, {
            "name": "银联",
            "value": 2
        }]
    }, {
        "type": "pie",
        "center": ["50%", "50%"],
        "radius": ["35%", "36%"],
        "label": {
            "show": false
        },
        "data": [{
            "value": 78,
            "name": "实例1",
            "itemStyle": {
                "normal": {
                    "color": {
                        "x": 0,
                        "y": 0,
                        "x2": 1,
                        "y2": 0,
                        "type": "linear",
                        "global": false,
                        "colorStops": [{
                            "offset": 0,
                            "color": "#9F17FF"
                        }, {
                            "offset": 0.2,
                            "color": "#01A4F7"
                        }, {
                            "offset": 0.5,
                            "color": "#FE2C8A"
                        }, {
                            "offset": 0.8,
                            "color": "#FEE449"
                        }, {
                            "offset": 1,
                            "color": "#00FFA8"
                        }]
                    }
                }
            }
        }]
    }]
}