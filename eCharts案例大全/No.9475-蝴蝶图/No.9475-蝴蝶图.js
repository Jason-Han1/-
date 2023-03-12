var max= 1000
option = {
    grid: [{
        width: '45%',
        left: '0',
        right: '55%'
    }, {
        width: '45%',
        left: '55%',
        right: '0'
    }],
    xAxis: [{
        type: 'value',
        position: 'top',
        inverse: true,
        max,
        gridIndex: 0
    }, {
        type: 'value',
        position: 'top',
        inverse: true,
        show: false,
        max,
        gridIndex: 0
    }, {
        type: 'value',
        position: 'top',
        max,
        gridIndex: 1
    }, {
        type: 'value',
        max,
        position: 'top',
        show: false,
        gridIndex: 1
    }],
    yAxis: [{
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口'],
        position: 'right',
        offset: 50,
        axisLabel: {
            align: 'center',
            padding: [5, 55],
            backgroundColor: '#ddd'
        },
        gridIndex: 0
    }, {
        type: 'category',
        data: [],
        show: false,
        gridIndex: 0
    }, {
        type: 'category',
        data: [],
        axisLabel: {
            show: false
        },
        gridIndex: 1
    }, {
        type: 'category',
        data: [],
        show: false,
        gridIndex: 1
    }],
    series: [{
            name: '2011年',
            type: 'bar',
            data: [182, 234, 290, 109, 137, 630],
            xAxisIndex: 0,
            yAxisIndex: 0
        },
        {
            name: '总计',
            type: 'scatter',
            symbolSize: 120,
            label: {
                show: true,
                formatter: '{a}\n\n {@[0]}'
            },
            data: [
                [630, 0]
            ],
            xAxisIndex: 1,
            yAxisIndex: 1
        },
        {
            name: '2012年',
            type: 'bar',
            data: [195, 234, 310, 121, 131, 680],
            xAxisIndex: 2,
            yAxisIndex: 2
        },
        {
            name: '总计',
            type: 'scatter',
            symbolSize: 80,
            label: {
                show: true,
                formatter: '{a}\n\n {@[0]}'
            },
            data: [
                [600, 0]
            ],
            xAxisIndex: 3,
            yAxisIndex: 3
        },
    ]
};