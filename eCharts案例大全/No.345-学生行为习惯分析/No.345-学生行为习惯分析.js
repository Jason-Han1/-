option = {
   backgroundColor: '#0A2E5D',
    "normal": {
        "top": 200,
        "left": 300,
        "width": 500,
        "height": 400,
        "zIndex": 6,
        "backgroundColor": ""
    },
    "color": ["rgba(245, 166, 35, 1)", "rgba(19, 173, 255, 1)"],
    "title": {
        "show": true,
        "text": "学生行为习惯分析",
        "left": "40%",
        "top": "1%",
        "textStyle": {
            "fontSize": 18,
            "color": "#fff",
            "fontStyle": "normal",
            "fontWeight": "normal"
        }
    },
    "tooltip": {
        "show": true,
        "trigger": "item"
    },
    "legend": {
        "show": true,
        "icon": "circle",
        "left": "35%",
        "top": "90%",
        "orient": "horizontal",
        "textStyle": {
            "fontSize": 14,
            "color": "#fff"
        },
        "data": ["高一(1)班", "高一(2)班"]
    },
    "radar": {
        "center": ["50%", "50%"],
        "radius": "70%",
        "startAngle": 90,
        "splitNumber": 4,
        "shape": "circle",
        "splitArea": {
            "areaStyle": {
                "color": ["transparent"]
            }
        },
        "axisLabel": {
            "show": false,
            "fontSize": 18,
            "color": "#fff",
            "fontStyle": "normal",
            "fontWeight": "normal"
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "white"//
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "white"//
            }
        },
        "indicator": [{
            "name": "良好的文明礼仪习惯",
            "max": 88
        }, {
            "name": "良好的学习习惯",
            "max": 88
        }, {
            "name": "良好的健体习惯",
            "max": 88
        }, {
            "name": "良好的卫生习惯",
            "max": 88
        }, {
            "name": "良好的阅读习惯",
            "max": 88
        }, {
            "name": "良好的劳动习惯",
            "max": 88
        }, {
            "name": "良好的生活习惯",
            "max": 88
        }, {
            "name": "良好的安全习惯",
            "max": 88
        }]
    },
    "series": [{
        "name": "高一(1)班",
        "type": "radar",
        "symbol": "circle",
        "symbolSize": 10,
        "areaStyle": {
            "normal": {
                "color": "rgba(245, 166, 35, 0.4)"
            }
        },
        itemStyle:{
            color:'rgba(245, 166, 35, 1)',
            borderColor:'rgba(245, 166, 35, 0.3)',
            borderWidth:10,
        },
        "lineStyle": {
            "normal": {
                "type": "dashed",
                
                "color": "rgba(245, 166, 35, 1)",
                "width": 2
            }
        },
        "data": [
            [80, 50, 55, 80, 50, 80, 48, 43]
        ]
    }, {
        "name": "高一(2)班",
        "type": "radar",
        "symbol": "circle",
        "symbolSize": 10,
        "itemStyle": {
            "normal": {
                color:'rgba(19, 173, 255, 1)',
                "borderColor": "rgba(19, 173, 255, 0.4)",
                "borderWidth": 10
            }
        },
        "areaStyle": {
            "normal": {
                "color": "rgba(19, 173, 255, 0.5)"
            }
        },
        "lineStyle": {
            "normal": {
                "color": "rgba(19, 173, 255, 1)",
                "width": 2,
                "type": "dashed"
            }
        },
        "data": [
            [60, 60, 65, 60, 70, 40, 80, 63]
        ]
    }]
};