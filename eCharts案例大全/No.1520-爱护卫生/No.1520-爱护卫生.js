option = {
    title: {
        text: '爱护卫生',
    },
    tooltip: {},
    legend: {
        symbol: 'circle',
        right: 'right',
    },
    radar: {
        indicator: [
            { name: '个人卫生', max: 100 },
            { name: '班级卫生', max: 100 },
            { name: '劳动岗', max: 100 },
        ],
        splitArea: {
            areaStyle: {
                color: ['rgba(37,79,146,.2)', 'rgba(37,79,146,.2)', 'rgba(37,79,146,.2)', 'rgba(37,79,146,.2)'],
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowBlur: 10,
            },
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(211, 253, 250, 0.8)',
            },
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(211, 253, 250, 0.8)',
            },
        },
    },
    series: [
        {
            type: 'radar',
            data: [
                { name: '六（1）', value: [22, 82, 41], areaStyle: {} },
                { name: '六（2）', value: [42, 38, 96], areaStyle: {} },
                { name: '六（3）', value: [77, 62, 21], areaStyle: {} },
                { name: '六（4）', value: [66, 48, 27], areaStyle: {} },
                { name: '六（5）', value: [29, 82, 88], areaStyle: {} },
            ],
        },
    ],
};
