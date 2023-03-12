let newData = [{
        name: '第一产业',
        sub: 10000,
        fund: 8000,
        revenue: 8000
    },
    {
        name: '第二产业',
        sub: 20000,
        fund: 16000,
        revenue: 16000
    },
    {
        name: '第三产业',
        sub: 30000,
        fund: 30000,
        revenue: 30000
    }
]
option = {
    backgroundColor: "#ffffff",
    grid: {
        top: '100',
        right: '100',
        left: '100',
        bottom: '100' //图表尺寸大小
    },
    legend: {
        textStyle: {
            color: "#909399",
            fontSize: 14
        },
    },
    tooltip: {
        trigger: "axis",
        fontSize: 14,
        formatter: function(val) {
            console.log(val)
            return `<span style="color:#23C3FF;margin-right:5px;">●</span>${val[0].axisValue}<br/>主体数量 : <span style="color:#23C3FF">${newData[val[0]['seriesIndex']].sub}</span><br/>注册资金 : <span style="color:#23C3FF">${newData[val[0]['seriesIndex']].fund}亿</span><br/>税&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp收 : <span style="color:#23C3FF">${newData[val[0]['seriesIndex']].revenue}亿</span>`
        }

    },
    xAxis: {
        type: 'category',
        color: '#303133',
        data: [
            "第一产业",
            "第二产业",
            "第三产业",
        ],
        axisLabel: {
            margin: 10,
            color: '#303133',
            textStyle: {
                fontSize: 14
            },
        },
        axisLine: {
            lineStyle: {
                color: '#EBEEF5',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,

        },
    },
    yAxis: [{
            min: 0,
            max: 120,
            axisLabel: {
                formatter: '{value}亿',
                color: '#EEEEEE',
                textStyle: {
                    fontSize: 14
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#477AA5',
                    type: 'dashed'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
            }
        },
        {
            min: 0,
            max: 30000,
            type: 'value',
            axisLabel: {
                formatter: '{value}',
                color: '#EEEEEE',
                textStyle: {
                    fontSize: 14
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#477AA5',
                    type: 'dashed'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
            }
        }
    ],
    series: [{
            type: 'bar',
            name: "注册资金",
            data: [20, 60, 110, 80, 90],
            barWidth: '16',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(65,159,255,1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(65,159,255,0.1)',
                        },
                    ]),
                    barBorderRadius: [30, 30, 30, 30] //圆角大小
                },
            },
            label: {
                normal: {
                    show: false,
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#333',
                    position: 'top',
                }
            }
        },
        
        {data: [8000, 16000, 20000],
            type: 'line',
            showAllSymbol: true,
            yAxisIndex: 1,
            smooth: true,
            name: '主体数量',
            symbolSize: 8,
            symbol: "circle",
            itemStyle: {
                normal: {
                    color: "#5C41FF",
                },
            },
        }
    ]
};