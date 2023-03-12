var dataStyle = {
    normal: {
        label: {
            show: false
        },
    }
};
option = {
    backgroundColor: "#1A1835",
    series: [{
        name: 'iPhone',
        type: 'pie',
        clockWise: false,
        radius: [60, 100],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['12%', '45%'],
        data: [{
            value: 66,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#C257F6',
                            align: 'center',
                            fontSize: 25,
                            fontWeight: "bold"
                        },
                        b: {
                            color: '#fff',
                            align: 'center',
                            fontSize: 16
                        }
                    },
                    formatter: function(params) {
                        return "{b|iPhone}\n\n" + "{a|" + params.value + "个}";
                    },
                    position: 'center',
                    x: "14%",
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
                    color: '#C257F6',
                    shadowColor: '#C257F6',
                    shadowBlur: 3
                }
            }
        }, {
            value: 100,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#24375c'
                },
            }
        }]
    }, {
        name: 'HUAWEI',
        type: 'pie',
        clockWise: false,
        radius:[60, 100],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['31%', '45%'],
        data: [{
            value: 80,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#79C2BC',
                            align: 'center',
                            fontSize: 25,
                            fontWeight: "bold"
                        },
                        b: {
                            color: '#fff',
                            align: 'center',
                            fontSize: 16
                        }
                    },
                    formatter: function(params) {
                        return "{b|HUAWEI}\n\n" + "{a|" + params.value + "个}";
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
                    color: '#79C2BC',
                    shadowColor: '#79C2BC',
                    shadowBlur: 3
                }
            }
        }, {
            value: 100,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#24375c'
                },
            }
        }]
    }, {
        name: 'XIAOMI',
        type: 'pie',
        clockWise: false,
        radius: [60, 100],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['50%', '45%'],
        data: [{
            value: 60,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#389af4',
                            align: 'center',
                            fontSize: 25,
                            fontWeight: "bold"
                        },
                        b: {
                            color: '#fff',
                            align: 'center',
                            fontSize: 16
                        }
                    },
                    formatter: function(params) {
                        return "{b|XIAOMI}\n\n" + "{a|" + params.value + "个}";
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
                    color: '#389af4',
                    shadowColor: '#389af4',
                    shadowBlur: 3
                }
            }
        }, {
            value: 100,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#24375c'
                },
            }
        }]
    }, {
        name: 'VIVO',
        type: 'pie',
        clockWise: false,
        radius: [60, 100],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['69%', '45%'],
        data: [{
            value: 53,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#79C2BC',
                            align: 'center',
                            fontSize: 25,
                            fontWeight: "bold"
                        },
                        b: {
                            color: '#fff',
                            align: 'center',
                            fontSize: 16
                        }
                    },
                    formatter: function(params) {
                        return "{b|VIVO}\n\n" + "{a|" + params.value + "个}";
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
                    color: '#79C2BC',
                    shadowColor: '#79C2BC',
                    shadowBlur: 3
                }
            }
        }, {
            value: 100,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#24375c'
                },
            }
        }]
    }, {
        name: 'OTHER',
        type: 'pie',
        clockWise: false,
        radius: [60, 100],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['88%', '45%'],
        data: [{
            value: 30,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#EBBD6D',
                            align: 'center',
                            fontSize: 25,
                            fontWeight: "bold"
                        },
                        b: {
                            color: '#fff',
                            align: 'center',
                            fontSize: 16
                        }
                    },
                    formatter: function(params) {
                        return "{b|OTHER}\n\n" + "{a|" + params.value + "个}";
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
                    color: '#EBBD6D',
                    shadowColor: '#EBBD6D',
                    shadowBlur: 3
                }
            }
        }, {
            value: 100,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#24375c'
                },
            }
        }]


    }]
}