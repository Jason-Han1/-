option = {
    title: {
        text: '同时从 series.data 处传入 x、y 轴数据'
    },
    grid: [{
        bottom: '55%'
    }, {
        top: '55%'
    }],
    xAxis: [{
        name: 'x 轴为数据轴',
        nameLocation:'center'
    }, {
        gridIndex: 1,
        name: 'x 轴为类目轴',
        nameLocation:'center',
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }],
    yAxis: [{}, {
        gridIndex: 1
    }],
    series: [{
        type: 'line',
        data: [
            [1, 220],
            [2, 182],
            [3, 191],
            [4, 234],
            [5, 290],
            [6, 330],
            [7, 333]
        ]
    }, {
        type: 'line',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: [
            ['Sun', 220],
            ['Mon', 182],
            ['Tue', 191],
            ['Wed', 234],
            ['Thu', 290],
            ['Fri', 330],
            {
                name: 'Sat',
                value: 333
            } //两种写法
        ]
    }]
};