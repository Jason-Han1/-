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
    backgroundColor: "#20263f",
    tooltip: {
        formatter: function(params) {
            return '占比' + '：' + params.percent + ' %'
        }
    },
    series: [{
        name: '第一个圆环',
        type: 'pie',
        clockWise: false,
        radius: [70, 80],
        itemStyle: dataStyle,
        // hoverAnimation: false,
        center: ['15%', '50%'],
        data: [{
            value: 14,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#3a7ad5',
                            align: 'center',
                            fontSize: 20,
                            fontWeight: "bold"
                        },
                        b: {
                            color: '#fff',
                            align: 'center',
                            fontSize: 16
                        }
                    },
                    formatter: function(params) {
                        return "{b|" + params.value + "%}\n\n" + "{a|封测}";
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
                    color: '#2c6cc4',
                    shadowColor: '#2c6cc4',
                    shadowBlur: 0
                }
            }
        }, {
            value: 100 - 14,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#24375c'
                },
                emphasis: {
                    color: '#24375c'
                }
            }
        }]
    }, {
        name: '第二个圆环',
        type: 'pie',
        clockWise: false,
        radius: [70, 80],
        itemStyle: dataStyle,
        // hoverAnimation: false,
        center: ['50%', '50%'],
        data: [{
            value: 29.5,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#d03e93',
                            align: 'center',
                            fontSize: 20,
                            fontWeight: "bold"
                        },
                        b: {
                            color: '#fff',
                            align: 'center',
                            fontSize: 16
                        }
                    },
                    formatter: function(params) {
                        return "{b|" + params.value + "%}\n\n" + "{a|设计}";
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
                    color: '#ef45ac',
                    shadowColor: '#ef45ac',
                    shadowBlur: 0
                }
            }
        }, {
            value: 100 - 29.5,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#412a4e'
                },
                emphasis: {
                    color: '#412a4e'
                }
            }
        }]
    }, {
        name: '第三个圆环',
        type: 'pie',
        clockWise: false,
        radius: [70, 80],
        itemStyle: dataStyle,
        // hoverAnimation: false,
        center: ['85%', '50%'],
        data: [{
            value: 56.5,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#603dd0',
                            align: 'center',
                            fontSize: 20,
                            fontWeight: "bold"
                        },
                        b: {
                            color: '#fff',
                            align: 'center',
                            fontSize: 16
                        }
                    },
                    formatter: function(params) {
                        return "{b|" + params.value + "%}\n\n" + "{a|制造}";
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
                    color: '#613fd1',
                    shadowColor: '#613fd1',
                    shadowBlur: 0
                }
            }
        }, {
            value: 100 - 56.5,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#453284'
                },
                emphasis: {
                    color: '#453284'
                }
            }
        }]
    }]
}