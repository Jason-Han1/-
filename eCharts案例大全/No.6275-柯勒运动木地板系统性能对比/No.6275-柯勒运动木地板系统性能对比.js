option = {
    title: {
        left: 'center' ,
        top : 10,
        text: '柯勒运动木地板系统性能对比'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        left: 'center' ,
        top : 50,
        data: ['适用性      ', '斯利普定', '瑞麒诺', '艾利斯', '瑞兹酷迅']
    },
    radar: [
        {
            indicator: [
                {text: '篮球', max: 100 },
                {text: '排球', max: 100},
                {text: '跆拳道', max: 100},
                {text: '羽毛球', max: 100}
            ],
            center: ['30%', '60%'],
            radius: 80
        },
        {
            indicator: [
                {text: '球体反弹', max: 100},
                {text: '垂直变形', max: 40},
                {text: '冲击吸收', max: 60},
                {text: '稳定性', max: 100},
                {text: '施工效率', max: 100}
            ],
            radius: 80,
            center: ['70%', '60%'],
        },
        
    ],
    series: [
        {
            type: 'radar',
            tooltip: {
                trigger: 'item'
            },
            areaStyle: {},
            data: [
                {
                    value: [95, 60, 20, 70],
                    name: '适用性      '
                }
            ]
        },
        {
            type: 'radar',
            radarIndex: 1,
            areaStyle: {},
            data: [
                {
                    value: [90, 35, 57, 95, 60],
                    name: '斯利普定'
                    
                },
                {
                    value: [95, 29, 53, 90, 40],
                    name: '瑞麒诺'
                },
                {
                    value: [90, 33, 61, 90, 93],
                    name: '艾利斯'
                }
            ]
        },
        
    ]
};
