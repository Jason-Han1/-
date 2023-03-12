var xData = function() {
    var data = [];
    for (var i = 1; i < 31; i++) {
        data.push(+i + "日");
    }
    return data;
}();

option = {
    backgroundColor: "#344b58",
    "title": {
        "text": "最近30日车辆出行记录时段统计",
        "subtext": '',
        x: "4%",

        textStyle: {
            color: '#fff',
            fontSize: '22'
        },
        subtextStyle: {
            color: '#90979c',
            fontSize: '16',

        },
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
        "top": 130,
        "bottom": 95,
        textStyle: {
            color: "#fff"
        }
    },
    "legend": {
        x: '4%',
        top: '11%',
        textStyle: {
            color: '#90979c',
        },
        "data": ['0-6点', '6-9点', '9-12点', '12-14点', '14-17点', '17-20点', '20-24点', '平均']
    },


    "calculable": true,
    "yAxis": [{
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
    "xAxis": [{
        "type": "value",
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

    }],
    "dataZoom": [{
        "show": true,
        left: '1%',
        "yAxisIndex": [
            0
        ],
        
        "start": 40,
        "end": 70,
        handleSize: '110%',
        handleStyle: {
            color: "#d3dee5",

        },
        textStyle: {
            color: "#fff"
        },
        borderColor: "#90979c",
        rangeMode: ["17日", "100"],
        zoomLock: true


    }],
    "series": [{
            "name": "0-6点",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(255,185,15,1)",
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#fff"
                        },
                        "position": "insideTop",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [],
        },
        {
            "name": "6-9点",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(255,144,128,1)",
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#fff"
                        },
                        "position": "insideRight",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                53,
                31,
                323,
                353,
                372,
                364,
                347,
                23,
                43,
                405,
                381,
                325,
                417,
                352,
                39,
                53,
                348,
                403,
                364,
                329,
                345,
                28,
                35,
                342,
                403,
                367,
                352,
                382,
                13,
                27
            ],
        },
        {
            "name": "9-12点",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,191,183,1)",
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#fff"
                        },
                        "position": "insideRight",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                280,
                314,
                70,
                65,
                72,
                83,
                69,
                196,
                203,
                82,
                76,
                91,
                64,
                89,
                193,
                226,
                50,
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
                0,
                0
            ]
        },
        {
            "name": "12-14点",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(255,193,193,1)",
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#fff"
                        },
                        "position": "insideRight",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                182,
                234,
                106,
                87,
                62,
                59,
                75,
                173,
                150,
                94,
                82,
                56,
                47,
                64,
                108,
                142,
                46,
                2,
                0,
                2,
                0,
                0,
                0,
                0,
                2,
                0,
                2,
                0,
                0
            ]
        },
        {
            "name": "14-17点",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(255,106,106,1)",
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#fff"
                        },
                        "position": "insideRight",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                80,
                103,
                76,
                52,
                64,
                80,
                68,
                103,
                97,
                51,
                73,
                49,
                71,
                69,
                125,
                98,
                31,
                74,
                62,
                58,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        },
        {
            "name": "17-20点",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(58,95,205,1)",
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#fff"
                        },
                        "position": "insideRight",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                72,
                101,
                362,
                294,
                405,
                358,
                329,
                78,
                64,
                300,
                287,
                348,
                364,
                296,
                62,
                87,
                372,
                298,
                402,
                2,
                2,
                2,
                0,
                0,
                2,
                2,
                2,
                2,
                0
            ]
        },
        {
            "name": "20-24点",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(186,85,211,1)",
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#fff"
                        },
                        "position": "insideRight",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                284,
                357,
                142,
                91,
                205,
                165,
                154,
                270,
                264,
                145,
                138,
                96,
                105,
                126,
                248,
                197,
                91,
                84,
                70,
                0,
                0,
                0,
                0,
                2,
                0,
                0,
                0,
                0,
                0
            ]
        },
    ]
}