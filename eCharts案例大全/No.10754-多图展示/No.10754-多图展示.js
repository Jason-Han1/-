var option = {
    "backgroundColor": "#0f375f",
    "title": [{
        "text": "罗平县",
        "top": "42%",
        "left": "21.5%",
        "textAlign": "center",
        "textStyle": {
            "color": "#fff",
            "fontSize": "14"
        }
    }, {
        "show": false,
        "textAlign": "left",
        "text": 35664,
        "textStyle": {
            "fontSize": 16,
            "color": "yellow",
            "fontWeight": "normal"
        },
        "left": "82.49999999999999%",
        "top": "17.166666666666664%"
    }],
    "legend": {
        "show": true,
        "itemGap": 12,
        "textStyle": {
            "color": "#ffffff"
        },
        "data": ["在播比例", "停播比例", "检修比例"]
    },
    "grid": [{
        "x": "50%",
        "y": "7%",
        "width": "45%",
        "height": "40%"
    }],
    "tooltip": {
        "formatter": "{b} ({c})"
    },
    "xAxis": [{
        "gridIndex": 0,
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "show": false
        },
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": false
        }
    }],
    "yAxis": [{
        "gridIndex": 0,
        "interval": 0,
        "data": ["XXX村10", "XXX村9", "XXX村8", "XXX村7", "XXX村6", "XXX村5", "XXX村4", "XXX村3", "XXX村2", "XXX村1"],
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "show": true
        },
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#6173a3"
            }
        }
    }],
    "series": [{
        "name": "各渠道投诉占比",
        "type": "pie",
        "radius": "30%",
        "center": ["22%", "25%"],
        "color": ["#86c9f4", "#4da8ec", "#3a91d2"],
        "data": [{
            "value": 45,
            "name": "在播比例"
        }, {
            "value": 30,
            "name": "停播比例"
        }, {
            "value": 10,
            "name": "检修比例"
        }],
        "labelLine": {
            "normal": {
                "show": false
            }
        },
        "itemStyle": {
            "normal": {
                "label": {
                    "show": false
                },
                "labelLine": {
                    "show": false
                }
            }
        }
    }, {
        "name": "村发射",
        "type": "bar",
        "xAxisIndex": 0,
        "yAxisIndex": 0,
        "barWidth": "45%",
        "itemStyle": {
            "normal": {
                "color": "#86c9f4"
            }
        },
        "label": {
            "normal": {
                "show": true,
                "position": "right",
                "textStyle": {
                    "color": "#9EA7C4"
                }
            }
        },
        "data": [133, 176, 196, 214, 232, 259, 262, 324, 370, 389]
    }]
};
console.log(JSON.stringify(option))