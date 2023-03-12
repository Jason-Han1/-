let chartData = [
    ['product', 'a', 'b', 'c', 'd'],
    ['面积模式', '4', '5', '6', '7'],
];

option = {
    tooltip: {},
    dataset: {
        source: chartData,
    },
    series: [
        {
            type: 'pie',
            radius: [50, 250],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8,
            },
            seriesLayoutBy: 'row',
        },
    ],
};
