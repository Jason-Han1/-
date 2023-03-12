option = {
    backgroundColor: "#ffffff",
    color: ['#37A2DA'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
            alignWithLabel: true
        },
        axisLabel: {
             show: true,
             textStyle: {
                 fontSize: 16
             },
         },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
             show: true,
             textStyle: {
                 fontSize: 16
             },
         },
    }],
    series: [{
        name: 'Data',
        type: 'bar',
        barWidth: '70%',
        data: [10, 52, 200, 334, 390, 330, 220]
    }]
};