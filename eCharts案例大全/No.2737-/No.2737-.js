yList = [32];
yList2 = [52];
xList = [10];
xData = xList
dom = 800;
barWidth = dom / 20;
option = {
    xAxis: {
        show:false,
        data: xData,
    },
    yAxis: {
        show: false,
    },
    series: [
        {
            type: 'bar',
            stack:'ttt',
            barWidth: barWidth,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#2450F0'
                                    },
                                    {
                                        offset: 1,
                                        color: '#2FCAFD'
                                    },
                                ])
                }
            },
            data: yList
        },
        {
            type: 'bar',
            stack:'ttt',
            barWidth: barWidth,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#1A4DC0',
                                    },
                                    {
                                        offset: 1,
                                        color: '#9E2FFD',
                                    },
                                ]),
                }
            },
            data: yList2
        },
        {
            z: 2,
            type: 'pictorialBar',
            data: yList,
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
                normal: {
                    color: '#2FCAFD'
                }
            },
        },
        {
            z: 3,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: yList,
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#3FA1FB',
                                    },
                                    {
                                        offset: 1,
                                        color: '#41B4F8',
                                    },
                                ])

                }
            },
        },
        {
            z: 3,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: [84],
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#886DF8',
                                    },
                                    {
                                        offset: 1,
                                        color: '#4781F0',
                                    },
                                ]),

                }
            },
        },
    ],
};