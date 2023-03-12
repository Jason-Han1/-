option = {
    backgroundColor: '#ddd',
    tooltip: {
        trigger: 'axis'
    },
    title: {
        text: 'X: Scale of Dataset\nY: Number of Papers',
        color: '#ddd',
        fontSize: 10
            // subtext: '纯属虚构'
    },
    legend: {

        data: ['上限', '实际值'],
        textStyle: {
            color: '#333',
            fontSize: 20
        }
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {},
            dataView: {
                readOnly: false
            },
            magicType: {
                type: ['line', 'bar']
            },
            restore: {},
            saveAsImage: {}
        }
    },

    xAxis: {

        type: 'category',
        boundaryGap: false,
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dotted'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#333',
                fontSize: 20
            },
        },
        axisLine: {
            lineStyle: {
                color: '#333'
            }
        },

        data: ['0', '10', '10e2', '10e3', '10e4', '10e5', '10e6', '10e7', '10e8', '10e9', '10e10','10e11','10e13','10e14','10e15'],
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: '#333',
                fontSize: 20
            }
        },
        min: 0,
        axisLine: {
            lineStyle: {
                color: '#333'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dotted'
            }
        }
    },
    series: [{
            // name:'实际值',
            type: 'line',
            symbol: 'roundRect',
            itemStyle: {
                normal: {
                    color: 'rgba(117,136,228,0.5)'
                }
            },
            data: [5, 0, 3, 12, 7, 19, 31, 55, 34, 0,11,16,55,65,58],
            lineStyle: {
                normal: {
                    color: 'rgba(117,136,228,0.5)',
                    width: 3
                }
            },
            smooth: true,
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(117,136,228,0.5)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(117,136,228,0.5)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            }
        },


        {
            name: '平行于x轴的趋势线',
            type: 'line',
            markLine: {
                data: [{
                    yAxis: 55
                }],
                lineStyle: {
                    normal: {
                        // color: colors[0]
                    }
                }
            }
        }, {
            name: '平行于y轴的趋势线',
            type: 'line',

            markLine: {

                itemStyle: {
                    normal: {
                        borderWidth: 1,

                        lineStyle: {

                            type: 'dash',
                            color: '#333 ',
                            width: 1,
                        },

                        label: {
                            formatter: '',
                            textStyle: {
                                fontSize: 16,
                                fontWeight: "bolder",
                            },
                        }
                    },

                }
            }
        }
    ]
};

var index = 0;