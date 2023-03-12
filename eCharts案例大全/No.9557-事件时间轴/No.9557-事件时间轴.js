option = {
    title: {
        text: ''
    },
    color: '#57A6AF',
    xAxis: {

        axisLine: {
            onZero: false,
            symbol: ['none', 'arrow'],
            lineStyle: {
                color: '#b1b1b1',
                width: 3
            }
        },
        axisLabel: {
            color: '#000'
        },
        axisTick: {
            show: false
        },
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        interval: 0


    },
    series: [{
            type: 'scatter',

            label: {
                show: true,
                position: 'top',
                textStyle: {
                    // color: '#fff',
                },
                formatter: '自定义'
            },
            symbolSize: 15,
            data: [0, 0, 0, 0, 0, 0, 0]
        },
        {
            name: '2',
            type: 'scatter',
            itemStyle: {
                color: '#fff'
            },
            symbolSize: 10,
            zlevel: 1,
            silent: true,
            data: [0, 0, 0, 0, 0, 0, 0]
        }
    ]
};