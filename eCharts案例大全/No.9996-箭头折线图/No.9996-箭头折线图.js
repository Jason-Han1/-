option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [null, {
            value: 10,
            name: '中国',
            label: {
                show: true,
                formatter: '{b}',
                position: 'left'
            }
        }, {
            symbol: 'arrow',
            symbolSize: 30,
            symbolRotate: -50,
            value: 121,
        }],
        type: 'line'
    }, {
        data: [{
            value: 40,
            name: '日本',
            label: {
                show: true,
                formatter: '{b}',
                position: 'left'
            }
        }, {
            symbol: 'arrow',
            symbolSize: 30,
            symbolRotate: -28,
            value: 250
        }],
        type: 'line'
    }, {
        data: [null, null, null, {
            value: 65,
            name: '韩国',
            label: {
                show: true,
                formatter: '{b}',
                position: 'left'
            }
        }, {
            symbol: 'arrow',
            symbolSize: 30,
            symbolRotate: -18,
            value: 505
        }],
        type: 'line'
    }]
};