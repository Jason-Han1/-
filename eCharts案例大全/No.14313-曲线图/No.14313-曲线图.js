option = {
    backgroundColor: '#192469',
    title: {
        text: '请求数',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#F1F1F3'
        },
        left: '6%'
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
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['移动', '电信', '联通'],
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#292f39'
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
        axisLine: {
            lineStyle: {
                color: '#0483eb'
            }
        },
        data: ['1月', '2月', '3月',  '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月']
    }],
    yAxis: [{
        type: 'value',
        name: '单位（%）',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#0483eb'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12
            }
        },
        splitLine: {
            lineStyle: {
                color: '#17367c'
            }
        }
    }],
    series: [{
        name: '南宁-曼芭',
        type: 'line',
        smooth: false,
        symbolSize:6,
        symbol:'circle',
        lineStyle: {
            normal: {
                width: 2
            },
           
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(112, 161, 250, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(112, 161, 250, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: '#70a1fa'
            }
        },
        data: [2932817,3023035,2633261,2729425,2774320,3126522,4349721,4890531,3717325,3814151,3432112,3464348]
    },
    {
        name: '福建',
        type: 'line',
        smooth: false,
        symbolSize:6,
        symbol:'circle',
        lineStyle: {
            normal: {
                width: 2
            },
           
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(250, 149, 50, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(250, 149, 50, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: '#fa952c'
            }
        },
        data: [1039472,1266759,1184840,1337331,1373679,1525785,2132902,2652928,2058978,2221425,2212110,2488233]
    },]
};