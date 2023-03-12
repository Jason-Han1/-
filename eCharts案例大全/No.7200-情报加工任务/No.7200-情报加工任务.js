let value = 7;
let title = '工作任务';
let int = value.toFixed(2).split('.')[0];
let float = value.toFixed(2).split('.')[1];

option = {
    backgroundColor: '#081528',
    title: {
        text: title,
        x: 'center',
        y:'40%',
        textStyle: {
            color: '#fff',
            fontSize: 40,
            rich: {
                a: {
                    fontSize: 12,
                    color: '#29EEF3'
                },
                b: {
                    fontSize: 12,
                    color: '#29EEF3',
                    padding: [0, 0, 14, 0]
                },
                c: {
                    fontSize: 12,
                    color: '#ffffff',
                    padding: [5, 0]
                },
                num: {
                    fontSize: 12,
                    color: '#ffffff',
                    padding: [5, 0]
                }
            }
        }
    },
    series: [{
            type: 'gauge',
            radius: '73%',
            clockwise: false,
            startAngle: '70',
            endAngle: '-269.9999',
            splitNumber: 22,
            detail: {
                offsetCenter: [0, -20],
                formatter: ' '
            },
            pointer: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [0, '#2CFAFC'],
                        [52 / 100, new echarts.graphic.RadialGradient(1, 0, 1, [{
                                offset: 0,
                                color: '#ffc500'
                            },
                            {
                                offset: .5,
                                // color: '#1E2B57'
                                color: '#ffe53a'
                            },
                            {
                                offset: 1,
                                color: '#feef4c',
                                // color:'rgba(17,24,43,0)'
                            }
                        ], false)],
                        [1, 'rgba(32,187,252,0.15)']
                    ],
                    width: 30
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 32,
                lineStyle: {
                    color: '#071427',
                    width: 2
                }
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: true,
                offsetCenter: [15, '120%'],
                color: '#fff',
                formatter: function(params) {
                    return '近7天工作任务情况'
                },
                textStyle: {
                    fontSize: 34
                }
            }
        },
        {
            type: 'pie',
            name: '成功：',
            radius: ['54%', '55%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    color: '#e8c561'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    padding: [60, 45, 0, 40],
                    align: 'center',
                    width: 70,
                    height: 50,
                    lineHeight: 14, // 控制\n的行高
                    fontSize: 34,
                    formatter: function(param) {
                        return '{a| ' + param.seriesName + '}' + '{b|' + 7 + '}';
                    },
                    rich: {
                        a: {
                            fontSize: 30,
                            color: '#fff',
                            lineHeight: 23,
                        },
                        b: {
                            fontSize: 30,
                            color: '#ffe900',
                            lineHeight: 23,
                        }
                    }
                },
            },
            data: [3]
        },
        {
            type: 'pie',
            name: '失败：',
            radius: [0, '50.5%'],
            data: [3],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    color: '#041b2d'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    padding: [180, 45, 0, 40],
                    align: 'center',
                    width: 70,
                    height: 50,
                    lineHeight: 14, // 控制\n的行高
                    fontSize: 30,
                    formatter: function(param) {
                        return '{a| ' + param.seriesName + '}' + '{b|' + 3 + '}';
                    },
                    rich: {
                        a: {
                            fontSize: 30,
                            color: '#fff',
                            lineHeight: 23,
                        },
                        b: {
                            fontSize: 30,
                            color: '#e92438',
                            lineHeight: 23,
                        }
                    }
                },
            },

        }
    ]
};