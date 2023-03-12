var xData = function() {
    var data = ["","天河区大队","","越秀区大队","","荔湾区大队","","海珠区大队","","黄埔区大队"]
    return data;
}();

var yData = function() {
    var data = ['优', '良', '中', '差']
    return data;

}

option = {
    backgroundColor: "RGBA(7, 28, 51, 1)",
    legend: {
        data: yData(),
        bottom: 20,
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
        "type": "value",
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
        }
       
    }],
    "yAxis": [{
        "type": "category",
        "inverse":true,
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
         "data": xData,
    }],
    "series": [{
            "name": yData()[0],
            "type": "bar",
            "stack": "1",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(1, 217,218, 0.9)",
                    opacity: 0.9,
                    barBorderRadius: [10, 0, 0, 10]
                }
            },
            "data": [
                250, 300, 250, 280, 300, 240, 250, 230, 180, 150
            ],
        },

        {
            "name": yData()[1],
            "type": "bar",
            "stack": "1",
            "itemStyle": {
                "normal": {
                    "color": "rgba(90, 153, 213, 0.9)",
                    opacity: 1
                }
            },
           "data": [
                100, 150, 200, 150, 20,  80, 40, 30, 70, 5
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
                    "color": "rgba(139,113,214, 0.9)",
                    opacity: 1,
                }
            },
            "data":  [
                20, 30, 0, 10, 10,  5, 0, 20, 10, 0
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
                    barBorderRadius: [0, 10, 10, 0]
                }
            },
           "data": [
                150, 10, 10,8, 30,  15, 20, 10, 10,80
            ],
        }
    ]
}