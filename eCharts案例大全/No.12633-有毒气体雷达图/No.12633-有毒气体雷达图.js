option = {
    backgroundColor: '#030d22',
    "normal": {
        "top": 200,
        "left": 300,
        "width": 500,
        "height": 400,
        "zIndex": 6,
        "backgroundColor": ""
    },
    "color": ["rgba(245, 166, 35, 1)", "rgba(19, 173, 255, 1)"],
    "tooltip": {
        "show": true,
        "trigger": "item"
    },
    "legend": {
        "show": true,
        "icon": "circle",
        "left": "43%",
        "top": "90%",
        "orient": "horizontal",
        "textStyle": {
            "fontSize": 16,
            "color": "#fff"
        },
        "data": ["正常指标", "实际指标"]
    },
    "radar": {
        "center": ["50%", "45%"],
        "radius": "70%",
        "startAngle": 90,
        "splitNumber": 4,
        "shape": "polygon",
        name: {
                textStyle: {
                    color: '#fff',
                    fontSize: 18
                }
            },
         splitArea: {
                show: true,
                areaStyle: {
                    color: '#0d6dba',
                    opacity: 0.1
                }
            },
        "axisLabel": {
            "show": false,
            "fontSize": 18,
            "color": "#fff",
            "fontWeight": "normal"
        },
         axisLine: {
                show: true,
                lineStyle: {
                    color: '#4f8bbe',
                    opacity: 1
                }
            },
       splitLine: {

                lineStyle: {
                    color: '#4f8bbe',
                    opacity: 0.5
                }
            },
        "indicator": [{
            "name": "CO",
            "max": 88
        }, {
            "name": "CO₂",
            "max": 88
        }, {
            "name": "NO",
            "max": 88
        }, {
            "name": "H₂S",
            "max": 88
        }, {
            "name": "O₄",
            "max": 88
        }, {
            "name": "SF6",
            "max": 88
        }, {
            "name": "CH",
            "max": 88
        }]
    },
    "series": [{
        "name": "正常指标",
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
            [80, 50, 55, 80, 50, 80, 48]
        ]
    }, {
        "name": "实际指标",
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
            [60, 60, 65, 60, 70, 40, 80]
        ]
    }]
};