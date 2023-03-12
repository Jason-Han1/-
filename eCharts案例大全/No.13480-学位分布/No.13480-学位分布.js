option = {
    grid: {
        top: 2,
        x: '10%',
    },
    tooltip: {
        trigger: 'item',
    },
    color: ['#f5a01b', '#ea4559', '#b389ff'],
    xAxis: [{
        type: 'value',
        show: false
    }],
    yAxis: [{
         axisTick: 'none',
        axisLine: 'none',
        offset: '27',
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '16',
            }
        },
        data: ['8', '7', '6', '5', '4', '3', '2', '1']
    }],
    series: [{
            name: '可招商',
            type: 'bar',
            stack: '总面积',
            barWidth: 30,

            data:[52, 60, 22, 33, 44, 78, 59, 15]
        },
        {
            name: '可商',
            type: 'bar',
            stack: '总面积',
            barWidth: 30,
            data: [52, 60, 22, 33, 44, 78, 59, 15],
        },
        {
            name: '已出租',
            type: 'bar',
            stack: '总面积',
            barWidth: 35,
            barBorderRadius: 50,
            itemStyle: {
                    normal: {
                        barBorderRadius: [0, 30, 30, 0],
                    }
                },
            data: [52, 60, 22, 33, 44, 78, 59, 15],
        }
    ]
};