option = {
    backgroundColor: "#344b58",
    xAxis: {
        type: 'category',
        data: ['1', '5', '10', '15', '20', '25', '30'],
        axisTick: false,
        boundaryGap: false,
 
        axisLabel: {
            textStyle: {
                color: 'blank',
                fontSize: 18
            },
            margin: 16
        },
        axisLine: {
            lineStyle: {
                width: 3,
                color: 'rgba(108, 144, 175, .5)'
            }
        }
    },
    grid: {
        left: '8%',
        top: '7%',
        right: '4%'
    },
    tooltip: {
        trigger: 'axis',

        // showContent: false
    },
    yAxis: {
        type: 'value',
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
                color: 'rgba(255,255,255,.8)',
                fontSize: 22
            },
            margin: 24
        }
    },
    series: [{
        data: [100, 200, 150, 88, 120, 240, 100],
        type: 'line',
        symbol: 'circle',
        symbolSize: 13,
        showSymbol: false,
        smooth:true,
        itemStyle: {
            color: 'rgba(56, 248, 255, 1)',
            borderColor: 'rgba(56, 248, 255, 0.2)',
            borderWidth: 18
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
                    color: 'rgba(56, 248, 255, 1)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(56, 248, 255, 1)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
            width: 3
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
                    color: 'rgba(56, 248, 255, .4)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(56, 248, 255, 0)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }
    }]
};