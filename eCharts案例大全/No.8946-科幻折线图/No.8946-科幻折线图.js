option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    grid: {
        left: '5%',
        right: '10%',
        bottom: '5%',
        top: "15%",
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#00c7ff'
            }
        },
        axisTick: {
            show: false
        },
        data: ['高新区', '花桥镇', '巴城镇', '陆家镇', '周市镇', '千灯镇']
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#00c7ff'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        name: '长住登记人员',
        type: 'line',
        smooth: true,
        // smoothMonotone:"y",
        symbol: 'circle',
        symbolSize: 4,
        showSymbol: true,
        lineStyle: {
            normal: {
                color: "rgba(0,0,0,0)",
                width: 1
            }
        },
        itemStyle: {
            color: "rgba(54,157,225,1)",
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(24,106,209,.7)'
                }, {
                    offset: 0.8,
                    color: 'rgba(54,157,225,.8)'
                }], false),
                shadowColor: "rgba(28,68,127,1)",
                shadowBlur: 10,
                shadowOffsetX: 5
            }
        },
        data: [0, 5000, 5200, 4035, 4500, 5000]
    }]
};