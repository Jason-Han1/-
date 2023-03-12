var xData = function() {
    var data = ["天河区大队", "越秀区大队", "荔湾区大队", "白云区大队", "海珠区大队", "黄埔区大队", "番禺区大队", "花都区大队", "南沙区大队", "从化区大队", "增城区大队"];
    return data;
}();

var yData= function(){
    var data=['消防人员防护装备', '灭火器材装备', '抢险救援器材', '特种消防装备', '消防通讯指挥装备','防火检查与火灾调查装备','其他类消防装备器材']
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
            "name":yData()[0],
            "type": "bar",
            "stack": "1",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(0, 200,200, 0.9)",
                    opacity: 0.9,
                     barBorderRadius:[0,0,10,10]
                }
            },
            "data": [
                9000,
                7500,
                6500,
                5900,
                6000,
                6300,
                5800,
                5600,
                5200,
                5500,
                4000
              
            ],
        },

        {
            "name": yData()[1],
            "type": "bar",
            "stack": "1",
            "itemStyle": {
                "normal": {
                    "color": "rgba(79, 140, 197, 0.9)",
                    opacity: 1
                }
            },
            "data": [
                6000,
                3000,
                2500,
                2800,
                2200,
                2000,
                1500,
                1800,
                2100,
                1600,
                2000
               
            ]
        },
        {
            "name": yData()[2],
            "type": "bar",
            "stack": "1",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(134,113,214, 0.9)",
                    opacity: 1,
                }
            },
            "data": [
                2000,
                2500,
                1000,
                1300,
                800,
                400,
                900,
                400,
                200,
                400,
                500
              
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
                    "color": "rgba(235, 106, 69, 1)",
                    opacity: 1,
                }
            },
            "data": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
              
            ],
        },
        {
            "name":yData()[4],
            "type": "bar",
            "stack": "1",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": 'rgba(242, 248, 98, 0.9)'
                }
            },
            "data": [
                200,
                2000,
                300,
                200,
                400,
                13,
                19,
                30,
                50,
                200,
                13
                
            ],
        },
        {
            "name": yData()[5],
            "type": "bar",
            "stack": "1",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": 'rgba(243, 237, 135, 0.9)'
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
            "name": yData()[6],
            "type": "bar",
            "stack": "1",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": 'rgba(183, 241, 73, 0.9)'
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
        }

    ]
}