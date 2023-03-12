var axisTickLength = 35 //刻度线宽度
var value = Math.floor(Math.random() * 100)
var colorRegionRate = (value / 100).toFixed(2)

var index = (value >= 80 ? 0 : (value > 30 ? 1 : 2))
var startColor = ['#f56c6c', '#34da62', '#fed95f'][index]
var endColor = ['#f44444', '#14a661', '#ff8e02'][index]

option = {
    title: {
        text: '仪表盘刻度线渐变',
         textStyle: {
            color: '#b1977d'
        }
    },
    backgroundColor: "#353c60",

    series: [{
            type: 'gauge',
            name: '外层半透明边框圈',
            radius: '80%',
            startAngle: '225',
            endAngle: '-45',
            splitNumber: '100',
            pointer: {
                show: false
            },
            detail: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [1, 'rgba(255,255,255,0.1)']
                    ],
                    width: 8,
                    opacity: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false
            }
        },
        {
            type: 'gauge',
            name: '第二层',
            radius: '76%',
            startAngle: '225',
            endAngle: '-45',
            splitNumber: 4,
            pointer: {
                show: true,
                length: '53%'
            },
            // 仪表盘指针样式。
            itemStyle: {
                color: '#f6fefe'
            },
            data: [{
                value: value,
                name: '警押比'
            }],
            title: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        // 有数值的部分
                        [colorRegionRate, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: startColor // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: endColor // 100% 处的颜色
                            }
                        ])],
                        // 底色
                        [1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: 'rgba(255,255,255,0.1)' // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(255,255,255,0.1)' // 100% 处的颜色
                            }
                        ])]
                    ],
                    width: 50,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            detail: {
                show: false
            },
            axisLabel: {
                show: false,
            },
            animationDuration: 2000,
        },
        {
            name: '第三层渐变圈',
            type: 'gauge',
            radius: '60%',
            startAngle: '225',
            endAngle: '-45',
            splitNumber: 4,
            pointer: {
                show: false
            },
            data: [{
                value: value,
                name: '警押比'
            }],

            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        // 有数值的部分
                        [colorRegionRate, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: startColor // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: endColor // 100% 处的颜色
                            }
                        ])],
                        // 底色
                        [1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: 'rgba(255,255,255,0.1)' // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(255,255,255,0.1)' // 100% 处的颜色
                            }
                        ])]
                    ],
                    width: axisTickLength, // 刻度线宽度
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
            },
            // 仪表盘指针样式。
            itemStyle: {
                color: '#f6fefe'
            },
            title: {
                show: false,
            },
            detail: {
                show: false
            },
            axisLabel: {
                show: false,
            },
            animationDuration: 2000,
        },
        {
            name: '与div背景色相同模拟axisTick',
            type: 'gauge',
            radius: '60%',
            startAngle: '225',
            endAngle: '-45',
            splitNumber: 1,
            pointer: {
                show: false
            },
            title: {
                show: false,
            },
            detail: {
                show: true,
                offsetCenter: [0, '80%'],
                formatter: (value) => {
                    return [
                        `{a|${value}}{b|%}`,
                        `{c|总警押比${value >= 80 ? '较高' : (value > 20 ? '正常' : '较低')}}`
                    ].join('\n')
                },
                rich: {
                    a: {
                        color: '#DFE3F5',
                        fontWeight: 600,
                        fontSize: 36,
                    },
                    b: {
                        color: '#DFE3F5',
                        fontWeight: 600,
                        fontSize: 26,
                    },
                    c: {
                        color: '#DFE3F5',
                        fontWeight: 600,
                        fontSize: 26,
                    },
                }
            },
            data: [{
                value: value,
                name: '警押比'
            }],
            axisLine: {
                show: false,
                lineStyle: {
                    width: 1,
                    opacity: 0
                }
            },
            axisTick: {
                show: true,
                splitNumber: 120,
                length: axisTickLength, // 刻度线宽度
                lineStyle: {
                    // 与div背景色相同
                    color: '#353c60',
                    width: 5,
                }
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false
            }
        },
    ]
};