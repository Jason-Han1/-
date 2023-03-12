option = {
    title: {
        text: '分类雷达图',
    },
    radar: {
        indicator: [{
                name: '0',
                max: 100
            },
            {
                name: '54',
                max: 100
            },
            {
                name: '48',
                max: 100
            },
            {
                name: '42',
                max: 100
            },
            {
                name: '36',
                max: 100
            },
            {
                name: '30',
                max: 100
            },
            {
                name: '24',
                max: 100
            },
            {
                name: '18',
                max: 100
            },
            {
                name: '12',
                max: 100
            },
            {
                name: '6',
                max: 100
            }
        ],
        center: ['50%', '50%'],
        radius: '60%'

    },

    series: [{
        type: 'radar',
        lineStyle: {
            opacity: 0
        },
        areaStyle: {
            normal: {}
        },
        data: [
            {
                value: [100, 100, 0, 0, 0, 0, 0, 0, 0, 0],
            },
            {
                value: [0, 100, 100, 0, 0, 0, 0, 0, 0, 0],
            },
            {
                value: [0, 0, 100, 100, 0, 0, 0, 0, 0, 0],
            },
            {
                value: [0, 0, 0, 100, 100, 0, 0, 0, 0, 0],
            },
            {
                value: [0, 0, 0, 0, 100, 100, 0, 0, 0, 0],
            },
            {
                value: [0, 0, 0, 0, 0, 100, 100, 0, 0, 0],
            },
            {
                value: [0, 0, 0, 0, 0, 0, 100, 100, 0, 0],
            },
            {
                value: [0, 0, 0, 0, 0, 0, 0, 100, 100, 0],
            },
            {
                value: [0, 0, 0, 0, 0, 0, 0, 0, 100, 100],
            },
            {
                areaStyle: {
                    color: 'red',
                },
                value: [100, 0, 0, 0, 0, 0, 0, 0, 0, 100],
            }
        ]
    }]
};