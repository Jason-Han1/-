var backgroundColor = '#111'
option = {

    title: [{
        text: '完好率',
        x: 'center',
        top: '55%',
        textStyle: {
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: '100',
            label: {
                formatter: [
                    '{a|这段文本采用样式a}',
                    '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
                ].join('\n'),
                rich: {
                    a: {

                    }
                }
            },

        }
    }, {
        text: '75%',
        x: 'center',
        top: '40%',
        textStyle: {
            fontSize: '44',
            color: 'rgba(96, 244, 194, 1)',
            fontFamily: 'DINAlternate-Bold, DINAlternate',
            foontWeight: '600',
        },
    }],
    backgroundColor: backgroundColor,
    polar: {
        radius: ['42%', '52%'],
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
            show: false,
        },
    },
    series: [{
            name: '',
            type: 'bar',
            roundCap: true,
            barWidth: 10,
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(66, 66, 66, .2)',
            },
            data: [60],
            coordinateSystem: 'polar',

            itemStyle: {
                normal: {
                    color: 'rgba(96, 244, 194, 1)',
                },
            },
        },

    ],

};