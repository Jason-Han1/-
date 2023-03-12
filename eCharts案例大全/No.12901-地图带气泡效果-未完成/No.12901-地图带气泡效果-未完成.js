option = {
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['product', '一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月'],
            ['美洲区', 260, 254, 294, 274, 313,291, 334, 343, 331,355,246],
            ['亚太区', 360, 354, 394, 374, 413,391, 434, 543, 431,455,346],
            ['欧洲区', 460, 354, 394, 374, 413,391, 434, 543, 431,455,346]
        ]
    },
    xAxis: [
        {type: 'category', gridIndex: 0},
        {type: 'category', gridIndex: 1}
    ],
    yAxis: [
        {gridIndex: 0},
        {gridIndex: 1}
    ],
    grid: [
        {bottom: '55%'},
        {top: '50%'}
    ],
    series: [
        // These series are in the first grid.
        {type: 'bar', seriesLayoutBy: 'row'},
        {type: 'bar', seriesLayoutBy: 'row'},
        {type: 'bar', seriesLayoutBy: 'row'},
  
   

        // These series are in the second grid.
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        

    ]
};