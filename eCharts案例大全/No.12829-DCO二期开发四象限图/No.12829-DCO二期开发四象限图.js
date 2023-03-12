 var sourceData = [{
    name: '第三方账号管理库',
    sales: 1,
    services: 80
}, {
    name: '人民币显示商品',
    sales: 1,
    services: 100
}, {
    name: 'Coupon开发',
    sales: 2,
    services: 50
}, {
    name: '身份证管理库',
    sales: 1.5,
    services: 20
}, {
    name: '支付时sms验证码登陆',
    sales: 1,
    services: 20
}, {
    name: 'SEO优化',
    sales: 3.5,
    services: 60
}, {
    name: '前端重置',
    sales: 5,
    services: 90
}]

var seriesData = sourceData.map(function(item, index, array) {
    return {
        name: item['name'],
        value: [item['sales'], item['services']]
    }
})

var computeServicesAvgLine = function() {
    let sum = 0
    sourceData.forEach(function(item) {
        sum += item['services']
    })
    return sum / sourceData.length
}

var computeSalesAvgLine = function() {
    let sum = 0
    sourceData.forEach(function(item) {
        sum += item['sales']
    })
    return sum / sourceData.length
}
var avg = {
    servicesAvgLine: computeServicesAvgLine(),
    salesAvgLine: computeSalesAvgLine()
}

option = {
    title: {
        text: 'DCO二期开发四象限图'
    },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            show: true,
            type: 'cross',
            lineStyle: {
                type: 'dashed',
                width: 1
            },
        },
        formatter: function(obj) {
            if (obj.componentType == "series") {
                return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                    obj.name +
                    '</div>' +
                    '<span>' +
                    '成本' +
                    '</span>' +
                    ' : ' + obj.data.value[0] + '' +
                    '<br/>' +
                    '<span>' +
                    '容忍度' +
                    '</span>' +
                    ' : ' + obj.data.value[1] + '%'
            }
        }
    },
    label: {
        normal: {
            show: true,
            position: 'bottom',
            formatter: function(params) {
                return params.name
            }
        },
        emphasis: {
            show: true,
            position: 'bottom',
        }
    },
    xAxis: {
        name: '开发预算成本',
        type: 'value',
        scale: true,
        axisLabel: {
            formatter: '{value} '
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#3259B8'
            }
        }
    },
    yAxis: {
        name: '顾客容忍度',
        type: 'value',
        scale: true,
        axisLabel: {
            formatter: '{value} %'
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#3259B8'
            }
        }
    },
    toolbox: {
        feature: {
            dataZoom: {}
        }
    },

    series: [{
        type: 'scatter',
        data: seriesData,
        symbolSize: 20,
        markLine: {
            label: {
                normal: {
                    formatter: function(params) {
                        if (params.dataIndex == 0) {
                            return params.value + "";
                        } else if (params.dataIndex == 1) {
                            return params.value + "%";
                        }
                        return params.value;
                    }
                }
            },
            lineStyle: {
                normal: {
                    color: "#626c91",
                    type: 'solid',
                    width: 1,
                },
                emphasis: {
                    color: "#d9def7"
                }
            },
            data: [{
                xAxis: avg.salesAvgLine,
                name: '营业额平均线',
                itemStyle: {
                    normal: {
                        color: "#b84a58",
                    }
                }
            }, {
                yAxis: avg.servicesAvgLine,
                name: '服务能力平均线',
                itemStyle: {
                    normal: {
                        color: "#b84a58",
                    }
                }
            }]
        },
        markArea: {
            silent: true,
            data: [
                [{
                    name: '战略性更新',
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        },
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTopLeft',
                            fontStyle: 'normal',
                            color: "#409EFF",
                            fontSize: 20,
                        }
                    },
                    coord: [avg.salesAvgLine, avg.servicesAvgLine],
                }, {
                    coord: [Number.MAX_VALUE, 0],
                }],
                [{
                    name: '紧迫性更新',
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        },
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTopRight',
                            fontStyle: 'normal',
                            color: "#409EFF",
                            fontSize: 20,
                        }
                    },
                    coord: [0, 0],
                }, {
                    coord: [avg.salesAvgLine, avg.servicesAvgLine],
                }],
                [{
                    name: '决策性更新',
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        },
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'insideBottomLeft',
                            fontStyle: 'normal',
                            color: "#409EFF",
                            fontSize: 20,
                        }
                    },
                    coord: [avg.salesAvgLine, avg.servicesAvgLine],
                }, {
                    coord: [Number.MAX_VALUE, Number.MAX_VALUE],
                }],
                [{
                    name: '甜点型更新',
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        },
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'insideBottomRight',
                            fontStyle: 'normal',
                            color: "#409EFF",
                            fontSize: 20,
                        }
                    },
                    coord: [0, Number.MAX_VALUE],
                }, {
                    coord: [avg.salesAvgLine, avg.servicesAvgLine],
                }],
            ]
        }
    }]
};