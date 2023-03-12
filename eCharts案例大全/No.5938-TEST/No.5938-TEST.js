option = {
    backgroundColor: '#19181d',
    tooltip: {
        show: true
    },
    angleAxis: {
        max: 100,
        startAngle: 30,
        splitLine: {
            show: false,
            lineStyle: {
                color: '#caccd4',
            }
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#caccd4',
            }
        },
        axisLine: {
            lineStyle: {
                color: '#caccd4',
            }
        },
    },
    radiusAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#caccd4',
            }
        },
        data: ['A', 'B', 'C', 'D'],
        z: 10
    },
    legend: {
        show: true,
        orient: 'vertical',
        right: '10%',
        top: '40%',
        itemWidth: 50,
        itemHeight: 50,
        itemGap: 30,
        textStyle: {
            fontSize: 13,
            color: '#fff'
        },
        data: ['title A', 'title B']
    },
    polar: {
        radius:['10%','90%'],
        center: ['40%', '50%']
    },
    series: [{
        name: 'title A',
        type: 'bar',
        // barWidth: '50%',
        data: [60, 70, 80, 75],
        coordinateSystem: 'polar',
        roundCap: true,
        // color: 'rgba(234, 83, 66, 0.5)',
        itemStyle: {
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                offset: 0,
                color: '#C357F6'
            }, {
                offset: 1,
                color: '#C357F6'
            }]),
            // borderColor: 'rgba(234, 83, 66, 1)',
            // borderWidth: 1,
            shadowBlur: 10,
            shadowColor: 'rgba(33, 33, 33, 1)',
        },
    }, {
        name: 'title B',
        type: 'bar',
        data: [54, 72, 55, 65],
        coordinateSystem: 'polar',
        roundCap: true,
        // color: 'rgba(254, 172, 28, 0.5)',
        itemStyle: {
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: '#fe8500'
                }, {
                    offset: 1,
                    color: '#fe8500'
                }]),
            // borderColor: 'rgba(254, 172, 28, 1)',
            // borderWidth: 1,
            shadowBlur: 10,
            shadowColor: 'rgba(33, 33, 33, 1)',
        }
    }],
    
};