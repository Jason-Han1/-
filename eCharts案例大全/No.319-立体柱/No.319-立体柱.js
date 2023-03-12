var data = 15; //百分比
option = {
    backgroundColor: '#0e202d',
    tooltip: {
        trigger: 'none'
    },
    xAxis: {
        data: ["百分比"],
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
        name: '最上层立体圆',
        type: 'pictorialBar',
        symbolSize: [300, 45],
        symbolOffset: [0, -20],
        z: 12,
        itemStyle: {
            normal: {
                color: '#363F5E'
            }
        },
        data: [{
            value: 100,
            symbolPosition: 'end'
        }]
    }, {
        name: '中间立体圆',
        type: 'pictorialBar',
        symbolSize: [300, 45],
        symbolOffset: [0, -20],
        z: 12,
        itemStyle: {
            normal: {
                color: '#2B5B4D'
            }
        },
        data: [{
            value: data,
            symbolPosition: 'end'
        }]
    }, {
        name: '最底部立体圆',
        type: 'pictorialBar',
        symbolSize: [300, 45],
        symbolOffset: [0, 20],
        z: 12,
        itemStyle: {
            normal: {
                color: '#01CC04'
            }
        },
        data: [100 - data]
    }, {
        //底部立体柱
        stack: '1',
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#01CC04',
                opacity: .7
            }
        },
        label: {
            show: true,
            position: "top",
            distance: 15,
            color: "#FFFE00",
            fontSize:50,
            formatter:'{c}'+'%'
        },
        
        silent: true,
        barWidth: 300,
        barGap: '-100%', // Make series be overlap
        data: [data]
    }, {
        //上部立体柱
        stack: '1',
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#36405E',
                opacity: .7
            }
        },
        silent: true,
        barWidth: 300,
        barGap: '-100%', // Make series be overlap
        data: [100 - data]
    }]
};