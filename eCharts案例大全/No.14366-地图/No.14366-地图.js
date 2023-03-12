option = {
    // "backgroundColor": "#404a59",
    "animation": true,
    "animationDuration": 1000,
    "animationEasing": "cubicInOut",
    "animationDurationUpdate": 1000,
    "animationEasingUpdate": "cubicInOut",
    "title": [{
        "id": "statistic",
        "right": 120,
        "top": 40,
        "width": 100,
        "textStyle": {
            "color": "#fff",
            "fontSize": 16
        }
    }],
    "toolbox": {
        "iconStyle": {
            "normal": {
                "borderColor": "#fff"
            },
            "emphasis": {
                "borderColor": "#b1e4ff"
            }
        }
    },
    "geo": {
        "map": "china",
        "left": "10",
        "right": "10%%",
        "zoom": 1,
        "label": {
            "emphasis": {
                "show": false
            }
        },
        "roam": true,
        "itemStyle": {
            "normal": {
                "areaColor": "#323c48",
                "borderColor": "rgba(255,255,255,0.05)"
            },
            "emphasis": {
                "areaColor": "rgba(255,255,255,0.05)"
            }
        }
    },
    "tooltip": {
        "trigger": "item",
        "backgroundColor": "rgba(255,255,255,0.90)",
        "padding": [
            10
        ],
        textStyle: {
            color: '#43484D',
            fontSize: '12',

        },
        formatter: function(params) {
            console.log("params", params);
            var html = '<b>' + params.name + '</b><br>';
            html += '销售金额:' + '<em style="color:#fb7857;font-style: normal; "> ' + params.value[2] + '万元</em></br>'
            html += '销售金额占比:' + '<em style="color:#fb7857;font-style: normal; "> ' + params.value[3] + '%</em>'
            return html;

        }
    },
    "grid": {
        "right": 40,
        "top": 100,
        "bottom": 40,
        "width": "30%"
    },
    "xAxis": {
        "type": "value",
        "scale": true,
        "position": "top",
        "boundaryGap": false,
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "margin": 2,
            "textStyle": {
                "color": "#aaa"
            }
        }
    },
    "yAxis": {
        "type": "category",
        "name": "",
        "nameGap": 16,
        "axisLine": {
            "show": false,
            "lineStyle": {
                "color": "#ddd"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#ddd"
            }
        },
        "axisLabel": {
            "interval": 0,
            "textStyle": {
                "color": "#ddd"
            }
        },
        "data": []
    },
    "series": [{
        "name": "pm2.5",
        "type": "scatter",
        "coordinateSystem": "geo",
        "data": [{
            "name": "武汉",
            "value": [114.31, 30.52, 273]
        }, {
            "name": "大庆",
            "value": [125.03, 46.58, 279]
        }],
        "label": {
            "normal": {
                "formatter": "{b}",
                "position": "right",
                "show": false
            },
            "emphasis": {
                "show": true
            }
        },
        "itemStyle": {
            "normal": {
                "color": "#ddb926"
            }
        }
    }, {
        "name": "Top 5",
        "type": "effectScatter",
        "coordinateSystem": "geo",
        "data": [{
            "name": "大庆",
            "value": [125.03, 46.58, 279]
        }],
        "showEffectOn": "emphasis",
        "rippleEffect": {
            "brushType": "stroke"
        },
        "hoverAnimation": true,
        "label": {
            "normal": {
                "formatter": "{b}",
                "position": "right",
                "show": true
            }
        },
        "itemStyle": {
            "normal": {
                "color": "#f4e925",
                "shadowBlur": 10,
                "shadowColor": "#333"
            }
        },
        "zlevel": 1
    }]
}