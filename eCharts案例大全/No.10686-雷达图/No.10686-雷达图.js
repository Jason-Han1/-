option = {
    radar: {
        center: ['50%', '57%'],
        name: {
            textStyle: {
                color: '#7CA3CB',
            }
        },
        axisLine: {
            lineStyle: {
                color: '#0463DE',
                width: 2,
                type: 'dotted'
            },
        },
        splitLine: {
            lineStyle: {
                color: ['#0463DE'],
                width: 1,
            }
        },
        splitArea: {
            areaStyle: {
                color: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)'],
                shadowColor: '#fff'
            }
        },
        indicator: [{
                name: '行业信息',
                max: 1000
            },
            {
                name: '企业规模',
                max: 1000
            },
            {
                name: '企业信用',
                max: 1000
            },
            {
                name: '创新能力',
                max: 1000
            },
            {
                name: '人才潜力',
                max: 1000
            }
        ]
    },
    series: [{
        type: 'radar',
        data: [{
            value: [800, 700, 600, 900, 500],
            name: '数据',
            itemStyle: {
                normal: {
                    color: '#01D0FE'
                }
            },
            areaStyle: {
                normal: {
                    color: '#0580f2'
                }
            }
        }]
    }]
};