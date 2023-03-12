var xData2 = ["A", "B", "C", "D", "E"];
var data1 = [100, 60, 130, 170, 140, 100];
var path = 'path://M214,1079l8-6h16l8,6-8,6H222Z';
option = {
    backgroundColor: '#dedede',
    title: {
        text: 'BUSINESS TEMPLATE',
        textStyle: {
            fontSize: '20',
            fontFamily: 'FZYaoti',
            fontWeight: '600',
            color: '#f84e4f',
            textAlign: 'center',
        },
    },
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
                fontWeight: 100,
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
        data: ['A', 'B', 'C', 'D', 'E', 'F', ]
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
                fontSize: 20,
                fontFamily: 'FZYaoti',
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
    series: [{
            "name": "",
            "type": "pictorialBar",
            symbol: path,
            "symbolSize": [45.5, 25],
            "symbolOffset": [0, 12],
            "z": 1,
            itemStyle: {
                opacity: 1,
                color: function(params) {
                    var colorList = [
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#fe3636',
                            },
                            {
                                offset: .3,
                                color: '#fe3636'
                            },
                            {
                                offset: .3,
                                color: '#ff4546'
                            },
                            {
                                offset: .5,
                                color: '#ff4546'
                            },
                            {
                                offset: .7,
                                color: '#ff4546'
                            },
                            {
                                offset: .7,
                                color: '#ff8584'
                            },
                            {
                                offset: 1,
                                color: '#ff8584'
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#ffb200',
                            },
                            {
                                offset: .3,
                                color: '#ffb200'
                            },
                            {
                                offset: .3,
                                color: '#fec200'
                            },
                            {
                                offset: .5,
                                color: '#fec200'
                            },
                            {
                                offset: .7,
                                color: '#fec200'
                            },
                            {
                                offset: .7,
                                color: '#ffdb17'
                            },
                            {
                                offset: 1,
                                color: '#ffdb17'
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#df7100',
                            },
                            {
                                offset: .3,
                                color: '#df7100'
                            },
                            {
                                offset: .3,
                                color: '#fd8c00'
                            },
                            {
                                offset: .5,
                                color: '#fd8c00'
                            },
                            {
                                offset: .7,
                                color: '#fd8c00'
                            },
                            {
                                offset: .7,
                                color: '#ff9a00'
                            },
                            {
                                offset: 1,
                                color: '#ff9a00'
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#b0b513',
                            },
                            {
                                offset: .3,
                                color: '#b0b513'
                            },
                            {
                                offset: .3,
                                color: '#bec81a'
                            },
                            {
                                offset: .5,
                                color: '#bec81a'
                            },
                            {
                                offset: .7,
                                color: '#bec81a'
                            },
                            {
                                offset: .7,
                                color: '#dcdc3c'
                            },
                            {
                                offset: 1,
                                color: '#dcdc3c'
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#0078e6',
                            },
                            {
                                offset: .3,
                                color: '#0078e6'
                            },
                            {
                                offset: .3,
                                color: '#1593f7'
                            },
                            {
                                offset: .5,
                                color: '#1593f7'
                            },
                            {
                                offset: .7,
                                color: '#1593f7'
                            },
                            {
                                offset: .7,
                                color: '#4daeff'
                            },
                            {
                                offset: 1,
                                color: '#4daeff'
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#8906aa',
                            },
                            {
                                offset: .3,
                                color: '#8906aa'
                            },
                            {
                                offset: .3,
                                color: '#a11cb6'
                            },
                            {
                                offset: .5,
                                color: '#a11cb6'
                            },
                            {
                                offset: .7,
                                color: '#a11cb6'
                            },
                            {
                                offset: .7,
                                color: '#b030cb'
                            },
                            {
                                offset: 1,
                                color: '#b030cb'
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
            "data": [1, 1, 1, 1, 1, 1]
        },
        {
            name: '2020',
            type: 'bar',
            symbol: path,
            barWidth: 45,
            barGap: '-100%',
            "z": 10,
            itemStyle: {
                color: function(params) {
                    var colorList = [
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#fe3636',
                            },
                            {
                                offset: .3,
                                color: '#fe3636'
                            },
                            {
                                offset: .3,
                                color: '#ff4546'
                            },
                            {
                                offset: .5,
                                color: '#ff4546'
                            },
                            {
                                offset: .7,
                                color: '#ff4546'
                            },
                            {
                                offset: .7,
                                color: '#ff8584'
                            },
                            {
                                offset: 1,
                                color: '#ff8584'
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#ffb200',
                            },
                            {
                                offset: .3,
                                color: '#ffb200'
                            },
                            {
                                offset: .3,
                                color: '#fec200'
                            },
                            {
                                offset: .5,
                                color: '#fec200'
                            },
                            {
                                offset: .7,
                                color: '#fec200'
                            },
                            {
                                offset: .7,
                                color: '#ffdb17'
                            },
                            {
                                offset: 1,
                                color: '#ffdb17'
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#df7100',
                            },
                            {
                                offset: .3,
                                color: '#df7100'
                            },
                            {
                                offset: .3,
                                color: '#fd8c00'
                            },
                            {
                                offset: .5,
                                color: '#fd8c00'
                            },
                            {
                                offset: .7,
                                color: '#fd8c00'
                            },
                            {
                                offset: .7,
                                color: '#ff9a00'
                            },
                            {
                                offset: 1,
                                color: '#ff9a00'
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#b0b513',
                            },
                            {
                                offset: .3,
                                color: '#b0b513'
                            },
                            {
                                offset: .3,
                                color: '#bec81a'
                            },
                            {
                                offset: .5,
                                color: '#bec81a'
                            },
                            {
                                offset: .7,
                                color: '#bec81a'
                            },
                            {
                                offset: .7,
                                color: '#dcdc3c'
                            },
                            {
                                offset: 1,
                                color: '#dcdc3c'
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#0078e6',
                            },
                            {
                                offset: .3,
                                color: '#0078e6'
                            },
                            {
                                offset: .3,
                                color: '#1593f7'
                            },
                            {
                                offset: .5,
                                color: '#1593f7'
                            },
                            {
                                offset: .7,
                                color: '#1593f7'
                            },
                            {
                                offset: .7,
                                color: '#4daeff'
                            },
                            {
                                offset: 1,
                                color: '#4daeff'
                            }
                        ]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#8906aa',
                            },
                            {
                                offset: .3,
                                color: '#8906aa'
                            },
                            {
                                offset: .3,
                                color: '#a11cb6'
                            },
                            {
                                offset: .5,
                                color: '#a11cb6'
                            },
                            {
                                offset: .7,
                                color: '#a11cb6'
                            },
                            {
                                offset: .7,
                                color: '#b030cb'
                            },
                            {
                                offset: 1,
                                color: '#b030cb'
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
            "symbolSize": [30, 19],
            "symbolOffset": [0, -9],
            "z": 15,
            label: {
                show: true,
                formatter: "{c}",
                position: 'top',
                distance: -16,
                color: '#FFF',
                fontFamily: 'FZYaoti',
                fontWeight: 100,
                textShadowColor: 'rgba(0, 0, 0, .6)',
                fontSize: 14,
                textShadowBlur: '0',
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
            },
            itemStyle: {
                opacity: 1,
                color: function(params) {
                    var colorList = [
                        '#fe3636', '#ffb200', '#df7100', '#b0b513', '#0078e6', '#8906aa'
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
            symbol: path,
            "symbolSize": [45, 25],
            "symbolOffset": [0, -12],
            "z": 12,
            itemStyle: {
                opacity: 1,
                color: function(params) {
                    var colorList = [
                        '#ffa1a1', '#fee253', '#ffa930', '#e4df4f', '#7bc6ff', '#c24ee5'
                    ];
                    return colorList[params.dataIndex]
                },
            },
            "symbolPosition": "end",
            "data": data1
        },
    ]
};