var xData = function() {
    var data = [];
    for (var i = 1; i < 10; i++) {
        data.push("第"+ i + "周");
    }
    return data;
}();

option = {
    backgroundColor: "#344b58",
    "title": {
        "text": "每周成本对比",
        "subtext": "每周消耗图",
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
        "top": 110,
        "bottom": 95,
        textStyle: {
            color: "#fff"
        }
    },
    "legend": {
        x: '4%',
        top: '8%',
        textStyle: {
            color: '#90979c',
        },
        "data": ['北京成本', '成都成本','上海成本','杭州成本','南京成本','武汉成本','广州成本', '苏州成本','重庆成本','南通成本',  '总消耗（万）']
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
        "end": 80,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle:{
            color:"#d3dee5",
            
        },
           textStyle:{
            color:"#fff"},
           borderColor:"#90979c"
        
        
    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 35
    }],
    "series": [{
            "name": "北京成本",
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
                        "position": "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                179,
	            185,
	            193,
	            194
            ],
        },

        {
            "name": "成都成本",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(209,186,116,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                98,
                101,
                103,
                112
            ]
        },
        {
            "name": "上海成本",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(190,231,233,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                106,
	            165,
	            122,
	            145
            ]
        },
        {
            "name": "杭州成本",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(25,202,173,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                101,
                93,
                111,
                0,
            ]
        },
        {
            "name": "南京成本",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(244,96,108,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                0,
                121,
                95,
                0
            ]
        },
                {
            "name": "武汉成本",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(250,136,60,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                0,
                0,
                85,
                450
            ]
        },
        {
            "name": "广州成本",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(92,138,222,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                50,
                51,
                32,
                46
            ]
        },
        {
            "name": "苏州成本",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(140,199,181,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                46,
                46,
                56,
                47
            ]
        },   
        {
            "name": "重庆成本",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(190,237,199,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                44,
                65,
                0,
                236
            ]
        },   
        {
            "name": "南通成本",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(236,173,158,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                0,
                44,
                48,
                51
            ]
        },        
        {
            "name": "总消耗（万）",
            "type": "line",
            symbolSize:10,
            symbol:'circle',
            "itemStyle": {
                "normal": {
                    "color": "rgba(252,230,48,1)",
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
                24.6,
                41.8,
                48.5,
                42.8
            ]
        },
    ]
}