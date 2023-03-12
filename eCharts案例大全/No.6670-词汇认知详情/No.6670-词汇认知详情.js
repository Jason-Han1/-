option = {
    title: {
        text: "中考必考词汇掌握率\n\n词汇量较大",
        subtext: '90%',
        x: 'center',
        y: 45 + '%',
        textStyle: {
            color: "#7D8790",
            fontSize: 20,
            fontWeight: 'normal'
        },
        subtextStyle: {
            color: "black",
            fontSize: 50,
            fontWeight: 'normal',
            fontWeight: '900'

        }
    },
    calculable: true,
    series: [{
            name: '总词汇量',
            type: 'pie',
            radius: [150, 180],
            center: ['50%', '50%'],
            data: [{
                    value: 0,
                    itemStyle: {
                        color: "transparent"
                    }
                },
                {
                    value: 1500,
                    itemStyle: {
                        color: {
                            colorStops: [{
                                offset: 0,
                                color: 'red' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'blue' // 100% 处的颜色
                            }],
                        }
                    },
                    label: {
                        color: '#57C9FF',
                        fontSize: 14,
                        formatter: '总词汇量{c}个',
                        rich: {
                            a: {
                                color: "#03141c",
                                fontSize: 20,
                                lineHeight: 30
                            },
                        }
                    }
                }
            ]
        },
        {
            name: '听说词汇总量',
            type: 'pie',
            radius: [160, 170],
            center: ['50%', '50%'],
            data: [{
                value: 0,
                itemStyle: {
                    color: "transparent"
                }
            }, {
                value: 3500,
                itemStyle: {
                    color: {
                        colorStops: [{
                            offset: 0,
                            color: 'red' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'blue' // 100% 处的颜色
                        }],
                    }
                },
                label: {
                    color: "#57C9FF",
                    fontSize: 14,
                    formatter: '听说词汇总量{c}个',
                    rich: {
                        a: {
                            color: "#03141c",
                            fontSize: 20,
                            lineHeight: 30
                        },
                    }
                }
            }]
        },
        {
            name: '读写词汇总量',
            type: 'pie',
            radius: [150, 180],
            center: ['50%', '50%'],
            data: [{
                    value: 2500,
                    itemStyle: {
                        color: "transparent"
                    }
                },
                {
                    value: 1500,
                    itemStyle: {
                        color: {
                            colorStops: [{
                                offset: 0,
                                color: '#24D7BC' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#61EBD6' // 100% 处的颜色
                            }],
                        }
                    },
                    label: {
                        color: "#57C9FF",
                        fontSize: 14,
                        formatter: '读写词汇总量{c}个',
                        rich: {
                            a: {
                                color: "#03141c",
                                fontSize: 20,
                                lineHeight: 30
                            },
                        }
                    }
                }
            ]
        }
    ]
};