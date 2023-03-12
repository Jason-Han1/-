option = {
    backgroundColor: '#000',
    series: [{
            type: 'gauge',
            name: '',
            radius: '52.3%',
            startAngle: '50',
            endAngle: '500',
            splitNumber: '110',
            pointer: {
                show: false
            },
            title: {
                show: false
            },
            detail: {
                show: false
            },
            data: [{
                value: 100,
                name: ''
            }],
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 1,
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: 'rgba(213, 2, 138,.9)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(66, 128, 213,.9)'
                            }
                        ]
                    ),
                    width: 1500,
                },
            },
            axisLabel: {
                show: false
            }
        },

        {
            name: 'pie',
            type: 'pie',
            clockWise: true,
            startAngle: 90,
            radius: ['52%', '48%'],
            hoverAnimation: false,
            center: ['50%', '50%'],
            data: [{
                    value: 5,
                    label: {
                        normal: {
                            formatter: '{d}%',
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '35',
                                fontWeight: 'normal',
                                color: '#fff'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#CD0074',
                        }
                    }
                },
                {
                    value: 5,
                    name: '',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255, 255, 255,.7)',
                        },
                        emphasis: {
                            color: 'rgba(44,59,70,1)'
                        }
                    }
                }
            ]
        }
    ]
};