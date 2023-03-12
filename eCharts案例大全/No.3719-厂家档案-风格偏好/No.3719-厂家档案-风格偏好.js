option = {
   backgroundColor: '#0A2E5D',
    "normal": {
        "top": 0,
        "left": 0,
        "width": 330,
        "height": 300,
        "zIndex": 6,
        "backgroundColor": ""
    },
    "color": ["rgba(245, 166, 35, 1)", "rgba(19, 173, 255, 1)"],
    "title": {
        "show": true,
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
        }
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
            "name": "运动",
            "max": 100
        }, {
            "name": "休闲",
            "max": 100
        }, {
            "name": "欧美",
            "max": 100
        }, {
            "name": "韩版",
            "max": 100
        }, {
            "name": "学院",
            "max": 100
        }, {
            "name": "百搭",
            "max": 100
        }, {
            "name": "英伦",
            "max": 100
        }, {
            "name": "可爱",
            "max": 100
        }]
    },
    "series": [{
        "name": "风格偏好",
        "type": "radar",
        "symbol": "circle",
        "symbolSize": 10,
        "areaStyle": {
            "normal": {
                "color": "rgba(19, 173, 255, 0.5)"
            }
        },
        itemStyle:{
            color:'rgba(245, 166, 35, 1)',
            borderColor:'rgba(19, 173, 255, 1)',
            borderWidth:10,
        },
        "lineStyle": {
            "normal": {
                "type": "dashed",
                
                "color":  "rgba(19, 173, 255, 1)",
                "width": 2
            }
        },
        "data": [
            [90, 85, 55, 60, 60, 80, 45, 90]
        ]
    }]
};