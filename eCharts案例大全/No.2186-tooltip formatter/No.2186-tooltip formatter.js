option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        formatter: () => '6<V≤121'
    },
    series: [{
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
    }]
};