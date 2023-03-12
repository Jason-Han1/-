option = {
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
    legend: {
        textStyle: {
            color: '#333'
        },
        x:'right',
        y:'top',
        padding:[10,50,0,0]
    },
    xAxis: [{
        show: true,
        type: 'category',
        interval: 0,
        axisLine: {
            show: true
        },
        splitArea: {
            color: '#f00',
            lineStyle: {
                color: '#f00'
            },
        },
        axisLabel: {
            color: '#333'
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,
        data: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],

    }],
    grid: {
        x: '5%',
        y: '5%',
        x2: '5%',
        y2: '6%',
        borderWidth: 1
    },
    yAxis: [{
        type: 'value',
        min: 0,
        splitNumber: 4,
        splitLine: {
            lineStyle: {
                color: "#E9E9E9"
            }
        },
        axisLine: {
            show: true,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#333',
            },
        },
        axisTick: {
            show: true,
        },
    }],
    series: [{
            name: '昨日',
            type: 'line',
            stack: '总量',
            smooth: true,
            showAllSymbol: false,
            symbol: 'circle',
            symbolSize: 2,
            lineStyle: {
                normal: {
                    color: "#9eeb8d",
                },
            },
            itemStyle: {
                color: "#9eeb8d",
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(158,246,145,0.9)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(158,246,145,0.2)'
                        }
                    ], false),
                }
            },
            data: [2500, 2510, 2520, 2490, 2495, 2505, 2510, 2495, 2500, 2508, 2499, 2515, 2525, 2488, 2546, 2499, 2515, 2525, 2488, 2546, 2499, 2515, 2525, 2488]
        },
        {
            name: '今日',
            type: 'line',
            stack: '总量',
            smooth: true,
            showAllSymbol: false,
            symbol: 'circle',
            symbolSize: 2,
            lineStyle: {
                normal: {
                    color: "#f48f54",
                },
            },
            itemStyle: {
                color: "#f48f54",
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(244,143,84,0.9)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(244,143,84,0.2)'
                        }
                    ], false),
                }
            },
            data: [2500, 2510, 2520, 2490, 2495, 2505, 2510, 2495, 2500, 2508, 2499, 2515, 2525, 2488, 2546, 2499, 2515, 2525, 2488, 2546, 2499, 2515, 2525, 2488]
        },
    ]
};