option = {
    backgroundColor: '#292c33',
    title: [
        // {
        //     text: 'Donut Chart',
        //     x: 'center',
        //     y: 20,
        //     textAlign: 'center',
        //     textStyle: {
        //         fontSize: '30',
        //         fontWeight: '600',
        //         color: '#fff',
        //         textAlign: 'center',
        //     },
        // },
        {
            text: '45%',
            left: '19.5%',
            top: '47%',
            textAlign: 'center',
            textStyle: {
                fontSize: '12',
                fontWeight: '600',
                color: '#0091C8',
                textAlign: 'center',
            },
        }, {
            text: '70%',
            left: '49.5%',
            top: '47%',
            textAlign: 'center',
            textStyle: {
                fontSize: '12',
                fontWeight: '600',
                color: '#0091C8',
                textAlign: 'center',
            },
        }, {
            text: '15%',
            left: '79.5%',
            top: '47%',
            textAlign: 'center',
            textStyle: {
                fontSize: '12',
                fontWeight: '600',
                color: '#0091C8',
                textAlign: 'center',
            },
        }, {
            text: '45%',
            left: '19.5%',
            top: '75%',
            textAlign: 'center',
            textStyle: {
                fontSize: '12',
                fontWeight: '600',
                color: '#ABADB5',
                textAlign: 'center',
            },
        }, {
            text: '70%',
            left: '49.5%',
            top: '75%',
            textAlign: 'center',
            textStyle: {
                fontSize: '12',
                fontWeight: '600',
                color: '#ABADB5',
                textAlign: 'center',
            },
        }, {
            text: 'xixi',
            left: '79.5%',
            top: '75%',
            textAlign: 'center',
            textStyle: {
                fontSize: '12',
                fontWeight: '600',
                color: '#ABADB5',
                textAlign: 'center',
            },
        }
    ],
    series: [{
            type: 'pie',
            radius: ['30%', '33%'],
            center: ['20%', '50%'],
            data: [{
                    hoverOffset: 1,
                    value: 111,
                    name: '水',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [{
                                    offset: 0,
                                    color: 'rgb(0,113,200,1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(3,221,255,1)',
                                },
                            ],
                            false
                        ),
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    hoverAnimation: false,
                },
                {
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    value: 152,
                    hoverAnimation: false,
                    itemStyle: {
                        color: 'rgba(63, 66, 73, .3)',
                    },
                }
            ]
        },
        {
            type: 'pie',
            radius: ['35%', '38%'],
            center: ['20%', '50%'],
            data: [{
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 557,
                hoverAnimation: false,
                itemStyle: {
                    color: 'rgba(66, 66, 66, .1)',
                    shadowBlur: 10,
                    shadowColor: 'rgba(253, 249, 20, .3)',
                },
            }]
        },
        {
            type: 'pie',
            radius: ['28%', '25%'],
            center: ['20%', '50%'],
            data: [{
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 55,
                hoverAnimation: false,
                itemStyle: {
                    color: 'rgba(66, 66, 66, .1)',
                    shadowBlur: 10,
                    shadowColor: 'rgba(253, 249, 20, .3)',
                },
            }]
        },

        {
            type: 'pie',
            radius: ['30%', '33%'],
            center: ['50%', '50%'],
            data: [{
                    hoverOffset: 1,
                    value: 55,
                    name: '虚拟主机',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [{
                                    offset: 0,
                                    color: 'rgb(0,113,200,1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(3,221,255,1)',
                                },
                            ],
                            false
                        ),
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    hoverAnimation: false,
                },
                {
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    value: 55,
                    hoverAnimation: false,
                    itemStyle: {
                        color: 'rgba(232, 85, 63, .2)',
                    },
                }
            ]
        },
        {
            type: 'pie',
            radius: ['35%', '38%'],
            center: ['50%', '50%'],
            data: [{
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 55,
                hoverAnimation: false,
                itemStyle: {
                    color: 'rgba(63, 66, 73, .3)',
                },
            }]
        },
        {
            type: 'pie',
            radius: ['28%', '25%'],
            center: ['50%', '50%'],
            data: [{
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 120,
                hoverAnimation: false,
                itemStyle: {
                    color: 'rgba(63, 66, 73, .3)',
                },
            }]
        },

        {
            type: 'pie',
            radius: ['29%', '34%'],
            center: ['80%', '50%'],
            data: [{
                    hoverOffset: 1,
                    value: 445,
                    name: '虚拟主机',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [{
                                    offset: 0,
                                    color: 'rgb(0,113,200,1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(3,221,255,1)',
                                },
                            ],
                            false
                        ),
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    hoverAnimation: false,
                },
                {
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    value: 80,
                    hoverAnimation: false,
                    itemStyle: {
                        color: 'rgba(89, 180, 157, .2)',
                    },
                }
            ]
        },
        {
            type: 'pie',
            radius: ['35%', '38%'],
            center: ['80%', '50%'],
            data: [{
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 66,
                hoverAnimation: false,
                itemStyle: {
                    color: 'rgba(63, 66, 73, .3)',
                },
            }]
        },
        {
            type: 'pie',
            radius: ['28%', '25%'],
            center: ['80%', '50%'],
            data: [{
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 55,
                hoverAnimation: false,
                itemStyle: {
                    color: 'rgba(63, 66, 73, .3)',
                },
            }]
        },



    ]
};