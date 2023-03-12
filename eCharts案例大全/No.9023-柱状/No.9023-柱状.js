

option = {
    backgroundColor:'#000',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function (params) {
            return params[0].name + ': ' + params[0].value;
        }
    },
    xAxis: {
        data: ['标准支持', '服务支持', '技术支持', '市场支持', '资金支持', '信息人才', '政策支持', '其他', ],
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
              inverse:0,
              rotate:-40,
            textStyle: {
                color: '#fff',fontSize:21,
              
            }
        }
    },
    yAxis: {
        splitLine: {show: false},
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {show: false}
    },
    color: ['#e54035'],
    series: [{
        name: 'hill',
        type: 'pictorialBar',
        barCategoryGap: '-130%',
        // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        itemStyle: {
            normal: {
                opacity: 0.5
            },
            emphasis: {
                opacity: 1
            }
        },
        data: [101,97,109,45,200,118,227,1],
        z: 10
    }, {
        name: 'glyph',
        type: 'pictorialBar',
        barGap: '-100%',
        symbolPosition: 'end',
        symbolSize: 0,
        symbolOffset: [0, '-120%'],
        data: [
            {
            value: 101,
        "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(params) {
                            var index = params.dataIndex;
                            var str = "{a|" + params.value  + "个}";
                            return str;
                        },
                        "rich": {
                            "a": {
                                "fontSize": 25,
                                "color": "#fff",
                                "align": "center",
                                "height": 40
                            },
                        }
                    },
        }, 
        {
            value: 97,
                 "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(params) {
                            var index = params.dataIndex;
                            var str = "{a|" + params.value  + "个}";
                            return str;
                        },
                        "rich": {
                            "a": {
                                 "fontSize": 25,
                                "color": "#fff",
                                "align": "center",
                                "height": 40
                            },
                        }
                    },
        }, 
        {
            value: 109,
                 "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(params) {
                            var index = params.dataIndex;
                            var str = "{a|" + params.value  + "个}";
                            return str;
                        },
                        "rich": {
                            "a": {
                                "fontSize": 25,
                                "color": "#fff",
                                "align": "center",
                                "height": 40
                            },
                        }
                    },
        },
        {
            value: 45,
                "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(params) {
                            var index = params.dataIndex;
                            var str = "{a|" + params.value  + "个}";
                            return str;
                        },
                        "rich": {
                            "a": {
                           "fontSize": 25,
                                "color": "#fff",
                                "align": "center",
                                "height": 40
                            },
                        }
                    },
        },
        {
            value: 200,
                 "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(params) {
                            var index = params.dataIndex;
                            var str = "{a|" + params.value  + "个}";
                            return str;
                        },
                        "rich": {
                            "a": {
                              "fontSize": 25,
                                "color": "#fff",
                                "align": "center",
                                "height": 40
                            },
                        }
                    },
        },
        {
            value: 118,
                 "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(params) {
                            var index = params.dataIndex;
                            var str = "{a|" + params.value  + "个}";
                            return str;
                        },
                        "rich": {
                            "a": {
                                 "fontSize": 25,
                                "color": "#fff",
                                "align": "center",
                                "height": 40
                            },
                        }
                    },
        }, 
        {
            value: 227,
                 "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(params) {
                            var index = params.dataIndex;
                            var str = "{a|" + params.value  + "个}";
                            return str;
                        },
                        "rich": {
                            "a": {
                              "fontSize": 25,
                                "color": "#fff",
                                "align": "center",
                                "height": 40
                            },
                        }
                    },
        }, 
        {
            value: 1,
              "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(params) {
                            var index = params.dataIndex;
                            var str = "{a|" + params.value  + "个}";
                            return str;
                        },
                        "rich": {
                            "a": {
                              "fontSize": 25,
                                "color": "#fff",
                                "align": "center",
                                "height": 40
                            },
                        }
                    },
        }]
    }]
};