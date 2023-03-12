option = {
    xAxis: {
        type: 'category',
        data: ['A', 'B'],
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            data: [
                [0, 0],
                [0, 150],
            ],
            type: 'line',
            symbolSize: 0.1,
            markPoint: {
                symbol: 'circle',
                symbolSize: 15,
                data: [{ type: 'max' }],
                label: {
                    show: false,
                },
            },
        },
        {
            data: [
                [1, 0],
                [1, 90],
            ],
            type: 'line',
            symbolSize: 0.1,
            markPoint: {
                symbol: 'circle',
                symbolSize: 15,
                data: [{ type: 'max' }],
                label: {
                    show: false,
                },
            },
        },
    ],
};
