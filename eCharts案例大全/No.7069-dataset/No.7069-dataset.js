option = {
    legend: {},
    tooltip: {
        trigger: 'axis'
    },
    dataset: {
        source: [
            ['啥都可以', '移动', '联通', '电信'],
            ['2017', 43.3, 85.8, 93.7],
            ['2018', 83.1, 73.4, 55.1],
            ['2019', 86.4, 65.2, 82.5],
            ['2020', 72.4, 53.9, 39.1]
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {
            type: 'bar',
            barWidth: 20,
            stack:'总量'
        },
        {
            type: 'bar',
            barWidth: 20,
            stack:'总量'
        },
        {
            type: 'bar',
            barWidth: 20,
            stack:'总量'
        }
    ]
};
