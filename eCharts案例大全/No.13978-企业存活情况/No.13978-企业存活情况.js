var sourceData = [{
    name: '崇左市',
    sales: 7.1,
    services: 17.31
}, {
    name: '来宾市',
    sales:5.91 ,
    services:  19.65
}, {
    name: '河池市',
    sales: 4.84,
    services:  15.34
}, {
    name: '贺州市',
    sales: 6.81,
    services:11.2  
}, {
    name: '百色市',
    sales: 8.8,
    services: 11.91
}, {
    name: '玉林市',
    sales: 9.12,
    services: 14.2
}, {
    name: '贵港市',
    sales: 4.68,
    services: 12.02
}, {
    name: '钦州市',
    sales: 12.8,
    services: 14.51
}, {
    name: '防城港市 ',
    sales: 5.64,
    services: 10.41
}, {
    name: '北海市',
    sales: 12.8,
    services: 16.14
}, {
    name: '梧州市',
    sales: 11.42,
    services: 14.41
}, {
    name: '桂林市',
    sales: 12.65,
    services: 10.12
}, {
    name: '柳州市',
    sales: 9.64,
    services: 12.85
}, {
    name: '南宁市',
    sales: 7.34,
    services: 10.1
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