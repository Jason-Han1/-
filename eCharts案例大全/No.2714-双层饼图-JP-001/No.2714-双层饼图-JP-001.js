option = {
                series: [{
                    zlevel: 1,
                    name: '当前故障情况',
                    type: 'pie',
                    radius: ['30%', '40.5%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    hoverAnimation: false,
                    hoverOffset: 0,
                    data: [{
                        value: 679,
                        name: '网络故障',
                        itemStyle: {
                            color: 'rgba(0,254,242,1)',
                            width: 15,
                        },
                        label: {
                            color: '#00FEF2',
                        }
                    },
                    {
                        value: 516,
                        name: '设备故障',
                        itemStyle: {
                            color: '#FF7C73',
                        },
                        label: {
                            color: '#FF7C73',
                        }
                    },
                    {
                        value: 516,
                        name: '供电故障',
                        itemStyle: {
                            color: '#23C1FF',
                        },
                        label: {
                            color: '#23C1FF',
                        },

                    }],
                    labelLine: {
                        normal: {
                            length: 20,
                            length2: 220,
                            show: true,
                            lineStyle: {
                                // color: 'rgba(255, 255, 255, 0.5)',
                            },
                            position: 'inside'
                        },
                    },
                    label: {
                        normal: {
                            formatter: params => {
                                console.log(params)
                                return (
                                    '{name|' + params.name + '}{value|' +
                                    (params.value) + '}'
                                );
                            },
                            padding: [0, -100, 25, -100],
                            rich: {
                                name: {
                                    fontSize: 14,
                                    padding: [0, 5, 0, 5],
                                },
                                value: {
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                }
                            }
                        }
                    }
                },
                {
                    name: '当前故障情况',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    zlevel: 2,
                    data: [{
                        value: 200,
                        name: '电信',
                        itemStyle: {
                            color: 'rgba(0,244,158,0.6)',
                        },
                        label: {
                            color: '#00F09A',
                        }
                    }, {
                        value: 200,
                        name: '移动',
                        itemStyle: {
                            color: 'rgba(223,125,248,0.6)',
                        },
                        label: {
                            color: '#DF7DF8',
                        }
                    },
                    {
                        value: 279,
                        name: '联通',
                        itemStyle: {
                            color: 'rgba(0,244,158,0.6)',
                        },
                        label: {
                            color: '#FFDD4C',
                        }
                    },
                    {
                        value: 516,
                        name: '其他',
                        itemStyle: {
                            color: '#FF7C73',
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                     {
                        value: 516,
                        name: '其他',
                        itemStyle: {
                            color: '#23C1FF',
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                    ],
                    labelLine: {
                        normal: {
                            length: 40,
                            length2: 20
                        }
                    },
                    label: {
                        normal: {
                            formatter: params => {
                                console.log(params)
                                return (
                                    '{name|' + params.name + '}{value|' +
                                    (params.value) + '}'
                                );
                            },
                            rich: {
                                name: {
                                    fontSize: 14,
                                    padding: [0, 5, 0, 5],
                                },
                                value: {
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                }
                            }
                        }
                    },
                    hoverAnimation: false
                }
                ]
          
};
