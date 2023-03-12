option = {
    legend: {
        bottom: 10,
        show: true,
        itemWidth: 10,
        itemHeight: 10,
        data: [
            {
                name: '最高学历',
                icon: 'circle',
            },
            {
                name: '汽车产地',
                icon: 'triangle',
            },
        ],
    },
    xAxis: {
        show: false,
        min: (value) => -5,
        max: (value) => 5,
    },
    yAxis: {
        show: false,
        min: (value) => -5,
        max: (value) => 5,
    },
    tooltip: {
        formatter: '{b}',
    },
    label: {
        show: true,
        formatter: '{b}',
        position: 'outside',
    },
    series: [
        {
            name: '最高学历',
            type: 'scatter',
            markLine: {
                silent: true, // 鼠标悬停事件
                symbol: 'none', // 去掉箭头
                lineStyle: {
                    width: 1,
                    type: 'solid',
                    color: '#EB7E7D',
                },
                data: [
                    [
                        {
                            symbol: 'circle', // 去掉箭头
                            symbolSize: '20',
                            coord: [0, 0],
                        },
                        {
                            name: '本科',
                            coord: [0, 5],
                        },
                    ],
                    [
                        {
                            symbol: 'circle', // 去掉箭头
                            symbolSize: '20',
                            coord: [0, 0],
                        },
                        {
                            name: '大专',
                            coord: [-3, 3],
                        },
                    ],
                    [
                        {
                            symbol: 'circle', // 去掉箭头
                            symbolSize: '20',
                            coord: [0, 0],
                        },
                        {
                            name: '研究生',
                            coord: [5, 5],
                        },
                    ],
                    [
                        {
                            symbol: 'circle', // 去掉箭头
                            symbolSize: '20',
                            coord: [0, 0],
                        },
                        {
                            name: '硕士',
                            coord: [-3, 0],
                        },
                    ],
                    [
                        {
                            symbol: 'circle', // 去掉箭头
                            symbolSize: '20',
                            coord: [0, 0],
                        },
                        {
                            name: '博士',
                            coord: [0.5, -1],
                        },
                    ],
                ],
            },
        },
        {
            name: '汽车产地',
            type: 'scatter',
            markLine: {
                silent: true, // 鼠标悬停事件
                symbol: 'none', // 去掉箭头
                lineStyle: {
                    width: 1,
                    type: 'solid',
                    color: '#EB7E7D',
                },
                data: [
                    [
                        {
                            symbol: 'circle', // 去掉箭头
                            symbolSize: '20',
                            coord: [0, 0],
                        },
                        {
                            name: '国产',
                            coord: [4, 1],
                        },
                    ],
                    [
                        {
                            symbol: 'circle', // 去掉箭头
                            symbolSize: '20',
                            coord: [0, 0],
                        },
                        {
                            name: '合资',
                            coord: [-3, -2],
                        },
                    ],
                    [
                        {
                            symbol: 'circle', // 去掉箭头
                            symbolSize: '20',
                            coord: [0, 0],
                        },
                        {
                            name: '进口',
                            coord: [2.5, -2],
                        },
                    ],
                ],
            },
        },
    ],
};
