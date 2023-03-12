var demoData = {
    name: '城镇化率',
    value: 9000,
    percent:0.5,
};
option = {
    backgroundColor: '#091C2F',
    series: [
        {
            type: 'gauge',
            radius: '80%',
            center: ['center', 'center'],
            min: 0,
            max: 100,
            splitNumber: 6, //刻度数量
            startAngle: 220,
            endAngle: -40,
            axisLine: {
                // 坐标轴线
                show: false,
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    width: 0,
                    shadowColor: '#67FFFC',
                    shadowBlur: 2,
                    color: [
                        [0.33, '#A34180'],
                        [0.66, ' #EA96B8'],
                        [1, '#E8BF5D'],
                    ],
                },
            },
            axisTick: {
                // 坐标轴小标记
                length: 20, // 属性length控制线长
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    color: 'auto',
                    width: 2,
                },
            },
            axisLabel: {
                show: false,
            },
            splitLine: {
                // 分隔线
                length: -25,
                lineStyle: {
                    color: 'auto',
                    width: 2,
                },
            },
            title: {
                textStyle: {
                    fontWeight: 'bolder',
                    fontSize: 20,
                    fontStyle: 'italic',
                },
            },
            // 指针
            pointer: {
                show: false,
                length: '70%',
                width: '4%',
            },
            detail: {
                show: false,
            },
        },
        {
            type: 'gauge',
            radius: '61%',
            center: ['center', 'center'],
            splitNumber: 0, //刻度数量
            startAngle: 220,
            endAngle: -40,
            show: true,
            axisLine: {
                show: true,
                roundCap: true,
                lineStyle: {
                    width: 40,
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 10,
                    shadowOffsetY: 70,
                    color: [[1, '#14306F']],
                },
            },
            //分隔线样式。
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            pointer: {
                show: false,
            },
            detail: {
                show: false,
            },
        },
        {
            type: 'gauge',
            radius: '61%',
              center: ['center', 'center'],
            splitNumber: 0, //刻度数量
            startAngle: 220,
            endAngle: -40,
            show: true,
            axisLine: {
                show: true,
                roundCap: true,
                lineStyle: {
                    width: 40,
                    color: [
                        [
                           demoData.percent,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: '#A34180',
                                },
                                {
                                    offset: 0.5,
                                    color: ' #EA96B8',
                                },
                                {
                                    offset: 1,
                                    color: '#E8BF5D',
                                },
                            ]),
                        ],
                    ],
                },
            },
            //分隔线样式。
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            pointer: {
                show: false,
            },
            title: {
                show: true,
                offsetCenter: [0, '-20%'], // x, y，单位px
                textStyle: {
                    color: '#80A0FF',
                    fontSize: 50,
                },
            },
            //仪表盘详情，用于显示数据。
            detail: {
                formatter: '{value}',
                offsetCenter: ['0', '10%'],
                textStyle: {
                    fontSize: 24,
                    color: '#FFFFFF',
                },
            },
            data: [demoData],
        },
    ],
};
