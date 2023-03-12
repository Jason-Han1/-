option = {
    backgroundColor: '#000',
    series: [
        {
            name: '内层数据刻度',
            type: 'gauge',
            radius: '72',
            min: 0,
            max: 100,
            center: ['50%', '75%'],
            startAngle: 186,
            endAngle: -6,
            splitNumber: 5,

            axisLine: {
                roundCap: true,
                lineStyle: {
                    width: 12,
                    // color: [[0.2, '#77D97F'],[0.8, '#4285F4'],[1, '#FF7E7F']],
                    color: [[1, '#3383a2']],
                },
            },
            progress: {
                show: true,
                roundCap: true,
                width: 11,
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#ffffff',
                            },
                            {
                                offset: 0.3,
                                color: '#54cae2',
                            },
                            {
                                offset: 0.7,
                                color: '#3690a3',
                            },
                            {
                                offset: 1,
                                color: '#2d7a8b',
                            },
                        ],
                        // global: false // 缺省为 false
                    },
                    borderColor: '#1b5b76',
                    borderWidth: '2',
                },
            },
            axisTick: {
                show: true,
                splitNumber: 5,
                length: 8,
                distance: -10,
                lineStyle: {
                    width: 7,
                    color: '#1c5a73',
                },
            },
            splitLine: {
                show: true,
                length: 1,
                lineStyle: {
                    width: 2,
                    color: '#ffffff',
                },
            },

            axisLabel: {
                distance: 5,
                color: '#FFF',
                fontSize: 11,
            },
            pointer: {
                length: '60%',
                width: 2,
                offsetCenter: [0, '-40%'],
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#ffffff',
                            },
                            {
                                offset: 0.7,
                                color: '#ffffff',
                            },
                            {
                                offset: 1,
                                color: '#2d7a8b',
                            },
                        ],
                        // global: false // 缺省为 false
                    },
                    // shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 7,
                    shadowColor: '#ffffff',
                },
            },
            detail: {
                offsetCenter: ['4%', '-5%'],
                formatter: function (value) {
                    return '{value|' + value.toFixed(0) + '}{unit|%}';
                },
                rich: {
                    value: {
                        fontSize: 28,
                        fontWeight: 'bolder',
                        color: '#ffffff',
                        textShadowBlur: '12',
                        textShadowColor: '#3ea0b5',
                    },
                    unit: {
                        fontSize: 28,
                        fontWeight: 'bolder',
                        color: '#ffffff',
                        textShadowBlur: '12',
                        textShadowColor: '#3ea0b5',
                    },
                },
            },
            data: [
                {
                    value: 40,
                },
            ],
        },
        {
            type: 'gauge',
            name: '外层辅助',
            radius: 80,
            startAngle: 186,
            center: ['50%', '75%'],
            endAngle: -6,
            min: 0,
            max: 100,
            splitNumber: 5,
            pointer: {
                show: false,
            },
            axisLine: {
                roundCap: true,
                show: true,
                lineStyle: {
                    color: [[1, '#3ea0b5']],
                    width: 3,
                    opacity: 0.5,
                    shadowColor: 'rgba(0,138,255,0.45)',
                    shadowBlur: 5,
                    shadowOffsetX: 1,
                    shadowOffsetY: 1,
                },
            },

            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
        },
        {
            name: '最内层线',
            type: 'gauge',
            radius: '44',
            center: ['50%', '75%'],
            startAngle: 186,
            endAngle: -6,

            splitLine: {
                show: false,
                lineStyle: {
                    opacity: 0,
                },
            },
            axisLabel: {
                show: false,
            },
            // 上面一圈
            itemStyle: {
                color: '#3ea0b5',
                shadowColor: 'rgba(0,138,255,0.45)',
                shadowBlur: 2,
                shadowOffsetX: 1,
                shadowOffsetY: 1,
            },
            // 刻度指到位置
            progress: {
                roundCap: true,
                show: true,
                roundCap: true,
                width: 3,
            },
            axisLine: {
                roundCap: true,
                show: true,
                lineStyle: {
                    color: [[1, '#3ea0b5']],
                    width: 3,
                    opacity: 0.5,
                    shadowColor: 'rgba(0,138,255,0.45)',
                    shadowBlur: 5,
                    shadowOffsetX: 1,
                    shadowOffsetY: 1,
                },
            },
            axisTick: {
                show: false,
            },
            pointer: {
                show: false,
            },
            detail: {
                show: false,
            },
            data: [
                {
                    value: 40,
                    // value: data
                },
            ],
        },
    ],
};
