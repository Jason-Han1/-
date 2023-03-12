var data = [{
        name: '今日拥堵指数',
        value: 55.2
    },
    {
        name: '昨日拥堵指数',
        value: 20.2
    }
]

option = {
    backgroundColor: '#000',
    series: [{
            data: [data[0]],
            type: 'gauge',
            name: data[0].name,
            title: {
                show: true,
                offsetCenter: [0, '180%'],
                color: '#fff',
                fontSize: 14
            },
            center: ['25%', '35%'],
            radius: '60%',
            startAngle: '220',
            endAngle: '-40',
            splitNumber: '12',
            pointer: {
                show: true,
                length: '80%'
            },
            itemStyle: {
                normal: {
                    color: {
                        x: '0.00',
                        y: '0.00',
                        x2: '1.00',
                        y2: '1.00',
                        type: 'linear',
                        global: false,
                        colorStops: [{
                                offset: 1,
                                color: '#AF6030'
                            },
                            {
                                offset: 0,
                                color: '#EED25F'
                            }
                        ]
                    }
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 8,
                    color: [
                        [
                            1,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: '#2081DF'
                                },
                                {
                                    offset: 0.5,
                                    color: '#91FCC1'
                                },
                                {
                                    offset: 1,
                                    color: '#2081DF'
                                }
                            ])
                        ]
                    ]
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 8,
                lineStyle: {
                    color: '#031544',
                    width: 2
                }
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: true,
                offsetCenter: [0, '110%'],
                color: '#65FDF9',
                fontSize: 28,
                fontWeight: 'bold',
                fontFamily: 'hkxzyW7'
            }
        },
        {
            data: [data[1]],
            type: 'gauge',
            name: data[1].name,
            title: {
                show: true,
                offsetCenter: [0, '195%'],
                color: '#fff',
                fontSize: 14
            },
            center: ['75%', '40%'],
            radius: '50%',
            startAngle: '220',
            endAngle: '-40',
            splitNumber: '12',
            pointer: {
                show: true,
                length: '80%'
            },
            itemStyle: {
                normal: {
                    color: {
                        x: '0.00',
                        y: '0.00',
                        x2: '1.00',
                        y2: '1.00',
                        type: 'linear',
                        global: false,
                        colorStops: [{
                                offset: 1,
                                color: '#AF6030'
                            },
                            {
                                offset: 0,
                                color: '#EED25F'
                            }
                        ]
                    }
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 8,
                    color: [
                        [
                            1,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: '#2081DF'
                                },
                                {
                                    offset: 0.5,
                                    color: '#91FCC1'
                                },
                                {
                                    offset: 1,
                                    color: '#2081DF'
                                }
                            ])
                        ]
                    ]
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 8,
                lineStyle: {
                    color: '#031544',
                    width: 2
                }
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: true,
                offsetCenter: [0, '125%'],
                color: '#B7EBFE',
                fontSize: 20,
                fontFamily: 'hkxzyW7'
            }
        }
    ]

}