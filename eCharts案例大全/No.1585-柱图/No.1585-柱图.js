              var barWidth = 3;
                var dataAxis = ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'];
                var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220, 290, 330, 310, 123];
                var yMax = Math.max.apply(null, data);
                var dataShadow = [];

                for (var i = 0; i < data.length; i++) {
                    dataShadow.push(yMax);
                }

                option = {
                    backgroundColor:'#222',
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: { type: 'shadow' },
                    },
                    grid: {
                        left: '20',
                        right: '0',
                        top: '30',
                        bottom: '20',



                        containLabel: true
                    },
                    xAxis: {
                        data: dataAxis,
                        axisLabel: {
                            //   inside: true,
                            textStyle: {
                                color: 'rgba(255,255,255,.6)'
                            }
                        },
                        axisTick: { show: false },
                        axisLine: { show: false },
                        z: 10
                    },
                    yAxis: {
                        axisLine: { show: false },
                        splitNumber: 2,
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(255,255,255,.0)',
                                type: 'dotted'
                            }
                        },
                        axisTick: { show: false },
                        axisLabel: {
                            textStyle: {
                                color: 'rgba(255,255,255,.6)'
                            }
                        }
                    },
                    series: [
                        {
                            barWidth: 'barWidth',
                            type: 'pictorialBar',
                            animationDuration: 0,
                            symbolRepeat: 'fixed',
                            symbolMargin: '20%',
                            symbol: 'roundRect',
                            symbolSize: [barWidth, barWidth * 1.2],
                            itemStyle: {
                                normal: {
                                    color: 'rgba(200,200,200,.06)',
                                }
                            },
                            barGap: '-100%',
                            barCategoryGap: '40%',
                            data: dataShadow,
                            animation: false
                        },
                        {
                            type: 'bar',
                            barWidth: barWidth,
                            itemStyle: {
                                normal: {
                                    barBorderRadius: 2,
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0, color: '#248ff7'
                                    }, {
                                        offset: 1, color: '#6851f1'
                                    }]),
                                },
                                emphasis: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            { offset: 0, color: '#2378f7' },
                                            { offset: 1, color: '#83bff6' }
                                        ]
                                    )
                                }
                            },
                            data: data
                        }
                    ]
                };
