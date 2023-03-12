var currvalue = 75;
var maxValue = 100;
var title = '实际';
var val = [30, 60, 80];
var colors = ['#33AEEE', '#4BCD6C', '#FFDE81'];
var percent = ((currvalue / maxValue) * 100).toFixed(2);

function getRich() {
    let result = {};
    colors.forEach((v, i) => {
        (result[`normal${i}`] = {
            fontSize: 12,
            align: 'center',
            padding: [4, 0],
            fontFamily: 'PingFang',
            color: '#fff',
        }),
            (result[`value${i}`] = {
                color: '#fff',
                align: 'center',
                fontSize: 12,
                padding: [2, 0],
                fontFamily: 'PingFang',
            });
    });
    return result;
}
option = {
    backgroundColor: '#010e28',
    series: [
        // 刻度
        {
            name: '刻度',
            type: 'gauge',
            radius: '74%',
            center: ['50%', '50%'],
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 220,
            endAngle: -44,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [[1, 'rgba(0,0,0,0)']],
                },
            }, //仪表盘轴线
            axisLabel: {
                show: false,
                color: '#ffffff',
                distance: -60,
                formatter: function (v) {
                    switch (v + '') {
                        case '30':
                            return '目标\n 30';
                        case '60':
                            return '标准\n60';
                        case '80':
                            return '预算\n80';
                    }
                },
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 10,
                lineStyle: {
                    color: '#272935',
                    width: 1,
                },
                length: 8,
            }, //刻度样式
            splitLine: {
                show: false,
                length: -8,
                lineStyle: {
                    color: '#272935',
                },
            }, //分隔线样式
            detail: {
                show: false,
            },
            pointer: {
                show: false,
            },
        },
        // 圈
        {
            name: '实际',
            type: 'gauge',
            radius: '78%',
            center: ['50%', '50%'],

            splitNumber: 0, //刻度数量
            startAngle: 220,
            endAngle: -44,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 8,
                    color: [
                        [
                            1,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: '#33AEEE',
                                },
                                {
                                    offset: 1,
                                    color: '#33AEEE',
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
                offsetCenter: [0, '40%'], // x, y，单位px
                textStyle: {
                    color: '#fff', //标题颜色
                    fontSize: 14,
                },
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: true,
                offsetCenter: [0, 0],
                color: '#33AEEE', //指标值颜色
                formatter: function (params) {
                    // var params = params.toFixed(2)
                    return params;
                },
                textStyle: {
                    fontSize: 20,
                },
            },
            data: [
                {
                    name: title,
                    value: percent,
                },
            ],
        },
        // 实际数值
        {
            type: 'pie',
            radius: ['65%', '78%'],
            center: ['50%', '50%'],
            animation: false,
            label: {
                show: false,
            },
            startAngle: 220 - (percent / 100) * 260 - 1.8,
            endAngle: -44,
            color: ['#33AEEE', 'rgba(0,0,0,0)'],
            data: [
                {
                    value: 0.1,
                    name: '指针',
                },
                {
                    value: 99.9,
                    name: '空白',
                },
            ],
        },
        //   目标、标准、预算 线
        {
            type: 'pie',
            name: '目标',
            radius: ['78%', '82%'],
            center: ['50%', '50%'],
            animation: false,
            label: {
                normal: {
                    show: true,
                    formatter: function (params) {
                        const index = params.dataIndex;
                        return [`{normal${index}|${params.name}}\n{value${index}|${val[0]}}`].join('\n');
                    },
                    padding: [0, -20],
                    rich: getRich(),
                },
                emphasis: {
                    show: true,
                },
            },
            startAngle: 220 - (val[0] / 100) * 260 - 1,
            endAngle: -44,
            itemStyle: {
                normal: {
                    color: colors[0],
                    shadowBlur: 0,
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
            },
            data: [
                {
                    value: 0.1,
                    name: '目标',
                },
                {
                    value: 99.9,
                    name: '空白',
                    label: {
                        show: false,
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,0,0,0)',
                        },
                        emphasis: {
                            color: 'rgba(0,0,0,0)',
                        },
                    },
                },
            ],
        },
        {
            type: 'pie',
            name: '标准',
            radius: ['78%', '82%'],
            center: ['50%', '50%'],
            animation: false,
            label: {
                normal: {
                    show: true,
                    formatter: function (params) {
                        const index = params.dataIndex;
                        return [`{normal${index}|${params.name}}\n{value${index}|${val[1]}}`].join('\n');
                    },
                    padding: [0, -30],
                    rich: getRich(),
                },
                emphasis: {
                    show: true,
                },
            },
            startAngle: 220 - (val[1] / 100) * 260 - 2,
            endAngle: -44,
            itemStyle: {
                normal: {
                    color: colors[1],
                    shadowBlur: 0,
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
            },
            data: [
                {
                    value: 0.1,
                    name: '标准',
                },
                {
                    value: 99.9,
                    name: '空白',
                    label: {
                        show: false,
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,0,0,0)',
                        },
                        emphasis: {
                            color: 'rgba(0,0,0,0)',
                        },
                    },
                },
            ],
        },
        {
            type: 'pie',
            name: '预算',
            radius: ['78%', '82%'],
            center: ['50%', '50%'],
            animation: false,
            label: {
                normal: {
                    show: true,
                    formatter: function (params) {
                        const index = params.dataIndex;
                        return [`{normal${index}|${params.name}}\n{value${index}|${val[2]}}`].join('\n');
                    },
                    padding: [0, -20],
                    rich: getRich(),
                },
                emphasis: {
                    show: true,
                },
            },
            startAngle: 220 - (val[2] / 100) * 260 - 3,
            endAngle: -44,
            itemStyle: {
                normal: {
                    color: colors[2],
                    shadowBlur: 0,
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
            },
            data: [
                {
                    value: 0.1,
                    name: '预算',
                },
                {
                    value: 99.9,
                    name: '空白',
                    label: {
                        show: false,
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,0,0,0)',
                        },
                        emphasis: {
                            color: 'rgba(0,0,0,0)',
                        },
                    },
                },
            ],
        },
    ],
};
