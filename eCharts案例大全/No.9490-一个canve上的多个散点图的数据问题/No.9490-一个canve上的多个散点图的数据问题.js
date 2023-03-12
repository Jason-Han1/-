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
    ]
];

var markLineOpt = {
    animation: false,
    label: {
        normal: {
            formatter: 'y = 0.5 * x + 3',
            textStyle: {
                align: 'right'
            }
        }
    },
    lineStyle: {
        normal: {
            type: 'solid'
        }
    },
    tooltip: {
        formatter: 'y = 0.5 * x + 3'
    },
    data: [[{
        coord: [0, 3],
        symbol: 'none'
    }, {
        coord: [20, 13],
        symbol: 'none'
    }]]
};

option = {
    title: {
        text: 'Anscombe\'s quartet',
        x: 'center',
        y: 0
    },
    grid: [
        {x: '7%', y: '7%', width: '20%', height: '20%'},
        {x2: '7%', y: '7%', width: '20%', height: '20%'},
        {x: '39%', y: '7%', width: '20%', height: '20%'},
        {x: '7%', y2: '39%', width: '20%', height: '20%'},
        {x2: '7%', y2: '39%', width: '20%', height: '20%'},
        {x: '39%', y2: '39%', width: '20%', height: '20%'},
        {x: '7%', y2: '7%', width: '20%', height: '20%'},
        {x: '39%', y2: '7%', width: '20%', height: '20%'},
        {x2: '7%', y2: '7%', width: '20%', height: '20%'}
    ],
    
    xAxis: [
        {gridIndex: 0, min: 0, max: 20,name:'123'},
        {gridIndex: 1, min: 0, max: 20},
        {gridIndex: 2, min: 0, max: 20},
        {gridIndex: 3, min: 0, max: 20},
        {gridIndex: 4, min: 0, max: 20},
        {gridIndex: 5, min: 0, max: 20},
        {gridIndex: 6, min: 0, max: 20},
        {gridIndex: 7, min: 0, max: 20},
        {gridIndex: 8, min: 0, max: 20}
    ],
    yAxis: [
        {gridIndex: 0, min: 0, max: 15},
        {gridIndex: 1, min: 0, max: 15},
        {gridIndex: 2, min: 0, max: 15},
        {gridIndex: 3, min: 0, max: 15},
        {gridIndex: 4, min: 0, max: 15},
        {gridIndex: 5, min: 0, max: 15},
        {gridIndex: 6, min: 0, max: 15},
        {gridIndex: 7, min: 0, max: 15},
        {gridIndex: 8, min: 0, max: 15}
    ],
    series: [
        {
            name: 'I',
            type: 'scatter',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data:[
            {
                value: dataAll[0]
            },
            {
                value: dataAll[1]
            },
            {
                value: dataAll[2]
            }]
                
        },
        {
            name: 'II',
            type: 'scatter',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: dataAll[1]
        },
        {
            name: 'III',
            type: 'scatter',
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: dataAll[2]
        },
        {
            name: 'IV',
            type: 'scatter',
            xAxisIndex: 3,
            yAxisIndex: 3,
            data: dataAll[3]
        },
        {
            name: 'V',
            type: 'scatter',
            xAxisIndex: 4,
            yAxisIndex: 4,
            data: dataAll[4]
        },
        {
            name: 'VI',
            type: 'scatter',
            xAxisIndex: 5,
            yAxisIndex: 5,
            data: dataAll[5]
        },
        {
            name: 'VII',
            type: 'scatter',
            xAxisIndex: 6,
            yAxisIndex: 6,
            data: dataAll[6]
        },
        {
            name: 'VIII',
            type: 'scatter',
            xAxisIndex: 7,
            yAxisIndex: 7,
            data: dataAll[7]
        },
        {
            name: 'VIIII',
            type: 'scatter',
            xAxisIndex: 8,
            yAxisIndex: 8,
            data: dataAll[8]
        }
    ]
};