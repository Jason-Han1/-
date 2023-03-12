var xData = function() {
    var data = [];
    for (var i = 1; i < 13; i++) {
        data.push(i + "月份");
    }
    return data;
}();

option = {
    backgroundColor: "#020d3e",

    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    color: ['#1956c4', '#a132b7', '#32d2b2'],
    "grid": {
        "borderWidth": 0,
        "top": 110,
        "bottom": 95,
        textStyle: {
            color: "#fff"
        }
    },
    "legend": {
        textStyle: {
            color: '#90979c',
        },
        icon: 'roundRect',
        "data": ['拨打次数', '拨打时长']
    },


    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
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

        },
        "data": xData,
    }],
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": true,
            lineStyle: {
                color: 'rgba(131,101,101,0.2)',
                type: 'dashed',
            }
        },
        "axisLine": {
            show: false,
            lineStyle: {
                color: 'rgba(131,101,101,0.2)',
                type: 'dashed',
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            color: '#636a83'

        },
        "splitArea": {
            "show": false
        },

    }],
    // "dataZoom": [{
    //     "show": true,
    //     "height": 30,
    //     "xAxisIndex": [
    //         0
    //     ],
    //     bottom: 30,
    //     "start": 10,
    //     "end": 80,
    //     handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
    //     handleSize: '110%',
    //     handleStyle:{
    //         color:"#d3dee5",

    //     },
    //       textStyle:{
    //         color:"#fff"},
    //       borderColor:"#90979c"


    // }, {
    //     "type": "inside",
    //     "show": true,
    //     "height": 15,
    //     "start": 1,
    //     "end": 35
    // }],
    "series": [{
            "name": "拨打次数",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": false,
                        "textStyle": {
                            "color": "#fff"
                        },
                        "position": "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                1036,
                3693,
                2962,
                3810,
                2519,
                1915,
                1748,
                4675,
                6209,
                4323,
                2865,
                4298
            ],
        },
        {
            "name": "拨打时长",
            "type": "line",
            symbolSize: 1,
            symbol: 'circle',
            "itemStyle": {
                "normal": {
                    "barBorderRadius": 0,
                    "label": {
                        "show": false,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                1036,
                3693,
                2962,
                3810,
                2519,
                1915,
                1748,
                4675,
                6209,
                4323,
                2865,
                4298
            ]
        },
    ]
}