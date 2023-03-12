let value = 20.6666;
let title = '%';
let int = value.toFixed(2).split('.')[0];
let float = value.toFixed(2).split('.')[1];

option = {
    backgroundColor: '#02112a',
    title: {
        text: '{a|' + int + '}{b|.' + float + '}{c|' + title + '}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                a: {
                    fontSize: 48,
                    color: '#65d3ff',
                },
                b: {
                    fontSize: 48,
                    color: '#65d3ff',
                    // padding: [0,0,14,0]
                },
                c: {
                    fontSize: 30,
                    color: '#65d3ff',
                    padding: [5, 0, 0, 0],
                },
            },
        },
    },
    series: [
        {
            type: 'gauge',
            radius: '60%',
            clockwise: true,
            startAngle: '90',
            endAngle: '-270',
            splitNumber: 10,
            detail: {
                offsetCenter: [0, -20],
                formatter: ' ',
            },
            pointer: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [value / 100, '#23b9ff'],
                        [1, 'rgb(3,89,130)'],
                    ],
                    width: 30,
                    shadowColor: '#23b9ff',
                    shadowBlur: 10,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                length: 32,
                lineStyle: {
                    color: 'white',
                    width: 6,
                },
            },
            axisLabel: {
                show: false,
            },
        },
        {
            type: 'pie',
            name: '内层细圆环',
            radius: ['43%', '45%'],
            hoverAnimation: true,
            clockWise: false,
            itemStyle: {
                normal: {
                    color: '#84c1e0',
                },
            },
            label: {
                show: false,
            },
            data: [100],
        },
    ],
};

