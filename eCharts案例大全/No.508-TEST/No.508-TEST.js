var data1 = [100, 60, 130, 170, 140, 100];
var path = 'path://M134.76,106.63A41.76,41.76,0,1,1,93,64.87,41.76,41.76,0,0,1,134.76,106.63Z';
var path1 = 'path://M134.41,111v-3.08a6.3,6.3,0,0,0-6.3-6.3H57.81a6.3,6.3,0,0,0-6.3,6.3V111a6.3,6.3,0,0,0,6.3,6.3h70.3A6.3,6.3,0,0,0,134.41,111Z';
option = {
    backgroundColor: '#7a5da0',
    title: {
        text: 'Set of bright sweet lollipops',
        textStyle: {
            fontSize: '20',
            fontFamily: 'FZYaoti',
            fontWeight: '600',
            color: '#f1f1f1',
            textAlign: 'center',
        },
    },
    tooltip: {
        show: false,
        trigger: 'item',
    },
    grid: {
        left: 50,
        bottom: 50
    },
    xAxis: {
        show: false,
        data: ['A', 'B', 'C', 'D', 'E', 'F', ]
    },
    yAxis: {
        show: false,
    },
    series: [{
            name: '2020',
            type: 'bar',
            symbol: path,
            barWidth: 10,
            barGap: '-100%',
            "z": 0,
            itemStyle: {
                color: function(params) {
                    var colorList = [
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#eae4e4',
                            },
                            {
                                offset: .3,
                                color: '#a9a0a0'
                            },
                            {
                                offset: .3,
                                color: '#bfb5b4'
                            },
                            {
                                offset: .5,
                                color: '#f4f2f0'
                            },
                            {
                                offset: .7,
                                color: '#ffffff'
                            },
                            {
                                offset: .7,
                                color: '#f6f0ea'
                            },
                            {
                                offset: 1,
                                color: '#e1dddd'
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#eae4e4',
                            },
                            {
                                offset: .3,
                                color: '#a9a0a0'
                            },
                            {
                                offset: .3,
                                color: '#bfb5b4'
                            },
                            {
                                offset: .5,
                                color: '#f4f2f0'
                            },
                            {
                                offset: .7,
                                color: '#ffffff'
                            },
                            {
                                offset: .7,
                                color: '#f6f0ea'
                            },
                            {
                                offset: 1,
                                color: '#e1dddd'
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#eae4e4',
                            },
                            {
                                offset: .3,
                                color: '#a9a0a0'
                            },
                            {
                                offset: .3,
                                color: '#bfb5b4'
                            },
                            {
                                offset: .5,
                                color: '#f4f2f0'
                            },
                            {
                                offset: .7,
                                color: '#ffffff'
                            },
                            {
                                offset: .7,
                                color: '#f6f0ea'
                            },
                            {
                                offset: 1,
                                color: '#e1dddd'
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#eae4e4',
                            },
                            {
                                offset: .3,
                                color: '#a9a0a0'
                            },
                            {
                                offset: .3,
                                color: '#bfb5b4'
                            },
                            {
                                offset: .5,
                                color: '#f4f2f0'
                            },
                            {
                                offset: .7,
                                color: '#ffffff'
                            },
                            {
                                offset: .7,
                                color: '#f6f0ea'
                            },
                            {
                                offset: 1,
                                color: '#e1dddd'
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#eae4e4',
                            },
                            {
                                offset: .3,
                                color: '#a9a0a0'
                            },
                            {
                                offset: .3,
                                color: '#bfb5b4'
                            },
                            {
                                offset: .5,
                                color: '#f4f2f0'
                            },
                            {
                                offset: .7,
                                color: '#ffffff'
                            },
                            {
                                offset: .7,
                                color: '#f6f0ea'
                            },
                            {
                                offset: 1,
                                color: '#e1dddd'
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#eae4e4',
                            },
                            {
                                offset: .3,
                                color: '#a9a0a0'
                            },
                            {
                                offset: .3,
                                color: '#bfb5b4'
                            },
                            {
                                offset: .5,
                                color: '#f4f2f0'
                            },
                            {
                                offset: .7,
                                color: '#ffffff'
                            },
                            {
                                offset: .7,
                                color: '#f6f0ea'
                            },
                            {
                                offset: 1,
                                color: '#e1dddd'
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
            symbol: path,
            "symbolSize": [70, 70],
            "symbolOffset": [0, -40],
            "z": 1,
            itemStyle: {
                opacity: 1,
                color: function(params) {
                    var colorList = [
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: '#fef8a7'
                        }, {
                            offset: 0.3,
                            color: '#fabd41'
                        }, {
                            offset: 0.5,
                            color: '#eb710f'
                        }, {
                            offset: 1,
                            color: '#fed174'
                        }]),
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: '#feecc2'
                        }, {
                            offset: 0.3,
                            color: '#fd945d'
                        }, {
                            offset: 0.5,
                            color: '#e8491e'
                        }, {
                            offset: 1,
                            color: '#fd8d51'
                        }]),
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: '#fafee6'
                        }, {
                            offset: 0.3,
                            color: '#b0d67b'
                        }, {
                            offset: 0.5,
                            color: '#70a239'
                        }, {
                            offset: 1,
                            color: '#a7db5c'
                        }]),
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: '#fed6ee'
                        }, {
                            offset: 0.3,
                            color: '#e94b87'
                        }, {
                            offset: 0.5,
                            color: '#cf1d4d'
                        }, {
                            offset: 1,
                            color: '#f76495'
                        }]),
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: '#fefdf9'
                        }, {
                            offset: 0.3,
                            color: '#f9daab'
                        }, {
                            offset: 0.5,
                            color: '#deb386'
                        }, {
                            offset: 1,
                            color: '#fae8e0'
                        }]),
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: '#c3a6c4'
                        }, {
                            offset: 0.3,
                            color: '#8a6d89'
                        }, {
                            offset: 0.5,
                            color: '#523a51'
                        }, {
                            offset: 1,
                            color: '#746074'
                        }]),

                    ];
                    return colorList[params.dataIndex]
                },
                shadowColor: 'rgba(47,29,70, .3)',
                shadowBlur: 2,
                shadowOffsetX: 5,
                shadowOffsetY: 3,
            },
            "symbolPosition": "end",
            "data": data1
        },
        {
            "name": "",
            "type": "pictorialBar",
            symbol: path1,
            "symbolSize": [70, 13],
            "symbolOffset": [0, -10],
            "z": 2,
            itemStyle: {
                opacity: 1,
                color: function(params) {
                    var colorList = [
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: '#fef8a7'
                        }, {
                            offset: 0.3,
                            color: '#fabd41'
                        }, {
                            offset: 0.5,
                            color: '#eb710f'
                        }, {
                            offset: 1,
                            color: '#fed174'
                        }]),
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: '#feecc2'
                        }, {
                            offset: 0.3,
                            color: '#fd945d'
                        }, {
                            offset: 0.5,
                            color: '#e8491e'
                        }, {
                            offset: 1,
                            color: '#fd8d51'
                        }]),
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: '#fafee6'
                        }, {
                            offset: 0.3,
                            color: '#b0d67b'
                        }, {
                            offset: 0.5,
                            color: '#70a239'
                        }, {
                            offset: 1,
                            color: '#a7db5c'
                        }]),
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: '#fed6ee'
                        }, {
                            offset: 0.3,
                            color: '#e94b87'
                        }, {
                            offset: 0.5,
                            color: '#cf1d4d'
                        }, {
                            offset: 1,
                            color: '#f76495'
                        }]),
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: '#fefdf9'
                        }, {
                            offset: 0.3,
                            color: '#f9daab'
                        }, {
                            offset: 0.5,
                            color: '#deb386'
                        }, {
                            offset: 1,
                            color: '#fae8e0'
                        }]),
                        new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: '#c3a6c4'
                        }, {
                            offset: 0.3,
                            color: '#8a6d89'
                        }, {
                            offset: 0.5,
                            color: '#523a51'
                        }, {
                            offset: 1,
                            color: '#746074'
                        }]),

                    ];
                    return colorList[params.dataIndex]
                },
            },
            "symbolPosition": "end",
            "data": data1
        },
        {
            "type": "pictorialBar",
            "symbolSize": [60, 5],
            "symbolOffset": [0, 10],
            "z": 0,
            itemStyle: {
                opacity: 1,
                color: 'rgba(47,29,70, .1)',
                shadowColor: 'rgba(47,29,70, 1)',
                shadowBlur: 5,
                shadowOffsetX: 0,
                shadowOffsetY: 0
            },
            "data": [1, 1, 1, 1, 1, 1]
        },
    ]
};