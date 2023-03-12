

option = {
    backgroundColor: '#1f1e26',
    title: [{
        text: '75%',
        left: '50%',
        top: '42%',
        textAlign: 'center',
        textStyle: {
            fontSize: '70',
            fontWeight: '100',
            color: '#79ffff',
            textAlign: 'center',
        },
    }],
    polar: {
        radius: ['51%', '47%'],
        center: ['50%', '50%'],
    },
    angleAxis: {
        max: 100,
        show: false,
        startAngle: 0,
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
                color: '#464451',
            },
            data: [75],
            coordinateSystem: 'polar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: '#0ff'
                    }, {
                        offset: 1,
                        color: '#02aeff'
                    }]),
                }
            }
        },
        {
            type: 'pie',
            radius: ['42%', '43%'],
            center: ['50%', '50%'],
            data: [{
                    hoverOffset: 1,
                    value: 100,
                    name: '',
                    itemStyle: {
                        color: '#ff6189',
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    hoverAnimation: false,
                }
            ]
        }
    ]
};