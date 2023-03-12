option = {
    xAxis: {
        type: 'value',
        position: 'top'
    },
    yAxis: [{
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

            type: 'scatter',
            name: '女',
            symbol: 'path://m169.5,66.4375l17,0l0,44l-17,0l0,-44z',
            symbolSize: 20,
            symbolKeepAspect: true,
            itemStyle: {
                opacity: 1
            },
            zlevel: 2,
            yAxisIndex: 1,
            data: [
                [40, 0],
                [38, 1],
                [8, 2],
                [7, 3],
                [5, 4]
            ]
        }, {
            type: 'scatter',
            name: '男',
            symbol: 'path://m169.5,66.4375l17,0l0,44l-17,0l0,-44z',
            symbolSize: 20,
            symbolKeepAspect: true,
            itemStyle: {
                opacity: 1
            },
            yAxisIndex: 1,
            zlevel: 2,
            data: [
                [55, 0],
                [48, 1],
                [12, 2],
                [11, 3],
                [8, 4]
            ]
        },
        {
            name: '柱子区',
            type: 'bar',
            barGap: '-100%',
            barWidth: 4,
            itemStyle: {
                color: 'orange'
            },

            data: [55, 48, 12, 11, 8]
        },
        {
            name: '灰色区',
            type: 'bar',
            barGap: '-100%',
            barWidth: 4,
            itemStyle: {
                color: '#ddd'
            },
            zlevel: 1,
            data: [40, 38, 8, 7, 5]
        }
    ]
};