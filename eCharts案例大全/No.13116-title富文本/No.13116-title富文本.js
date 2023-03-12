option = {
    title: {
        text: '{b|这段文本采用样式b}这段用默认样式{a|这段用样式a}',
        textStyle: {
            align: 'center',
            width: 100000,
            rich: {
                a: {color: 'red'},
                b: {color: 'blue'}
            }
        },
        backgroundColor: 'yellow'
    },
    xAxis: {
        // data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        type: 'category'
    },
    yAxis: {},
    dataset: {
        source: [
            {name: 'sun', value: 200},
            {name: 'li',value: 100},
            {name: 'li2',value: 110},
            {name: 'li24',value: 330},
            ]
    },
    series: [{
        type: 'line',
        // data:[220, 182, 191, 234, 290, 330, 310]
    }]
};