var seriesLabel = {
    normal: {
        show: true,
        textBorderColor: '#333',
        textBorderWidth: 0.5,
        position: 'right',
        textStyle: {
            color: '#3ca7f6',
        }
    }
}

option = {
    backgroundColor: 'black',
    grid: {
        left: 100,
        bottom: 100
    },

    xAxis: {
        show: false,
        type: 'value',
        name: 'Days',
        axisLabel: {
            formatter: '{value}'
        }
    },
    yAxis: {
        type: 'category',
        show: false,

    },
    series: [{
            type: 'bar',
            barWidth: 0.01,
            data: [{
                    value: 137,
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTopLeft',
                            offset: [-5, -25],
                            textStyle: {
                                fontSize: 12,
                                color: 'white',
                            },
                            formatter: '最亮的崽'
                        }
                    },
                },
                {
                    value: 179,
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTopLeft',
                            offset: [-5, -25],
                            textStyle: {
                                fontSize: 12,
                                color: 'white',
                            },
                            formatter: '最亮的崽..'
                        }
                    },
                }, {
                    value: 236,
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTopLeft',
                            offset: [-5, -25],
                            textStyle: {
                                fontSize: 12,
                                color: 'white',
                            },
                            formatter: '最亮的崽..'
                        }
                    },
                }, {
                    value: 243,
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTopLeft',
                            offset: [-5, -25],
                            textStyle: {
                                fontSize: 12,
                                color: 'white',
                            },
                            formatter: '最亮的崽'
                        }
                    },
                }, {
                    value: 243,
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTopLeft',
                            offset: [-5, -25],
                            textStyle: {
                                fontSize: 12,
                                color: 'white',
                            },
                            formatter: '最亮的崽'
                        }
                    },
                }, {
                    value: 608,
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTopLeft',
                            offset: [-5, -25],
                            textStyle: {
                                fontSize: 12,
                                color: 'white',
                            },
                            formatter: '最亮的崽...'
                        }
                    },
                }, {
                    value: 826,
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTopLeft',
                            offset: [-5, -25],
                            textStyle: {
                                fontSize: 12,
                                color: 'white',
                            },
                            formatter: '最亮的崽a'
                        }
                    },
                }
            ],


        },
        {
            type: 'bar',
            barWidth: 20,
            data: [137, 179, 236, 243, 243, 608, 826],
            label: seriesLabel,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 1,
                        [{
                                offset: 0,
                                color: '#0574ea'
                            }, //柱图渐变色

                            {
                                offset: 1,
                                color: '#0eccf8'
                            }, //柱图渐变色
                        ]
                    )
                },
            },

        },

    ]
};