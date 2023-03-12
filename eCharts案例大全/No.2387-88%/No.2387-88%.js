option = {

    title: [ {
        text: '88%',
        x: 'center',
        top: '47%',
        textStyle: {
            fontSize: '60',
            color: '#FFFFFF',
            fontFamily: 'DINAlternate-Bold, DINAlternate',
            foontWeight: '600',
        },
    }],
    backgroundColor: '#111',
    polar: {
        radius: ['0%', '100%'],
        center: ['50%', '50%'],
    },
    angleAxis: {
        max: 100,
        clockwise: false, // 逆时针
        // 隐藏刻度线
        show: false,
        startAngle:0, // startAngle表示起始角度
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
    series: [
        {
            name: '',
            type: 'bar',
            roundCap: true,
            barWidth: '8%',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(66, 66, 66, .3)',
            },
            data: [88],
            coordinateSystem: 'polar',

            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0,1, 0, 0, [
                        {
                            offset: 0,
                            color: 'rgb(167,73,79)',
                        },
                        {
                            offset: 1,
                            color: 'rgb(253,201,11)',
                        },
                    ]),
                },
            },
        }
    ],

};