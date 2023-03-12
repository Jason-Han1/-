option = {
    title: {
        text: 'Awesome Chart',
    },
    tooltip: {
        trigger: 'axis',
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    },
    yAxis: {},
    series: [
        {
            type: 'bar',
            emphasis: {focus: 'self',},
            data: [220, 182, 191, 234, 290, 330, 310],
        },
    ],
};
