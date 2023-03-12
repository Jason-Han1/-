option = {
    backgroundColor: '#0e202d',
    tooltip: {
        formatter: '{a0}<br />{b0}: {c0}%',
    },
    xAxis: {
        data: ["本年", "上年"],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false,
        }
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [{
        name: 'top1',
        type: 'pictorialBar',
        symbolSize: [150, 65],
        symbolOffset: [0, -30],
        z: 10,
        silent: true,
        itemStyle: {
            normal: {
                color: 'rgb(18, 101, 138, .8)'
            }
        },
        data: [{
            value: 100,
            symbolPosition: 'end'
        }, {
            value: 100,
            symbolPosition: 'end'
        }]
    }, {
        name: 'top2',
        type: 'pictorialBar',
        symbolSize: [100, 45],
        symbolOffset: [0, -20],
        z: 10,
        silent: true,
        itemStyle: {
            normal: {
                color: '#3ca2ce'
            }
        },
        data: [{
            value: 100,
            symbolPosition: 'end'
        }, {
            value: 100,
            symbolPosition: 'end'
        }]
    }, {
        name: 'middle',
        type: 'pictorialBar',
        symbolSize: [100, 45],
        symbolOffset: [0, -20],
        z: 10,
        silent: true,
        itemStyle: {
            normal: {
                color: '#1594cc',
            }
        },
        data: [{
            value: 40,
            symbolPosition: 'end'
        }, {
            value: 80,
            symbolPosition: 'end'
        }]
    }, {
        name: 'bottom1',
        type: 'pictorialBar',
        symbolSize: [100, 45],
        symbolOffset: [0, 20],
        z: 12,
        silent: true,
        itemStyle: {
            normal: {
                color: '#ae77df',
            }
        },
        data: [100, 100]
    }, {
        name: 'bottom2',
        type: 'pictorialBar',
        symbolSize: [150, 65],
        symbolOffset: [0, 30],
        z: 1,
        silent: true,
        itemStyle: {
            normal: {
                color: 'rgb(18, 101, 138, .8)',
            }
        },
        data: [100, 100]
    }, {
        type: 'bar',
        name: '容量费收入',
        stack: true,
        itemStyle: {
            normal: {
                color: '#ae77df',
            }
        },
        barWidth: 100,
        data: [40, 80]
    }, {
        type: 'bar',
        name: '供电收入',
        stack: true,
        itemStyle: {
            normal: {
                color: '#1594cc',
            }
        },
        barWidth: 100,
        data: [60, 20]
    }]
};