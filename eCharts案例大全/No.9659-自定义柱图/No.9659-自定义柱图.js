option = {
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        }
    },
    "backgroundColor": '#18163B',
    "xAxis": [{
        "type": "category",
        "axisLine": {
            "lineStyle": {
                "color": "rgb(63,167,220)"
            }
        },
        "axisLabel": {
            "margin": 10,
            "color": "#2EFEF7",
            "textStyle": {
                "fontSize": 14,
                "fontWeight":"bold",
            },
        },
        "axisTick":{
            "show": false,
        },
        "splitLine":{
            "show": true,
            "lineStyle":{
                "color": "#00E1F5",
                "type": "dashed",
            }
        }
    }],
    "yAxis": [{
        "axisLabel": {
            "formatter": "{value}",
            "color": "#00E1F5",
            "margin": 20,
            "textStyle": {
                "fontSize": 14,
                "fontWeight":"bold",
            },
        },
        "axisLine": {
            "show": true,
            "lineStyle":{
                "color": "#00E1F5",
                "type": "dashed",
            }
        },
        "axisTick":{
            "show": false,
        },
        "splitLine": {
            "lineStyle": {
                "color": "rgb(63,167,220)"
            }
        },
    }],
    "series": [{
        "type": "bar",
        "barWidth": "40px",
        "data": [998, 1301, 865, 432],
        "itemStyle": {
            "normal": {
                "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    "offset": 0,
                    "color": "rgb(251,189,79)" // 0% 处的颜色
                }, {
                    "offset": 0.25,
                    "color": "rgb(240,143,77)" // 20% 处的颜色
                },{
                    "offset": 0.5,
                    "color": "rgb(220,83,77)"
                },{
                    "offset": 1,
                    "color": "rgb(166,41,182)"
                }], false),
                "barBorderRadius": [5, 5, 0, 0],
                 "label": {
                   "show":true,
                    "lineHeight": 35,
                    "width": 70,
                    "height": 35,
                    "borderRadius": 3,
                    "backgroundColor": "rgb(236,225,255)",
                    "position": "top",
                    "distance": 15,
                    "formatter": [
                        ' {a|{c}}\n',
                        '{b|}'
                    ].join('\n'),
                    "rich": {
                        "a": {
                            "color": "rgb(130,19,147)",
                            "fontWeight": "bold",
                            "fontFamily": "Helvetica",
                            "fontSize": 20,
                            "align": "center",
                        },
                        "b": {
                            "width": 0,
                            "border": "20px solid red",
                            "borderColor": "#000",
                        },
                }
        }
            }
        },
       
    }]
};