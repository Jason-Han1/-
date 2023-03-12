option = {
    backgroundColor: '#394056',
    title: {
        text: '北京2009年-2016年空气质量情况',
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
        data: ['PM2.5<100 Good','\n' ,'PM2.5 100-300 Pollution', '\n','Pm2.5>300 Terrible'],
        right: '4%',
        textStyle: {
            fontSize: 12,
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
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        data: ['2009','2010','2011','2012','2013','2014','2015','2016']
    }, {
        axisPointer: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisTick: {
            show: false
        },

        position: 'bottom',
        offset: 20,
        data: ['', '', '', '', '', '', '', '', '', '', {
            value: '',
            textStyle: {
                align: 'left'
            }
        }, '']
    }],
    yAxis: [{
        type: 'value',
        name: '单位：天',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        },
        splitLine: {
            lineStyle: {
                color: '#57617B'
            }
        }
    }],
    series: [{
        name: 'PM2.5<100 Good',
        type: 'line',
        smooth: true,
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
                    color: 'rgba(137, 189, 27, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(137, 189, 27, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(137,189,27)',
                borderColor: 'rgba(137,189,2,0.27)',
                borderWidth: 12

            }
        },
        data:[237,222,223,230,231,230,266,282



]

    }, {
        name: 'PM2.5 100-300 Pollution',
        type: 'line',
        smooth: true,
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
                    color: 'rgba(0, 136, 212, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 136, 212, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,136,212)',
                borderColor: 'rgba(0,136,212,0.2)',
                borderWidth: 12

            }
        },
        data: [124,133,134,134,119,120,91,79


]
    }, {
        name: 'Pm2.5>300 Terrible',
        type: 'line',
        smooth: true,
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
                    color: 'rgba(219, 50, 51, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(219, 50, 51, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {

                color: 'rgb(219,50,51)',
                borderColor: 'rgba(219,50,51,0.2)',
                borderWidth: 12
            }
        },
        data: [4,10,8,2,15,15,8,5




]
    }, ]
};