var data1 = [50, 60, 70, 40, 70];
var data2 = [100, 100, 100, 100, 100];
var path = 'path://M1390,595h79l-39,22Z';
var myColor = ['#2a2e51', '#2b3c50', '#114b59', '#0a5e47', '#435f39'];
option = {
    grid: {
        left: 100,
        bottom: 100
    },
    xAxis: {
        axisLabel: {
            interval: 0,
            textStyle: {
                color: function(param, index) {
                    return myColor[index]
                },
                fontSize: 16,
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
                color: '#6e6e6e',
                width: 1,
            }
        },
        splitArea: {
            show: false,
        },
        axisTick: {
            show: false
        },
        data: ['2017', '2018', '2019', '2020', '2021', ]
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#6e6e6e',
                width: 1,
            }
        },
        axisLabel: {
            interval: 0,
            formatter: '{value}%',
            textStyle: {
                color: '#42321c',
                fontFamily: 'FZYaoti',
            },
            margin: 20,
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            lineStyle: {
                color: '#6e6e6e',
                width: 1,
                height:5,
            }
        },
    },
    series: [{
            type: 'bar',
            barWidth: 60,
            barGap: '-100%',
            stack: '广告',
            itemStyle: {
                color: function(params) {
                    var colorList = [
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: '#4d528a'
                        }, {
                            offset: 0.5,
                            color: '#4d528a'
                        }, {
                            offset: 0.5,
                            color: '#2a2e51'
                        }, {
                            offset: 1,
                            color: '#2a2e51'
                        }]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: '#4e6987'
                        }, {
                            offset: 0.5,
                            color: '#4e6987'
                        }, {
                            offset: 0.5,
                            color: '#2b3c50'
                        }, {
                            offset: 1,
                            color: '#2b3c50'
                        }]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: '#268196'
                        }, {
                            offset: 0.5,
                            color: '#268196'
                        }, {
                            offset: 0.5,
                            color: '#124b56'
                        }, {
                            offset: 1,
                            color: '#124b56'
                        }]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: '#1a9d7d'
                        }, {
                            offset: 0.5,
                            color: '#1a9d7d'
                        }, {
                            offset: 0.5,
                            color: '#0a5e47'
                        }, {
                            offset: 1,
                            color: '#0a5e47'
                        }]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: '#74a063'
                        }, {
                            offset: 0.5,
                            color: '#74a063'
                        }, {
                            offset: 0.5,
                            color: '#455f38'
                        }, {
                            offset: 1,
                            color: '#455f38'
                        }]),
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
            "symbolSize": [60, 20],
            "symbolOffset": [0, 0],
            "z": 12,
            "symbolPosition": "end",
            itemStyle: {
                color: '#e2e2e2',
                opacity: 1,
            },
            "data": data2
        },
        {
            "name": "",
            "type": "pictorialBar",
            symbol: path,
            "symbolSize": [60, 20],
            "symbolOffset": [0, 20],
            "z": 12,
            itemStyle: {
                opacity: 1,
                color: function(params) {
                    var colorList = [
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: '#4d528a'
                        }, {
                            offset: 0.5,
                            color: '#4d528a'
                        }, {
                            offset: 0.5,
                            color: '#2a2e51'
                        }, {
                            offset: 1,
                            color: '#2a2e51'
                        }]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: '#4e6987'
                        }, {
                            offset: 0.5,
                            color: '#4e6987'
                        }, {
                            offset: 0.5,
                            color: '#2b3c50'
                        }, {
                            offset: 1,
                            color: '#2b3c50'
                        }]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: '#268196'
                        }, {
                            offset: 0.5,
                            color: '#268196'
                        }, {
                            offset: 0.5,
                            color: '#124b56'
                        }, {
                            offset: 1,
                            color: '#124b56'
                        }]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: '#1a9d7d'
                        }, {
                            offset: 0.5,
                            color: '#1a9d7d'
                        }, {
                            offset: 0.5,
                            color: '#0a5e47'
                        }, {
                            offset: 1,
                            color: '#0a5e47'
                        }]),
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: '#74a063'
                        }, {
                            offset: 0.5,
                            color: '#74a063'
                        }, {
                            offset: 0.5,
                            color: '#455f38'
                        }, {
                            offset: 1,
                            color: '#455f38'
                        }]),
                    ];
                    return colorList[params.dataIndex]
                },
            },
            "data": [1, 1, 1, 1, 1]
        },
        {
            "name": "",
            "type": "pictorialBar",
            symbol: path,
            "symbolSize": [60, 20],
            "symbolOffset": [0, 0],
            "z": 12,
            label: {
                show: true,
                formatter: "{c}%",
                position: 'top',
                distance: 5,
                color: '#42321c',
                fontFamily: 'FZYaoti',
                fontWeight: 100,
                textShadowColor: 'rgba(255, 255, 255, .6)',
                fontSize: 16,
                textShadowBlur: '0',
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
            },
            itemStyle: {
                opacity: 1,
                color: function(params) {
                    var colorList = ['#5a62a3', '#597ba0', '#2698b3', '#37c9a4', '#8ec278'];
                    return colorList[params.dataIndex]
                },
            },
            "symbolPosition": "end",
            "data": data1
        },
        {
            name: '',
            type: "effectScatter",
            rippleEffect: {
                period: 1,
                scale: 5,
                brushType: 'fill'
            },
            z: 20,
            symbolPosition: 'end',
            symbol: path,
            "symbolSize": [15, 5],
            "symbolOffset": [0, 9],
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 5,
                    shadowOffsetY: 3,
                    shadowOffsetX: 0,
                    color: '#fff',
                }
            },
            data: data1
        },
        {
            name: '2019',
            type: 'bar',
            barWidth: 60,
            barGap: '-100%',
            z: 0,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#d5d5d5'
                    }, {
                        offset: 0.5,
                        color: '#d5d5d5'
                    }, {
                        offset: 0.5,
                        color: '#e5e5e5'
                    }, {
                        offset: 1,
                        color: '#e5e5e5'
                    }],
                    global: false
                },
                opacity: 1,
            },
            data: data2
        },
    ]
};
const backImg = "/asset/get/s/data-1622796959507-HTopachtJ.png"
myChart._dom.style.backgroundImage = "url('" + backImg + "')";