// 构造数据
var _data = [
    [3206.0, 0.0, -5], // 下跌极限，净值，百分比
    [3428.2, 89.4], // 合约开仓点，净值
    [3439.6, 100.0], // 当前点位，净值
    [3654.0, 210, 5] // 上涨峰值，净值，百分比
];
// 渲染图表
var _origin = _data[2][1];
var _min = _data[0][0] - 6;
var _max = _data[3][0];
var _seriesData_0 = [[_data[0][0], _data[2][1]]];
var _seriesData_1 = [_data[0], _data[1]];
var _seriesData_2 = ['-', _data[1], _data[2]];
var _seriesData_3 = ['-', '-', _data[2], _data[3]];
var _seriesData_4 = [ '-', '-', '-', [_data[3][0], 0] ];
var _maxLoss = _data[0][2];
var _maxProfit = _data[3][2];

// 配置
var OPTION = {
    color: ['#3e8e7e', '#3e8e7e', '#9a2f10', '#9a2f10'],
    tooltip: {
        show: false
    },
    grid: {
        left: '10%',
        right: '10%',
        top: '20%',
        bottom: '15%'
    },
    xAxis: {
        name: '指数',
        scale: true,
        min: _min,
        max: _max,
        type: 'value',
        boundaryGap: false,
        interval: 70,
        nameTextStyle: {
            color: 'transparent',
            fontWeight: 'bold',
            fontSize: 14
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#7f7f7f'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: true,
            interval: 1
        }
    },
    yAxis: {
        name: '损益',
        nameTextStyle: {
            color: 'transparent',
            fontWeight: 'bold',
            fontSize: 14
        },
        type: 'value',
        boundaryGap: ['0', '10%'],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [{
        name: '净亏损',
        type: 'line',
        symbol: 'circle',
        symbolSize: 2,
        lineStyle: {
            normal: {
                width: 12
            }
        },
        markPoint: {
            symbolOffset: [0, 40],
            data: [{
                type: 'min',
                name: '最小值',
                label: {
                    normal: {
                        show: true,
                        formatter: function(obj) {
                            return decimalDigits(obj.data.coord[0]);
                        },
                        textStyle: {
                            color: '#7f7f7f',
                            fontWeight: '400',
                            fontSize: 12
                        }
                    }
                }
            }, {
                type: 'min',
                name: '最小值2',
                label: {
                    normal: {
                        show: true,
                        formatter: "\n\n下跌极限",
                        textStyle: {
                            color: '#7f7f7f',
                            fontWeight: '800',
                            fontSize: 14
                        }
                    }
                }
            }, {
                type: 'min',
                name: '最小值3',
                label: {
                    normal: {
                        show: true,
                        formatter: function(obj) {
                            return "\n\n\n\n\n" + decimalDigits(_maxLoss) + '%';
                        },
                        textStyle: {
                            color: '#7f7f7f',
                            fontWeight: '400',
                            fontSize: 12
                        }
                    }
                }
            }],
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        },
        data: _seriesData_0
    }, {
        name: '亏损',
        type: 'line',
        symbol: 'circle',
        symbolSize: 12,
        lineStyle: {
            normal: {
                width: 12
            }
        },
        markLine: {
            lineStyle: {
                normal: {
                    type: 'solid',
                    color: '#7f7f7f',
                    width: 2,
                    fontWeight: 'bold',
                    fontSize: 14
                }
            },
            data: [{
                yAxis: _origin,
                symbol: 'none',
                label: {
                    normal: {
                        show: true,
                        formatter: '指数',
                        textStyle: {
                            color: '#7f7f7f',
                            fontWeight: 'bold',
                            fontSize: 14
                        }
                    }
                }
            }, {
                xAxis: _min,
                symbol: 'none',
                label: {
                    normal: {
                        show: true,
                        formatter: '损益',
                        textStyle: {
                            color: '#7f7f7f',
                            fontWeight: 'bold',
                            fontSize: 14
                        }
                    }
                }
            }]
        },
        markPoint: {
            symbolOffset: [-10, -20],
            data: [{
                type: 'max',
                name: '最大值',
                label: {
                    normal: {
                        show: true,
                        formatter: "\n合约开仓点",
                        textStyle: {
                            color: '#7f7f7f',
                            fontWeight: '800',
                            fontSize: 14
                        }
                    }
                }
            }, {
                type: 'max',
                name: '最大值',
                label: {
                    normal: {
                        show: true,
                        formatter: function(obj) {
                            return "\n\n\n\n" + decimalDigits(obj.data.coord[0]);
                        },
                        textStyle: {
                            color: '#7f7f7f',
                            fontWeight: '400',
                            fontSize: 12
                        }
                    }
                }
            }, {
                type: 'min',
                name: '最小值',
                label: {
                    normal: {
                        show: true,
                        formatter: function(obj) {
                            return decimalDigits(obj.data.coord[1]);
                        },
                        textStyle: {
                            color: '#3e8e7e',
                            fontWeight: '400',
                            fontSize: 12
                        }
                    }
                }
            }, {
                type: 'min',
                name: '最小值2',
                label: {
                    normal: {
                        show: true,
                        formatter: "\n\n预计净值",
                        textStyle: {
                            color: '#3e8e7e',
                            fontWeight: '800',
                            fontSize: 14
                        }
                    }
                }
            }],
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        },
        data: _seriesData_1
    }, {
        name: '点差',
        type: 'line',
        symbol: 'circle',
        symbolSize: 12,
        lineStyle: {
            normal: {
                width: 12
            }
        },
        markPoint: {
            symbolOffset: [30, 40],
            data: [{
                type: 'max',
                name: '最大值',
                label: {
                    normal: {
                        show: true,
                        formatter: function(obj) {
                            return decimalDigits(obj.data.coord[0]);
                        },
                        textStyle: {
                            color: '#9a2f10',
                            fontWeight: '400',
                            fontSize: 12
                        }
                    }
                }
            }, {
                type: 'max',
                name: '最大值',
                label: {
                    normal: {
                        show: true,
                        formatter: "\n\n当前点位",
                        textStyle: {
                            color: '#9a2f10',
                            fontWeight: 'bold',
                            fontSize: 14
                        }
                    }
                }
            }],
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        },
        data: _seriesData_2
    }, {
        name: '盈利',
        type: 'line',
        symbol: 'circle',
        symbolSize: 12,
        lineStyle: {
            normal: {
                width: 12
            }
        },
        markPoint: {
            symbolOffset: [0, 0],
            data: [{
                type: 'max',
                name: '最大值',
                label: {
                    normal: {
                        show: true,
                        formatter: "预计净值",
                        textStyle: {
                            color: '#9a2f10',
                            fontWeight: '800',
                            fontSize: 14
                        }
                    }
                }
            }, {
                type: 'max',
                name: '最大值2',
                label: {
                    normal: {
                        show: true,
                        formatter: function(obj) {
                            return "\n\n" + decimalDigits(obj.data.coord[1]);
                        },
                        textStyle: {
                            color: '#9a2f10',
                            fontWeight: '400',
                            fontSize: 12
                        }
                    }
                }
            }],
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        },
        data: _seriesData_3
    }, {
        name: '净盈利',
        type: 'line',
        symbol: 'circle',
        symbolSize: 0,
        lineStyle: {
            normal: {
                width: 0
            }
        },
        markPoint: {
            symbolOffset: [0, -180],
            data: [{
                type: 'max',
                name: '最大值',
                label: {
                    normal: {
                        show: true,
                        formatter: function(obj) {
                            return decimalDigits(obj.data.coord[0]);
                        },
                        textStyle: {
                            color: '#000',
                            fontWeight: '400',
                            fontSize: 12
                        }
                    }
                }
            }, {
                type: 'max',
                name: '最大值2',
                label: {
                    normal: {
                        show: true,
                        formatter: "\n\n上涨峰值",
                        textStyle: {
                            color: '#000',
                            fontWeight: '800',
                            fontSize: 14
                        }
                    }
                }
            }, {
                type: 'max',
                name: '最大值3',
                label: {
                    normal: {
                        show: true,
                        formatter: function(obj) {
                            return "\n\n\n\n\n" + decimalDigits(_maxProfit) + '%';
                        },
                        textStyle: {
                            color: '#000',
                            fontWeight: '400',
                            fontSize: 12
                        }
                    }
                }
            }],
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        },
        data: _seriesData_4
    }]
};
/**
 * 浮点数格式化
 * @param  {Number}  val    输入的值
 * @param  {Number}  digits 小数点位数 0-20
 * @param  {Boolean} sign   是否含有正值标识符
 * @return {String}         返回一个格式化的字符串
 */
function decimalDigits(val) {
    if (typeof val !== 'number') {
        return val;
    }
    var digits = 1;

    val = parseFloat(val.toFixed(digits)).toLocaleString();
    var floatNum = val.split('.')[1];

    if (floatNum === undefined) {
        val += '.';
        for (var i = 0; i < digits; i++) {
            val += '0';
        }
    }
    return val;
}

myChart.setOption(OPTION)