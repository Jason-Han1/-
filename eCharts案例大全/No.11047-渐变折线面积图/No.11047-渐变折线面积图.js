option = {
    backgroundColor: "#344b58",
    xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月'],
        axisTick: false,
        axisLabel: {
            textStyle: {
                  color: 'rgba(255,255,255,1)',
                fontSize: 18
            }
        },
        axisLine: {
            lineStyle: {
                width: 2,
                color: 'rgba(255,255,255,1)',
            }
        }
    },
    tooltip: {
        trigger: 'axis',
        showContent: false
    },
    yAxis: {
        type: 'value',
        axisTick: false,
        splitLine: false,
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: 'rgba(255,255,255,1)',
                fontSize: 18
            }
        }
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330],
        type: 'line',
        symbol: 'circle',
        symbolSize: 18,
        showSymbol: false,
        itemStyle: {
            color: '#81C8FF'
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
                    color: '#614CFFFF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#00F1FFFF' // 100% 处的颜色
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
                    color: 'rgba(5,230,253,0.5)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(5,230,253,0)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        },
        markLine: {
            symbolSize: [10, 20],
            symbol: ['none', 'rect'],
            label: {
                show: true,
                distance: 15
            },
            data: [{
                    name: 'Y 轴值为 100 的水平线',
                    yAxis: 100,
                    type: 'none',
                    lineStyle: {
                        color: '#FF1800'
                    }

                },
                {
                    name: 'Y 轴值为 400 的水平线',
                    yAxis: 400,
                    type: 'none',
                    lineStyle: {
                        color: '#FFDE00FF'
                    }
                },
                {
                    name: 'Y 轴值为 700 的水平线',
                    yAxis: 700,
                    type: 'none',
                    lineStyle: {
                        color: '#00FFD2'
                    }
                },
            ],
            lineStyle: {
                width: 2,
                color: 'blank'
            }
        }
    }]
};