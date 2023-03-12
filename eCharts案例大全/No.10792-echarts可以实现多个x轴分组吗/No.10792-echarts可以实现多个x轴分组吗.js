option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: [{
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },{
        data: ['上班', '休假', '上班'],
        position: 'bottom',
        offset: 30
    }],
    yAxis: {},
    series: [{
        type: 'bar',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};