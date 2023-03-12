option = {
    title: {
        text: 'Awesome Chart',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    xAxis: {
        position:'center',
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    },
    yAxis: [
        {
            type: 'value',
            max: 350,
            inverse: true,
        },
        {
            type: 'value',
            max: 350,
        },
    ],
    series: [
        {
            type: 'bar',
            yAxisIndex: 0,
            barGap: '-100%',
            data: [20, 82, 91, 34, 90, 30, 10],
        },
        {
            type: 'bar',
            yAxisIndex: 1,
            data: [220, 182, 191, 234, 190, 230, 310],
        },
    ],
};
