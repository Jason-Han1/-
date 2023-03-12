const payload = { id: 'dash-board', data: { data: '91' } };

const colors = ['#e00005', '#e6a900', '#00c05a']
const colorObj = {
    green: '#15e267',
    yellow: '#e9c916',
    red: '#f2200d'
}
const fontColor = '#0089fa'
const percent = payload.data.data || 0

data = [percent, 100 - percent]
option = {
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(9, 30, 60, 0.6)',
        extraCssText: 'box-shadow: 0 0 8px rgba(0, 128, 255, 0.27) inset;',
        borderWidth: 0,
        confine: false,
        appendToBody: true,
        textStyle: {
            color: '#fff',
            fontSize: 10
        },
        // 轴触发提示才有效
        axisPointer: {
            type: 'shadow'
        },
        shadowStyle: {
            color: 'rgba(157, 168, 245, 0.1)'
        },
        formatter(data) {
            if (data.componentSubType === "pie" && data.name) {
                return data.name
            }
        }
    },
    series: [
        {
            type: 'gauge',
            name: '外层辅助',
            radius: '98%',
            silent: false,
            pointer: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [[1, '#0a80d5']],
                    width: 2,
                    opacity: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 10,
                lineStyle: {
                    color: '#051932',
                    width: 0,
                    type: 'solid'
                }
            },
            axisLabel: {
                show: false
            }
        },
        {
            type: 'gauge',
            name: '外层辅助',
            radius: '86%',
            silent: false,
            pointer: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [[1, '#0a80d5']],
                    width: 2,
                    opacity: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 10,
                lineStyle: {
                    color: '#051932',
                    width: 0,
                    type: 'solid'
                }
            },
            axisLabel: {
                show: false
            }
        },
        {
            name: '内部阴影',
            type: 'gauge',
            radius: '70%',
            center: ['50%', '50%'],
            z: 4,
            splitNumber: 10,
            startAngle: 225,
            endAngle: -45,
            axisLine: {
                lineStyle: {
                    color: [
                        [
                            percent / 100,
                            new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(145,207,255,0)',
                                },
                                {
                                    offset: 0.5,
                                    color: 'rgba(145,207,255,0.2)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(145,207,255,0.5)',
                                },
                            ]),
                        ],
                        [1, 'rgba(28,128,245,.0)'],
                    ],
                    width: 300,
                },
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: false,
            },
            detail: {
                show: false
            },
            title: {
                //标题
                show: false,
            },
            data: [
                {
                    name: 'title',
                    value: percent,
                },
            ],
            pointer: {
                show: false,
            },
        },
        {
            name: '内层数据刻度',
            type: 'gauge',
            radius: '80%',
            min: 0,
            max: 100,
            center: ['50%', '50%'],
            axisLine: {
                lineStyle: {
                    width: 8,
                    color: [
                        [0.1, colors[0]],
                        [
                            0.3,
                            new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: colors[0]
                                },
                                {
                                    offset: 0.8,
                                    color: colors[1]
                                }
                            ])
                        ],
                        [0.7, colors[1]],
                        [
                            0.9,
                            new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: colors[2]
                                },
                                {
                                    offset: 0.6,
                                    color: colors[1]
                                }
                            ])
                        ],
                        [1, colors[2]]
                    ]
                }
            },
            splitLine: {
                length: 8,
                distance: -8,
                lineStyle: {
                    width: 2,
                    color: '#051932'
                }
            },
            axisTick: {
                distance: -18,
                splitNumber: 5,
                lineStyle: {
                    width: 1,
                    color: '#0a80d5'
                }
            },
            axisLabel: {
                color: fontColor,
                distance: 10,
                fontSize: 10,
                formatter: params => {
                    if (params === 0 || params === 100) return params
                }
            },
            detail: {
                show: false
            },
            itemStyle: {
                color: colorObj[payload.data.color]
            },
            data: [
                {
                    value: percent,
                    name: ''
                }
            ],
            silent: true,
            title: {
                show: false
            },
            pointer: {
                
            }
        },
        {
            name: '',
            type: 'pie',
            radius: ['70%', '80%'],
            startAngle: 225,
            minAngle: 8,
            emphasis: {
                scale: false
            },
            label: {
                show: false
            },
            data: [{
                name: '及格',
                value: 189,
                itemStyle: {
                    color: 'rgba(255, 255, 255, 0.01)'
                }
            }, {
                name: '良好',
                value: 54,
                itemStyle: {
                    color: 'rgba(255, 255, 255, 0.01)'
                }
            }, {
                name: '优秀',
                value: 27,
                itemStyle: {
                    color: 'rgba(255, 255, 255, 0.01)'
                }
            }, {
                name: '',
                value: 90,
                itemStyle: {
                    color: 'rgba(255, 255, 255, 0.01)'
                }
            }],
        }
    ]
}