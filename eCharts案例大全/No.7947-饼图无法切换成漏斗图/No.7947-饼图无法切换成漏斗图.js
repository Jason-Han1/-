option = {
    "backgroundColor": "#fff",
    "title": {
        "text": "差错饼图",
        "subtext": "",
        "x": "center"
    },
    "tooltip": {
        "trigger": "item",
        "formatter": "{a} <br/>{b} : {c} ({d}%)"
    },
    "legend": {
        "orient": "vertical",
        "x": "left",
        "data": [
            "值机员未提示旅客是否携带危险品、锂电池",
            "违反手册中“必须”和“禁止”的条目",
            "装载作业决策错误",
            "配载计划决策",
            "对最低设备清单的错误理解和应用",
            "未按规定进行交叉检查"
        ]
    },
    "toolbox": {
        "show": true,
        "feature": {
            "mark": {
                "show": true
            },
            "dataView": {
                "show": true,
                "readOnly": false
            },
            "magicType": {
                "show": true,
                "type": [
                    "pie",
                    "funnel"
                ],
                "option": {
                    "funnel": {
                        "x": "25%",
                        "width": "50%",
                        "funnelAlign": "left",
                        "max": 1548
                    }
                }
            },
            "restore": {
                "show": true
            },
            "saveAsImage": {
                "show": true
            }
        }
    },
    "calculable": true,
    "series": [{
        "name": "访问来源",
        "type": "pie",
        "radius": "55%",
        "center": [
            "65%",
            "50%"
        ],
        "data": [{
                "value": 63000000,
                "name": "值机员未提示旅客是否携带危险品、锂电池"
            },
            {
                "value": 1050000000,
                "name": "违反手册中“必须”和“禁止”的条目"
            },
            {
                "value": 42000000,
                "name": "装载作业决策错误"
            },
            {
                "value": 105000000,
                "name": "配载计划决策"
            },
            {
                "value": 60000000,
                "name": "对最低设备清单的错误理解和应用"
            },
            {
                "value": 700000000,
                "name": "未按规定进行交叉检查"
            }
        ]
    }]
};