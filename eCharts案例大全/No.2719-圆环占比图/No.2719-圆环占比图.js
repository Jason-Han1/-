option = {
                title: [
                    {
                        text: '60%',
                        x: 'center',
                        top: '50%',
                        textStyle: {
                            color: '#F9243F',
                            fontSize: 20,
                            fontWeight: '100',
                        },
                    },
                    {
                        text: '圆环图',
                        x: 'center',
                        top: '10%',
                        textStyle: {
                            fontSize: '20',
                            color: '#333333',
                            fontFamily: 'Lato',
                            foontWeight: '600',
                        },
                    },
                ],
                series: [
                    {
                        type: 'pie',
                        radius: ['40%', '43%'],
                        labelLine: {
                            normal: {
                                show: false,
                            },
                        },
                        data: [
                            {
                                value: 60,
                                itemStyle: { color: '#F9243F'},
                            },
                            {
                                value: 100 - 60,
                                itemStyle: {
                                    color: 'rgba(66, 66, 66, .3)',
                                },
                            },
                        ],
                    },
                ],
            }
