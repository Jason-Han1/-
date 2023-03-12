            var colors = [
                {
                    type: 'linear',
                    x: 0, x2: 1, y: 0, y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#27f7fa'
                    }, {
                        offset: 0.5,
                        color: '#27f7fa'
                    }, {
                        offset: 0.5,
                        color: '#23c3e2dd'
                    }, {
                        offset: 1,
                        color: '#23c3e2dd'
                    }]
                }, {
                    type: 'linear',
                    x: 0, x2: 1, y: 0, y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#7153d3aa'
                    }, {
                        offset: 0.5,
                        color: '#7153d3aa'
                    }, {
                        offset: 0.5,
                        color: '#352a6b'
                    }, {
                        offset: 1,
                        color: '#352a6b'
                    }]
                }];
            var barWidth = 15;
            option = {
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    top: '15%',
                    right: '3%',
                    left: '12%',
                    bottom: '12%'
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#ddd'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            interval: 0,
                            textStyle: {
                                color: 'rgba(80, 176, 223, 1)',
                                fontSize: 11
                            },
                            margin: 0
                        },
                        boundaryGap: false
                    }],
                yAxis: [{
                    name: '(万元)',
                    nameTextStyle: {
                        color: "rgba(80, 176, 223, 1)",
                        fontSize: 11,
                        padding: [-10, 0, -10, -40]
                    },
                    type: 'value',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#ddd'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: 'rgba(80, 176, 223, 1)',
                            fontSize: 11,
                            padding: [0, 10, 0, 0]
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#06263b'
                        }
                    }
                }],
                series: [{
                    z: 1,
                    type: 'bar',
                    barWidth: barWidth,
                    data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310,],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#0debff'
                            },
                                {
                                    offset: 0.7,
                                    color: 'rgba(28, 196, 251, 0.7)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(28, 196, 251, 0)'
                                }
                            ])
                        }
                    },
                }, {
                    z: 3,
                    name: '税款',
                    type: 'pictorialBar',
                    symbolPosition: 'end',
                    data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310],
                    symbol: 'diamond',
                    symbolOffset: [0, '-50%'],
                    symbolSize: [barWidth - 4, 10 * (barWidth - 4) / barWidth],
                    itemStyle: {
                        normal: {
                            borderColor: '#0debff',
                            borderWidth: 2,
                            color: '#0debff'
                        }
                    },
                }]
            };