dataset = [{
        name: 'A',
        a: 90,
        b: 90
    },
    {
        name: 'B',
        a: 40,
        b: 40
    },
    {
        name: 'C',
        a: 30,
        b: 30
    },
    {
        name: 'D',
        a: 30,
        b: 30
    },
]
option = {
    dataset: {
        dimensions: ['name', 'a', 'b'],
        source: dataset
    },
    grid: [{
            left: '5%',
            right: '58%'
        },
        {
            right: '5%',
            left: '58%'
        }

    ],
    xAxis: [{
        type: 'value',
        inverse: true,
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: 'rgba(255,255,255,0.5)'
            }
        }

    }, {
        type: 'value',
        gridIndex: 1,
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: 'rgba(255,255,255,0.5)'
            }
        }

    }],
    yAxis: [{
        name: '福州市',
        type: 'category',
        inverse: true,
        nameLocation:'start',
        nameTextStyle: {
            backgroundColor: '#eee',
            borderRadius: 4,
            padding: [4, 10],
        },
        axisLabel: {
            show: false
        }
    }, {
        name: 'xx市',
        type: 'category',
         nameLocation:'start',
        inverse: true,
        nameTextStyle:{
            backgroundColor: '#eee',
            borderRadius: 4,
            padding: [4, 10],
        },
        gridIndex: 1,
        axisLabel: {
            show: true,
            padding:[3, 20]
        }

    }],
    series: [{
            type: 'bar',
            barWidth: 20,
            itemStyle: {
                barBorderRadius: [30, 0, 0, 30],
                color: {
                    colorStops: [{
                            offset: 0,
                            color: '#D0CE17' // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#00DFD2' // 0% 处的颜色
                        },
                    ]
                }
            }
        },
        {
            type: 'bar',
            yAxisIndex: 1,
            xAxisIndex: 1,
            barWidth: 20,
            itemStyle: {
                barBorderRadius: [0, 30, 30, 0],
                color: {
                    colorStops: [{
                            offset: 0,
                            color: '#00DFD2' // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#D0CE17' // 0% 处的颜色
                        },
                    ]
                }
            }
        }
    ]
};