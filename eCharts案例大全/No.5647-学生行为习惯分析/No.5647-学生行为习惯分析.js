option = {
   backgroundColor: '#fff',
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
            "color": "#000",
            "fontStyle": "normal",
            "fontWeight": "normal"
        }
    },
    "tooltip": {
        "show": false,
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
            "color": "#000"
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
            "color": "#000",
            "fontStyle": "normal",
            "fontWeight": "normal"
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#000",
                width:0,
            }
        },
        "splitLine": {
            "show": false,
            "lineStyle": {
                "color": "#000"//
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
                "color": "rgba(245, 166, 35, 0)"
            }
        },
        itemStyle:{
            color:'rgba(245, 166, 35, 1)',
            borderColor:'rgba(245, 166, 35, 1)',
            borderWidth:10,
        },
        "lineStyle": {
            "normal": {
                "type": "dotted",
                
                "color": "rgba(245, 166, 35, 1)",
                "width": 5
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
                color:'rgba(166,166,166, 1)',
                "borderColor": "rgba(166,166,166, 1)",
                "borderWidth": 10
            }
        },
        "areaStyle": {
            "normal": {
                "color": "rgba(19, 173, 255, 0)"
            }
        },
        "lineStyle": {
            "normal": {
                "color": "rgba(166,166,166, 1)",
                "width": 5,
                "type": "dotted"
            }
        },
        "data": [
            [60, 60, 65, 60, 70, 40, 80, 63]
        ]
    }]
};