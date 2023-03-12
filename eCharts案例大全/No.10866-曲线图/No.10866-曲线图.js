option = {
    backgroundColor: '#394056',

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    color:['#A12CDD','#0163F8','#47FFFF'],
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['工作量1', '工作量2','工作量3'],
        textStyle: {
            fontSize: 12,
            color: '#FFFFFF'
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
            show:false,
            lineStyle: {
                color: '#FFFFFF'
            }
        },
        data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30']
    }],
    yAxis: [{
        type: 'value',
        name: '单位（%）',
        axisTick: {
            show: false
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: '#FFFFFF'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        },
        splitLine: {
            show:false,
            lineStyle: {
                color: '#F03738'
            }
        }
    }],
    series: [ {
        name: '工作量1',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                //color:'rgba(71, 255, 255, 1)',
                width: 0.1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(161, 44, 221, 1)'
                }, {
                    offset: 0.8,
                    color: 'rgba(161, 44, 221, 0.1)'
                }], false),
                shadowColor: 'rgba(161, 44, 221, 0.5)',
                shadowBlur: 10
            }
        },
        data: [320, 332, 301, 334, 390, 330,300]
    },{
        name: '工作量2',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                //color:'rgba(71, 255, 255, 1)',
                width: 0.1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(1, 99, 248, 1)'
                }, {
                    offset: 0.8,
                    color: 'rgba(1, 99, 248, 0.1)'
                }], false),
                shadowColor: 'rgba(1, 99, 248, 0.5)',
                shadowBlur: 10
            }
        },
        data: [150, 232, 201, 154, 190, 330,200]
    },{
        name: '工作量3',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                //color:'rgba(71, 255, 255, 1)',
                width: 0.1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(71, 255, 255, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(71, 255, 255, 0.1)'
                }], false),
                shadowColor: 'rgba(71, 255, 255, 0.5)',
                shadowBlur: 10
            }
        },
        data: [290, 330,220, 182, 191, 234,100]
    }]
};