// 数据进度值
const __CONFIG__ = {
    startAngle: 245,
    endAngle: -65,
    colorTypes: [
        {name: '优', color: '#a7cf8c'},
        {name: '良', color: '#f7da64'},
        {name: '轻度', color: '#f29e39'},
        {name: '中度', color: '#da555d'},
        {name: '重度', color: '#b9377a'},
    ],
    opacityBg: 'rgba(8, 138, 213, 0.08)',
}

var _value_ = 0.5
var _displayValue_ = _value_ * 100

var option = {
    "series": [
        {
            "name": "外部刻度",
            "type": "gauge",
            "radius": "100%",
            "min": 0,
            "max": 100,
            "splitNumber": 10,
            "startAngle": __CONFIG__.startAngle,
            "endAngle": __CONFIG__.endAngle,
            "axisLine": {
                "roundCap": true,
                "lineStyle": {
                    "width": 0,
                    "opacity": 0,
                    "color": [
                        [
                            0.21,
                             __CONFIG__.colorTypes[1].color
                        ],
                        [
                            1,
                            "rgba(69, 90, 100, 1)"
                        ]
                    ]
                }
            },
            "axisLabel": {
                "show": false
            },
            "axisTick": {
                "show": true,
                "splitNumber": 7,
                "lineStyle": {
                    "color": "auto",
                    "width": 2
                },
                "length": 10
            },
            "splitLine": {
                "show": true,
                "length": 20,
                "distance": 9,
                "lineStyle": {
                    "color": "auto",
                    "width": 3
                }
            },
            "detail": {
                "show": false
            },
            "pointer": {
                "show": false
            }
        },
        {
            "name": "内部（环形）进度条",
            "type": "gauge",
            "radius": "70%",
            "z": 4,
            "startAngle": __CONFIG__.startAngle,
            "endAngle": __CONFIG__.endAngle,
            "axisLine": {
                "lineStyle": {
                    "color": [
                        [
                            0.21,
                             __CONFIG__.colorTypes[1].color
                        ]
                    ],
                    "width": 18
                }
            },
            "axisLabel": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "splitLine": {
                "show": false
            },
            "pointer": {
                "show": false
            },
            "title": {
                "show": true,
                "offsetCenter": [
                    "0%",
                    "20%"
                ],
                "fontSize": 20,
                "color": "#fff",
                "backgroundColor":  __CONFIG__.colorTypes[1].color,
                "borderWidth": 1,
                "borderRadius": 6,
                "height": 26,
                "padding": [
                    8,
                    26,
                    0,
                    26
                ]
            },
            "detail": {
                "show": true,
                "color":  __CONFIG__.colorTypes[1].color,
                "fontSize": 50,
                "fontWeight": "bold",
                "offsetCenter": [
                    "0%",
                    "-20%"
                ]
            },
            "data": [
                {
                    "name": "优",
                    "value": 21
                }
            ]
        },
        {
            "name": "内部（环形）进度条背景",
            "type": "gauge",
            "radius": "74%",
            "z": 3,
            "startAngle": __CONFIG__.startAngle,
            "endAngle": __CONFIG__.endAngle,
            "axisLine": {
                "lineStyle": {
                    "color": [
                        [
                            1,
                            __CONFIG__.opacityBg
                        ]
                    ],
                    "width": 36
                }
            },
            "axisLabel": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "splitLine": {
                "show": false
            },
            "detail": {
                "show": false
            }
        },
        {
            "type": "pie",
            "radius": [
                "0",
                "46%"
            ],
            itemStyle:{
                color: __CONFIG__.opacityBg
            },
            "hoverAnimation": false,
            // "emphasis": {
            //     "itemStyle": {
            //         "color": __CONFIG__.opacityBg
            //     }
            // },
            data:[1]
        }
    ]
}