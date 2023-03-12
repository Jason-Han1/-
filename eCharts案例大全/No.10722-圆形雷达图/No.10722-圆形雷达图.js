var max = 4;
var min = -4;
option = {
    color: ['#4587E7'],
    tooltip: {},
    backgroundColor: '#041a55',
    radar: {
        name: {
            textStyle: {
                color: '#fff'
            },
            fontSize: 14
        },
        shape: 'circle',
        center: ['50%', '50%'],
        radius: '80%',
        scale: true,
        startAngle: 135,
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
            }
        ],
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        // 各个数据项与雷达图中心点的连线
        axisLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#0457a0'
            }
        },
        axisLabel: {
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
            show: false
        },
        // 雷达图绘图区域圆形虚线分割线
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#0457a0'
            }
        },
        
    },
    series: [{
        name: '预算',
        type: 'radar',
        // 雷达图点围成的区域
        areaStyle: {
            opacity: 0.1,
        },
        lineStyle: {
            width: 1,
            type: 'solid',
            color: '#19bbf1',
            shadowColor: 'rgba(25,187,241, 1)',
            shadowBlur: 15
        },
        data: [{
            value: [2, 3, 2, 3],
            name: '预算分配'
        }]
    }]
};