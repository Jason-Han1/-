option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    grid: {
        top: 80,
        left: 50,
        bottom: 60,
        right: 60
    },
    legend: {
        top: '0%',
        right: '2%',
        textStyle: {
            fontSize: 12,
            color: '#808080'
        },
        data: ['标签当日标记数量', '标签活跃量']
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#4D4D4D',
            fontSize: 14,
            margin: 21,
            fontWeight: 'bold'
        },
        data: ['06-01', '06-02', '06-03', '06-04', '06-05', '06-06', '06-07', '06-08', '06-09', '06-10', '06-11', '06-12'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
            name: '单位：万',
            nameTextStyle: {
                color: '#808080',
                fontSize: 12,
                padding: [0, 0, 0, -25]
            },
            max: function(value) {
                if (value.max < 5) {
                    return 5
                } else {
                    return value.max
                }
            },
            type: 'value',
            axisLine: {
                show: false
            },
            axisLabel: {
                color: '#808080',
                fontSize: 12,
                margin: 5
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        {
            name: '单位：万',
            nameTextStyle: {
                color: '#808080',
                fontSize: 12,
                padding: [0, -18, 0, 0]
            },
            max: function(value) {
                if (value.max < 5) {
                    return 5
                } else {
                    return value.max
                }
            },
            type: 'value',
            axisLine: {
                show: false
            },
            axisLabel: {
                color: '#808080',
                fontSize: 12,
                margin: 5
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }
    ],
    series: [{
            name: '标签当日标记数量',
            type: 'bar',
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#CCE2FF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#3D8BF0' // 100% 处的颜色
                    }]
                }
            },
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name: '标签活跃量',
            type: 'line',
            smooth: true,
            lineStyle: {
                color: '#FBBA53',
                width: 3
            },
            showSymbol: false,
            itemStyle: {
                color: "#FBBA53",
                borderWidth: 2
            },
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};