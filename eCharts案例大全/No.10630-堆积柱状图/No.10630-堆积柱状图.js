var xData = function() {
    var data = [];
    for (var i = 11; i < 18; i++) {
        data.push("9-"+i );
    }
    return data;
}();

option = {
   // backgroundColor: "#fff",
    "title": {
        "text": "江门浮法500吨配方比例",
        "subtext": '',
        x: "5%",
        y: "5%",
        textStyle: {
            color: '#000',
            fontSize: '22'
        },
        subtextStyle: {
            color: '#90979c',
            fontSize: '16',

        },
    },

    toolbox: {
        right: 80,
        top: 50,
        feature: {
            saveAsImage: {},
            restore: {},
            // dataView: {},
            // dataZoom: {},
            magicType: {
                type: ['line', 'bar']
            },
            // brush: {},
        }
    },

    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#000"
            }

        },
    },
    "grid": {
        "borderWidth": 0,
        "top": 130,
        "bottom": 95,
        textStyle: {
            color: "#000"
        }
    },
    "legend": {
        x: '4%',
        top: '11%',
        textStyle: {
            color: '#90979c',
        },
        "data": [ '石英砂', '纯碱', '方解石', '萤石', '硝酸钠', '氧化锑']
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

    "series": [
        {
            "name": "石英砂",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "#61A5E8",
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
                73,
                74,
                73.5,
                72,
                73,
                76,
                73,
                73,
                73.5,
                75,
                74,
                73
            ],
        },
        {
            "name": "纯碱",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "#7ECF51",
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
                18,
                18.5,
                18.6,
                18.4,
                18.1,
                18,
                19,
                20,
                18.5,
                18,
                18,
                18
            ]
        },
        {
            "name": "方解石",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "#EECB5F",
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
                3.5,
                3.6,
                3.7,
                3.4,
                3.8,
                3.2,
                3.1,
                3.7,
                3.4,
                3.8,
                3.2,
                3.1
            ]
        },
        {
            "name": "萤石",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "#E3935D",
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
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ]
        },
        {
            "name": "硝酸钠",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "#E16757",
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
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                2
            ]
        },
        {
            "name": "氧化锑",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "#9570E5",
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
                0.05,
               0.05,
              0.05,
           0.05,
           0.05,
           0.05,
          0.05,
           0.05,
           0.05,
         0.05,
           0.05,
         0.05,
            ]
        },
    ]
}