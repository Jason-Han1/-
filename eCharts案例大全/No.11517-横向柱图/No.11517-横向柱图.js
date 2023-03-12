option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '7%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        position: 'top',
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#8FA3B7', //y轴颜色
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#6D6D6D',
            }
        },
    },
    yAxis: {
        type: 'category',
        inverse: 'true', //排序
        data: ['小王', '小李', '小赵', '小马', '小刘', '小张', '小齐'],
        axisTick: {
            show: false
        },

        axisLine: {
            lineStyle: {
                color: '#8FA3B7', //y轴颜色
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#6D6D6D',
            }
        },
        offset: 10,
        nameTextStyle: {
            fontSize: 15
        }
    },
    series: [{
        name: '数量',
        type: 'bar',
        data: [3100, 2142, 1218, 581, 431, 383, 163],
        barWidth: 14,
        barGap: 10,
        smooth: true,
        label: {
            normal: {
                show: true,
                position: 'right',
                offset: [5, -2],
                textStyle: {
                    color: '#F68300',
                    fontSize: 13
                }
            }
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 1, 0,
                    [{
                            offset: 0,
                            color: '#3977E6'
                        },
                        {
                            offset: 1,
                            color: '#37BBF8'
                        }

                    ]
                )
            }
        }
    }]
};