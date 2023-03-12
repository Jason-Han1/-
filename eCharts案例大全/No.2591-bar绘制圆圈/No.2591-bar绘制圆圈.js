option = {
    backgroundColor: '#1f1e26',
    polar: {
        radius: ['51%', '47%'],
        center: ['50%', '50%'],
    },
    angleAxis: {
        max: 100,
        show: false,
        startAngle: 0,
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
            show: false
        },
    },
    series: [{
            name: '',
            type: 'bar',
            roundCap: true,
            barWidth: 60,
            showBackground: true,
            backgroundStyle: {
                color: '#464451',
            },
            data: [75],
            coordinateSystem: 'polar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: '#0ff'
                    }, {
                        offset: 1,
                        color: '#02aeff'
                    }]),
                }
            }
        },








    ]
};