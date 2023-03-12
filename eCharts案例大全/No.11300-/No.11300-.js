
var total =100
var mubiao = 80
var jtotal = 60



let data = [{
    "haltCountMonthGoal": total,
    "monthHaltCount": jtotal,
    "name": "A",
    "todayHaltCount": mubiao-jtotal
}, ]
data = data.reverse()
// a在下，b在上
const [a] = data
// 取最大值，上下两列的最大值都设为这个值
const max = a.haltCountMonthGoal
// 箭头标记点坐标，当月累计大于月目标时，去最大值，否则乘以相应的比例
const markPointData = [
    {
        name: '日累计',
        value: a.todayHaltCount,
        xAxis: a.monthHaltCount >= a.haltCountMonthGoal ? max : (a.monthHaltCount + a.todayHaltCount) * (max / a.haltCountMonthGoal),
        yAxis: 0
    }
]
// 提示框标记坐标
let markPointRectData = JSON.parse(JSON.stringify(markPointData))
// 提示框左侧和右侧都不能被隐藏
markPointRectData.map(v => {
    if ((v.xAxis - v.value) >= max) {
        v.xAxis -= v.value * 2
    }
    let rate = v.xAxis / max
    if (rate < 0.1) {
        v.xAxis += max * 0.08
    } else if (rate > 0.9) {
        v.xAxis -= max * 0.08
    }
})
// 标记线数据，上下两列
let markLineData = [
    // 下标记线
    [{
            // x: '2',
            // y: '76.5%',
            // lineStyle: {
            //     width: 40,
            //     color: '#ff001c'
            // }
        },
        {
            x: '80%',
            y: '76.5%'
        }
    ],
    // 上标记线
    [{
            // x: '15',
            // y: '38.4%',
            // lineStyle: {
            //     width: 40,
            //     color: '#ff001c'
            // }
        },
        {
            x: '525',
            y: '38.4%'
        }
    ]
]
// 标记线数量，长度
let monthCount = data.map((v, index) => {
    // 长度是否为2，如果长度不为2，那么下标只能取0，而取不到1
    const lengthIs2 = markLineData.length === 2
    if (v.monthHaltCount >= v.haltCountMonthGoal) {
        // 控制红色警告线的长度
        markLineData[lengthIs2 ? index : 0][1].x -= 5.1
        return max - v.todayHaltCount * (max / v.haltCountMonthGoal)
    } else {
        // 未超过，不显示标记线
        markLineData.splice(lengthIs2 ? index : 0, 1)
    }
    return (v.monthHaltCount / v.haltCountMonthGoal) * max
})
option = {
    color: ['#5095f3', '#000f84', '#bbdaf7'],
 
    legend: {
        textStyle: {
            fontFamily: 'PingFang SC Regular',
            fontSize: 100 / 4
        },
        right: 15,
        top: 66 / 4,
        itemHeight: 96 / 4,
        itemWidth: 96 / 4,
        itemGap: 76 / 4,
        data: [ {
                name: '平台渠道受理总量',
                icon: 'rect'
            },{
                name: '全媒体受理量（指标）',
                icon: 'rect'
            },
           
            {
                name: '全媒体受理量',
                icon: 'rect'
            }
        ]
    },
    grid: {
        top: 60,
        left: 15,
        right: 15,
        bottom: -10,
        containLabel: true
    },
    xAxis: {
        show: false,
        type: 'value',
        max: max
    },
    yAxis: {
        type: 'category',
        axisLabel: {
            show: false
        },
        data: data.map(v => v.name),
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    series: [{
            name: '全媒体受理量',
            type: 'bar',
            barWidth: 160 / 4,
            stack: 'count',
            label: {
                show: true,
                position: 'insideLeft',
                fontFamily: 'PingFang SC Regular',
                fontSize: 18,
                offset: [0, -40],
                color: '#333',
                formatter: params => {
                    return '全媒体受理量 ' +
                        + mubiao
                },
                rich: {
                    letter: {
                        fontFamily: 'PingFang SC Regular',
                        color: '#333',
                        fontSize: 30,
                        verticalAlign: 'top'
                    },
                    number: {
                        fontFamily: 'PingFang SC Regular',
                        color: '#333',
                        fontSize: 30,
                        verticalAlign: 'top',
                        lineHeight: 36
                    }
                }
            },
            markLine: {
                symbol: 'none',
                lineStyle: {
                    type: 'solid'
                },
                silent: true,
                label: {
                    position: 'middle',
                    color: '#fff',
                    fontFamily: 'PingFang SC Regular',
                    fontSize: 18,
                    height: 30,
                    lineHeight: 40,
                    verticalAlign: 'middle',
                    formatter: params => {
                        const {
                            haltCountMonthGoal,
                            monthHaltCount
                        } = data[params.dataIndex]
                        const value = monthHaltCount - haltCountMonthGoal
                        if (value === 0) {
                            return '已触及指标目标'
                        } else if (value > 0) {
                            return '已超出指标目标量{number|' + value + '}'
                        }
                        return ''
                    },
                    rich: {
                        number: {
                            fontFamily: 'PingFang SC Regular',
                            fontSize: 27,
                            color: '#fff',
                            verticalAlign: 'middle',
                            lineHeight: 27
                        }
                    }
                },
                data: markLineData
            },
            data: monthCount
        },
        {
            name: '全媒体受理量（指标）',
            type: 'bar',
            barWidth: 160 / 4,
            barGap: '0%',
            stack: 'count',
            label: {
                normal: {
                    show: false,
                    position: 'top',
                    fontFamily: 'PingFang SC Regular',
                    fontSize: 120 / 4,
                    color: '#333'
                }
            },
            data: data.map(v => {
                return v.todayHaltCount * (max / v.haltCountMonthGoal)
            }),
            markPoint: {
                symbol: 'arrow',
                symbolSize: 15,
                symbolOffset: [0, 20],
                data: markPointData,
                label: {
                    show: false
                }
            }
        },
        {
            name: '平台渠道受理总量',
            type: 'bar',
            barWidth: 160 / 4,
            stack: 'count',
            label: {
                show: true,
                position: 'insideRight',
                offset: [0, -40],
                fontFamily: 'PingFang SC Regular',
                fontSize: 18,
                color: '#333',
                formatter: params => {
                    return '平台渠道受理总量{number|' + (params.dataIndex === 0 ? a : a).haltCountMonthGoal + '}次'
                },
                rich: {
                    number: {
                        fontFamily: 'PingFang SC Regular',
                        color: '#333',
                        fontSize: 30,
                        verticalAlign: 'top',
                        lineHeight: 36
                    }
                }
            },
            data: data.map(v => {
                if (v.monthHaltCount >= v.haltCountMonthGoal) {
                    return 0
                }
                return max - (v.monthHaltCount / v.haltCountMonthGoal) * max - v.todayHaltCount * (max / v.haltCountMonthGoal)
            }),
            markPoint: {
                symbol: 'rect',
                symbolSize: [200, 30],
                symbolOffset: [0, 45],
                data: markPointRectData,
                itemStyle: {
                    color: '#000f84'
                },
                label: {
                    fontFamily: 'PingFang SC Regular',
                    fontSize: 15,
                    formatter: params => {
                        return '全媒体受理量（指标） ' + (params.dataIndex === 0 ? a : a).todayHaltCount + ''
                    },
                    offset: [0, 0]
                }
            }
        }
    ]
}