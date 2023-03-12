option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.5, 0.7, [{
        offset: 0,
        color: '#efefef'
    }, {
        offset: 0.5,
        color: '#efefef'
    }, {
        offset: 1,
        color: '#e1e1e3'
    }]),
    title: {
        text: '使用率',
        textStyle: {
            align: 'center',
            color: '#8598bb',
            fontSize: 12,
        },
        top: '17',
        left: 'center',
    },
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(0,0,0,0.9)',
        formatter: "{b}<br/>{c}%",
    },
    grid: {
        right: 25,
        left: 20,
        top: 60,
        bottom: 30,
    },
    yAxis: [{
        type: 'value',
        show: false,
    }],
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        axisLabel: {
            interval: 0,
            color: '#869ab8',
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitArea: {
            show: false,
        }
    }],
    series: [{
            type: 'pictorialBar',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            data: [23, 51, 45, 51, 45, 51, 45],
            barWidth: '150%',
            symbolOffset: [0, 0],
            z: 1,
            label: {
                show: true,
                formatter: "{c} %",
                position: 'top',
                color: '#869ab8',
            },
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 10,
                    shadowOffsetY: -5,
                    shadowOffsetX: 0,
                    color: function(params) {
                        var colorList = [
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#024cc4'
                            }, {
                                offset: 0.5,
                                color: '#024cc4'
                            }, {
                                offset: 0.5,
                                color: '#015ef3'
                            }, {
                                offset: 1,
                                color: '#015ef3'
                            }]),
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#5d01d1'
                            }, {
                                offset: 0.5,
                                color: '#5d01d1'
                            }, {
                                offset: 0.5,
                                color: '#6c01f3'
                            }, {
                                offset: 1,
                                color: '#6c01f3'
                            }]),
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#9602d5'
                            }, {
                                offset: 0.5,
                                color: '#9602d5'
                            }, {
                                offset: 0.5,
                                color: '#a201f3'
                            }, {
                                offset: 1,
                                color: '#a201f3'
                            }]),
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#5d01d1'
                            }, {
                                offset: 0.5,
                                color: '#5d01d1'
                            }, {
                                offset: 0.5,
                                color: '#6c01f3'
                            }, {
                                offset: 1,
                                color: '#6c01f3'
                            }]),
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#9602d5'
                            }, {
                                offset: 0.5,
                                color: '#9602d5'
                            }, {
                                offset: 0.5,
                                color: '#a201f3'
                            }, {
                                offset: 1,
                                color: '#a201f3'
                            }]),
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#5d01d1'
                            }, {
                                offset: 0.5,
                                color: '#5d01d1'
                            }, {
                                offset: 0.5,
                                color: '#6c01f3'
                            }, {
                                offset: 1,
                                color: '#6c01f3'
                            }]),
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#9602d5'
                            }, {
                                offset: 0.5,
                                color: '#9602d5'
                            }, {
                                offset: 0.5,
                                color: '#a201f3'
                            }, {
                                offset: 1,
                                color: '#a201f3'
                            }]),
                        ];
                        return colorList[params.dataIndex]
                    },
                },
                emphasis: {
                    opacity: 1
                }
            },

        },

    ]
};