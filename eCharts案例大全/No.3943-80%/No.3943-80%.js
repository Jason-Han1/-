option = {
    backgroundColor: '#111',
    title: [{
        text: '80%',
        x: 'center',
        y: 'center',
        textStyle: {
            color: 'rgba(0, 255, 255, 1)',
            fontSize: 30,
            fontWeight: '700',
        }
    }, {
        text: '本地工作用户' + '\n' + ' 65,992,707人',
        x: 'center',
        bottom: '10%',
        textStyle: {
            fontSize: '16',
            color: '#fff',
            // fontFamily: 'Lato',
            foontWeight: '600',
        },
    }],
    polar: {
        radius: ['44%', '50%'],
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
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(0, 31, 81, 1)',
        },
        data: [80],
        coordinateSystem: 'polar',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: 'rgba(0, 255, 255, 1)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(0, 31, 81, 1)'
                    }
                ]),
            }
        }

    }]
};