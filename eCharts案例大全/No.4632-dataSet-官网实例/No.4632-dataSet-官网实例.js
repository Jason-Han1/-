option = {
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['行政区', '2012', '2013'],
            ['朝阳区', 41.1, 30.4],
            ['东城区', 86.5, 92.1],
            ['海淀区', 24.1, 67.2]
        ],
        // 提供一份数据。
        // source: {
        //     "date": ['2012', '2013'],
        //     '朝阳区': [41.1, 30.4],
        //     '东城区': [86.5, 92.1],
        //     '海淀区': [24.1, 67.2]
        // }
    },
    xAxis: [
        {type: 'category', gridIndex: 0},
        // {type: 'category', gridIndex: 1}
    ],
    yAxis: [
        {gridIndex: 0},
        // {gridIndex: 1}
    ],
    series: [
        // 这几个系列会在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
        {type: 'bar', seriesLayoutBy: 'row'},
        {type: 'bar', seriesLayoutBy: 'row'},
        {type: 'bar', seriesLayoutBy: 'row'},
        // 这几个系列会在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
        // {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        // {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        // {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        // {type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
    ]
}