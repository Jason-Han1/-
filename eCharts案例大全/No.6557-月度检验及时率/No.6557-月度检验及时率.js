
const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']
option = {
    backgroundColor: '#18202D',
    title: {
        text: '月度检验及时率',
        textStyle: {
            fontSize: 12,
            fontWeight: 400
        },
        left: 'center',
        top: '5%'
    },
    legend: {
        icon: 'circle',
        top: '5%',
        right: '5%',
        itemWidth: 6,
        itemGap: 20,
        textStyle: {
            color: '#fff',
            fontSize: 28
        },
        // data: data.legendData,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            label: {
                show: true,
                backgroundColor: '#fff',
                color: '#556677',
                borderColor: 'rgba(0,0,0,0)',
                shadowColor: 'rgba(0,0,0,0)',
                shadowOffsetY: 0
            },
            lineStyle: {
                width: 0
            }
        },
        backgroundColor: '#fff',
        textStyle: {
            color: '#5c6c7c'
        },
        padding: [10, 10],
        extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
    },
    grid: {
        top: '15%'
    },
    xAxis: [{
        type: 'category',
         name: '月份',
         nameTextStyle: {
            color: '#fff',
            fontSize: 24,
         },
        data: ['201910', '201911','201912', '202001', '202002', '202003', '202004', '202005', '202006', '202007', '202008'],
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        // axisTick: {
        //     show: false
        // },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#fff'
            },
            // 默认x轴字体大小
            fontSize: 12,
            // margin:文字到x轴的距离
            margin: 15
        },
    }],
    yAxis: [{
        type: 'value',
         name: '及时率',
         nameTextStyle: {
            color: '#fff',
            fontSize: 24,
         },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
            name: '来料',
            type: 'line',
            data: [10, 10, 12, 12, 15, 3, 7, 9, 11,12, 16],
            symbolSize: 1,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            lineStyle: {
                width: 5,
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#9effff'
                    },
                    {
                        offset: 1,
                        color: '#9E87FF'
                    }
                ]),
            },
            itemStyle: {
                normal: {
                    color: colorList[0],
                    borderColor: colorList[0]
                }
            }
        }, {
            name: '部件',
            type: 'line',
            data: [5, 12, 11, 14, 25, 16, 10,12, 15, 18, 21],
            symbolSize: 1,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            lineStyle: {
                width: 5,
                color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                        offset: 0,
                        color: '#73DD39'
                    },
                    {
                        offset: 1,
                        color: '#73DDFF'
                    }
                ]),
            },
            itemStyle: {
                normal: {
                    color: colorList[1],
                    borderColor: colorList[1]
                }
            }
        },
        {
            name: '整机',
            type: 'line',
            data: [15, 12, 17, 14, 34, 16, 11, 12, 14, 15, 20],
            symbolSize: 1,
            symbol: 'circle',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                width: 5,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#fe9a'
                    },
                    {
                        offset: 1,
                        color: '#fe9a8b'
                    }
                ]),
            },
            itemStyle: {
                normal: {
                    color: colorList[2],
                    borderColor: colorList[2]
                }
            }
        }
    ]
};