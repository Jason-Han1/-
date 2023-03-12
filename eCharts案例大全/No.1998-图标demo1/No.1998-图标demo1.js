option = {
    backgroundColor: '#012248',
    series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 100,
            splitNumber: 5,
            axisLine: {
                lineStyle: {
                    width: 2,
                    color: [
                        [0.25, '#fe8f1c'],
                        [0.5, '#fe8f1c'],
                        [0.75, '#fe8f1c'],
                        [1, '#fe8f1c'],
                    ],
                },
            },
            pointer: {
                // icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z', // 箭头图标
                length: '12%',
                width: 20,
                offsetCenter: [0, '-55%'], // 箭头位置
                itemStyle: {
                    color: '#f64649', // 箭头颜色
                },
            },
            axisTick: {
                show: false,
                length: 12,
                lineStyle: {
                    color: '#fff',
                    width: 1,
                },
            },
            splitLine: {
                show: false,
                length: 20,
                lineStyle: {
                    color: 'auto',
                    width: 5,
                },
            },
            axisLabel: {
                color: '#fff', // 刻度颜色
                fontSize: 15,
                distance: -5, // 刻度位置
                center: ['50%', '52%'],
            },

            detail: {
                show: false,
            },
            data: [
                {
                    value: 70,
                },
            ],
        }, // 内部圆圈
        {
            type: 'gauge',
            radius: '45%', // 位置
            center: ['50%', '52%'],
            min: 0,
            max: 100,
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    // 轴线样式
                    width: 120, // 宽度
                    color: [
                        [
                            1,
                            new echarts.graphic.RadialGradient(0.5, 1, 1, [
                                {
                                    offset: 1,
                                    color: '#00bbf8',
                                },

                                {
                                    offset: 0,
                                    color: '#0168eb',
                                },
                            ]),
                        ],
                    ], // 颜色
                },
            },
            axisTick: {
                // 刻度
                show: false,
            },
            splitLine: {
                // 分割线
                show: false,
            },
            axisLabel: {
                // 刻度标签
                show: false,
            },
            pointer: {
                // 仪表盘指针
                show: false,
            },
            detail: {
                fontSize: 40,
                offsetCenter: [0, '-40%'],
                valueAnimation: true,
                formatter: function (value) {
                    return value + '%';
                },
                color: '#fff',
            },
            data: [
                {
                    value: 70,
                },
            ],
        },
    ],
};
