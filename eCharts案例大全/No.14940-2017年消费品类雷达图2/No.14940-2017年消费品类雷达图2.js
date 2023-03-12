var option = {
    title: {
        text: '2017年消费品类雷达图',
        subtext: '郑州口岸跨境数据',
        left: 'center',
    },
    tooltip: {},
    legend: {
        top: 60,
        data: ['女性', '男性'],
    },
    radar: {
        radius: '60%',
        splitNumber: 8,
        axisLine: {
            lineStyle: {
                color: '#fff',
                opacity: .2
            }
        },
        splitLine: {
            lineStyle: {
                color: '#fff',
                opacity: .2
            }
        },
        splitArea: {
            areaStyle: {
                color: 'rgba(127,95,132,.3)',
                opacity: 1,
                shadowBlur: 45,
                shadowColor: 'rgba(0,0,0,.5)',
                shadowOffsetX: 0,
                shadowOffsetY: 15,
            }
        },
        indicator: [{
            name: '母婴玩具',
            max: 2000
        }, {
            name: '美妆个护',
            max: 2000
        }, {
            name: '服饰鞋包',
            max: 2000
        }, {
            name: '食品保健',
            max: 2000
        }, {
            name: '其他',
            max: 2000
        }, {
            name: '生活数码',
            max: 2000
        }]
    },
    series: [{
        type: 'radar',
        symbolSize: 0,
        areaStyle: {
            normal: {
                shadowBlur: 13,
                shadowColor: 'rgba(0,0,0,.2)',
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                opacity: 1
            }
        },
        data: [{
            value: [1800, 1400, 1200, 800, 100, 100],
            name: '女性'
        },{
            value: [1600, 300, 300, 600, 400, 1200],
            name: '男性'
        }]
    }],
    color: ['#ef4b4c', '#b1eadb']
};