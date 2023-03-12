option = {
    backgroundColor: '#080b30',
    title: {
        text: '排名趋势',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        padding: [2, 10],
        textStyle: {
        fontSize: 10
        }
    },
    grid: {
        top:'12%',
        left: '2%',
        right: '4%',
        bottom: '2%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        // interval:0,
        axisLine: {
            lineStyle: {
                width: 1,
                color:'#9AA1A9',
            }
        },
        axisTick: {
            show: true,
            alignWithLabel: false,
            lineStyle: {
                width:1
            }
        },
        axisLabel: {
            textStyle: {
                fontSize: 9
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,0.2)"
            }
        },
        data: ['19/07','19/08','19/09','19/10','19/11','19/12','20/01','20/02','20/03','20/04','20/05','20/06']
    },
    yAxis: {
        type: 'value',
        name: ' ',
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,0.2)"
          }
        },
        axisLabel: {
          textStyle: {
            fontSize: 9
          }
        },
        axisLine: {
          lineStyle: {
            width: 0,
            color:'#9AA1A9',
          }
        },
        axisTick: {
          lineStyle: {
          }
        },
    },
    series: [{
        type: 'line',
        symbol: 'circle',
        symbolSize: 6,
        smooth: true,
        animationDuration: 2000,
        itemStyle: {
            normal: {
                color: '#6395AE ', 
                shadowColor: "rgba(0, 0, 0, .12)", 
            }
        },
        lineStyle: {
            normal: {
                width: 2,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10, 
                shadowOffsetY: 10
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(98,127,142,0.9)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(98,127,142,0)'
                    }
                ], false),
                shadowColor: 'rgba(98,127,142, 0.9)',
                shadowBlur: 20
            }
        },
        data: [1, 11, 14, 9, 7, 12, 8, 3, 12, 9, 16, 12]
    }]
}
