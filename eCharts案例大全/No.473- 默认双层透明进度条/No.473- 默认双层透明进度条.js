option = {
    backgroundColor: '#1f1e26',
    title: {
        text: '50%',
        x: '50%',
        top: 'middle',
        textAlign: 'center',
        textStyle: {
            fontSize: '70',
            fontWeight: '100',
            color: '#79ffff',
            textAlign: 'center',
        },
    },
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
                color: 'rgba(0,0,0,0)',
            },
            data: [50],
            coordinateSystem: 'polar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: 'rgba(0,0,0,0)'
                    }, {
                        offset: 1,
                        color: '#02aeff'
                    }]),
                }
            }
        },
        {
            hoverAnimation: false,
            type: 'pie',
            z: 0,
            data: [50],
            radius: ['42%', '55%'],
            zlevel: -2,
           color: [{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: 'rgba(234, 40, 125, 0.01)'
                }, {
                    offset: 1,
                    color: 'rgba(234, 40, 125, 1)'
                }],
                global: false
            }],
            label: {
                show: true,
                formatter: '{d}%',
                color:'rgb(234, 40, 125)',
                fontSize: 20
            },
            data: [{
                value: 40,
                name: '待审核'
            }, {
                value: 40,
                itemStyle: {
                    color: "rgba(0,0,0,0)",
                    borderWidth: 50
                },
                tooltip: {
                    show: false
                },
                label: {
                    show: false
                },
                hoverAnimation: false
            }]
        },
       

    ]
};