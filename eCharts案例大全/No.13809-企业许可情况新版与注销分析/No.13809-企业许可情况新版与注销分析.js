var sourceData = [{
    name: '马山县',
    sales: 7.89,
    services: 11.47
}, {
    name: '上林县',
    sales:5.55 ,
    services:  10.45
}, {
    name: '隆安县',
    sales: 3.18,
    services:  10.61
}, {
    name: '宾阳县',
    sales: 6.81,
    services:11.28  
}, {
    name: '横县',
    sales: 5.58,
    services: 11.91
}, {
    name: '武鸣区',
    sales: 6.91,
    services: 12.21
}, {
    name: '兴宁区',
    sales: 3.37,
    services: 13.02
}, {
    name: '青秀区',
    sales: 6.61,
    services: 12.55
}, {
    name: '西乡塘区 ',
    sales: 4.58,
    services: 10.41
}, {
    name: '江南区',
    sales: 4.35,
    services: 16.14
}, {
    name: '良庆区',
    sales: 4.27,
    services: 14.41
}, {
    name: '邕宁区',
    sales: 7.27,
    services: 13.12
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
        text: '企业许可情况新版与注销分析'
    },
    backgroundColor:'#fff',
    grid:{
        bottom:'40%',
        left:'6%',
        right:'50%'
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
                    '新办率' +
                    '</span>' +
                    ' : ' + obj.data.value[1] + '%' +
                    '<br/>' +
                    '<span>' +
                    '注销率' +
                    '</span>' +
                    ' : ' + obj.data.value[0] + '%'
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
    yAxis: {
        name: '新办率',
        min:8,
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
                color: '#000'
            }
        }
    },
    xAxis: {
        name: '注销率',
        type: 'value',
        scale: true,
        min:4,
        axisLabel: {
            formatter: '{value} %'
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#000'
            }
        }
    },
   
    series: [{
        type: 'scatter',
        data: seriesData,
        symbolSize: 10,
        color:'#2ca3fd',
        label: {
            normal: {
                show: true,
                formatter: function (sourceData) {
                    return sourceData.name;
                },
                position: 'top'
            }
        },
        markLine: {
            label: {
                normal: {
                    
                }
            },
            lineStyle: {
                normal: {
                    color: "#CD3333",
                    type: 'solid',
                    width: 1,
                },
                emphasis: {
                    color: "#d9def7"
                }
            },
            data: [{
                xAxis: avg.salesAvgLine,
                name: '新办率平均线',
                itemStyle: {
                    normal: {
                        color: "#b84a58",
                    }
                }
            }, {
                yAxis: avg.servicesAvgLine,
                name: '注销率平均线',
                itemStyle: {
                    normal: {
                        color: "#b84a58",
                    }
                }
            }]
        }
    }]
};