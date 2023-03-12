var xData = function() {
    var data = [];
    for (var i = 1; i < 13; i++) {
        data.push(i + "月份");
    }
    return data;
}();

option = {
    backgroundColor: "#344b58",
    "title": {
        "text": "商场人数",
        x: "6%",

        textStyle: {
            color: '#4B6770',
        },
        subtextStyle: {
            color: '#90979c',

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
    
        textStyle: {
            color: "#fff"
        }
    },
    "legend": {
        x: 'center',
        textStyle: {
            color: '#90979c',
        },
        "data": ['男', '女',]
    },
     

    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#4B6770'
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
                color: '#4B6770'
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
            "name": "女",
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
                            "color": "#D86F61"
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
                917,
                1055,
                2010,
                1719,
                1433,
                1544,
                2285,
                2208,
                2372,
                2484,
                1078
            ],
        },

        {
            "name": "男",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,191,183,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#1CA59B"
                        },
                        "position": "insideTop",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                327,
                1076,
                1507,
                1200,
                800,
                782,
                1990,
                1390,
                1001,
                1051,
                981,
                620
            ]
        }, 
    ]
}