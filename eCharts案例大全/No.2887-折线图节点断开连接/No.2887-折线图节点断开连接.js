option = {
    grid:{
        left:'40%',
        bottom:'50%',
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, '', '', 1330, 1320],
        type: 'line',
        // 是否连接空数据。
        connectNulls: false,
    }]
};