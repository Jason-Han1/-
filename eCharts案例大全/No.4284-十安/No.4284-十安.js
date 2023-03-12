option = {
    backgroundColor: "#20263f",
    title: {
        text: '十安',
        textStyle: {
            align: 'center',
            color: 'rgb(102, 219, 252)',
            fontSize: 30,
            fontStyle: 'normal',
        },
        top: '5%',
        left: 'center',
    },
    series: [{
        name: '第一个圆环',
        type: 'pie',
        clockWise: false,
        radius: [70, 80],
        itemStyle: {
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
        },
        hoverAnimation: false,
        center: ['10%', '50%'],
        data: [{
            value: 11,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#ffffff',
                            align: 'center',
                            fontSize: 30,
                            fontWeight: "bold"
                        },
                        b: {
                            color: '#66dbfc',
                            align: 'center',
                            fontSize: 24
                        }
                    },
                    formatter: function(params) {
                        return "{a|" + params.value + "}\n\n"+"{b|燃气}";
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
                    color: '#725bff',
                    shadowColor: '#613fd1',
                    shadowBlur: 0
                }
            }
        }, {
            value: 75,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#142331'
                },
                
            }
        }]
    }, {
        name: '第二个圆环',
        type: 'pie',
        clockWise: false,
        radius: [70, 80],
        itemStyle: {
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
        },
        hoverAnimation: false,
        center: ['30%', '50%'],
        data: [{
            value: 3,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#ffffff',
                            align: 'center',
                            fontSize: 30,
                            fontWeight: "bold"
                        },
                        b: {
                            color: '#66dbfc',
                            align: 'center',
                            fontSize: 24
                        }
                    },
                    formatter: function(params) {
                        return "{a|" + params.value + "}\n\n"+"{b|建设工程}";
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
                    color: '#725bff',
                    shadowColor: '#613fd1',
                    shadowBlur: 0
                }
            }
        }, {
            value: 50,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#142331'
                },
            }
        }]
    }, 
    {
        name: '第三个圆环',
        type: 'pie',
        clockWise: false,
        radius: [70, 80],
        itemStyle: {
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
        },
        hoverAnimation: false,
        center: ['50%', '50%'],
        data: [{
            value: 5,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#ffffff',
                            align: 'center',
                            fontSize: 30,
                            fontWeight: "bold"
                        },
                        b: {
                            color: '#66dbfc',
                            align: 'center',
                            fontSize: 24
                        }
                    },
                    formatter: function(params) {
                        return "{a|" + params.value + "}\n\n"+"{b|房屋}";
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
                    color: '#725bff',
                    shadowColor: '#613fd1',
                    shadowBlur: 0
                }
            }
        }, {
            value: 25,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#142331'
                },
            }
        }]
    },
    {
        name: '地下空间',
        type: 'pie',
        clockWise: false,
        radius: [70, 80],
        itemStyle: {
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
        },
        hoverAnimation: false,
        center: ['70%', '50%'],
        data: [{
            value: 3,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#ffffff',
                            align: 'center',
                            fontSize: 30,
                            fontWeight: "bold"
                        },
                        b: {
                            color: '#66dbfc',
                            align: 'center',
                            fontSize: 24
                        }
                    },
                    formatter: function(params) {
                        return "{a|" + params.value + "}\n\n"+"{b|地下空间}";
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
                    color: '#725bff',
                    shadowColor: '#613fd1',
                    shadowBlur: 0
                }
            }
        }, {
            value: 25,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#142331'
                },
            }
        }]
    },{
        name: '其他',
        type: 'pie',
        clockWise: false,
        radius: [70, 80],
        itemStyle: {
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
        },
        hoverAnimation: false,
        center: ['90%', '50%'],
        data: [{
            value: 5,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#ffffff',
                            align: 'center',
                            fontSize: 30,
                            fontWeight: "bold"
                        },
                        b: {
                            color: '#66dbfc',
                            align: 'center',
                            fontSize: 24
                        }
                    },
                    formatter: function(params) {
                        return "{a|" + params.value + "}\n\n"+"{b|其他}";
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
                    color: '#725bff',
                    shadowColor: '#613fd1',
                    shadowBlur: 0
                }
            }
        }, {
            value: 25,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#142331'
                },
            }
        }]
    },]
}