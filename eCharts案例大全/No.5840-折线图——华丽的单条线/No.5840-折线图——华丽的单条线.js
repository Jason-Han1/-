option = {
    title: {
        text: '折线图——华丽的单条线'
    },
    color: ['#3F94E5', '#42CA8D', '#4963CD', '#F6CD4A', '#E36641'],
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#13CAD2',
                width: 1
            }
        }
    },
    calculable: true,
    grid: {
        top: 10,
        bottom: 12,
        left: 24,
        right: 18,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        axisLine: {
            lineStyle: {
                color: '#F9F9F9'
            }
        },
        axisLabel: {
            showMaxLabel: true,
            color: 'rgba(0,0,0,0.65)',
            fontSize: 12
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        min: 97.21
    },
    series: [{
        data: [99.45, 99.56, 99.67, 99.22, 100, 99.92, 99.21, 99.92, 99.92, 99.61, 99.96, 99.39],
        name: 'A标准',
        type: 'line',
        valueType: 'percent',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        itemStyle: {
            normal: {
                color: '#13CAD2'
            },
            emphasis: {
                color: '#fff',
                borderColor: '#13CAD2',
                extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                borderWidth: 2
            }
        },
        areaStyle: {
            normal: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [{
                            offset: 0,
                            color: '#13CAD2'
                        },
                        {
                            offset: 1,
                            color: '#fff'
                        }
                    ]
                }
            }
        }
    }]
}