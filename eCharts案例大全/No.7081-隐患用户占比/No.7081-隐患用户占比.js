var xData = function() {
    var data = [];
    for (var i = 1; i < 13; i++) {
        data.push(i + "月份");
    }
    return data;
}();

option = {
    backgroundColor: "#FFFFFF",
    "title": {
        text: '隐患用户占比',
        x: 'center',
        textStyle: {
            color: '#000',
            fontSize: '12'
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
        "top": 40,
        "bottom": 30,
        textStyle: {
            color: "#fff"
        }
    },
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
       
        "data": xData,
    }],
    "yAxis": [{
        nameTextStyle: {
             color: "#000"
         },
         name: "单位：万",
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "splitArea": {
            "show": false
        },

    }],
    "series": [{
            "name": "画像用户数",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 20,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(153, 153, 51, 1)",
                    "label": {
                        "show": true,
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
                50,
                80,
                20,
                30,
                60,
                70,
                15,
                32,
                52,
                33,
                24,
                40
            ],
        },

        {
            "name": "隐患用户数",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(0, 204, 255, 1)",
                    barBorderRadius : [ 50, 50, 0, 0],
                    "label": {
                        "show": true,
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
                227,
                277,
                207,
                220,
                200,
                282,
                204,
                239,
                200,
                251,
                281,
                220
            ]
        }, {
            "name": "隐患用户占比",
            "type": "line",
            symbolSize:10,
            symbol:'none',
            "itemStyle": {
                "normal": {
                    "color": "#979797",
                    barBorderRadius : [ 30, 30, 0, 0],
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                50,
                20,
                30,
                20,
                10,
                20,
                30,
                60,
                70,
                80,
                90,
                100
            ]
        },
    ]
}