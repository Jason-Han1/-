option = {
    backgroundColor: '#fff',
    title: {
        text: 'March.2019',
        textStyle: {
            color: '#242934',
            fontSize: 30,
            fontWeight: '400',
            lineHeight: 70
        },
        subtext: 'total invest',
        subtextStyle: {
            color: '#768399',
            fontSize: 20,
            fontWeight: '100',
        },
        itemGap: -10,
        left: 'center',
        top: '40%'
    },
    angleAxis: {
        max: 100,
        clockwise: false,
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
        radius: '100%'
    },
    series: [{
        type: 'bar',
        startAngle: 100,
        clockwise: false,
        data: [{
            name: 'Total Downloads',
            value: 65,
            itemStyle: {
                normal: {
                    color: 'rgba(251, 46, 99, 1)',
                }
            },
        }],
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 10,
        barGap: '-100%',
        z: 2,
    }, {
        type: 'bar',
        data: [{
            value: 100,
            itemStyle: {
                color: '#f2f4ff',
                shadowColor: 'rgba(251, 46, 99, 0.1)',
                shadowBlur: 10,
            }
        }],
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 10,
        barGap: '-100%',
        z: 1
    }, {
        name: '',
        z: 1,
        type: 'pie',
        cursor: 'default',
        radius: ['45%', '45%'],
        startAngle: 225,
        hoverAnimation: false,
        legendHoverLink: false,
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 75,
            itemStyle: {
                borderColor: '#FD8BA8',
                borderType: 'dashed'
            }
        }, {
            value: 25,
            itemStyle: {
                borderColor: '#FD8BA8',
                borderType: 'dashed'
            }
        }]
    }]
};