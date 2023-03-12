option = {
    backgroundColor: '#020B14',
    title: {
        text: '警情数量(起)',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 26,
            color: '#F1F1F3'
        },
        left: '2%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
        icon: "123",
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 18,
        // data: ['全部类型', '刑事', '治安','求助'],
        data:[
            {
                name:"全部类型",
                icon:''
            },
             {
                name:"刑事",
                icon:''
            },
             {
                name:"治安",
                icon:''
            },
             {
                name:"求助",
                icon:''
            },
            ],
        right: '4%',
        textStyle: {
            fontSize: 22,
            color: '#F1F1F3'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
         axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#243346'
            }
        },
         axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 20,
                color:'#ccc'
            }
        },
        data: ['0-1', '2-3', '4-5', '6-7', '8-9', '10-11','12-13','14-15','16-17','18-19','20-21','22-23']
    }],
    yAxis: [{
        type: 'value',
        name: '单位（%）',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#020B14'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 20,
                color:'#ccc'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#131F2C',
                 type:'dashed'
            }
        }
    }],
    series: [{
        name: '全部类型',
        type: 'line',
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 234, 235, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 234, 235, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: '#00E9EA',
                borderColor: 'rgba(137,189,2,0.27)',
                borderWidth: 12

            }
        },
        data: [35, 25, 30, 15, 40, 20, 22, 28, 30, 15, 19, 22]
    }, {
        name: '刑事',
        type: 'line',
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(242,166,7, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(242,166,7, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(242,166,7)',
                borderColor: 'rgba(0,136,212,0.2)',
                borderWidth: 12

            }
        },
        data: [12, 10, 25, 45, 32, 35, 18, 24, 33, 22, 21, 10]
    }, {
        name: '治安',
        type: 'line',
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0,139,233, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0,139,233, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {

                color: 'rgb(0,139,233)',
                borderColor: 'rgba(219,50,51,0.2)',
                borderWidth: 12
            }
        },
        data: [20, 18, 12, 14, 12, 19, 14, 15, 22, 45, 30, 40]
    },
     {
        name: '求助',
        type: 'line',
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(123,188,101, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(123,188,101, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {

                color: 'rgb(123,188,101)',
                borderColor: 'rgba(219,50,51,0.2)',
                borderWidth: 12
            }
        },
        data: [22, 18, 12, 30, 22, 1, 34, 50, 20, 10, 5, 22]
    },
    ]
};