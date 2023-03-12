option = {
    backgroundColor: '#0d235e',
    title: {
        text: '降水量与温度变化(年)',
        textStyle: {
            color: 'red',
            fontWeight: 'bold'
        },
        subtext: '仅供参考',
        subtextStyle: {
            color: '#aaa',
            fontStyle: 'italic'
        },
        left: 'center',

    },
    legend: {
        textStyle: {
            color: '#B4B4B4'
        },
        left: 'left'
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255,255,255,0.1)',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#7B7DDC'
            }
        }
    },
    xAxis: {
        axisLabel: {
            formatter: '{value}月'
        },
        axisLine: {
            lineStyle: {
                color: '#B4B4B4',
            }
        },
        data: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
    },
    yAxis: [
        {
            name: '降水量',
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#B4B4B4',
                }
            },
    
            axisLabel: {
                formatter: '{value} ml ',
            },
        }, 
        {
            name: '温度',
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#B4B4B4',
                }
            },
    
            axisLabel: {
                formatter: '{value} ℃',
            },
        },
    ],
    series: [
        {
            type: 'bar',
            yAxisIndex: 0,
            name: '雨',
            stack: '降水量',
            barWidth: 15,
            itemStyle: {
                normal: {
                    barBorderRadius: 4,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: '#00f'
                            },
                            {
                                offset: 1,
                                color: '#0ff'
                            }
                        ]
                    )
                }
            },
            data: [0, 10, 30, 35, 40, 55, 200, 250, 50, 50, 10, 0]
        },
        {
            type: 'bar',
            name: '雪',
            stack: '降水量',
            yAxisIndex: 0,
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 4,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: '#a0a0a0'
                            },
                            {
                                offset: 1,
                                color: '#fffafa'
                            }
                        ]
                    )
                }
            },
            data: [20, 9, 0, 0, 0, 0, 0, 0, 0, 15, 30, 50]
        },
        {
            type: 'line',
            name: '温度',
            smooth: true,
            yAxisIndex: 1,
            data: [7, 12, 19, 22, 25, 28, 35, 32, 27, 21, 12, 5]
        }
    ],
};