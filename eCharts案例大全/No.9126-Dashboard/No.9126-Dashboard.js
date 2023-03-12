var demoData = [{
    name: '功率输出',
    unit: '%',
    value: 68,
}, ];
option = {
    backgroundColor: '#010101',
    series: (function() {
        var result = [];

        demoData.forEach(function(item) {
            result.push(
                {
                name: item.name,
                type: 'gauge',
                radius: '68.10%',
                startAngle: 225,
                endAngle: -45,
                min: 0,
                max: 100,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 10,
                        shadowBlur: 10,
                        color: [
                    [0, 'transparent'],
                    [0.1, '#fff'],
                    [0.101, 'transparent'],
                    [0.2, '#fff'],
                    [0.201, 'transparent'],
                    [0.3, '#fff'],
                    [0.301, 'transparent'],
                    [0.4, '#fff'],
                    [0.401, 'transparent'],
                    [0.5, '#fff'],
                    [0.501, 'transparent'],
                    [0.6, '#fff'],
                    [0.601, 'transparent'],
                    [0.7, '#fff'],
                    [0.701, 'transparent'],
                    [0.8, '#fff'],
                    [0.801, 'transparent'],
                    [0.9, '#fff'],
                    [0.901, 'transparent'],
                    [1, '#fff']
                ],
                    }
                },
                axisTick: {
                    show: 0,
                },
                splitLine: {
                    show: 0,
                },
                axisLabel: {
                    show: 0
                },
                pointer: {
                    show: false,
                },
                detail: {
                    show: false,
                },
                data: [{
                    show: false,
                }]}, 
                {
                name: item.name,
                type: 'gauge',
                radius: '47.10%',
                startAngle: 225,
                endAngle: -45,
                min: 0,
                max: 100,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 50,
                        color: [
                            [
                                item.value / 100, new echarts.graphic.LinearGradient(
                                    0, 1, 1, 0, [{
                                            offset: 0,
                                            color: 'rgba(255, 36, 74,0)',
                                        }, {
                                            offset: 0.3,
                                            color: 'rgba(255, 36, 74,0)',
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(255, 36, 74,1)',
                                        }
                                    ]
                                )
                            ],
                            [
                                1, 'rgba(255,255,255,.0)'
                            ]
                        ],
                    }
                },
                axisTick: {
                    show: 0,
                },
                splitLine: {
                    show: 0,
                },
                axisLabel: {
                    show: 0
                },
                pointer: {
                    show: true,
                    length: '100%'
                },
                detail: {
                    show: true,
                    offsetCenter: [0, '70%'],
                    textStyle: {
                        fontSize: 24,
                        color: '#ff244a'
                    },
                    formatter: [
                        '{value}' + (item.unit || ''),
                        '{name|' + item.name + '}'
                    ].join('\n'),
                    rich: {
                        name: {
                            fontSize: 20,
                            lineHeight: 60,
                            color: '#fff',
                            fontWeight: '100',
                        }
                    }
                },
                itemStyle: {
                    color: 'rgba(255, 36, 74,.3)',
                    borderColor: 'rgba(255, 36, 74,1)',
                },
                data: [{
                    value: item.value
                }]}, 
                {
                type: 'gauge',
                radius: '63.33%',
                splitNumber: 10,
                min: 0,
                max: 100,
                startAngle: 225,
                endAngle: -45,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 3,
                        color: [
                            [1,
                                new echarts.graphic.LinearGradient(0, 0, 1, 0, [

                                    {
                                        offset: 0,
                                        color: '#747474'
                                    },
                                    {
                                        offset: 1,
                                        color: '#747474'
                                    }
                                ])
                            ]
                        ],
                    }
                },
                axisLabel: {
                    distance: 6,
                    textStyle: {
                        color: '#fff',
                        fontSize: '14'
                    }
                },
                splitLine: {
                    show: true,
                    length: 16,
                    lineStyle: {
                        color: "#fff",
                    }
                },
                pointer: {
                    show: 0
                },
                detail: {
                    show: 0
                }
            }, );
        });

        return result;
    })()
};