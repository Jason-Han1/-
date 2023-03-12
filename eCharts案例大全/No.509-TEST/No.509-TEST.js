var xData2 = ["A", "B", "C", "D", "E"];
var data1 = [100, 60, 130, 170, 140];
option = {
    backgroundColor: '#ded4c2',
    tooltip: {
        trigger: 'item',
    },
    grid: {
        left: 100,
        bottom: 100
    },
    xAxis: {
        axisLabel: {
            interval: 0,
            textStyle: {
                color: 'rgba(65, 49,28, .9)',
                fontSize: 30,
                fontFamily: 'FZYaoti',
                fontWeight:100,
            },
            margin: 20,
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255, 255,255, .8)',
                width: 4,
            }
        },
        splitArea: {
            show: false,
        },
        axisTick: {
            show: false
        },
        data: ['A', 'B', 'C', 'D', 'E', ]
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: 'rgba(255, 255,255, .9)',
                width: 4,
            }
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#42321c',
                fontSize: 20,fontFamily: 'FZYaoti',
            },
            margin: 20,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255, 255,255, .8)',
                width: 2,
            }
        },
        axisTick: {
            show: false
        },
    },
    series: [
        {
            "name": "",
            "type": "pictorialBar",
            "symbolSize": [45, 25],
            "symbolOffset": [0, 10],
            "z": 1,
            itemStyle: {
                opacity: 1,
                color: function(params) {
                    var colorList = [
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: "#eaadb5"
                            }, {
                                offset: 0.3,
                                color: "#e07786"
                            }, {
                                offset: 0.4,
                                color: "#e07786"
                            },
                            {
                                offset: 0.7,
                                color: "#efaab2"
                            }, {
                                offset: 0.95,
                                color: "#ed95a3"
                            },
                            {
                                offset: 1,
                                color: "#ed95a3"
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: "#e7af9d"
                            }, {
                                offset: 0.3,
                                color: "#e0916a"
                            }, {
                                offset: 0.4,
                                color: "#e0916a"
                            },
                            {
                                offset: 0.7,
                                color: "#e9b298"
                            }, {
                                offset: 0.95,
                                color: "#e9ac8e"
                            },
                            {
                                offset: 1,
                                color: "#e9a78a"
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: "#dcc7af"
                            }, {
                                offset: 0.3,
                                color: "#c9a580"
                            }, {
                                offset: 0.4,
                                color: "#c9a580"
                            },
                            {
                                offset: 0.7,
                                color: "#ddcaaf"
                            }, {
                                offset: 0.95,
                                color: "#d8c1a4"
                            },
                            {
                                offset: 1,
                                color: "#dbbea2"
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: "#c0d2a2"
                            }, {
                                offset: 0.3,
                                color: "#a3c275"
                            }, {
                                offset: 0.4,
                                color: "#a3c275"
                            },
                            {
                                offset: 0.7,
                                color: "#c0d6a5"
                            }, {
                                offset: 0.95,
                                color: "#bad29a"
                            },
                            {
                                offset: 1,
                                color: "#b6d294"
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: "#83c1b9"
                            }, {
                                offset: 0.3,
                                color: "#38b0a3"
                            }, {
                                offset: 0.4,
                                color: "#38b0a3"
                            },
                            {
                                offset: 0.7,
                                color: "#71c1ba"
                            }, {
                                offset: 0.95,
                                color: "#74c0ba"
                            },
                            {
                                offset: 1,
                                color: "#68c1b6"
                            }
                        ]),
                    ];
                    return colorList[params.dataIndex]
                },
                shadowColor: 'rgba(115, 106, 28, .7)',
                shadowBlur: 3,
                shadowOffsetX: 0,
                shadowOffsetY: 2
            },
            "data": [1, 1, 1, 1, 1]
        },
        {
            "name": "",
            "type": "pictorialBar",
            "symbolSize": [45, 40],
            "symbolOffset": [0, 10],
            "z": 0,
            itemStyle: {
                opacity: 1,
                color: '#ded4c2',
                shadowColor: 'rgba(136, 128, 28, 1)',
                shadowBlur: 30,
                shadowOffsetX: 0,
                shadowOffsetY: -2
            },
            "data": [1, 1, 1, 1, 1]
        },
        {
            name: '2020',
            type: 'bar',
            barWidth: 45,
            barGap: '-100%',
            "z": 10,
            itemStyle: {
                color: function(params) {
                    var colorList = [
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: "#eaadb5"
                            }, {
                                offset: 0.3,
                                color: "#e07786"
                            }, {
                                offset: 0.4,
                                color: "#e07786"
                            },
                            {
                                offset: 0.7,
                                color: "#efaab2"
                            }, {
                                offset: 0.95,
                                color: "#ed95a3"
                            },
                            {
                                offset: 1,
                                color: "#ed95a3"
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: "#e7af9d"
                            }, {
                                offset: 0.3,
                                color: "#e0916a"
                            }, {
                                offset: 0.4,
                                color: "#e0916a"
                            },
                            {
                                offset: 0.7,
                                color: "#e9b298"
                            }, {
                                offset: 0.95,
                                color: "#e9ac8e"
                            },
                            {
                                offset: 1,
                                color: "#e9a78a"
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: "#dcc7af"
                            }, {
                                offset: 0.3,
                                color: "#c9a580"
                            }, {
                                offset: 0.4,
                                color: "#c9a580"
                            },
                            {
                                offset: 0.7,
                                color: "#ddcaaf"
                            }, {
                                offset: 0.95,
                                color: "#d8c1a4"
                            },
                            {
                                offset: 1,
                                color: "#dbbea2"
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: "#c0d2a2"
                            }, {
                                offset: 0.3,
                                color: "#a3c275"
                            }, {
                                offset: 0.4,
                                color: "#a3c275"
                            },
                            {
                                offset: 0.7,
                                color: "#c0d6a5"
                            }, {
                                offset: 0.95,
                                color: "#bad29a"
                            },
                            {
                                offset: 1,
                                color: "#b6d294"
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: "#83c1b9"
                            }, {
                                offset: 0.3,
                                color: "#38b0a3"
                            }, {
                                offset: 0.4,
                                color: "#38b0a3"
                            },
                            {
                                offset: 0.7,
                                color: "#71c1ba"
                            }, {
                                offset: 0.95,
                                color: "#74c0ba"
                            },
                            {
                                offset: 1,
                                color: "#68c1b6"
                            }
                        ]),
                    ];
                    return colorList[params.dataIndex]
                },
            },
            data: data1
        },
        {
            "name": "",
            "type": "pictorialBar",
            "symbolSize": [45, 25],
            "symbolOffset": [0, -10],
            "z": 12,
            label: {
                show: true,
                formatter: "{c}",
                position: 'top',
                distance: -20,
                color: '#42321c',
                fontFamily: 'FZYaoti',
                fontWeight:600,
                textShadowColor: 'rgba(255, 255, 255, .6)',
                fontSize: 18,
                textShadowBlur: '0',
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
            },
            itemStyle: {
                opacity: 1,
                color: function(params) {
                    var colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: "#f9c1c3"
                            },
                            {
                                offset: 1,
                                color: "#ed95a3"
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#e0916a'
                            },
                            {
                                offset: 1,
                                color: '#efc9bb'
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#c9a580'
                            },
                            {
                                offset: 1,
                                color: '#e8d9c7'
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#a3c275'
                            },
                            {
                                offset: 1,
                                color: '#d0dfbc'
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#38b0a3'
                            },
                            {
                                offset: 1,
                                color: '#9fcec9'
                            }
                        ]),
                    ];
                    return colorList[params.dataIndex]
                },
            },
            "symbolPosition": "end",
            "data": data1
        },
        {
            "name": "",
            "type": "pictorialBar",
            "symbolSize": [45, 25],
            "symbolOffset": [0, -9],
            "z": 11,
            itemStyle: {
                opacity: 1,
                color: function(params) {
                    var colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: "#fbb7bc"
                            },
                            {
                                offset: 1,
                                color: "#f9c1c2"
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#f2cfb7'
                            },
                            {
                                offset: 1,
                                color: '#f2cdb6'
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#ecdcc3'
                            },
                            {
                                offset: 1,
                                color: '#eadabf'
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#d0e5bd'
                            },
                            {
                                offset: 1,
                                color: '#cce1b4'
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#95d2cc'
                            },
                            {
                                offset: 1,
                                color: '#99d3d0'
                            }
                        ]),
                    ];
                    return colorList[params.dataIndex]
                },
            },
            "symbolPosition": "end",
            "data": data1
        },
    ]
};