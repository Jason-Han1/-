var labeldata = [{
    value: '1.5',
    label: {
        normal: {
            show: true,
            color: 'blue',
            position: 'bottom',
            formatter: ['{c|{c}}{ab|万}', '',
                '{a|异常名录}'
            ].join('\n'),
            rich: {
                a: {
                    fontSize: 14,
                    color: '#c6cdd5'
                },
                c: {
                    fontSize: 29,
                    color: '#2A6AD3'
                },
                ab: {
                    fontSize: 14,
                    color: '#2A6AD3',
                    verticalAlign: 'bottom'
                }
            }
        }
    }
}, {
    value: '0.1',
    label: {
        normal: {
            show: true,
            color: 'blue',
            position: 'bottom',
            formatter: ['{c|{c}}{ab|万}', '',
                '{a|严重违法}'
            ].join('\n'),
            rich: {
                a: {
                    fontSize: 14,
                    color: '#c6cdd5'
                },
                c: {
                    fontSize: 29,
                    color: '#2A6AD3'
                },
                ab: {
                    fontSize: 14,
                    color: '#2A6AD3',
                    verticalAlign: 'bottom'
                }
            }
        }
    }
}, {
    value: '0.9',
    label: {
        normal: {
            show: true,
            color: 'blue',
            position: 'bottom',
            formatter: ['{c|{c}}{ab|万}', '',
                '{a|行政处罚}'
            ].join('\n'),
            rich: {
                a: {
                    fontSize: 14,
                    color: '#c6cdd5'
                },
                c: {
                    fontSize: 29,
                    color: '#2A6AD3'
                },
                ab: {
                    fontSize: 14,
                    color: '#2A6AD3',
                    verticalAlign: 'bottom'
                }
            }
        }
    }
}];

option = {
    grid: [{
        show: false,
        left: '3%',
        top: '15%',
        containLabel: true,
        width: '80%',
        height: '40%'
    }, {
        show: false,
        left: '3%',
        top: '39%',
        containLabel: true,
        width: '80%',
        height: '20%'
    }],
    legend: {
        data: ["CPE峰值流速"]
    },
    tooltip: {
        show: true
    },
    xAxis: [{
        gridIndex: 0,
        type: "category",
        data: ["白城市", "松原市", "吉林省", "吉林市", "通化市", "四平市", "长春市", "白山市", "辽源市", "延吉市"],
        axisLabel: {}
    }, {
        gridIndex: 1,
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
            show: false
        },
        data: ['1', '2', '3']
    }],
    yAxis: [{
        gridIndex: 0,
        name: "",
        cols: [{
            col: "INDICATOR_NO_169",
            alias: "CPE峰值流速",
            aggregate_type: "sum"
        }],
        series_type: "lineareastyle",
        type: "value",
        axisLabel: {},
        min: null,
        max: null,
        scale: true
    }, {
        gridIndex: 1,
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
            show: false
        }
    }],
    series: [{
        type: "line",
        valueAxisIndex: 0,
        name: "CPE峰值流速",
        data: [{
            value: 10.6081
        }, {
            value: 3.1872
        }, {
            value: 1.0721
        }, {
            value: 10.482
        }, {
            value: 5.6373
        }, {
            value: 0.828
        }, {
            value: 7.7013
        }, {
            value: 12.0948
        }, {
            value: 3.3158
        }, {
            value: '-'
        }],
        barMaxWidth: 40,
         smooth: true,
        areaStyle: {
            normal: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: "linear",
                    global: false,
                    colorStops: [{
                        offset: 0,
                        color: "rgba(137, 189, 27, 0.3)"
                    }, {
                        offset: 0.8,
                        color: "rgba(137, 189, 27, 0)"
                    }]
                },
                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: "rgb(137,189,27)"
            }
        },
        xAxisIndex: 0,
        yAxisIndex: 0
    },
    {
        type: "line",
        
         smooth: true,
        valueAxisIndex: 0,
        name: "CPE峰值流速",
        data: [{
            value: '-'
        }, {
            value: '-'
        }, {
            value: '-'
        }, {
            value:'-'
        }, {
            value:'-'
        }, {
            value: '-'
        }, {
            value:'-'
        }, {
            value: '-'
        }, {
            value: 3.3158
        }, {
            value: 1.9157
        }],
        barMaxWidth: 40,
        areaStyle: {
            normal: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: "linear",
                    global: false,
                    colorStops: [{
                        offset: 0,
                        color: "rgba(137, 189, 27, 0.3)"
                    }, {
                        offset: 0.8,
                        color: "rgba(137, 189, 27, 0)"
                    }]
                },
                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: "rgb(137,189,27)"
            }
        },
        lineStyle: {
            normal: {
                type: 'dotted'
            }
        },
    },
    {
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                color: 'rgba(0, 0, 0, 0)'
            }
        }, 
        tooltip: {
        show: false
    },
        data: labeldata
    }]
};