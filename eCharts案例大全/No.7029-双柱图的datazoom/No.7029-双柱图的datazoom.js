option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    dataZoom: {
        "show": true,
        "height": 12,
        type: 'slider',
        startValue: 0,
        endValue: 4
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130,120, 200, 150, 80, 70, 110, 130,120, 200, 150, 80, 70, 110, 130,120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        barWidth: 20,
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
        }
    },{
        data: [120, 200, 150, 80, 70, 110, 130,120, 200, 150, 80, 70, 110, 130,120, 200, 150, 80, 70, 110, 130,120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        barWidth: 20,
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
        }
    }]
};
