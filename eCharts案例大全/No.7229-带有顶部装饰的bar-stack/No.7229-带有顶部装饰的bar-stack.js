option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        type: 'bar',
        stack: 'myBar',
        data: [60, 90, 100, 50, 70, 33, 80],
        barMaxWidth: '22%',
        itemStyle: {
            normal: {
                opacity: 0.5,
                color: '#c23531'
            }
        }
    }, {
        type: 'bar',
        stack: 'myBar',
        data: [1, 1, 1, 1, 1, 1, 1],
        tooltip: {
            show: false
        },
        barMaxWidth: '22%',
        itemStyle: {
            normal: {
                color: '#c23531'
            }
        }
    }]
};