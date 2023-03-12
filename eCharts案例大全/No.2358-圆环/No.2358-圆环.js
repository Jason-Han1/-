var value = 0.54;
option = {
    backgroundColor: '#181b22',
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
