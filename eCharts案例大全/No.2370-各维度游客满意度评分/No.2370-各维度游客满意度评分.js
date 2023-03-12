option = {
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
        "text": '各维度游客满意度评分',
        "show": true,
        "left": "40%",
        "bottom": "1%",
        "textStyle": {
            "fontSize": 18,
            "color": "#151E26",
            "fontStyle": "normal",
            "fontWeight": "normal"
        }
    },
    "tooltip": {
        "show": true,
        "trigger": "item"
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
            "color": "#151E26",
            "fontStyle": "normal",
            "fontWeight": "normal"
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#F1F1F1"//
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "#F1F1F1"//
            }
        },
        "indicator": [{
            "name": "交通",
            "max": 100
        }, {
            "name": "体验",
            "max": 100
        }, {
            "name": "卫生",
            "max": 100
        }, {
            "name": "安全",
            "max": 100
        }, {
            "name": "景观",
            "max": 100
        }, {
            "name": "服务",
            "max": 100
        }, {
            "name": "消费",
            "max": 100
        }, {
            "name": "配套",
            "max": 100
        }]
    },
    "series": [{
        "name": "各维度游客满意度评分",
        "type": "radar",
        "symbol": "circle",
        "symbolSize": 2,
        "areaStyle": {
            "normal": {
                "color": "rgba(43,153,255, 0.1)"
            }
        },
        itemStyle:{
            color:'rgba(43,153,255, 1)',
            borderColor:'rgba(43,153,255, 1)',
            borderWidth:5,
        },
        "lineStyle": {
            "normal": {
                "color":  "rgba(19, 173, 255, 1)",
                "width": 2
            }
        },
        "data": [
            [90, 85, 55, 60, 60, 80, 45, 90]
        ]
    }]
}
