option = {
    legend: {
        show: true,
        type: 'plain',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
        },
    },
    xAxis: {
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            interval: 0,
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(178, 178, 178, 1)',
            },
        },
        data: ['百度', '抖音', '腾讯', '爱奇艺', '快手'],
    },
    yAxis: [
        {
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(178, 178, 178, 1)',
                },
            },
            max: 3000,
        },
        {
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(178, 178, 178, 1)',
                },
            },
            max: 200,
        },
    ],
    series: [
        {
            type: 'bar',
            yAxisIndex: 0,
            stack: 'Search Engine',
            z: 3,
            barGap: '-100%',
            barWidth: '20%',
            itemStyle: {
                color: '#3D96F5',
            },
            data: [750, 1100, 2000, 134, 190],
        },
                {
            type: 'bar',
            z:4,
            yAxisIndex: 0,
            barWidth: '20%',
            stack: 'Search Engine',
            itemStyle: {
                barBorderRadius: [10, 10, 0, 0],
                color: '#F9B81D',
            },
            data: [1000, 1400, 2600, 3000, 1570],
        },
        {
            type: 'line',
            z: 1,
            yAxisIndex: 1,
            smooth: true,
            showSymbol: false,
            itemStyle: {
                color: '#4A90E8',
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    1,
                    0,
                    0,
                    [
                        {
                            offset: 0.5,
                            color: '#FFFFFF',
                        },
                        {
                            offset: 1,
                            color: 'rgba(46,135,247,0.5)',
                        },
                    ],
                    false
                ),
            },
            data: [145, 182, 191, 76, 89],
        },
    ],
};
