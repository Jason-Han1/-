let data = ['202007', '202006', '202005', '202004', '202003',]
let data1 = ['3', '2',  '4', '5', '3']
let data2 = ['5', '7', '3', '6', '7']
option = {
    backgroundColor: '#031f2d',
    title: {
        text: '近三年审核问题重复发生率',
        x: 'center',
        top: "20",
        textStyle: {
            color: '#E2EEFF',
            fontSize: 16,
            fontWeight:200
        }
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
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 13,
        top: '40',
		data: ['环比', '同比'],
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#ACCFFF'
        }
    },
    grid: {
        left: '4%',
        right: '4%',
        bottom: '10%',
        top: '80',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#344B83'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12,
                color: '#ACCFFF'
            }
        },
        data:data
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#344B83'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12,
                color: '#ACCFFF'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#344B83'
            }
        }
    }],
    series: [{
        name: '环比',
        type: 'line',
        // smooth: true,
        itemStyle: {
            normal: {
                color: '#3769F4',
                areaStyle: {
                    //color: '#94C9EC'
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: 'rgba(65,225,255,0)'
                    }, {
                        offset: 1,
                        color: 'rgba(65,225,255,0.6)'
                    }]),
                }
            }
        },
        data: data1
    }, {
        name: '同比',
        type: 'line',
        // smooth: true,
        itemStyle: {
            normal: {
                color: '#55D5B5',
                areaStyle: {
                    //color: '#94C9EC'
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: 'rgba(85,213,181,0)'
                    }, {
                        offset: 1,
                        color: 'rgba(85,213,181,0.6)'
                    }]),
                }
            }
        },
        data: data2
    }]
};