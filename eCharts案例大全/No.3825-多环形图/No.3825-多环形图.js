option = {
    "dataset": {
        "source": [
            ["NAME", "DATA1", "DATA2", "DATA3"],
            ["缝制", "41.7", "58.3", "33.3"],
            ["后整理", "40.2", "59.8", "33.3"],
            ["面里料", "9.6", "90.4", "33.3"],
            ["包装", "6.3", "93.7", "33.3"],
            ["", "", "", "33.3"]
        ]
    },
    "color": [
        "rgba(254,31,101,",
        "rgba(255,176,1,",
        "rgba(255,255,0,",
        "rgba(66,171,69,",
        "rgba(15,188,248,"
    ],
    "grid": {
        "top": "3%",
        "left": "50%",
        "width": "40%",
        "height": "46%",
        "containLabel": false
    },
    "xAxis": {
        "axisLine": {
            "show": false
        }
    },
    "yAxis": [{
        "type": "category",
        "inverse": true,
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "show": true,
            "interval": 0,
            "inside": true,
            "formatter": function(params) {
                var str;
                if (params == 1) {
                    str = "{rect" + params + "|}" + "{w1|" + option.dataset.source[params][0] + "}" + "{w1|" + option.dataset.source[params][1] + "%}";
                } else {
                    if(option.dataset.source[params][0]){
                        str = "{rect" + params + "|}" + "{w2|" + option.dataset.source[params][0] + "}" + "{w2|" + option.dataset.source[params][1] + "%}";
                        }
                    }
                return str;
            },
            "rich": {
                "rect1": {
                    "width": 12,
                    "height": 1,
                    "backgroundColor": "rgba(254,31,101,1)"
                },
                "rect2": {
                    "width": 12,
                    "height": 1,
                    "backgroundColor": "rgba(255,176,1,1)"
                },
                "rect3": {
                    "width": 12,
                    "height": 1,
                    "backgroundColor": "rgba(255,255,0,1)"
                },
                "rect4": {
                    "width": 12,
                    "height": 1,
                    "backgroundColor": "rgba(66,171,69,1)"
                },
                "rect5": {
                    "width": 12,
                    "height": 1,
                    "backgroundColor": "rgba(15,188,248,1)"
                },
                "w1": {
                    "width": 35,
                    "padding": [
                        0,
                        0,
                        0,
                        2
                    ],
                    "fontSize": "{只能改数值,单位rem{0.5}$}",
                    "color": "rgba(254,31,101,1)"
                },
                "w2": {
                    "width": 35,
                    "padding": [
                        0,
                        0,
                        0,
                        2
                    ],
                    "fontSize": "{只能改数值,单位rem{0.5}$}",
                    "color": "#fff"
                }
            }
        },
        "data": [
            1,
            2,
            3,
            4,
            5
        ]
    }],
    "series": [{
            "type": "pie",
            "radius": [
                "78%",
                "90%"
            ],
            "clockwise": false,
            "hoverAnimation": false,
            "labelLine": {
                "show": false
            },
            "itemStyle": {
                "color": function(params) {
                    var colorList = [{
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                    offset: 0,
                                    color: option.color[0] + "0.1)"
                                },
                                {
                                    offset: 1,
                                    color: option.color[0] + "1)"
                                }
                            ],
                            global: false
                        },
                        option.color[0] + "0.1)", "rgba(0,0,0,0)"
                    ];
                    return colorList[params.dataIndex];
                }
            },
            "label": {
                "show": false
            },
            "encode": {
                "itemName": "NAME",
                "value": 1
            },
            "seriesLayoutBy": "row"
        },
        {
            "type": "pie",
            "radius": [
                "60%",
                "72%"
            ],
            "clockwise": false,
            "hoverAnimation": false,
            "labelLine": {
                "show": false
            },
            "itemStyle": {
                "color": function(params) {
                    var colorList = [{
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                    offset: 0,
                                    color: option.color[1] + "0.1)"
                                },
                                {
                                    offset: 1,
                                    color: option.color[1] + "1)"
                                }
                            ],
                            global: false
                        },
                        option.color[1] + "0.1)", "rgba(0,0,0,0)"
                    ];
                    return colorList[params.dataIndex];
                }
            },
            "label": {
                "show": false
            },
            "encode": {
                "itemName": "NAME",
                "value": 2
            },
            "seriesLayoutBy": "row"
        },
        {
            "type": "pie",
            "radius": [
                "42%",
                "54%"
            ],
            "clockwise": false,
            "hoverAnimation": false,
            "labelLine": {
                "show": false
            },
            "itemStyle": {
                "color": function(params) {
                    var colorList = [{
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                    offset: 0,
                                    color: option.color[2] + "0.1)"
                                },
                                {
                                    offset: 1,
                                    color: option.color[2] + "1)"
                                }
                            ],
                            global: false
                        },
                        option.color[2] + "0.1)", "rgba(0,0,0,0)"
                    ];
                    return colorList[params.dataIndex];
                }
            },
            "label": {
                "show": false
            },
            "encode": {
                "itemName": "NAME",
                "value": 3
            },
            "seriesLayoutBy": "row"
        },
        {
            "type": "pie",
            "radius": [
                "24%",
                "36%"
            ],
            "clockwise": false,
            "hoverAnimation": false,
            "labelLine": {
                "show": false
            },
            "itemStyle": {
                "color": function(params) {
                    var colorList = [{
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                    offset: 0,
                                    color: option.color[3] + "0.1)"
                                },
                                {
                                    offset: 1,
                                    color: option.color[3] + "1)"
                                }
                            ],
                            global: false
                        },
                        option.color[3] + "0.1)", "rgba(0,0,0,0)"
                    ];
                    return colorList[params.dataIndex];
                }
            },
            "label": {
                "show": false
            },
            "encode": {
                "itemName": "NAME",
                "value": 4
            },
            "seriesLayoutBy": "row"
        },
        {
            "type": "pie",
            "radius": [
                "6%",
                "18%"
            ],
            "clockwise": false,
            "hoverAnimation": false,
            "labelLine": {
                "show": false
            },
            "itemStyle": {
                "color": function(params) {
                    var colorList = [{
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                    offset: 0,
                                    color: option.color[4] + "0.1)"
                                },
                                {
                                    offset: 1,
                                    color: option.color[4] + "1)"
                                }
                            ],
                            global: false
                        },
                        option.color[4] + "0.1)", "rgba(0,0,0,0)"
                    ];
                    return colorList[params.dataIndex];
                }
            },
            "label": {
                "show": false
            },
            "encode": {
                "itemName": "NAME",
                "value": 5
            },
            "seriesLayoutBy": "row"
        }
    ]
};