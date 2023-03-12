const exampleData =  [{
            "name": "黑龙江",
            "value": 2184
        },
        {
            "name": "青海",
            "value": 2162
        },
        {
            "name": "陕西",
            "value": 18021
        },
        {
            "name": "重庆",
            "value": 11210
        },
        {
            "name": "辽宁",
            "value": 1234
        },
        {
            "name": "贵州",
            "value": 7112
        },
        {
            "name": "西藏",
            "value": 1203
        },
        {
            "name": "福建",
            "value": 4455
        },
        {
            "name": "甘肃",
            "value": 6897
        },
        {
            "name": "湖南",
            "value": 22353
        },
        {
            "name": "湖北",
            "value": 25656
        },
        {
            "name": "海南",
            "value": 22457
        },
        {
            "name": "浙江",
            "value": 22356
        },
        {
            "name": "河南",
            "value": 8903
        },
        {
            "name": "河北",
            "value": 3458
        },
        {
            "name": "江西",
            "value": 3347
        },
        {
            "name": "江苏",
            "value": 4580
        },
        {
            "name": "新疆",
            "value": 5790
        },
        {
            "name": "广西",
            "value": 4689
        },
        {
            "name": "广东",
            "value": 2337
        },
        {
            "name": "山西",
            "value": 5689
        },
        {
            "name": "山东",
            "value": 5678
        },
        {
            "name": "安徽",
            "value": 9806
        },
        {
            "name": "宁夏",
            "value": 4578
        },
        {
            "name": "天津",
            "value": 8965
        },
        {
            "name": "四川",
            "value": 4333
        },
        {
            "name": "吉林",
            "value": 5689
        },
        {
            "name": "北京",
            "value": 4324
        },
        {
            "name": "内蒙古",
            "value": 4578
        },
        {
            "name": "云南",
            "value": 7898
        },
        {
            "name": "上海",
            "value": 5601
        }]
option = {
    "title": {
        "text": "全国降水量分布",
        "left": "center",
        "textStyle": {
            "fontSize": 20,
            "color": "rgb(85,85,85)"
        }
    },
    "shading": "lambert",
    "visualMap": {
        "min": 1203,
        "max": 34324,
        "calculable": true,
        "inRange": {
            "color": ["#99e699", "#61e9e9", "rgb(255,265,0)", "#eecf27", "#ee356f"]
        },
        "show": true
    },
    "tooltip": {
        "enterable": true,
        "extraCssText": "max-height:300px; overflow-y:auto;",
        "formatter": function formatter(params) {
            if (params.name !== '') {
                var tooltip = "".concat(params.seriesName, "</br>").concat(params.name, " : ").concat(params.value || 0);
                return tooltip;
            }
        }
    },
    "series": [{
        "name": "全国降水量",
        "type": "map3D",
        "map": "china",
        "itemStyle": {
            "normal": {
                "label": {
                    "show": false,
                    "textStyle": {
                        "color": "#1EBEC2",
                        "fontSize": 14
                    }
                },
                "color": "rgb(7,30,76)",
                "borderColor": "rgba(147, 235, 248, 1)",
                "borderWidth": 1
            },
            "emphasis": {
                "label": {
                    "show": false,
                    "textStyle": {
                        "fontSize": 14,
                        "color": "rgb(139,69,19)"
                    }
                },
                "color": "rgb(30,144,255)",
                "borderColor": "rgb(218,165,32)",
                "borderWidth": 1
            }
        },
        "viewControl": {
            "autoRotate": false,
            "autoRotateSpeed": 5,
            "autoRotateAfterStill": 10,
            "minBeta": -360,
            "maxBeta": 360,
            "distance": 110
        },
        "data": exampleData,
    }],
    "color": ["rgba(44, 158, 212, 1)", "rgba(0, 79, 116, 1)", "rgba(60, 189, 161, 1)", "rgba(99, 181, 78, 1)", "rgba(23, 171, 181, 1)", "rgba(30, 129, 196, 1)", "rgba(71, 198, 205, 1)", "rgba(143, 202, 110, 1)", "rgba(24, 172, 136, 1)", "rgba(204, 204, 51, 1)"]
}