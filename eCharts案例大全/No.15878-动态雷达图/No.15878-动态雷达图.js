    var v1dom = document.getElementById("chart-panel");
    var v1 = echarts.init(v1dom);
    dataBJ = [

        [134, 96, 165, 41, 55],

    ];
    indicatorData = [{
            name: '英雄联盟',
            max: 300
        }, {
            name: '梦幻西游',
            max: 300
        }, {
            name: '阴阳师',
            max: 300
        }, {
            name: '部落冲突',
            max: 300
        }, {
            name: '剑侠奇缘',
            max: 300
        },

    ];
    var lineStyle = {
        normal: {
            width: 1,
            opacity: 0.5
        }
    };

    option = {
        color: [],
        backgroundColor: '#212121',
        legend: {
            bottom: 0,
            orient: 'horizontal',
            itemWidth: 30,
            itemHeight: 20,

            data: [{
                name: '',
                icon: 'circle',
                textStyle: {
                    color: "#fc20ff"
                }
            }]
        },
        tooltip: {},
        radar: {
            center: ['50%', '50%'],
            indicator: indicatorData,
            radius: '80%',
            splitNumber: 1,
            name: {
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                }
            },
            splitLine: {

                lineStyle: {
                    color: '#fff',
                    opacity: 0.5
                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: '#0d6dba',
                    opacity: 0.1
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#C2C9D1',
                    opacity: 0.5
                }
            }
        },
        series: [{
                name: '雷达线ALL',
                type: 'radar',
                silent: true,
                lineStyle: {
                    normal: {
                        type: 'solid',
                        color: "#C2C9D1",
                        width: 0.5,
                        opacity: 1,

                    }
                },
                data: [
                    [300, 300, 300, 300, 300]
                ],

                itemStyle: {
                    normal: {
                        opacity: 0

                    }
                },
                areaStyle: {
                    normal: {
                        color: '#0d6dba',
                        opacity: 0.1
                    }
                }
            }, {
                name: '雷达线2',
                type: 'radar',
                silent: true,
                lineStyle: {
                    normal: {
                        type: 'solid',
                         color: "#C2C9D1",
                        width: 0.5,
                        opacity: 1,

                    }
                },
                data: [
                    [250, 250, 250, 250, 250]
                ],

                itemStyle: {
                    normal: {
                        opacity: 0

                    }
                },
                areaStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        opacity: 0.1
                    }
                }
            }, {
                name: '雷达线3',
                type: 'radar',
                silent: true,
                lineStyle: {
                    normal: {
                        type: 'solid',
                         color: "#C2C9D1",
                        width: 0.5,
                        opacity: 1,

                    }
                },
                data: [
                    [200, 200, 200, 200, 200]
                ],

                itemStyle: {
                    normal: {
                        opacity: 0

                    }
                },
                areaStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        opacity: 0.1
                    }
                }
            }, {
                name: '雷达线4',
                type: 'radar',
                silent: true,
                lineStyle: {
                    normal: {
                        type: 'solid',
                        color: "#C2C9D1",
                        width: 0.5,
                        opacity: 1,

                    }
                },
                data: [
                    [150, 150, 150, 150, 150]
                ],

                itemStyle: {
                    normal: {
                        opacity: 0

                    }
                },
                areaStyle: {
                    normal: {
                        color: 'pink',
                        opacity: 0.1
                    }
                }
            }, {
                name: '雷达线5',
                type: 'radar',
                silent: true,
                lineStyle: {
                    normal: {
                        type: 'solid',
                        color: "#C2C9D1",
                        width: 0.5,
                        opacity: 1,

                    }
                },
                data: [
                    [100, 100, 100, 100, 100]
                ],

                itemStyle: {
                    normal: {
                        opacity: 0

                    }
                },
                areaStyle: {
                    normal: {
                        color: 'black',
                        opacity: 0.1
                    }
                }
            }, {
                name: '19-35岁',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataBJ,
                symbolSize: 4,
                itemStyle: {
                    normal: {
                        borderColor: '#fc20ff',
                        borderWidth: 4,

                    }
                },
                areaStyle: {
                    normal: {
                        color: '#fc20ff',
                        opacity: 0.5
                    }
                }
            }, {
                name: '雷达线',
                type: 'radar',
                silent: true,
                lineStyle: {
                    normal: {
                        type: 'dotted',
                        width: 4,
                        opacity: 0.3,

                    }
                },
                data: [
                    [6, 5, 6, 4, 2]
                ],

                itemStyle: {
                    normal: {
                        opacity: 0

                    }
                },
                areaStyle: {
                    normal: {
                        color: 'pink',
                        opacity: 0.2
                    }
                }
            }

        ]
    };
    v1.setOption(option);