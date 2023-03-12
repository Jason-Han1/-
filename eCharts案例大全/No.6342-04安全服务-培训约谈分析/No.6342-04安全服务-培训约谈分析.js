var xData = function() {
    var data = ["新福利", "溢通公司", "南沙巴士", "从化分公司", "花都恒通", "二巴一分", "二巴二分", "番禺片区", "佛广集团", "客运旅包"];
    return data;
}();

option = {
    backgroundColor: "RGBA(7, 28, 51, 1)",
    legend: {
        data: ['岗前培训', '安全例会', '技术培训', '教育约谈', '其它'],
        left: "15%",
        top: 20,
        itemWidth: 60,
        itemHeight: 30,
        type: "plain",
        textStyle: {
            color: "RGBA(154, 209, 253, 1)"
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
                color: 'rgba(255,255,255,.5)'
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
            color: 'rgba(255,255,255,0.7)',
            fontSize: 18
        },
        "data": xData,
    }],
    "yAxis": [{
            "type": "value",
            "splitLine": {
                "show": true,
                lineStyle: {
                    type: 'dashed',
                    color: "RGBA(3, 75, 97, 1)"
                }
            },
            "axisLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "axisLabel": {
                "interval": 0,
                color: 'rgba(255,255,255,0.5)',
                fontSize: 20

            },
            "splitArea": {
                "show": false
            },

        },
        {
            type: 'value',
            "splitLine": {
                "show": false
            },
            min: 0,
            "axisLabel": {
                "interval": 0,
                color: 'rgba(255,255,255,0.5)',
                fontSize: 20

            },
        }
    ],
    "series": [{
            "name": "岗前培训",
            "type": "bar",
            "stack": "1",
            "barMaxWidth": 35,
            "barGap": "10%",
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
                            color: 'rgba(0, 214, 255, 0.6)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(83, 14, 224, 0.15)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    opacity: 1,
                    borderColor :{
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(0, 214, 255, 0.6)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(83, 14, 224, 0.15)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    borderWidth:4
                },
                
                
            },
            "data": [
                16,
                11,
                8,
                14,
                17,
                16,
                11,
                8,
                14,
                17
            ],
        },

        {
            "name": "安全例会",
            "type": "bar",
            "stack": "2",
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
                            color: 'rgba(48, 112, 255, 0.6)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(83, 14, 224, 0.15)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    opacity: 1,
                    borderColor :{
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(48, 112, 255, 0.6)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(83, 14, 224, 0.15)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    borderWidth:4
                }
            },
            "data": [
                9,
                7,
                3,
                2,
                6,
                9,
                7,
                3,
                2,
                6
            ]
        },
        {
            "name": "技术培训",
            "type": "bar",
            "stack": "3",
            "barMaxWidth": 35,
            "barGap": "40%",
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
                            color: 'rgba(255, 0, 132, 0.6)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(83, 14, 224, 0.15)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    opacity: 1,
                    borderColor :{
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(255, 0, 132, 0.6)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(83, 14, 224, 0.15)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    borderWidth:4
                }
            },
            "data": [
                13,
                19,
                6,
                12,
                15,
                13,
                19,
                6,
                12,
                15
            ],
        },
        {
            "name": "教育约谈",
            "type": "bar",
            "stack": "4",
            "barMaxWidth": 35,
            "barGap": "40%",
            "itemStyle":{
                "normal": {
                    "color": {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(192, 0, 255, 0.6)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(83, 14, 224, 0.15)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    opacity: 1,
                    borderColor :{
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(192, 0, 255, 0.6)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(83, 14, 224, 0.15)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    borderWidth:4
                }
            },
            "data": [
                13,
                19,
                6,
                12,
                15,
                13,
                19,
                6,
                12,
                15
            ],
        },
        {
            "name": "其它",
            "type": "line",
            yAxisIndex: 1,
            symbolSize: 10,
            symbol: 'emptyCircle',
            "itemStyle": {
                "normal": {
                    "color": 'rgba(0, 255, 180, 1)',
                    "barBorderRadius": "100%",
                },
                borderWidth: 5
            },
            lineStyle: {
                normal: {
                    width: 3,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(0, 255, 180, 0.5)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(0, 255, 180, 0.5)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                }
            },
            "data": [
                28,
                20,
                15,
                10,
                9,
                7,
                6,
                4,
                3,
                0
            ]
        }

    ]
}