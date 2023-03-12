option = {
    // backgroundColor: '#02203d',
    title: {
        text: 'sql注入统计',
        x: 'center',
        // y: 'top',
        show: false,
        bottom: '20px',
        textStyle: {
            color: '#fff',
        },
    },
    series: [
        {
            name: '内环',
            type: 'gauge',
            radius: '75%',
            clockwise: false,
            startAngle: '90',
            endAngle: '-269.9999',
            splitNumber: '100',
            detail: {
                offsetCenter: [0, 0],
                formatter: `{fline|32}{tline|次}`,
                color: '#7BCEF6',
                rich: {
                    fline: {
                        padding: [0, 8],
                        fontSize: 24,
                        color: '#7BCEF6',
                    },
                    tline: {
                        fontSize: 12,
                        color: '#7BCEF6',
                    },
                },
            },
            pointer: {
                show: true,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [0, '#7ED0F6'],
                        [
                            36 / 100,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: '#7ED0F6',
                                },
                                {
                                    offset: 0.3,
                                    color: '#7ED0F6',
                                },
                                {
                                    offset: 1,
                                    color: '#173c5e',
                                },
                            ]),
                        ],
                        [1, '#173c5e'],
                    ],
                    width: 50,
                    shadowColor: 'rgba(33, 174, 234, 0)',
                    shadowBlur: 0,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                length: 50,
                lineStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 255, 255, 0)',
                    shadowOffsetY: '0',
                    color: '#020f18',
                    width: 3,
                },
            },
            axisLabel: {
                show: false,
            },
        },
        {
            name: '外环',
            type: 'pie',
            radius: ['79%', '81%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    shadowBlur: 60,
                    shadowColor: 'rgba(0, 118, 239,1)',
                    color: '#7ED0F6',
                },
            },
            label: {
                show: false,
            },
            data: [100],
        },
        {
            name: '内环',
            type: 'pie',
            radius: ['55%', '57%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    shadowBlur: 0,
                    shadowColor: 'rgba(0, 118, 239,0.5)',
                    color: '#7ED0F6',
                },
            },
            label: {
                show: false,
            },
            data: [100],
        },
    ],
};
