option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['人员1', '人员2']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['类别1', '类别2', '类别3', '类别4', '类别5', '类别'
        ,'中国', '美国', '韩国', '澳大利亚', '非洲', '国家'
        ]
    },
    series: [
        {
            name: '人员1',
            type: 'bar',
            data: [20, 21, 22, 25, 27, 0
            ,20, 21, 22, 25, 27, 0
            ]
        },
        {
            name: '人员2',
            type: 'bar',
            data: [20, 21, 22, 25, 27, 0
            ,20, 21, 22, 25, 27, 0]
        }
    ]
};