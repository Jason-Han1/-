option = {
    "title": {
        "text": "垂直布局datazoom&自定义数据缩放维度",
        "subtext": "花自飘凌水自流",

    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        },
    },
    "legend": {
        "top": 30,
        "data": ['指标']
    },
    "toolbox": {
        "show": true,
        "feature": {
            "restore": {},
            "saveAsImage": {}
        }
    },
    "calculable": true,
    "xAxis": [{
        "type": "category",
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "data": ['一号库', "二号库", "三号库", "四号库"],
    }],
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": true
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        }
    }],
    "dataZoom": [{
            "show": true,
            "height": "60%",
            // 指定x/y轴数据维度 "yAxisIndex":
            "yAxisIndex": [
                0
            ],
            "start": 20,
            "end": 100,
            // 距离右侧距离
            "right": 40,
            "orient": "vertical",

        },
        {
            "type": "inside",
            "show": true,
            "height": 150,
            "yAxisIndex": [
                0
            ],
            "start": 20,
            "end": 100
        }
    ],
    "series": [{
            "name": "指标",
            "type": "bar",
            "barMaxWidth": 50,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "barBorderRadius": 0,
                    "color": "rgba(60,169,196,0.5)",

                }
            },
            "data": [1, 2, 3, 4],
        },

    ]
}