option = {
    legend: {
        data: ['个人科研数', '校平均科研数'],
        left :0
    },
    radar: [{
        indicator: [{
                text: '项目'
            },
            {
                text: '论文'
            },
            {
                text: '专利'
            },
            {
                text: '著作'
            }
        ],
        // center: ['25%', '50%'], 
        shape: 'circle',
        name: {
            // formatter: '【{value}】',
            textStyle: {
                color: '#72ACD1'
            }
        },
        splitArea: {
            areaStyle: {
                color: 'transparent',
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0)'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#46C4FF;',
                type: 'dashed'
            }
        }
    }, ],
    series: [{
            name: '雷达图',
            type: 'radar',
            // emphasis: {
            //     lineStyle: {
            //         width: 4
            //     }
            // },
            silent: true,
            data: [{
                    value: [100, 8, 0.40, 2000],
                    name: '个人科研数',
                    symbolSize: 0,
                    itemStyle: {
                        color: 'rgba(4, 92, 182, 0.6)'
                    },
                    areaStyle: {
                        color: 'rgba(4, 92, 182, 1)'
                    },
                },
                {
                    value: [60, 5, 0.30, 1500],
                    name: '校平均科研数',
                    symbolSize: 0,
                    itemStyle: {
                        color: 'rgba(0, 255, 255, 1)'
                    },
                }
            ]
        },

    ]
}