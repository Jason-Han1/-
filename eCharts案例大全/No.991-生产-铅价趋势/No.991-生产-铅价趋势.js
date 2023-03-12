option = {
    grid: {
        top: '10%',
        left: '10%',
        right: '10%',
        bottom: '10%',
        containLabel: true,
    },
    legend: { bottom: '3%' },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        splitNumber: 1,
    },
    yAxis: {
        min: 13500,
        name: '单位(元)',
        type: 'value',
    },
    series: [
        {
            name: '2020年',
            lineStyle: {
                color: '#5470C6',
                width: 3,
            },
            label: {
                show: true,
                position: 'top',
            },
            markLine: {
                lineStyle: {
                    color: '#5470C6',
                },
                data: [{ type: 'average', name: 'Avg' }],
            },
            data: [15040, 14278, 14136, 14008, 14086, 14305, 14965, 15865, 15399, 14664, 14559, 14801],
            type: 'line',
        },
        {
            name: '2021年',
            lineStyle: {
                color: '#008080',
                width: 3,
            },
            label: {
                show: true,
                position: 'top',
            },
            markLine: {
                lineStyle: {
                    color: '#008080',
                },
                data: [{ type: 'average', name: 'Avg' }],
            },
            data: [14840, 15301, 14965, 14961, 15241, 15176, 15461, 15333, 14660, 15033, 15221, 15275],
            type: 'line',
        },
        {
            name: '目标价格',
            lineStyle: {
                width: 0,
            },
            markLine: {
                data: [{ type: 'average', name: 'Avg' }],
            },
            data: [15000, 15000, 15000, 15000, 15000, 15000, 15000, 15000, 15000, 15000, 15000, 15000],
            type: 'line',
        },
    ],
};
