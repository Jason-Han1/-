var indicator = [
    {
        text: '流量',
        max: 5000,
    },
    {
        text: '通行能力',
        max: 5000,
    },
    {
        text: '排队长度',
        max: 5000,
    },
    {
        text: '饱和度',
        max: 5000,
    },
    {
        text: '失衡系数',
        max: 5000,
    },
    {
        text: '停车次数',
        max: 5000,
    },
];
option = {
    color: ['#4BFFFC', '#4A99FF'],
    legend: {
        orient: 'horizontal',
        icon: 'rectangle',
        data: ['实际', '标准'],
        top: '10%',
        itemWidth: 16,
        itemHeight: 5,
        itemGap: 21,
        textStyle: {
            fontSize: 12,
            color: ['#4BFFFC', '#4A99FF'],
        },
    },
    radar: {
        name: {
            textStyle: {
                color: '#6887B3',
                fontSize: 12,
            },
        },
        center: ['50%', '50%'],
        radius: '50%',
        indicator: indicator,
        splitArea: {
            // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: false,
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#113865', // 分隔线颜色
                width: 1, // 分隔线线宽
            },
        },
    },
    series: [
        {
            type: 'radar',
            symbolSize: 0,
            data: [
                {
                    value: [4300, 4700, 3600, 3900, 3800, 2800],
                    name: '实际',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: '#0093FF',
                            },
                        },
                    },
                },
                {
                    value: [3200, 3000, 3400, 2000, 3900, 2000],
                    name: '标准',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: '#4BFFFC',
                            },
                        },
                    },
                },
            ],
        },
    ],
};
