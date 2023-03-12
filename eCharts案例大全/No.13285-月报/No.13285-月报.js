option = {
    color: ['#16abfe','#ff7070'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        data: ['访问次数']
    },
    xAxis: [{
        type: 'category',
        data: ['情报数据', '供应商详情', '采购商详情', '我的关注', '买家推荐'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [

        {
            type: 'value',
            name: '访问次数',
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [{
            name: '访问次数',
            type: 'bar',
            yAxisIndex: 0,
            data: [261, 259, 290, 264, 287, ]
        },

        
    ]
};