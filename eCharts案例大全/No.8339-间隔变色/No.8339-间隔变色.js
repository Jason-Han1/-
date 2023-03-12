var _data = function() {
    var data = [];
    for (var i = 0; i < 13; i++) {
        data.push('')
    }
    return data;
}()

var _xData = function(data, total, interval) {
    var _dataX = [];
    var i = 0,
        j = 0,
        m = 0;
    for (i; i < total; i += interval) {
        _dataX.push('');
        for (j = 0; j < data.length; j++) {
            // debugger
            if (i == data[j]) {
                _dataX.pop();
                _dataX.push(m * 4 + ':00');
                m++;
            }
        }
    }
    return _dataX
}([10, 50, 90, 130, 170, 210, 250], 260, 10)
// var _xData=['',10,'','','',50,'','','',90,'',...];
option = {
    backgroundColor: '#394056',
    title: {
        text: '时间节点',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#F1F1F3'
        },
        left: '6%'
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
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['A', 'B'],
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
            type: 'value',
            boundaryGap: false,
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#57617B'
                }
            },
            min: 0,
            max: 260,
            interval: 10,
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                formatter: function(value, index) {
                    return _xData[index]
                }
            }
            // data: [0, 50, 100]
        }, {
            axisPointer: {
                show: false
            },
            position: 'top',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitArea: {
                show: true,
                interval: 0,
                areaStyle: {
                    color: ['rgba(250,250,250,0)', 'rgba(200,200,200,.3)']
                }
            },
            data: _data
        },
        {
            axisPointer: {
                show: false
            },
            min: 0,
            max: 100,
            splitNumber: 1,
            position: 'top',
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }
    ],
    yAxis: [{
            type: 'value',
            name: '',
            position: 'left',
            min: 0,
            max: 250,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        {
            type: 'value',
            name: '',
            position: 'right',
            min: 0,
            max: 250,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
        }
    ],
    series: [{
        name: 'A',
        type: 'line',
        smooth: false,
        symbol: 'emptyCircle',
        symbolSize: 10,
        xAxisIndex: 0,
        showSymbol: true,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(137, 189, 27, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(137, 189, 27, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(137,189,27)',
                // borderColor: 'rgba(137,189,2,0.27)',
                // borderWidth: 12
            }
        },
        data: [
            [10, 220],
            [50, 150],
            [90, 191],
            [130, 20],
            [170, 230],
            [210, 100],
            [250, 129]
        ]
    }, {
        name: 'B',
        type: 'line',
        xAxisIndex: 0,
        smooth: false,
        symbol: 'emptyCircle',
        symbolSize: 10,
        showSymbol: true,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(219, 50, 51, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(219, 50, 51, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {

                color: 'rgb(219,50,51)',
                // borderColor: 'rgba(219,50,51,0.2)',
                // borderWidth: 8
            }
        },
        data: [
            [10, 220],
            [50, 182],
            [90, 125],
            [130, 220],
            [170, 130],
            [210, 200],
            [250, 29]
        ]
    }, ]
};