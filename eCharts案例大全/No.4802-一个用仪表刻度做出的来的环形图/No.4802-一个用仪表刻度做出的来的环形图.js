
let percent=0.6;
let title = '超期率';
let value=30;
let unit="个";
let area=30.2;
let color="rgb(0,212,238,";
option = {
    backgroundColor: '#051F54',
    title: {
        text:`{a|${value}}{b|${unit}}\n{c|面积：${area}万m²}`,
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                a: {
                    fontSize: 48,
                    color: color+'1)'
                },
                b: {
                    fontSize: 20,
                   color: color+'1)',
                    padding: [0, 0, 14, 0]
                },
                c: {
                    fontSize: 20,
                    color: color+'1)',
                    padding: [5, 0]
                }
            }
        }
    },
    series: [{
            type: 'gauge',
            radius: '50%',
            clockwise: true,
            startAngle: '90',
            endAngle: '-269.9999',
            splitNumber: 360,
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
                        [0, color+'1)'],
                        [percent, color+'1)'],
                        [1, color+'.15)'],
                    ],
                    width: 60
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 100,
                lineStyle: {
                    color: '#051F54',
                    width: 6
                }
            },
            axisLabel: {
                show: false
            }
        },


    ]
};