option = {
   backgroundColor: '#000',
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
    "radar": {
        "center": ["50%", "50%"],
        "radius": "70%",
        "startAngle": 90,
        "splitNumber": 4,
        "shape": "circle",
        "splitArea": {
            "show":false,
            "areaStyle": {
                "color": ["transparent"]
            }
        },
        "axisLabel": {
            "show": true,
            "fontSize": 12,
            "color": "#0ab3f0"
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "type": "dashed",
                "color": "#0ab3f0",
                "width":1.5//
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "#0ab3f0",
                "width":2//
            }
        },
        "indicator": [{
            "name": "N[0]",
            "max": 88
        }, {
            "name": "",
            "max": 88
        }, {
            "name": "W[270]",
            "max": 88
        }, {
            "name": "",
            "max": 88
        },{
            "name": "S[180]",
            "max": 88
        }, {
            "name": "",
            "max": 88
        }, {
            "name": "E[90]",
            "max": 88
        }, {
            "name": "",
            "max": 88
        }]
    },
    "series": [{
        "name": "卫星坐标",
        "type": "radar",
        "symbol": "circle",
        "symbolSize": 20,
        "itemStyle": {
            "normal": {
                "color":'rgba(255, 0, 0, 1)',
                "borderColor": "rgba(255, 0, 0, 0.4)",
                "borderWidth": 20
            }
        },
        "areaStyle": {
            "normal": {
                "color": "rgba(19, 173, 255, 0)"
            }
        },
        "lineStyle": {
            "normal": {
                "color": "rgba(19, 173, 255, 0)",
                "width": 2,
                "type": "dashed"
            }
        },
        "data": [
            [60, 10, 20, 50,60,90,60,60]
        ]
    }]
};