option = {
    "title": {
        "text": "行业研究拐点概览",
        "padding": [18, 0, 0, 21],
        "textStyle": {
            "font-size": 22,
            "fontWeight": "normal"
        }
    },
    "color": ["#8054BA", "#08DAC2"],
    "grid": {
        "top": 80,
        "bottom": 20,
        "left": 20,
        "right": 20,
        "containLabel": true
    },
    "legend": {
        "data": [{
            "name": "收入总额（亿元）",
            "icon": "rect"
        }, {
            "name": "快递数量（亿件）",
            "icon": "rect"
        }],
        "itemWidth": 12,
        "itemHeight": 12,
        "textStyle": {
            "fontSize": 16
        },
        "top": 18,
        "right": 21
    },
    "tooltip": {
        "trigger": "item",
        "axisPointer": {
            "type": "cross",
            "crossStyle": {
                "color": "#999"
            }
        },
        formatter:function(params){
            console.log(params)
            return 'a'
        },
    },
    "xAxis": [{
        "type": "category",
        "axisLine": {
            "show": false
        },
        "axisTick": false,
        "splitLine": {
            "opacity": 0.4,
            "color": "#D8D8D8",
            "width": 2,
            "fontSize": 10
        },
        "axisLabel": {
            "color": "#000"
        },
        "data": ["2017-12", "2017-11", "2017-10", "2017-09", "2017-08", "2017-07", "2017-06", "2017-05", "2017-04", "2017-03", "2017-02", "2017-01"]
    }],
    "yAxis": [{
        "type": "value",
        "nameTextStyle": {
            "show": false
        },
        "axisTick": false,
        "axisLine": {
            "show": false
        },
        "splitLine": {
            "opacity": 0.4,
            "color": "#D8D8D8",
            "width": 2,
            "fontSize": 10
        },
        "inside": true,
        "max": 1000,
        "axisLabel": {
            "color": "#0138F4",
            "formatter": "{value}亿元"
        }
    }, {
        "type": "value",
        "nameTextStyle": {
            "show": false
        },
        "axisTick": false,
        "axisLine": {
            "show": false
        },
        "splitLine": {
            "opacity": 0.4,
            "color": "#D8D8D8",
            "width": 2,
            "fontSize": 10
        },
        "inside": true,
        "max": 100,
        "axisLabel": {
            "color": "#08DAC2",
            "fontSize": 10,
            "formatter": "{value}亿件"
        }
    }],
    "series": [{
        "name": "收入总额（亿元）",
        "type": "line",
        "data": [519.8, 565.5, 446.8, 448.1, 404, 391.7, 419.9, 407.4, 369.3, 382.6, 292.2, 309.9],
        "markPoint": {
            "data": [{
                "symbol": "circle",
                "symbolSize": 17,
                "coord": ["2017-11", 565.5]
            }, {
                "symbol": "circle",
                "symbolSize": 17,
                "coord": ["2017-07", 391.7]
            }, {
                "symbol": "circle",
                "symbolSize": 17,
                "coord": ["2017-04", 369.3]
            }]
        }
    }, {
        "name": "快递数量（亿件）",
        "type": "line",
        "yAxisIndex": 1,
        "data": [42.00377, 47.14903, 37.47715, 36.06056, 32.63986, 32.04989, 34.04517, 33.40618, 29.8237, 30.34937, 23.44301, 22.1],
        "markPoint": {
            "data": [{
                "symbol": "circle",
                "symbolSize": 17,
                "coord": ["2017-11", 47.14903]
            }, {
                "symbol": "circle",
                "symbolSize": 17,
                "coord": ["2017-07", 32.04989]
            }, {
                "symbol": "circle",
                "symbolSize": 17,
                "coord": ["2017-04", 29.8237]
            }, {
                "symbol": "circle",
                "symbolSize": 17,
                "coord": ["2017-01", 22.1]
            }]
        }
    }]
}
