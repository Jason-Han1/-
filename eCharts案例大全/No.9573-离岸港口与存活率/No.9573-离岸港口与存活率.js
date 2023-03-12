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
    series: [{
        name: '第一个圆环',
        type: 'pie',
        clockWise: false,
        radius: [70, 80],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['15%', '50%'],
        data: [{
            value: 37,
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
                    formatter: function(params){
                        return "{b|Southampton}\n\n"+"{a|644人}"+"\n\n{b|存活率0.37}";
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
            value: 63,
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
        hoverAnimation: false,
        center: ['50%', '50%'],
        data: [{
            value: 55,
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
                    formatter: function(params){
                        return "{b|Cherbourg}\n\n"+"{a|168人}"+"\n\n{b|存活率0.55}";
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
            value: 45,
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
        hoverAnimation: false,
        center: ['85%', '50%'],
        data: [{
            value: 39,
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
                    formatter: function(params){
                        return "{b|Queenstown}\n\n"+"{a|77人}"+"\n\n{b|存活率0.39}";
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
            value: 61,
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