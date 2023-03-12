option = {
    title: {
        text: '各校文理一本学生数',
        
        left: 'left'
    },
    legend: {},
    tooltip: {},
    dataset: {
        source:


            [
                ['product', '理科生', '文科生', '学生总数'],
                ['廉州中学', 535, 75, 610],
                ['北海中学', 524, 67, 591],
                ['北师附中', 97, 31, 128],
                ['北海七中', 95, 20, 115],
                ['国际学校', 62, 32, 94],
                ['合浦一中', 66, 9, 75],


            ]
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{
            type: 'bar'
        },
        {
            type: 'bar'
        },
        {
            type: 'bar'
        }
    ]
};