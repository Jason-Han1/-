let data = {
    xData: [],
    value: [],
    percent: []
}
for (let i = 1; i < 10; i++) {
    let randomValue = random(50, 200)
    data.xData.push(i + '月')
    data.value.push(randomValue)
    data.percent.push(randomValue)
}

function random(min, max) {
    return Math.random() * (max - min + 1) + min;
}

option = {
    backgroundColor: "#344b58",
    xAxis: {
        type: 'category',
        data: data.xData,
        axisTick: false,
        boundaryGap: false,
        name: '(月)',
        nameTextStyle: {
            fontSize: 16,
            color: 'rgba(255, 255, 255, 1)',
            padding: [35, 0, 6, 25],
            align: 'left'
        },
        axisLabel: {
            textStyle: {
                color: 'rgba(255,255,255,1)',
                fontSize: 16
            },
        },
        axisLine: {
            lineStyle: {
                width: 3,
                color: 'rgba(255, 255, 255, .3)'
            }
        }
    },
    tooltip: {
        width: 169,
        height: 59,
        trigger: 'axis',
        borderColor: '#475876',
        borderWidth: 2,
        backgroundColor: 'rgba(84, 131, 255, 0.2)',
        borderRadius: 0,
        textStyle: {}
        // showContent: false
    },
    yAxis: [{
            type: 'value',
            name: '(次)',
            axisTick: false,
            splitLine: false,
            offset: 20,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 3,
                    color: 'rgba(108, 144, 175, .5)'
                }
            },
            nameTextStyle: {
                fontSize: 18,
                color: 'rgba(255, 255, 255, 0.8)',
                padding: [0, 48, 0, 0]
            },
            axisLabel: {
                textStyle: {
                    color: 'rgba(255,255,255,.8)',
                    fontSize: 18
                },
            }
        },
        {
            type: 'value',
            name: '(%)',
            axisTick: false,
            splitLine: false,
            offset: 20,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 3,
                    color: 'rgba(108, 144, 175, .5)'
                }
            },
            nameTextStyle: {
                fontSize: 18,
                color: 'rgba(255, 255, 255, 0.8)',
                padding: [0, 0, 0, 10],
                align: 'left'
            },
            axisLabel: {
                textStyle: {
                    color: 'rgba(255,255,255,.8)',
                    fontSize: 18
                },
            }
        },
    ],
    grid: {
        top: '15%',
        left: '60',
        right: '70',
        bottom: '25'
    },
    series: [{
        data: data.value,
        type: 'bar',
        name: '维权次数',
        barWidth: 15,
        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(217, 238, 255, 1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(217, 238, 255, 0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                barBorderRadius: [8, 8, 0, 0]
            }

        },
    }, {
        data: data.percent,
        type: 'line',
        name: '维权满意率',
        smooth: true,
        symbol: 'circle',
        symbolSize: 7,
        showSymbol: false,
        yAxisIndex: 1,
        itemStyle: {
            color: 'rgba(255, 131, 197, 1)',
            opacity: 0
        },
        lineStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#f7f7f8' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#fb9c81' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
            width: 3
        },
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0.1,
                    color: 'rgba(251,156, 129, .5)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(251,156, 129, 0)' // 100% 处的颜色

                }],
                global: false // 缺省为 false
            }
        },
    }]
};