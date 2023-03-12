option = {
    xAxis: {
        boundaryGap: false,
        axisTick: {
            alignWithLabel: true,
            lineStyle: {
                color: "rgba(255,255,255,.5)"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.5)"
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.5)",
                width: 2
            }
        },
        axisLabel: {
            color: "rgba(255,255,255,.5)",
            fontSize: 18
        },
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    series: [{
        type: 'line',
        color: "#8ef9db",
        symbolSize: 0,
        smooth: true,
        lineStyle: {
            width: 3,
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#fff' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#01e6a6' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
            shadowColor: '#8ef9db',
            shadowBlur: 5
        },
        markPoint: {
            itemStyle:{
                color:"rgba(255,255,255,0)"
            },
            data: [{
                name: '最大值',
                type: 'max'
            }]
        },
        data: [220, 182, 191, 234, 290, 330, 310]
    }]
};