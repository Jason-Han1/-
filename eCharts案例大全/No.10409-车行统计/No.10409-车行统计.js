option = {
    "remark": "当日车流统计",
    "title": {
        "text": "车行统计",
        "x": "20px",
        "textStyle": {
            "fontSize": "18px",
            "color": "#CDFBFF",
            "fontFamily": "MicrosoftYaHei",
            "fontWeight": 400
        }
    },
    "tooltip": {
        "trigger": "axis"
    },
    "legend": {
        "data": [
            "车行统计"
        ],
        "textStyle": {
            "color": "#CDFBFF"
        },
        "left": "right",
        "icon": "roundRect",
        "itemHeight": "5",
        "padding": [
            0,
            50,
            0,
            0
        ]
    },
    "toolbox": {
        "show": false,
        "orient": "vertical",
        "x": "right",
        "y": "center",
        "feature": {
            "mark": {
                "show": false
            },
            "dataView": {
                "show": false,
                "readOnly": true
            },
            "magicType": {
                "show": true,
                "type": [
                    "line",
                    "bar",
                    "stack",
                    "tiled"
                ]
            },
            "restore": {
                "show": true
            },
            "saveAsImage": {
                "show": true
            }
        }
    },
    "calculable": true,
    "xAxis": [{
        "type": "category",
        "boundaryGap": false,
        "data": [
            "00:00",
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00"
        ],
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#CDFBFF",
                "fontSize": "14px",
                "fontFamily": "MicrosoftYaHei",
                "fontWeight": 400
            },
            "margin": 20
        },
        "axisTick": {
            "show": false
        },
        "axisLine": {
            "symbol": [
                "none",
                "path://M5,20,L5,8,L8,8,L5,2,L2,8,L5,8,L5.3,6,L5.3,20"
            ],
            "symbolOffset": 10,
            "symbolSize": [
                15,
                20
            ],
            "lineStyle": {
                "color": "#CDFBFF",
                "width": 0.5,
                "type": "solid"
            }
        }
    }],
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "#162D4A",
                "width": 1,
                "type": "solid"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": [
                    "#CDFBFF"
                ],
                "fontSize": "14px",
                "fontFamily": "MicrosoftYaHei",
                "fontWeight": 400
            },
            "margin": 20
        },
        "axisTick": {
            "show": false
        },
        "axisLine": {
            "symbol": [
                "none",
                "path://M5,20,L5,8,L8,8,L5,2,L2,8,L5,8,L5.3,6,L5.3,20"
            ],
            "symbolOffset": 10,
            "symbolSize": [
                15,
                20
            ],
            "lineStyle": {
                "color": "#CDFBFF",
                "width": 0.5,
                "type": "solid"
            }
        }
    }],
    "series": [{
        "name": "车行统计",
        "type": "line",
        "symbolSize": 8,
        "symbol": "none",
        "smooth": true,
        "areaStyle": {
            "normal": {
                "color": {
                    "type": "linear",
                    "x": 0,
                    "y": 0,
                    "x2": 0,
                    "y2": 1,
                    "colorStops": [{
                            "offset": 0,
                            "color": "rgba(61,98,246,0.3)"
                        },
                        {
                            "offset": 1,
                            "color": "rgba(61,98,246,0.1)"
                        }
                    ],
                    "globalCoord": false
                }
            }
        },
        "data": [
            "27",
            "13",
            "6",
            "2",
            "4",
            "20",
            "153",
            "320",
            "262",
            "116",
            "108",
            "101",
            "103",
            "89",
            "97",
            "127",
            "178",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0"
        ]
    }],
    "color": [
        "#3D62F6"
    ]
};