option = {
    // backgroundColor: '#fff',
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

    xAxis: [{
        show: true,
        type: 'category',
        axisLine: {
            show: true
        },
        splitArea: {
            // show: true,
            color: '#f00',
            lineStyle: {
                color: '#f00'
            },
        },
        axisLabel: {
            color: '#f00'
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,
        data: ['A', 'B', 'C', 'D', 'E', 'F'],

    }],
    grid: {
        x: '5%',
        y: '5%',
        x2: '5%',
        y2: '5%',
        borderWidth: 1
    },
    yAxis: [{
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 4,
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
                color: '#f00',
            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
            name: '车位使用率',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: false,
            symbol: 'circle',
            symbolSize: 2,
            lineStyle: {
                normal: {
                    color: "#00b3f4",
                },
            },
            itemStyle: {
                color: "#00b3f4",
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0,179,244,0.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(0,179,244,0)'
                        }
                    ], false),
                    shadowColor: 'rgba(0,179,244, 0.9)',
                    shadowBlur: 20
                }
            },
            data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02, ]
        },

    ]
};