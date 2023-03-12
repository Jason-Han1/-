let value = 55.33;
let title = '%';

option = {
    backgroundColor: '#171b24',
    title: {
        text: '{a|' + value + '}{c|' + title + '}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                a: {
                    fontSize: 50,
                    fontWeight: 700,
                    color: '#579ff9'
                },
                c: {
                    fontSize: 40,
                    color: '#579ff9',
                    fontWeight: 500,
                    padding: [5, 0]
                }
            }
        }
    },
    series: [{
            type: 'gauge',
            startAngle: 270,
            endAngle: -89.9999,
            center: ['50%', '50%'],
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            radius: '70%',
            splitNumber: '52',
            axisLine: {
                show: false,
                lineStyle: {
                    color: [
                        [1, '#1755ff']
                    ],
                    width: 20
                }
            },
            splitLine: {
                length: 15,
                lineStyle: {
                    width: 2,
                    color: '#1755ff',
                    distance: 10,
                } //刻度节点线
            },
            detail: {
                show: false
            },
        },
        {
            type: 'gauge',
            radius: '60%',
            clockwise: true,
            startAngle: '90',
            endAngle: '-269.9999',
            splitNumber: 25,
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
                        [0, '#1452ff'],
                        [52 / 100, '#65b4ff'],
                        [1, '#1654ff']
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
                    color: '#051F54',
                    width: 6
                }
            },
            axisLabel: {
                show: false
            }
        },
        {
            type: 'pie',
            name: '内层细圆环',
            radius: ['43%', '45%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    color: '#0C355E'
                }
            },
            label: {
                show: false
            },
            data: [100]
        }

    ]
};