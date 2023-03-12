option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
        markLine: {
            symbol: 'none',
            lineStyle: {
                normal: {
                    type: 'solid'
                }
            },
            data: [
                [{
                        coord: ['Tue', 0]
                    },
                    {
                        coord: ['Tue', 932]
                    }
                ],
                [{
                        coord: ['Wed', 0]
                    },
                    {
                        coord: ['Wed', 901]
                    }
                ]
            ]
            // data: [{
            //         yAxis: 820,
            //         name: 'min'
            //     },
            //     {
            //         yAxis: 1100,
            //         name: 'target'
            //     },
            //     {
            //         yAxis: 1330,
            //         name: 'max'
            //     },
            // ]
        },
    }]
};