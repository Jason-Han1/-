option = {
    legend: {
        data: [{
            name: '供给'
        }, {
            name: '需求'
        }]
    },
    xAxis: {
        type: 'value',
        position: 'top'
    },
    yAxis: [{
            type: 'category',
            data: ['A', 'B', 'C', 'D', 'E'],
            offset: 20,
        },
        {
            type: 'category',
            position: 'left',
            data: [5,4,3,2,1],
            max:4,
            axisLabel: {
                // show: false
            }
        }
    ],
    series: [{
            name: '线',
            type: 'bar',
            barWidth: 4,
            barGap: '-100%',
            itemStyle: {
                color: '#fff',
                borderWidth: 1,
                borderColor: '#293c55'
            },
            silent: true,
            data: [600, 600, 600, 600, 600]
        },
        {
            name: '供给',
            symbolSize: 20,
            itemStyle: {
                color: '#fff',
                borderColor: '#293c55',
                borderWidth: 2,
                opacity: 1
            },
            data: [
                [43, 0],
                [45, 1],
                [65, 2],
                [54, 3],
                [46, 4]
            ],
            type: 'scatter',
            yAxisIndex: 1
        }, 
        {
            name: '需求',
            symbolSize: 20,
            itemStyle: {
                color: '#fff',
                borderColor: 'blue',
                borderWidth: 2,
                opacity: 1
            },
            data: [
                [432, 0],
                [534, 1],
                [354, 2],
                [374, 3],
                [434, 4]
            ],
            type: 'scatter',
            yAxisIndex: 1
        },{
            type: 'line',
            data: [100, 100, 100, 100,100]
        }
    ]
};