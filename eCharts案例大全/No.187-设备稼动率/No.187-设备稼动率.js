var demoData = [{
    name: 'CNC-1',
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
                        shadowBlur: 10,
                        color: [
                            [0, 'transparent'],
                            [0.1, '#0894f6'],
                            [0.11, 'transparent'],
                            [0.2, '#0894f6'],
                            [0.21, 'transparent'],
                            [0.3, '#0894f6'],
                            [0.31, 'transparent'],
                            [0.4, '#0894f6'],
                            [0.41, 'transparent'],
                            [0.5, '#0894f6'],
                            [0.51, 'transparent'],
                            [0.6, '#0894f6'],
                            [0.61, 'transparent'],
                            [0.7, '#0894f6'],
                            [0.71, 'transparent'],
                            [0.8, '#fd0001'],
                            [0.81, 'transparent'],
                            [0.9, '#fd0001'],
                            [0.91, 'transparent'],
                            [1, '#fd0001']
                        ]
                    }
                },
                axisLabel: {
                    formatter: function(e) {
                        switch (e + "") {
                            case "20":
                                return "较小";
                            case "80":
                                return "较大";
                            default:
                                return e;
                        }
                    },
                    textStyle: {
                        fontSize: 12,
                        fontWeight: ""
                    }
                },
                splitLine: {
                    length: 20,
                    lineStyle: {
                        color: 'auto'
                    }
                },
                axisTick: {
                    length: 10,
                    lineStyle: {
                        color: 'auto'
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