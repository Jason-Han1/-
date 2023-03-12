option = {
    title: {
        text: 'series[i]-line.smoothMonotone 取值效果对比'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    legend:{
        top: '6%'
    },
    tooltip:{
    },
    series: [{
        name:'smoothMonotone = x',
        type: 'line',
        //id: 'test1',
        smooth: true,
        smoothMonotone: 'x',
        data:[220, 182, 191, 290, 290, 230, 310]
    }, {
        name:'smoothMonotone = y',
        type: 'line',
        //id: 'test1',
        smooth: true,
        smoothMonotone: 'y',
        data:[220, 182, 191, 290, 290, 230, 310].map(x=>x-60)
    }, {
        name:'smoothMonotone = none',
        type: 'line',
        //id: 'test1',
        smooth: true,
        smoothMonotone: 'none',
        data:[220, 182, 191, 290, 290, 230, 310].map(x=>x-120)
    }]
};
