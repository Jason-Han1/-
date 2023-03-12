option = {
    legend: {
        show: true,
        data: [ 'series1', 'series2' ]
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    tooltip: {
        trigger: 'axis',
        show: true,
        showContent: true
    },
    series: [
        {
            data: [
                { name: 'Mon',value:1330 }, 
                { name: 'Tue',value:1330 },
                { name: 'Wed',value:1330 },
                ]
                ,
            name: 'series1',
            type: 'line',
            smooth: true
        },
        // {
        //     data: [820, 932, 901, 934, 1290, 1330, 1320],
        //     name: 'series2',
        //     type: 'line'
        // }
    ]
};
