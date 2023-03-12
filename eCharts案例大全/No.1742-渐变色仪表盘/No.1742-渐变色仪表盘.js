option = {
    series: [
        {
            type: 'gauge',
            min: 0,
            max: 200,
            splitNumber: 10,
            axisLine: {
                // 坐标轴线
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    color: [
                        [0.1, 'red'],
                        [
                            0.3,
                            new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: 'red',
                                },
                                {
                                    offset: 0.8,
                                    color: 'rgb(235,205,6)',
                                },
                            ]),
                        ],
                        [0.7, 'rgb(235,205,6)'],
                        [
                            0.9,
                            new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: 'rgb(13,211,97)',
                                },
                                {
                                    offset: 0.6,
                                    color: 'rgb(235,205,6)',
                                },
                            ]),
                        ],
                        [1, 'rgb(13,211,97)'],
                    ],
                },
            },
            splitLine: {
                lineStyle: {
                    color: '#000000',
                },
            },
            axisTick: {
                lineStyle: {
                    color: '#000000',
                },
            },
            pointer: {
                itemStyle: {
                    color:  new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0.1,
                                    color: 'rgb(42,125,204)',
                                },
                                {
                                    offset: 0.8,
                                    color: 'rgb(13,42,86)',
                                },
                            ]),
                },
            },
            anchor: {
                show: true,
                showAbove: true,
            },
            detail: {
                formatter: '{value} %',
            },
            data: [
                {
                    value: 50,
                    title: {
                        color: '#464646', // 标题颜色
                    },
                    detail: {
                        color: '#464646', // 数据详情颜色
                        offsetCenter: ['0%', '70%'],
                    },
                },
            ],
        },
    ],
};
