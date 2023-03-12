var xData = function() {
    var data = [];
    for (var i = 1; i < 31; i++) {
        data.push(i + "日");
    }
    return data;
}();

option = {
    backgroundColor: "#fff",
        "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "cross",
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
    "legend": {
        x: '44%',
        top: '11%',
        textStyle: {
            color: '#90979c',
        },
        "data": ['正常会话', '异常会话', '异常会话占比']
    },
     

    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "axisPointer": {
          "type": "shadow"
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
         "name": "会话",
         "nameTextStyle": {
          "color": "#7d838b"
        },
        "min": 0,
        "max": 6000,
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

    },
    {
        "type": "value",
         "name": "占比（%）",
        "nameTextStyle": {
          "color": "#7d838b"
        },
        "min": 0,
        "max": 100,
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
    "dataZoom": [{
        "show": true,
        "height": 30,
        "xAxisIndex": [
            0
        ],
        bottom: 30,
        "start": 10,
        "end": 33,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle:{
            color:"#d3dee5",
            
        },
           textStyle:{
            color:"#6F6C6C"},
           borderColor:"#90979c"
        
        
    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 35
    }],
    "series": [{
            "name": "正常会话",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,168,84,0.45)",
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
            "data": [
                709,
                1917,
                2455,
                2610,
                1719,
                2610,
                1719,
                1433,
                1544,
                1285,
                2208,
                2610,
                2610,
                1719,
                2610,
                1200,
                1719,
                1431,
                3372,
                2484,
                1078,
                1719,
                2610,
                1719,
                1433,
                1544,
                1285,
                2208,
                2610,
                2610
            ],
        },

        {
            "name": "异常会话",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(240,65,52,1)",
                    "barBorderRadius": 0,
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
                327,
                1776,
                507,
                1200,
                800,
                482,
                444,
                1390,
                1001,
                951,
                507,
                1200,
                800,
                800,
                482,
                404,
                1390,
                1001,
                951,
                800,
                800,
                482,
                504,
                1390,
                1001,
                951,
                507,
                482,
                381,
                720
            ]
        }, {
            "name": "异常会话占比",
            "type": "line",
            symbolSize:10,
            symbol:'circle',
            "itemStyle": {
                "normal": {
                    "color": "rgba(255,191,15,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "yAxisIndex": 1,
            "data": [70,66,54,51,68,68,56,62,63,53,65,64,68,56,69,56,54,70,52,58,58,70,63,56,56,47,62,50,51,62]
        },
    ]
}