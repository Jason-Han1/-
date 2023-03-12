let value = 50;
let title = '学习进度';
let int = value.toFixed(2).split('.')[0];

option = {
    backgroundColor: '#f7f8fc',
    title: {
        text: '{a|' + int + '%' + '}\n{b|' + title + '}',
        x: 'center',
        y: '40%',
        textStyle: {
            rich: {
                a: {
                    fontSize:110,
                    color: '#374567'
                },

                b: {
                    fontSize:38,
                    color: '#374567',
                    padding: [24, 0]
                }
            }
        }
    },
    series: [{
            type: 'gauge',
            radius: '60%',
            clockwise: false,
            startAngle: '90',
            endAngle: '-269.9999',
            splitNumber: 12,
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
                        [0, '#3860f4'],
                        [17 / 34, '#5f729d'],
                        [1, '#3860f4']
                    ],
                    width: 20
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 32,
                lineStyle: {
                    color: '#f7f8fc',
                    width: 5
                }
            },
            axisLabel: {
                show: false
            }
        },

    ]
};