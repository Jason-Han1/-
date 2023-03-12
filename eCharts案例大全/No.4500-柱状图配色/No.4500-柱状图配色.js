var xData = function() {
    var data = ['设备','备品备件','电器','仪表', '阀门', '管件','其他',];
  
    return data;
}();

option = {
    backgroundColor: "#0D1223",
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
                // X轴线颜色
                color: 'rgba(255,255,255,.1)'
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
            // X轴字颜色
            color:'rgba(255,255,255,0.7)',
            fontSize:18
        },
        "data": xData,
    }],
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            // Y轴字颜色
            color:'rgba(255,255,255,0.5)',
            fontSize:20

        },
        "splitArea": {
            "show": false
        },

    }],
    "series": [{
            "name": "公司1",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": 
                    {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(255, 224, 0, 1)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(255, 224, 0, 0.1)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                }
            },
            "data": [
                709,
                1917,
                2455,
                2610,
                1719,
                1433,
                1400
            ],
        },

        {
            "name": "公司2",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(0, 255, 255, 1)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(0, 255, 255, 0.1)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    "barBorderRadius": 0
                }
            },
            "data": [
                327,
                1776,
                507,
                1200,
                800,
                482,
                1000
            ]
        },

        {
            "name": "公司3",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(255, 168, 0, 1)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(255, 168, 0,  0.1)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    "barBorderRadius": 0
                }
            },
            "data": [
                327,
                1776,
                507,
                1200,
                800,
                482,
                1000
            ]
        },{
            "name": "总数",
            "type": "line",
            symbolSize: 10,
            symbol: 'circle',
            "itemStyle": {
                "normal": {
                    "color": '#ffFFFF',
                    "barBorderRadius": 0,
                }
            },
            lineStyle:{
                normal:{
                    width:4,
                    color:{
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#00FFFF' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#00FFFF' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                }
            },
            "data": [
                1336,
                5493,
                3462,
                5010,
                3319,
                2415,
                3400
            ]
        },
    ]
}