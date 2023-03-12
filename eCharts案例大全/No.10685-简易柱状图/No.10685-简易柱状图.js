option = {
    backgroundColor: '#000',
    legend: {
        right: '15',
        top: '20',
        textStyle: {
            color: '#fff',
            fontSize: 13,
        },
        itemWidth: 22,
        itemHeight: 14,
        itemGap: 12,
        icon: 'rect',
        data: ['今日', '昨日']

    },
    grid: {
        left: '3%',
        bottom: '.5%',
        containLabel: true
    },
    yAxis: [{
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            color: '#7CA3CB',
            fontSize: 13,
        },
        type: 'category',
        position: 'left',
        data: ['危险品', '隐患', '故障', '警报']
    }],
    xAxis: [{
        show: false,
        axisTick: {
            show: false
        },
        inverse: false,
        axisLine: {
            show: false,
        },
    }],
    series: [{
            name: '今日',
            align: 'left',
            type: 'bar',
            barWidth: '10',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [{
                                offset: 0,
                                color: '#781022'
                            },
                            {
                                offset: 1,
                                color: '#AC2D3B'
                            }
                        ]
                    )
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            data: [457, 789, 1244, 1322],
        },
        {
            name: '昨日',
            align: 'left',
            type: 'bar',
            barGap: '50%',
            barWidth: '10',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [{
                                offset: 0,
                                color: '#2964E0'
                            },
                            {
                                offset: 1,
                                color: '#3E8FF5'
                            }
                        ]
                    )
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            data: [347, 654, 873, 897],
        },

    ]
};