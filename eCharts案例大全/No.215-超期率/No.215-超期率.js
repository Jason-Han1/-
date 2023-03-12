let value = 55.33;
let title = '超期率';
let int = value.toFixed(2).split('.')[0];
let float = value.toFixed(2).split('.')[1];

option = {
    backgroundColor: '#051F54',
    title: {
        text: '{a|'+ int +'}{b|.'+ float +'}\n{c|'+ title +'}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich:{
                a: {
                    fontSize: 48,
                    color: '#29EEF3'
                },
                b: {
                    fontSize: 20,
                    color: '#29EEF3',
                    padding: [0,0,14,0]
                },
                c: {
                    fontSize: 20,
                    color: '#ffffff',
                    padding: [5,0]
                }
            }
        }
    },
    series: [
        {
            type: 'gauge',
            radius: '60%',
            clockwise: false,
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
                        [0, '#2CFAFC'],
                        [52 / 100, '#1DE2A4'],
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
        },
        {
            type: 'pie',
            name: '内层环',
            radius: [0, '43%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    color: '#02163F'
                }
            },
            label: {
                show: false
            },
            data: [100]
        }
    ]
};