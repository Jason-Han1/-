option = {
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['缴费情况', '应缴', '实缴', '欠费'],
            ['本科', 43.3, 85.8, 93.7],
            ['专升本', 43.3, 85.8, 93.7],
            ['中升本', 83.1, 73.4, 55.1],
            ['研究生', 86.4, 65.2, 82.5],
            ['XX留学生', 72.4, 53.9, 39.1],
            ['...', 72.4, 53.9, 39.1]
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'}
    ]
};
