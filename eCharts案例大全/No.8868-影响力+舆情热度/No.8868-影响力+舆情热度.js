option = {
    // backgroundColor:'black',
    series: [
        {
            name: '遥感解译信息',
            type: 'pie',
            radius: ['65%', '75%'],
            center: ['25%', '50%'],
            startAngle: 225,
            color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#FDFF5C'
            }, {
                offset: 1,
                color: '#FFDB5C'
            }]), "transparent"],
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                    normal: {
                        position: 'center'
                    }
                },
            data: [{
                value: 75,
                 name: '遥感解译信息',
                    label: {
                        normal: {
                            formatter: '影响力',
                            textStyle: {
                                // color: '#fff',
                                fontSize: 14

                            }
                        }
                    }
            }, {
                value: 25,
                name: '%',
                    label: {
                        normal: {
                            formatter: '\n\n35',
                            textStyle: {
                                color: '#007ac6',
                                fontSize: 24

                            }
                        }
                    }
            },
            {
                value: 0,
                name: '%',
                    label: {
                        normal: {
                            formatter: '',
                            textStyle: {
                                color: '#fff',
                                fontSize: 16

                            }
                        }
                    }
            }]
        },
        {
            name: '局部监测信息',
            type: 'pie',
            radius: ['65%', '75%'],
            center: ['75%', '50%'],
            startAngle: 225,
            color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#9FE6B8'
            }, {
                offset: 1,
                color: '#32C5E9'
            }]), "transparent"],
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                    normal: {
                        position: 'center'
                    }
                },
            data: [{
                value: 75,
                 name: '局部监测信息',
                    label: {
                        normal: {
                            formatter: '舆情热度',
                            textStyle: {
                                // color: '#fff',
                                fontSize: 14

                            }
                        }
                    }
            }, {
                value: 25,
                name: '%',
                    label: {
                        normal: {
                            formatter: '\n\n3534',
                            textStyle: {
                                color: '#007ac6',
                                fontSize: 24

                            }
                        }
                    }
            },
            {
                value: 0,
                name: '%',
                    label: {
                        normal: {
                            formatter: '',
                            textStyle: {
                                color: '#fff',
                                fontSize: 16

                            }
                        }
                    }
            }]
        },
    ]
};
myChart.resize({width:392, height:144})