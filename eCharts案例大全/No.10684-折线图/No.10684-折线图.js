option = {
    backgroundColor: '#000',
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        top: '25%',
        left: '5%',
        right: '5%',
        bottom: '10%',
        containLabel: true,
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#34A6D2'
            },
        },
        axisLabel: {
            textStyle: {
                color: '#7CA3CB',
                margin: 15,
            },
        },
        axisTick: {
            show: false,
        },
        data: ['01', '02', '03', '04', '05', '06', '07'],
    }],
    yAxis: [{
        type: 'value',
        min: 0,
        max: 100,
        splitNumber: 5,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#34A6D2'
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            margin: 20,
            textStyle: {
                color: '#6a9cd5',

            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
        name: '人员流失',
        type: 'line',
        smooth: false,
        symbolSize: 0,
        lineStyle: {
            normal: {
                color: "#3deaff"
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(61,234,255, 0.9)'
                    },
                    {
                        offset: 0.7,
                        color: 'rgba(61,234,255, 0.5)'
                    }
                ], false),

                shadowColor: 'rgba(53,142,215, 0.9)',
                shadowBlur: 20
            }
        },
        itemStyle: {
            normal: {
                color: '#02EEFF',
            }
        },
        data: [90, 20, 84, 75, 80, 92, 98]
    }]
};