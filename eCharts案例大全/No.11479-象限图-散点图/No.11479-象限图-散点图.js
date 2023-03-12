var data1 = [
    ["8.9", "5", "公共技术"],
    ["7.2", "25", "智能装备制造"],
    ["3.5", "47", "电力行业"],
    ["6.8", "74", "畜牧业"],
    ["8.9", "33", "生物制药"],
    ["7.8", "45", "房地产"],
    ["9.9", "16", "民用航空"]
];
var data2 = [
    ["3", "15", "智能机器人"],
    ["7", "22", "科技金融"],
];
var data3 = [
    ["7", "65", "智能机器人"],
    ["4", "10", "科技金融"],
];
var nodes = [{
        x: '3.5',
        y: '15',
        name: '智能机器人1',
    },
    {
        x: '7.4',
        y: '65',
        name: '智能机器人2',
    },
    {
        x: '7.6',
        y: '22',
        name: '科技金融1',
    },
    {
        x: '4.5',
        y: '10',
        name: '科技金融2',
    }
]
var links = [{
    source: '科技金融1',
    target: '科技金融2',
    name: ''
}, {
    source: '智能机器人1',
    target: '智能机器人2',
    name: ''
}]
var charts = {
    nodes: [],
    links: [],
    linesData: []
}
var dataMap = new Map()
for (var j = 0; j < nodes.length; j++) {
    var x = parseInt(nodes[j].x)
    var y = parseInt(nodes[j].y)
    var node = {
        name: nodes[j].name,
        value: [x, y],
        symbolSize: 20,
        alarm: nodes[j].alarm,
        symbol: 'image:///asset/get/s/' + nodes[j].img,
        itemStyle: {
            normal: {
                color: '#12b5d0',
            }
        }
    }
    dataMap.set(nodes[j].name, [x, y])
    charts.nodes.push(node)
}
for (var i = 0; i < links.length; i++) {
    var link = {
        source: links[i].source,
        target: links[i].target,
        label: {
            normal: {
                show: true,
                formatter: links[i].name
            }
        },
        lineStyle: {
            normal: {
                color: '#12b5d0'
            }
        }
    }

    charts.links.push(link)
    // 组装动态移动的效果数据
    var lines = [{
        coord: dataMap.get(links[i].source)
    }, {
        coord: dataMap.get(links[i].target)
    }]
    charts.linesData.push(lines)
}
var textStyle = {
    color: '#2BE4ED',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontSize: 16
}
option = {
    backgroundColor: '#11224A',
    color: ['#1F7EF9', '#3FFFB8', '#CA2648'],
    title: [{
        text: 'B',
        x: '90%',
        y: '7%',
        textStyle: textStyle
    }, {
        text: 'A',
        x: '15%',
        y: '7%',
        textStyle: textStyle
    }, {
        text: 'C',
        x: '15%',
        y: '82%',
        textStyle: textStyle
    }, {
        text: 'D',
        x: '90%',
        y: '82%',
        textStyle: textStyle
    }],
    legend: {
        data: ['新增行业', '衰退行业', '上升行业'],
        left: 'center',
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    },
    tooltip: {
        formatter: function(params) {
            if (params.componentType == "series") {
                return params.seriesName + '->' + params.value[2] +
                    '<br><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
                    params.color +
                    ';"></span>' + '活跃度:' +
                    params.value[0] +
                    '<br><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
                    params.color +
                    ';"></span>' + '金额CNY:' +
                    params.value[1] + '亿';
            }
        }
    },
    xAxis: [{
        name: '（活跃度）',
        type: 'value',
        min: 0,
        max: 10,
        splitNumber: 11,
        splitLine: {
            show: false
        },
        // 坐标轴刻度
        axisTick: {
            "show": false
        },
        axisLine: {
            lineStyle: {
                color: '#2BE4ED'
            }
        }

    }],
    yAxis: [{
        name: '（金额CNY）',
        type: 'value',
        interval: 10,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#0D2059'
            }
        },
        axisLabel: {
            formatter: '{value} 亿'
        },
        // 坐标轴刻度
        axisTick: {
            "show": false
        },
        axisLine: {
            lineStyle: {
                color: '#2BE4ED'
            }
        }
    }],
    series: [{
            name: '新增行业',
            type: 'scatter',
            data: data1,
            label: {
                normal: {
                    show: true,
                    formatter: function(params) {
                        return params.value[2];
                    },
                    position: 'right'
                }
            },
        },
        {
            name: '衰退行业',
            type: 'scatter',
            data: data2,
            label: {
                normal: {
                    show: true,
                    formatter: function(params) {
                        return params.value[2];
                    },
                    position: 'right'
                }
            },
        },
        {
            name: '上升行业',
            type: 'scatter',
            data: data3,
            label: {
                normal: {
                    show: true,
                    formatter: function(params) {
                        return params.value[2];
                    },
                    position: 'right'
                }
            },
        },
        {
            name: '平均值',
            type: 'scatter',
            data: data,
            markLine: {
                symbol: 'none', //去掉箭头
                lineStyle: {
                    normal: {
                        type: 'solid',
                    }
                },
                data: [{
                        type: 'average',
                        name: '平均值'
                    }, {
                        yAxis: 40
                    },
                    {
                        xAxis: 5
                    },

                ]
            },

        },
        {
            type: 'graph',
            layout: 'none',
            id: 'a',
            coordinateSystem: 'cartesian2d',
            // edgeSymbol: ['', 'arrow'],//指引线箭头显示与否
            edgeSymbol: ['', ''],
            // symbolSize: 50,
            label: {
                normal: {
                    show: true,
                    position: 'bottom',
                    color: '#12b5d0'
                }
            },
            lineStyle: {
                normal: {
                    width: 2,
                    shadowColor: 'none'
                }
            },
            xAxis: {
                min: 0,
                max: 12,
                show: false,
                type: 'value'
            },
            yAxis: {
                min: 0,
                max: 12,
                show: false,
                type: 'value'
            },
            // edgeSymbolSize: 8,
            draggable: true,
            data: charts.nodes,
            links: charts.links,
            z: 4,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: function(item) {
                            return item.data.name
                        }
                    }
                }
            }
        },
        {
            name: 'A',
            type: 'lines',
            coordinateSystem: 'cartesian2d',
            z: 4,
            effect: {
                show: true,
                trailLength: 0,
                symbol: 'arrow',
                color: '#12b5d0',
                symbolSize: 8
            },
            lineStyle: {
                normal: {
                    curveness: 0
                }
            },
            data: charts.linesData,

        }

    ]
};