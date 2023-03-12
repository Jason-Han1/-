option = {
                            title: {
                                text: '单位（辆）',
                                textStyle: {
                                    fontWeight: 'normal',
                                    fontSize: 16,
                                    color: '#000'
                                },
                                left: '6%',
                                top:'1%'
                            },
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    lineStyle: {
                                        color: '#000',
                                        fontSize:16
                                    }
                                }
                            },
                            legend: {
                                itemWidth: 30,
                                itemHeight: 18,
                                itemGap: 13,
                                data: ['新能源汽车推广情况'],
                                right: '4%',
                                top: '1%',
                                textStyle: {
                                    fontSize: 16,
                                    color: '#000'
                                }
                            },
                            grid: {
                                top: '12%',
                                left: '3%',
                                right: '10%',
                                bottom: '12%',
                                containLabel: true
                            },
                            xAxis: [{
                                type: 'category',
                                boundaryGap: false,
                                axisLine: {
                                    lineStyle: {
                                        color: '#000'
                                    }
                                },
                                axisLabel: {
                                    margin: 10,
                                    textStyle: {
                                        fontSize: 16,
                                        color:'#000'
                                    }
                                },
                                 axisTick: {
                                    show: true
                                },
                                data: ['2013年','2014年','2015年','2016年','2017年']
                            }],
                            yAxis: [{
                                type: 'value',
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: '#000'
                                    }
                                },
                                axisLabel: {
                                    margin: 10,
                                    textStyle: {
                                        fontSize: 16,
                                        color:'#000'
                                    }
                                },
                                splitLine: {
                                    lineStyle: {
                                        color: '#000'
                                    }
                                }
                            }],
                            series: [{
                                name: '新能源汽车推广情况',
                                type: 'line',
                                lineStyle: {
                                    normal: {
                                        width: 1,
                                        color:'#000'
                                    },         // 拐点图形大小
                                },
                                areaStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                offset: 0,
                                                color: 'rgba(189, 208, 211, 0.4)'
                                            },{
                                                offset: 0.8,
                                                color: 'rgba(29, 208, 253, 0.8)'
                                            }
                                        ], false),
                                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                                        shadowBlur: 10
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        color: 'rgb(0,136,212)',
                                        borderColor: 'rgba(0,136,212,0.2)',
                                        borderWidth: 12,
                                        label: {
                                            show: true,
                                            textStyle: {
                                                fontSize:16,
                                                color:'#000'
                                            }
                                        }

                                    }
                                },
                                smooth : true,
                                symbolSize: 9, // 拐点图形大小
                                data:[487,1528,4910,11159,22893]
                            }]
                        };