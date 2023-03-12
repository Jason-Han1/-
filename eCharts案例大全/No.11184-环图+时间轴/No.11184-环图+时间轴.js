option = {
    baseOption: {
        timeline: {
            y: 0,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // 	currentIndex: 2,
            playInterval: 1500,

            data: ['8年', '9年', '10年', '11年', '12年', '13年', '14年', '15年', '25年']
        },
        tooltip: {},

        calculable: true,

        series: [{
            radius: ['50%', '70%'],
            name: '生漆含量',
            type: 'pie',
            center: ['50%', '50%'],
        }]
    },
    options: [{
            title: [{
                text: '树龄8年生漆品质',
                textAlign: 'center',
                left: '50%',
                top: '50%',
                textStyle: {
                    fontSize: 30
                }
            }],
            series: [{
                name: '生漆含量',
                data: [{
                        name: '漆酚含量',
                        value: 72.3
                    },
                    {
                        name: '水分',
                        value: 15
                    },
                    {
                        name: '油分',
                        value: 2
                    },
                    {
                        name: '漆酚活性',
                        value: 1.9
                    }
                ]
            }]
        },
        {
            title: [{
                text: '树龄9年生漆品质',
                textAlign: 'center',
                left: '50%',
                top: '50%',
                textStyle: {
                    fontSize: 30
                }
            }],
            series: [{
                name: '生漆含量',
                data: [{
                        name: '漆酚含量',
                        value: 71.9
                    },
                    {
                        name: '水分',
                        value: 14.9
                    },
                    {
                        name: '油分',
                        value: 0.8
                    },
                    {
                        name: '漆酚活性',
                        value: 2.23
                    }
                ]
            }]
        },
        {
            title: [{
                text: '树龄10年生漆品质',
                textAlign: 'center',
                left: '50%',
                top: '50%',
                textStyle: {
                    fontSize: 30
                }
            }],
            series: [{
                name: '生漆含量',
                data: [{
                        name: '漆酚含量',
                        value: 68.3
                    },
                    {
                        name: '水分',
                        value: 17.4
                    },
                    {
                        name: '油分',
                        value: 0.7
                    },
                    {
                        name: '漆酚活性',
                        value: 2.57
                    }
                ]
            }]
        },
        {
            title: [{
                text: '树龄11年生漆品质',
                textAlign: 'center',
                left: '50%',
                top: '50%',
                textStyle: {
                    fontSize: 30
                }
            }],
            series: [{
                name: '生漆含量',
                data: [{
                        name: '漆酚含量',
                        value: 64.1
                    },
                    {
                        name: '水分',
                        value: 22.3
                    },
                    {
                        name: '油分',
                        value: 0.8
                    },
                    {
                        name: '漆酚活性',
                        value: 2.21
                    }
                ]
            }]
        },
        {
            title: [{
                text: '树龄12年生漆品质',
                textAlign: 'center',
                left: '50%',
                top: '50%',
                textStyle: {
                    fontSize: 30
                }
            }],
            series: [{
                name: '生漆含量',
                data: [{
                        name: '漆酚含量',
                        value: 69.3
                    },
                    {
                        name: '水分',
                        value: 17.7
                    },
                    {
                        name: '油分',
                        value: 0.9
                    },
                    {
                        name: '漆酚活性',
                        value: 1.44
                    }
                ]
            }]
        },
        {
            title: [{
                text: '树龄13年生漆品质',
                textAlign: 'center',
                left: '50%',
                top: '50%',
                textStyle: {
                    fontSize: 30
                }
            }],
            series: [{
                name: '生漆含量',
                data: [{
                        name: '漆酚含量',
                        value: 69
                    },
                    {
                        name: '水分',
                        value: 20
                    },
                    {
                        name: '油分',
                        value: 0.4
                    },
                    {
                        name: '漆酚活性',
                        value: 2.95
                    }
                ]
            }]
        },
        {
            title: [{
                text: '树龄14年生漆品质',
                textAlign: 'center',
                left: '50%',
                top: '50%',
                textStyle: {
                    fontSize: 30
                }
            }],
            series: [{
                name: '生漆含量',
                data: [{
                        name: '漆酚含量',
                        value: 61.2
                    },
                    {
                        name: '水分',
                        value: 26
                    },
                    {
                        name: '油分',
                        value: 0.6
                    },
                    {
                        name: '漆酚活性',
                        value: 1.33
                    }
                ]
            }]
        },
        {
            title: [{
                text: '树龄15年生漆品质',
                textAlign: 'center',
                left: '50%',
                top: '50%',
                textStyle: {
                    fontSize: 30
                }
            }],
            series: [{
                name: '生漆含量',
                data: [{
                        name: '漆酚含量',
                        value: 63.8
                    },
                    {
                        name: '水分',
                        value: 27
                    },
                    {
                        name: '油分',
                        value: 0.6
                    },
                    {
                        name: '漆酚活性',
                        value: 1.51
                    }
                ]
            }]
        },
        {
            title: [{
                text: '树龄25年生漆品质',
                textAlign: 'center',
                left: '50%',
                top: '50%',
                textStyle: {
                    fontSize: 30
                }
            }],
            series: [{
                name: '生漆含量',
                data: [{
                        name: '漆酚含量',
                        value: 67.8
                    },
                    {
                        name: '水分',
                        value: 21.4
                    },
                    {
                        name: '油分',
                        value: 2.3
                    },
                    {
                        name: '漆酚活性',
                        value: 0.96
                    }
                ]
            }]
        }
    ]
};