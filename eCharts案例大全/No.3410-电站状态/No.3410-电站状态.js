option = {
    backgroundColor:'#000',
    "animation": true,
    "title": {
        // "text": 24,
        // "subtext": "沥青工",
        "x": "center",
        "y": "center",
        "textStyle": {
            "color": "#fff",
            "fontSize": 60,
            "fontWeight": "normal",
            "align": "center",
            "width": "200px"
        },
        "subtextStyle": {
            "color": "#fff",
            "fontSize": 20,
            "fontWeight": "normal",
            "align": "center"
        }
    },
    "legend": {
        "width": "70%",
        "left": "center",
        "textStyle": {
            "color": "#fff",
            "fontSize": 16
        },
        "icon": "circle",
        "right": "0",
        "bottom": "0",
        "padding": [30, 60],
        "itemGap": 40,
        "data": ["正常01", "正常02", "正常03", "正常04", "正常05", "正常06", "正常07"]
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
                "formatter": "{b|{b}:} {per|{d}%} ",
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
                        "color": "#b3e5ff",
                        "fontSize": 16,
                        "lineHeight": 33
                    },
                    "c": {
                        "fontSize": 14,
                        "color": "#eee"
                    },
                    "per": {
                        "color": "#FDF44E",
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
                        "color": "#fff",
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
            "name": "正常01",
            "value": 3
        }, {
            "name": "正常02",
            "value": 2
        }, {
            "name": "正常03",
            "value": 26
        }, {
            "name": "正常04",
            "value": 24
        }, {
            "name": "正常05",
            "value": 12
        }, {
            "name": "正常06",
            "value": 12
        }, {
            "name": "正常07",
            "value": 12
        }]
    }, {
        "type": "pie",
        "center": ["50%", "50%"],
        "radius": ["35%", "36%"],
        "label": {
            "show": false
        },
        // "data": [{
        //     "value": 78,
        //     "name": "实例1",
        //     "itemStyle": {
        //         "normal": {
        //             "color": {
        //                 "x": 0,
        //                 "y": 0,
        //                 "x2": 1,
        //                 "y2": 0,
        //                 "type": "linear",
        //                 "global": false,
        //                 "colorStops": [{
        //                     "offset": 0,
        //                     "color": "#9F17FF"
        //                 }, {
        //                     "offset": 0.2,
        //                     "color": "#01A4F7"
        //                 }, {
        //                     "offset": 0.5,
        //                     "color": "#FE2C8A"
        //                 }, {
        //                     "offset": 0.8,
        //                     "color": "#FEE449"
        //                 }, {
        //                     "offset": 1,
        //                     "color": "#00FFA8"
        //                 }]
        //             }
        //         }
        //     }
        // }]
    }]
}