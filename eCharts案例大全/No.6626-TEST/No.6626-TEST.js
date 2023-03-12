var myColor = ['#f15c2c', '#8c3e96', '#73b73e', '#f01798', '#fbaf16', '#0097dd'];
option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.2, 0.2, 1, [{
        offset: 0,
        color: '#ecf0f1'
    }, {
        offset: 1,
        color: '#a8b7bc'
    }]),
    title: {
        text: 'Sample Text',
        top:'20',
        left:'20',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 25,
            color: '#000'
        }
    },
    yAxis: {
        show: false,
    },
    xAxis: [{
        type: 'category',
        axisLabel: {
            textStyle: {
                color: function(param, index) {
                    return myColor[index]
                },
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: ['A', 'B', 'C', 'D', 'E', 'F'],
    }, ],
    series: [{
            name: '',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(0, 0, 0, .5)',
                    shadowBlur: 2,
                    shadowOffsetY: 1,
                    shadowOffsetX: 1,
                    color: function(params) {
                        var colorList = [
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#f87246'
                                },
                                {
                                    offset: 1,
                                    color: '#f15c2c'
                                }
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#a161aa'
                                },
                                {
                                    offset: 1,
                                    color: '#8c3e96'
                                }
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#8cc640'
                                },
                                {
                                    offset: 1,
                                    color: '#73b73e'
                                }
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#f034a5'
                                },
                                {
                                    offset: 1,
                                    color: '#f01798'
                                }
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#feca04'
                                },
                                {
                                    offset: 1,
                                    color: '#fbaf16'
                                }
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#01aeee'
                                },
                                {
                                    offset: 1,
                                    color: '#0097dd'
                                }
                            ]),

                        ];
                        return colorList[params.dataIndex]
                    },
                },
                emphasis: {
                    opacity: 1
                }
            },
            barGap: '-100%',
            barWidth: '33.3',
            data: [35, 32, 40, 65, 50, 36],
        },
        {
            name: '',
            type: 'bar',
            barGap: '-125%',
            barWidth: '50',
            data: [35, 32, 40, 65, 50, 36],
            label: {
                show: true,
                formatter: "{c}%",
                position: 'top',
                color: '#fff',
            },
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 4,
                    shadowOffsetY: 3,
                    shadowOffsetX: 3,
                    barBorderRadius: 10,
                    borderColor: '#fff',
                    color: {
                        type: 'linear',
                        x: 1,
                        y: 0,
                        x2: 0,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: '#fdfdfd'
                        }, {
                            offset: 1,
                            color: '#d1d2d4'
                        }],
                        globalCoord: false
                    },
                }
            },
        },
    ]
};