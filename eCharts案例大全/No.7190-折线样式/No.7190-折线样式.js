option = {
    backgroundColor: "#344b58",
    xAxis: {
        type: 'category',
        data: [1, 5, 10, 15, 20, 25, 30],
        axisTick: false,
        boundaryGap: false,
        name: '(日)',
        axisLabel: {
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontWeight: 'bold',
                fontSize: 16
            },
            // margin: 16
        },
        nameTextStyle: {
            padding: [7, 0, 0, -2],
            fontSize: 16,
            fontWeight: 'bold',
            color: 'rgba(255,255,255,.5)',
            verticalAlign: 'top'
        },
        axisLine: {
            lineStyle: {
                width: 3,
                color: 'rgba(108, 144, 175, .5)'
            }
        }
    },
    grid: {
        left: '10%',
        top: '10%',
        right: '10%'
    },
    tooltip: {
        trigger: 'axis',

        // showContent: false
    },
    yAxis: {
        type: 'value',
        name: '( 件 )',
        nameTextStyle: {
            padding: [0, 40, 0, 0],
            fontSize: 16,
            fontWeight: 'bold',
            color: 'rgba(255,255,255,.5)',
            verticalAlign: 'middle'
        },
        axisTick: false,
        splitLine: false,
        axisLine: {
            lineStyle: {
                width: 3,
                color: 'rgba(108, 144, 175, .5)'
            }
        },
        axisLabel: {
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: 16,
                fontWeight: 'bold',
            },
            // margin: 24
        },
    },
    series: [{
            data: [100, 200, 150, 88, 120, 240, 100, 200, 150, 88, 120, 240],
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,
            showSymbol: false,
            itemStyle: {
                color: 'rgba(0, 204, 255, 1)',
                borderColor: 'rgba(0, 204, 255, .3)',
                borderWidth: 10
            },
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 204, 255, 1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(0, 204, 255, 1)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                width: 4
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 204, 255, .2)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(0, 204, 255, 0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        {
            data: [20, 40, 24, 50, 124, 44, 262, 20, 67, 89, 100, 130],
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,
            showSymbol: false,
            itemStyle: {
                color: 'rgba(0, 255, 198, 1)',
                borderColor: 'rgba(0, 255, 198, .3)',
                borderWidth: 10
            },
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(5, 255, 234, 1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(5, 255, 234, 1)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                width: 4
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(5, 255, 234, .2)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(5, 255, 234, 0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        }
    ]
}