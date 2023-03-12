option = {
    tooltip: {},
    legend: {},
    xAxis: [
        {
            type: 'value',
            inverse: true,
            splitLine: { show: false },
            axisLabel: { show: false },
        },
        {
            type: 'value',
            inverse: false,
            gridIndex: 1,
            splitLine: { show: false },
            axisLabel: { show: false },
        },
    ],
    yAxis: [
        {
            position: 'right',
            data: ['1号线', '2号线', '3号线', '4号线', '5号线', '14号线', '城郊线'],
            type: 'category',
            axisLabel: { show: true },
            axisLine: { show: true },
            axisTick: { show: false },
            inverse: true,
        },
        {
            type: 'category',
            data: ['1号线', '2号线', '3号线', '4号线', '5号线', '14号线', '城郊线'],
            axisLabel: { color: 'transparent' },
            axisLine: { show: true },
            axisTick: { show: false },
            inverse: true,
            gridIndex: 1,
        },
    ],
    grid: [
        {
            left: 0,
            width: '47%',
            // containLabel: true,
        },
        {
            left: '52%',
            width: '47%',
            // containLabel: true,
        },
    ],
    series: [
        {
            name: '进-预测',
            type: 'bar',
            label: {
                show: true,
                position: 'inside',
            },
            data: [5, 20, 36, 10, 10, 20, 4],
        },
        {
            name: '进-实际',
            type: 'bar',
            label: {
                show: true,
                position: 'inside',
            },
            data: [5, 20, 36, 10, 10, 20, 4],
        },
        {
            yAxisIndex: 1,
            xAxisIndex: 1,
            name: '出-预测',
            type: 'bar',
            label: {
                show: true,
                position: 'inside',
            },
            data: [5, 20, 36, 10, 10, 20, 4],
        },
        {
            yAxisIndex: 1,
            xAxisIndex: 1,
            name: '出-实际',
            type: 'bar',
            label: {
                show: true,
                position: 'inside',
            },
            data: [5, 20, 36, 10, 10, 20, 4],
        },
    ],
};
