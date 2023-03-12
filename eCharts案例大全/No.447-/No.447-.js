

option = {
    legend: {},
    tooltip: {},

    dataset: [
        {
            source: [
                ['product', '语文', '数学', '英语'],
                ['T1', 43.3, 85.8, 93.7],
                ['T2', 83.1, 73.4, 55.1],
                ['T3', 86.4, 65.2, 82.5],
                ['T4', 72.4, 53.9, 39.1],
            ],
        },
        {
            source: [
                ['product', '语文', '数学', '英语'],
                ['T1', 1.24, 1.4, 1.1],
                ['T2', 2, 2.1, 1.7],
                ['T3', 1.1, 1.2, 1.5],
                ['T4', 1.1, 1.2, 1.5],
            ],
        },
    ],
    xAxis: [{ type: 'category' }],
    yAxis: [
        {
            type: 'value',
            axisLabel: {},
            inverse: false,
            name:'得分'
        },
        {
            type: 'value',
            name:'标准分'
        },
    ],

    series: [
        { type: 'bar', seriesLayoutBy: 'column', datasetIndex: 0 },
        { type: 'bar', seriesLayoutBy: 'column', datasetIndex: 0 },
        { type: 'bar', seriesLayoutBy: 'column', datasetIndex: 0 },
        { type: 'line', seriesLayoutBy: 'column', yAxisIndex: 1, datasetIndex: 1 },
        { type: 'line', seriesLayoutBy: 'column', yAxisIndex: 1, datasetIndex: 1 },
        { type: 'line', seriesLayoutBy: 'column', yAxisIndex: 1, datasetIndex: 1 },
    ],
};
