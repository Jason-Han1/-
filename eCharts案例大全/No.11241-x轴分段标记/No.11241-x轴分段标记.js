option = {
    legend: {
        data: ['2017', '2018']
    },
    color: ['#00f', '#0ff'],
    xAxis: {
        boundaryGap: false,
        data: ['09-01', '09-02', '09-03', '09-04', '09-05', '09-06', '09-07', '09-08', '09-09', '09-10', ]
    },
    yAxis: {
        name: 'mg/L'
    },
    series: [{
            name: '2017',
            type: 'line',
            smooth: true,
            symbol: 'rect',
            areaStyle: { //区域填充样式
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255, 0, 212, 0.5)'
                    }, {
                        offset: 1,
                        color: 'rgba(255, 136, 212, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            data: [0.5, 0.2, 0.1, 0.4, 0.5, 1, 0.5, 0.2, 0.1, 0.4, 0.5, 1],
            markLine: {
                label: {
                    color: '#666',
                    position: 'middle',
                    textStyle: {
                        padding: -50
                    }
                },
                lineStyle: {
                    color: '#666'
                },
                data: [
                    [{
                            symbol: "arrow",
                            name: "前期",
                            coord: ['09-01', 0],

                        },
                        {
                            symbol: "arrow",
                            coord: ['09-03', 0]
                        }
                    ],
                    [{
                            symbol: "arrow",
                            name: "后期",
                            coord: ['09-03', 0]
                        },
                        {
                            symbol: "arrow",
                            coord: ['09-10', 0]
                        }
                    ]
                ]
            }
        },
        {
            name: '2018',
            type: 'line',
            smooth: true,
            symbol: 'rect',
            areaStyle: { //区域填充样式
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 236, 255, 0.2)'
                    }, {
                        offset: 1,
                        color: 'rgba(0, 136, 212, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            data: [0.4, 0.5, 0.6, 0.5, 0.2, 0.1, 0.4, 0.5, 0.8, 0.5, 0.2, 0.1]
        }
    ]
};