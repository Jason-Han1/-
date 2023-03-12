option = {
    xAxis: {
        data: ['2017-10-24', '2017-10-25'],
        inverse: true
    },
    yAxis: {
        position: 'left'
    },
    series: [{
        type: 'k',
        barMaxWidth: 40,
        data: [
            [20, 30, 10, 35],
            [40, 35, 30, 55],
            [33, 38, 33, 40],
            [40, 40, 32, 42]
        ],
        tooltip: {
            position:[0, 0]}
    }]
};
