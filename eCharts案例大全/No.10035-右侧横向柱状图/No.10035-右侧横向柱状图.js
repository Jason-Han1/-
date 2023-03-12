var seriesLabel = {
    normal: {
        show: true,
        textBorderColor: '#333',
        textBorderWidth: 0.5,
        position: 'left',
        textStyle: {
            color: '#fcfa02',
        },
        formatter: function(val) {
            return Math.abs(val.value);
        }
    }
}

option = {
    backgroundColor: 'black',
    grid: {
        right: '5%',
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
        position: 'right'
    },
    series: [{
            type: 'bar',
            barWidth: 0.01,
            data: [{
                    value: -137,
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTopRight',
                            offset: [0, -25],
                            textStyle: {
                                fontSize: 12,
                                color: 'white',
                            },
                            formatter: '最亮的咖'
                        }
                    },
                },
                {
                    value: -179,
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTopRight',
                            offset: [0, -25],
                            textStyle: {
                                fontSize: 12,
                                color: 'white',
                            },
                            formatter: '最亮的咖'
                        }
                    },
                }, {
                    value: -236,
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTopRight',
                            offset: [0, -25],
                            textStyle: {
                                fontSize: 12,
                                color: 'white',
                            },
                            formatter: '最亮的咖'
                        }
                    },
                }, {
                    value: -243,
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTopRight',
                            offset: [0, -20],
                            textStyle: {
                                fontSize: 12,
                                color: 'white',
                            },
                            formatter: '最亮的咖'
                        }
                    },
                }, {
                    value: -243,
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTopRight',
                            offset: [0, -25],
                            textStyle: {
                                fontSize: 12,
                                color: 'white',
                            },
                            formatter: '最亮的咖'
                        }
                    },
                }, {
                    value: -608,
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTopRight',
                            offset: [0, -25],
                            textStyle: {
                                fontSize: 12,
                                color: 'white',
                            },
                            formatter: '最亮的咖'
                        }
                    },
                }, {
                    value: -826,
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTopRight',
                            offset: [0, -25],
                            textStyle: {
                                fontSize: 12,
                                color: 'white',
                            },
                            formatter: '最亮的咖'
                        }
                    },
                }
            ],


        },
        {
            type: 'bar',
            barWidth: 20,
            data: [-241, -254, -313, -322, -442, -778, -1413],
            label: seriesLabel,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 1,
                        [{
                                offset: 0,
                                color: '#fdc502'
                            }, //柱图渐变色

                            {
                                offset: 1,
                                color: '#fcfa02'
                            }, //柱图渐变色
                        ]
                    )
                },
            },

        },

    ]
};