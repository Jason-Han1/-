var xData = function() {
    var data = ["天河区大队", "越秀区大队", "荔湾区大队", "白云区大队", "海珠区大队", "黄埔区大队", "番禺区大队", "花都区大队", "南沙区大队", "从化区大队", "增城区大队"];
    return data;
}();

var yData = function() {
    var data = ['优(>90)', '良(80-90)', '中(60-80)', '差(<60)']
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
                    "color": "rgba(148, 120,221, 0.9)",
                    opacity: 0.9,
                    barBorderRadius: [0, 0, 10, 10]
                }
            },
            "data": [
                1100, 900, 1100, 400, 600, 500, 400, 700, 400, 600, 600
            ],
        },

        {
            "name": yData()[1],
            "type": "bar",
            "stack": "1",
            "itemStyle": {
                "normal": {
                    "color": "rgba(22, 247, 247, 0.9)",
                    opacity: 1
                }
            },
           "data": [
                0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0
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
                    "color": "rgba(239,244,96, 0.9)",
                    opacity: 1,
                }
            },
            "data": [
                800, 700, 250, 1000, 700,  440, 600, 200, 400, 220, 230
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
                    "color": "rgba(244, 98, 87, 0.9)",
                    opacity: 1,
                }
            },
           "data": [
                0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0
            ],
        }
    ]
}