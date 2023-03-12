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
        "text": "最近一次各科成绩排名",
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
            "name": "语文",
            "max": 150
        }, {
            "name": "数学",
            "max": 150
        }, {
            "name": "英语",
            "max": 150
        }, {
            "name": "物理",
            "max": 100
        }, {
            "name": "生物",
            "max": 100
        }, {
            "name": "化学",
            "max": 100
        }, {
            "name": "政治",
            "max": 100
        }, {
            "name": "地理",
            "max": 100
        },{
            "name":"历史",
            "max":100
        }]
    },
    "series": [{
        "name": "个人成绩",
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
            [98,109,125,92,95,94,86,81,79]
        ]
    }, {
        "name": "年级平均成绩",
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
            [111,98,117,95,91,90,92,89,91]
        ]
    }]
};