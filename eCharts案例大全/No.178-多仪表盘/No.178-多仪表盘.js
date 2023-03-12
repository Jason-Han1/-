var demoData = [
    { name: 'CNC-1', value: 220, unit: '', pos: ['16.6%', '25%'] },
    { name: 'CNC-2', value: 32, unit: '', pos: ['49.8%', '25%'] },
    { name: 'CNC-3', value: 0.9, pos: ['83%', '25%'] },
    { name: 'CNC-4', value: 6.34, unit: '', pos: ['16.6%', '75%'] },
    { name: 'CNC-5', value: 6.28, unit: '', pos: ['49.8%', '75%'] },
    { name: 'CNC-6', value: 50, unit: '', pos: ['83%', '75%'] },
];
option = {
    backgroundColor: '#222939',
    series: (function () {
        var result = [];
        demoData.forEach(function (item) {
            result.push(
                {
                    name: item.name,
                    type: 'gauge',
                    center: item.pos,
                    radius: '42%',
                    startAngle: 225,
                    endAngle: -45,
                    min: 0,
                    max: 100,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 4,
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
                                [1, '#fd0001'],
                            ],
                        },
                    },
                    axisTick: {
                        show: 0,
                    },
                    splitLine: {
                        show: 0,
                    },
                    axisLabel: {
                        show: 0,
                    },
                    pointer: {
                        show: false,
                    },
                    detail: {
                        show: false,
                    },
                    data: [
                        {
                            show: false,
                        },
                    ],
                },
                {
                    name: item.name,
                    center: item.pos,
                    type: 'gauge',
                    radius: '31%',
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
                                    item.value / 100,
                                    new echarts.graphic.LinearGradient(0, 1, 1, 0, [
                                        {
                                            offset: 0,
                                            color: 'rgba(255, 36, 74,0)',
                                        },
                                        {
                                            offset: 0.3,
                                            color: 'rgba(255, 36, 74,0)',
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(255, 36, 74,1)',
                                        },
                                    ]),
                                ],
                                [1, 'rgba(255,255,255,.0)'],
                            ],
                        },
                    },
                    axisTick: {
                        show: 0,
                    },
                    splitLine: {
                        show: 0,
                    },
                    axisLabel: {
                        show: 0,
                    },
                    pointer: {
                        show: true,
                        length: '100%',
                    },
                    detail: {
                        show: true,
                        offsetCenter: [0, '70%'],
                        textStyle: {
                            fontSize: 24,
                            color: '#ff244a',
                        },
                        formatter: ['{value}' + (item.unit || ''), '{name|' + item.name + '}'].join('\n'),
                        rich: {
                            name: {
                                fontSize: 20,
                                lineHeight: 60,
                                color: '#fff',
                                fontWeight: '100',
                            },
                        },
                    },
                    itemStyle: {
                        color: 'rgba(255, 36, 74,.3)',
                        borderColor: 'rgba(255, 36, 74,1)',
                    },
                    data: [
                        {
                            value: item.value,
                        },
                    ],
                },
                {
                    type: 'gauge',
                    radius: '40%',
                    center: item.pos,
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
                                [
                                    1,
                                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                        {
                                            offset: 0,
                                            color: '#747474',
                                        },
                                        {
                                            offset: 1,
                                            color: '#747474',
                                        },
                                    ]),
                                ],
                            ],
                        },
                    },
                    axisLabel: {
                        distance: 6,
                        textStyle: {
                            color: '#fff',
                            fontSize: '14',
                        },
                    },
                    splitLine: {
                        show: true,
                        length: 16,
                        lineStyle: {
                            color: '#fff',
                        },
                    },
                    pointer: {
                        show: 0,
                    },
                    detail: {
                        show: 0,
                    },
                }
            );
        });
        return result;
    })(),
};
