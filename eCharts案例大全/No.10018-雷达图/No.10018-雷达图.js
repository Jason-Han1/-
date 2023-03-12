var max = 200, min = -50;
option = {
    color: ['red'],
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
                name: '流动性',
                max: max,
                min: min
            },
            {
                name: '有利与不利因素',
                max: max,
                min: min
            },
            {
                name: '周边配套',
                max: max,
                min: min
            },
        ],
    },
    series: [{
        name: '综合评分',
        type: 'radar',
        areaStyle: {
            opacity: 0.1
        },
        lineStyle:{
            width: 1
        },
        data: [{
            value: [100, 8, -40],
            name: '小区综合评分'
        }]
    }]
};