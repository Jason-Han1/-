option = {
    backgroundColor: '#000000',
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show: true,
            },
            splitArea: {
                color: '#f00',
                lineStyle: {
                    color: '#f00',
                },
            },
            axisLabel: {
                color: 'rgba(80,227,194,0.6)',
            },
            splitLine: {
                show: false,
            },
            boundaryGap: false,
            data: ['A', 'B', 'C', 'D', 'E', 'F'],
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '人',
            nameTextStyle: {
                color: 'rgba(80,227,194,0.6)',
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)',
                    type: 'dashed',
                },
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'rgba(80,227,194,0.6)',
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    legend: {
        show: false,
    },
    grid: {
        left: '10%',
        right: '5%',
    },
    tooltip: {
        show: true,
        trigger: 'axis',
    },
    series: [
        {
            name: '在线人数',
            type: 'line',
            lineStyle: {
                normal: {
                    color: 'rgba(80,227,194,0.8)',
                },
            },
            label: {
                show: false,
            },
            itemStyle: {
                color: '#50E3C2',
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(80,227,194,0.5)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(80,227,194,0.2)',
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(108,80,243, 0.9)',
                    shadowBlur: 20,
                },
            },
            data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02],
        },
    ],
};
