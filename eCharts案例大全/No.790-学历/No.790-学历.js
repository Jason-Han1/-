
option = {
    backgroundColor: 'black',
    tooltip: {},
    xAxis: {
        max: 2000,
        splitLine: {
            show: false
        },
        offset: 10,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    yAxis: [
        {
            type: "category",
            inverse: false,
            data: ['系统名称10', '系统名称9', '系统名称8', '系统名称7','系统名称6', '系统名称5', '系统名称4', '系统名称3', '系统名称2', '硕士研究生'],
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show:false
            }
        },
    ],
    grid: {
        top: '5%',
        height: 600,
        left: 50,
        right: 100
    },
    series: [
        { // 内边框
            name: '',
            type: 'pictorialBar',
            symbol: 'reat',
            //barWidth: '9%',
            //barMaxWidth: '20%',
            symbolOffset: ['-0.5%', 0],
            symbolSize: ['101%', 22],
            itemStyle: {
                normal: {

                    color: 'black'
                }
            },
            z: -20,
            symbolRepeat: null,
            symbolBoundingData: 2000,
            data: [891, 1220, 660, 1670,891, 1220, 660, 1670, 660, 1670],
            animationEasing: 'elasticOut',
             
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        offset: [10, 0],
                        textStyle: {
                            color: 'darkorange',
                            fontSize: 18
                        }
                    }
                }

        },


        {
            // current data
            type: 'pictorialBar',
            symbol: 'rect',
            symbolRepeat: 'fixed',
            symbolMargin: '20%',
            symbolClip: true,
            symbolSize: [10,20],
            symbolBoundingData: 2000,
                  
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        offset: [-60, 30],
                        textStyle: {
                            color: 'darkorange',
                            fontSize: 18
                        }
                    }
                },
            data: [
                {
                  "value": 300,
                  "itemStyle": {
                    "normal": {
                      "color": "#ff5715"
                    }
                  },
                },
                {
                  "value": 1220,
                  "itemStyle": {
                    "normal": {
                      "color": "#ff9915"
                    }
                  }
                },
                {
                  "value": 660,
                  "itemStyle": {
                    "normal": {
                      "color": "#ffdb15"
                    }
                  }
                },
                {
                  "value": 1670,
                  "itemStyle": {
                    "normal": {
                      "color": "#baff15"
                    }
                  }
                },
                {
                  "value": 1670,
                  "itemStyle": {
                    "normal": {
                      "color": "#46e621"
                    }
                  }
                },
                {
                  "value": 1670,
                  "itemStyle": {
                    "normal": {
                      "color": "#00df93"
                    }
                  }
                },
                {
                  "value": 1670,
                  "itemStyle": {
                    "normal": {
                      "color": "#00addf"
                    }
                  }
                },
                {
                  "value": 1670,
                  "itemStyle": {
                    "normal": {
                      "color": "#1a86ff"
                    }
                  }
                },
                {
                  "value": 1670,
                  "itemStyle": {
                    "normal": {
                      "color": "#8e49ff"
                    }
                  }
                },
                {
                  "value": 1670,
                  "itemStyle": {
                    "normal": {
                      "color": "#ff49f9"
                    }
                  },
                }],
            z: 99999999,
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
                return params.index * 30;
            }
        }, {
            // full data
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#6d6e7d'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    offset: [10, 0],
                    textStyle: {
                        color: 'darkorange',
                        fontSize: 18
                    }
                }
            },
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '20%',
            symbol: 'rect',
            symbolSize: [10,20],
            symbolBoundingData: 2000,
            data: [
                {
                    "value": 891,
                    label: {
                        normal: {
                            show: true,
                            position: [-10, -10],
                            formatter:'{b}',
                            offset: [10, 0],
                            textStyle: {
                                color: '#fff',
                                fontSize: 18
                            }
                        }
                    }
                },
                {
                    "value": 1220,
                    label: {
                        normal: {
                            show: true,
                            position: [-10, -10],
                            formatter:'{b}',
                            offset: [10, 0],
                            textStyle: {
                                color: '#fff',
                                fontSize: 18
                            }
                        }
                    }
                },
                {
                    "value": 660,
                    label: {
                        normal: {
                            show: true,
                            position: [-10, -10],
                            formatter:'{b}',
                            offset: [10, 0],
                            textStyle: {
                                color: '#fff',
                                fontSize: 18
                            }
                        }
                    }
                },
                {
                    "value": 1670,
                    label: {
                        normal: {
                            show: true,
                            position: [-10, -10],
                            formatter:'{b}',
                            offset: [10, 0],
                            textStyle: {
                                color: '#fff',
                                fontSize: 18
                            }
                        }
                    }
                },
                {
                    "value": 891,
                    label: {
                        normal: {
                            show: true,
                            position: [-10, -10],
                            formatter:'{b}',
                            offset: [10, 0],
                            textStyle: {
                                color: '#fff',
                                fontSize: 18
                            }
                        }
                    }
                },
                {
                    "value": 1220,
                    label: {
                        normal: {
                            show: true,
                            position: [-10, -10],
                            formatter:'{b}',
                            offset: [10, 0],
                            textStyle: {
                                color: '#fff',
                                fontSize: 18
                            }
                        }
                    }
                },
                {
                    "value": 1670,
                    label: {
                        normal: {
                            show: true,
                            position: [-10, -10],
                            formatter:'{b}',
                            offset: [10, 0],
                            textStyle: {
                                color: '#fff',
                                fontSize: 18
                            }
                        }
                    }
                },
                {
                    "value": 660,
                    label: {
                        normal: {
                            show: true,
                            position: [-10, -10],
                            formatter:'{b}',
                            offset: [10, 0],
                            textStyle: {
                                color: '#fff',
                                fontSize: 18
                            }
                        }
                    }
                },
                {
                    "value": 1670,
                    label: {
                        normal: {
                            show: true,
                            position: [-10, -10],
                            formatter:'{b}',
                            offset: [10, 0],
                            textStyle: {
                                color: '#fff',
                                fontSize: 18
                            }
                        }
                    }
                },
                {
                    "value": 1220,
                    label: {
                        normal: {
                            show: true,
                            position: [-10, -10],
                            formatter:'{b}',
                            offset: [10, 0],
                            textStyle: {
                                color: '#fff',
                                fontSize: 18
                            }
                        }
                    }
                }],
            z: 99999,
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
                return params.index * 30;
            }
        }
    ]
};