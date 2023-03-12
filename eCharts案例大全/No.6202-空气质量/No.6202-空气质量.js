option = {
    backgroundColor:"#fff",
    series: [
        {
            type: 'gauge',
            name: '外层辅助',
            radius: '86%',
            startAngle: '180',
            endAngle: '0',
            //splitNumber: '120',
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
                    width: 5,
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
            startAngle: '180',
            endAngle: '0',
            radius: '79%',
            min: 0,
            max: 500,
            center: ['50%', '50%'],
            axisLine: {
                lineStyle: {
                    width: 30,
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
                distance: 10,
                fontSize: 10,
            },
            detail: {
                show: true,
                offsetCenter: ['0','-20%'],
                fontSize: 10,
                color: 'rgb(0,191,255)'
            },
            itemStyle: {
                normal: {
                    color: 'rgb(0,191,255)'
                }
            },
            pointer: {
                width: 5,
                length: '90%'
            },
            data: [{
                value: 55
            }],
            silent: false
        },
        {
            name: '最内层线',
            type: 'gauge',
            radius: '30%',
            center: ['50%', '50%'],
            startAngle: 180,
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