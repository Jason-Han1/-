var option = {
    title: {
        text: '各月noshow及订单数',
        textStyle: {
            fontSize: 16
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        x: 46,
        y: 35,
        x2: 37,
        y2: 40,
        borderWidth: 0
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        splitLine: {
            show: false
        },
        axisLabel: {
            show: true,
            margin: 20,
            textStyle: {
                color: '#a4a7ab',
                align: 'center',
            }
        }
    }],
    yAxis: [{
            type: 'value',
            splitLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#a4a7ab'
                }
            },
            min: 10,
            max: 100
        },
        {
            type: 'value',
            position: "right",
            splitLine: {
                show: false
            },
            axisLabel: {
                show: true,
                formatter: "{value} ",
                textStyle: {
                    color: '#a4a7ab'
                }
            },
            max: 5000
        }
    ],
    series: [{
            name: 'no_show',
            type: 'bar',
            barWidth: '20',
            data: [38.5,
                83,
                40.5,
                24.5,
                48.5,
                30,
                34,
                46.5,
                26.5,
                36,
                35.5,
                18
            ],
            itemStyle: {
                normal: {
                    color: function(params) {
                        let colorArr = params.value > 0 ? ['#FF9A22', '#FFD56E'] : ['#FFD56E', '#FF9A22']
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: colorArr[0] // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: colorArr[1] // 100% 处的颜色
                        }], false)
                    },
                    barBorderRadius: [30, 30, 0, 0]
                },
            }
        },
        {
            name: '入住数量',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbolSize: 15,
            symbol: 'none',
            yAxisIndex: 1,
            data: [2127.5,
                2733.5,
                3883.5,
                3852,
                4086.5,
                3947.5,
                2461,
                3180,
                3789,
                3764,
                2703.5,
                2129
            ],
            lineStyle: {
                color: '#3275FB',
                width: 4,
                shadowColor: 'rgba(0, 0, 0, 0.3)', //设置折线阴影
                shadowBlur: 15,
                shadowOffsetY: 20,
            }

        }
    ]
};