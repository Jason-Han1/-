option =  {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
    },
    legend: {
        data: [{
            name: '当日账户下降',
            icon: 'circle',
        }, {
            name: '当日账户活跃',
            icon: 'circle',
        }, {
            name: '当日总消耗',
            icon: 'circle',
        }],
        textStyle: {
            fontSize: 16,
            color: '#999'
        },
        right: '10%',
        top:"5%",
        orient: 'vertical'
    },
    grid: [{
        top: '20%'
    }],
    xAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#999',
                type: 'dashed'
            }
        },
        boundaryGap: false,
        data: ["00:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
    },
    yAxis: {
        type: 'value',
        show: false
    },
    series: [{
        name: '当日账户下降',
        data: [3, 8, 3, 8, 3, 8, 3, 8, 3, 8, 3, 8],
        type: 'line',
        smooth: true,
        symbol: 'image://image/circle.svg',
        symbolSize: 8,
        showSymbol: true,
        itemStyle: {
            normal: {
                color: "#16D9F0"
            },
        },
        lineStyle: {
            normal: {
                width: 5
            }
        },
    }, {
        name: '当日账户活跃',
        data: [13, 18, 13, 18, 13, 18, 13, 18, 13, 18, 13, 18],
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        showSymbol: true,
        itemStyle: {
            normal: {
                color: "#BEB7FB"
            },
        },
        lineStyle: {
            normal: {
                width: 5
            }
        },
    }, {
        name: '当日总消耗',
        data: [23, 28, 23, 28, 23, 28, 23, 28, 23, 28, 23, 28],
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        showSymbol: true,
        itemStyle: {
            normal: {
                color: "#F6E518"
            },
        },
        lineStyle: {
            normal: {
                width: 5
            }
        },
    }]
}