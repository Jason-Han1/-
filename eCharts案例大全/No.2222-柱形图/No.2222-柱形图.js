var option = {
    backgroundColor: 'rgb(8,25,34)',
    grid: {
        top: '30%',
        bottom: '20%',
        right: '30%',
        left: '30%',
    },
    xAxis: {
        data: [],
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
        },
    },
    yAxis: {
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    series: [
        {
            name: '水波',
            type: 'effectScatter',
            rippleEffect: {
                period: 2,
                scale: 5,
                brushType: 'fill',
            },
            z: 5,
            zlevel: 3,
            symbolPosition: 'end',
            symbolSize: [30, 8],
            symbolOffset: [0, 20],
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(76, 228, 230, 1)',
                    shadowBlur: 5,
                    shadowOffsetY: 3,
                    shadowOffsetX: 0,
                    color: 'rgba(76, 228, 230, 1)',
                },
            },
            data: [45482],
        },
        {
            name: '顶部',
            type: 'pictorialBar',
            symbolSize: [80, 25],
            symbolOffset: [0, -10],
            symbolPosition: 'end',
            z: 4,
            itemStyle: {
                normal: {
                    color: 'rgba(76, 228, 230, 1)',
                },
            },
            data: [45482],
        },
        /*{
            name: '最高点',
            type: 'pictorialBar',
            symbolSize: [140, 30],
            symbolOffset: [0, 6],
            symbolPosition: 'end',
            z: 3,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: 'rgba(76, 228, 230,0)',
                    borderType: 'solid',
                    borderWidth: 5,
                },
            },
            data: [65482],
        },*/
        {
            name: '柱形图',
            type: 'bar',
            z: 6,
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        type: 'linear',
                        global: false,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(76, 228, 230, 0.8)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(27, 161, 199, 0)', //底部渐变颜色
                            },
                        ],
                    },
                },
            },
            silent: true,
            barWidth: 80,
            data: [45482],
            label: {
                show: true,
                position: 'top',
                distance: 0,
                formatter: (params) => {
                    return '{a|}';
                },
                rich: {
                    a: {
                        backgroundColor: {
                            image:
                                'data:image/png;base64,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',
                        },
                        width: 34,
                        height: 28,
                    },
                },
            },
        },
    ],
};
