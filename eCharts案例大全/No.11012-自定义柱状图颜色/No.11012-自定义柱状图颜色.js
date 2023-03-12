option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: 
            [
                820, 
                932, 
                901, 
                934, 
                {value:800,itemStyle: {color: 'blue',}},
                1330, 
                1320
            ],
        type: 'bar'
    }]
};
