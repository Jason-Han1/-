option = {
    series: [
        {
            name: '压力',
            type: 'gauge',
            radius: '80%',
            min: 0,
            max: 100,
            splitNumber: 5,
            startAngle: 180,
            endAngle: 0,
            zlevel: 0,
            data: [
                {
                    value: 0,
                    name: '压力(Pa)',
                    itemStyle: {
                        color: '#fff',
                    },
                },
            ],
            pointer: {
                show: false,
            },
            title: {
                // 仪表盘标题。
                show: false, // 是否显示标题,默认 true。
            },
            markLine: {
                precision: 2,
            },
            axisTick: {
                show: false,
            }, //刻度样式
            splitLine: {
                show: true,
                length: 0,
                lineStyle: {
                    color: '#233446', //用颜色渐变函数不起作用
                },
            }, //分隔线样式
            splitNumber: 1,
            axisLabel: {
                show: true,
                padding: [20, 0, 0, 0],
            },
            axisLine: {
                // 坐标轴线
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    width: 20, // 仪表盘宽度
                    color: [
                        [0.2, '#2ca1ff'],
                        [0.8, '#0adbfa'],
                        [1, '#eaba5f'],
                    ],
                },
            },
        },
    ],
};