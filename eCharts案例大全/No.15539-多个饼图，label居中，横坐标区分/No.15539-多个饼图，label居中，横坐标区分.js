option = {
    tooltip: {
        trigger: 'item',
        formatter: function(params, ticket, callback) {
            var res = params.seriesName;
            res += '<br/>' + params.name + ' : ' + params.percent + '%';
            return res;
        }
    },
    grid: {
        bottom: 30
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0
        },
        data: ['同校学生相似度', '同班学生相似度', '同级学生相似度', '同学院学生相似度']
    }],
    yAxis: [{
        show: false
    }],
    series: [{
        name: '正常在校学生',
        center: [
            '20.0%',
            '50%'
        ],
        radius: [
            '20%',
            '25%'
        ],
        type: 'pie',
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 20,
            name: '相似度',
            label: {
                normal: {
                    formatter: '{d} %',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold',
                        color: '#000'
                    }
                }
            }
        }, {
            value: 80,
            name: '',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                },
                emphasis: {
                    color: '#aaa'
                }
            },
            hoverAnimation: false
        }]
    }, {
        name: '同班学生',
        center: [
            '40.0%',
            '50%'
        ],
        radius: [
            '20%',
            '25%'
        ],
        type: 'pie',
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 20,
            name: '相似度',
            label: {
                normal: {
                    formatter: '{d} %',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold',
                        color: '#000'
                    }
                }
            }
        }, {
            value: 80,
            name: '',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                },
                emphasis: {
                    color: '#aaa'
                }
            },
            hoverAnimation: false
        }]
    }, {
        name: '同级学生',
        center: [
            '60.0%',
            '50%'
        ],
        radius: [
            '20%',
            '25%'
        ],
        type: 'pie',
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 20,
            name: '相似度',
            label: {
                normal: {
                    formatter: '{d} %',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold',
                        color: '#000'
                    }
                }
            }
        }, {
            value: 80,
            name: '',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                },
                emphasis: {
                    color: '#aaa'
                }
            },
            hoverAnimation: false
        }]
    }, {
        name: '失联学生',
        center: [
            '80.0%',
            '50%'
        ],
        radius: [
            '20%',
            '25%'
        ],
        type: 'pie',
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 20,
            name: '相似度',
            label: {
                normal: {
                    formatter: '{d} %',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold',
                        color: '#000'
                    }
                }
            }
        }, {
            value: 80,
            name: '',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                },
                emphasis: {
                    color: '#aaa'
                }
            },
            hoverAnimation: false
        }]
    }]
};