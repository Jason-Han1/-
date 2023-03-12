option = {
    backgroundColor: '#080b30',

    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    grid: {
        borderWidth: 0,
        top: 110,
        bottom: 95,
        textStyle: {
            color: "#fff"
        }
    },
    legend: {
        x: '46%',
        top: '11%',
        textStyle: {
            color: '#90979c',
        },
        data: ['实际产值', '计划产值']
    },


    calculable: true,
    xAxis: [{
        type: "category",
        axisLabel: {
            color: '#c9c9c9',
            fontSize: 12
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#c9c9c9'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#15205B'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#15205B'
            }
        },
        axisTick: {
            show: false
        },
        data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"

        ],
    }],

    yAxis: [{
        type: "value",
        splitLine: {
            show: true,
            lineStyle: {
                color: '#15205B'
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#c9c9c9'
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            formatter: '{value}%',
            textStyle: {
                color: '#c9c9c9',
                fontSize: 12
            }
        },

    }],

    series: [{
        name: "实际产值",
        type: "line",
        symbolSize: 8,
        symbol: 'circle',
        itemStyle: {
            color: "#1bcc98",
        },

        data: [56, 39, 72, 39, 88, 45, 25, 20, 41, 80, 45, 55],
    }, {
        name: "计划产值",
        type: "line",
        symbolSize: 8,
        symbol: 'circle',
        itemStyle: {
            color: "#3085ff",
        },

        data: [93, 63, 54, 33, 42, 35, 45, 23, 75, 56, 95, 88]
    }, ]
}