option = {
    backgroundColor: '#020933',
    width: 340,
    height: 235,
    title: {
        // text: '会员积分总额变化趋势',
        x: 'center',
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
        itemHeight: 10,
        itemGap: 13,
        data: ['统一平台', '零售百货', '家居', '旅游'],
        top: '8%',
        left:'60',
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        }
    },
    grid: {
        left: '2%',
        right: '5%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: 'white'
            }
        },
        axisLabel:{
          color:'white',  
        },
        data: ['周三', '周四', '周五', '周六', '周日', '周一', '周二']
    }],
    yAxis: [{
        type: 'value',
        name: '增长人数（万）',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'white'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#57617B'
            }
        }
    }],
    series: [{
        name: '统一平台',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(253, 124, 41, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(253, 124, 41, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(253, 124, 41)'
            }
        },
        data: [6.3, 6.4, 7.5, 5.6, 8.1, 4.8, 9.6]
    }, {
        name: '零售百货',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(111, 180, 64, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(111, 180, 64, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(111, 180, 64)'
            }
        },
        data: [7.3, 9.2, 9.3, 10.0, 9.6, 0.6, 0.0]
    }, {
        name: '家居',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(5, 179, 250, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(5, 179, 250, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(5, 179, 250)'
            }
        },
        data: [4.2, 1.0, 7.5, 2.1, 3.7, 8.5]
    }, {
        name: '旅游',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(249, 196, 6, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(249, 196, 6, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(249, 196, 6)'
            }
        },
        data: [1.0, 4.0, 7.5, 2.1, 3.7,8.5, 11.9]
    }, ]
};