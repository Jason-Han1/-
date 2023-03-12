option = {
    backgroundColor: '#0e202d',
    tooltip: {},
    xAxis: {
        data: ["企业", "农专", "个体"],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false,
            textStyle: {
                color: '#e54035'
            }
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
        name: '上部内园',
        type: 'pictorialBar',
        symbolSize: [57, 27],
        symbolOffset: [0, '-50%'],
        z: 13,
        itemStyle: {
            normal: {
                color: '#14b1eb'
            }
        },
        data: [{
            value: 100,
            symbolPosition: 'end'
        }, {
            value: 50,
            symbolPosition: 'end'
        }, {
            value: 20,
            symbolPosition: 'end'
        }],
        silent:true,
    }, {
        name: '上部外圈',
        type: 'pictorialBar',
        symbolSize: [95, 45],
        symbolOffset: [0, '-50%'],
        z: 12,
        itemStyle: {
            normal: {
                borderColor: '#14b1eb',
                borderWidth: 5,
                color: '#1286b2',
            }
        },
        data: [{
            value: 100,
            symbolPosition: 'end'
        }, {
            value: 50,
            symbolPosition: 'end'
        }, {
            value: 20,
            symbolPosition: 'end'
        }],
        silent:true,
    },{
        name: '底部圆圈',
        type: 'pictorialBar',
        symbolSize: [100, 45],
        symbolOffset: [0, '50%'],
        z: 12,
        itemStyle: {
            normal: {
                color: '#14b1eb'
            }
        },
        silent:true,
        data: [1,1,1]
    }, {
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#14b1eb',
                opacity: .7
            }
        },
        barWidth: 100,
        barGap: '-100%', // Make series be overlap
        data: [100, 50, 20]
    }]
};