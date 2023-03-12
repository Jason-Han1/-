var highlight = '#0cb4d7';
var demoData = [
    {
        name: '当前在线人数',
        value: 72,
        unit: '人',
        pos: ['12%', '52%'],
        range: [0, 200],
    },
    {
        name: '我的学生数量',
        value: 80,
        unit: '人',
        pos: ['37%', '52%'],
        range: [0, 200],
    },
    {
        name: '我的班级数量',
        value: 18,
        unit: '个',
        pos: ['63%', '52%'],
        range: [0, 20],
    },
    {
        name: '累计登录人数',
        value: 16500,
        unit: '万人',
        pos: ['88%', '52%'],
        range: [0, 20000],
    },
];
option = {
    series: (function () {
        var result = [];

        demoData.forEach(function (item) {
            result.push(
                // 外围刻度
                {
                    type: 'gauge',
                    center: item.pos,
                    radius: '25%', // 1行4个
                    splitNumber: item.splitNum || 10,
                    min: item.range[0],
                    max: item.range[1],
                    startAngle: 225,
                    endAngle: -45,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            shadowBlur: 0,
                            color: [[1, '#0f9fd6']],
                        },
                    },
                    axisTick: {
                        show: true,
                        lineStyle: {
                            color: '#c1bfc0',
                            width: 1,
                        },
                        length: -16,
                        splitNumber: 10,
                    },
                    splitLine: {
                        show: true,
                        length: -18,
                        lineStyle: {
                            color: '#c1bfc0',
                            width: 2,
                        },
                    },
                    axisLabel: {
                        distance: -20,
                        textStyle: {
                            color: highlight,
                            fontSize: '14',
                        },
                    },
                    pointer: {
                        show: 0,
                    },
                    detail: {
                        show: 0,
                    },
                },

                // 内侧指针、数值显示
                {
                    name: item.name,
                    type: 'gauge',
                    center: item.pos,
                    radius: '20%',
                    startAngle: 225,
                    endAngle: -45,
                    min: item.range[0],
                    max: item.range[1],
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: [
                                [item.value / item.range[1], highlight],
                                [1, '#e5ecf6'],
                            ],
                            width: 12,
                        },
                    },
                    axisTick: {
                        show: 0,
                    },
                    splitLine: {
                        show: 0,
                    },
                    axisLabel: {
                        show: 0,
                    },
                    pointer: {
                        show: false, //指针设置
                        length: '105%',
                    },
                    detail: {
                        show: true,
                        offsetCenter: [0, '0'],
                        textStyle: {
                            fontSize: 18,
                            color: '#0fb3d9',
                            lineHeight: 24,
                            fontWeight: 'normal',
                        },
                        formatter: ['{value} ' + (item.unit || ''), '{name|' + item.name + '}'].join('\n'),
                        rich: {
                            name: {
                                fontSize: 14,
                                lineHeight: 20,
                                color: '#333',
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: highlight,
                        },
                    },
                    data: [
                        {
                            value: item.value,
                        },
                    ],
                }
            );
        });

        return result;
    })(),
};
