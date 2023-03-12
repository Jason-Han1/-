option = {
    title: {
        text: 'OD方向统计雷达图'
    },
    tooltip: {},
    legend: {
        data: ['OD统计']
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
            { name: '北', max: 350},
            { name: '西北', max: 350},
            { name: '西', max: 350},
            { name: '西南', max: 350},
            { name: '南', max: 350},
            { name: '东南', max: 350},
            { name: '东', max: 350},
            { name: '东北', max:350}
        ]
    },
    series: [{
        name: 'OD方向统计',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [200, 100, 285,150, 200, 100,250,100],
                name: 'OD统计'
            },
        ]
    }]
};