// option
option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#333'
            }
        }
    },
    legend: { 
        data: ['line', 'bar'],
        textStyle: {
            color: '#ccc'
        }
    },
    dataZoom: [{
        show: false,
        height: 30,
        xAxisIndex: [0],
        bottom: 0,
        type: 'slider',
        start: 1,
        end: 100,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
            color: '#9B4E4E'
        }
    }, {
        show: false,
        type: 'inside',
        height: 15,
        start: 1,
        end: 100
    }],

    xAxis: {
        data: ['日期:1', '日期:2', '日期:3', '日期:4', '日期:5', '日期:6', '日期:7', '日期:8', '日期:9', '日期:9', '日期:9', '日期:10'],
        axisLine: {
            lineStyle: {
                color: '#000'
            }
        },
        axisLabel: {
            rotate: 45
        }
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#000'
            }
        }
    },
    series: [{
        name: '平均值',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 10,
        itemStyle: {
            normal: {
                color: '#FF0F0F',
                barBorderRadius: 0,
                label: {
                    show: true,
                    position: 'top',
                }
            }
        },
        data: [34, 35, 45, 65, 67, 43, 24, 46, 34, 23, 23, 24]
    }, {
        name: '最小值',
        type: 'bar',
        barWidth: 40,
        label: {
            normal: {
                show: true,
                position: 'top',
                color: '#FF9933'
            }
        },
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FDA649'
                    }, {
                        offset: 1,
                        color: '#FD4529'
                    }]
                )
            }
        },
        data: [134, 135, 145, 165, 167, 143, 124, 146, 134, 123, 123, 124]
    }, {
        name: '最大值',
        type: 'bar',
        barGap: '-100%',
        barWidth: 40,
        label: {
            normal: {
                show: true,
                position: 'top',
                color: '#FF9933'
            }
        },
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FD4529'
                    }, {
                        offset: 1,
                        color: '#FD4529'
                    }]
                )
            }
        },
        z: -12,
        data: [234, 235, 245, 265, 267, 243, 224, 246, 234, 223, 223, 224]
    }]
};