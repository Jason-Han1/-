var fontSize = (val) => {
    return val
}
let x = ['a', 'b', 'c', 'd']
let data = [80, 70, 60, 30]
option = {
    backgroundColor: '#012248',
    grid: {
        top: 'center',
        left: 'center',
        containLabel: true
    },
    tooltip: {
        show: true
    },
    xAxis: {
        show: true,
        splitLine: {
            lineStyle: {
                color: 'none'
            }
        },
        axisLabel: {
            color: '#fff',
            textStyle: {
                fontSize: fontSize(14)
            }
        },
        axisLine: {
            lineStyle: {
                color: '#6f8bbb',
                width: 1,
                type: 'none'
            }
        }
    },
    yAxis: [{
            type: 'category',
            inverse: true,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                margin: fontSize(40),
                textStyle: {
                    align: 'left',
                    fontSize: fontSize(14),
                    color: '#fff'
                }
            },
            data: x
        },
        {
            type: 'category',
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    fontSize: fontSize(14),
                    color: '#fff'
                },
                formatter: '{value}%'
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: data
        }
    ],
    series: [{
        type: 'bar',
        itemStyle: {
            normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#6390F0'
                    },
                    {
                        offset: 1,
                        color: '#25EBE9'
                    }
                ]),
                barBorderRadius: 15,
                borderWidth: 0,
                borderColor: '#333'
            }
        },
        label: {
            normal: {
                show: false
            }
        },
        barWidth: '15',

        data: data
    }]
}