option = {
    grid: {
        top: '10%',
        bottom: '10%',
        right: '5%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 255, 233,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 233,0)'
                    }],
                    global: false
                }
            },
        },
    },
    xAxis: {
        type: 'category',
        data: ['单位1', '单位2', '单位3', '单位4', '单位5', '单位6', '单位7'],
        axisTick: { //设置竖轴的刻度线
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#E6E6E6'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#7E7E80'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#E4E4E4',
                type: 'solid'
            }
        },
        boundaryGap: false,
    },
    yAxis: {
        type: 'value',
        axisTick: { //设置竖轴的刻度线
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#7E7E80'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#E6E6E6'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#E4E4E4',
                type: 'solid'
            }
        },

    },

    series: [{
        data: [101, 22, 333, 222, 111, 12, 132],
        type: 'line',
        smooth: true,
        symbol: "none",
        lineStyle: {
            color: '#C8BDE5'
        },
        itemStyle: {
            normal: {
                label: {
                    show: true
                }
            }
        },
        areaStyle: { //区域填充样式
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#CBB7FF'
                    }, //上边区域
                    {
                        offset: 0.7,
                        color: '#8993EE'
                    } //下边的区域
                ], false)
            }
        },
    }]
};