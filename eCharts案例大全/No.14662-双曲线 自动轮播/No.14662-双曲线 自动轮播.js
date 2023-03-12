option = {
    timeline: {
        data: [
            '50年代', '60年代', '70年代', '80年代', '90年代', '10年代', '10年代至今'
        ],
        axisType: 'category',
        show: true,
        autoPlay: true,
        playInterval: 3000
    },
    options: [{
        title: {
            text: '不同年代公司注册数量,以及注册金额',
        },
        grid: {
            top: 80,
            bottom: 100
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            name: '年代',
            data: ["1", "2", "3", "4", '5', '6', '7', '8', '9', '10', '11', '12']
        },
        yAxis: {
            type: 'value',
            name: '单位：元',
             max: 200,
            min: 0
        },
        series: [{
            name: '50年代',
            type: 'line',
            smooth: true,
            stack: '总量',
            symbolSize: 4,
            hoverAnimation: false,
            lineStyle: {
                normal: {
                    color: '#2ec7c9',
                },
            },
            areaStyle: {
                normal: {
                    color: '#2ec7c9',
                    opacity: 0.3,
                },
            },
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            data: [92, 130, 83, 55, 54, 48, 75, 56, 59, 103, 86, 58]
        }, {
            name: '50年代',
            type: 'line',
            smooth: true,
            stack: '总量',
            symbolSize: 4,
            hoverAnimation: false,
            lineStyle: {
                normal: {
                    color: '#b6a2de',
                },
            },
            areaStyle: {
                normal: {
                    color: '#b6a2de',
                    opacity: 0.3,
                },
            },
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            data: [89, 83, 78, 63, 50, 52, 52, 40, 41, 60, 100, 134]
        }, ]
    }, {
        yAxis: {
            type: 'value',
            name: '单位：元',
            max: 200,
            min: 0

        },
        xAxis: {
            name: '时间',
            data: ["1", "2", "3", "4", '5', '6', '7', '8', '9', '10', '11', '12']
        },
        series: [{
            name: '60年代',
            type: 'line',
            smooth: true,
            stack: '总量',
            symbolSize: 4,
            hoverAnimation: false,
            lineStyle: {
                normal: {
                    color: '#2ec7c9',
                },
            },
            areaStyle: {
                normal: {
                    color: '#2ec7c9',
                    opacity: 0.3,
                },
            },
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            data: [92, 130, 83, 55, 54, 48, 75, 56, 59, 103, 86, 58]
        }, {
            name: '60年代',
            type: 'line',
            smooth: true,
            stack: '总量',
            symbolSize: 4,
            hoverAnimation: false,
            lineStyle: {
                normal: {
                    color: '#b6a2de',
                },
            },
            areaStyle: {
                normal: {
                    color: '#b6a2de',
                    opacity: 0.3,
                },
            },
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            data: [89, 83, 78, 63, 50, 52, 52, 40, 41, 60, 100, 134]
        }, ]
    }, {
        yAxis: {
            type: 'value',
            name: '单位：元',
            max: 200,
            min: 0
        },
        xAxis: {
            name: '时间',
            data: ["1", "2", "3", "4", '5', '6', '7', '8', '9', '10', '11', '12']
        },
        series: [{
            name: '70年代',
            type: 'line',
            smooth: true,
            stack: '总量',
            symbolSize: 4,
            hoverAnimation: false,
            lineStyle: {
                normal: {
                    color: '#2ec7c9',
                },
            },
            areaStyle: {
                normal: {
                    color: '#2ec7c9',
                    opacity: 0.3,
                },
            },
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            data: [92, 130, 83, 55, 54, 48, 75, 56, 59, 103, 86, 58]
        }, {
            name: '70年代',
            type: 'line',
            smooth: true,
            stack: '总量',
            symbolSize: 4,
            hoverAnimation: false,
            lineStyle: {
                normal: {
                    color: '#b6a2de',
                },
            },
            areaStyle: {
                normal: {
                    color: '#b6a2de',
                    opacity: 0.3,
                },
            },
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            data: [89, 83, 78, 63, 50, 52, 52, 40, 41, 60, 100, 134]
        }, ]
    }, {
        yAxis: {
            type: 'value',
            name: '单位：元',
            max: 200,
            min: 0
        },
        xAxis: {
            name: '时间',
            data: ["1", "2", "3", "4", '5', '6', '7', '8', '9', '10', '11', '12']
        },
        series: [{
            name: '80年代',
            type: 'line',
            smooth: true,
            stack: '总量',
            symbolSize: 4,
            hoverAnimation: false,
            lineStyle: {
                normal: {
                    color: '#2ec7c9',
                },
            },
            areaStyle: {
                normal: {
                    color: '#2ec7c9',
                    opacity: 0.3,
                },
            },
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            data: [92, 130, 83, 55, 54, 48, 75, 56, 59, 103, 86, 58]
        }, {
            name: '80年代',
            type: 'line',
            smooth: true,
            stack: '总量',
            symbolSize: 4,
            hoverAnimation: false,
            lineStyle: {
                normal: {
                    color: '#b6a2de',
                },
            },
            areaStyle: {
                normal: {
                    color: '#b6a2de',
                    opacity: 0.3,
                },
            },
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            data: [89, 83, 78, 63, 50, 52, 52, 40, 41, 60, 100, 134]
        }, ]
    }, {
        yAxis: {
            type: 'value',
            name: '单位：元',
             max: 200,
            min: 0
        },
        xAxis: {
            name: '时间',
            data: ["1", "2", "3", "4", '5', '6', '7', '8', '9', '10', '11', '12']
        },
        series: [{
            name: '90年代',
            type: 'line',
            smooth: true,
            stack: '总量',
            symbolSize: 4,
            hoverAnimation: false,
            lineStyle: {
                normal: {
                    color: '#2ec7c9',
                },
            },
            areaStyle: {
                normal: {
                    color: '#2ec7c9',
                    opacity: 0.3,
                },
            },
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            data: [92, 130, 83, 55, 54, 48, 75, 56, 59, 103, 86, 58]
        }, {
            name: '90年代',
            type: 'line',
            smooth: true,
            stack: '总量',
            symbolSize: 4,
            hoverAnimation: false,
            lineStyle: {
                normal: {
                    color: '#b6a2de',
                },
            },
            areaStyle: {
                normal: {
                    color: '#b6a2de',
                    opacity: 0.3,
                },
            },
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            data: [89, 83, 78, 63, 50, 52, 52, 40, 41, 60, 100, 134]
        }, ]
    }, {
        yAxis: {
            type: 'value',
            name: '单位：元',
            max: 200,
            min: 0
        },
        xAxis: {
            name: '时间',
            data: ["1", "2", "3", "4", '5', '6', '7', '8', '9', '10', '11', '12']
        },
        series: [{
            name: '10年代',
            type: 'line',
            smooth: true,
            stack: '总量',
            symbolSize: 4,
            hoverAnimation: false,
            lineStyle: {
                normal: {
                    color: '#2ec7c9',
                },
            },
            areaStyle: {
                normal: {
                    color: '#2ec7c9',
                    opacity: 0.3,
                },
            },
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            data: [92, 130, 83, 55, 54, 48, 75, 56, 59, 103, 86, 58]
        }, {
            name: '10年代',
            type: 'line',
            smooth: true,
            stack: '总量',
            symbolSize: 4,
            hoverAnimation: false,
            lineStyle: {
                normal: {
                    color: '#b6a2de',
                },
            },
            areaStyle: {
                normal: {
                    color: '#b6a2de',
                    opacity: 0.3,
                },
            },
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            data: [89, 83, 78, 63, 50, 52, 52, 40, 41, 60, 100, 134]
        }, ]
    }, {
        yAxis: {
            type: 'value',
            name: '单位：元',
            max: 200,
            min: 0
        },
        xAxis: {
            name: '时间',
            data: ["1", "2", "3", "4", '5', '6', '7', '8', '9', '10', '11', '12']
        },
        series: [{
            name: '10年代至今',
            type: 'line',
            smooth: true,
            stack: '总量',
            symbolSize: 4,
            hoverAnimation: false,
            lineStyle: {
                normal: {
                    color: '#2ec7c9',
                },
            },
            areaStyle: {
                normal: {
                    color: '#2ec7c9',
                    opacity: 0.3,
                },
            },
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            data: [92, 130, 83, 55, 54, 48, 75, 56, 59, 103, 86, 58]
        }, {
            name: '10年代至今',
            type: 'line',
            smooth: true,
            stack: '总量',
            symbolSize: 4,
            hoverAnimation: false,
            lineStyle: {
                normal: {
                    color: '#b6a2de',
                },
            },
            areaStyle: {
                normal: {
                    color: '#b6a2de',
                    opacity: 0.3,
                },
            },
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            data: [89, 83, 78, 63, 50, 52, 52, 40, 41, 60, 100, 134]
        }, ]
    }]

};