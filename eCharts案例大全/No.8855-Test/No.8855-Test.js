option = {
    backgroundColor: '#7A72D6',
    tooltip: {
        trigger: 'axis',
        textStyle: {
            color: '#fff',
        },
    },
    grid: {
        left: '50',
        right: '50',
        top: '40',
        bottom: '12%',
    },
    xAxis: [{
        type: 'category',
        splitArea: {
            show: false,
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,
        
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        data: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"]
    }],
    yAxis: [{
        show: false,
    }],
    series: [{
            name: 'TIT',
            type: 'line',
            symbol: 'circle',
            symbolSize: 25,
            lineStyle: {
                normal: {
                    width: 2,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 2,
                    shadowOffsetY: 3,
                    shadowOffsetX: 3,
                    type: 'dashed',
                    color: new echarts.graphic.LinearGradient(
                        0, 0.25, 0.75, 1,
                        [{
                                offset: 0,
                                color: '#00CC00'
                            },
                            {
                                offset: 0.25,
                                color: '#00CC00'
                            },
                            {
                                offset: 0.75,
                                color: '#00CC00'
                            },
                            {
                                offset: 1,
                                color: '#00CC00'
                            },
                        ]
                    )
                }
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#fff',
                }
            },
            itemStyle: {
                color: function(params) {
                    let colorList = [
                        new echarts.graphic.LinearGradient(
                            0, 0, 1, 1, [{
                                offset: 0,
                                color: '#00CC00'
                            }, {
                                offset: 1,
                                color: '#fff'
                            }]),
                            new echarts.graphic.LinearGradient(
                            0, 0, 1, 1, [{
                                offset: 0,
                                color: '#0ff'
                            }, {
                                offset: 1,
                                color: '#fff'
                            }]),
                            new echarts.graphic.LinearGradient(
                            0, 0, 1, 1, [{
                                offset: 0,
                                color: '#fea'
                            }, {
                                offset: 1,
                                color: '#fff'
                            }]),
                            new echarts.graphic.LinearGradient(
                            0, 0, 1, 1, [{
                                offset: 0,
                                color: '#000'
                            }, {
                                offset: 1,
                                color: '#fff'
                            }]),
                            new echarts.graphic.LinearGradient(
                            0, 0, 1, 1, [{
                                offset: 0,
                                color: '#f00'
                            }, {
                                offset: 1,
                                color: '#fff'
                            }]),
                            new echarts.graphic.LinearGradient(
                            0, 0, 1, 1, [{
                                offset: 0,
                                color: '#ff0'
                            }, {
                                offset: 1,
                                color: '#fff'
                            }]),
                            new echarts.graphic.LinearGradient(
                            0, 0, 1, 1, [{
                                offset: 0,
                                color: '#07f'
                            }, {
                                offset: 1,
                                color: '#fff'
                            }]),
                            new echarts.graphic.LinearGradient(
                            0, 0, 1, 1, [{
                                offset: 0,
                                color: '#0cc'
                            }, {
                                offset: 1,
                                color: '#fff'
                            }]),

                    ];
                    return colorList[params.dataIndex];
                },
                borderColor: "#fff",
                borderWidth: 2,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            
            data: [1020, 1682, 1091, 2000, 3090, 2230, 1910, 1682, 1791, 3000, 4090, 2220],

        },
        {
            z: 1,
            type: 'pictorialBar',
            name: 'TIT',
            tooltip: {
                show: false
            },
            animation: false,
            hoverAnimation: false,
            data: [3220, 3682, 2791, 3000, 4090, 3230, 2910, 4682, 2791, 3000, 4090, 2220],
            symbol: 'path://d="M936.1,773.6l-10-160.3h20Zm0-264.1-.8,103.8-30.4-42.6s17.4,11.8,8.9-19c0,0,18.8,13.9,8.9-16.8,0-.1,9.6,4.8,13.4-25.4Zm1.7.1L937,613.3l31.1-42.1s-17.6,11.5-8.6-19.1c0,0-19,13.6-8.7-17.1C950.8,535,941.1,539.8,937.8,509.6Zm.5,107.8h-4.4l2.2,132.8Z"',
            barWidth: 50,
            itemStyle: {
                normal: {
                    barBorderRadius: 50,
                    color: new echarts.graphic.LinearGradient(
                        0, 0.25, 0.75, 1,
                        [{
                                offset: 0,
                                color: '#FFDF75'
                            },
                            {
                                offset: 1,
                                color: '#f00'
                            },
                        ]
                    ),
                    // opacity: .7,
                    label: {
                        show: false
                    },
                    shadowColor: '#2D258B',
                    shadowBlur: 0,
                    shadowOffsetY: 1,
                    shadowOffsetX: 1,
                }
            },
        },
    ]
};