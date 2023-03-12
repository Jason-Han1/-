option = {
    title: {},
    series: [{
            type: 'pie',
            startAngle: 270,
            center: ['50%', '50%'],
            radius: ['70%', '80%'],
            hoverAnimation: false,
            data: [{
                    name: '可用性',
                    value: 60,
                    label: {
                        position: 'center',
                        formatter: params => {
                            return '{score|' + params.value + '}  分\n ' + params.name
                        },
                        rich: {
                            score: {
                                fontSize: 24,
                                color: '#00FCFF',
                                align: 'center',
                                fontStyle: 'italic',
                                fontWeight: 'bold'
                            }
                        },
                        color: '#00FCFF',
                        fontSize: 12
                    },
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                        offset: 0,
                                        color: '#2381F6'
                                    },
                                    {
                                        offset: 1,
                                        color: '#00D7E9'
                                    }
                                ],
                                global: false
                            }
                        }
                    }
                },
                {
                    name: '',
                    value: 40,
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#000104'
                        }
                    }
                }
            ]
        },
        {
            type: 'pie',
            startAngle: 270,
            center: ['50%', '50%'],
            radius: ['63%', '64%'],
            hoverAnimation: false,
            data: [{
                    name: '',
                    value: 60,
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                        offset: 0,
                                        color: '#2381F6'
                                    },
                                    {
                                        offset: 1,
                                        color: '#00D7E9'
                                    }
                                ],
                                global: false
                            }
                        }
                    }
                },
                {
                    name: '',
                    value: 40,
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0
                        }
                    }
                }
            ]
        }
    ]
}