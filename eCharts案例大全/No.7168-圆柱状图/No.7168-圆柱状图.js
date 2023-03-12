let dataValue = [10,23,10,11,54];
let dataName = ['柱状1','柱状2','柱状3','柱状4','柱状5'];

option = {
            "backgroundColor": '#012366',
            "color": ["#3cefff"],
            "tooltip": {},
            "grid": {
                "backgroundColor": '#ffffff',
                "borderWidth": 0,
                "top": '15%',
                "left": '12%',
                "bottom": '10%',
                "height": '70%',
                "width": '82%'
            },
            "xAxis": [{
                "type": "category",
                "data": dataName,
                "axisTick": {
                    "alignWithLabel": true
                },
                "nameTextStyle": {
                    "color": "#82b0ec"
                },
                "axisLine": {
                    "lineStyle": {
                        "color": "#82b0ec"
                    }
                },
                "axisLabel": {
                    "rotate":30,
                    "textStyle": {
                        "color": "#00ffff"
                    }
                }
            }],
            "yAxis": [{
                "type": "value",
                "axisLabel": {
                    "textStyle": {
                        "color": "#00ffff"
                    },
                    "formatter": "{value}%"
                },
                "splitLine": {
                    "show":false,
                    "lineStyle": {
                        "color": "#00ffff"
                    }
                },
                "axisLine": {
                    "show": true,
                    "lineStyle": {
                        "color": "#00ffff"
                    }
                }
            }],
            "series": [{
                "name": "",
                "type": "pictorialBar",
                "symbolSize": [20, 10],
                "symbolOffset": [0, -5],
                "symbolPosition": "end",
                "z": 12,
                "label": {
                    "normal": {
                        "show": true,
                        "position": "top",
                        "formatter": "{c}%"
                    }
                },
                "data": dataValue
            }, {
                "name": "",
                "type": "pictorialBar",
                "symbolSize": [20, 10],
                "symbolOffset": [0, 5],
                "z": 12,
                "data": dataValue
            }, {
                "type": "bar",
                "itemStyle": {
                    "normal": {
                        "opacity": 0.7
                    }
                },
                "barWidth": "20",
                "data": dataValue,
                "markLine": {
                    "silent": true,
                    "symbol": "none",
                    "label": {
                        "position": "middle",
                        "formatter": "{b}"
                    }
                }
            }]
        }