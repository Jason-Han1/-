option = {
                    backgroundColor: '#202632',
                    legend: {
                        right: 20,
                        y: 20,
                        orient: 'vertical',
                        itemWidth : 12,
                        itemHeight : 12,
                        textStyle: {
                            color: '#434857',
                            fontSize: 12 ,
                        },
                        icon: 'circle',
                        data: ["T1航站楼","T2航站楼","T3航站楼","正常","异常",],
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a}<br/>{b}:({d}%)"
                    },
                    series: [{
                        type: 'pie',
                        center: ['50%','64%'],
                        radius: ['32%', '55%'],
                        label: {
                            normal: {
                                position: 'inner',
                                color: '#fff',
                                formatter: '{d}%'
                            }
                        },
                        data: [{
                            value: 15,
                            name: 'T1航站楼',
                            itemStyle: {
                                normal: {
                                    color: {
                                        colorStops: [{
                                            offset: 0, color: '#C67AF2' // 0% 处的颜色
                                        }, {
                                            offset: 1, color: '#BA3BF5' // 100% 处的颜色
                                        }],
                                    }
                                }

                            }
                        }, {
                            value: 12,
                            name: 'T2航站楼',
                            itemStyle: {
                                normal: {
                                    color: {
                                        colorStops: [{
                                            offset: 0, color: '#FFBB3D' // 0% 处的颜色
                                        }, {
                                            offset: 1, color: '#FC6827' // 100% 处的颜色
                                        }],
                                    }
                                }
                            }
                        }, {
                            value: 8,
                            name: 'T3航站楼',
                            itemStyle: {
                                normal: {
                                    color: {
                                        colorStops: [{
                                            offset: 0, color: '#7AB7F2' // 0% 处的颜色
                                        }, {
                                            offset: 1, color: '#3B8EF5' // 100% 处的颜色
                                        }],
                                    }
                                }
                            }
                        } ]
                    }, {
                        type: 'pie',
                        radius: ['60%', '77%'],
                        center: ['50%','64%'],
                        label: {
                            normal: {
                                position: 'inner',
                                color: '#fff',
                                formatter: '{d}%'
                            }
                        },
                        labelLine: {
                            length: 5,
                            length2: 5,
                        },
                        data: [{
                            value: 6,
                            name: '正常',
                            itemStyle: {
                                normal: {
                                    color: {
                                        colorStops: [{
                                            offset: 0, color: '#43F2A6' // 0% 处的颜色
                                        }, {
                                            offset: 1, color: '#15CF7E' // 100% 处的颜色
                                        }],
                                    }
                                }
                            }
                        }, {
                            value: 5,
                            name: '异常',
                            itemStyle: {
                                normal: {
                                    color: {
                                        colorStops: [{
                                            offset: 0, color: '#FF7C70' // 0% 处的颜色
                                        }, {
                                            offset: 1, color: '#FF4B3B' // 100% 处的颜色
                                        }],
                                    }
                                }
                            }
                        }]
                    }]
                };