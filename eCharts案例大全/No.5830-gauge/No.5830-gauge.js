let value = 502.8;
let title = '总数';

option = {
    // backgroundColor: '#020f18',
    label: {
        show: true,
    },
    title: {
        text: '{a|' + value + '}{b|' + 'w' + '}\n{c|' + title + '}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                a: {
                    fontSize: 52,
                    color: '#fff',
                    fontWeight: '800',
                },
                b: {
                    fontSize: 20,
                    color: '#fff',
                    padding: [0, 0, 14, 0]
                },
                c: {
                    fontSize: 28,
                    color: '#fff',
                    padding: [16, 0]
                }
            }
        }
    },
    series: [{
            type: 'pie',
            radius: ['65%', '75%'],
            hoverAnimation: false,
            clockWise: false,
            label: {
                show: true
            },
            data: [{
                value: 52,
                itemStyle: {
                    normal: {
                        color: '#FE2C60',
                    }
                }
            },
            {
                value: 63,
                itemStyle: {
                    normal: {
                        color: '#FEC638',
                    }
                }
            },],
            zlevel: 1
        },
        {
            type: 'gauge',
            radius: '75%',
            clockwise: false,
            startAngle: '90',
            endAngle: '-269.9999',
            splitNumber: 100,
            detail: {
                offsetCenter: [0, -2],
                formatter: ' '
            },
            pointer: {
                show: false
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 45,
                lineStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 255, 255, 1)',
                    shadowOffsetY: '0',
                    color: '#20A08D',
                    width: 2
                }
            },
            axisLabel: {
                show: false
            },
            zlevel: 2
        },


    ]
};