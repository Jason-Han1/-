option = {
    title: {
        text: '模拟编辑性能走势图'
    },
    legend: {},
    tooltip: {},
    dataset: {
        dimensions: ['product', '开启模拟编辑', '开启模拟编辑+规则', '未开启模拟编辑'],
        source: [
            {product: '列表50行/ms', '开启模拟编辑': 703, '开启模拟编辑+规则': 717, '未开启模拟编辑': 688},
            {product: '列表200行/ms', '开启模拟编辑': 1011, '开启模拟编辑+规则': 1034, '未开启模拟编辑': 962},
            {product: '列表850行/ms', '开启模拟编辑': 2239, '开启模拟编辑+规则': 2305, '未开启模拟编辑': 2070},
            {product: '树列表850行/ms', '开启模拟编辑': 2640, '开启模拟编辑+规则': 2726, '未开启模拟编辑': 2465}
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {
            type: 'bar', 
            label: {
                show: true,
                position: 'inside'
            }
        },
        {
            type: 'bar', 
            label: {
                show: true,
                position: 'inside'
            }
        },
        {
            type: 'bar', 
            label: {
                show: true,
                position: 'inside'
            }
        }
    ]
};

