var value = 64;
var data = {
    value: 64,
    percent: (value / 100).toFixed(2),
};

// 指定图表的配置项和数据
var option = {
    backgroundColor: 'rgba(4, 49, 51, 1)',
    series: [
        // 最小
        {
            type: 'gauge',
            radius: '15%', // 位置
            center: ['50%', '70%'],
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
                        [1, 
                        new echarts.graphic.RadialGradient(0.5, 1, 1, [
                                {
                                    offset: 1,
                                    color: '#013637',
                                },
                                {
                                    offset: 0.3,
                                    color: '#04494a',
                                },
                            ])],
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
                // 仪表盘详情
                show: false,
            },
        },
        // 中间
        {
            type: 'gauge',
            radius: '27%', // 位置
            center: ['50%', '70%'],
            min: 0,
            max: 100,
            startAngle: 180,
            splitNumber:1,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    // 轴线样式
                    width: 10, // 宽度
                    color: [
                        [1, 'rgba(33, 134, 92, 1)'],
                    ], // 颜色
                },
            },
            pointer: {
                // 仪表盘指针
                show: false,
            },
            axisTick: {
                // 刻度
                show: true,
                splitNumber:20,
                length:3,
                distance:5,
                lineStyle:{
                    color:'rgba(33, 134, 92, 1)',
                    width:6
                }
            },
            splitLine: {
                // 分割线
                show: false
            },
            axisLabel: {
                // 刻度标签
                show: false
            },
            detail: {
                // 仪表盘详情
                show: false,
            },
        },
        // 大-左边-外
        {
            type: 'gauge',
            radius: '59%', // 位置
            center: ['50%', '70%'],
            min: 0,
            max: 100,
            startAngle: 180,
            splitNumber:1,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    // 轴线样式
                    width: 15, // 宽度
                    color: [
                        [data.percent, 'rgba(48, 201, 137, 1)'],
                        [1, 'rgba(1, 54, 55, 0)'],
                    ],
                    // 颜色
                },
            },
            pointer: {
                // 仪表盘指针
                show: false,
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
                show: false
            },
            detail: {
                // 仪表盘详情
                show: false,
            },
        },
        // 大-左边-内
        {
            type: 'gauge',
            radius: '56%', // 位置
            center: ['50%', '70%'],
            min: 0,
            max: 100,
            startAngle: 180,
            splitNumber:1,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    // 轴线样式
                    width: 80, // 宽度
                    color: [
                        [data.percent, 'rgba(17,130,83,1)'],
                        [1, 'rgba(1, 54, 55, 0)'],
                    ],
                    // 颜色
                },
            },
            pointer: {
                // 仪表盘指针
                show: false,
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
                show: true,
                distance:-45,
                color:'rgba(24, 101, 104, 1)'
            },
            detail: {
                // 仪表盘详情
                show: false,
            },
        },
        // 大-右边-内
        {
            type: 'gauge',
            radius: '45%', // 位置
            center: ['50%', '70%'],
            min: 0,
            max: 100,
            startAngle: 180,
            splitNumber:1,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    // 轴线样式
                    width: 50, // 宽度
                    color: [
                        [data.percent, 'rgba(17,130,83,1)'],
                        [1, 'rgba(1, 54, 55, 1)'],
                    ], // 颜色
                },
            },
            pointer: {
                // 仪表盘指针
                show: false,
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
                show: false
            },
            detail: {
                // 仪表盘详情
                show: false,
            },
        },
         // 大-右边-外
        {
            type: 'gauge',
            radius: '47%', // 位置
            center: ['50%', '70%'],
            min: 0,
            max: 100,
            startAngle: 180,
            splitNumber:1,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    // 轴线样式
                    width: 10, // 宽度
                    color: [
                        [data.percent, 'rgba(17,130,83,1)'],
                        [1, 'rgba(0, 64, 65, 1)'],
                    ], // 颜色
                },
            },
            pointer: {
                // 仪表盘指针
                show: false,
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
                show: false
            },
            detail: {
                // 仪表盘详情
                show: false,
            },
        }
    ],
};
