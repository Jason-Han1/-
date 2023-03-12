var hours = ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00',
    '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'
];
var days = ['周日', '周六', '周五', '周四', '周三', '周二', '周一'];

var data = [

    [0, 0, 39.9],
    [0, 1, 39.9],
    [0, 2, 39.9],
    [0, 3, 39.9],
    [0, 4, 39.9],
    [0, 5, 3.21],
    [0, 6, 39.9],

    [1, 0, 53.6],
    [1, 1, 53.6],
    [1, 2, 53.6],
    [1, 3, 53.6],
    [1, 4, 53.6],
    [1, 5, 53.6],
    [1, 6, 53.6],

    [2, 0, 19.0],
    [2, 1, 19.0],
    [2, 2, 19.0],
    [2, 3, 19.0],
    [2, 4, 3.21],
    [2, 5, 19.0],
    [2, 6, 19.0],

    [3, 0, 38.5],
    [3, 1, 38.5],
    [3, 2, 9.5],
    [3, 3, 38.5],
    [3, 4, 38.5],
    [3, 5, 38.5],
    [3, 6, 38.5],

    [4, 0, 53.6],
    [4, 1, 53.6],
    [4, 2, 53.6],
    [4, 3, 53.6],
    [4, 4, 34.1],
    [4, 5, 53.6],
    [4, 6, 53.6],

    [5, 0, 19.0],
    [5, 1, 19.0],
    [5, 2, 19.0],
    [5, 3, 3.21],
    [5, 4, 19.0],
    [5, 5, 19.0],
    [5, 6, 19.0],

    [6, 0, 38.5],
    [6, 1, 26.4],
    [6, 2, 26.4],
    [6, 3, 26.4],
    [6, 4, 26.4],
    [6, 5, 26.4],
    [6, 6, 26.4],

    [7, 0, 53.6],
    [7, 1, 53.6],
    [7, 2, 53.6],
    [7, 3, 38.5],
    [7, 4, 53.6],
    [7, 5, 53.6],
    [7, 6, 53.6],

    [8, 0, 12.5],
    [8, 1, 12.5],
    [8, 2, 17.9],
    [8, 3, 12.5],
    [8, 4, 12.5],
    [8, 5, 12.5],
    [8, 6, 12.5],

    [9, 0, 31.0],
    [9, 1, 38.5],
    [9, 2, 38.5],
    [9, 3, 38.5],
    [9, 4, 6.9],
    [9, 5, 38.5],
    [9, 6, 38.5],

    [10, 0, 9.5],
    [10, 1, 0.0],
    [10, 2, 9.5],
    [10, 3, 9.5],
    [10, 4, 9.5],
    [10, 5, 9.5],
    [10, 6, 9.5],

    [11, 0, 31.0],
    [11, 1, 31.0],
    [11, 2, 31.0],
    [11, 3, 31.0],
    [11, 4, 31.0],
    [11, 5, 31.0],
    [11, 6, 12.4],

    [12, 0, 60.5],
    [12, 1, 60.5],
    [12, 2, 60.5],
    [12, 3, 11.4],
    [12, 4, 60.5],
    [12, 5, 60.5],
    [12, 6, 60.5],
];

option = {
    tooltip: {
        position: 'top'
    },
    animation: false,
    grid: {
        height: '80%',
        top: '5%',
        left: '2.5%',
        right: '4%',
        bottom: '5%'
    },
    xAxis: [{
            type: 'category',
            data: hours,
            boundaryGap: false,
            textStyle: {
                fontsize: 8,
                backgroudcolor: 'red'
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#c4c4c4'
                }
            },
            splitLine: {
                show: true
            },
            axisLine: {
                show: false
            }
        },
        {
            type: 'category',
            data: hours,
            boundaryGap: true,
            textStyle: {
                fontsize: 8,
                backgroudcolor: 'red'
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            }
        }
    ],
    yAxis: [{
            type: 'category',
            data: days,
            boundaryGap: true,
            splitArea: {
                show: false
            },
            splitLine: {
                show: true
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            }
        },
        {
            type: 'category',
            data: days,
            boundaryGap: true,
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false,
                alignWithLabel: true
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            }
        }
    ],
    visualMap: {
        min: 0,
        max: 70,
        calculable: false,
        orient: 'horizontal',
        show: false,
        left: 'center',
        color: ['#2493EA', '#EEFAFF']
    },
    series: [{
        name: 'Ratio',
        type: 'heatmap',
        data: data,
        xAxisIndex: 1,
        yAxisIndex: 1,
        label: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 1,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }

    }]
};