option = {
    backgroundColor: '#080b30',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    grid: {
        top: '15%',
        left: '5%',
        right: '5%',
        bottom: '15%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: true,
            color: '#4BD9FF'
        },
        axisLabel: {
            color: '#fff'
        },
        splitLine: {
            show: false
        },
        boundaryGap: true,
        data: ['A', 'B', 'C', 'D', 'E', 'F'],

    }],

    yAxis: [{
        type: 'value',
        min: 0,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
        axisLine: {
            show: true,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#d1e6eb',

            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
        name: '注册总量',
        type: 'line',
        smooth: true, //是否平滑
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 10,
        lineStyle: {
            normal: {
                color: "#6c50f3",
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5,
            },
        },
        label: {
            show: true,
            position: 'top',
            textStyle: {
                color: '#05D2D7'
            }
        },
        itemStyle: {
            color: "#6c50f3",
            borderColor: "#fff",
            borderWidth: 3,
            shadowColor: 'rgba(0, 0, 0, .3)',
            shadowBlur: 0,
            shadowOffsetY: 2,
            shadowOffsetX: 2,
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(108,80,243,0.3)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(108,80,243,0)'
                    }
                ], false),
                shadowColor: 'rgba(108,80,243, 0.9)',
                shadowBlur: 20
            }
        },
        data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02, ]
    }]
};