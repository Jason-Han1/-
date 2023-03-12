var xData = function() {
    var data = ["天河区大队", "越秀区大队", "荔湾区大队", "白云区大队", "海珠区大队", "黄埔区大队", "番禺区大队", "花都区大队", "南沙区大队", "从化区大队", "增城区大队"];
    return data;
}();

var yData = function() {
    var data = ['泡沫灭火剂', '水系灭火剂', '干粉灭火剂', '气体灭火剂','其他']
    return data;

}

option = {
    backgroundColor: "RGBA(7, 28, 51, 1)",
    legend: {
        data: yData(),
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
            "name": yData()[0],
            "type": "bar",
            "stack": "1",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(1,245,237, 0.9)",
                    opacity: 0.9,
                    barBorderRadius: [0, 0, 10, 10]
                }
            },
            "data": [
                550, 300, 280, 150, 100, 90, 70, 69, 65, 63, 50
            ],
        },

        {
            "name": yData()[1],
            "type": "bar",
            "stack": "1",
            "itemStyle": {
                "normal": {
                    "color": "rgba(117, 172, 236, 0.9)",
                    opacity: 1
                }
            },
           "data": [
                0, 20, 0, 0, 10,  0, 0, 0, 0, 0, 0
            ],
        },
        {
            "name": yData()[2],
            "type": "bar",
            "stack": "1",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(160,132,246, 0.9)",
                    opacity: 1,
                }
            },
            "data": [
                0, 30, 0, 0, 0,  0, 0, 0, 0, 0, 0
            ],
        },
        {
            "name": yData()[3],
            "type": "bar",
            "stack": "1",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(253, 107, 86, 0.9)",
                    opacity: 1,
                }
            },
           "data": [
                0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0
            ],
        },
         {
            "name": yData()[4],
            "type": "bar",
            "stack": "1",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(233, 243, 99, 0.9)",
                    opacity: 1,
                }
            },
           "data": [
                0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0
            ],
        }
    ]
}