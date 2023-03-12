option = {
    backgroundColor: '#111',
    polar: {
        radius: ['42%', '52%'],
        center: ['50%', '50%'],
    },
    angleAxis: {
        max: 100,
        startAngle: -110,
        clockwise:true,
        show: false,
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    series: [{
            name: '',
            type: 'bar',
            roundCap: true,
            startAngle: 120,
            barWidth: 90,
            showBackground: false,
            backgroundStyle: {
                color: 'rgba(66, 66, 66, .3)',
            },
            data: [50],
            coordinateSystem: 'polar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: 'rgba(198, 231, 253, 0)',
                        },
                        {
                            offset: 0.1,
                            color: 'rgba(198, 231, 253, 0.2)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(1, 142, 251, 1)',
                        },
                    ]),
                   shadowBlur: 30,
                   shadowColor:'rgba(1, 142, 251, 1)'
                },
            },
        }
    ],

};