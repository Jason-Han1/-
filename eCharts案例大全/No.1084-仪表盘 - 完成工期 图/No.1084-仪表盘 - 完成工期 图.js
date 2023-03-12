let day = 500;
let pre = 500 / 1100;
option = {
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: ['#37A2DA', '#32C5E9', '#67E0E3'],
    series: [
        {
            type: 'gauge',
            detail: {
                formatter: day + '天',
                color: '#F7B500',
            },
            title: {
                show: true,
                offsetCenter: [0, '80%'], //相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                // 文字的颜色,默认 #333。
                color: '#fff',
                fontSize: 24,
            },
            axisLabel: {
                // 刻度标签。
                show: true, // 是否显示标签,默认 true。
                color:'#fff'
            },
            axisTick: {
                // 刻度(线)样式。
                show: true, // 是否显示刻度(线),默认 true。
                splitNumber: 1,
            },
            splitLine: {
                show: false,
                length: 30,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 30,
                    shadowBlur: 0,
                    color: [
                        [
                            pre,
                            {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#62F68A', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: '#5183FF', // 100% 处的颜色
                                    },
                                ],
                                global: false, // 缺省为 false
                            },
                        ],
                        [1, '#E6EBF8'],
                    ],
                },
            },
            max: 100,
            splitNumber: 10,
            data: [
                {
                    value: pre * 100,
                    name: '总工期1100天',
                    itemStyle: {
                        // color:'yellow'
                    },
                },
            ],
        },
    ],
};
