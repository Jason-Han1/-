var xData = function() {
    var data = ["2019-08","","2019-10","","2019-12","","2020-02","","2020-04","","2020-06","","2019-08"];
    return data;
}();

var yData= function(){
    var data=['往期', '本期', '同比']
    return data;

}

option = {
    backgroundColor: "RGBA(7, 28, 51, 1)",
    legend: {
        data: yData(),
        right: "15%",
        bottom: 20,
        itemWidth: 10,
        itemHeight: 10,
        type: "plain",
        icon: "rect",
        itemGap: 300,
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
            fontSize: 18
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
    },
    {
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
                    "color": "rgba(8, 247,251, 0.9)",
                    opacity: 0.9,
                    
                }
            },
            "data": [
                0,0,0,0,0,0,0,0,0,0
            ],
        },
        {
            "name": yData()[1],
            "type": "bar",
            "yAxisIndex":0,
            "stack": "1",
            "itemStyle": {
                "normal": {
                    "color": "rgba(248, 107, 84, 0.9)",
                    opacity: 1,
                     barBorderRadius:[10,10,10,10]
                }
            },
            "data": [
              0,0,0,0,0,1500,600,800,1000,600,700,900,400
            ]
        },
        {
            "name": yData()[2],
            "type": "line",
            yAxisIndex:1,
            symbolSize: 10,
            symbol: 'emptyCircle',
            smooth:true,
            "stack": "2",
            "itemStyle": {
                "normal": {
                    "color": "rgba(157, 127, 243, 0.9)",
                    opacity: 1
                }
            },
          "data": [
              0,0,0,0,0,1500,600,800,1000,600,700,900,400
            ]
        }

    ]
}