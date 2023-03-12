option = {
    backgroundColor: '#424956',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        },
        formatter: function(params) {
            return params[0].name + "<br>" + params[0].data + '%'
        }

    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#053367',
                width: 2
            }
        },
        axisTick: {
            show: false
        },
        data: ['06.20', '06.21', '06.22', '06.23', '06.24', '06.25', '06.26', ]
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            },
            formatter: '{value}%'
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#65F5FD',
                // fontSize:33
            }
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#385B71'
            }
        },
        axisTick: {
            show: false
        },
    }],
    series: [{
        // name: '移动',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 3
            }
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: 'rgba(84,91,255,1)'
                }, {
                    offset: 1,
                    color: 'rgba(8,210,255,1)'
                }]),
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: 'rgba(8,210,255,0)'

                        }, {
                            offset: 0.5,
                            color: 'rgba(8,210,255,0.05)'

                        },
                        {
                            offset: 1,
                            color: 'rgba(84,91,255,0.2)'
                        }
                    ]),
                },
            },
            emphasis: {
                color: 'rgb(0,196,132)',
                borderColor: 'rgba(0,196,132,0.2)',
                extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                borderWidth: 10
            }
        },
        data: [100, 82, 91, 34, 50, 20, 10, ]
    }]
};