var data = 65; //百分比
option = {
    backgroundColor: '#0e202d',
    tooltip: {
        trigger: 'none',
    },
    xAxis: {
        data: ['百分比'],
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
            textStyle: {
                color: '#e54035',
            },
        },
    },
    yAxis: {
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    series: [
        {
            name: '最上层立体圆',
            type: 'pictorialBar',
            symbolSize: [300, 45],
            symbolOffset: [0, -20],
            z: 12,
            itemStyle: {
                normal: {
                    color: 'rgba(8,44,110, 1)',
                },
            },
            data: [
                {
                    value: 100,
                    symbolPosition: 'end',
                },
            ],
        },
        {
            name: '中间立体圆',
            type: 'pictorialBar',
            symbolSize: [300, 45],
            symbolOffset: [0, -20],
            z: 12,
            itemStyle: {
                normal: {
                    color: () =>
                        new echarts.graphic.LinearGradient(1, 1, 0, 0, [
                            {
                                offset: 0,
                                color: '#03C7F9',
                            },
                            {
                                offset: 1,
                                // color: '#03C7F922',
                                color: 'rgb(8,44,110)',
                            },
                        ]),
                    shadowColor: '#03C7F9',
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 4,
                },
            },
            data: [
                {
                    value: data,
                    symbolPosition: 'end',
                },
            ],
        },
        {
            name: '最底部立体圆',
            type: 'pictorialBar',
            symbolSize: [300, 45],
            symbolOffset: [0, 20],
            z: 12,
            itemStyle: {
                normal: {
                    color: () =>
                        new echarts.graphic.LinearGradient(0, 1, 1, 0, [
                            {
                                offset: 0,
                                color: '#03C7F9',
                            },
                            {
                                offset: 0.9,
                                // color: '#03C7F922',
                                color: 'rgba(8,44,110, 0.85)',
                            },
                        ]),
                    // shadowColor: '#03C7F9',
                    // shadowBlur: 30,
                    // shadowOffsetX: 0,
                    // shadowOffsetY: -10,
                },
            },
            data: [100 - data],
        },
        {
            //底部立体柱
            stack: '1',
            type: 'bar',
            itemStyle: {
                normal: {
                    // color: 'rgba(8,44,110, 0.94)',
                    color: () =>
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: 'rgba(18,85,213,0.77)',
                            },
                            // {
                            //     offset: 0.05,
                            //     color: '#47C8FF44',
                            // },
                            // {
                            //     offset: 0.1,
                            //     color: '#47C8FF00',
                            // },
                            // {
                            //     offset: 0.9,
                            //     color: '#47C8FF00',
                            // },
                            // {
                            //     offset: 0.95,
                            //     color: '#47C8FF44',
                            // },
                            {
                                offset: 1,
                                color: 'rgba(8,44,110, 0.77)',
                            },
                        ]),
                    opacity: 0.77,
                },
            },
            label: {
                distance: 15,
                show: true,
                position: data > 58 ? 'inside' : 'top',
                formatter: '{c}' + '%',
                fontSize: 100,
                color: '#1AFCFF',
                textShadowColor: '#03C7F9',
                textShadowBlur: 30,
                textShadowOffsetX: 5,
                textShadowOffsetY: 10,
            },

            silent: true,
            barWidth: 300,
            barGap: '-100%', // Make series be overlap
            data: [data],
        },
        {
            //上部立体柱
            stack: '1',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: () =>
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                            {
                                offset: 0,
                                color: '#47C8FF77',
                            },
                            {
                                offset: 0.05,
                                color: '#47C8FF44',
                            },
                            {
                                offset: 0.15,
                                color: '#47C8FF00',
                            },
                            {
                                offset: 0.85,
                                color: '#47C8FF00',
                            },
                            {
                                offset: 0.95,
                                color: '#47C8FF44',
                            },
                            {
                                offset: 1,
                                color: '#47C8FF77',
                            },
                        ]),
                },
            },
            silent: true,
            barWidth: 300,
            barGap: '-100%', // Make series be overlap
            data: [100 - data],
        },
    ],
};
