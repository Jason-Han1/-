option = {
    xAxis: {
        type: 'value',
        //data: [1,2,3,4,5,6,7]
        // x轴数据不能存放在此，原因看链接
        // https://echarts.baidu.com/option.html#xAxis.data
        // https://echarts.baidu.com/option.html#series-line.data
        name: 'x轴'
    },
    yAxis: {
        type: 'value',
        name: 'y轴'
    },
    series: [{
        data: [
            [1, 120],
            [2, 200],
            [3, 150],
            [4, 80],
            [5, 70],
            [6, 110],
            [7, 130]
        ],
        type: 'bar'
    }],
    // dataset: {
    //     source: [
    //         [1, 120],
    //         [2, 200],
    //         [3,150],
    //         [4,80],
    //         [5,70],
    //         [6,110],
    //         [7,130]
    //     ]
    // }
};