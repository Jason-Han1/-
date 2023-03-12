option = {
    tooltip: {},
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [0, 22],
        type: 'bar',
        barGap: '-100%',
        barMaxWidth: 20,
        itemStyle: {
            color: '#23a4f5'
        }
    }, {
        data: [22, 0],
        type: 'bar',
        barGap: '-100%',
        barMaxWidth: 20,
        itemStyle: {
            color: '#3cd1c0'
        }
    }]
};