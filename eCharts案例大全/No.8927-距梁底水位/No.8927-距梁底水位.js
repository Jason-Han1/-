option = {
    backgroundColor:'#fff',
    xAxis: {
        position: 'top',
        type: 'category',
        data: ['12:30', '12:40', '12:50', '13:00', '13:10', '13:20', '13:30', '13:40', '13:50', '14:00', '14:10', '14:20'],
        axisLine: {
            onZero: false
        }
    },
    grid  : {
    top   :80,
    left  :'5%',
    right :'5%',
    bottom:'55%'
        
    },
    yAxis: {
        inverse: true,
        type: 'value'
    },
    series: [{
        data:[92,90,88,85,80,85,80,80,82,84,82,80,80],
        type: 'line',
        color: '#008000',
        symbol: 'circle',
        smooth: true
    }]
};