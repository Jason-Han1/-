option = {
    grid: {
        left: '7%',
        right: '3%',
        top: '10%',
        bottom: 120
    },
    legend: {
        orient: 'horizontal',
        bottom: 10,
        itemGap: 25,
        itemWidth: 20,
        itemHeight: 10,
        selectedMode: false,
        textStyle: {
            color: '#5D6377',
            fontSize: 14,
            width: '50%'
        },
        data: ['SEI', 'Program Index', 'Assiciation Index', 'Commitment Index', 'SEI Benchmark', 'Program Index Benchmark', 'Assiciation Index Benchmark', 'Commitment Index Benchmark']
    },
    xAxis: {
        type: 'category',
        axisTick: {
            show: false
        },
        zlevel: 2,
        axisLine: {
            lineStyle: {
                width: 2
            }
        },
        data: [{
                value: '小米',
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'bold'
                }
            },
            {
                value: '纯甄酸奶',
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'bold'
                }
            },
            {
                value: '海飞丝',
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'bold'
                }
            },
            {
                value: '咸鱼APP',
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'bold'
                }
            },
            {
                value: '美年达',
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'bold'
                }
            }
        ]
    },
    yAxis: {
        type: 'value'
    },
    series: [{
            name: 'SEI',
            type: 'bar',
            barGap: '40%',
            barWidth: 22,
            data: [320, 332, 301, 334, 390],
            itemStyle: {
                barBorderRadius: [5, 5, 0, 0]
            },
            markLine: {
                symbolSize: 0,
                label: {
                    show: false,
                    position: 'middle',
                    formatter: '{a}'
                },
                lineStyle: {
                    width: 1,
                    type: 'dashed'
                },
                emphasis: {
                    lineStyle: {
                        width: 1
                    }
                },
                data: [{
                    name: 'SEI Benchmark',
                    yAxis: 320,
                    symbolOffset: [150, 50]
                }]
            }
        },
        {
            name: 'Program Index',
            type: 'bar',
            barWidth: 16,
            data: [220, 182, 191, 234, 290],
            itemStyle: {
                barBorderRadius: [5, 5, 0, 0]
            },
            markLine: {
                symbolSize: 0,
                label: {
                    show: false
                },
                lineStyle: {
                    width: 1,
                    type: 'dashed'
                },
                emphasis: {
                    lineStyle: {
                        width: 1
                    }
                },
                data: [{
                    name: 'Program Index Benchmark',
                    yAxis: 220
                }]
            }
        },
        {
            name: 'Assiciation Index',
            type: 'bar',
            barWidth: 16,
            data: [150, 232, 201, 154, 190],
            itemStyle: {
                barBorderRadius: [5, 5, 0, 0]
            },
            markLine: {
                symbolSize: 0,
                label: {
                    show: false
                },
                lineStyle: {
                    width: 1,
                    type: 'dashed'
                },
                emphasis: {
                    lineStyle: {
                        width: 1
                    }
                },
                data: [{
                    name: 'Assiciation Index Benchmark',
                    yAxis: 270
                }]
            }
        },
        {
            name: 'Commitment Index',
            type: 'bar',
            barWidth: 16,
            data: [98, 77, 101, 99, 40],
            itemStyle: {
                barBorderRadius: [5, 5, 0, 0]
            },
            markLine: {
                symbolSize: 0,
                label: {
                    show: false
                },
                lineStyle: {
                    width: 1,
                    type: 'dashed'
                },
                emphasis: {
                    lineStyle: {
                        width: 1
                    }
                },
                data: [{
                    name: 'Commitment Index Benchmark',
                    yAxis: 370
                }]
            }
        },
        {
            name: 'SEI Benchmark',
            type: 'bar',
            barWidth: 0,
            stack: 'null',
            data: [],
            itemStyle: {
                barBorderRadius: [5, 5, 0, 0]
            }
        },
        {
            name: 'Program Index Benchmark',
            type: 'bar',
            barWidth: 0,
            stack: 'null',
            data: [],
            itemStyle: {
                barBorderRadius: [5, 5, 0, 0]
            }
        },
        {
            name: 'Assiciation Index Benchmark',
            type: 'bar',
            barWidth: 0,
            stack: 'null',
            data: [],
            itemStyle: {
                barBorderRadius: [5, 5, 0, 0]
            }
        },
        {
            name: 'Commitment Index Benchmark',
            type: 'bar',
            barWidth: 0,
            stack: 'null',
            data: [],
            itemStyle: {
                barBorderRadius: [5, 5, 0, 0]
            }
        }
    ]
}