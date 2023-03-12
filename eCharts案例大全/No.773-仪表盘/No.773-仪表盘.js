var pointData = 88;
option = {
    backgroundColor: '#000',
    series: [
        {
            type: 'gauge',
            radius: '30%',
            z: 1,
            startAngle: 225,
            endAngle: -45,
            splitNumber: 10,
            splitLine: {
                show: false,
            },
            detail: {
                show: true,
                offsetCenter: [0, 10],
                fontSize: 18,
                formatter: (val) => [`{a|${pointData}}`, `{b|分}`].join(''),
                rich: {
                    a: {
                        fontSize: 42,
                        lineHeight: 50,
                        fontFamily: 'Microsoft YaHei',
                        fontWeight: 'bold',
                        color: '#4BEA01',
                    },
                    b: {
                        fontSize: 12,
                        padding: [-15, 0, 0, 0],
                        fontFamily: 'Microsoft YaHei',
                        fontweight: '400',
                        lineHeight: 16,
                        color: '#FFFFFF',
                    },
                },
            },
            // 仪表盘的线，颜色值为一个数组
            axisLine: {
                show: true,
                lineStyle: {
                    width: 20,
                    opacity: 1,
                    color: [
                        [
                            pointData / 100,
                            {
                                x: 0,
                                y: 0,
                                x1: 0,
                                y1: 0,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(255, 0, 0, 0.8)',
                                    },
                                    {
                                        offset: 0.65,
                                        color: 'rgba(255, 252, 0, 1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(5, 254, 17, 0.9)',
                                    },
                                ],
                            },
                        ],
                        [1, 'rgba(57, 70, 30, 1)'],
                    ],
                },
            },
            // 仪表盘刻度标签
            axisLabel: {
                show: true,
                distance: -45,
                formatter: (val) => {
                    const num = Math.floor(val);
                    return num % 20 === 0 ? num : '';
                },
                textStyle: {
                    color: '#ffffff',
                    fontSize: '10',
                    fontFamily: 'Microsoft YaHei',
                    fontWeight: 400,
                },
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'rgba(7, 24, 40, 1)',
                    width: 2,
                },
                length: 20,
            }, //刻度样式
        },
    ],
};
