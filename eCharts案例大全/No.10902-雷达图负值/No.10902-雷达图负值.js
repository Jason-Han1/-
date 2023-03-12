var max = 200, min = -50;
option = {
    color: ['#4587E7'],
    tooltip: {},
    radar: {
        name: {
            textStyle: {
                color: '#333'
            },
            fontSize: 14
        },
        shape: 'circle',
        center: ['50%', '50%'],
        radius: '80%',
        triggerEvent: false,
        indicator: [{
                name: '销售',
                max: max,
                min: min
            },
            {
                name: '管理',
                max: max,
                min: min
            },
            {
                name: '技术',
                max: max,
                min: min
            },
            {
                name: '客服',
                max: max,
                min: min
            },
            {
                name: '研发',
                max: max,
                min: min
            },
            {
                name: '市场',
                max: max,
                min: min
            }
        ],
    },
    series: [{
        name: '预算',
        type: 'radar',
        areaStyle: {
            opacity: 0.1
        },
        lineStyle:{
            width: 1
        },
        data: [{
            value: [100, 8, -40, 80, 200],
            name: '预算分配'
        }]
    }]
};