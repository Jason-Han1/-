    option = {
        backgroundColor: '#414143',
        title: {
            text: "SHUTTERSTOCK",
            textStyle: {
                color: '#FFF',
                fontSize: 32,
                fontWeight: 'bold'
            },
            left: 'center',
            top: 100,
            bottom: '69%',
        },
        tooltip: {
            show: false,
        },
        color: ['#adc70c', '#008ecc', '#ff6400'],
        legend: {
            orient: 'vertical',
            textStyle: {
                color: '#FFF',
                fontWeight: 'bold'
            },
            x: 690,
            y: 120,
            data: ['A', 'B', 'C'],

        },
        series: [{
                name: 'A',
                type: 'pie',
                startAngle: 0,
                hoverAnimation: false,
                tooltip: {},
                radius: ["30%", "47%"],
                center: ['50%', '80%'],
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        color: '#fff',
                        formatter: function(params) {
                            return params.value
                        },
                    },
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                        value: 300,
                        itemStyle: {
                            normal: {
                                color: "rgba(80,150,224,0)"
                            }
                        }
                    },
                    {
                        value: 270,
                        itemStyle: {
                            normal: {
                                shadowColor: 'rgba(0, 0, 0, .3)',
                                shadowBlur: 10,
                                shadowOffsetY: 3,
                                shadowOffsetX: 0,
                                color: "rgba(173, 199, 12,1)"
                            }
                        }

                    },
                    {
                        value: 30,
                        itemStyle: {
                            normal: {
                                color: "rgba(80,150,224,0.1)"
                            }
                        }
                    },

                ]
            },


            {
                name: 'B',
                type: 'pie',
                startAngle: 0,
                radius: ['50%', '67%'],
                center: ['50%', '80%'],
                legendHoverLink: false,
                hoverAnimation: false,
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                        value: 300,
                        itemStyle: {
                            normal: {
                                color: "rgba(35,206,167,0)"
                            }
                        }
                    },
                    {
                        value: 210,
                        itemStyle: {
                            normal: {
                                shadowColor: 'rgba(0, 0, 0, .3)',
                                shadowBlur: 10,
                                shadowOffsetY: 3,
                                shadowOffsetX: 0,
                                color: "rgba(0,142,204,1)"
                            }
                        }

                    },
                    {
                        value: 90,
                        itemStyle: {
                            normal: {
                                color: "rgba(35,206,167,0.1)"
                            }
                        }
                    },

                ]
            },

            {
                name: 'C',
                type: 'pie',
                startAngle: 0,
                hoverAnimation: false,
                radius: ["70%", "87%"],
                center: ['50%', '80%'],
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '10',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                        value: 300,
                        itemStyle: {
                            normal: {
                                color: "rgba(1,218,220,0)"
                            }
                        }
                    },
                    {
                        value: 240,
                        itemStyle: {
                            normal: {
                                shadowColor: 'rgba(0, 0, 0, .3)',
                                shadowBlur: 10,
                                shadowOffsetY: 3,
                                shadowOffsetX: 0,
                                color: "rgba(255,100,0,1)",
                                // color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                                //     offset: 0,
                                //     color: 'rgb(129, 227, 238)'
                                // }, {
                                //     offset: 1,
                                //     color: 'rgb(25, 183, 207)'
                                // }])
                            }
                        }

                    },
                    {
                        value: 60,
                        itemStyle: {
                            normal: {
                                color: "rgba(1,218,220,0.1)"
                            }
                        }
                    },
                ]
            }
        ]
    };