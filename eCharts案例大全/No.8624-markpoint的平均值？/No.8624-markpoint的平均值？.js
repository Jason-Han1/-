option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [1,2,2,2,19],
        type: 'line',
        markPoint:{
            data:[{
                name: '最大值',
                type: 'average'
            }, 
        ]
        }
        
    }]
};
