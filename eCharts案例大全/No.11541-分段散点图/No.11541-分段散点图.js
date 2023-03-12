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
        [30.0, 9.14],
        [48.0, 8.14],
        [53.0, 8.74],
        [69.0, 8.77],
        [71.0, 9.26],
        [84.0, 8.10],
        [96.0, 6.13],
        [104.0, 3.10],
        [112.0, 9.13],
        [117.0, 7.26],
        [115.0, 4.74]
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

option = {
    title: {
        text: '分段散点图',
        x: 'center',
        y: 0
    },
    grid: [
        {x: '10%', y: '7%', width: '25%', height: '38%'},
        {x: '35%', y: '7%', width: '25%', height: '38%'},
        {x: '60%', y: '7%', width: '25%', height: '38%'}
    ],
    tooltip: {
        formatter: 'Group {a}: ({c})'
    },
    xAxis: [
        {
            gridIndex: 0,
            min: 0,
            max: 20, 
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },
        {
            gridIndex: 1,
            min: 20,
            max: 120, 
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },
        {
            gridIndex: 2,
            min: 120,
            max: 2000, 
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            }
        }
    ],
    yAxis: [
        {gridIndex: 0, min: 0, max: 15},
        {
            gridIndex: 1,
            min: 0,
            max: 15, 
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },
        {
            gridIndex: 2,
            min: 0,
            max: 15,
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            }
        }
    ],
    series: [
        {
            name: 'I',
            type: 'scatter',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: dataAll[0]
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
        }
    ]
//     list: [],
//   inputVal: '',
//   totalCount: 0,
//   currentPage: 1,
//   sizePage: 10,
// a:1
};