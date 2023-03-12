var data = 65; //百分比
option = {
    backgroundColor: '#0e202d',
    tooltip: {
        trigger: 'none'
    },
    yAxis: {
        data: ["百分比"],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#e54035'
            }
        }
    },
    xAxis: {
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
        symbolSize: [45, 300],
        symbolOffset: [20, 0],
        z: 12,
        itemStyle: {
            normal: {
                color: '#293CA0'
            }
        },
        data: [{
            value: 100,
            symbolPosition: 'end'
        }]
    }, {
        name: '中间立体圆',
        type: 'pictorialBar',
        symbolSize: [45,300],
        symbolOffset: [20, 0],
        z: 12,
        itemStyle: {
            normal: {
                color: '#B687F9'
            }
        },
        data: [{
            value: data,
            symbolPosition: 'end'
        }]
    }, {
        name: '最底部立体圆',
        type: 'pictorialBar',
        symbolSize: [ 45,300],
        symbolOffset: [-20, 0],
        z: 12,
        itemStyle: {
            normal: {
                color: '#A052FE'
            }
        },
        data: [100 - data]
    }, {
        //底部立体柱
        stack: '1',
        type: 'bar',
        itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#CE7EFE'
                            }, {
                                offset: 1,
                                color: '#7125FF'
                            }])
                        },
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
                color: '#14257B',
                opacity: .7
            }
        },
        silent: true,
        barWidth: 300,
        barGap: '-100%', // Make series be overlap
        data: [100 - data]
    }]
};