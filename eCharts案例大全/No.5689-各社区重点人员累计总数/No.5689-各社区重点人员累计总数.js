option = {
    backgroundColor: '#aaa',
    tooltip: {
        show: false,
    },
    legend: {
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 30,
        padding: [2, 2, 0, 0],
        textStyle: {
            color: '#e0e0e0',
        },
    },
    xAxis: [
        {
            type: 'category',
            data: [
                '202004',
                '202005',
                '202006',
                '202007',
                '202008',
                '202009',
                '202010',
                '202011',
                '202012',
                '202101',
                '202102',
                '202103',
            ],
            axisLabel: {
                margin: 10,
                color: '#fff',
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#e0e7ff',
                    opacity: 0.3,
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            axisLabel: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '试卷作答份数',
            type: 'bar',
            data: [40, 125, 65, 39, 20, 31, 9, 1, 2, 8, 6, 8],
            barWidth: '10px',
            itemStyle: {
                shadowColor: 'red',
                shadowBlur: 10,
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#00f0ff',
                            },
                            {
                                offset: 1,
                                color: '#003aff',
                            },
                        ],
                        false
                    ),
                },
            },
            label: {
                normal: {
                    show: false,
                },
            },
        },
        {
            name: '认知分',
            type: 'bar',
            data: [40, 125, 65, 39, 20, 31, 9, 1, 2, 8, 6, 8],
            barWidth: '10px',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#ffd46f',
                            },
                            {
                                offset: 1,
                                color: '#fe8b04',
                            },
                        ],
                        false
                    ),
                },
            },
            label: {
                normal: {
                    show: false,
                },
            },
        },
        {
            name: '预估成绩',
            type: 'bar',
            data: [40, 125, 65, 39, 20, 31, 9, 1, 2, 8, 6, 8],
            barWidth: '10px',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#4fe74b',
                            },
                            {
                                offset: 1,
                                color: '#06a103',
                            },
                        ],
                        false
                    ),
                },
            },
            label: {
                normal: {
                    show: false,
                },
            },
        },
    ],
};
