var value = 0.54;
option = {
    backgroundColor: '#182s3s',
    title: [
        {
            text: (value * 100).toFixed(0) + '%',
            left: '50%',
            top: '45%',
            textAlign: 'center',
            textStyle: {
                fontSize: '50',
                fontWeight: '500',
                color: '#fff',
                textAlign: 'center',
                textBorderColor: 'rgba(0, 0, 0, 0)',
                textShadowColor: '#000',
                textShadowBlur: '0',
                textShadowOffsetX: 0,
                textShadowOffsetY: 1,
            },
        },
    ],
    polar: {
        radius: ['97%', '94%'],
        center: ['50%', '50%'],
    },
    angleAxis: {
        startAngle:180,
        max: 100,
        clockwise: false,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,
        },
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
            type: 'pie',
            backgroundColor: '#fff',
            radius: '90%',
            z: 1,
            center: ['50%', '50%'],
            startAngle:90,
            amplitude: 20,
            data: [
                0.4,
                
                {
                    itemStyle: {
                        normal: {
                            color: "rgba(80,150,224,0.1)"
                        }
                    },
                },
            ],
            color:'#41566E',
            backgroundStyle: {
                borderWidth: 1,
                color: 'transparent',
            },
            label: {
                normal: {
                    show : false,
                    formatter: '',
                },
            },
        },
        {
            name: '',
            type: 'bar',
            roundCap: true,
            z: 2,
            startAngle:60,
            showBackground: true,
            backgroundStyle: {
                color: '#3F546B',
            },
            data: [75],
            coordinateSystem: 'polar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                        {
                            offset: 0,
                            color: '#42D2FF',
                        },
                        {
                            offset: 1,
                            
                            
                            color: '#137FFF',
                        },
                    ]),
                },
            },
        },
    ],
};
