var highlight = '#03b7c9';

var value = 80;
option = {
    backgroundColor: '#222939',
    series: [
        // 外围刻度
        {
            type: 'gauge',
            center: ['50%', '50%'],
            radius: '33.33%', // 1行3个
            splitNumber: 10,
            min: 0,
            max: 100,
            startAngle: 225,
            endAngle: -45,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [
                        [1, 'rgba(0,0,0,0)']
                    ]
                }
            }, //仪表盘轴线
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.6)',
                    width: 1
                },
                length: -8
            }, //刻度样式
            splitLine: {
                show: true,
                length: -20,
                lineStyle: {
                    color: 'rgba(255,255,255,0.6)'
                }
            }, //分隔线样式
            axisLabel: {
                show: false,
                distance: -20,
                textStyle: {
                    color: highlight,
                    fontSize: '14',
                    fontWeight: 'bold'
                }
            },
            pointer: {
                show: 0
            },
            detail: {
                show: 0
            }
        },
        // 内侧指针、数值显示
        {
            name: "空气质量",
            type: 'gauge',
            center: ['50%', '50%'],
            radius: '28%',
            startAngle: 225,
            endAngle: -45,
            min: 0,
            max: 100,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 6,
                    color: [
                        [
                            value / 100, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: "#1ea899",
                                    },
                                    {
                                        offset: 1,
                                        color: "#f8a58b",
                                    }
                                ]
                            )
                        ],
                        [
                            1, '#fff'
                        ]
                    ]
                }
            },
            axisTick: {
                show: 0,
            },
            splitLine: {
                show: 0,
            },
            axisLabel: {
                show: 0
            },
            pointer: {
                show: false,
                length: '105%'
            },
            detail: {
                show: true,
                offsetCenter: [0, '15%'],
                textStyle: {
                    fontSize: 25,
                    color: '#fff'
                },
                formatter: [
                    '{value} %','{name|空气质量}'
                ].join('\n'),
                rich: {
                    name: {
                        fontSize: 20,
                        lineHeight: 30,
                        color: '#ddd'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: highlight,
                }
            },
            data: [{
                value: value
            }]
        }
    ]

};