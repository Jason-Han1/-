var data = 20;
option = {
    backgroundColor: 'transparent',
    grid: [{
        show: false,
        backgroundColor: 'rgba(0,0,0,0)',
        borderWidth: 0,
        top: '-20%'
    }],
    title: {
        text: data + '%',
        x: '50%',
        y: parseInt('100%') * 0.44 + '%',
        textAlign: "center",
        textStyle: {
            fontWeight: 'normal',
            color: '#fff',
            fontSize: parseInt("100%") * 0.6
        },
        borderColor: 'transparent',
        z: 100
    },
    legend: {
        bottom: '0',
        textStyle: {
            color: '#fff'
        },
        data: ["占比"]
    },
    tooltip: {
        show: false
    },
    series: [
        // 最底层圆圈
        {
            name: '遮罩1',
            type: 'pie',
            hoverAnimation: false,
            hoverOffset: 0,
            clickable: false,
            tooltip: {
                show: false
            },
            z: 1,
            radius: ['0%', '60%'],
            itemStyle: {
                normal: {
                    color: 'rgba(3,12,60,.9)',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            data: [{
                value: 100
            }]
        }, {
            name: '遮罩2',
            type: 'pie',
            hoverAnimation: false,
            hoverOffset: 0,
            //                startAngle: 85,
            stillShowZeroSum: true,
            clickable: false,
            tooltip: {
                show: false
            },
            z: 2,
            radius: ['0%', '15%'],
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#424663',
                    borderType: 'dashed'
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            data: [{
                value: 25
            }]
        }, {
            name: '遮罩4',
            type: 'pie',
            hoverAnimation: false,
            hoverOffset: 0,
            stillShowZeroSum: true,
            clickable: false,
            tooltip: {
                show: false
            },
            z: 2,
            radius: ['30%', '45%'],
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#424663',
                    borderWidth: 2,
                    borderType: 'dashed'
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            data: [{
                value: 25
            }]
        }, {
            name: '遮罩5',
            type: 'pie',
            hoverAnimation: false,
            hoverOffset: 0,
            //                startAngle: 85,
            stillShowZeroSum: true,
            clickable: false,
            tooltip: {
                show: false
            },
            z: 2,
            radius: ['45%', '60%'],
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#424663',
                    borderWidth: 3,
                    borderType: 'dashed'
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            data: [{
                value: 25
            }]
        },
        // 斜线
        {
            type: 'pie',
            hoverAnimation: false,
            z: 7,
            startAngle: 240,
            hoverOffset: 0,
            clickable: false,
            radius: '43%',
            roseType: 'area',
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0)',
                    borderColor: '#fff',
                    borderWidth: 2
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            data: [{
                value: 50
            }, {
                value: 50
            }]
        }, {
            type: 'pie',
            hoverAnimation: false,
            z: 7,
            startAngle: 240,
            hoverOffset: 0,
            clickable: false,
            radius: '15%',
            roseType: 'area',
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#1a224d',
                    borderWidth: 4
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            data: [{
                value: 50
            }, {
                value: 50
            }]
        },
        //内圈
        {
            name: '遮罩',
            type: 'pie',
            hoverAnimation: false,
            hoverOffset: 0,
            clickable: false,
            tooltip: {
                show: false
            },
            z: 7,
            radius: ['38%', '45%'],
            itemStyle: {
                normal: {
                    color: 'rgb(255,255,255)',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            data: [{
                value: 100
            }]
        },
        // 外圈
        {
            type: 'pie',
            radius: ['45%', '60%'],
            hoverAnimation: false,
            z: 12,
            color: ["#44d3e2", "transparent"],
            itemStyle: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            data: [{
                value: data,
                name: '占比'
            }, {
                value: 100 - data
            }]
        }
    ]
};