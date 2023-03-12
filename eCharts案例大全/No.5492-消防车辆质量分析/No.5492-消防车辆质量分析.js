var xData = function() {
    var data = ["天河区大队", "越秀区大队", "荔湾区大队", "白云区大队", "海珠区大队", "黄埔区大队", "番禺区大队", "花都区大队", "南沙区大队", "从化区大队", "增城区大队"];
    return data;
}();

option = {
    backgroundColor: "RGBA(7, 28, 51, 1)",
    legend: {
        data: ['优(>90)', '良(80-90)', '中(60-80)', '差(<60)', '其他类'],
        right: "15%",
        top: 20,
        itemWidth: 30,
        itemHeight: 10,
        type: "plain",
        icon: "rect",
        textStyle: {
            color: "RGBA(154, 209, 253, 1)"
        }
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    "grid": {
        "borderWidth": 0,
        "top": 110,
        "bottom": 95,
        textStyle: {
            color: "#fff"
        }
    },
    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            "show": false
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            color: 'rgba(255,255,255,0.7)',
            fontSize: 18,
            rotate: 30
        },
        "data": xData,
    }],
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": false,
        },
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            color: 'rgba(255,255,255,0.5)',
            fontSize: 20

        },
        "splitArea": {
            "show": false
        },
    }],
    "series": [{
            "name": "优(>90)",
            "type": "bar",
            "stack": "1",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(138, 107, 212, 0.9)",
                    opacity: 0.9,
                    barBorderRadius:[0,0,10,10]
                },
                
            },
            "data": [
                60,
                50,
                50,
                30,
                40,
                43,
                43,
                33,
                23,
                32,
                25
            ],
        },

        {
            "name": "良(80-90)",
            "type": "bar",
            "stack": "1",
            "itemStyle": {
                "normal": {
                    "color": "rgba(1, 244, 246, 0.9)",
                    opacity: 1
                }
            },
            "data": [
                9,
                7,
                3,
                2,
                6,
                9,
                7,
                3,
                2,
                6,
                9
               
            ]
        },
        {
            "name": "中(60-80)",
            "type": "bar",
            "stack": "1",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(243,239,134, 0.9)",
                    opacity: 1,
                }
            },
            "data": [
                13,
                19,
                6,
                12,
                15,
                13,
                19,
                6,
                12,
                15,
                13
                
            ],
        },
        {
            "name": "差(<60)",
            "type": "bar",
            "stack": "1",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(182, 88, 79, 1)",
                    opacity: 1,
                }
            },
            "data": [
                0,
                10,
                0,
                0,
                0,
                1,
                1,
                6,
                1,
                1,
                1
                
            ],
        }
    ]
}