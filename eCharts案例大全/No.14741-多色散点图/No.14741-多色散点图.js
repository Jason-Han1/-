var data = [
    [
        [28604, 77, 252847810, '农、林、牧、渔业', '1']
    ],
    [
        [31163, 77.4, 252847810, '采矿业', '2'],
        [1516, 68, 252847810, '制造业', '2'],
        [13670, 74.7, 252847810, '电力、热力、燃气及水生产和供应业', '2'],
        [28599, 75, 252847810, '建筑业', '2']
    ],
    [
        [29476, 77.1, 252847810, '批发和零售业', '3'],
        [31476, 75.4, 252847810, '交通运输、仓储和邮政业', '3'],
        [28666, 78.1, 252847810, '住宿和餐饮业', '3'],
        [1777, 57.7, 252847810, '信息传输、软件和信息技术服务业', '3'],
        [29550, 79.1, 252847810, '金融业', '3'],
        [2076, 67.9, 252847810, '房地产业', '3'],
        [12087, 72, 252847810, '租赁和商务服务业', '3'],
        [24021, 75.4, 252847810, '科学研究和技术服务业', '3'],
        [43296, 76.8, 252847810, '水利、环境和公共设施管理业 ', '3'],
        [10088, 70.8, 252847810, '居民服务、修理和其他服务业 ', '3'],
        [19349, 69.6, 252847810, '教育', '3'],
        [10670, 67.3, 252847810, '卫生和社会工作', '3'],
        [26424, 75.7, 252847810, '文化、体育和娱乐业', '3'],
        [37062, 75.4, 252847810, '公共管理、社会保障和社会组织', '3'],
        [37062, 75.4, 252847810, '国际组织', '3']
    ]
];

var dataxAxis = 25000;
var datayAxis = 67.1;
option = {

    title: {
        text: '行业平均存活和活跃度'
    },
    dataZoom: [{
        id: 'dataZoomX',
        type: 'inside',
        xAxisIndex: [0],
        filterMode: 'filter'
    }, {
        id: 'dataZoomy',
        type: 'slider',
        xAxisIndex: [0],
        filterMode: 'empty'
    }],
    xAxis: {
        name: '行业活跃度',
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
        name: '户均寿命',
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                type: 'dashed'
            }
        },
        scale: true
    },
    series: [{
        name: '1',
        data: data[0],
        type: 'scatter',
        symbolSize: function(data) {
            return Math.sqrt(data[2]) / 10e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function(param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(129, 227, 238)'
                }, {
                    offset: 1,
                    color: 'rgb(25, 183, 207)'
                }]),
                borderColor: 'rgba(25, 183, 207, 0.5)',
                borderWidth: 7
            }
        },
        markLine: {
            lineStyle: {
                normal: {
                    type: 'dotted'
                }
            },
            data: [{
                xAxis: dataxAxis
            }, {
                yAxis: datayAxis
            }]
        }
    }, {
        name: '2',
        data: data[1],
        type: 'scatter',
        symbolSize: function(data) {
            return Math.sqrt(data[2]) / 10e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function(param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                }, {
                    offset: 1,
                    color: 'rgb(204, 46, 72)'
                }]),
                borderColor: 'rgba(204, 46, 72, 0.5)',
                borderWidth: 6
            }
        },
        markLine: {
            lineStyle: {
                normal: {
                    type: 'dotted',
                    color: 'bule'
                }
            },
            data: [{
                xAxis: dataxAxis
            }, {
                yAxis: datayAxis
            }]
        }
    }, {
        name: '3',
        data: data[2],
        type: 'scatter',
        symbolSize: function(data) {
            return Math.sqrt(data[2]) / 10e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function(param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgba(255, 255, 0, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(255, 255, 0, 0)'
                }]),
                borderColor: 'rgba(255, 255, 0, 0.5)',
                borderWidth: 7
            }
        },
        markLine: {
            lineStyle: {
                normal: {
                    type: 'dotted',
                    color: 'bule'
                }
            },
            data: [{
                xAxis: dataxAxis
            }, {
                yAxis: datayAxis
            }]
        }
    }]

};