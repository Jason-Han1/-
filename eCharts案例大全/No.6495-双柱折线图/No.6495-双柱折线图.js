option = {
    // color: colors,
    backgroundColor:'black',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {},
    // legend: {
    //     data: ['柱子1', '柱子2', '折线']
    // },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月'],
    }],
    yAxis: [{
            type: 'value',
            // name: '柱子1',
            min: 0,
            max: 50,
            interval: 10,
            position: 'left',
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                // 只显示部分刻度
                formatter: function(params) {
                    if (params < 50) {
                        return params
                    } else {
                        return ''
                    }
                },
                color: '#96F5F6'
            }
        },
        {
            type: 'value',
            // name: '柱子2',
            min: 0,
            max: 125,
            interval: 25,
            position: 'right',
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                // 只显示部分刻度
                formatter: function(params) {
                    if (params < 125) {
                        return params + '%'
                    } else {
                        return ''
                    }
                },
                color: '#96F5F6'
            }
        },
    ],
    series: [{
            // name: '柱子1',
            type: 'bar',
            yAxisIndex: 0,
            data: [35, 28, 23, 27, 20, 32, 28, 28],
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,
                    [{
                            offset: 0,
                            color: '#3CEFCA'
                        },
                        {
                            offset: 1,
                            color: '#3CB2DB'
                        }
                    ])
            }
        },
        {
            // name: '柱子2',
            type: 'bar',
            yAxisIndex: 1,
            data: [45, 20, 28, 30, 35, 50, 22, 25],
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,
                    [{
                            offset: 0,
                            color: '#ED7554'
                        },
                        {
                            offset: 1,
                            color: '#EEA46A'
                        }
                    ])
            }
        },
        {
            // name: '折线',
            type: 'line',
            yAxisIndex: 0,
            data: [35, 28, 23, 50, 20, 32, 28, 28],
            itemStyle: {
                color: '#52FEC1'
            },
            symbol: 'circle',
            symbolSize: 7
        }
    ]
};