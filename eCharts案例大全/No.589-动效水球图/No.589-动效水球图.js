var value = 0.54;
option = {
    backgroundColor: '#181b22',
    title: [
        {
            text: (value * 100).toFixed(0) + '%',
            left: '50%',
            top: '40%',
            textAlign: 'center',
            textStyle: {
                fontSize: '30',
                fontWeight: '400',
                color: '#8b8d90',
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
        radius: ['43%', '40%'],
        center: ['50%', '50%'],
    },
    angleAxis: {
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
            type: 'liquidFill',
            radius: '40%',
            z: 1,
            center: ['50%', '50%'],
            amplitude: 20,
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [  
                    { 
                        offset:0,
                        color: '#00FFFF',
                    },
                    {
                        offset: 1,
                        color: '#76EE00',
                    },
                ],
                globalCoord: false,
            },
            data: [  
                0.4,
                {
                    value: 0.4,
                    direction: 'left',     // 向左飘动
                },
            ],
            backgroundStyle: {
                borderWidth: 1,
                color: 'transparent',
            },
            label: {
                normal: {
                    formatter: '',
                },
            },
            outline: {
                show: true,
                itemStyle: {
                    borderWidth: 0,
                },
                borderDistance: 0,
            },
        },
        {
            name: '',
            type: 'bar',
            roundCap: true,
            z: 2,
            showBackground: true,
            backgroundStyle: {
                color: '#15181e',  
            },
            data: [75],   
            coordinateSystem: 'polar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, .5, 1, [
                        {
                            offset: 0,
                            color: '#5acef2',
                        },
                        {
                            offset: .7,
                            color: '#5073fb',
                        },
                        {
                            offset: 1,
                            color: '#6ae8d8',
                        },
                    ]),
                },
            },
        },
    ],
};
