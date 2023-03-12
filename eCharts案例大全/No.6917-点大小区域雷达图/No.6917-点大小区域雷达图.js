option = {
    "tooltip": {},
    "series": [{
            "type": "line",
            "coordinateSystem": "polar",
            "tooltip": {
                "show": true
            },
            "lineStyle": {
                "width": 1,
                "color": "rgba(0, 0, 0, 0)"
            },
            "name": "实例A",
            "data": [{
                    "value": 0.8103925626,
                    "symbolSize": 20,
                    "symbol": "circle",
                    "itemStyle": {
                        "color": "#346ACC"
                    }
                },
                {
                    "value": 0.8445121115,
                    "symbolSize": 19.716984845502854,
                    "symbol": "circle",
                    "itemStyle": {
                        "color": "#346ACC"
                    }
                },
                {
                    "value": 0.8644185642,
                    "symbolSize": 15.332021255658335,
                    "symbol": "circle",
                    "itemStyle": {
                        "color": "#346ACC"
                    }
                },
                {
                    "value": 0.8122391275,
                    "symbolSize": 15.31115922062586,
                    "symbol": "circle",
                    "itemStyle": {
                        "color": "#346ACC"
                    }
                },
                {
                    "value": 0.8782872706,
                    "symbolSize": 12.349143869317064,
                    "symbol": "circle",
                    "itemStyle": {
                        "color": "#346ACC"
                    }
                },
                {
                    "value": 0.8161617319,
                    "symbolSize": 9.811454438102736,
                    "symbol": "circle",
                    "itemStyle": {
                        "color": "#346ACC"
                    }
                },
                {
                    "value": 0.8794987345,
                    "symbolSize": 9.020271600078726,
                    "symbol": "circle",
                    "itemStyle": {
                        "color": "#346ACC"
                    }
                },
                {
                    "value": 0.9034633215,
                    "symbolSize": 6,
                    "symbol": "circle",
                    "itemStyle": {
                        "color": "#346ACC"
                    }
                }
            ],
            "z": 3
        },
        {
            "type": "radar",
            "data": [{
                "name": "实例A",
                "value": [
                    0.8103925626,
                    0.8445121115,
                    0.8644185642,
                    0.8122391275,
                    0.8782872706,
                    0.8161617319,
                    0.8794987345,
                    0.9034633215
                ],
                "itemStyle": {
                    "color": "rgba(255, 0, 0, 0)"
                },
                "lineStyle": {
                    "color": "#346ACC",
                    "width": 1,
                    "type": "dashed"
                },
                'areaStyle': {
                    opacity: 0.5,
                    color: '#3384FF'
                }
            }],
        },
    ],
    "radar": {
        "indicator": [{
                "name": "价格",
                "max": 1,
                "min": 0
            },
            {
                "name": "动力",
                "max": 1,
                "min": 0
            },
            {
                "name": "内饰",
                "max": 1,
                "min": 0
            },
            {
                "name": "外观",
                "max": 1,
                "min": 0
            },
            {
                "name": "配置",
                "max": 1,
                "min": 0
            },
            {
                "name": "空间",
                "max": 1,
                "min": 0
            },
            {
                "name": "操控",
                "max": 1,
                "min": 0
            },
            {
                "name": "舒适",
                "max": 1,
                "min": 0
            }
        ],
        "splitNumber": 3,
        "shape": "circle",
        "name": {
            color: '#3bc7ff',
        },
        "axisLine": {
            "lineStyle": {
                opacity: 0.2,
                "color": "#101D41"
            }
        },
        "splitLine": {
            "lineStyle": {
                "color": "#fff"
            }
        },
        // 雷达图圆圈色
        "splitArea": {
            "areaStyle": {
                "color": [
                    "rgba(16, 29, 65, 0.5)",
                    "rgba(16, 29, 65, 0.3)",
                    "rgba(16, 29, 65, 0.1)"
                ]
            }
        }
    },
    "polar": {
        "radius": "75%",
        "show": false
    },
    "radiusAxis": {
        "min": 0,
        "max": 1,
        "show": false
    },
    "angleAxis": {
        "show": false,
        "type": "category",
        "startAngle": 67.5, // 计算值
        "clockwise": false
    }
}