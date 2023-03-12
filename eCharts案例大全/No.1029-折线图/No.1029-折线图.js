option = {
    backgroundColor: 'rgba(7, 29, 29,1)',
    grid: {
        top: '18%',
        left: '15%',
        right: '5%',
        bottom: '25%',
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            type: 'line',
            symbol: 'circle',
            lineStyle: {
                normal: {
                    color: 'rgba(36, 162, 242, 1)',
                }
            },
            itemStyle: {
                color: 'rgba(36, 162, 242, 1)',
                borderColor: 'rgba(36, 162, 242, 1)',
                borderWidth: 6,
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
                                color: 'rgba(24, 108, 161, 1)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(36, 162, 242, 0)',
                            },
                        ],
                        false
                    ),
                }
            },
            data: ['40', '60','50','50','80','20'],
        },
    ],
};
