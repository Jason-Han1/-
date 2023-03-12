 var colorArray = [
                    {
                        top: 'rgba(0, 198, 116, 1)', //黄
                        bottom: 'rgba(0, 198, 116, 0.3)'
                    }, {
                        top: 'rgba(255, 106, 0, 1)', //绿
                        bottom: 'rgba(255, 106, 0, 0.3)'
                    },
                    {
                        top: 'rgba(128, 128, 128, 0.99)', //蓝
                        bottom: 'rgba(128, 128, 128, 0.3)'
                    },
                ];
option = {
                    grid: {
                        left: '100',
                        right: '50',
                        bottom: '30',
                        top: '0',
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'none'
                        }
                    },
                    xAxis: {
                        show: false,
                        type: 'value',
                    },
                    yAxis: [
                        {
                            type: 'category',
                            inverse: true,
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: 'rgba(255, 255, 255, 0.5)'
                                },
                            },

                            splitLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            data: ['运转率正常', '运转率低', '运转率低']
                        }, {
                            type: 'category',
                            inverse: true,
                            axisTick: 'none',
                            axisLine: 'none',
                            show: true,
                            axisLabel: {
                                textStyle: {
                                    color: '#ffffff',
                                    fontSize: '18'
                                },
                            },
                            data: [60, 50, 8]
                        }],
                    series: [
                        {
                            name: '金额',
                            type: 'bar',
                            zlevel: 1,
                            itemStyle: {
                                normal: {
                                    show: true,
                                    color: function (params) {
                                        let num = colorArray.length;
                                        return {
                                            type: 'linear',
                                            colorStops: [{
                                                offset: 0,
                                                color: colorArray[params.dataIndex % num].bottom
                                            }, {
                                                offset: 1,
                                                color: colorArray[params.dataIndex % num].top
                                            }, {
                                                offset: 0,
                                                color: colorArray[params.dataIndex % num].bottom
                                            }, {
                                                offset: 1,
                                                color: colorArray[params.dataIndex % num].top
                                            }, {
                                                offset: 0,
                                                color: colorArray[params.dataIndex % num].bottom
                                            }, {
                                                offset: 1,
                                                color: colorArray[params.dataIndex % num].top
                                            }, {
                                                offset: 0,
                                                color: colorArray[params.dataIndex % num].bottom
                                            }, {
                                                offset: 1,
                                                color: colorArray[params.dataIndex % num].top
                                            }, {
                                                offset: 0,
                                                color: colorArray[params.dataIndex % num].bottom
                                            }, {
                                                offset: 1,
                                                color: colorArray[params.dataIndex % num].top
                                            }, {
                                                offset: 0,
                                                color: colorArray[params.dataIndex % num].bottom
                                            }, {
                                                offset: 1,
                                                color: colorArray[params.dataIndex % num].top
                                            }],
                                            //globalCoord: false
                                        }
                                    },
                                    barBorderRadius: 70,
                                    borderWidth: 0,
                                    borderColor: '#333',
                                }
                            },
                            barWidth: 12,
                            data: [60, 50, 8]
                        },
                        {
                            name: '背景',
                            type: 'bar',
                            barWidth: 20,
                            barGap: '-130%',
                            barBorderRadius: 10,
                            data: [100, 100, 100],
                            itemStyle: {
                                normal: {
                                    color: 'rgba(24,31,68,1)',
                                    barBorderRadius: 30,
                                }
                            },
                        },
                    ],
                    animationEasingUpdate: 'quinticInOut',
                    animationDurationUpdate: 1500, //动画效果
                };