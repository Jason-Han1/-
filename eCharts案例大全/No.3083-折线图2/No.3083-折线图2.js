option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 255, 233,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 233,0)'
                    }],
                    global: false
                }
            },
        },
    },
    legend: {
        textStyle: {
            color: '#333'
        },
        x:'right',
        y:'top',
        padding:[10,50,0,0]
    },
    xAxis: [{
        show: true,
        type: 'category',
        interval: 0,
        axisLine: {
            show: true
        },
        splitArea: {
            color: '#f00',
            lineStyle: {
                color: '#f00'
            },
        },
        axisLabel: {
            color: '#333'
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,
        data: ['2021-06-14', '2021-06-15', '2021-06-16', '2021-06-17', '2021-06-18'],
    }],
    grid: {
        x: '5%',
        y: '5%',
        x2: '5%',
        y2: '6%',
        borderWidth: 1
    },
    yAxis: [{
        type: 'value',
        min: 0,
        splitNumber: 4,
        splitLine: {
            lineStyle: {
                color: "#E9E9E9"
            }
        },
        axisLine: {
            show: true,
        },
  
        axisLabel:{
            formatter: function (value) {
                return value+'.00%'
            },
            textStyle: {
                color: '#333',
            },
        },
        axisTick: {
            show: true,
        },
        
    }],
    series: [
         {
            name: '异常',
            type: 'line',
            stack: '总量',
            smooth: true,
            showAllSymbol: false,
            symbol: 'circle',
            symbolSize: 2,
            lineStyle: {
                color: '#9E87FF'
            },
            itemStyle: {
                normal: {
                    color: '#9E87FF',
                    borderColor: '#9E87FF'
                }
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(158,135,255,0.9)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(158,135,255,0.2)'
                        }
                    ])
            },
            data: [100, 100, 100, 100, 100]
        },
         {
            name: '无抓拍',
            type: 'line',
            stack: '总量',
            smooth: true,
            showAllSymbol: false,
            symbol: 'circle',
            symbolSize: 2,
            lineStyle: {
                color: '#73DEB3'
            },
            itemStyle: {
                normal: {
                    color: '#73DEB3',
                    borderColor: '#73DEB3'
                }
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(115,222,179,0.9)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(115,222,179,0.2)'
                        }
                    ])
            },
            data: [150, 130, 140, 120, 150]
        },{
            name: '抓拍量较少',
            type: 'line',
            stack: '总量',
            smooth: true,
            showAllSymbol: false,
            symbol: 'circle',
            symbolSize: 2,
            lineStyle: {
                normal: {
                    color: "#f48f54",
                },
            },
            itemStyle: {
                color: "#f48f54",
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(244,143,84,0.9)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(244,143,84,0.2)'
                        }
                    ], false),
                }
            },
            data: [25, 25, 25, 25, 25]
        },
        {
            name: '抓拍量突降',
            type: 'line',
            stack: '总量',
            smooth: true,
            showAllSymbol: false,
            symbol: 'circle',
            symbolSize: 2,
            lineStyle: {
                color: '#fe9a8b'
            },
            itemStyle: {
                normal: {
                    color: '#fe9a8b',
                    borderColor: '#fe9a8b'
                }
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(254,154,139,0.9)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(254,154,139,0.2)'
                        }
                    ])
            },
            data: [50, 50, 50, 50, 50]
        },
        {
            name: '车道异常',
            type: 'line',
            smooth: true,
            stack: '总量',
            showAllSymbol: false,
            symbol: 'circle',
            symbolSize: 2,
            lineStyle: {
                color: '#73A0FA'
            },
            itemStyle: {
                normal: {
                    color: '#73A0FA',
                    borderColor: '#73A0FA'
                }
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(115,160,250,0.9)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(115,160,250,0.2)'
                        }
                    ])
            },
            data: [150, 160, 100, 125, 160]
        }
    ]
};