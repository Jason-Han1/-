var xData = function() {
    var data = [];
    for (var i = 1; i < 31; i++) {
        data.push("1"+"/"+i);
    }
    return data;
}();
option = {
    backgroundColor: "#1A1835",
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    grid: {
        borderWidth: 0,
        top: 140,
        bottom: 95,
        textStyle: {
            color: "#fff"
        }
    },
    legend: {
        x: '46%',
        top: '11%',
        textStyle: {
            color: '#90979c',
        },
        data: ['A', 'B']
    },


    calculable: true,
    xAxis: [{
        type: "category",
        axisLine: {
            lineStyle: {
                color: "rgba(204,187,225,0.5)",
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: xData,
    }],

    yAxis: [{
        type: "value",
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "rgba(204,187,225,0.5)",
            }
        },
    }],
    series: [{
        name: "A",
        type: "effectScatter",
        symbolSize: [5, 5],
        rippleEffect: {
            period: 1,
            scale: 8,
            brushType: 'fill'
        },
        itemStyle: {
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: '#FAFF52'
                }, {
                    offset: 1,
                    color: '#1A1835'
                }])
        },
        markPoint: {
            label: {
                normal: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            data: [{
                type: 'max',
                name: '最大值',

            }, {
                type: 'min',
                name: '最小值'
            }]
        },
        data: [
            59, 17, 55, 61, 29, 33, 34, 35, 28, 29, 27, 20, 55, 10, 49,
            33, 44, 28, 22, 33, 36, 33, 22, 20, 19, 25, 10, 29, 24, 28
        ],
    }, {
        name: "B",
        type: "effectScatter",
        symbolSize: [5, 5],
        rippleEffect: {
            period: 1,
            scale: 8,
            brushType: 'fill'
        },
        itemStyle: {
            // color: "#c257F6",
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: '#C357F6'
                }, {
                    offset: 1,
                    color: '#1A1835'
                }])
        },
        markPoint: {
            label: {
                normal: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            data: [{
                type: 'max',
                name: '最大值',

            }, {
                type: 'min',
                name: '最小值'
            }]
        },
        data: [
            21, 36, 29, 38, 35, 34, 35, 38, 55, 43, 19, 43, 54, 35, 48, 37,
            34, 39, 38, 35, 40, 43, 54, 32, 42, 32, 38, 35, 33, 65, 42
        ]
    }, ]
}