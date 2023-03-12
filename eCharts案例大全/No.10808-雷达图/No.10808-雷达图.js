option = {
    backgroundColor: "white",
    title: {
        text: '雷达图'
    },
    tooltip: {},
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
           { name: '健康人群', max: 6500},
           { name: '健康生活', max: 16000},
           { name: '健康服务', max: 30000},
           { name: '健康保障', max: 38000},
           { name: '健康环境', max: 52000},
           { name: '健康产业', max: 52000}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '风险'
            }
        ]
    }]
};