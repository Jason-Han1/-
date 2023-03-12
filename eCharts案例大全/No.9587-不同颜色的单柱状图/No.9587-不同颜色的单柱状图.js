option = {
    tooltip: {},
   dataset: {
       // 列数据
        source: [
            ['test', 'amount', 'product'],
            ['a', 58212, 'a'],
            ['b', 78254, 'b'],
            ['c', 41032, 'c'],
            ['d', 12755, 'd'],
            ['e', 20145, 'e'],
            ['f', 79146, 'f'],
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {},
    visualMap: {
            top: 'top',
            left: 'center',
            orient: 'horizontal',
            dimension: 2, // 取需要映射颜色的维度
            categories: ['a','b','c', 'd', 'e', 'f'],
            inRange: {
                color: ['#00fdff', '#00ff8b', '#2dedc0', '#1b6aff', '#7049f0', '#fa704d', '#01babc', '#3ed4ff', '#ffc169', '#c5ff69', '#69ffc8', '#69ecff', '#69b7ff', '#b369ff', '#e169ff']
            },
            outOfRange: {
                color: 'gray'
            }
    },
    series: [
        {type: 'bar'}
    ]
};
