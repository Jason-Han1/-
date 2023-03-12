option = {
    title: {
        text: '基础雷达图'
    },
    tooltip: {},
    legend: {
        data: ['全部资产']
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
           { name: '教学', max: 6500},
           { name: '科研', max: 16000},
           { name: '行政', max: 30000},
           { name: '后勤', max: 38000},
           { name: '离退休', max: 52000},
           { name: '其他', max: 25000}
        ]
    },
    series: [{
        name: '资产使用方向分布',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '全部资产'
            }
        ]
    }]
};