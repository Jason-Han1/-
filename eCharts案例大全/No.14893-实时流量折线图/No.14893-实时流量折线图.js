option = {
    title: {
        text: '实时流量',
        textStyle: {
            color: '#a4aac3'
        },
        subtext: '(近一小时)',
        subtextStyle: {
            color: '#a4aac3'
        },

    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        textStyle: {
            color: '#646d8f'
        },
        data: ['流入（M）', '流出（M）', '总流量（M）']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#263158'
            }
        },
        axisLabel: {
            color: '#434a67'
        },
        splitLine: {
            show: true,
            interval: 5,
            lineStyle: {
                color: '#1e2540'
            }
        },
        data: ['9:00', '9:05', '9:10', '9:15', '9:20', '9:25', '9:30']
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#263158'
            }
        },
        axisLabel: {
            color: '#434a67'
        },
        splitLine: {
            lineStyle: {
                color: '#1e2540'
            }
        }
    },
    series: [{
        name: '流入（M）',
        type: 'line',
        symbol: 'rect',
        symbolSize: 10,
        lineStyle: {
            normal: {
                color: '#f72c48'
            }
        },
        data: [120, 132, 101, 134, 90, 230, 210]
    }, {
        name: '流出（M）',
        type: 'line',
        symbol: 'circle',
        symbolSize: 10,
        lineStyle: {
            normal: {
                color: '#0076fb'
            }
        },
        data: [220, 182, 191, 234, 290, 330, 310]
    }, {
        name: '总流量（M）',
        type: 'line',
        symbol: 'triangle',
        symbolSize: 10,
        lineStyle: {
            normal: {
                color: '#5e678a'
            }
        },
        data: [340, 314, 292, 368, 380, 560, 520]
    }],
    color: ['#f72c48', '#0076fb', '#5e678a'],
    backgroundColor: '#11162c'
};