// 利用重力模型来测量各高校之间吸引程度，红色代表女生多于男生，
// 深蓝色代表男生多于女生，圆圈大小代表多出数量的多少，连线的
// 粗细代表吸引力排斥力的大小，绿色为吸引，橙色为排斥
option = {
    title: {
        text: ''
    },
    toolbox:{
        feature:{
            saveAsImage:{
                show:true,
                pixelRatio:5
            }
        }
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        type: 'graph',
        layout: 'none',
        // symbolSize: 50,
        roam: true,
        label: {
            normal: {
                show: true
            }
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
            normal: {
                textStyle: {
                    fontSize: 20
                }
            }
        },
        data: [{
                name: '中国人民大学',
                symbolSize: 56,
                x: 250,
                y: 300,

            },
            {
                name: '中央财经大学',
                symbolSize: 56,
                x: 650,
                y: 500,

            },
            {
                name: '中国政法大学',
                symbolSize: 58,
                x: 750,
                y: 460,

            }, {
                name: '北京航空航天大学',
                symbolSize: 218,
                itemStyle: {
                    color: '#2f4554'
                },
                x: 730,
                y: 250
            }, {
                name: '清华大学',
                symbolSize: 128,
                itemStyle: {
                    color: '#2f4554'
                },
                x: 500,
                y: 170
            },
            {
                name: '北京理工大学',
                symbolSize: 125,
                itemStyle: {
                    color: '#2f4554'
                },
                x: 320,
                y: 450
            }, {
                name: '北京大学',
                symbolSize: 56,
                itemStyle: {
                    color: '#2f4554'
                },
                x: 330,
                y: 220
            }
        ],
        // links: [],
        links: [ {
                source: '北京航空航天大学',
                target: '中国人民大学',
                // label: {
                //     normal: {
                //         show: true
                //     }
                // },
                lineStyle: {
                    normal: {
                        width: 15.4,
                        color: '#91c7ae'

                    }
                },
            }, {
                source: '清华大学',
                lineStyle: {
                    normal: {
                        width: 5.9,
                        color: '#91c7ae'

                    }
                },
                target: '中国人民大学'
            },
            {
                source: '清华大学',
                lineStyle: {
                    normal: {
                        width: 4.2,
                        color: '#91c7ae'

                    }
                },
                target: '中央财经大学'
            },
            {
                source: '中国政法大学',
                lineStyle: {
                    normal: {
                        width: 5.2,
                        color: '#91c7ae'

                    }
                },
                target: '清华大学'
            },
            {
                source: '中国人民大学',
                lineStyle: {
                    normal: {
                        width: 3.77,
                        color: '#d48265'

                    }
                },
                target: '中国政法大学'
            },
            {
                source: '中国人民大学',
                lineStyle: {
                    normal: {
                        width: 3.77,
                        color: '#d48265'

                    }
                },
                target: '中央财经大学'
            },
            {
                source: '北京大学',
                lineStyle: {
                    normal: {
                        width: 3.98,
                        color: '#91c7ae'

                    }
                },
                target: '中国人民大学'
            },
            {
                source: '中央财经大学',
                lineStyle: {
                    normal: {
                        width: 1.98,
                        color: '#91c7ae'

                    }
                },
                target: '北京大学'
            },
            {
                source: '中国政法大学',
                lineStyle: {
                    normal: {
                        width: 2.76,
                        color: '#91c7ae'

                    }
                },
                target: '北京大学'
            },
            {
                source: '中央财经大学',
                lineStyle: {
                    normal: {
                        width: 3.74,
                        color: '#d48265'

                    }
                },
                target: '中国政法大学'
            }, {
                source: '北京航空航天大学',
                lineStyle: {
                    normal: {
                        width: 23,
                        color: '#d48265'

                    }
                },
                target: '清华大学'
            },
            {
                source: '北京航空航天大学',
                lineStyle: {
                    normal: {
                        width: 11.86,
                        color: '#d48265'

                    }
                },
                target: '北京大学'
            },
            {
                source: '北京航空航天大学',
                lineStyle: {
                    normal: {
                        width: 10.2,
                        color: '#91c7ae'

                    }
                },
                target: '中央财经大学'
            },
            {
                source: '北京航空航天大学',
                lineStyle: {
                    normal: {
                        width: 18.8,
                        color: '#91c7ae'

                    }
                },
                target: '中国政法大学'
            }, {
                source: '北京航空航天大学',
                lineStyle: {
                    normal: {
                        width: 22.81,
                        color: '#d48265'

                    }
                },
                target: '北京理工大学'
            },
            {
                source: '清华大学',
                lineStyle: {
                    normal: {
                        width: 13.23,
                        color: '#d48265'

                    }
                },
                target: '北京理工大学'
            },
            {
                source: '清华大学',
                lineStyle: {
                    normal: {
                        width: 11.92,
                        color: '#d48265'

                    }
                },
                target: '北京大学'
            },
            {
                source: '北京理工大学',
                lineStyle: {
                    normal: {
                        width: 8.86,
                        color: '#d48265'

                    }
                },
                target: '北京大学'
            },
            {
                source: '中央财经大学',
                lineStyle: {
                    normal: {
                        width: 8.37,
                        color: '#91c7ae'

                    }
                },
                target: '北京理工大学'
            },
            {
                source: '中国政法大学',
                lineStyle: {
                    normal: {
                        width: 8,
                        color: '#91c7ae'

                    }
                },
                target: '北京理工大学'
            }, {
                source: '中国人民大学',
                lineStyle: {
                    normal: {
                        width: 8.84,
                        color: '#91c7ae'

                    }
                },
                target: '北京理工大学'
            }
        ],
        lineStyle: {
            normal: {
                opacity: 0.9,
                width: 2,
                curveness: 0
            }
        }
    }]
};