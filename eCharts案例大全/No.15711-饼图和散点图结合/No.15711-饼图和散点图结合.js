var markLineOpt = {};

var option = {
    backgroundColor: '',
    title: {
        text: '',
        x: '35%',
        y: 0
    },
    xAxis: [{
        gridIndex: 0,
        type: 'value',
        show: false,
        min: 0,
        max: 100,
        name: '市场需求指数',
        nameLocation: 'middle',
        nameGap: 30,

    }, ],
    yAxis: [{
        gridIndex: 0,
        min: 0,
        show: false,
        max: 100,
        name: '竞争强度指数',
        nameLocation: 'middle',
        nameGap: 30,
    }, ],
    series: [{
            name: '强相关',
            type: 'scatter',
            xAxisIndex: 0,
            yAxisIndex: 0,
            symbol: 'circle',
            symbolSize: 40,
            label: {
                normal: {
                    show: true,
                    formatter: function(param) {
                        return param.data[2];
                    },
                },

            },
            itemStyle: {
                normal: {
                    color: '#5aa8ee',
                    shadowColor: 'rgba(0,0,139, 0.8)',
                    shadowBlur: 15,

                    shadowOffsetX: 5,
                    shadowOffsetY: 5,
                    opacity: 0.9

                },

            },

            data: [

                [85, 90, '发动机'],

                [52.621156950336, 83.3333333333333, '欺骗 '],
                [72.8471414092121, 83.3333333333333, '质量 '],

                [34.301212507977, 50, '噪音 '],
                [14.74492285746462, 16.6666666666667, '耗油 '],


            ],

        },

        {
            name: '弱相关',
            type: 'scatter',
            xAxisIndex: 0,
            yAxisIndex: 0,
            symbol: 'circle',
            symbolSize: 40,
            label: {
                normal: {
                    show: true,
                    formatter: function(param) {
                        return param.data[2];
                    },
                },

            },
            itemStyle: {
                normal: {
                    // color:'#5aa8ee',
                    color: function(param) {
                        return param.data[3];
                    },
                    shadowColor: 'rgba(0,0,139, 0.8)',
                    shadowBlur: 15,

                    shadowOffsetX: 5,
                    shadowOffsetY: 5,
                    opacity: 0.9

                },

            },

            data: [
                [50, 50, '大众', '#FFFF00'],
                [70.7731146064041, 50, '欺诈 ', '#5aa8ee'],
                [90.626525019708, 50, '尾气 '],
            ],
            markLine: markLineOpt
        }, {
            name: '访问来源',
            type: 'pie',
            radius: ['0', '38%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#E3E3FF'
                        }, {
                            offset: 0.25,
                            color: '#DFDFFF'
                        }, {
                            offset: 0.50,
                            color: '#DFDFFF'
                        }, {
                            offset: 0.75,
                            color: '#DFDFFF'
                        },


                        {
                            offset: 1,
                            color: '#E3E3FF'
                        }
                    ], false),
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 335,
                    name: '直接访问'
                },

            ]
        },

        {
            name: '相关背景',
            type: 'pie',
            radius: ['38%', '77%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#FFFFFF'
                        }, {
                            offset: 0.10,
                            color: '#FFFFFF'
                        }, {
                            offset: 0.45,
                            color: '#DFDFFF'
                        }, {
                            offset: 0.55,
                            color: '#DFDFFF'
                        }, {
                            offset: 0.90,
                            color: '#FFFFFF'
                        },

                        {
                            offset: 1,
                            color: '#FFFFFF'
                        }
                    ], false),
                },
            },

            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 3235,
                    name: '直接访问'
                },


            ]
        }, {
            name: '相关背景',
            type: 'pie',
            radius: ['76%', '100%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#FFFFFF'
                        },

                        {
                            offset: 0.30,
                            color: '#E3E3FF'
                        }, {
                            offset: 0.50,
                            color: '#E3E3FF'
                        }, {
                            offset: 0.70,
                            color: '#E3E3FF'
                        },

                        {
                            offset: 1,
                            color: '#FFFFFF'
                        }
                    ], false),
                },
            },

            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 3235,
                    name: '直接访问'
                },


            ]
        }

    ]
};