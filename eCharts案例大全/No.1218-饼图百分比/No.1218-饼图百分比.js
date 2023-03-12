 var dataStyle = {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 0,
                shadowColor: '#203665'
            }
        };
        option = {
            backgroundColor:"black",
            series: [{
                name: '第一个圆环',
                type: 'pie',
                clockWise: false,
                radius: [100, 80],
                itemStyle: dataStyle,
                hoverAnimation: false,
                center: ['15%', '50%'],
                data: [{
                    value: 70,
                    label: {
                        normal: {
                            rich: {
                                a: {
                                    color: '#5FB878',
                                    align: 'center',
                                    fontSize: 28,
                                    fontWeight: "bold"
                                },
                                b: {
                                    color: '#fff',
                                    align: 'center',
                                    fontSize: 23
                                }
                            },
                            formatter: function (params) {
                                return "{b|运行}\n\n" + "{a|" + params.value + "台}" + "\n\n{b|2%}";
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '18',
                                fontWeight: 'normal',
                                color: '#fff'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#5FB878',
                            shadowColor: '#5FB878',
                            shadowBlur: 0
                        }
                    }
                }, {
                    value: 75,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: '#E1E8EE'
                        },
                        emphasis: {
                            color: '#E1E8EE'
                        }
                    }
                }]
            }, {
                name: '第二个圆环',
                type: 'pie',
                clockWise: false,
                radius: [100, 80],
                itemStyle: dataStyle,
                hoverAnimation: false,
                center: ['50%', '50%'],
                data: [{
                    value: 24,
                    label: {
                        normal: {
                            rich: {
                                a: {
                                    color: '#01AAED',
                                    align: 'center',
                                    fontSize: 28,
                                    fontWeight: "bold"
                                },
                                b: {
                                    color: '#fff',
                                    align: 'center',
                                    fontSize: 23
                                }
                            },
                            formatter: function (params) {
                                return "{b|计划}\n\n" + "{a|" + params.value + "台}" + "\n\n{b|2%}";
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '14',
                                fontWeight: 'normal',
                                color: '#fff'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#01AAED',
                            shadowColor: '#01AAED',
                            shadowBlur: 0
                        }
                    }
                }, {
                    value: 50,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: '#E1E8EE'
                        },
                        emphasis: {
                            color: '#E1E8EE'
                        }
                    }
                }]
            }, {
                name: '第三个圆环',
                type: 'pie',
                clockWise: false,
                radius: [100, 80],
                itemStyle: dataStyle,
                hoverAnimation: false,
                center: ['85%', '50%'],
                data: [{
                    value: 11,
                    label: {
                        normal: {
                            rich: {
                                a: {
                                    color: '#FF5722',
                                    align: 'center',
                                    fontSize: 28,
                                    fontWeight: "bold"
                                },
                                b: {
                                    color: '#fff',
                                    align: 'center',
                                    fontSize: 23
                                }
                            },
                            formatter: function (params) {
                                return "{b|停机}\n\n" + "{a|" + params.value + "台}" + "\n\n{b|2%}";
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '14',
                                fontWeight: 'normal',
                                color: '#fff'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#FF5722',
                            shadowColor: '#FF5722',
                            shadowBlur: 0
                        }
                    }
                }, {
                    value: 25,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: '#E1E8EE'
                        },
                        emphasis: {
                            color: '#E1E8EE'
                        }
                    }
                }]
            }]
        }