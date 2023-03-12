var hours = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
];

var data = [
    [25, 0, 15],
    [25, 1, 15],
    [25, 2, 15],
    [25, 3, 15],
    [25, 4, 15],
    [25, 5, 15],
    [25, 6, 15],
];

option = {
    polar: {},
    angleAxis: {
        type: 'category',
        data: hours,
        boundaryGap: false,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ddd',
                type: 'dashed',
            },
        },
        axisLine: {
            show: false,
        },
    },
    radiusAxis: {
        type: 'value',
        axisLine: {
            show: false,
        },
        axisLabel: {
            rotate: 45,
        },
    },
    series: [
        {
            name: 'Punch Card',
            type: 'scatter',
            coordinateSystem: 'polar',
            data: data,
        },
    ],
};
