option = {
    backgroundColor: '#0F2B5D',
    grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    xAxis: {
        type: 'category',
        // boundaryGap: false,
        data: [],
        triggerEvent: true,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
        }
    },
    series: [{
        data: [2220, 1682, 2791, 3000, 4090, 3230, 2910, 2220, 1682, 2791, 3000, 4090, 3230, 2910],
        type: 'line',
        symbolSize: 0,
        lineStyle: {
            color: "#FFBD31"
        },
        label: {
            show: false,
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
                    color: 'rgba(255,189,49,0.2)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(255,189,49,0.01)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }

    }]
};