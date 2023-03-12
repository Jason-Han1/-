var max = 4;
var min = -4;
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
        scale: true,
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
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    polar: {},
    angleAxis: {
        min: 0,
        max: 360,
        interval: 5,
        clockwise: false,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    radiusAxis: {
        min: min,
        max: max,
        interval: 2,
        splitArea: {
            show: true
        }
    },
    series: [{
        name: '预算',
        type: 'radar',
        areaStyle: {
            opacity: 0.1
        },
        lineStyle: {
            width: 1
        },
        data: [{
            value: [4, -4, 2, 3, 0, 1],
            name: '预算分配'
        }]
    }]
};