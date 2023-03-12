var data = [
    {value: 0},
    {value: 0}
];

option = {
    xAxis: {
        type: 'category',
        data: ['2020-08-10', '2020-08-11']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: 'scatter',
        type: 'scatter',
        coordinateSystem: 'cartesian2d',
        xAxisIndex: 0,
        data: data
    }]
};