option = {
    tooltip: {
        trigger: 'axis',
        textStyle: {
            fontSize: 12,
        },
    },
    grid: {
        left: "2%",
        right: "2%",
        bottom: "5%",
        top: "2%",
        containLabel: true,
    },

    xAxis: [{
            type: 'category',

            axisLine: {
                lineStyle: {
                    color: "#0ab7ff",
                    fontSize: 8,
                },
            },
             axisLabel: {

            textStyle: {
                fontSize: 20
            },
        },
            data: ['电子投资', '自助选号', '同步直播', '视频信彩']
        },

    ],
    yAxis: [{
        type: "value",
        splitLine: {
            lineStyle: {
                color: "rgba(101,124,168,0.3)",
            },
        },
        //  min: 0,
        // max: 100,
        axisLabel: {

            color: '#0ab7ff',
            interval: 'auto',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
            lineStyle: {
                color: "#0ab7ff",
            },
        },
    }, ],
    series: [{
        name: '社交软件信彩',
        type: 'bar',
        barWidth: 20,
        data: [{
                value: 10,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        1, 1, 0, 0, [{
                                offset: 1,
                                color: '#0028ff'
                            }, {
                                offset: 0,
                                color: '#20a2ff'
                            }

                        ]
                    )
                }
            },
            {
                value: 20,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        1, 1, 0, 0, [{
                                offset: 1,
                                color: '#ffc31f'
                            }, {
                                offset: 0,
                                color: '#ff5a1f'
                            }

                        ]
                    )
                }
            },
            {
                value: 30,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        1, 1, 0, 0, [{
                                offset: 1,
                                color: '#67e0e3'
                            }, {
                                offset: 0,
                                color: '#0181de'
                            }

                        ]
                    )
                }
            },
            {
                value: 40,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        1, 1, 0, 0, [{
                                offset: 1,
                                color: '#45f1b2'
                            }, {
                                offset: 0,
                                color: '#00a65a'
                            }

                        ]
                    )
                }
            },
        ]
    }]

};