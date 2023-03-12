option = {
    backgroundColor: '#000',
    tooltip: {
        trigger: 'axis',
        backgroundColor: '#000000',
        borderWidth: 0,
        padding: [5, 10],
        textStyle: {
            color: '#ffffff',
        },
    },
    grid: {
        //   top: 0,
        //   left: 0,
        //   right: 0,
        //   bottom: 0,
        //   containLabel: false
    },
    toolbox: {
        show: false,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false, //坐标轴两边留白
        data: ['11:00', '11:20', '11:40', '12:00', '12:20', '12:40', '13:00'],
        axisLabel: {
            textStyle: {
                color: '#D6E1FF',
            }
        },
        axisLine: {
            lineStyle: {
                color: '#9EA3B4',
                opacity: 0.3,
            }
        },
        axisTick: {
                show: false,
            },
    },
    yAxis: [
        {
            type: 'value',
            splitNumber: 5,
            splitLine: {
                lineStyle: {
                    color: '#9EA3B4',
                    opacity: 0.3,
                },
            },
            axisLabel: {
                textStyle: {
                    color: '#D6E1FF',
                },
            },
        },
    ],
    series: [
        {
            type: 'line',
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#4D62FF',
                    lineStyle: {
                        color: '#4D62FF',
                        width: 2,
                    },
                    areaStyle: {
                        //区域填充样式
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 0,
                                color: 'rgba(77, 98, 255, 0.1)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(77, 98, 255, 0.5)',
                            },
                        ]),
                    },
                },
            },
            toolbox: {
                show: false,
            },
            data: [480, 390, 500, 260, 320, 660, 320],
        },
        {
            type: 'line',
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#A03CFC',
                    lineStyle: {
                        color: '#A03CFC',
                        width: 2,
                    },
                    areaStyle: {
                        //区域填充样式
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 0,
                                color: 'rgba(160, 60, 252, 0.1)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(160, 60, 252, 0.5)',
                            },
                        ]),
                    },
                },
            },
            toolbox: {
                show: false,
            },
            data: [340, 510, 540, 600, 500, 600, 640],
        },
        {
            type: 'line',
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#4F12FF',
                    lineStyle: {
                        color: '#4F12FF',
                        width: 2,
                    },
                    areaStyle: {
                        //区域填充样式
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 0,
                                color: 'rgba(79, 18, 255, 0.1)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(79, 18, 255, 0.5)',
                            },
                        ]),
                    },
                },
            },
            toolbox: {
                show: false,
            },
            data: [700, 600, 680, 420, 520, 600, 700],
        },
        {
            type: 'line',
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#23CDF1',
                    lineStyle: {
                        color: '#23CDF1',
                        width: 2,
                    },
                    areaStyle: {
                        //区域填充样式
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 0,
                                color: 'rgba(35, 205, 241, 0.1)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(35, 205, 241, 0.5)',
                            },
                        ]),
                    },
                },
            },
            toolbox: {
                show: false,
            },
            data: [80, 100, 110, 260, 480, 480, 590],
        },
    ],
};
