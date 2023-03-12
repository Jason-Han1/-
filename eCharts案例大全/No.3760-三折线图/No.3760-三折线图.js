var fontColor = '#30eee9';
option = {
    backgroundColor: '#11183c',
    grid: {
        left: '5%',
        right: '10%',
        top: '20%',
        bottom: '15%',
        containLabel: true
    },
    tooltip: {
        show: true,
        trigger: 'item'
    },
    legend: {
        show: true,
        bottom: 50,
        right: 100,
        icon: 'circle',
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 30,
        textStyle: {
            color: '#FFFFFF',
            fontSize: 16
        },
        data: ['2019', '2020', '2021']
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            color: '#7181BE',
            fontSize: 14
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#053C70',
                type: 'dashed'
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#053C70',
                type: 'dashed'
            }
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }],
    yAxis: [{
            type: 'value',
            min: 0,
            max: 1000,
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#7181BE',
                    fontSize: 14
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#053C70',
                    type: 'dashed'
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#053C70',
                    type: 'dashed'
                }
            },
        },

    ],
    series: [{
            name: '2019',
            type: 'line',
            stack: '总1量',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: '#2392D1',
                    lineStyle: {
                        color: "#2392D1",
                        width: 1
                    },
                }
            },
            markPoint: {
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                }
            },
            data: [470, 600, 780, 790, 700, 670, 810,800, 900, 870, 810, 990]
        },
        {
            name: '2020',
            type: 'line',
            stack: '总量2',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: '#FDC86A',
                    lineStyle: {
                        color: "#FDC86A",
                        width: 1
                    },
                }
            },
            data: [190, 200, 430, 410, 400, 370, 300,590,420,500, 580, 700]
        },
        {
            name: '2021',
            type: 'line',
            stack: '总量3',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: '#08B7A4',
                    lineStyle: {
                        color: "#08B7A4",
                        width: 1
                    },
                }
            },
            data: [150, 170, 200, 300, 240, 210, 200, 300, 230,320,300,580]
        }
    ]
};