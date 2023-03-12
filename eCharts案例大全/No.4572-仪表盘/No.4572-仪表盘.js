let data = {
    name: '应用',
    value: 66
};
let posCenter = ['50%', '60%'];
option = {
    backgroundColor: '#000',
    series: [{
            // 外围刻度
            type: 'gauge',
            radius: '80%',
            center: posCenter,
            splitNumber: 4,
            min: 0,
            max: 100,
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: [
                        [
                            1,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: 'rgba(1,50,140)'
                                },
                                {
                                    offset: 0.1,
                                    color: 'rgba(1,192,229,1)'
                                },
                                {
                                    offset: 0.9,
                                    color: 'rgba(1,192,229,1)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(1,50,140)'
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
                show: false
            },
            axisLabel: {
                show: false
            },
            pointer: {
                show: 0
            }
        },
        {
            // 内侧指针、数值显示
            name: '',
            type: 'gauge',
            radius: '70%',
            center: posCenter,
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 100,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 300,
                    color: [
                        [
                            1,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: 'rgba(1,192,229,0.2)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(219,100,159,0.5)'
                                }
                            ])
                        ]
                    ]
                }
            },
            axisTick: {
                show: 0
            },
            splitLine: {
                show: 0
            },
            axisLabel: {
                show: 0
            },
            pointer: {
                show: true,
                length: '105%',
                width: 3
            },
            detail: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#fff'
                }
            },
            data: [{
                value: data.value
            }],
            z: 9
        },
        {
            type: 'gauge',
            radius: '40%',
            center: posCenter,
            splitNumber: 4,
            min: 0,
            max: 100,
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: [
                        [
                            1,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: 'rgb(1,192,229)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(219,100,159)'
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
                show: false
            },
            axisLabel: {
                show: false
            },
            pointer: {
                show: 0
            },
            detail: {
                show: 0
            }
        },
        {
            type: 'gauge',
            radius: '70%',
            center: posCenter,
            splitNumber: 0, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 15,
                    color: [
                        [
                            data.value / 100,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: '#508cff'
                                },
                                {
                                    offset: 1,
                                    color: '#77f0ff'
                                }
                            ])
                        ],
                        [1, 'transparent']
                    ]
                }
            },
            //分隔线样式。
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            pointer: {
                show: false
            },
            title: {
                show: false
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: false
            },
            data: [{
                value: data.value
            }]
        },
        {
            //指针外环
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            center: posCenter,
            radius: ['4%', '6%'],
            z: 10,
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 100,
                itemStyle: {
                    normal: {
                        color: '#00fffc'
                    }
                }
            }]
        },
        {
            //指针内环
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            center: posCenter,
            radius: ['0%', '4%'],
            z: 10,
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 100,
                itemStyle: {
                    normal: {
                        color: '#bbfdff'
                    }
                }
            }]
        }
    ]
};