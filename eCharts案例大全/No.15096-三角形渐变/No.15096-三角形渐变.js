option = {
    xAxis: {
        data: ['机关养老保险', '城乡居民养老保险', '企业基本养老保险'],
        axisTick: {
            show: false
        }
    },
    yAxis: {
        show: false,
        splitLine: {
            show: true
        }
    },
    legend: {
        data: ['基金支出', '基金收入']
    },
    animationDurationUpdate: 1200,
    series: [{
        type: 'pictorialBar',
        name: '基金支出',
        symbol: 'triangle',
        symbolSize: ['50%', '100%'],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(249,251,97, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(247,142,28, 1)'
                }])
            }
        },
        label: {
            normal: {
                show: true,
                position: 'top',
                textStyle: {
                    'color': '#FFFFFF'
                }
            }
        },
        data: [{
            value: 2.2,
        }, {
            value: 2.1,
            symbolPatternSize: 800
        }, {
            value: 2.5,
            symbolPatternSize: 100
        }]
    }, {
        type: 'pictorialBar',
        name: '基金收入',
        symbol: 'triangle',
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        label: {
            normal: {
                show: true,
                position: 'top',
                textStyle: {
                    'color': 'red'
                }
            }
        },
        symbolSize: ['50%', '100%'],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0,255,230, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(0,124,198, 1)'
                }])
            }
        },
        barGap: '-60%', // Make series be overlap
        data: [{
            value: 3.3,
        }, {
            value: 3.7,
            symbolPatternSize: 800
        }, {
            value: 3.9,
            symbolPatternSize: 100
        }]
    }]
};