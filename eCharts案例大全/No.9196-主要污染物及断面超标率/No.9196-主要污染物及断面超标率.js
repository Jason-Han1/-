let barColor = ['#43BAFE', '#FF7800', '#E9A5FF'];
option = {
    tooltip: {
        show: false,
        trigger: 'item',
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '2%',
        top: '5%',
        containLabel: true
    },
    xAxis: {
        data: ["氨氮", "COD", "BOD"],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            lineHeight: 70,
            textStyle: {
                color: '#000'
            },

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
        name: '顶部圆',
        type: 'pictorialBar',
        symbolSize: [30, 9],
        symbolOffset: [0, -5],
        z: 12,
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = barColor;
                    return colorList[params.dataIndex];
                },
            }
        },
        data: [{
            value: 45.2,
            symbolPosition: 'end'
        }, {
            value: 25.5,
            symbolPosition: 'end'
        }, {
            value: 18.2,
            symbolPosition: 'end'
        }]
    }, {
        name: '底部圆',
        type: 'pictorialBar',
        symbolSize: [30, 9],
        symbolOffset: [0, 5],
        z: 12,
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = barColor;
                    return colorList[params.dataIndex];
                },
            }
        },
        data: [45.2, 25.5, 18.2]
    }, {
        name: '底部小圈',
        type: 'pictorialBar',
        symbolSize: [60, 30],
        symbolOffset: [0, 15],
        z: 2,
        itemStyle: {
            normal: {
                color: 'transparent',
                borderColor: '#14b1eb',
                borderWidth: 3
            }
        },
        data: [45.2, 25.5, 18.2]
    }, {
        name: '底部大圈',
        type: 'pictorialBar',
        symbolSize: [100, 50],
        symbolOffset: [0, 25],
        z: 2,
        itemStyle: {
            normal: {
                color: 'transparent',
                borderColor: '#14b1eb',
                borderType: 'dashed',
                borderWidth: 3
            }
        },
        data: [45.2, 25.5, 18.2]
    }, {
        type: 'bar',
        name: '主要污染物及断面超标率',
        z: 15,
        label: {
            normal: {
                show: true,
                position: 'top',
                offset: [0, -5],
                formatter: function(evt) {
                    return evt.value + "%"
                }
            }
        },
        tooltip: {
            show: true,
            trigger: 'item',

        },
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = barColor;
                    return colorList[params.dataIndex];
                },
                opacity: .7
            }
        },
        silent: true,
        barWidth: 30,
        data: [45.2, 25.5, 18.2]
    }]
};