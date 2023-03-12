option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310],
        markPoint: {
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return idx * 200 + 1000;  
            },
            data: [{
                type: 'min'
            }, {
                type: 'max'
            }]
        }
    }]
};