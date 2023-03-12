option = {
    legend: {
                data: ['线一', '线二'],
                left: 10,
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [1, 2, 3, 4, 5, 6, 7],
            },
            yAxis: {
                type: 'value',
            },
            series: [
                {
                    name: '线一',
                    data: [720, 832, 801, 834, 1190, 1230, 1220],
                    type: 'line',
                },
                {
                    name: '线二',
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    markLine: {
                        symbol: 'none',
                        silent: true,
                        itemStyle: {
                            normal: {
                                borderWidth: 1,
                                lineStyle: {
                                    type: 'dashed',
                                    color: '#ccc ',
                                    width: 1,
                                },
                                label: {
                                    show: true,
                                    position: 'end',
                                    formatter: '标准线',
                                    color: '#f00',
                                },
                            },
                        },
                        data: [
                            //配置线端起始点
                            [
                                {
                                    coord: [2, 0],
                                },
                                {
                                    coord: [2, 1500],
                                },
                            ],
                        ],
                    },
                },
            ],
};