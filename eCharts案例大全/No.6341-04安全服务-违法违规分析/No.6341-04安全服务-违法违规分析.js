var xData = function() {
    var data = ["石化特勤二大队", "金州大队", "开发区大队", "普兰店大队", "石化特警一大队", "甘井子大队", "旅顺大队", "庄河大队", "特勤大队", "瓦房店大队","战勤保障大队","长兴岛大队","金石滩大队","沙河口大队","高新园大队"];
    return data;
}();

option = {
    backgroundColor: "RGBA(7, 28, 51, 1)",
    legend: {
        data: ['灭火类', '举高类', '专勤类', '后援类', '其他类'],
        right: "15%",
        top: 20,
        itemWidth: 30,
        itemHeight: 10,
        type: "plain",
        icon:"rect",
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
            "show":false
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
            rotate:30
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
        }
    ],
    "series": [{
            "name": "灭火类",
            "type": "bar",
            "stack": "1",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(17, 161, 163, 0.9)",
                    opacity: 0.9,
                }
            },
            "data": [
                16,
                11,
                8,
                14,
                17,
                16,
                11,
                8,
                14,
                17,
                16,
                11,
                8,
                14,
                17
            ],
        },

        {
            "name": "举高类",
            "type": "bar",
            "stack": "1",
            "itemStyle": {
                "normal": {
                    "color": "rgba(67, 108, 147, 0.9)",
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
                9,
                7,
                3,
                2,
                6
            ]
        },
        {
            "name": "专勤类",
            "type": "bar",
            "stack": "1",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(106,82,157, 0.9)",
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
                13,
                19,
                6,
                12,
                15
            ],
        },
        {
            "name": "后援类",
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
                13,
                19,
                6,
                12,
                15
            ],
        },
        {
            "name": "其他类",
            "type": "bar",
            "stack": "1",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": 'rgba(176, 179, 99, 0.9)'
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
                13,
                19,
                6,
                12,
                15
            ],
        }
        
    ]
}