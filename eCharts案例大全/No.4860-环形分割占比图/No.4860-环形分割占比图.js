const value = 15;//要显示的占比值
option = {
                backgroundColor: '#1C2A5A',
                grid: {
                    top: '0',
                    left: '0',
                    bottom: '0',
                    right: '0',
                },
                series: [
                    {
                        type: 'gauge',
                        radius: '88%',
                        clockwise: false,
                        startAngle: '90',
                        endAngle: '-269.9999',
                        splitNumber: 20,
                        detail: {
                            offsetCenter: [0, -20],
                            formatter: ' ',
                        },
                        pointer: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: [
                                    [
                                        (!value
                                            ? 0.1
                                            : value < 1
                                            ? 1
                                            : value >= 100
                                            ? 99.99
                                            : value) / 100,
                                        '#3A4988',
                                    ],
                                    [1, '#FCBA00'],
                                ],
                                width: 6,
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                        splitLine: {
                            show: true,
                            length: 6,
                            lineStyle: {
                                color: '#1C2A5A',
                                width: 2,
                            },
                        },
                        axisLabel: {
                            show: false,
                        },
                    },
                    {
                        type: 'pie',
                        name: '内层细圆环',
                        radius: ['96%', '100%'],
                        hoverAnimation: false,
                        clockWise: false,
                        itemStyle: {
                            normal: {
                                color: '#3A4988',
                            },
                        },
                        label: {
                            show: false,
                        },
                        data: [100],
                    },
                ],
            };