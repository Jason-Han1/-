option = {
    backgroundColor: 'black',
    grid: {
        left: '0%',
        right: '4%',
        top: '20%',
        bottom: '10%',
        containLabel: true
    },
    tooltip: {
        show: true,
        trigger: 'item'
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255, 255, 255, .1)'
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255, 255, 255, .1)'
            }
        },
        data: ['3月', '4月', '5月', '6月', '7月', '8月']
    }],
    yAxis: [{
        type: 'value',
        name: '万元',
        min: 0,
        max: 200,
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: '#fff'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#11366e'
            }
        }
    }],
    series: [{
        type: 'line',
        symbol: 'circle',
        smooth: true,
        symbolSize: 8,
        itemStyle: {
            normal: {
                color: 'white',
                label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                        color: 'white',
                        fontSize: 10
                    },
                },
                lineStyle: {
                    //右/下/左/上
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(1,255,156,0.2)'
                    }, {
                        offset: 0.54,
                        color: 'rgba(81,103,249,0.54)'
                    }, {
                        offset: 1,
                        color: 'rgba(178,93,255,0.9)'
                    }]),
                    width: 1
                },
                areaStyle: {
                    //右/下/左/上
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(1,255,156,0.2)'
                    }, {
                        offset: 0.4,
                        color: 'rgba(81,103,249,0.6)'
                    }, {
                        offset: 1,
                        color: 'rgba(178,93,255,0.9)'
                    }]),
                }
            }
        },
        markPoint: {
            itemStyle: {
                normal: {
                    color: 'red'
                }
            }
        },
        data: [122, 54, 100, 68, 140, 200]
    }]
};