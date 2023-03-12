option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [
            {
                value: 820, 
                label: {
                    show: true
                },
            },
                
            932, 901, 934, 1290, 1330, 1320
        ],
        label: {
            show: false
        },
        type: 'line'
    }]
};
