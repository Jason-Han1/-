option = {
    backgroundColor: "#344b58",
    tooltip: {
        trigger: 'axis',
          backgroundColor: 'rgba(13, 178, 255, .4)',
          borderColor: 'rgba(13, 178, 255, 1)',
          borderWidth: 2,
          textStyle:{
            align:'left'
          }
    },
    radar: {
        indicator: [{
                name: '消防隐患',
                max: 100
            },
            {
                name: '劳动' + '\n' + '保障',
                max: 100
            },
            {
                name: '非法' + '\n' + '生产',
                max: 100
            },
            {
                name: '环境' + '\n' + '保护',
                max: 100
            },
            {
                name: '安全' + '\n' + '生产',
                max: 100
            },
        ],
        radius: '70%',
        center: ['50%', '50%'],
        shape: 'circle',
        splitNumber: 4,
        name: {
            textStyle: {
                color: '#ffffff',
                fontSize: 22
            }
        },
        splitArea: {
            areaStyle: {
                color: ['rgba(255,255,255,0.1)',
                    'rgba(255,255,255,0.03)', 'rgba(255,255,255,0.1)',
                    'rgba(255,255,255,0.03)'
                ]
            }
        },
        splitLine: {
            lineStyle: {
                color: [
                    '#6b6b6b', '#6b6b6b',
                    '#6b6b6b', '#6b6b6b',
                    '#6b6b6b', '#6b6b6b'
                ].reverse(),
                width: 3
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(238,238,238, 0.2)'
            }
        }
    },
    series: {

        name: '隐患类型',
        type: 'radar',
        tooltip: {
            trigger: 'item'
        },
        data: [{
            value: [100, 90, 80, 66, 90],

        }],
        symbol: 'circle',
        symbolSize: 12,
        itemStyle: {
            normal: {
                color: 'rgba(87,201,255,0.8)',
                borderColor: 'rgba(87,201,255,0.2)',
                borderWidth: 12,
            }
        },
        areaStyle: {
            normal: {
                color: 'rgba(13, 178, 255, 0.49)',
            }
        },
        lineStyle: {
            normal: {
                color: 'rgba(13, 178, 255, 1)',
                width: 5
            }
        },

    }


};