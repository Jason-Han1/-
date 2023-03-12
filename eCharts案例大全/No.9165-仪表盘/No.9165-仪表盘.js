option = {
    series: [
        {
            type: 'gauge',
            name: '外层辅助',
            radius: '86%',
            startAngle: '225',
            endAngle: '-45',
            splitNumber: '120',
            pointer: {
                show: false
            },
            detail: {
                show: false,
            },
            data: [{
                value: 1
            }],
            // data: [{value: 1, name: 90}],
            title: {
                show: true,
                offsetCenter: [0, 30],
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 20,
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [1, 'rgb(0,191,255)'],
                    ],
                    width: 8,
                    opacity: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                    color: '#051932',
                    width: 0,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: false
            }
        },
        {
            name: '内层数据刻度',
            type: 'gauge',
            radius: '80%',
            center: ['50%', '50%'],
            axisLine: {
                lineStyle: {
                    width: 50,
                    color: [
                        [0, 'rgb(228,93,11)'],
                        [0.5, new echarts.graphic.LinearGradient(
                            0, 1, 0, 0,
                            [{
                                offset: 0,
                                color: 'rgb(228,93,11)'
                            }, {
                                offset: 0.8,
                                color: 'rgb(235,205,6)'
                            }]
                        )],
                        [0.9, new echarts.graphic.LinearGradient(
                            0, 1, 0, 0,
                            [{
                                offset: 0,
                                color: 'rgb(13,211,97)'
                            }, {
                                offset: 0.6,
                                color: 'rgb(235,205,6)'
                            }]
                        )],
                        [1, 'rgb(13,211,97)']
                    ],
                }
            },
            splitLine: {
                length: 25,
                lineStyle: {
                    width: 5,
                    color: '#ffffff'
                }
            },
            axisTick: {
                lineStyle: {
                    width: 2,
                    color: '#ffffff'
                }
            },
            axisLabel: {
                color: 'rgb(0,191,255)',
                distance: 50,
                fontSize: 30,
            },
            detail: {
                show: true,
                offsetCenter: ['0','80%'],
                fontSize: 50,
                color: 'rgb(0,191,255)'
            },
            itemStyle: {
                normal: {
                    color: 'rgb(0,191,255)'
                }
            },
            pointer: {
                width: 12,
                length: '95%'
            },
            data: [{
                value: 10
            }],
            silent: false
        },
        {
            name: '最内层线',
            type: 'gauge',
            radius: '30%',
            center: ['50%', '50%'],
            startAngle: 360,
            endAngle: 0,
            axisLine: {
                show: false,
                lineStyle: {
                    opacity: 0,
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    opacity: 0
                }
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                length: 2,
                lineStyle: {
                    color: '#00b3ff',
                    width: 3,
                    type: 'solid'
                }
            },
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        }
    ]
};