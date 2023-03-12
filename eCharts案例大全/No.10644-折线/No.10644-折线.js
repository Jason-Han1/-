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
            type: 'line'
        },
        {
            type: 'lines',
            coordinateSystem: 'cartesian2d',
            symbolSize: 10,
            polyline: true,
            effect: {
                show: true,
                smooth: false,
                trailLength: 0,
                symbol: "pin",
                color: '#C23531',
                symbolSize: 20
            },
            lineStyle: {
                normal: {
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },
            data: [{
                coords: [
                    ['Mon', 820],
                    ['Tue', 932],
                    ['Wed', 901],
                    ['Thu', 934],
                    ['Fri', 1290],
                    ['Sat', 1330],
                    ['Sun', 1320],
                ]

            }]
        },
    ]
}