option = {
    backgroundColor: '#030F35',
    grid: {
        left: '10',
        top: '40',
        right: '10',
        bottom: '10',
        containLabel: true,
    },
    tooltip: {
        trigger: 'item'
    },
    xAxis: [{
            data: [
                '2015',
                '2016',
                '2017',
                '2018',
                '2019',
                '2020',
            ],
            axisLine: {
                lineStyle: {
                    color: '#1C2754',
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: '#00F7FF',
                    fontSize: 13
                }
            }
        },
        {
            data: [],
            show: false,
        },
    ],
    yAxis: [{
        show: true,
        axisLine: {
            lineStyle: {
                color: '#1C2754',
            },
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: '#00F7FF',
                fontSize: 13
            }
        },
    }, ],
    series: [{
        data: [23, 20, 34, 56, 43, 66],
        type: 'pictorialBar',
        symbol: 'rect',
        symbolRepeat: 'fixed',
        symbolClip: true,
        symbolSize: [50, 10],
        label: {
            normal: {
                textStyle: {
                    normal: {
                        color: '#00E0B8',
                    },
                },
            },
        },
        itemStyle: {
            normal: {
                color: '#00E0B8',
            },
        },
    }, ],
};