option = {
    width: 200,
    height: 200,
    xAxis: {
        type:'category',
        data:[2, 4, 5, 5, 2],
        show: false,
    },
    yAxis: {
        type: 'value',
        show: false
    },
    series: [{
        type: 'bar',
        itemStyle: {
            normal: {
                color:'#84c44b',
            }

        },
        barWidth: 10,
        data:[13,43,22,33,22]
    }]
}