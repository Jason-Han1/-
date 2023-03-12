const currentTarget = 0;
option = {
    title: {
        text: '振捣楼层选择',
        textStyle: {
            color: 'blue',
        },
    },
    tooltip: {
        trigger: 'none',
    },
    grid: {
        left: '5%',
        right: '50px',
        top: '25px',
        bottom: '10%'
    },
    xAxis: [{
        type: 'value',
        show: true,
        axisLabel: {
            show: false,
        },
        splitLine: false,
        axisLine: {
            show: true,
            onZero: false,
            lineStyle: {
                color: '#999',
            },
        },
        axisTick: {
            show: false,
        },
    }, {
        type: 'value',
        show: true,
        splitLine: false,
        axisLine: {
            show: true,
            onZero: false,
            lineStyle: {
                color: '#999',
            },
        },
    }],
    yAxis: [{
        type: 'category',
        axisLabel: {
            show: true,
            inside: true,
            color(params) {
                const index = parseInt(params, 10) - 1;
                if (index === currentTarget) {
                    return '#0ead58';
                }
                return '#455360';
            },
        },
        splitLine: false,
        axisTick: false,
        show: true,
        interval: 10,
        axisLine: {
            show: true,
            onZero: false,
            lineStyle: {
                color: '#999',
            },
        },
        data: [1, 2, 3, 4, 5, 6],
    }, {
        type: 'category',
        axisLabel: {
            show: false,
        },
        splitLine: false,
        axisTick: false,
        show: true,
        interval: 10,
        axisLine: {
            show: true,
            onZero: false,
            lineStyle: {
                color: '#999',
            },
        },
    }],
    // backgroundColor: 'RGB(40,104,125)',
    series: [{
            type: 'bar',
            data: ['3', '3', '3', '3', '3', '3'],
            stack: 'test',
            itemStyle: {
                color(params) {
                    return '#45536000';
                },
            },
        },
        {
            type: 'bar',
            data: ['97', '97', '97', '97', '97', '97'],
            stack: 'test',
            itemStyle: {
                color(params) {
                    if (params.dataIndex === currentTarget) {
                        return '#0ead58';
                    }
                    return '#455360';
                },
            },
            markPoint: {
                silent: true,
                data: [{
                        x: 20,
                        y: '85%',
                        symbol: 'triangle',
                        symbolSize: [18, 12],
                        symbolRotate: -90,
                        itemStyle: {
                            color: 'RGB(5,101,150)',
                        },
                    },
                    {
                        x: '96%',
                        y: '85%',
                        valueIndex: 1,
                        symbol: 'triangle',
                        symbolSize: [18, 12],
                        symbolRotate: 90,
                        itemStyle: {
                            color: 'RGB(5,101,150)',
                        },
                    },
                ],
            },
        },
    ],
};