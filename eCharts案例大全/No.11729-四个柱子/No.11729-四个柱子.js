
var seriesData1 = [
            {
                "value": 500,
                "itemStyle": {
                    "color": "#eee"
                }
            }, {
                "value": 500,
                "itemStyle": {
                    "color": "#eee"
                }
            },{
                "value": 500,
                "itemStyle": {
                    "color": "#eee"
                }
            },{
                "value": 500,
                "itemStyle": {
                    "color": "#eee"
                }
            }]

var seriesData = [
            {
                "value": 52,
                "itemStyle": {
                    "color": "#4478FC"
                }
            }, {
                "value": 50,
                "itemStyle": {
                    "color": "#01FEA8"
                }
            },{
                "value": 45,
                "itemStyle": {
                    "color": "#FF3753"
                }
            },{
                "value": 332,
                "itemStyle": {
                    "color": "#FFD928"
                }
            }]

option = {
    "backgroundColor": "rgb(20, 58, 110)",
    "color": ["#3cefff"],
    "tooltip": {},
    "grid": {
        "containLabel": true
    },
    "xAxis": [{
        "type": "category",
        "data": ["本年累计", "基准年同期", "去年同期", "年度目标"],
        "axisTick": {
            "alignWithLabel": true
        },
        "nameTextStyle": {
            "color": "#82b0ec"
        },
        "axisLine": {
            show : false,
            "lineStyle": {
                "color": "#82b0ec",
                
            }
        },
        "axisLabel": {
            "textStyle": {
                "color": "#82b0ec"
            }
        }
    }],
    "yAxis": [{
        "type": "value",
        "axisLabel": {
            show : false,
            "textStyle": {
                "color": "#82b0ec"
            },
            "formatter": "{value}"
        },
        "splitLine": {
            show : false,
            "lineStyle": {
                "color": "#0c2c5a"
            }
        },
        "axisLine": {
            "show": false
        }
    }],
    "series": [{
        "name": "",
        "type": "pictorialBar",
        "symbolSize": [60, 10],
        "symbolOffset": [0, -5],
        "symbolPosition": "end",
        "z": 12,
        "label": {
            "normal": {
                "show": true,
                "position": "top",
                "formatter": "{c}"
            }
        },
        "data": seriesData
    }, {
        "name": "",
        "type": "pictorialBar",
        "symbolSize": [60, 10],
        "symbolOffset": [0, 5],
        "z": 12,
        "data": seriesData
    }, {
        "type": "bar",
        "itemStyle": {
            "normal": {
                "opacity": 0.7
            }
        },
        "barWidth": "60",
        "data": seriesData
    },{
        "name": "",
        "type": "pictorialBar",
        "symbolSize": [60, 10],
        "symbolOffset": [0, -5],
        "symbolPosition": "end",
        "z": 12,
        silent: true,
        "data": seriesData1
    }, {
        "type": "bar",
        "itemStyle": {
            "normal": {
                "opacity": 0.7
            }
        },
        barGap: '-100%',
        zlevel: -100,
        silent: true,
        "barWidth": "60",
        "data": seriesData1
    }]
}