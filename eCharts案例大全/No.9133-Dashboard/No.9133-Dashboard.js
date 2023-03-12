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
                        ]
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
                name: item.name,
                type: 'gauge',
                radius: '47.10%',
                startAngle: 225,
                endAngle: -45,
                min: 0,
                max: 100,
                axisLine: {
                    show: false,
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
                    width: 1,
                    length: '100%'
                },
                detail: {
                    show: false,
                },
                itemStyle: {
                    color: 'rgba(255, 36, 74,1)',
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
                                        color: '#fff'
                                    },
                                    {
                                        offset: 1,
                                        color: '#fff'
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