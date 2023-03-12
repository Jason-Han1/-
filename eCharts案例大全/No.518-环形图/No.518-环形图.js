                let value = 55.33,
                    title = '%';
                option = {
                    backgroundColor:'#051F54',
                    grid: {
                        left: '10%',
                        right: '10%',
                        top: '10%',
                        bottom: '5%',
                        containLabel: true,
                        // show: true,
                    },
                    title: {
                        text: '{a|' + value + '}{c|' + title + '}',
                        x: 'center',
                        y: 'center',
                        textStyle: {
                            rich: {
                                a: {
                                    fontSize: 50,
                                    fontWeight: 700,
                                    color: '#579ff9'
                                },
                                c: {
                                    fontSize: 25,
                                    color: '#579ff9',
                                    fontWeight: 500,
                                    padding: [5, 0]
                                }
                            }
                        }
                    },
                    series: [
                        {
                            type: 'gauge',
                            startAngle: 270,
                            endAngle: -89.9999,
                            center: ['50%', '50%'],
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: false
                            },
                            radius: '78%',
                            splitNumber: '52',
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: [
                                        [1, '#2f78d3']
                                    ],
                                    width: 20
                                }
                            },
                            splitLine: {
                                length: 30,
                                lineStyle: {
                                    width: 5,
                                    color: '#1755ff',
                                    distance: 10,
                                } //刻度节点线
                            },
                            detail: {
                                show: false
                            },
                        }, //外环刻度
                        {
                            type: 'gauge',
                            radius: '68%',
                            clockwise: true,
                            startAngle: '90',
                            endAngle: '-269.9999',
                            splitNumber: 15,
                            detail: {
                                offsetCenter: [0, -50],
                                formatter: ' '
                            },
                            pointer: {
                                show: false
                            },
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: [
                                        [0, '#1452ff'],
                                        [52 / 100, '#65b4ff'],
                                        [1, '#1654ff']
                                    ],
                                    width: 70
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            splitLine: {
                                show: false,
                            },
                            axisLabel: {
                                show: false
                            }
                        }, //中间环形
                        {
                            type: 'gauge',
                            radius: '68%',
                            clockwise: true,
                            startAngle: '90',
                            endAngle: '-269.9999',
                            splitNumber: 12,
                            detail: {
                                offsetCenter: [0, -50],
                                formatter: ' '
                            },
                            pointer: {
                                show: false
                            },
                            axisLine: {
                                show: false,

                            },
                            axisTick: {
                                show: false
                            },
                            splitLine: {
                                show: true,
                                length: 70,
                                lineStyle: {
                                    color: '#051F54',
                                    width: 20,
                                }
                            },
                            axisLabel: {
                                show: false
                            }
                        }, //中间环形分割线

                        {
                            type: 'pie',
                            name: '内层细圆环',
                            radius: ['44%', '46%'],
                            hoverAnimation: false,
                            clockWise: false,
                            itemStyle: {
                                normal: {
                                    color: '#0C355E'
                                }
                            },
                            label: {
                                show: false
                            },
                            data: [100]
                        } //内层细圆环
                    ]
                };