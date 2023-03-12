option = {
    tooltip: {},
   dataset: {
       // 列数据
        /*source: [
            ['test', 'amount', 'product'],
            ['a', 58212, '未开始'],
            ['b', 78254, '运行中'],
            ['c', 41032, '未开始'],
            ['d', 12755, '未开始'],
            ['e', 20145, '异常'],
            ['f', 79146, '运行中'],
            ['g', 91852, '异常'],
            ['h', 101852, '运行中'],
            ['i', 20112, '未开始']
        ]*/
        // 行数据
        source: {
            'test': ['a','b','c','d','e','f','g'],
            'amount': [58212,78254,41032,12755,20145,79146,91852],
            'product': ['未开始','运行中','未开始','未开始','异常','运行中','异常']
        }
    },
    xAxis: {type: 'category'},
    yAxis: {},
    visualMap: {
            top: 'top',
            left: 'center',
            orient: 'horizontal',
            dimension: 2, // 取需要映射颜色的维度
            categories: ['未开始','运行中','异常'],
            inRange: {
                color: ['lightGreen', 'green', 'red']
            },
            outOfRange: {
                color: 'gray'
            }
    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar'}
    ]
};
