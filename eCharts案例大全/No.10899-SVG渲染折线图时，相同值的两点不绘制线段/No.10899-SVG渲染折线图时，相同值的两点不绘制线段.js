option = {
       tooltip: {
        show: true,
        padding: [10, 15],
        confine: true,
        textStyle: {
            color: '#9B9B9B',
            fontSize: 12,
            lineHeight: 18
        },
        backgroundColor: '#fff',
        extraCssText: 'box-shadow: 0 0 8px 0 rgba(0,0,0,0.10);'
    },
    grid: {
        x: 12,
        y: 10,
        x2: 12,
        y2: 20,
        borderWidth: 0
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
                fontSize: 12,
                color: '#C0C0C0'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#E2E4E8'
            }
        },
        data: ['1日', '2日']
    },
    yAxis: {
        type: 'value',
        show: false,
        boundaryGap: false,
        scale: false,
        axisLine: {
            show: false
        }
    },
    dataZoom: [{
        type: 'inside',
        startValue: 0,
        endValue: 10,
        zoomLock: true,
        minValueSpan: 10,
        orient: 'horizontal',
        xAxisIndex: 0
    }],
    series: [{
        name: '实收金额',
        type: 'line',
        color: '#FF8965',
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: {
            width: 4,
            color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                type: 'linear',
                colorStops: [{
                    offset: 0,
                    color: '#FF8965 ' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#FB4169' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            },
            shadowColor: 'rgba(251, 65, 105, 0.23)',
            shadowBlur: 10,
            shadowOffsetY: 7
        },
        itemStyle: {
            color: '#FFAF2E',
            borderWidth: 2,
            borderType: 'solid',
            borderColor: 'rgba(255, 255, 255, 0.8)',
            shadowColor: 'rgba(255, 255, 255, 0.8)',
            shadowBlur: 10
        },
        areaStyle: {
            normal: {
                type: 'linear',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(251, 65, 105, .3)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(251, 65, 105, 0)'
                    }
                ]),
                shadowColor: 'rgba(255, 255, 255, 1)',
                shadowBlur: 10
            }
        },
        smooth: true,
        data: [0, 0]
    }]
};