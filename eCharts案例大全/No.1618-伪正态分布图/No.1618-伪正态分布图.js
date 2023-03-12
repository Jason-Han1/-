// 伪正态分布图
option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '10%'],
    },
    visualMap: {
        type: 'piecewise',
        show: false,
        dimension: 0,
        seriesIndex: 0,
        pieces: [
            {
                gt: 0,
                lte: 1,
                color: 'rgba(0, 0, 180, 0.4)',
            },
            {
                gt: 1,
                lt: 2,
                color: 'orange',
            },
            {
                gt: 2,
                lt: 3,
                color: 'lightblue',
            },
            {
                gt: 3,
                lt: 4,
                color: 'lightblue',
            },
            {
                gt: 4,
                lt: 5,
                color: 'orange',
            },
            {
                gt: 5,
                lt: 6,
                color: 'rgba(0, 0, 180, 0.4)',
            },
        ],
    },
    series: [
        {
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
                color: '#5470C6',
                width: 1,
            },
            markLine: {
                // 纵坐标起始点和向上箭头是否展示
                symbol: ['none', 'none'],
                label: {
                    show: false,
                },
                data: [
                    { xAxis: 0 },
                    { xAxis: 0.021 },
                    { xAxis: 0.136 },
                    { xAxis: 0.341 },
                    { xAxis: 0.136 },
                    { xAxis: 0.021 },
                    { xAxis: 0 },
                ],
            },
            areaStyle: {},
            data: [
                ['-3a', 0],
                ['-2a', 0.021],
                ['-1a', 0.136],
                ['a', 0.341],
                ['1a', 0.136],
                ['2a', 0.021],
                ['3a', 0],
            ],
        },
    ],
};
