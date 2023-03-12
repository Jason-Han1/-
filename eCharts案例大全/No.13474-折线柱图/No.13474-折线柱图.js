option = {
    backgroundColor: '#0000ff',
    grid: {
        top: '23%',
        left: '0',
        bottom: '10%',
        right: '3%'
    },
    color: [new echarts.graphic.LinearGradient(
        0, 1, 0, 0, [{
                offset: 0,
                color: '#f16622'
            },
            {
                offset: 1,
                color: '#f3a721'
            }
        ]
    ), '#ff3d38', '#F4E925'],
    legend: {
        right: '5%',
        top: '5%',
        shadowColor: '#ffffff',
        shadowOffsetY: 2,
        data: [{
            name: '离职人数',
            icon: 'circle',
            textStyle: {
                fontSize: 16,
                color: '#ffffff'
            }
        }, {
            name: '离职率',
            icon: 'line',
            textStyle: {
                fontSize: 16,
                color: '#ffffff'
            }
        }]
    },
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月','4月','5月','6月','7月'],
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 2,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 1, 0, [{
                            offset: 0,
                            color: 'rgba(35, 128, 255, 0)'
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(103, 167, 255, 1)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(35, 128, 255, 0)'
                        }
                    ]
                )
            }
        },
        axisLabel: {
            show: true,
            color: 'rgba(255,255,255,0.8)',
            fontSize: 16
        }
    }],
    yAxis: [{
            type: 'value',
            axisLabel: {
                show: false,
                formatter: '{value} ml'
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0, [{
                                offset: 0,
                                color: 'rgba(255, 255, 255, 0)'
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(255, 255, 255, 0.4)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(255, 255, 255, 0)'
                            }
                        ]
                    )
                }
            },
        },
        {
            type: 'value',
            axisLabel: {
                show: false,
                formatter: '{value} °C'
            },
            axisLabel: {
                show: false,
                formatter: '{value} ml'
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
        }
    ],
    series: [{
            name: '离职人数',
            type: 'bar',
            barWidth: 40,
            data: [180, 134,120, 98, 104, 115, 97]
        },
        {
            name: '离职率',
            type: 'line',
            yAxisIndex: 1,
            lineStyle: {
                width: 4,
            },
            data: [8.5, 7.6,7.3, 5.8, 6.1, 7.1, 5.3]
        },
        {
            name: '散点',
            type: 'effectScatter',
            yAxisIndex: 1,
            data: [8.5, 7.6,7.3, 5.8, 6.1, 7.1, 5.3]
        }
    ]
};