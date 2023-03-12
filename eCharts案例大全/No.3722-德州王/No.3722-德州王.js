var xData = function() {
    var data = [];
    for (var i = 0; i < 17; i++) {
        data.push( "场次"+i);
    }
    return data;
}();

option = {
    backgroundColor: "#344b58",
    "title": {
        "text": "德州王",
        "subtext": "青龙dsb",
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
        "start": 0,
        "end": 50,
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
        "start": 0,
        "end": 35
    }],
    "series": [{
            "name": "jdx",
            "type": "line",
            symbolSize:5,
            symbol:'circle',
            "itemStyle": {
                "normal": {
                    "color": "rgba(255,144,128,1)",
                    "label": {"show": true,
                        "textStyle": {"color": "#fff"
                        },
                        "position": "top",
                        formatter: function(p) {return p.value > 0 ? (p.value) : '';
                        }}}},
            "data": [0,400,400,1184,1277,947,1010,2251,2256,3392,3092,3827,4278,4592,4636,3957,3348 ],},

        {
            "name": "zzb",
            "type": "line",
            symbolSize:5,
            symbol:'circle',
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,191,183,1)",
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
           "data": [0,230,-124,-87,1508,1733,2041,2018,1556,1556,1556,1497,2362,2785,2350,2480,2479
            ]
        }, 
         {
            "name": "cjj",
            "type": "line",
            symbolSize:5,
            symbol:'circle',
            "itemStyle": {
                "normal": {
                    "color": "rgba(100,155,183,100)",
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
            "data": [0,-230,-88,52,-211,1317,2042,1786,2444,1884,2306,2114,2277,2277,2277,1340,1862
            ]
        }, 
        {
            "name": "wmx",
            "type": "line",
            symbolSize:5,
            symbol:'circle',
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,255,13,1)",
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
            "data": [0,-300,-505,-395,81,-519,890,1616,1653,1661,1544,1244,944,644,648,624,324
            ]
        }, 
         {
            "name": "sj",
            "type": "line",
            symbolSize:5,
            symbol:'circle',
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,191,183,1)",
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
            "data": [0,0,0,0,0,0,0,-400,-400,-352,-352,-352,-352,133,36,36,36
            ]
        }, 
       {
            "name": "ljw",
            "type": "line",
            symbolSize:5,
            symbol:'circle',
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,11,183,1)",
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
            "data": [0,1400,1213,613,766,522,265,-19,-868,-918,-1518,-1818,-1594,-1746,-1473,-430,-560
            ]
        },   
        {
            "name": "ldd",
            "type": "line",
            symbolSize:5,
            symbol:'circle',
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,191,13,1)",
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
            "data": [0,0,489,411,-1467,-1879,-2123,-2885,-2968,-3113,-1907,-1198,-1493,-1696,-1702,-1093,-1061

            ]
        }, 
        {
            "name": "qf",
            "type": "line",
            symbolSize:5,
            symbol:'circle',
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,191,255,1)",
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
            "data": [0,0,-9,-25,167,-438,-438,-1108,-1108,-1108,-1108,-1108,-1108,-1108,-1108,-1108,-1108

            ]
        }, 
        {
            "name": "ljh",
            "type": "line",
            symbolSize:5,
            symbol:'circle',
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,255,183,255)",
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
            "data": [0,0,1,54,-71,867,363,-537,-563,-1163,-1163,-1163,-1295,-1895,-1996,-1854,-1419

            ]
        }, 
        {
            "name": "zxb",
            "type": "line",
            symbolSize:5,
            symbol:'circle',
            "itemStyle": {
                "normal": {
                    "color": "rgba(255,191,255,1)",
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
            "data": [0,-1500,-1377,-1807,-2050,-2550,-4050,-2722,-2002,-1839,-2450,-3043,-4019,-3986,-3668,-3952,-3901

            ]
        }, 
        
    ]
}