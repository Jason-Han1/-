option = {
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['product', '金牌', '银牌', '铜牌'],
            ['第23届', 1,6,2]
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {max: 6
    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'}
    ]
};