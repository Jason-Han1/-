option = {
    polar: {
        radius: ['56%', '52%'],
        center: ['50%', '50%'],
    },
    angleAxis: {
        max: 100,
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
            show: false
        },
    },
    series: [{
            name: '',
            type: 'bar',
            roundCap: true,
            barWidth: 60,
            // showBackground: true,
            // backgroundStyle: {
            //     color: 'transparent',
            // },
            data: [100],
            coordinateSystem: 'polar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#585fe1'
                    }, {
                        offset: 1,
                        color: '#0ff'
                    }]),
                }
            }
        },
        

    ]
};