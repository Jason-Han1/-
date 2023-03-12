option = {
    backgroundColor: 'rgb(61,38,181)',
    xAxis: {
        type: 'value',
        boundaryGap: false,
        max: 900,
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        max: 1500,
        axisLine: {
            lineStyle: {
                color: 'rgb(53,78,208)'
            }
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgb(53,78,208)'
            }
        }
    },
    series: [{
        data: [[0, 300],[150,900],[300,600],[500,1200],[700,560],[900,850]],
        type: 'line',
        symbol: 'none',
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: 'rgba(42,112,167,1)' // 0% 处的颜色
                }, {
                    offset: 1, color: 'transparent' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        },
        lineStyle: {
            itemStyle: {
                color: 'red'  
            },
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowOffsetY: 5,
            shadowBlur: 30,
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                    {
                        offset: 0, color: 'blue' // 0% 处的颜色
                    },
                    {
                        offset: 0.2, color: 'green' // 0% 处的颜色
                    }, 
                    {
                        offset: 0.4, color: 'yellow' // 0% 处的颜色
                    }, 
                    {
                        offset: 0.6, color: 'orange' // 0% 处的颜色
                    }, 
                    {
                        offset: 0.8, color: 'red' // 0% 处的颜色
                    }, 
                    {
                        offset: 1, color: 'pink' // 100% 处的颜色
                    }
                ],
                global: false // 缺省为 false
            },
            width: 20
        },
        smooth: true
    }]
};
