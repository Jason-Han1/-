var xData = function() {
    var data = [];
    for (var i = 1; i < 13; i++) {
        data.push(i + "月份");
    }
    return data;
}();

option = {
    backgroundColor: "#344b58",
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
        "data": ['女', '男', '男1','男2','平均']
    },
     

    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            show: false,
            lineStyle: {
                color: '#ffffff'
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
            show: false,
            lineStyle: {
                color: '#ffffff'
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
    series: [{
            name: "女",
            type: "bar",
            stack: "总量",
            barMaxWidth: 35,
            barGap: "10%",
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#36ecff'
                }, {
                    offset: 1,
                    color: '#00b7c1'
                }], false),
                    label: {
                        show: false,
                        textStyle: {
                            color: "#fff"
                        },
                        position: "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            data: [
                709,
                1917,
                2455,
                2610,
                1719,
                1433,
                1544,
                3285,
                5208,
                3372,
                2484,
                4078
            ],
        },{
            name: "男",
            type: "bar",
            stack: "总量",
            barMaxWidth: 35,
            barGap: "10%",
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#ffffff'
                }, {
                    offset: 1,
                    color: '#a3a3a3'
                }], false),
                    label: {
                        show: true,
                        textStyle: {
                            color: "#fff"
                        },
                        position: "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            data: [
                709,
                1917,
                2455,
                2610,
                1719,
                1433,
                1544,
                3285,
                5208,
                3372,
                2484,
                4078
            ],
        },{
            name: "男1",
            type: "bar",
            stack: "总量",
            barMaxWidth: 35,
            barGap: "10%",
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#ffc59c'
                }, {
                    offset: 1,
                    color: '#ff8f40'
                }], false),
                    label: {
                        show: true,
                        textStyle: {
                            color: "#fff"
                        },
                        position: "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            data: [
                709,
                1917,
                2455,
                2610,
                1719,
                1433,
                1544,
                3285,
                5208,
                3372,
                2484,
                4078
            ],
        },{
            name: "男2",
            type: "bar",
            stack: "总量",
            barMaxWidth: 35,
            barGap: "10%",
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#ff9ba8'
                }, {
                    offset: 1,
                    color: '#d34355'
                }], false),
                    label: {
                        show: true,
                        textStyle: {
                            color: "#fff"
                        },
                        position: "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            data: [
                709,
                1917,
                2455,
                2610,
                1719,
                1433,
                1544,
                3285,
                5208,
                3372,
                2484,
                4078
            ],
        },
        {
            "name": "总数",
            "type": "line",
            symbolSize:10,
            symbol:'circle',
            "itemStyle": {
                "normal": {
                    "color": "#36ecff",
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