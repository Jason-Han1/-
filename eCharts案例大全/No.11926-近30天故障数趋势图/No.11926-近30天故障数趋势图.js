option = {
    backgroundColor: '#202632',
    title: {
        text: '近30天故障数趋势图',
        fontSize: 16,
        left: '50%',
        textAlign: 'center',
        color: '#434857',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#ddd'
            }
        },
        backgroundColor: '#fff',
        padding: [5, 10],
        textStyle: {
            color: '#333',
        },
        extraCssText: 'box-shadow: 0 6px 8px 0 rgba(0,0,0,0.10), inset 0 2px 0 0 rgba(255,255,255,0.13);'
    },
    xAxis: {
        type: 'category',
        data: ['00:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', "22:00"],
        boundaryGap: false,
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                color: ['#434857'],
                type: 'dashed'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#434857'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12
            }
        },
        axisPointer: {
            type: 'line',
             lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                color: ['#434857'],
                type: 'dashed'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#434857'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12
            }
        }
    },
    series: [{
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 10,
        data: ['1200', '1400', '1008', '1411', '1026', '1288', '1300', '800', '1100', '1000', '1118', '1322'],
        itemStyle: {
            normal: {
                color: '#fff',
                lineStyle: {
                    width: 3,
                    color: {
                        colorStops: [{
                            offset: 0,
                            color: '#7AB7F2' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#3B8EF5' // 100% 处的颜色
                        }],
                    }

                }
            }
        },
    }]
};