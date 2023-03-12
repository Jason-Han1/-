var value = 350;
var colorRegionRate = (value / 700).toFixed(2);

var index = value >= 80 ? 0 : value > 30 ? 1 : 2;

option = {
    title: {
        text: '仪表盘刻度线渐变',
        textStyle: {
            color: '#b1977d',
        },
    },
    backgroundColor: '#353c60',
    angleAxis: {
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        min: 0,
        max: 700,
        startAngle: 225,
    },
    radiusAxis: {
        type: 'category',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        data: ['a', 'b', 'c'],
        z: 10,
    },
    polar: {
        radius: '105%',
    },
    series: [
        {
            type: 'gauge',
            name: '纯色圈',
            radius: '76%',
            splitNumber: 4,
            min: 0,
            max: 700,
            pointer: {
                show: true,
                length: '53%',
            },
            // 仪表盘指针样式。
            itemStyle: {
                color: '#fff',
            },
            data: [
                {
                    value: value,
                    name: '警押比',
                },
            ],
            title: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        // 有数值的部分
                        [
                            colorRegionRate,
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: '#E13F0C', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#FC9038', // 100% 处的颜色
                                },
                            ]),
                        ],
                        // 底色
                        [
                            1,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(255,255,255,0)', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(255,255,255,0)', // 100% 处的颜色
                                },
                            ]),
                        ],
                    ],
                    width: 25,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: 1,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            detail: {
                show: false,
            },

            axisLabel: {
                color: '#999999',
                fontSize: 30,
                distance: -80,
            },
            animationDuration: 2000,
        },
        {
            type: 'gauge',
            radius: '60%',
            splitNumber: 100,
            axisLine: {
                show: false,
                lineStyle: {
                    color: [
                        // 有数值的部分
                        [
                            colorRegionRate,
                            new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                {
                                    offset: 0,
                                    color: '#E13F0C', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#FC9038', // 100% 处的颜色
                                },
                            ]),
                        ],
                        // 底色
                        [
                            1,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(255,255,255,0.1)', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(255,255,255,0.1)', // 100% 处的颜色
                                },
                            ]),
                        ],
                    ],
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                length: 22,
                lineStyle: {
                    color: 'auto',
                    width: 2.5,
                },
            },
            axisLabel: {
                show: false,
            },
            title: {
                show: false,
            },
            pointer: {
                show: false,
            },
            data: [
                {
                    value: value,
                    name: '警押比',
                },
            ],
            detail: {
                show: true,
                offsetCenter: [0, '80%'],
                formatter: (value) => {
                    return [`{a|${value}}`, `{b|kb/s}`].join('\n');
                },
                rich: {
                    a: {
                        color: '#FC9038',
                        fontWeight: 600,
                        fontSize: 36,
                    },
                    b: {
                        color: '#B5B7B9',
                        fontWeight: 600,
                        fontSize: 20,
                    },
                },
            },
        },
        {
            name: 'pie',
            type: 'pie',
            clockWise: true,
            startAngle: -270,
            radius: ['76%', '70%'],
            hoverAnimation: false,
            center: ['50%', '50%'],
            data: ['100'],
            z: 1,
            labelLine: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0.1)',
                },
            },
        },
    ],
};
