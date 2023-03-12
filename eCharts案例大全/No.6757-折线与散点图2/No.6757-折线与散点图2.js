var data = [
    [20.24, 11.35],
    [33.09, 35.11],
    [47.60, 36.61],
    [56.77, 27.26],
    [60.10, 46.72]
];


option = {
    xAxis: {
        type: 'value',
    },
    yAxis: {
        // type: 'value',
    },
    series: [{
            type: 'line',
            data: data
        },
        {
            type: 'scatter',
            data: [
                [33, 9]
            ]
        }

    ]
}