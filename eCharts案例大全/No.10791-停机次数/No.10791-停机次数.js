let data = [{
    "haltCountMonthGoal": 80,
    "monthHaltCount": 40,
    "name": "A",
    "todayHaltCount": 5
}, {
    "haltCountMonthGoal": 50,
    "monthHaltCount": 50,
    "name": "C",
    "todayHaltCount": 10
}, ]
data = data.reverse()
// a在下，b在上
const [a, b] = data
// 取最大值，上下两列的最大值都设为这个值
const max = Math.max(a.haltCountMonthGoal, b.haltCountMonthGoal)
// 箭头标记点坐标，当月累计大于月目标时，去最大值，否则乘以相应的比例
const markPointData = [{
        name: '日累计',
        value: b.todayHaltCount,
        xAxis: b.monthHaltCount >= b.haltCountMonthGoal ? max : (b.monthHaltCount + b.todayHaltCount) * (max / b.haltCountMonthGoal),
        yAxis: 1
    },
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
            x: '2',
            y: '76.5%',
            lineStyle: {
                width: 40,
                color: '#ff001c'
            }
        },
        {
            x: '80%',
            y: '76.5%'
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
    title: {
        text: '停机次数',
        textStyle: {
            fontFamily: 'PingFang SC Bold',
            fontSize: 30,
            fontWeight: 'lighter'
        },
        left: 12,
        top: 15
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
            name: '月累计',
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
                    return '{letter|' + params.name + '}组 月累计停机次数 ' +
                        '{number|' + (params.dataIndex === 0 ? a : b).monthHaltCount + '}次'
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
            
            data: monthCount
        }
 
        
    ]
}