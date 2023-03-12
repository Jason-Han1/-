var data = 80; //百分比
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
            show: false,
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
    legend: {
        data: ["底部立体柱","上部立体柱"],
        bottom: "42%",
        textStyle: {
            color: "#1FC3CE",
            fontSize: 14
        },
    },
    series: [{
        // name: '最上层立体圆',
        type: 'pictorialBar',
        symbolSize: [ 10,30],
        symbolOffset: [2, 0],
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
        // name: '中间立体圆',
        type: 'pictorialBar',
        symbolSize: [ 10,30],
        symbolOffset: [2, 0],
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
        // name: '最底部立体圆',
        type: 'pictorialBar',
        symbolSize: [ 10,30],
        symbolOffset: [-4, 0],
        z: 12,
        itemStyle: {
            normal: {
                color: '#A052FE'
            }
        },
        data: [100 - data]
    }, {
        name: '底部立体柱',
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
            normal: {
                show: true,
                position: 'inside',
                offset: [-20, 0],
                formatter: function(obj) {
                    return (obj.value).toLocaleString() + '%';
                },
                textStyle: {
                    align: 'center',
                    baseline: 'middle',
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#fff',
                    textShadowColor:'#000',
                    textShadowBlur:'0',
                    textShadowOffsetX:1,
                    textShadowOffsetY:1,
                }
            },
        },
        
        silent: true,
        barWidth: 30,
        barGap: '-100%', // Make series be overlap
        data: [data]
    }, {
        name: '上部立体柱',
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
        barWidth: 30,
        barGap: '-100%', // Make series be overlap
        data: [100 - data],
        // itemStyle: {
        //     normal: {
        //         color: 'rgba(29,67,243,1)',
        //     }
        // },
        label: {
            normal: {
                show: true,
                position: 'inside',
                offset: [-20, 0],
                formatter: function(obj) {
                    return (obj.value).toLocaleString() + '%';
                },
                textStyle: {
                    align: 'center',
                    baseline: 'middle',
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#fff',
                    textShadowColor:'#000',
                    textShadowBlur:'0',
                    textShadowOffsetX:1,
                    textShadowOffsetY:1,
                }
            },
        },
    }]
};