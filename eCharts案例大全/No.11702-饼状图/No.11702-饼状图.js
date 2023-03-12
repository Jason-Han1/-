option = {
    backgroundColor: '#FFF',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        x: 'center',
        bottom: '4%',
        itemWidth: 12,
        itemHeight: 12,
        icon: 'circle',
        data: ['因病', '车祸', '中毒', '溺水', '自杀', '事故', '他杀',
            '其他', '自然灾害', '自然死亡'
        ]
    },
    series: [{
        name: '逝者死亡原因',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '50%'],
        center: ['50%', '50%'],
        color: ['#20e3ff', '#ff4db5', '#ac6aef', '#2e34c0', '#fc3416',
            '#58fff3', '#1f5bf1', '#2bd1ff', '#fe0099', '#006af8',
        ],
        label: {
            normal: {
                show: false,
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },

        data: [{
                value: 300,
                name: '车祸'
            },
            {
                value: 100,
                name: '中毒'
            },
            {
                value: 100,
                name: '溺水'
            },
            {
                value: 100,
                name: '自杀'
            },
            {
                value: 200,
                name: '事故'
            },
            {
                value: 100,
                name: '他杀'
            },
            {
                value: 100,
                name: '其他'
            },
            {
                value: 100,
                name: '自然灾害'
            },
            {
                value: 100,
                name: '自然死亡'
            },
            {
                value: 3500,
                name: '因病'
            },
        ]
    }, ]
};