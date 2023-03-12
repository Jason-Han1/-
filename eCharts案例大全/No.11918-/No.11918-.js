option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'log',
        min:1,
        logBase:3
    },
    series: [{
        data: [2, 32, 91, 1134, 1290, 1330, 320],
        type: 'line'
    }]
};
 