var dataStyle = {
    normal: {
        label: {
            show: false
        },
    }
};
options = [{
    backgroundColor: "#1A1835",
    series: [{
        name: 'iPhone',
        type: 'pie',
        clockWise: false,
        radius: [55, 85],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['12%', '45%'],
        data: [{
            value: 61,
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
        radius: [55, 85],
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
        radius: [55, 85],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['50%', '45%'],
        data: [{
            value: 55,
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
        radius:[55, 85],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['69%', '45%'],
        data: [{
            value: 43,
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
        radius: [55, 85],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['88%', '45%'],
        data: [{
            value: 43,
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
    }, {
backgroundColor: "#1A1835",
color: ["#6F7DE3"],
grid: {
    top: "2%",
    right: "8%",
    left: "8%",
    bottom: "15%",
    textStyle: {
        color: "#fff"
    }
},
xAxis: [{
    type: 'category',
    show: true,
    axisLabel: {
        fontSize: 18,
    },
    axisLine: {
        lineStyle: {
            color: 'rgba(204,187,225,0.6)',
        }
    },
    data: ['北京', '上海', '深圳', '杭州', '南京', '武汉', '苏州', '重庆',  '大连', '天津', '青岛', ],
    axisPointer: {
        type: 'shadow'
    },
}],
yAxis: [{
        type: 'value',
        axisLabel: {
            fontSize: 18,
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(204,187,225,0.6)'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(204,187,225,0.2)",
            }
        },
        min: 0,
        max: 300,
        interval: 100,

    },

],
series: [{

    type: 'bar',
    barWidth: '62%',
    data: [{
            value: 288,
        },{
            value: 264,
        },{
            value: 250,
        }, {
            value: 241,
        }, {
            value: 207,
        },{
            value: 190,
        }, {
            value: 141,
        }, {
            value: 127,
        }, {
            value: 111,
        }, {
            value: 107,
        }, {
            value: 85,
        },
    ]
},]

}]