option = {
    title: {
        text: '基础雷达图'
    },
    tooltip: {},
    legend: {
        data: ['2km以上平均出行距离（km）', '2km以上出行距离众数（km）']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: '北向', max: 20},
            { name: '西向', max: 20},
            { name: '南向', max: 20},
            { name: '东向', max: 20}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [10.05, 5.13, 7.66, 8.95],
                name: '2km以上平均出行距离（km）'
            },
            {
                value: [4.2346, 6.5828, 13.9896, 15.323],
                name: '2km以上出行距离众数（km）'
            }
        ]
    }]
};