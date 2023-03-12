option = {
    angleAxis: {
        max: 100, 
        clockwise: false,
        startAngle: -45,
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
        radius: '140%' //图形大小
    },
    series: [{
        type: 'bar',
        data: [{
            value: 75,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: '#4CC573'
                    }, {
                        offset: 0.33,
                        color: '#4CC573'
                    }, {
                        offset: 0.66,
                        color: '#FF6050'
                    }, {
                        offset: 1,
                        color: '#FF6050'
                    }])
                }
            },
        }],
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 30,
    }, {
        type: 'gauge',
        radius: '72%',
        min: 0,
        max: 100,
        splitNumber: 5,
        axisLine: {
            show: false,
        },
        axisLabel: {
            color: '#999999',
            fontSize: 13
        },
        itemStyle: {
            color: '#999999'
        },
        pointer: {
            length: '50%',
            width: 8
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        detail: {
            color: '#333333',
            fontSize: 30
        },
        data: [50]
    }]
};