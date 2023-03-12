option = {
    grid: {
        // left: '10%',
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
        // offset: 60,
        data: ['八月', '七月', '六月', '五月', '四月', '三月', '二月', '一月']
    },
    series: [{
        name: '公司',
        type: 'bar',
        // label: {
        //     show: true,
        //     position: 'left',
        //     formatter: '{a}'
        // },
        data: [8203, 3489, 9034, 2121, 535, 657, 321, 665, 214, 7687, 2121]
        // }, {
        //     name: '消费者',
        //     type: 'bar',
        //     label: {
        //         show: true,
        //         position: 'left',
        //         formatter: '{a}'
        //     },
        //     data: [9325, 3438, 1000]
        // }, {
        //     name: '小型企业',
        //     type: 'bar',
        //     label: {
        //         show: true,
        //         position: 'left',
        //         formatter: '{a}'
        //     },
        //     data: [1325, 2348, 3100]
    }, {
        name: '公司',
        type: 'scatter',
        symbol: 'rect',
        symbolSize: [3, 60],
        // symbolOffset: [0, '-140%'],
        itemStyle: {
            color: '#000'
        },
        silent: true,
        data: [
            [1000, '一月'],
            [2000, '二月'],
            [3000, '三月'],
            [1000, '四月'],
            [2000, '五月'],
            [3000, '六月'],
            [1000, '七月'],
            [2000, '八月']
        ]
        // }, {
        //     name: '消费者',
        //     type: 'scatter',
        //     symbol: 'rect',
        //     symbolSize: [5, 50],
        //     itemStyle: {
        //         color: '#000'
        //     },
        //     silent: true,
        //     data: [[5000, '一月'], [1000, '二月'], [2000, '三月']]
        // }, {
        //     name: '小型企业',
        //     type: 'scatter',
        //     symbol: 'rect',
        //     symbolSize: [5, 50],
        //     symbolOffset: [0, '130%'],
        //     itemStyle: {
        //         color: '#000'
        //     },
        //     silent: true,
        //     data: [[2000, '一月'], [2000, '二月'], [600, '三月']]
    }]
};