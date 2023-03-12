option = {
    title: {
        text: '基础雷达图'
    },
    tooltip: {},
    radar: {
        // shape: 'circle',
        splitNumber: 4,
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [5, 5]
            }
        },
        indicator: [{
                name: '攻击途径',
                max: 10
            },
            {
                name: '攻击难度',
                max: 10
            },
            {
                name: '权限要求',
                max: 10
            },
            {
                name: '机密性影响',
                max: 10
            },
            {
                name: '完整性影响',
                max: 10
            },
            {
                name: '可用性影响',
                max: 10
            }
        ]
    },
    series: [{
        name: '风险评估',
        type: 'radar',
        areaStyle: {
            normal: {
                width: 1,
                opacity: 0.7,
            },
        },
        data: [{
            itemStyle: {
                normal: {
                    color: '#67abff',
                    lineStyle: {
                        color: '#67abff',
                    },
                },
            },
            value: [3, 5, 8, 9, 10, 8]
        }]
    }]
};