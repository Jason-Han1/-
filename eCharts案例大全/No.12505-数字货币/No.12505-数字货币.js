option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['WCG当日留存', 'WCG充值总量', 'WCG提币总量', 'WCG充值笔数', 'WCG提币数']
    },
    xAxis: [{
        type: 'category',
        data: ["11.11", "11.12", "11.13", "11.14", "11.15", "11.16", "11.17", "11.17"],
    }],
    yAxis: [{
        type: 'value',
        name: '人数',
        min: -50,
        max: 250,
        interval: 50,
        axisLabel: {
            formatter: '{value}'
        }
    }, {
        type: 'value',
        name: '价格',
        min: -5,
        max: 25,
        interval: 5,
        axisLabel: {
            formatter: '{value}'
        }
    }],
    series: [{
        name: 'WCG当日留存',
        type: 'line',
        symbol: 'none',
        data: [160, 170, 140, 110, 160, 170, 130, 200],
        itemStyle: {
            normal: {
                color: '#51e5fc',
            }
        },
        areaStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(82,186,212,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(82,186,212,0.2)'
                    }],
                    globalCoord: false
                }
            }
        },
    }, {
        name: 'WCG充值总量',
        type: 'bar',
        data: [25.6, 76.7, 135.6, 120.2, 32.6, 20.0, 6.4, 3.3],
        stack: '总量',
        label: {
            normal: {
                show: false,
                position: 'insideRight'
            }
        },
    }, {
        name: 'WCG提币总量',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: false,
                position: 'insideRight'
            }
        },
        data: [28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3]
    }, {
        name: 'WCG充值笔数',
        type: 'line',
        itemStyle: {
            normal: {
                lineStyle: {
                    width: 3,
                }
            }
        },
        data: [3.3, 4.5, 6.3, 10.2, 10.3, 13.4, 13.0, 16.5, 12.0, 6.2]
    }, {
        name: 'WCG提币数',
        type: 'line',
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                lineStyle: {
                    width: 3,
                    type: 'dotted'
                }
            }
        },
        data: [20.3, 3.5, 4.3, 1.2, 2.3, 3.4, 3.0, 6.5, 10.0, 2.2]
    }]
};