xAxisLabels = [
    { Text: '设计', Value: '2' },
    { Text: '备料', Value: '3' },
    { Text: '组装', Value: '4' },
    { Text: '调试', Value: '5' },
];

option = {
    backgroundColor: '#0B173D',
    grid: { left: '5%', right: '5%', bottom: '10%', top: '5%', containLabel: true },
    xAxis: {
        type: 'value',
        splitLine: { lineStyle: { color: 'rgba(255,255,255,0.3)' } },
        splitNumber: 4,
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
            color: 'turquoise',
            align: 'left',
            fontSize: 20,
            formatter: function (value, index) {
                return xAxisLabels[index] ? xAxisLabels[index].Text : '';
            },
        },
    },
    yAxis: {
        type: 'category',
        axisLine: { lineStyle: { color: 'rgba(255,255,255,0.3)' } },
        splitLine: { show: false },
        axisTick: { show: false },
        axisLabel: { color: 'turquoise', fontSize: 20 },
        data: ['DK0086S01', 'DS0076P02', 'DS0100P01', 'ES0091P01', 'ES0096P01', 'ES0099P01'],
    },
    series: [
        {
            name: '2',
            type: 'bar',
            stack: 'processBar',
            label: {
                show: true,
                fontSize: 20,
                textBorderColor: '#000',
                textBorderWidth: 2,
                formatter: function (params) {
                    const value = params.data;
                    return value === 0 ? '' : value + '%';
                },
            },
            itemStyle: {
                color: {
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        { offset: 0, color: 'rgba(34,177,76,.8)' },
                        { offset: 1, color: 'rgba(107,208,137,.8)' },
                    ],
                },
            },
            data: [0, 100, 5, 100, 60, 5],
        },
        {
            name: '2_REST',
            type: 'bar',
            stack: 'processBar',
            itemStyle: { color: 'rgb(186,179,189,0.1)' },
            data: [100, 0, 95, 0, 40, 95],
        },
        {
            name: '3',
            type: 'bar',
            stack: 'processBar',
            label: {
                show: true,
                fontSize: 20,
                textBorderColor: '#000',
                textBorderWidth: 2,
                formatter: function (params) {
                    const value = params.data;
                    return value === 0 ? '' : value + '%';
                },
            },
            itemStyle: {
                color: {
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        { offset: 0, color: 'rgba(34,177,76,.8)' },
                        { offset: 1, color: 'rgba(107,208,137,.8)' },
                    ],
                },
            },
            data: [0, 100, 0, 100, 2, 0],
        },
        {
            name: '3_REST',
            type: 'bar',
            stack: 'processBar',
            itemStyle: { color: 'rgb(186,179,189,0.1)' },
            data: [100, 0, 100, 0, 98, 100],
        },
        {
            name: '4',
            type: 'bar',
            stack: 'processBar',
            label: {
                show: true,
                fontSize: 20,
                textBorderColor: '#000',
                textBorderWidth: 2,
                formatter: function (params) {
                    const value = params.data;
                    return value === 0 ? '' : value + '%';
                },
            },
            itemStyle: {
                color: {
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        { offset: 0, color: 'rgba(34,177,76,.8)' },
                        { offset: 1, color: 'rgba(107,208,137,.8)' },
                    ],
                },
            },
            data: [0, 2, 0, 4, 0, 0],
        },
        {
            name: '4_REST',
            type: 'bar',
            stack: 'processBar',
            itemStyle: { color: 'rgb(186,179,189,0.1)' },
            data: [100, 98, 100, 96, 100, 100],
        },
        {
            name: '5',
            type: 'bar',
            stack: 'processBar',
            label: {
                show: true,
                fontSize: 20,
                formatter: function (params) {
                    const value = params.data;
                    return value === 0 ? '' : value + '%';
                },
            },
            itemStyle: {
                color: {
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        { offset: 0, color: 'rgba(34,177,76,.8)' },
                        { offset: 1, color: 'rgba(107,208,137,.8)' },
                    ],
                },
            },
            data: [0, 0, 0, 0, 0, 0],
        },
        {
            name: '5_REST',
            type: 'bar',
            stack: 'processBar',
            itemStyle: { color: 'rgb(186,179,189,0.1)' },
            data: [100, 100, 100, 100, 100, 100],
        },
    ],
};
