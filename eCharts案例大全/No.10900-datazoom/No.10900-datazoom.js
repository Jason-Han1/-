var dataAll = [
    [
        [10.0, 8.04],
        [8.0, 6.95],
        [13.0, 7.58],
        [9.0, 8.81],
        [11.0, 8.33],
        [14.0, 9.96],
        [6.0, 7.24],
        [4.0, 4.26],
        [12.0, 10.84],
        [7.0, 4.82],
        [5.0, 5.68]
    ],
    [
        [10.0, 9.14],
        [8.0, 8.14],
        [13.0, 8.74],
        [9.0, 8.77],
        [11.0, 9.26],
        [14.0, 8.10],
        [6.0, 6.13],
        [4.0, 3.10],
        [12.0, 9.13],
        [7.0, 7.26],
        [5.0, 4.74]
    ],
    [
        [10.0, 7.46],
        [8.0, 6.77],
        [13.0, 12.74],
        [9.0, 7.11],
        [11.0, 7.81],
        [14.0, 8.84],
        [6.0, 6.08],
        [4.0, 5.39],
        [12.0, 8.15],
        [7.0, 6.42],
        [5.0, 5.73]
    ],
    [
        [8.0, 6.58],
        [8.0, 5.76],
        [8.0, 7.71],
        [8.0, 8.84],
        [8.0, 8.47],
        [8.0, 7.04],
        [8.0, 5.25],
        [19.0, 12.50],
        [8.0, 5.56],
        [8.0, 7.91],
        [8.0, 6.89]
    ]
];


option = {
    grid: [
        {x: '7%', y: '7%', width: '80%', height: '38%'},
        {x: '7%', y2: '7%', width: '80%', height: '38%'}
    ],
    tooltip: {
        formatter: 'Group {a}: ({c})'
    },
    xAxis: [
        {gridIndex: 0, min: 0, max: 20},
        {gridIndex: 1, min: 0, max: 20}
    ],
    yAxis: [
        {gridIndex: 0, min: 0, max: 15},
        {gridIndex: 1, min: 0, max: 15}
    ],
    dataZoom: [
        {
            type: 'slider',
            show: true,
            id: 'sliderX',
            xAxisIndex: [0, 1],
            start: 1,
            end: 35
        },
        {
            type: 'inside',
            id: 'insideX',
            xAxisIndex: [0, 1],
            start: 1,
            end: 35
        },
        {
            type: 'slider',
            show: true,
            orient: 'vertical',
            yAxisIndex: [0],
            left: '93%',
            start: 29,
            end: 36
        },
        {
            type: 'inside',
            orient: 'vertical',
            yAxisIndex: [0],
            start: 29,
            end: 36
        },
        {
            type: 'slider',
            show: true,
            orient: 'vertical',
            yAxisIndex: [1],
            left: '93%',
            start: 29,
            end: 36
        },
        {
            type: 'inside',
            orient: 'vertical',
            yAxisIndex: [1],
            start: 29,
            end: 36
        }
    ],
    series: [
        {
            name: 'I',
            type: 'scatter',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: dataAll[0],
        },
        {
            name: 'II',
            type: 'scatter',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: dataAll[1],
        }
    ]
};