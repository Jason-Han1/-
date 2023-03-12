option = {
    title: {
        text: '64%',
        textStyle: {
            color: '#2CEDFC',
            fontSize: '100%',
            fontWeight: '600',
            lineHeight: '8'
        },
        subtext: '车位使用率',
        subtextStyle: {
            color: '#768399',
            fontSize: '60%',
            fontWeight: '400',
        },
        itemGap: 10,
        left: 'center',
        top: 'center',
        bottom: 'center',
        right: 'center'
    },
    angleAxis: {
        max: 100,
        clockwise: true,
        startAngle: 180,
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
            left: 0,
            data: [{
                name: 'Total Downloads',
                value: 64,
                itemStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#0095D8' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#2CEDFC' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        },
                    }
                },
            }],
            coordinateSystem: 'polar',
            roundCap: false,
            barWidth: '14%',
            barGap: '-100%',
            z: 2,
        },
        {
            type: 'bar',
            data: [{
                value: 100,
                itemStyle: {
                    color: '#86AABB', //未填充区域
                },
            }],
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: '14%',
            barGap: '-100%',
            z: 1
        },
        {
            name: '',
            z: 1,
            type: 'pie',
            cursor: 'default',
            radius: ['40%', '40%'],
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
                    borderColor: '#5c6c6e',

                }
            }, {
                value: 25,
                itemStyle: {
                    borderColor: '#5c6c6e',

                }
            }]
        }
    ]
};