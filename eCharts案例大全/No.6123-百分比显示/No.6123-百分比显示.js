option = {
    title: [{
        text: '80%',
        x: 'center',
        top: 'center',
        textStyle: {
            fontSize: '50',
            color: '#CCCCCC',
            fontFamily: 'Lato',
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
            color: '#EDEDED',
        },
        data: [80],
        coordinateSystem: 'polar',

        itemStyle: {
            normal: {
                color: '#CCCCCC'
            }
        }

    }]
}