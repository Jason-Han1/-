option = {
    "title": [{
            "show": true,
            "text": "药占比趋势",
        },
        {
            "show": false,
            "text": "2018药占比:44.20",
            "top": "70",
            "right": "80"
        }
    ],
    "legend": {
        "show": true
    },
    "toolbox": {
        "feature": {
            "dataZoom": {
                "show": true
            },
            "mySeriesGroup": {
                "show": true,
                "title": "grid series互换",
                "icon": "image://icons/run.png",
                "onclick": "function (){\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\tvar tmp = _this.groupByName;\r\n\t\t\t\t\t\t\t\t\t_this.groupByName = _this.seriesName;\r\n\t\t\t\t\t\t\t\t\t_this.seriesName = tmp;\r\n\t\t\t\t\t\t\t\t\t_this.query();\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t                }"
            }
        },
        "left": "right"
    },
    "tooltip": {
        "trigger": "axis"
    },
    "xAxis": [{
            "show": true,
            "type": "category"
        }
    ],
    "yAxis": [{
            "type": "value",
            min: 28
        }
    ],
    "series": [{
            "name": "2018",
            "label": {
                "show": true
            },
            "axisLine": {
                "lineStyle": {
                    "color": [
                        [
                            0.2,
                            ""
                        ],
                        [
                            0.8,
                            ""
                        ],
                        [
                            100,
                            ""
                        ]
                    ]
                }
            },
            "detail": {
                "offsetCenter": [
                    "0%",
                    "40%"
                ],
                "fontFamily": "serif"
            },
            "symbolOffset": [
                0,
                0
            ],
            "center": [
                "50%",
                "50%"
            ],
            "type": "line",
            "encode": {
                "itemName": "",
                "value": "",
                "x": "月",
                "y": "药占比(%)",
                "z": ""
            },
            "datasetIndex": 0
        },
        {
            "name": "2019",
            "label": {
                "show": true
            },
            "axisLine": {
                "lineStyle": {
                    "color": [
                        [
                            0.2,
                            ""
                        ],
                        [
                            0.8,
                            ""
                        ],
                        [
                            100,
                            ""
                        ]
                    ]
                }
            },
            "detail": {
                "offsetCenter": [
                    "0%",
                    "40%"
                ],
                "fontFamily": "serif"
            },
            "symbolOffset": [
                0,
                0
            ],
            "center": [
                "50%",
                "50%"
            ],
            "markLine": {
                "data": [{
                        "name": "要求",
                        "yAxis": "30",
                        "lineStyle": {
                            "color": "#ff0000"
                        },
                        "symbolOffset": [
                            0,
                            0
                        ]
                    },
                    {
                        "name": "2018",
                        "yAxis": "44.20",
                        "label": {
                            "formatter": "2018:44.20"
                        },
                        "symbolOffset": [
                            0,
                            0
                        ]
                    },
                    {
                        "name": "2019",
                        "yAxis": "42.60",
                        "label": {
                            "formatter": "2019:42.60"
                        },
                        "symbolOffset": [
                            0,
                            0
                        ]
                    }
                ]
            },
            "type": "line",
            "encode": {
                "itemName": "",
                "value": "",
                "x": "月",
                "y": "药占比(%)",
                "z": ""
            },
            "datasetIndex": 1
        }
    ],
    "grid": {},
    "jsonText": "{\n  \"title\": [\n    {\n      \"show\": true\n    }\n  ],\n  \"legend\": {\n    \"show\": true\n  },\n  \"radar\": {},\n  \"visualMap\": [],\n  \"timeline\": {\n    \"show\": false\n  },\n  \"toolbox\": {},\n  \"tooltip\": {\n    \"show\": true\n  },\n  \"xAxis\": [\n    {\n      \"show\": true,\n      \"type\": \"category\"\n    },\n    {\n      \"show\": false,\n      \"type\": \"category\"\n    }\n  ],\n  \"yAxis\": [\n    {\n      \"type\": \"value\",\n      \"min\": 10\n    },\n    {\n      \"show\": false,\n      \"type\": \"value\"\n    }\n  ],\n  \"zAxis\": [\n    {\n      \"show\": true,\n      \"type\": \"value\"\n    },\n    {\n      \"show\": false,\n      \"type\": \"value\"\n    }\n  ],\n  \"series\": [\n    {\n      \"name\": \"趋势\",\n      \"label\": {\n        \"show\": true\n      },\n      \"axisLine\": {\n        \"lineStyle\": {\n          \"color\": [\n            [\n              0.2,\n              \"\"\n            ],\n            [\n              0.8,\n              \"\"\n            ],\n            [\n              100,\n              \"\"\n            ]\n          ]\n        }\n      },\n      \"detail\": {\n        \"offsetCenter\": [\n          \"0%\",\n          \"40%\"\n        ],\n        \"fontFamily\": \"serif\"\n      },\n      \"symbolOffset\": [\n        0,\n        0\n      ],\n      \"center\": [\n        \"50%\",\n        \"50%\"\n      ]\n    },\n    {\n      \"name\": \"仪表盘\",\n\"gridIndex\":1,\n\n      \"startAngle\": 180,\n      \"endAngle\": 0,\n      \"splitNumber\": 5,\n      \"axisLine\": {\n        \"lineStyle\": {\n          \"color\": [\n            [\n              0.3,\n              \"green\"\n            ],\n            [\n              0.8,\n              \"blue\"\n            ],\n            [\n              100,\n              \"red\"\n            ]\n          ],\n          \"width\": 4\n        }\n      },\n      \"splitLine\": {\n        \"show\": false,\n        \"length\": 10\n      },\n      \"detail\": {\n        \"offsetCenter\": [\n          \"0%\",\n          \"40%\"\n        ],\n        \"fontFamily\": \"serif\"\n      },\n      \"symbolOffset\": [\n        0,\n        0\n      ],\n      \"center\": [\n        \"70%\",\n        \"25%\"\n      ],\n      \"radius\": \"25%\"\n    }\n  ],\n  \"grid\": [\n    {},\n    {\n      \"right\": \"100\",\n      \"bottom\": \"100\"\n    }\n  ]\n}",
    "type": "json",
    "table": {
        "title": "[开单科室]药占比"
    },
    "dataset": [{
            "dimensions": [
                "月",
                "年",
                "年月",
                "总金额",
                "药品金额",
                "药占比(%)",
                "年总金额",
                "年药品金额",
                "年度药占比"
            ],
            "source": [
                [
                    1,
                    2018,
                    201801,
                    23432307.25,
                    10418837.65,
                    "44.50",
                    270918260.24,
                    119843211.07,
                    "44.20"
                ],
                [
                    2,
                    2018,
                    201802,
                    19254792.39,
                    8820443.01,
                    "45.80",
                    270918260.24,
                    119843211.07,
                    "44.20"
                ],
                [
                    3,
                    2018,
                    201803,
                    24258860.67,
                    10981991.94,
                    "45.30",
                    270918260.24,
                    119843211.07,
                    "44.20"
                ],
                [
                    4,
                    2018,
                    201804,
                    22464545.13,
                    10535854.52,
                    "46.90",
                    270918260.24,
                    119843211.07,
                    "44.20"
                ],
                [
                    5,
                    2018,
                    201805,
                    23253308.46,
                    10904958.82,
                    "46.90",
                    270918260.24,
                    119843211.07,
                    "44.20"
                ],
                [
                    6,
                    2018,
                    201806,
                    22401748.7,
                    10002601.76,
                    "44.70",
                    270918260.24,
                    119843211.07,
                    "44.20"
                ],
                [
                    7,
                    2018,
                    201807,
                    23509055.79,
                    9523282.33,
                    "40.50",
                    270918260.24,
                    119843211.07,
                    "44.20"
                ],
                [
                    8,
                    2018,
                    201808,
                    23392274.02,
                    9257572.59,
                    "39.60",
                    270918260.24,
                    119843211.07,
                    "44.20"
                ],
                [
                    9,
                    2018,
                    201809,
                    19969889.8,
                    9056721.03,
                    "45.40",
                    270918260.24,
                    119843211.07,
                    "44.20"
                ],
                [
                    10,
                    2018,
                    201810,
                    21737544.55,
                    9878885.39,
                    "45.40",
                    270918260.24,
                    119843211.07,
                    "44.20"
                ],
                [
                    11,
                    2018,
                    201811,
                    24892776.11,
                    10952649.45,
                    "44.00",
                    270918260.24,
                    119843211.07,
                    "44.20"
                ],
                [
                    12,
                    2018,
                    201812,
                    22351157.35,
                    9509412.57,
                    "42.50",
                    270918260.24,
                    119843211.07,
                    "44.20"
                ]
            ]
        },
        {
            "dimensions": [
                "月",
                "年",
                "年月",
                "总金额",
                "药品金额",
                "药占比(%)",
                "年总金额",
                "年药品金额",
                "年度药占比"
            ],
            "source": [
                [
                    1,
                    2019,
                    201901,
                    23148267.17,
                    9914814.2,
                    "42.80",
                    168137865.24,
                    71661736.11,
                    "42.60"
                ],
                [
                    2,
                    2019,
                    201902,
                    18785337.66,
                    8377957.54,
                    "44.60",
                    168137865.24,
                    71661736.11,
                    "42.60"
                ],
                [
                    3,
                    2019,
                    201903,
                    24477087.87,
                    10069841.85,
                    "41.10",
                    168137865.24,
                    71661736.11,
                    "42.60"
                ],
                [
                    4,
                    2019,
                    201904,
                    26049343.89,
                    11031267.01,
                    "42.30",
                    168137865.24,
                    71661736.11,
                    "42.60"
                ],
                [
                    5,
                    2019,
                    201905,
                    26286193.79,
                    11152538.56,
                    "42.40",
                    168137865.24,
                    71661736.11,
                    "42.60"
                ],
                [
                    6,
                    2019,
                    201906,
                    25196219.1,
                    11011055.33,
                    "43.70",
                    168137865.24,
                    71661736.11,
                    "42.60"
                ],
                [
                    7,
                    2019,
                    201907,
                    24195415.76,
                    10104261.63,
                    "41.80",
                    168137865.24,
                    71661736.11,
                    "42.60"
                ]
            ]
        }
    ],
    "textStyle": {
        "fontSize": 18
    }
}