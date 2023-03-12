option = {
    backgroundColor: '#000928',
    tooltip: {},
    legend: {
        show: true,
        icon: "circle",
        bottom: 30,
        center: 0,
        itemWidth: 14,
        itemHeight: 14,
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowBlur: 30,
        shadowOffsetX: 10,
        shadowOffsetY: 10,
        // itemGap: 30,
        orient: "horizontal",
        data: ['一级权重分析d', '二级权重分析'],
        textStyle: {
            fontSize: 14,
            color: '#fff'
        },
    },

    radar: {
        // shape: 'circle',
        radius: '60%',
        center: ['50%', '50%'],
        startAngle: 0,
        triggerEvent: true,
        name: {
            textStyle: {
                color: '#fff',
                fontSize: '20',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        nameGap: '2',
        indicator: [{
                name: '设备',
                max: 6500
            },
            {
                name: '建材',
                max: 16000
            },
            {
                name: '食品',
                max: 30000
            },
            {
                name: '服装',
                max: 38000
            },
            {
                name: '旅游',
                max: 52000
            },
        ],
        splitArea: {
            areaStyle: {
                color: [
                    'rgba(0,255,255, 0.1)', 'rgba(0,255,255, 0.2)',
                    'rgba(0,255,255, 0.3)', 'rgba(0,255,255, 0.4)',
                    'rgba(0,255,255, 0.5)', 'rgba(0,255,255, 0.6)',
                ].reverse(),
                shadowColor: 'rgba(0, 0, 0, 1)',
                shadowBlur: 30,
                shadowOffsetX: 10,
                shadowOffsetY: 10
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,206,209, 0.3)'
            }
        },
        splitLine: {
            lineStyle: {
                width: 1,
                color: [
                    'rgba(0,206,209, 0.1)', 'rgba(0,206,209, 0.2)',
                    'rgba(0,206,209, 0.3)', 'rgba(0,206,209, 0.4)',
                    'rgba(0,206,209, 0.5)', 'rgba(0,206,209, 0.6)'
                ].reverse()
            }
        }

    },
    series: [{
            name: '一级权重分析',
            type: 'radar',
            areaStyle: {
                normal: {
                    color: 'rgba(127,255,210, 0.5)'
                }
            },
            symbol: 'circle',
            symbolSize: 12,
            itemStyle: {
                color: 'rgba(127,255,210,0.8)',
                borderColor: 'rgba(127,255,210,0.2)',
                borderWidth: 10,
            },
            lineStyle: {
                color: 'rgba(127,255,210, 0.6)',
                width: 2
            },
            label: {
                show: true,
            },
            data: [
                [4600, 13000, 25000, 23500, 25000]
            ]
        },
        {
            name: '二级权重分析',
            type: 'radar',
            areaStyle: {
                normal: {
                    color: 'rgba(255,237,145, 0.5)'
                }
            },
            symbol: 'circle',
            symbolSize: 12,
            itemStyle: {
                color: 'rgba(255,237,145,0.8)',
                borderColor: 'rgba(255,237,145,0.2)',
                borderWidth: 10,
            },
            lineStyle: {
                color: 'rgba(255,237,145, 0.6)',
                width: 2
            },
            data: [
                [5300, 15000, 12800, 13500, 15000]
            ]
        }
    ]
}