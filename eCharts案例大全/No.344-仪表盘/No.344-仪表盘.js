var demoData = [{
    name: '未来15日\n场地预约率',
    unit: '%',
    value: 80,
}];
option = {
    backgroundColor: '#010101',
    series: (function() {
        var result = [];

        demoData.forEach(function(item) {
            result.push({
                name: item.name,
                type: 'gauge',
                radius: '70.10%',
                startAngle: 225,
                endAngle: -45,
                min: 0,
                max: 100,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 20,
                        shadowBlur: 0,
                        color: [
                            [0, 'transparent'],
                            [0.1, '#194383'],
                            [0.108, 'transparent'],
                            [0.2, '#194383'],
                            [0.208, 'transparent'],
                            [0.3, '#194383'],
                            [0.308, 'transparent'],
                            [0.4, '#194383'],
                            [0.408, 'transparent'],
                            [0.5, '#194383'],
                            [0.508, 'transparent'],
                            [0.6, '#194383'],
                            [0.608, 'transparent'],
                            [0.7, '#194383'],
                            [0.708, 'transparent'],
                            [0.8, '#194383'],
                            [0.808, 'transparent'],
                            [0.9, '#194383'],
                            [0.908, 'transparent'],
                            [1, '#194383']
                        ],
                    }
                },
                axisTick: {
                    show: false,
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
                }]
            }, {
                name: item.name,
                type: 'gauge',
                radius: '73.10%',
                startAngle: 225,
                endAngle: -45,
                min: 0,
                max: 100,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 150,
                        color: [
                            [
                                item.value / 100, new echarts.graphic.LinearGradient(
                                    0, 1, 0, 0, [{
                                            offset: 0,
                                            color: 'rgba(69, 161, 255,0)',
                                        }, {
                                            offset: 0.3,
                                            color: 'rgba(69, 161, 255,0)',
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(69, 161, 255,0.7)',
                                        }
                                    ]
                                )
                            ],
                            [
                                1, 'rgba(28,128,245,.0)'
                            ]
                        ],
                    }
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: 0,
                },
                axisLabel: {
                    show: 0
                },
                pointer: {
                    show: false,
                    length: '100%'
                },
                detail: {
                    show: true,
                    offsetCenter: [1, '1%'],
                    textStyle: {
                        fontSize: 10,
                        color: '#0AFCE0'
                    },
                    formatter: [
                        '{value}' + (item.unit || '')
                    ].join('\n'),

                },
                itemStyle: {
                    color: 'rgba(28, 128, 245,.3)',
                    borderColor: 'rgba(28, 128, 245,1)',
                },
                data: [{
                    value: item.value
                }]
            }, {
                type: 'gauge',
                radius: '90%',
                splitNumber: 10,
                splitLine: {
                    show: false
                },
                min: 0,
                max: 100,
                startAngle: 225,
                endAngle: -45,
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false,

                },

                pointer: {
                    show: 0
                },
                axisTick: {
                    show: false
                },
                detail: {
                    show: true,
                    offsetCenter: [0, '50%'],
                    formatter: '未来15日\n场地预约率',
                    textStyle: {
                        fontSize: 10,
                        color: '#ffffff',
                        lineHeight: 50,
                        fontWeight: '100',

                    }



                }
            }, {
                type: 'gauge',
                radius: '73%',
                splitNumber: 10,
                splitLine: {
                    show: false
                },
                min: 0,
                max: 100,
                startAngle: 225,
                endAngle: -45,
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 2,
                        shadowBlur: 0,
                        color: [
                            [0.05, '#3F6BFC'],
                            [0.10, '#4072FB'],
                            [0.15, '#4077F9'],
                            [0.20, '#417BF9'],
                            [0.25, '#4282F8'],
                            [0.30, '#4385F7'],
                            [0.35, '#4389F6'],
                            [0.40, '#448FF5'],
                            [0.45, '#4594F4'],
                            [0.50, '#4599F3'],
                            [0.55, '#469EF2'],
                            [0.60, '#46A3F1'],
                            [0.65, '#46A6F0'],
                            [0.70, '#24befe'],
                            [0.75, '#12d1ff'],
                            [0.80, '#06defe'],
                            [0.85, '#05e0ff'],
                            [0.90, '#06deff'],
                            [0.95, '#06deff'],
                            [1, '#06deff']
                        ],

                    }

                },
                pointer: {
                    show: 0
                },
                axisTick: {
                    show: false
                },
                detail: {
                    show: false
                }

            }, {
                type: 'gauge',
                radius: '82%',
                splitNumber: 10,
                splitLine: {
                    show: false
                },
                min: 0,
                max: 100,
                startAngle: 225,
                endAngle: -45,
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 2,
                        shadowBlur: 0,
                        color: [
                            [0.05, '#0A498E'],
                            [0.10, '#0C58A7'],
                            [0.15, '#254DD3'],
                            [0.20, '#355FEC'],
                            [0.25, '#4072FB'],
                            [0.30, '#355FEC'],
                            [0.35, '#254DD3'],
                            [0.40, '#06478B'],
                            [0.45, '#0A246C'],
                            [0.50, '#071848'],
                            [0.55, '#071848'],
                            [0.60, '#0A246C'],
                            [0.65, '#06478B'],
                            [0.70, '#254DD3'],
                            [0.75, '#355FEC'],
                            [0.80, '#355FEC'],
                            [0.85, '#254DD3'],
                            [0.90, '#0C58A7'],
                            [0.95, '#0A498E'],
                            [1, '#0A498E']
                        ],

                    }

                },
                pointer: {
                    show: 0
                },
                axisTick: {
                    show: false
                },
                detail: {
                    show: false
                }

            }, );
        });

        return result;
    })()
};