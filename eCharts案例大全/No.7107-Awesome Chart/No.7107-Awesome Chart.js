option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: [{
            type: 'category',
            data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6']
        }
    ],
    yAxis: {},
    series: [
        {
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 8,
            markPoint: {
                label: {
                    normal: {
                        show: true,
                        align: 'center',
                        color: 'WHITE',
                        fontWeight: 100,
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'radial',
                            x: 0.4,
                            y: 0.4,
                            r: 0.9,
                            colorStops: [{
                                offset: 0,
                                color: '#51e0a2'
                            }, {
                                offset: 1,
                                color: 'rgb(33,150,243)'
                            }],
                            globalCoord: false
                        },
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10,
                    }
                },
                data: [{
                    name: '触发',
                    value: 330,
                    coord: ['2016-4', 330]
                }]
            },
            data: [220, 191, 290, 330, 310]
        }
    ]
};