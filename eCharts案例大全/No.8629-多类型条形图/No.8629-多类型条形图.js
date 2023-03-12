option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0,0]
    },
    yAxis: {
        type: 'category',
        data: ['配种员1', '配种员2', '配种员3', '配种员4', '配种员5', '人员'
        ,'B01', '2', '3', '4', 'B05', '分类'
        ,'周1', '周2', '周3', '周4', '周5', '周期'
        ]
    },
    series: [
        {
            type: 'bar',
            data: [20, 21, 22, 25, 27, 0
            ,12, 30, 22, 14, 27, 0
            ,20, 21, 22, 25, 27, 0
            ]
        }
    ]
};