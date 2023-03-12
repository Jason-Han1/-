option = {
    backgroundColor: '#fff',
    title: {
        text: 'chart'
    },
    tooltip: {
        formatter: `{c}`,
        textStyle: {
            color: '#fff'
        },
        padding: [9, 16],
        trigger: 'axis',
        axisPointer: {
            z: 0,
            type: 'line',
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                            offset: 1,
                            color: '#D5D9FB'
                        },
                        {
                            offset: 0,
                            color: '#FED6F2'
                        }
                    ]
                },
                opacity: 1,
                width: 20
            }
        }
    },
    xAxis: {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        axisTick: {
            alignWithLabel: true
        },
        // 刻度是否显示
        axisTick: {
            show: false
        },
        // 轴线是否显示
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#CCCCCC',
            fontSize: 10
        }

    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#CCCCCC',
            fontSize: 10
        }
    },
    series: [{
        type: 'line',
        smooth: true,
        showSymbol: false,
        data: [22, 182, 31, 234, 90, 150, 10, 46, 78, 32, 177, 45],
        itemStyle: {
            normal: {
                borderWidth: 3,
                //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位
                color: new echarts.graphic.LinearGradient(
                    1,
                    0,
                    0,
                    0,
                    [{
                            offset: 0,
                            color: '#F9027E'
                        },
                        {
                            offset: 0.5,
                            color: '#F9027A'
                        },
                        {
                            offset: 1,
                            color: '#744DFE'
                        }
                    ]
                )
            }
        },
        lineStyle: {
            width: 5,
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowOffsetY: 10,
            shadowBlur: 10
        },
        areaStyle: {
            opacity: 1,
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                        offset: 0,
                        color: '#FEDCF3'
                    },
                    {
                        offset: 1,
                        color: 'rgba(255, 255, 255, .5)'
                    }
                ],
                global: false
            }
        }
    }, {
        z: -1,
        barWidth: 20,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: '#F9F9F9'
        }
    }]
};