option = {
    backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: '15%',
        right: '3%',
        left: '5%',
        bottom: '12%'
    },
    xAxis: [{
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        axisLine: {
            lineStyle: {
                color: 'rgba(0,186,255,.6)'
            }
        },
        axisLabel: {
            margin: 10,
            color: '#e2e9ff',
            textStyle: {
                fontSize: 14
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.12)'
            }
        }
    }],
    yAxis: [{
        axisLabel: {
            formatter: '{value}',
            color: '#e2e9ff',
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,186,255,.6)'
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,0.12)'
            }
        }
    }],
    series: [{
        type: 'line',
        data: [80, 80, 97, 53, 95, 26, 72, 53, 61, 75, 53, 51],
        barWidth: '28px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0,244,255,1)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(0,77,167,1)' // 100% 处的颜色
                }], false),
                shadowColor: 'rgba(0,160,221,1)',
                shadowBlur: 4,
            }
        },

    }, {
        type: 'line',
        data: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
        barWidth: '28px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0,244,155,1)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(0,77,167,1)' // 100% 处的颜色
                }], false),
                shadowColor: 'rgba(0,160,221,1)',
                shadowBlur: 4,
            }
        },

    }]
};