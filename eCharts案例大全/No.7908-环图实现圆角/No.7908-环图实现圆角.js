option = {
    title: {
        left: 'center',
        top: 'center'
    },
    backgroundColor:'#000000',
    angleAxis: {
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
        },
        max: 100,
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
        radius: '100%' //大小
    },
    series: [{
        type: 'bar',
        data: [{
            name: '上层环',
            value: 60,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
                        offset: 0,
                        color: '#00ae88'
                    }, {
                        offset: 1,
                        color: '#00ea'
                    }])
                }
            },
        }],
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 30,
        barGap: '-100%', 
        z: 2, // 上层环高
    }, {
        type: 'bar',
        data: [{
            value: 100,
            itemStyle: {
                color: '#e2e2e2',
            }
        }],
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 30,
        barGap: '-100%',
        z: 1
    }]
};