var value = 60;

option = {
    backgroundColor: '#222939',
    series: [{
            type: 'gauge',
            radius: '80%',
            //splitNumber: 10,
            min: 10,
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
                //show:false,
                distance: 30,
                textStyle: {
                    color: '#03b7c9',
                    fontSize: '14',
                    fontWeight: 'bold'
                },
                formatter: '{value}%'
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
            name: '达标率',
            type: 'gauge',
            radius: '60%',
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
                                        color: '#ff0',
                                    },
                                    {
                                        offset: 1,
                                        color: '#f00',
                                    }
                                ]
                            )
                        ],
                        [
                            1, '#222e7d'
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
                offsetCenter: [0, '-10%'],
                textStyle: {
                    fontSize: 25,
                    color: '#fff'
                },
                formatter: [
                    '{name|达标率}' + '',
                    '' + '{value}%'
                ].join('\n'),
                rich: {
                    name: {
                        fontSize: 20,
                        lineHeight: 40,
                        color: '#fff',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#03b7c9',
                }
            },
            data: [{
                value: value
            }]
        }
    ]
};