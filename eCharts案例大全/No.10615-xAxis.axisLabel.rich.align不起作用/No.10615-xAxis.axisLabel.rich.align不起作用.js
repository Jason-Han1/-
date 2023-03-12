option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        boundaryGap: false,
        axisLabel: {
            show: true,
            color: '#6C84A2',
            align: 'right',
            formatter: function(v, index) {
                return '{a|' + v + '}'
            },
            rich: {
                a: {
                    backgroundColor: '#F00',
                    align: 'center'
                },
            }
        },
    },
    yAxis: {},
    series: [{
        type: 'line',
        data: [220, 182, 191, 234, 290, 330, 310]
    }]
};