option = {
    "color": [
        "#647DFE",
        "#FFE4C0",
        "#3CAFE9",
        "#EF6775 ",
        "#82D9C1",
        "#5366FE"
    ],
    "legend": {
        "show": true,
        "icon": "circle",
        "x": "center",
        "bottom": 14,
        "itemWidth": 10,
        "itemHeight": 10,
        "orient": "horizontal",
        "textStyle": {
            "rich": {
                "a": {
                    "width": 100
                }
            }
        }
    },
    "tooltip": {
        "show": false,
        "position": [
            "70%",
            "10%"
        ]
    },
    "grid": [{
        "x": 50,
        "y": 65,
        "x2": 50,
        "y2": 80
    }],
    "series": [{
        "type": "pie",
        "radius": [
            "30%",
            "45%"
        ],
        "center": [
            "50%",
            "45%"
        ],
        "label": {
            "normal": {
                "show": true
            }
        },
        "labelLine": {
            "length": 10
        },
        "itemStyle": {
            "normal": {
                "borderWidth": 2,
                "borderColor": "#fff"
            }
        },
        "data": [{
                "value": 20,
                "name": "办理用时3个月以内",
                "percent": 12.5
            },
            {
                "value": 30,
                "name": "办理用时3-6个月",
                "percent": 18.8
            },
            {
                "value": 25,
                "name": "办理用时6-12个月",
                "percent": 15.7
            },
            {
                "value": 45,
                "name": "办理用时一年以上",
                "percent": 28
            },
            {
                "value": 40,
                "name": "未办结数",
                "percent": 25
            }
        ]
    }]
};