option = {
                xAxis: [
                    {
                        show: false,
                        min: 0,
                        max: 100,
                        inverse: true
                    }
                ],
                yAxis: {
                    show: false
                },
                grid: {
                    left: '5%',
                    right: '5%'
                },
                series: [{
                    symbol: 'circle',
                    symbolSize: 0.1,
                    label: {
                        show: true,
                        color: '#000',
                        formatter (a) {
                            return '{name|' + '知识点' + '}{score|' + '超1.3分' + '}'
                        },
                        rich: {
                            name: {
                                color: '#000',
                                fontSize: 14
                            },
                            score: {
                                color: '#2e937f',
                                fontSize: 14,
                                fontWeight: 700,
                                padding: [0, 0, 0, 10]
                            }
                        },
                        lineHeight: 22,
                        borderRadius: 12,
                        padding: [2, 10],
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        shadowColor: '#999',
                        shadowBlur: 10,
                        shadowOffsetX: 0
                    },
                    data: [
                        [25, 1.3],
                        [10, 1.1],
                        [10, 1.7],
                        [100, 1.7],
                        [50, 1.7],
                        [30, 1.7],
                        [40, 1.1],
                        [45, 1],
                        [65, 1.2]
                    ],
                    type: 'scatter',
                    markArea: {
                        silent: true,
                        label: {
                            position: 'insideBottom',
                            color: '#000'
                        },
                        itemStyle: {
                            color: '#f6feff',
                            borderWidth: 0.5,
                            borderColor: '#999',
                            borderType: 'dashed'
                        },
                        data: [
                            [
                                {
                                    name: '低分',
                                    xAxis: 0
                                },
                                {
                                    xAxis: 40
                                }
                            ],
                            [
                                {
                                    name: '不及格',
                                    xAxis: 40
                                },
                                {
                                    xAxis: 60
                                }
                            ],
                            [
                                {
                                    name: '及格',
                                    xAxis: 60
                                },
                                {
                                    xAxis: 80
                                }
                            ],
                            [
                                {
                                    name: '优分',
                                    xAxis: 80
                                },
                                {
                                    xAxis: 100
                                }
                            ]
                        ]
                    }
                }]
            }