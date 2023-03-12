var xData = ['当期登记数','线上办理数','领取发票数'];
var yData = [359,327,96];
option = {
    backgroundColor: "#fff",
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                opacity: 0
            }
        },
        formatter: function(prams) {
            return "办理数：" + prams[0].data
        }
    },
    grid: {
        left: '10%',
        right: '20%',
        bottom: '13%',
        top: '7%',
        //height: '85%',
        containLabel: true,
        z: 22
    },
    xAxis: [{
        type: 'category',
        gridIndex: 0,
        data: xData,
        
        axisLine: {
            lineStyle: {
                color: '#0c3b71'
            },
            show:false
        },
        axisLabel: {
            show: true,
            color: '#080808',
            fontSize: 16
        }
    }],
    yAxis: [{
            type: 'value',
            gridIndex: 0,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#0c3b71'
                },
                 show: false
            },
            axisLabel: {
                color: 'rgb(170,170,170)',
                formatter: '{value}',
                show:false
            }
        },
        {
            type: 'value',
            gridIndex: 0,
            splitNumber: 12,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
                }
            }
        }
    ],
    series    : [{
    name      : '办理数',
    type      : 'bar',
    barWidth  : '32%',
    xAxisIndex: 0,
    yAxisIndex: 0,
    label     : {
    normal    : {
    show      : true,
    position  : "top",
    textStyle : {
    color     : "#ffc72b",
    fontSize  : 20
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00feff'
                            },
                            {
                                offset: 0.5,
                                color: '#027eff'
                            },
                            {
                                offset: 1,
                                color: '#0286ff'
                            }
                        ]
                    )
                }
            },
            data: yData,
            zlevel: 11

        },
        {
            name: '背景',
            type: 'bar',
            barWidth: '45%',
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: '-135%',
            data: [100, 100, 100],
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            zlevel: 9
        },

    ]
};