option = {
    xAxis: {
        type: 'category',
        data:['18:36:42','18:40:01','18:47:35','18:55:00','19:00:00']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        type: 'line',
        smooth: false,
        symbol: 'none',
        lineStyle: {
            color: '#00c8ff',
            width: 3
        },
        markLine: {
            symbol: ['none', 'none'],
            label: {
                show: false
            },
            animation: false,
            silent: true,
            data: [
                {
                xAxis:"18:36:42",
                lineStyle: {
                    color: '#fac90a',
                    width: 2
                },
            },{
                xAxis:"18:40:01",
                lineStyle: {
                    color: '#fac90a',
                    width: 2
                },
            },{
                xAxis:"18:55:00",
                lineStyle: {
                    color: '#fac90a',
                    width: 2
                },
            },{
                xAxis:"19:00:00",
                lineStyle: {
                    color: '#fac90a',
                    width: 2
                },
            },
            ],
        },
      data:[200,400,300,200,600]
    }]
};