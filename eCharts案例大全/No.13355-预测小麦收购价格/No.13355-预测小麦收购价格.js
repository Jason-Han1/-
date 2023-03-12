option = 

{
    "title": {
        "text": "预测小麦收购价格",
        "textStyle": {
            "color": "#ffd152"
        },
        "top": 20
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "cross",
            "animation": false,
            "label": {
                "backgroundColor": "#ccc",
                "borderColor": "#aaa",
                "borderWidth": 1,
                "shadowBlur": 0,
                "shadowOffsetX": 0,
                "shadowOffsetY": 0,
                "textStyle": {
                    "color": "#222"
                }
            }
        }
    },
    "legend": {
        "type": "scroll",
        "textStyle": {
            "color": "#ffd152"
        },
        "selectedMode": true,
        "inactiveColor": "#574c4f",
        "data": ["预测值", "实际值"]
    },
    "grid": {
        "left": "3%",
        "right": "4%",
        "bottom": "3%",
        "containLabel": true
    },
    "xAxis": {
        "type": "category",
        "boundaryGap": false,
        "data": ["2018w1", "2018w2", "2018w3", "2018w4", "2018w5", "2018w6", "2018w7", "2018w8", "2018w9", "2018w10", "2018w11", "2018w12", "2018w13"],
        "textStyle": {
            "color": "#ffd152"
        },
        "axisLine": {
            "lineStyle": {
                "color": "#ffd152"
            }
        },
        "axisTick": {
            "lineStyle": {
                "color": "rgb(239, 218, 185)"
            }
        },
        "axisLabel": {
            "color": "rgb(239, 218, 185)"
        }
    },
    "yAxis": {
        "type": "value",
        "axisLine": {
            "lineStyle": {
                "color": "#ffd152"
            }
        },
        "axisTick": {
            "lineStyle": {
                "color": "rgb(239, 218, 185)"
            }
        },
        "axisLabel": {
            "color": "rgb(239, 218, 185)"
        },
        "splitLine": {
            "show": false,
            "lineStyle": {
                "color": "#3B4442"
            }
        },
        "axisPointer": {
            "show": false
        },
        "min": 2
    },
    "series": [{
        "name": "预测值",
        "data": [2.199102, 2.198467, 2.197626, 2.195592, 2.194778, 2.194261, 2.193769, 2.19325, 2.192939, 2.192739, 2.192622, 2.19259, 2.192647],
        "type": "line",
        "lineStyle": {
            "color": "#E2820A"
        },
        "smooth": true,
        "symbolSize": 6,
        "showSymbol": false
    }, {
        "name": "实际值",
        "data": [2.23, 2.23, 2.22, 2.22, 2.23, 2.23, 2.23, 2.22, 2.22, 2.2, 2.2, 2.2, 2.2],
        "type": "line",
        "lineStyle": {
            "color": "#E8DBCA"
        },
        "smooth": true
    }, {
        "name": "预测误差下限",
        "data": [2.161645, 2.151607, 2.145303, 2.137509, 2.131512, 2.126522, 2.121875, 2.117366, 2.113269, 2.109503, 2.105976, 2.102661, 2.099559],
        "type": "line",
        "smooth": true,
        "lineStyle": {
            "normal": {
                "opacity": 0
            }
        },
        "stack": "A",
        "symbol": "none"
    }, {
        "name": "预测误差上限",
        "data": [0.07491400000000015, 0.09371900000000011, 0.10464699999999993, 0.11616599999999977, 0.1265320000000001, 0.13547900000000013, 0.14378699999999967, 0.15176800000000013, 0.15933900000000012, 0.16647100000000004, 0.17329300000000014, 0.1798580000000003, 0.18617499999999998],
        "z": 2,
        "type": "line",
        "lineStyle": {
            "normal": {
                "opacity": 0
            }
        },
        "areaStyle": {
            "normal": {
                "color": "#ccc",
                "opacity": 0.5,
                "shadowColor": "#ccc",
                "shadowBlur": 15
            }
        },
        "stack": "A",
        "symbol": "none",
        "smooth": true
    }]
}