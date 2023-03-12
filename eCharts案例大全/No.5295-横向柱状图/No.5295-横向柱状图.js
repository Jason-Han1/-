option = {
    color: '#0B7CC0',
    grid: {
        left: '2%',
    },
    //图列配置项
    legend: {
        selectedMode: 'single',
        left: 'left',
        data: [{
                name: '日',
                icon: 'none',
                textStyle: {
                    // color: '#0B7CC0',
                    fontSize: 16,
                    height: 3,
                    rich: {},
                    //文字-底块，选中事件时加入
                    backgroundColor: '#eee',
                    shadowBlur: 0.5,
                    shadowColor: '#0B7CC0',
                    shadowOffsetY: 20,

                }
            },
            {
                name: '周',
                icon: 'none',
                textStyle: {
                    color: '#0B7CC0',
                    fontSize: 16,
                    height: 3,
                    rich: {}
                }
            },
            {
                name: '月',
                icon: 'none',
                textStyle: {
                    color: '#0B7CC0',
                    fontSize: 16,
                    height: 3,
                    rich: {}
                }
            },
        ],
        // align:'left',
    },
    xAxis: {
        position: 'top',
    },
    yAxis: {
        inverse: true,
        data: [1, 2, 3, 4]
    },
    series: [{
        name: '日',
        type: 'bar',
        data: [1, 2, 3, 4]
    }, {
        name: '周',
        type: 'bar',
        data: [1, 2, 3, 4]
    }, {
        name: '月',
        type: 'bar',
        data: [1, 2, 3, 4]
    }]
};