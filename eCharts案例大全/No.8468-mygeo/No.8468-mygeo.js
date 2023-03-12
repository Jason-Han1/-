
var option= {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [{
            "type": "effectScatter",
            "coordinateSystem": "geo",
            "showEffectOn": "render",
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            },
            "symbolSize": 12,
            "data": [{
                    "name": "Bahrain",
                    "value": [
                        50.6377719999999,
                        25.9304139999999,
                        1569439
                    ]
                },
                {
                    "name": "Bangladesh",
                    "value": [
                        90.3563309999999,
                        23.6849939999999,
                        161356039
                    ]
                },
                {
                    "name": "Comoros",
                    "value": [
                        43.872219,
                        -11.8750009999999,
                        832322
                    ]
                },
                {
                    "name": "Grenada",
                    "value": [
                        -61.604171,
                        12.262776,
                        111454
                    ]
                },
                {
                    "name": "Kiribati",
                    "value": [
                        -168.734038999999,
                        -3.370417,
                        115847
                    ]
                },
                {
                    "name": "Maldives",
                    "value": [
                        73.22068,
                        3.20277799999999,
                        515696
                    ]
                },
                {
                    "name": "Marshall Islands",
                    "value": [
                        171.184478,
                        7.13147399999999,
                        58413
                    ]
                },
                {
                    "name": "Philippines",
                    "value": [
                        121.774017,
                        12.8797209999999,
                        106651922
                    ]
                },
                {
                    "name": "Samoa",
                    "value": [
                        -172.104628999999,
                        -13.7590289999999,
                        196130
                    ]
                },
                {
                    "name": "Sri Lanka",
                    "value": [
                        80.771797,
                        7.87305399999999,
                        21670000
                    ]
                },
                {
                    "name": "Tonga",
                    "value": [
                        -175.198241999999,
                        -21.1789859999999,
                        56318348
                    ]
                },
                {
                    "name": "Tuvalu",
                    "value": [
                        177.649329999999,
                        -7.109535,
                        11565204
                    ]
                }
            ],
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "lines",
            "name": "\u6d41\u5411\u56fe",
            "coordinateSystem": "geo",
            "zlevel": 3,
            "progressive": 400,
            "progressiveThreshold": 3000,
            "effect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4,
                "color": "yellow",
                "symbol": "arrow",
                "symbolSize": 5
            },
            "symbol": [
                "none",
                "arrow"
            ],
            "polyline": false,
            "large": false,
            "largeThreshold": 2000,
            "symbolSize": 12,
            "data": [{
                    "name": "Bahrain->Qatar",
                    "coords": [
                        [
                            50.6377719999999,
                            25.9304139999999
                        ],
                        [
                            51.1838839999999,
                            25.3548259999999
                        ]
                    ]
                },
                {
                    "name": "Bahrain->United States",
                    "coords": [
                        [
                            50.6377719999999,
                            25.9304139999999
                        ],
                        [
                            -95.7128909999999,
                            37.09024
                        ]
                    ]
                },
                {
                    "name": "Bahrain->Serbia",
                    "coords": [
                        [
                            50.6377719999999,
                            25.9304139999999
                        ],
                        [
                            21.005859,
                            44.0165209999999
                        ]
                    ]
                },
                {
                    "name": "Bangladesh->Serbia",
                    "coords": [
                        [
                            90.3563309999999,
                            23.6849939999999
                        ],
                        [
                            21.005859,
                            44.0165209999999
                        ]
                    ]
                },
                {
                    "name": "Bangladesh->United States",
                    "coords": [
                        [
                            90.3563309999999,
                            23.6849939999999
                        ],
                        [
                            -95.7128909999999,
                            37.09024
                        ]
                    ]
                },
                {
                    "name": "Bangladesh->India",
                    "coords": [
                        [
                            90.3563309999999,
                            23.6849939999999
                        ],
                        [
                            78.962,
                            20.593
                        ]
                    ]
                },
                {
                    "name": "Comoros->United States",
                    "coords": [
                        [
                            43.872219,
                            -11.8750009999999
                        ],
                        [
                            -95.7128909999999,
                            37.09024
                        ]
                    ]
                },
                {
                    "name": "Comoros->China",
                    "coords": [
                        [
                            43.872219,
                            -11.8750009999999
                        ],
                        [
                            104.195396999999,
                            35.86166
                        ]
                    ]
                },
                {
                    "name": "Comoros->Germany",
                    "coords": [
                        [
                            43.872219,
                            -11.8750009999999
                        ],
                        [
                            10.4515259999999,
                            51.165691
                        ]
                    ]
                },
                {
                    "name": "Grenada->United States",
                    "coords": [
                        [
                            -61.604171,
                            12.262776
                        ],
                        [
                            -95.7128909999999,
                            37.09024
                        ]
                    ]
                },
                {
                    "name": "Grenada->Nicaragua",
                    "coords": [
                        [
                            -61.604171,
                            12.262776
                        ],
                        [
                            -85.2072289999999,
                            12.8654159999999
                        ]
                    ]
                },
                {
                    "name": "Grenada->Serbia",
                    "coords": [
                        [
                            -61.604171,
                            12.262776
                        ],
                        [
                            21.005859,
                            44.0165209999999
                        ]
                    ]
                },
                {
                    "name": "Kiribati->Russian Federation",
                    "coords": [
                        [
                            -168.734038999999,
                            -3.370417
                        ],
                        [
                            105.318755999999,
                            61.5240099999999
                        ]
                    ]
                },
                {
                    "name": "Kiribati->Serbia",
                    "coords": [
                        [
                            -168.734038999999,
                            -3.370417
                        ],
                        [
                            21.005859,
                            44.0165209999999
                        ]
                    ]
                },
                {
                    "name": "Kiribati->Japan",
                    "coords": [
                        [
                            -168.734038999999,
                            -3.370417
                        ],
                        [
                            138.252924,
                            36.204824
                        ]
                    ]
                },
                {
                    "name": "Maldives->Serbia",
                    "coords": [
                        [
                            73.22068,
                            3.20277799999999
                        ],
                        [
                            21.005859,
                            44.0165209999999
                        ]
                    ]
                },
                {
                    "name": "Maldives->India",
                    "coords": [
                        [
                            73.22068,
                            3.20277799999999
                        ],
                        [
                            78.962,
                            20.593
                        ]
                    ]
                },
                {
                    "name": "Maldives->Russian Federation",
                    "coords": [
                        [
                            73.22068,
                            3.20277799999999
                        ],
                        [
                            105.318755999999,
                            61.5240099999999
                        ]
                    ]
                },
                {
                    "name": "Marshall Islands->Russian Federation",
                    "coords": [
                        [
                            171.184478,
                            7.13147399999999
                        ],
                        [
                            105.318755999999,
                            61.5240099999999
                        ]
                    ]
                },
                {
                    "name": "Marshall Islands->Serbia",
                    "coords": [
                        [
                            171.184478,
                            7.13147399999999
                        ],
                        [
                            21.005859,
                            44.0165209999999
                        ]
                    ]
                },
                {
                    "name": "Marshall Islands->Japan",
                    "coords": [
                        [
                            171.184478,
                            7.13147399999999
                        ],
                        [
                            138.252924,
                            36.204824
                        ]
                    ]
                },
                {
                    "name": "Philippines->Serbia",
                    "coords": [
                        [
                            121.774017,
                            12.8797209999999
                        ],
                        [
                            21.005859,
                            44.0165209999999
                        ]
                    ]
                },
                {
                    "name": "Philippines->Japan",
                    "coords": [
                        [
                            121.774017,
                            12.8797209999999
                        ],
                        [
                            138.252924,
                            36.204824
                        ]
                    ]
                },
                {
                    "name": "Philippines->Russian Federation",
                    "coords": [
                        [
                            121.774017,
                            12.8797209999999
                        ],
                        [
                            105.318755999999,
                            61.5240099999999
                        ]
                    ]
                },
                {
                    "name": "Samoa->United States",
                    "coords": [
                        [
                            -172.104628999999,
                            -13.7590289999999
                        ],
                        [
                            -95.7128909999999,
                            37.09024
                        ]
                    ]
                },
                {
                    "name": "Samoa->China",
                    "coords": [
                        [
                            -172.104628999999,
                            -13.7590289999999
                        ],
                        [
                            104.195396999999,
                            35.86166
                        ]
                    ]
                },
                {
                    "name": "Samoa->Japan",
                    "coords": [
                        [
                            -172.104628999999,
                            -13.7590289999999
                        ],
                        [
                            138.252924,
                            36.204824
                        ]
                    ]
                },
                {
                    "name": "Sri Lanka->Slovenia",
                    "coords": [
                        [
                            80.771797,
                            7.87305399999999
                        ],
                        [
                            14.995463,
                            46.1512409999999
                        ]
                    ]
                },
                {
                    "name": "Sri Lanka->Serbia",
                    "coords": [
                        [
                            80.771797,
                            7.87305399999999
                        ],
                        [
                            21.005859,
                            44.0165209999999
                        ]
                    ]
                },
                {
                    "name": "Sri Lanka->Russian Federation",
                    "coords": [
                        [
                            80.771797,
                            7.87305399999999
                        ],
                        [
                            105.318755999999,
                            61.5240099999999
                        ]
                    ]
                },
                {
                    "name": "Tonga->United States",
                    "coords": [
                        [
                            -175.198241999999,
                            -21.1789859999999
                        ],
                        [
                            -95.7128909999999,
                            37.09024
                        ]
                    ]
                },
                {
                    "name": "Tonga->Serbia",
                    "coords": [
                        [
                            -175.198241999999,
                            -21.1789859999999
                        ],
                        [
                            21.005859,
                            44.0165209999999
                        ]
                    ]
                },
                {
                    "name": "Tonga->Japan",
                    "coords": [
                        [
                            -175.198241999999,
                            -21.1789859999999
                        ],
                        [
                            138.252924,
                            36.204824
                        ]
                    ]
                },
                {
                    "name": "Tuvalu->United States",
                    "coords": [
                        [
                            177.649329999999,
                            -7.109535
                        ],
                        [
                            -95.7128909999999,
                            37.09024
                        ]
                    ]
                },
                {
                    "name": "Tuvalu->China",
                    "coords": [
                        [
                            177.649329999999,
                            -7.109535
                        ],
                        [
                            104.195396999999,
                            35.86166
                        ]
                    ]
                },
                {
                    "name": "Tuvalu->Japan",
                    "coords": [
                        [
                            177.649329999999,
                            -7.109535
                        ],
                        [
                            138.252924,
                            36.204824
                        ]
                    ]
                }
            ],
            "lineStyle": {
                "width": 1,
                "opacity": 1,
                "curveness": 0.2,
                "type": "solid"
            },
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [{
        "data": [
            "",
            "\u6d41\u5411\u56fe"
        ],
        "selected": {
            "": true,
            "\u6d41\u5411\u56fe": true
        },
        "show": true,
        "padding": 5,
        "itemGap": 10,
        "itemWidth": 25,
        "itemHeight": 14
    }],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "formatter": function(params) {
            return params.name + ' : ' + params.value[2];
        },
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0
    },
    "title": [{
        "text": "mygeo"
    }],
    "visualMap": {
        "show": true,
        "type": "continuous",
        "min": 0,
        "max": 130000,
        "inRange": {
            "color": [
                "#50a3ba",
                "#eac763",
                "#d94e5d"
            ]
        },
        "calculable": true,
        "splitNumber": 5,
        "orient": "vertical",
        "showLabel": true,
        "itemWidth": 20,
        "itemHeight": 140
    },
    "geo": {
        "map": "world",
        "roam": true,
        "emphasis": {}
    }
};
