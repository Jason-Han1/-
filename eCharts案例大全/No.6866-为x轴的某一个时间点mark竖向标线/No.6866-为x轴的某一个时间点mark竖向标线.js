option = {
    xAxis: {
        type: 'time',
        min: "2019-10-01",
        max: "2019-11-01",
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        type: 'line',
        smooth: true,
        symbol: 'none',
        lineStyle: {
            color: '#31C971',
            width: 1
        },
        markLine: {
            symbol: ['none', 'none'],
            label: {
                show: true
            },
            animation: false,
            data: [{
                xAxis: "2019-10-20",
                lineStyle: {
                    color: '#2296F3',
                    width: 1
                },
            },{
                yAxis: "400",
                lineStyle: {
                    color: 'red',
                    width: 1
                },
            }],
            silent: true,

        },

        data: [
            ['2019-10-10', 200],
            ['2019-10-11', 400],
            ['2019-10-12', 650],
            ['2019-10-13', 500],
            ['2019-10-14', 250],
            ['2019-10-15', 300],
            ['2019-10-16', 450],
            ['2019-10-17', 300],
            ['2019-10-18', 100]
        ]
    }]
};