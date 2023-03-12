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
        data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],
        axisLine: {
            lineStyle: {
                color: '#FFFFFF'
            }
        },
        axisLabel: {
            margin: 10,
            color: '#e2e9ff',
            textStyle: {
                fontSize: 14
            },
        },
        axisTick: {
            show: false
        }
    }],
    yAxis: [{
        axisLabel: {
            formatter: '{value}',
            color: '#e2e9ff',
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(0,186,255,.6)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.12)'
            }
        }
    }],
    series: [{
        type: 'bar',
        data: [80, 80, 97, 53, 95, 26, 72],
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
        label: {
            normal: {
                show: true,
                lineHeight: 30,
                formatter: '{c}',
                position: 'top',
                textStyle: {
                    color: '#00D6F9',
                    fontSize: 20
                }

            }
        }
    }]
};