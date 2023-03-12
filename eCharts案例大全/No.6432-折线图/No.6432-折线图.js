option = {
    grid: {
        top: 30,
        right: 20,
        bottom: 40,
        left: 50
    },
    tooltip: {
        show: true,
        trigger: "axis",
        formatter: '{b}：{c}个',
        axisPointer: {
            lineStyle: {
                type: 'dashed',
                color: 'rgba(71, 158, 255,0.8)'
            }
        }
    },
    xAxis: [{
        type: 'category',
        data: ["2015年", '2016年', '2017年', '2018年', '2019年', '2020年'],
        boundaryGap: true,
        axisLabel: {
            color: '#999'
        },
        axisLine: {
            lineStyle: {
                color: '#a9d5ff'
            }
        },
        axisTick: {
            show: false
        }
    }],
    yAxis: [{
        axisLine: {
            show: true,
            lineStyle: {
                color: '#c2e3ff'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#e2e2e2'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    }, {
        name: '单位：个',
        nameTextStyle: {
            padding: [0, 30, 0, 0],
            color: '#666'
        },
        axisLine: {
            show: false
        },
    }],
    series: [{
        type: 'line',
        showSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 12,
        yAxisIndex: 0,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                    [{
                            offset: 0,
                            color: 'rgba(71, 158, 255,0)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(71, 158, 255,0.2)'
                        }
                    ],
                    false
                )
            }
        },
        itemStyle: {
            normal: {
                color: '#479eff',
                shadowColor: 'rgba(86,120,230,0.6)',
                shadowBlur: 5,
                shadowOffsetX: 4,
                shadowOffsetY: 2
            }
        },
        lineStyle: {
            shadowColor: 'rgba(86,120,230,0.6)',
            shadowBlur: 5,
            shadowOffsetX: 4,
            shadowOffsetY: 2
        },
        data: [12, 45, 354, 78, 3, 674]
    }]
};