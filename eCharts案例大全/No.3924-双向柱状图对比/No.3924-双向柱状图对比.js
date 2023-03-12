var xData = [
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
    '2014',
    '2013',
    '2012'
]
option = {
    baseOption: {
        timeline: {
            show: false,
            label: {
                show: false
            }
        },
        legend: {
            itemWidth: 10,
            itemHeight: 10,
            // itemGap: 343,
            icon: 'horizontal',
            textStyle: {
                color: '#f00',
                fontSize: 18
            },
            data: ['营业收入', '营业收入同比']
        },
        grid: [{
                show: false,
                left: '3%',
                top: '5%',
                bottom: '5%',
                containLabel: false,
                width: '42%'
            },
            {
                show: false,
                left: '51%',
                top: '5%',
                bottom: '4%',
                width: '100%',
                containLabel: false
            },
            {
                show: false,
                right: '4%',
                top: '5%',
                bottom: '5%',
                containLabel: false,
                width: '42%'
            }
        ],
        xAxis: [{
                type: 'value',
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                position: 'top',
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            {
                gridIndex: 1,
                show: false
            },
            {
                gridIndex: 2,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                position: 'top',
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [{
                type: 'category',
                inverse: true,
                position: 'right',
                axisLine: {
                    show: false
                },

                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                data: xData
            },
            {
                gridIndex: 1,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    padding: [0, 0, 0, 5],
                    textStyle: {
                        color: '#f00',
                        fontSize: 14
                    },
                    align: 'center'
                },
                data: xData.map(function(value) {
                    return {
                        value: value,
                        textStyle: {
                            align: 'center'
                        }
                    }
                })
            },
            {
                gridIndex: 2,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                data: xData
            }
        ],
        series: []
    },
    options: []
}

option.options.push({
    series: [{
            name: '营业收入',
            type: 'bar',
            barWidth: 14,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#00F9FC'
                        },
                        {
                            offset: 1,
                            color: '#3ABDF8'
                        }
                    ]),
                    barBorderRadius: [4, 0, 0, 4]
                }
            },
            label: {
                normal: {
                    show: true,
                    color: '#000',
                    position: 'left',
                    fontSize: 14
                }
            },
            data: [2170, 86, 89, 422, 140, 83, 515, 422, 140, 83]
        },
        {
            name: '营业收入同比',
            type: 'bar',
            barWidth: 14,
            xAxisIndex: 2,
            yAxisIndex: 2,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#15FD58'
                        },
                        {
                            offset: 1,
                            color: '#FFB531'
                        }
                    ]),
                    barBorderRadius: [0, 4, 4, 0]
                }
            },
            label: {
                normal: {
                    show: true,
                    color: '#000',
                    position: 'right',
                    fontSize: 14
                }
            },
            data: [401, 11, 84, 180, 85, 24, 103, 422, 140, 83]
        }
    ]
})