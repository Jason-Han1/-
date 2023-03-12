option = {
    title: {
        text: '基础雷达图'
    },
    tooltip: {},
    legend: {
        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
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
            { name: '销售（sales）', max: 0.9,min:-0.8},
            { name: '管理（Administration）', max: 0.9,min:-0.8},
            { name: '信息技术（Information Techology）', max: 0.9,min:-0.8},
            { name: '客服（Customer Support）', max: 0.9,min:-0.8},
            { name: '研发（Development）', max: 0.9,min:-0.8},
            { name: '市场（Marketing）', max: 0.9,min:-0.8}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [0.8, 0.5, 0.5, -0.3, -0.50000, -0.19000],
                name: '预算分配（Allocated Budget）'
            }
        ]
    }]
};