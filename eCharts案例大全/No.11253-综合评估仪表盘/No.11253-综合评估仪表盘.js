option = {
    backgroundColor: '#fff',

    series: [{
            type: 'gauge',
            radius: '60%',
            startAngle: '215',
            endAngle: '-35',
            splitNumber: 50,
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
                        [0, '#7691FA'],
                        [52 / 100, `red`],
                        [1, '#e9e9e9']
                    ],
                    width: 45
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 45,
                lineStyle: {
                    color: '#fff',
                    width: 6
                }
            },
            axisLabel: {
                show: false
            }
        },
        {
            type: 'gauge',
            radius: '48%',
            startAngle: '212',
            endAngle: '-32',
            splitNumber: 45,
            pointer: {
                show: false
            },
            detail: {
                offsetCenter: [0, -5],
                formatter: `{a|综合评估}\n{b|${
                            52
                        }}\n{x|较差}\n`,
                rich: {
                    a: {
                        color: '#404346',
                        lineHeight: 35,
                        fontSize: 22,
                        fontWeight: 550
                    },
                    b: {
                        color: 'red',
                        fontSize: 32,
                        fontWeight: 550,
                        padding: [10, 0, 10, 0]
                    },
                    x: {
                        fontSize: 18,
                        color: 'red'
                    },
                    f: {
                        fontSize: 14,
                        color: '#404346',
                        width: 80
                    }
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: [
                        [0, '#e9e9e9'],
                        [1, '#e9e9e9']
                    ],
                    width: 8
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 8,
                lineStyle: {
                    color: '#fff',
                    width: 5
                }
            },
            axisLabel: {
                show: false
            }
        }
    ]
};