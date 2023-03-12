option = {
    backgroundColor:"#010f26",
    series: [{
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
                        [1, '#1AF7E4'],
                    ],
                    width: 4,
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
            radius: '76%',
            center: ['50%', '50%'],
            axisLine: {
                lineStyle: {
                    width: 10,
                    color: [
                        [0.8, new echarts.graphic.LinearGradient(
                            0, 1, 0, 0, [{
                                offset: 0,
                                color: '#123AFB'
                            }]
                        )],
                        // [0.9, new echarts.graphic.LinearGradient(
                        //     0, 1, 0, 0,
                        //     [{
                        //         offset: 0,
                        //         color: '#3BD671'
                        //     }, {
                        //         offset: 0.6,
                        //         color: '#3BD671'
                        //     }]
                        // )],
                        [1, '#3BD671']
                    ],
                }
            },
            splitLine: {
                length: 10,
                lineStyle: {
                    width: 2,
                    color: 'none'
                }
            },
            axisTick: {
                lineStyle: {
                    width: 1,
                    color: '#ffffff'
                }
            },
            axisLabel: {
                color: 'rgb(0,191,255)',
                distance: 5,
                fontSize: 10,
            },
            detail: {
                show: true,
                offsetCenter: ['0', '84%'],
                formatter: 99.78 + '%',
                fontSize: 36,
                fontFamily: 'SF Digital Readout Heavy',
                color: '#B1CBDF'
            },
            itemStyle: {
                normal: {
                    color: '#FFFFFF'
                }
            },
            pointer: {
                width: 2,
                length: '45%'
            },
            data: [{
                value: 99.78
            }],
            silent: false
        },

    ]
};