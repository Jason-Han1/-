option = {
    radar: [{
        indicator: [{
                text: '市场保有量',
                max: 150
            },
            {
                text: '数据回传准确率',
                max: 150
            },
            {
                text: '故障及时修复率',
                max: 150
            },
            {
                text: '数据回传及时',
                max: 120
            }

        ],
        splitArea: {
            areaStyle: {
                color: ['rgba(114, 172, 209, 0.2)',
                    'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                    'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'
                ],
            }
        },
        radius: 120
    }],
    series: [{
        name: '成绩单',
        type: 'radar',
        radarIndex: 0,
        data: [{
            value: [90, 113, 140, 30],
            areaStyle: {
                normal: {
                    opacity: 0.9,
                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
                            color: '#B8D3E4',
                            offset: 0
                        },
                        {
                            color: '#72ACD1',
                            offset: 1
                        }
                    ])
                }
            }
        }]
    }]
}