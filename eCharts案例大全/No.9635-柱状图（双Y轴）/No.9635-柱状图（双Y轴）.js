option = {
    color:['#ff7632','#2F7BD9'],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        bottom: '0',
        data: ['最大回撤', '波动率'],

    },
    grid: {
        left: '3%',
        right: '2%',
        bottom: '30',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color: '#666'
        },
        boundaryGap: true,
        data: ['2017', '2018', '2019'],
    },
    yAxis: [{
            type: 'value',
            name: '最大回撤',
            nameTextStyle: {
                color: '#666'
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                color: '#666'
            },

        },
        {
            type: 'value',
            name: '波动率',
            nameTextStyle: {
                color: '#666'
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            axisLabel: {
                color: '#666'
            },
        }
    ],
    series: [{
            name: '最大回撤',
            type: 'bar',
            barWidth:'30',
            data: [210, 406, 410],
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },
        },

        {
            name: '波动率',
            type: 'bar',
             barWidth:'30',
            yAxisIndex: 1,
            data: [10.5, 20, 21],
            color: '#2F7BD9',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },

        },
    ]
};