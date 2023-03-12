option = {
    title: {
        text: '运动得分雷达图'
    },
    color: ['#98F5FF', '#8B5742'],
    tooltip: {},
    legend: {
        data: ['篮球', '游泳','现代健身']
    },
    radar: {
        // shape: 'circle',
        indicator: [{
            name: '装备',
            max: 10000
        }, {
            name: '知识',
            max: 16000
        }, {
            name: '服务-场地',
            max: 30000
        }, {
            name: '服务-培训',
            max: 38000
        }, ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [{
            value: [4300, 10000, 28000, 35000],
            name: '游泳'
        }, {
            value: [2341, 13000, 2800, 3000],
            name: '篮球'
        }, {
            value: [5000, 14000, 28000, 31000],
            name: '现代健身'
        }]
    }]
};