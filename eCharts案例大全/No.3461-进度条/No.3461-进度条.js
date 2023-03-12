option = {
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true,
    },
    backgroundColor: '#101129',
    xAxis: {
        show: false,
        type: 'value',
        max: 100,
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                textStyle: {
                    fontSize: '12',
                    color: '#03fcfe',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: ['百分比'],
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            data: [80],
        },
    ],
    series: [
        {
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                   color: 'rgba(180, 180, 180, 0.2)',
                   borderRadius:30
            },
            label:{
                show:true,
                position:'right',
                formatter:'{@score}%',
                textStyle: {
                    color: '#03fcfe',
                    fontSize: '12',
                },
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 10,
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                        {
                            offset: 0,
                            color: '#1badf9',
                        },
                        {
                            offset: 1,
                            color: '#03fcfe',
                        },
                    ]),
                },
            },
            barWidth: 20,
            data: [80],
        },
    ],
};

