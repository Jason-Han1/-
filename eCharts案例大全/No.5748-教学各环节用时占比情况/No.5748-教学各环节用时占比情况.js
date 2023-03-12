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
        "text": "教学各环节用时占比情况",
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
        "data": ["教师用时", "教研组平均用时"]
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
            "name": "合理导入",
            "max": 88
        }, {
            "name": "出示目标",
            "max": 88
        }, {
            "name": "展示",
            "max": 88
        }, {
            "name": "学生点评、教师点拨",
            "max": 88
        }, {
            "name": "小结、扩展、提升",
            "max": 88
        }, {
            "name": "当堂检测练",
            "max": 88
        }]
    },
    "series": [{
        "name": "教师用时",
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
            [80, 65, 75, 80, 59, 80]
        ]
    }, {
        "name": "教研组平均用时",
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
            [70, 80, 78, 70, 70, 69]
        ]
    }]
};