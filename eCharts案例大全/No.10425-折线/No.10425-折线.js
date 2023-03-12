option = {
    backgroundColor: "#162436",
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
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
                 color: '#999999',
            
            },
          
        },
         axisLabel: {
                        inside: false,
                        textStyle: {
                            color: '#999999',// x轴颜色
                            fontWeight: 'normal',
                            fontSize: '19',
                            lineHeight: 22
                        }

                    },
        
        data: ['07/28', '07/29', '07/30', '07/31', '08/01', '08/02', '08/03']
    }],
    yAxis: [{
        type: 'value',
        name:'',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#999999',
                
                opacity: 0,
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 19
            }
        },
        splitLine: {
            lineStyle: {
                color: '#121b26',
                type: 'dashed',
                width: 2,
                
            }
        }
    }],
    series: [{
        name: '一',
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
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: 'rgba(16,97,204, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(17,235,210, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
       itemStyle: {
                normal: {
                    
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(16,97,204,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(17,235,210,1)'
                    }])
                },
                emphasis: {
                color: 'rgb(0,196,132)',
                borderColor: 'rgba(0,196,132,0.2)',
                extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                borderWidth: 10
            }
            },
        data: [220, 182, 191, 134, 150, 120, 110, 125 ]
    }, {
        name: '二',
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
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(205,52,42, 0.5)'
                }, {
                    offset: 0.8,
                    color: 'rgba(235,235,21, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            },
        },
       itemStyle: {
                normal: {
                     
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 0,
                        color: '#ffa800'
                    }, {
                        offset: 1,
                        color: 'rgba(235,235,21,1)'
                    }])
                },
                emphasis: {
                color: 'rgb(99,250,235)',
                borderColor: 'rgba(99,250,235,0.2)',
                extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                borderWidth: 10
            }
            },
        data: [120, 110, 125, 145, 122, 165, 122, 220]
    }  ]
};