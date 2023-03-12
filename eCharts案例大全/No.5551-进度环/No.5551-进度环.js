                let value = 68;
                let title = '';
                let int = value.toFixed(2).split('.')[0];
                let float = value.toFixed(2).split('.')[1];

                option = {
                    backgroundColor:'#030F35',
                    title: {
                        text: '{a|' + int + '}{b|.' + float + '%}',
                        x: 'center',
                        y: 'center',
                        textStyle: {
                            rich: {
                                a: {
                                    fontSize: 15,
                                    color: '#29EEF3'
                                },
                                b: {
                                    fontSize: 15,
                                    color: '#29EEF3',
                                    // padding: [0,0,14,0]
                                },
                                c: {
                                    fontSize: 15,
                                    color: '#000000',
                                    padding: [5, 0]
                                },
                            }
                        }
                    },
                    series: [{
                        type: 'gauge',
                        radius: '30%',
                        clockwise: false,
                        startAngle: '90',
                        endAngle: '-269.9999',
                        //调整间隔距离
                        splitNumber: 100,
                        detail: {
                            offsetCenter: [0, -20],
                            formatter: ' '
                        },
                        pointer: {
                            show: false
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: [
                                    [0, '#04407C'],
                                    //计算比例
                                    [0.68, 'rgba(3,78,133,0.3)'],
                                    [1, '#138BC0']
                                ],
                                width: 30
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: true,
                            length: 32,
                            lineStyle: {
                                // color: '#051F54',
                                width: 0.5
                            }
                        },
                        axisLabel: {
                            show: false
                        }
                    }, ]
                };