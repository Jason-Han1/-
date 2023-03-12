option = {
    backgroundColor: '#26446E',
    grid: {
        top: "15%",
        left: "15%",
        bottom: "10%",
        right: "10%",
        containLabel: true
    },
    xAxis: [{
        show: true,
        type: 'category',
        name: '',
        nameTextStyle: {
            fontSize: 14,
            color: 'eeeeee',
            lineHeight: 90,
        },
        axisLabel: {
            color: '#fff',
            fontSize: 14,
            margin: 15,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#406A92',
                width: 3
            }
        },
        axisTick: {
            show: false
        },
        data: ['注册资金', '  税收']
    }],
    yAxis: [{
        show: false,
    }],
    series: [{
            name: '注册资金',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#A96FFF'
                    }, {
                        offset: 1,
                        color: '#23C3FF'
                    }]),
                    barBorderRadius: 30
                }
            },
            barWidth: 16,
            data: [{
                value: 2000000,
            }, {
                value: null
            }],
            label: {
                normal: {
                    show: true,
                    fontSize: 16,
                    offset: [0, -10],
                    fontWeight: 'light',
                    color: '#23C3FF',
                    position: 'top',
                    formatter: function(val) {
                        return '20亿'
                    }
                }
            },
        },
        {
            name: '税收',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#FF973A'
                    }, {
                        offset: 1,
                        color: '#FFDE4C'
                    }]),
                    barBorderRadius: 30
                }
            },
            barWidth: 16,
            data: [{
                value: null,
            }, {
                value: 600000
            }],
            label: {
                normal: {
                    show: true,
                    fontSize: 16,
                    offset: [0, -10],
                    fontWeight: 'light',
                    color: '#FFDE4C',
                    position: 'top',
                    formatter: function(val) {
                        return '2000万'
                    }
                }
            }

        },

    ]
}