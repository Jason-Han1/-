/* eslint-disable */
const res = {
    responseCode: 10001,
    responseMsg: 'ok',
    data: {
        //代表有哪些项会显示，不传不显示，传了再去下面匹配数值
        xAxis: ["currentSalary", "PAStandardSalary", "PAComparablePay", "comparablePay", "smartSalary", "expectationSalary", "reference"],
        //智能推荐
        smartSalary: {
            welfare: 0.8, //福利
            bonus: 6, //奖金
            fixedSalary: 30, //固薪
        },
        //候选人当前薪酬
        currentSalary: {
            welfare: 1.2, //福利
            bonus: 5, //奖金
            fixedSalary: 12, //固薪
        },
        //候选人期望薪酬
        expectationSalary: {
            salary: 30
        },
        //参考线
        reference: {
            recommended: 20,
            design: 15
        },
        //pa可比薪酬
        PAComparablePay: [{
            salary: 11,
        }, {
            salary: 17,
        }, {
            salary: 13,
        }, {
            salary: 27,
        }, {
            salary: 12,
        }, {
            salary: 15,
        }, {
            salary: 19,
        }, {
            salary: 21,
        }, ],
        //pa标准薪酬
        PAStandardSalary: {
            upperLimit: 29,
            aQuarterUpper: 27,
            medianValue: 25,
            aQuarterLower: 23,
            lowerLimit: 5,
        },
        //市场可比薪酬
        comparablePay: {
            upperLimit: 29,
            aQuarterUpper: 27,
            medianValue: 25,
            aQuarterLower: 23,
            lowerLimit: 5,
        }
    }
}
//坐标字典
const MAPS = {
    'currentSalary': '候选人当前薪酬',
    'PAStandardSalary': 'pa标准薪酬',
    'PAComparablePay': 'pa可比薪酬',
    'comparablePay': '市场可比薪酬',
    'smartSalary': '智能荐薪',
    'expectationSalary': null,
    'reference': null
}
const MAP_KEY = Object.keys(MAPS)
let space = []; //补空位
let xAxis = [];
let series = [];

function create_options(item, name = null, x = null) {
    if (name) {
        xAxis = [...xAxis, name]
    }
    switch (item) {
        case 'smartSalary':
        case 'currentSalary':
            series.push({
                name: '固薪',
                type: 'bar',
                stack: 'col',
                data: [...space, res.data[item].fixedSalary],
                itemStyle: {
                    color: '#A3ADD6'
                }
            }, {
                name: '奖金',
                type: 'bar',
                stack: 'col',
                data: [...space, res.data[item].bonus],
                itemStyle: {
                    color: '#F0C2AF'
                }
            }, {
                name: '福利',
                type: 'bar',
                stack: 'col',
                data: [...space, res.data[item].welfare],
                label: {
                    show: true,
                    position: 'top',
                    color: '#7D8292',
                    formatter(params) {
                        let total = 0;
                        Object.entries(res.data[item]).map(([key, value]) => {
                            total = total + +value
                        })
                        return `${total}万`
                    }
                },
                itemStyle: {
                    color: '#F3DD94'
                },
            })
            break
        case 'PAComparablePay':
            let float = [];
            const len = x.length;
            const index = x.indexOf('PAComparablePay');
            const min = (300 / len) * index + (300 / len) / 4
            const between = (300 / len) / 2
            res.data.PAComparablePay.map(item => {
                const x = min + Math.floor(Math.random() * between)
                float.push([x, item.salary])
            })
            series.push({
                symbolSize: 4,
                data: float,
                xAxisIndex: 1,
                type: 'scatter',
                itemStyle: {
                    color: '#6A6B78'
                }
            })
            break;
        case 'reference':
            series.push({
                type: 'line',
                xAxisIndex: 2,
                name: '推荐年薪',
                data: [
                    [0, res.data[item].recommended],
                    [1, res.data[item].recommended]
                ],
                label: {
                    show: true,
                    formatter(params) {
                        if (params.data[0] > 0) {
                            return params.data[1] + '万'
                        } else {
                            return ''
                        }
                    },
                    color: '#7D8292',
                    offset: [20, 13]
                },
                symbol: 'circle',
                symbolSize: 5,
                zlevel: 99,
                lineStyle: {
                    type: 'dashed',
                    width: 1,
                    color: '#FD6720',
                }
            }, {
                type: 'line',
                name: '设计年薪',
                xAxisIndex: 2,
                data: [
                    [0, res.data[item].design],
                    [1, res.data[item].design]
                ],
                label: {
                    show: true,
                    formatter(params) {
                        if (params.data[0] > 0) {
                            return params.data[1] + '万'
                        } else {
                            return ''
                        }
                    },
                    color: '#7D8292',
                    offset: [20, 13]
                },
                zlevel: 99,
                symbol: 'circle',
                symbolSize: 5,
                lineStyle: {
                    type: 'dashed',
                    width: 1,
                    color: 'blue',
                }
            })
            break;
        case 'comparablePay':
        case 'PAStandardSalary':
            let itemStyle = {
                emphasis: {
                    color: "#E6F1FF",
                    borderColor: '#fff'
                }
            }
            series.push({
                name: '下限',
                type: 'bar',
                stack: 'col',
                data: [...space, {
                    value: res.data[item].lowerLimit,
                    label: {
                        formatter: function(data) {
                            return `{b|}\n\n{a| ${res.data[item].lowerLimit}万}`
                        },
                        show: true,
                        width: 30,
                        position: [0, 0, 0, 0],
                        rich: {
                            b: {
                                width: 30,
                                height: 2,
                                color: "#fff",
                                backgroundColor: "#55aee6",
                                verticalAlign: 'top'
                            },
                            a: {
                                color: "#8e909a",
                                width: 100,
                            },
                        }
                    },
                    // itemStyle: itemStyle,
                }],
                barWidth: '30',
                barGap: '10%',
                itemStyle: {
                    color: '#fff',
                    borderColor: '#fff'
                }
            }, {
                name: '下四分之一',
                type: 'bar',
                stack: 'col',
                data: [...space, {
                    value: res.data[item].aQuarterLower - res.data[item].lowerLimit,
                    label: {
                        formatter: function(data) {
                            return `{b|}{a|}`
                        },
                        show: true,
                        position: [0, 0, 0, 0],
                        rich: {
                            b: {
                                width: 30,
                                height: 2,
                                color: "#fff",
                                backgroundColor: "#55aee6",
                                verticalAlign: 'top'
                            },
                            a: {
                                color: "#8e909a",
                                width: 100,

                            },
                        }
                    },
                    itemStyle: itemStyle,
                }],
                itemStyle: {
                    color: '#E6F1FF',
                }
            }, {
                name: '中位值',
                type: 'bar',
                stack: 'col',
                data: [...space, {
                    value: res.data[item].medianValue - res.data[item].aQuarterLower,
                    label: {
                        formatter: function(data) {
                            return `{b|}{a|}`
                        },
                        show: true,
                        position: [0, 0, 0, 0],
                        rich: {
                            b: {
                                width: 30,
                                height: 2,
                                color: "#fff",
                                backgroundColor: "#55aee6",
                                verticalAlign: 'top'
                            },
                            a: {
                                color: "#8e909a",
                                width: 100,
                            },
                        }
                    },
                    itemStyle: itemStyle,
                }],
                itemStyle: {
                    color: '#E6F1FF',
                }
            }, {
                name: '上四分之一',
                type: 'bar',
                stack: 'col',
                data: [...space, {
                    value: res.data[item].aQuarterUpper - res.data[item].medianValue,
                    label: {
                        formatter: function(data) {
                            return `{b|}{a|}`
                        },
                        show: true,
                        position: [0, 0, 0, 0],
                        rich: {
                            b: {
                                width: 30,
                                height: 2,
                                color: "#fff",
                                backgroundColor: "#55aee6",
                                verticalAlign: 'top'
                            },
                            a: {
                                color: "#8e909a",
                                width: 100,
                            },
                        }
                    },
                    itemStyle: itemStyle,
                }],
                itemStyle: {
                    color: '#E6F1FF',
                }
            }, {
                name: '上限',
                type: 'bar',
                stack: 'col',
                data: [...space, {
                    value: res.data[item].upperLimit - res.data[item].aQuarterUpper,
                    label: {
                        formatter: function(data) {
                            return `{a| ${res.data[item].upperLimit}万}\n\n{b|}`
                        },
                        show: true,
                        position: [0, -24, 0, 0],
                        rich: {
                            b: {
                                width: 30,
                                height: 2,
                                color: "#fff",
                                backgroundColor: "#55aee6",
                                verticalAlign: 'top'
                            },
                            a: {
                                color: "#8e909a",
                                width: 100,
                            },
                        }
                    },
                    itemStyle: itemStyle,
                }],
                itemStyle: {
                    color: '#E6F1FF',
                }
            })
            break;
        case 'expectationSalary':
            series.push({
                type: 'effectScatter',
                symbolSize: 8,
                itemStyle: {
                    color: '#FD6720 ',
                    opacity: '0.9'
                },
                rippleEffect: {
                    color: "#FD6720",
                    period: 9999,
                },
                label: {
                    show: true,
                    formatter(params) {
                        return params.data[1] + '万'
                    },
                    color: '#7D8292',
                    offset: [0, -20]
                },
                data: [
                    ['候选人当前薪酬', res.data[item].salary],
                ]
            })
            break;
        default:
            break;
    }
}

function calcFloat(data) {
    let total = ["currentSalary", "PAStandardSalary", "PAComparablePay", "comparablePay", "smartSalary"]
    return total.filter(item => data.includes(item))
}
MAP_KEY.map(item => {
    if (!!res.data[item]) {
        let name = MAPS[item]
        let x = null
        if (name === 'pa可比薪酬') {
            x = calcFloat(res.data.xAxis)
        }
        create_options(item, name, x)
        space.push('')
    } else {
        space.pop()
    }
})

option = {
    tooltip: {
        show: false,
        trigger: 'item',
        axisPointer: {
            type: 'shadow'
        }
    },
    backgroundColor: '#fff',
    grid: {
        top: '10%',
        left: '10%',
        right: '5%',
        bottom: '10%',
    },
    xAxis: [{
        type: 'category',
        data: xAxis,
        triggerEvent: true,
        boundaryGap: true,
        nameGap: 30,
        axisLine: {
            lineStyle: {
                color: '#DFE1E6',
                opacity: '0.6'
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: '#7D8292',
            fontSize: 11,
            formatter: function(value) {
                if (value == '智能荐薪') {
                    return value + ' {icon|}';
                } else {
                    return value
                }
            },
            rich: {
                'icon': {
                    backgroundColor: {
                        image: ''
                    }
                }
            }
        },
        splitLine: {
            lineStyle: {
                color: '#DFE1E6'
            }
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
    }, {
        type: 'value',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                opacity: 0
            }
        },
        axisLabel: {
            color: '#fff'
        },
        axisTick: {
            lineStyle: {
                opacity: 0
            }
        },
        splitLine: {
            show: false
        },
        min: 0,
        max: 300,
        nameGap: 30,
    }, {
        type: 'value',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                opacity: 0
            }
        },
        axisLabel: {
            color: '#fff'
        },
        axisTick: {
            lineStyle: {
                opacity: 0
            }
        },
        splitLine: {
            show: false
        },
        min: 0,
        max: 1,
        nameGap: 30,
    }],
    yAxis: {
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#7D8292',
            fontSize: 12,
            formatter: "{value}万"
        },
        splitLine: {
            lineStyle: {
                color: '#DFE1E6',
                opacity: '0.2'
            }
        }
    },
    series: series
};