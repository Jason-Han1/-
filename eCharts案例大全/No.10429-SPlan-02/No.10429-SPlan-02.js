option = {
    backgroundColor: "#030c23",
    tooltip: {
        trigger: 'item',
    },
    series: [{
            type: 'liquidFill', // 水球图
            name: "通联分布",
            data: [0.4, 0.4],
            color: ['rgba(56, 140, 170, 0.5)', 'rgba(42, 93, 137, 0.5)'],
            center: ['50%', '50%'],
            label: {
                formatter: function() {
                    return "通联分布"
                },
                position: ['50%', '90%'],
                fontSize: 40,
                color: "yellow"
            },
            outline: {
                show: false
            },
            backgroundStyle: {
                color: "transparent"
            },
        },
        {
            type: 'pie',
            radius: ['42%', '50%'],
            label: {
                show: false,
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            hoverAnimation: false,
            itemStyle: {
                borderWidth: 0,
                shadowBlur: 2,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            emphasis: {
                label: {
                    borderWidth: 0,
                    shadowBlur: 2,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            data: [{
                    value: 0.2,
                    name: '北京',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [{
                                    offset: 0,
                                    color: '#ffdc4e'
                                },
                                {
                                    offset: 1,
                                    color: '#3b4552'
                                }
                            ]
                        )
                    }
                },
                {
                    value: 0.2,
                    name: '上海',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [{
                                    offset: 0,
                                    color: '#2fae6f'
                                },
                                {
                                    offset: 1,
                                    color: '#3b4552'
                                }
                            ]
                        )
                    }

                },
                {
                    value: 0.2,
                    name: '广州',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [{
                                    offset: 0,
                                    color: '#4297e4'
                                },
                                {
                                    offset: 1,
                                    color: '#3b4552'
                                }
                            ]
                        )
                    }
                },
                {
                    value: 0.2,
                    name: '深圳',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [{
                                    offset: 0,
                                    color: '#4355eb'
                                },
                                {
                                    offset: 1,
                                    color: '#3b4552'
                                }
                            ]
                        )
                    }
                },
                {
                    value: 0.2,
                    name: '成都',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [{
                                    offset: 0,
                                    color: '#fe8409'
                                },
                                {
                                    offset: 1,
                                    color: '#3b4552'
                                }
                            ]
                        )
                    }
                }
            ]
        }
    ]
}