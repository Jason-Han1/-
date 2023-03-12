option = {
    backgroundColor: '#081C39',
    grid: {
        top: '10%',
        left: '14%',
        right: '14%',
        bottom: '18%',
        show: false,
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: '#FFFFFF',
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#4C77A3',
            },
        },
        axisLabel: {
            color: '#FFFFFF',
        },
    },
    series: [
        {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
            itemStyle: {
                color: '#00F8FF',
                opacity: 0,
            },
            lineStyle: {
                
            }
        },
        {
            type: 'pictorialBar',
            symbolSize: [40, 20],
            symbolOffset: [0, -10],
            z: 12,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 1,
                            color: '#00E3FE',
                        },
                        {
                            offset: 0,
                            color: '#0176CD',
                        },
                    ]),
                },
            },
            symbolPosition: 'end',
            data: [120, 200, 150, 80, 70, 110, 130],
        },
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            barWidth: '40',
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 1,
                        color: '#00E3FE',
                    },
                    {
                        offset: 0,
                        color: '#0176CD',
                    },
                ]),
            },
        },
    ],
};
