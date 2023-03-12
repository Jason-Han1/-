option = {
    backgroundColor:'#FFF',
    tooltip: {
        show: true
    },
    radar: {
        radius: '60%',
        center: ['50%', '55%'],
        // startAngle: 0,
        splitNumber: 5,
        nameGap: 10,// 图和字的间距 默认15 number
        name: {
            textStyle: {
                color: '#000',
            }
        },
        axisLine: {
            lineStyle: {
                color: '#E6E6E6'
            }
        },
        splitLine: {
            lineStyle: {
                width: 1,
                color: '#E6E6E6'
            }
        },
        splitArea: {
            areaStyle: {
                color: [ '#f8f8f8', '#fff', ].reverse(),
                
            }
        },
        indicator: [{
                name: '0岁及以下',
                max: 100
            },
            {
                name: '30岁以下',
                max: 100
            },
            {
                name: '30-39岁',
                max: 100
            },
            {
                name: '40-49岁',
                max: 100
            },
            {
                name: '50-59岁',
                max: 100
            }
        ]
    },
    series: [{
        name: '性别年龄分布',
        type: 'radar',
        symbolSize: 8,
        itemStyle: {
                borderColor: '#007AFF',
                borderWidth: 2,
            },
        areaStyle: {
            normal: {
                width: 1,
                opacity: 0.3,
            },
        },
        data: [{
            itemStyle: {
                normal: {
                    color: '#0083FF',
                },
            },
            value: [20, 33, 80, 50, 30]
        }]
    }]
};