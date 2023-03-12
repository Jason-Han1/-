option = {
    legend: {},
    tooltip: {},
    dataset: {
        dimensions: ['product', '党委大会', '支部委员会', '党小组会','党课'],
        source: [
            {product: '第一季度', '党委大会': 43.3, '支部委员会': 85.8, '党小组会': 93.7, '党课': 93.7},
            {product: '第二季度', '党委大会': 83.1, '支部委员会': 73.4, '党小组会': 55.1, '党课': 93.7},
            {product: '第三季度', '党委大会': 86.4, '支部委员会': 65.2, '党小组会': 82.5, '党课': 93.7},
            {product: '第四季度', '党委大会': 72.4, '支部委员会': 53.9, '党小组会': 39.1, '党课': 93.7}
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'}
    ]
};
