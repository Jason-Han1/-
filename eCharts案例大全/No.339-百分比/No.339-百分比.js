option = {
    title: {
        text: '{a|0.00%}\n{b|统计总数 0}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich:{
                a: {
                    fontSize: 48,
                    color: '#748AA1'
                },
                b: {
                    fontSize: 20,
                    color: '#748AA1',
                    padding: [5,0]
                }
            }
        }
    },
    series: [
        {
            type: 'gauge',
            radius: '90%',
            clockwise: false,
            startAngle: '90',
            endAngle: '-269.9999',
            splitNumber: 20,
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
                        [0, '#29CB97'],
                        [1 - 0.01 / 100, '#29CB97'],
                        [1, 'rgba(32,187,252,0.15)']
                    ],
                    width: '50'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 50,
                lineStyle: {
                    color: '#ffffff',
                    opacity: 1,
                    width: 8
                }
            },
            axisLabel: {
                show: false
            }
        },
    ]
};
console.log(JSON.stringify(option))