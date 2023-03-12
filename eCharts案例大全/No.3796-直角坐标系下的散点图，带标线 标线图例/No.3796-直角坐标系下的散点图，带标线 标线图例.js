option = {
    grid: {
        top: '8%',
        right: '3%',
        left: '5%',
        bottom: '10%'
    },
    legend: {
        show: true,
        right: 0,
        icon: 'rect',
        itemHeight: 4,
    },
    xAxis: {
        type: 'category',
        // boundaryGap: false,
        axisLabel: {
            margin: 16,
            color: '#00000080',
            fontSize: 12
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#0E162610']
            }
        },
    },
    yAxis: {
        name: '云资源数量/费用',
        type: 'value',
        boundaryGap: [0, '10%'],
        axisLabel: {
            margin: 16,
            color: '#00000060',
            fontSize: 12,

        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },

        splitLine: {
            show: true,
            lineStyle: {
                color: ['#0E162610'],
                type: 'dashed'
            }
        },

    },
    series: [{
            type: 'line',
            name: '平均资源数量',
            itemStyle: {
                color: 'rgba(145, 193, 242, 1)'
            }

        },
        {
            type: 'line',
            name: '平均费用',
            itemStyle: {
                color: 'rgba(242, 97, 118, 1)'
            }
        },
        {
            symbolSize: 20,
            itemStyle: {
                color: 'rgba(52, 119, 246, 1)'
            },
            markLine: {
                symbol: 'none',
                lineStyle: {
                    type: 'solid',
                    width: 3
                },
                label: {
                    show: false
                },
                data: [{
                    name: '平均资源数量',
                    yAxis: 5,
                    itemStyle: {
                        color: 'rgba(145, 193, 242, 1)',

                    },
                }, {
                    name: '平均费用',
                    xAxis: 5,
                    itemStyle: {
                        color: 'rgba(242, 97, 118, 1)'
                    },
                }, ]
            },
            data: [
                [10.0, 8.04],
                [8.07, 6.95],
                [13.0, 7.58],
                [9.05, 8.81],
                [11.0, 8.33],
                [14.0, 7.66],
                [13.4, 6.81],
                [10.0, 6.33],
                [14.0, 8.96],
                [12.5, 6.82],
                [9.15, 7.20],
                [11.5, 7.20],
                [3.03, 4.23],
                [12.2, 7.83],
                [2.02, 4.47],
                [1.05, 3.33],
                [4.05, 4.96],
                [6.03, 7.24],
                [12.0, 6.26],
                [12.0, 8.84],
                [7.08, 5.82],
                [5.02, 5.68]
            ],
            type: 'scatter'
        }
    ]
};