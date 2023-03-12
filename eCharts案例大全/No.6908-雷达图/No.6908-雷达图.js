option = {
    backgroundColor:'#1A2553',
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
        "splitNumber": 6,
        "shape": "circle",
        name: {
            textStyle: {
                color: '#78C5EC',
                fontSize:'20',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        "splitArea": {
            "areaStyle": {
                "color": ["#030C57"]
            }
        },
        "axisLabel": {
            "show": false,
            "fontSize": 18,
            "color": "#78C5EC",
            "fontStyle": "normal",
            "fontWeight": "normal"
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#6885D1"//
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "#6885D1"//
            }
        },
        "indicator": [{
            "name": "1月",
            "max": 100
        }, {
            "name": "12月",
            "max": 100
        }, {
            "name": "11月",
            "max": 100
        }, {
            "name": "10月",
            "max": 100
        }, {
            "name": "9月",
            "max": 100
        }, {
            "name": "8月",
            "max": 100
        }, {
            "name": "7月",
            "max": 100
        }, {
            "name": "6月",
            "max": 100
        }, {
            "name": "5月",
            "max": 100
        }, {
            "name": "4月",
            "max": 100
        }, {
            "name": "3月",
            "max": 100
        }, {
            "name": "2月",
            "max": 100
        }]
    },
    "series": [{
        "name": "1",
        "type": "radar",
        "symbol": "circle",
        "symbolSize": 10,
        "areaStyle": {
            "normal": {
                "color": "rgba(0,255,48, 0.4)"
            }
        },
        itemStyle:{
            color:'rgba(0,255,48, 1)',
        },
        "lineStyle": {
            "normal": {
                "color": "rgba(0,255,48, 1)",
                "width": 2
            }
        },
        "data": [
            [80, 50, 55, 80, 50, 80, 48, 43, 60, 78, 60, 40]
        ]
    }, {
        "name": "2",
        "type": "radar",
        "symbol": "circle",
        "symbolSize": 10,
        "itemStyle": {
            "normal": {
                color:'rgba(255,255,0, 1)',
            }
        },
        "areaStyle": {
            "normal": {
                "color": "rgba(255,255,0, 0.5)"
            }
        },
        "lineStyle": {
            "normal": {
                "color": "rgba(255,255,0, 1)",
                "width": 2,
            }
        },
        "data": [
            [60, 60, 65, 60, 70, 40, 80, 63, 68, 60, 77, 60]
        ]
    },{
        "name": "3",
        "type": "radar",
        "symbol": "circle",
        "symbolSize": 10,
        "itemStyle": {
            "normal": {
                color:'rgba(0,192,255, 1)',
            }
        },
        "areaStyle": {
            "normal": {
                "color": "rgba(0,192,255, 0.5)"
            }
        },
        "lineStyle": {
            "normal": {
                "color": "rgba(0,192,255, 1)",
                "width": 2,
            }
        },
        "data": [
            [50, 20, 35, 40, 30, 20, 40, 33, 28, 50, 27, 30]
        ]
    }]
};