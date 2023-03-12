const data1 = [120, 200, 150, 80, 70, 110, 130]
option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: data1,
        type: 'bar',
        name: '已优化',
        backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
        }
    }, {
        data: data1,
        type: 'line',
        smooth: true,
        name: '达成率',
        lineStyle: {
            color: '#a5afcb',
            type: 'dashed',
            width: 2,
        },
        symbolSize: 10,
        itemStyle: {
            borderWidth: 3,
            borderColor: '#a5afcb'
        }
    }, {
        type: 'pictorialBar',
        symbol: function(data, params) {
            return 'image://https://gallery.echartsjs.com/img/logo.png'
        },
        symbolSize: [20, 30],
        symbolOffset: [0, -40],
        symbolPosition: 'end',
        label: {
            show: false,
        },
        data: data1,
    }]
};