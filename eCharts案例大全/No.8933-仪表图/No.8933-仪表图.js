option = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    //仪表盘起始角度。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
    series: [{
            radius: '83%',
            startAngle: 180,
            endAngle: 0,
            type: 'gauge',
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            detail: {
                show: false
            },
            pointer: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                   type: 'dashed',
                    color: [
                        [1, '#c23531']
                    ]
                }
            }
        },
        {
            radius: '70%',
            startAngle: 180,
            endAngle: 0,
            type: 'gauge',
            splitLine: {
                show: true,
                length: 5,

                lineStyle: {
                    color: 'black',
                }
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            detail: {
                show: false
            },
            pointer: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    width: 2,
                    type: 'dashed',
                    color: [
                        [0.2, '#91c7ae'],
                        [0.8, '#63869e'],
                        [1, '#c23531']
                    ]
                    //   color: 'pink', 
                }
            }
        },
        {
            name: '业务指标',
            type: 'gauge',
            detail: {
                formatter: '{value}%',
                offsetCenter: [0, '-50%']
            },
            data: [{
                value: 60,
                name: '完成率'
            }],
            radius: '80%',
            startAngle: 180,
            endAngle: 0,
            splitLine: {
                show: false,
            },
             itemStyle: {
                    color: 'teal'
                },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 30,
                    color: [
                        [
                            0.9, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#5c53de'
                                    },
                                    {
                                        offset: 1,
                                        color: '#18c8ff'
                                    }
                                ]
                            )
                        ],
                        [
                            1, '#413e54'
                        ]
                    ]
                }
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            pointer: {
                length: '90%',

            },
            title: {
                show: true,
                offsetCenter: [0, '-2%'], // x, y，单位px
                textStyle: {
                    color: 'auto',
                    fontSize: 20
                }
            },

        }
    ]
};
myChart.setOption(option, true);