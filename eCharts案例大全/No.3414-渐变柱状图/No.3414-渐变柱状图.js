option = {
    backgroundColor: '#030A41',
    grid: {
        top: '100',
        right: '120',
        left: '60',
        bottom: '40', //图表尺寸大小
    },
    legend: [
        {
            top: 100,
            right: 10,
            textStyle: {
                color: '#FFFFFF',
                fontSize: 12,
            },
            data: ['2019年'],
        },
        {
            top: 150,
            right: 8,
            textStyle: {
                color: '#FFFFFF',
                fontSize: 12,
            },
            data: ['2020年'],
        },
    ],
    xAxis: {
        type: 'category',
        color: '#59588D',
        data: ['成都市', '自贡市', '攀枝花市', '泸州市', '德阳市', '绵阳市', '广元市', '遂宁市', '内江市', '乐山市'],
        axisLabel: {
            margin: 10,
            color: '#EEEEEE',
            textStyle: {
                fontSize: 14,
            },
        },
        axisLine: {
            lineStyle: {
                color: '#ffffff',
                opacity: 0.3,
            },
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ffffff',
                opacity: 0.3,
            },
        },
    },
    yAxis: [
        {
            min: 0,
            max: 7,
            axisLabel: {
                color: '#EEEEEE',
                textStyle: {
                    fontSize: 14,
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#ffffff',
                    opacity: 0.3,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#ffffff',
                    opacity: 0.3,
                },
            },
        },
    ],
    series: [
        {
            type: 'bar',
            name: '2019年',
            data: [5.1, 3.2, 6.1, 4.1, 2.7, 4.2, 5.2, 2.1, 4.7, 1.0],
            barWidth: '16',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(184,123,255,1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(45,57,178,1)',
                        },
                    ]),
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                },
            },
        },
        {
            type: 'bar',
            name: '2020年',
            data: [5.1, 5.7, 4.1, 4.7, 3.3, 2.8, 1.8, 4.0, 3.4, 2.7],
            barWidth: '16',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(48,227,235,1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(16,127,212,1)',
                        },
                    ]),
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                },
            },
        },
    ],
};
