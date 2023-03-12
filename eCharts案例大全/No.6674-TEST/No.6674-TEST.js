option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.5, 0.7, [{
        offset: 0,
        color: '#05193a'
    }, {
        offset: 0.5,
        color: '#05193a'
    }, {
        offset: 1,
        color: '#000'
    }]),
    tooltip: {
        trigger: 'axis',
    },
    
    grid: {
        left: '5px',
        right: '4%',
        bottom: '45px',
        containLabel: true
    },
    xAxis: [{
        show: false,
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    }],
    yAxis: [{
        show: false,
        type: 'value',
        axisLabel: {
            formatter: '{value}%'
        },
    }],

    series: [
        {
            name: 'A',
            type: 'bar',
            stack: '百分率',
            // barWidth: '50',
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 5,
                    shadowOffsetY: 10,
                    shadowOffsetX: 0,
                    color: function(params) { 
                        var colorList = [
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#d1953c'
                                },
                                {
                                    offset: 0.5,
                                    color: '#d4ce70'
                                },
                                {
                                    offset: 1,
                                    color: '#d1953c'
                                }
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#0370b0'
                                },
                                {
                                    offset: 0.5,
                                    color: '#45a8d2'
                                },
                                {
                                    offset: 1,
                                    color: '#0370b0'
                                }
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#58813f'
                                },
                                {
                                    offset: 0.5,
                                    color: '#92b358'
                                },
                                {
                                    offset: 1,
                                    color: '#58813f'
                                }
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#d1953c'
                                },
                                {
                                    offset: 0.5,
                                    color: '#d4ce70'
                                },
                                {
                                    offset: 1,
                                    color: '#d1953c'
                                }
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#8c488f'
                                },
                                {
                                    offset: 0.5,
                                    color: '#be3a79'
                                },
                                {
                                    offset: 1,
                                    color: '#8c488f'
                                }
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#0370b0'
                                },
                                {
                                    offset: 0.5,
                                    color: '#45a8d2'
                                },
                                {
                                    offset: 1,
                                    color: '#0370b0'
                                }
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#d1953c'
                                },
                                {
                                    offset: 0.5,
                                    color: '#d4ce70'
                                },
                                {
                                    offset: 1,
                                    color: '#d1953c'
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
            data: [10, 13, 11, 13, 30, 23, 21]
        },
        {
            name: 'B',
            type: 'bar',
            stack: '百分率',
            // barWidth: '50',
            itemStyle: {
                normal: {
                    color: function(params) { 
                        var colorList = [
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#b07f37'
                                },
                                {
                                    offset: 0.5,
                                    color: '#b3af65'
                                },
                                {
                                    offset: 1,
                                    color: '#b07f37'
                                }
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#04629a'
                                },
                                {
                                    offset: 0.5,
                                    color: '#3a92b9'
                                },
                                {
                                    offset: 1,
                                    color: '#04629a'
                                }
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#4b713d'
                                },
                                {
                                    offset: 0.5,
                                    color: '#7a9853'
                                },
                                {
                                    offset: 1,
                                    color: '#4b713d'
                                }
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#b07f37'
                                },
                                {
                                    offset: 0.5,
                                    color: '#b3af65'
                                },
                                {
                                    offset: 1,
                                    color: '#b07f37'
                                }
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#78407e'
                                },
                                {
                                    offset: 0.5,
                                    color: '#9f336a'
                                },
                                {
                                    offset: 1,
                                    color: '#78407e'
                                }
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#04629a'
                                },
                                {
                                    offset: 0.5,
                                    color: '#3a92b9'
                                },
                                {
                                    offset: 1,
                                    color: '#04629a'
                                }
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#b07f37'
                                },
                                {
                                    offset: 0.5,
                                    color: '#b3af65'
                                },
                                {
                                    offset: 1,
                                    color: '#b07f37'
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
            data: [20, 18, 19, 23, 29, 33, 31]
        },
        {
            name: 'C',
            type: 'bar',
            stack: '百分率',
            // barWidth: '50',
            itemStyle: {
                normal: {
                    color: function(params) { 
                        var colorList = [
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#72542d'
                                },
                                {
                                    offset: 0.5,
                                    color: '#73774f'
                                },
                                {
                                    offset: 1,
                                    color: '#72542d'
                                }
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#054878'
                                },
                                {
                                    offset: 0.5,
                                    color: '#27678b'
                                },
                                {
                                    offset: 1,
                                    color: '#054878'
                                }
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#32523a'
                                },
                                {
                                    offset: 0.5,
                                    color: '#516b46'
                                },
                                {
                                    offset: 1,
                                    color: '#32523a'
                                }
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#72542d'
                                },
                                {
                                    offset: 0.5,
                                    color: '#73774f'
                                },
                                {
                                    offset: 1,
                                    color: '#72542d'
                                }
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#503260'
                                },
                                {
                                    offset: 0.5,
                                    color: '#6a2954'
                                },
                                {
                                    offset: 1,
                                    color: '#503260'
                                }
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#054878'
                                },
                                {
                                    offset: 0.5,
                                    color: '#27678b'
                                },
                                {
                                    offset: 1,
                                    color: '#054878'
                                }
                            ]),
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: '#72542d'
                                },
                                {
                                    offset: 0.5,
                                    color: '#73774f'
                                },
                                {
                                    offset: 1,
                                    color: '#72542d'
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
            data: [19, 23, 29, 20, 18, 33, 31]
        },


    ]
};