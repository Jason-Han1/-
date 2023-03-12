let chartData = [
    ['product', '1', '2', '3', '4', '5', '6', '7'],
    ['a', 120, 132, 120, 132, 120, 132, 132],
    ['b', 10, 12, 10, 12, 10, 13, 10],
];

option = {
    tooltip: {},
    dataset: {
        source: chartData,
    },
    xAxis: {
        type: 'category',
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            markArea: {
                itemStyle: {
                    color: 'rgba(255, 173, 177, 0.4)',
                },
                data: [
                    [
                        {
                            name: 'title',
                            xAxis: '5',
                        },
                        {
                            xAxis: '7',
                        },
                    ],
                ],
            },
        },
        {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
        },
    ],
};
