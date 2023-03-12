option = {
    legend: {
        show: true,
        selectedMode: false, //取消图例上的点击事件
        data: ['指标', '历史平均值']
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        axisLine: {
            lineStyle: {
                color: "#999"
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: "#999",
                fontSize: 14
            },
            margin: 20
        },
        splitLine: {
            show: false,
        },
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    },
    yAxis: [{
            type: 'value',
            color: "#999",
            axisTick: {
                "show": false
            },
            splitLine: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: "#999"
                }
            },

        },
        {
            type: 'value',
            name: "（%）",
            max: 100,
            color: "#999",
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: "#999"
                }
            },

        }
    ],
    series: [{
        name: '指标',
        tooltip: {
            show: true
        },
        type: 'bar',
        barWidth: '100%',
        data: [4200, 2220, 3910, 5340, 1597,1111, 2220, 3910, 4520, 4210,2150, 2220, 3910, 3255, 3288,2150, 2220, 2222, 1111, 4510,2150, 2220, 3910, 4952, 2420,2150, 2220, 3244, 5040, 3333,1253],
        barGap: 0,
        markLine: {
            // symbol: 'none',
            silent: true,
            lineStyle: {
                normal: {
                    type: 'dashed'
                }
            },
            data: [{
                    yAxis: 2500,
                    lineStyle: {
                        width: 1.5,
                        color: 'yellow'
                    },
                    // label: { show: false }
                },
                {
                    yAxis: 4000,
                    lineStyle: {
                        width: 1.5,
                        color: 'green'
                    },
                    // label: { show: false }
                }
            ]
        },
        legendHoverLink: false,
    }, {
        name: '历史平均值',
        type: 'line',
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                color: "#38e"
            }
        },
        data: [10, 20, 36, 40, 56, 2, 5, 8, 87, 57, 4, 7, 2, 4, 2, 5, 85, 4, 44, 7, 4, 44, 57, 28, 78, 95, 95, 65, 65, 30]
    }]
};