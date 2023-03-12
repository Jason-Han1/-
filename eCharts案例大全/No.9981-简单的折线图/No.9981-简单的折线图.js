var data=[1820, 932, 901, 10934, 3290, 1330, 1320];
option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        axisLabel:{
            align: 'left',
            margin:(function(){
                return (Math.max.apply(Math,data)+'').length*10
            })()
        },
        name: '金额（元）'
    },
    series: [{
        data: data,
        type: 'line'
    }]
};