const dataSet = [
    ['录像功能', '点位分布', 'AI识别', '离线率', '在线率', '运行状态'],
    [120, 118, 130, 100, 99, 145],
    [110, 100, 30, 95, 80, 130],
];

const maxValue = [...dataSet[1], ...dataSet[2]].reduce((m, v) => Math.max(m, v), -Infinity);

const radius = 0.8;

option = {
    animationDuration: 2000,
    animationEasing: 'cubicInOut',
    backgroundColor: '#000000',
    tooltip: {
        // trigger: 'axis',
        // show: true
    },
    polar: {
        radius: radius * 100 + '%',
        center: ['50%', '50%'],
    },
    angleAxis: {
        type: 'category',
        clockwise: false,
        boundaryGap: false,
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false,
        },
    },
    radiusAxis: {
        type: 'value',
        max: 140,
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    radar: {
        indicator: dataSet[0].map((v) => ({ name: v, max: maxValue })),
        radius: radius * 100 + '%',
        center: ['50%', '50%'],
        shape: 'polygon',
        splitNumber: 5,
        name: {
            textStyle: {
                color: '#ffffff',
                fontSize: 24,
            },
        },
        splitArea: {
            areaStyle: {
                color: [
                    'rgba(255,255,255,0.1)',
                    'rgba(255,255,255,0.03)',
                    'rgba(255,255,255,0.1)',
                    'rgba(255,255,255,0.03)',
                ],
            },
        },
        splitLine: {
            lineStyle: {
                color: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff'].reverse(),
                width: 2,
            },
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255)',
            },
        },
    },

    series: [
        {
            name: 's2',
            type: 'radar',
            tooltip: {
                trigger: 'item',
            },
            data: [{ value: dataSet[2] }],
            symbol: 'circle',
            symbolSize: 12,
            itemStyle: {
                normal: {
                    color: '#fe897a',
                    borderColor: 'rgba(87,201,255,0.2)',
                    borderWidth: 0,
                },
            },
            areaStyle: {
                normal: {
                    color: '#a76e24',
                },
            },
            lineStyle: {
                normal: {
                    color: '#fe897a',
                    width: 5,
                },
            },
            z: 4,
        },
        {
            name: 's1',
            type: 'radar',
            tooltip: {
                trigger: 'item',
            },
            data: [
                {
                    value: dataSet[1],
                    label: {
                        normal: {
                            show: true,
                            formatter: function (params) {
                                return params.value;
                            },
                            color: '#fff',
                            fontSize: 20,
                        },
                    },
                },
            ],
            symbol: 'rect',
            symbolSize: 12,
            itemStyle: {
                normal: {
                    color: 'rgba(87,201,255,0.8)',
                    borderColor: 'rgba(87,201,255,0.2)',
                    borderWidth: 0,
                },
            },
            areaStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)',
                },
            },
            lineStyle: {
                normal: {
                    type: 'dashed',
                    color: 'rgba(13, 178, 255, 1)',
                    width: 5,
                },
            },
            z: 3,
        },
    ],
};
