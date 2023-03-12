option = {
    backgroundColor:'black',
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
        "text": "广州市天河区教育资源建设与使用情况",
        "left": "30%",
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
        "data": ["建设情况", "使用情况"]
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
                "color": "grey"//
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "grey"//
            }
        },
        "indicator": [{
            "name": "教学课件",
            "max": 88
        }, {
            "name": "教学设计",
            "max": 88
        }, {
            "name": "教学素材",
            "max": 88
        },{
            "name":"硬件建设",
            "max":88
        }]
    },
    "series": [{
        "name": "建设情况",
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
            [80, 50, 55, 80]
        ]
    }, {
        "name": "使用情况",
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
            [60, 85, 77, 60, 70]
        ]
    }]
};