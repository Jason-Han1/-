option = {
    xAxis: {
        type: 'value',
        position: 'top'
    },
    yAxis:[{
            type: 'category',
            data: ['A', 'B', 'C', 'D', 'E']
        },
        {
            type: 'category',
            position: 'left',
            data: [5, 4, 3, 2, 1],
            max: 4,
            axisLabel: {
                show: false
            }
        }
    ],
    series: [{
            name: '需求',
            type: 'bar',
            barWidth: 2,
            data: [432, 534, 354, 674, 434]
        },
        {
            name: '供给',
            type: 'bar',
            barGap: '-500%',
            barWidth: 20,
            data: [43, 45, 65, 54, 46]
        },{
            type: 'scatter',
            name: '条形',
            symbol: 'path://m169.5,66.4375l17,0l0,44l-17,0l0,-44z',
            symbolSize: 20,
            symbolOffset: [0, -5],
            symbolKeepAspect: true,
            itemStyle: {
                opacity: 1
            },
            yAxisIndex: 1,
            data: [
                [432, 0],
                [534, 1],
                [354,2],
                [674, 3],
                [434, 4]
            ]
        }
    ]
};