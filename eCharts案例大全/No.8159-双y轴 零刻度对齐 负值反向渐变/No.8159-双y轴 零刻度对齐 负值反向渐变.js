var data = [220, 182, -191, 234, 290, 330, -310]
var databar = []
const rightColor = {
    color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#ff9569' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#e92758' // 100% 处的颜色
        }],
        global: false // 渐变为 false
    },
    barBorderRadius: [30, 30, 0, 0]
}
const leftColor = {
    color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#e92758' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#ff9569' // 100% 处的颜色
        }],
        global: false // 渐变为 false
    },
    barBorderRadius: [0, 0, 30, 30]
}
data.map(v => {
    databar.push({
        value: v,
        itemStyle: v > 0 ? rightColor : leftColor
    })
})

function Max(value) {
    let maxStr = +`${parseInt(Math.abs(value.max))}` [0] + 1
    let minStr = +`${parseInt(Math.abs(value.min))}` [0] + 1
    for (let i = 0; i < `${Math.ceil(Math.abs(value.max))}`.length - 1; i++) {
        maxStr += '0'
    }
    for (let i = 0; i < `${Math.ceil(Math.abs(value.min))}`.length - 1; i++) {
        minStr += '0'
    }
    return Math.abs(value.max) > Math.abs(value.min) ?
        +maxStr :
        +minStr
}

function Min(value) {
    let maxStr = +`${parseInt(Math.abs(value.max))}` [0] + 1
    let minStr = +`${parseInt(Math.abs(value.min))}` [0] + 1
    for (
        let i = 0; i < `${Math.ceil(Math.abs(value.max))}`.length - 1; i++
    ) {
        maxStr += '0'
    }
    for (
        let i = 0; i < `${Math.ceil(Math.abs(value.min))}`.length - 1; i++
    ) {
        minStr += '0'
    }
    return value.min >= 0 ?
        0 :
        Math.abs(value.max) > Math.abs(value.min) ?
        - +maxStr :
        - +minStr
}

option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none' // 隐藏鼠标移入的辅助提示线
        }
    },
    xAxis: [{
        type: 'category',
        data: ['2020/02/01', '2020/02/02', '2020/02/03', '2020/02/04', '2020/02/05', '2020/02/06', '2020/02/07'],
        color: '#59588D',
        // x轴坐标刻度线
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#4d4d4d', // x轴文字颜色
            fontSize: 12,
            margin: 10, // x轴刻度文字与x轴的距离
            formatter: (value, index) => {
                return index === 0 ? value : value.slice('5')
            }
        },
        axisLine: {
            lineStyle: {
                color: '#fad0c4' // x轴线颜色
            }
        }
    }],
    yAxis: [{
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false // 隐藏y轴线
            },
            axisLabel: {
                color: '#4d4d4d'
            },
            splitLine: {
                lineStyle: {
                    color: '#fad0c4' // 背景横线颜色
                }
            },
            // 计算左侧y轴对应的柱状图数据的最大值
            max: value => Max(value),
            min: value => Min(value)
        },
        {
            type: 'value',
            position: 'right',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                color: '#4d4d4d',
                formatter: '{value}%'
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#e6fcfa'
                }
            },
            // 右侧y轴百分比对应折线图的最大最小值
            max: value => Max(value),
            min: value => Min(value)
        }
    ],
    series: [{
            type: 'bar',
            data: databar,
            barWidth: '30%',
            barMaxWidth: 20,
            itemStyle: rightColor
        },
        {
            type: 'line',
            data: [10, 82, -91, 34, 90, 30, -40],
            smooth: false, //是否平滑曲线显示
            showSymbol: false, // false 表示只有在tooltip hover的时候显示
            symbolSize: 1,
            yAxisIndex: 1,
            lineStyle: {
                color: '#fe9a8b',
                width: 1
            }, //折线颜色粗细
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                            offset: 0,
                            color: '#f78ca0'
                        },
                        {
                            offset: 7 / 9,
                            color: '#f9748f'
                        },
                        {
                            offset: 9 / 9,
                            color: '#fe9a8b'
                        }
                    ]
                },
                opacity: 0.2
            }, // 区域颜色
            itemStyle: {
                color: '#fff',
                borderColor: '#fe9a8b'
            } //拐点颜色边框样式
        }
    ]
};