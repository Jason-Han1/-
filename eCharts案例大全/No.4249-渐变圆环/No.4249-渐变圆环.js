option = {
    backgroundColor: '#fff',
    title: {
        text: '10',
        textStyle: {
            color: 'rgba(121, 52, 243, 1)',
            fontSize: 40,
            fontWeight: '400',
        },
        itemGap: -5,
        left: 'center',
        top: 'center'
    },
    angleAxis: {
        max: 100,
        clockwise: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    radiusAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    polar: {
        center: ['50%', '50%'],
        radius: '40%'
    },
    series: [{
        type: 'bar',
        data: [{
            name: 'Total Downloads',
            value: 65,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(241, 234, 254, 0)'
                }, {
                    offset: 1,
                    color: 'rgba(121, 52, 243, 1)'
                }]),
                }
            },
        }],
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 30,
        barGap: '-100%',
        z: 2,
    }, {
        type: 'bar',
        data: [{
            value: 100,
            itemStyle: {
                color: 'rgba(121, 52, 243, 0.1)',
            }
        }],
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 30,
        barGap: '-100%',
        z: 1
    }]
};