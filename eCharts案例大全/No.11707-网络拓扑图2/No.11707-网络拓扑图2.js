var nodes = [{
        name: '普通节点1',
        img: 'data-1547632915872-WZMUphq72.png',
        alarm: '产生告警了哦'
    },
    {
        name: '普通节点2',
        img: 'data-1547633192258-2EYYUDdcd.png'
    },
    {
        name: '普通节点3',
        img: 'data-1547633192258-2EYYUDdcd.png'
    },
    {
        name: '普通节点4',
        img: 'data-1547632915872-WZMUphq72.png'
    },
    {
        name: '普通节点5',
        img: 'data-1547632915872-WZMUphq72.png',
        alarm: '产生告警了哦'
    },
    {
        name: '普通节点6',
        img: 'data-1547632915872-WZMUphq72.png'
    }
]
var links = [{
        source: '普通节点1',
        target: '普通节点2',
        name: '数据传输'
    }, {
        source: '普通节点2',
        target: '普通节点3',
        name: '数据传输'
    },
    {
        source: '普通节点3',
        target: '普通节点4',
        name: '数据传输'
    },
    {
        source: '普通节点4',
        target: '普通节点5',
        name: '数据传输'
    },
    {
        source: '普通节点5',
        target: '普通节点6',
        name: '数据传输'
    },
    {
        source: '普通节点6',
        target: '普通节点1',
        name: '数据传输'
    }
]

var lines = [{
        source: '中心节点',
        target: '普通节点1',
        name: '数据传输'
    },
    {
        source: '中心节点',
        target: '普通节点2',
        name: '数据传输'
    },
    {
        source: '中心节点',
        target: '普通节点3',
        name: '数据传输'
    },
    {
        source: '中心节点',
        target: '普通节点4',
        name: '数据传输'
    },
    {
        source: '中心节点',
        target: '普通节点5',
        name: '数据传输'
    },
    {
        source: '中心节点',
        target: '普通节点6',
        name: '数据传输'
    },
    {
        source: '控制台',
        target: '中心节点',
        name: '访问'
    }
]

for (let i = 0; i < nodes.length; i++) {
    nodes[i].angle = (360 / (nodes.length + 1)) * i
}

nodes[nodes.length] = {
    name: '中心节点',
    img: 'data-1547632686885-o5Rfi3tyk.png',
    alarm: '产生告警了哦',
    value: [0, 0]
}

nodes[nodes.length] = {
    name: '控制台',
    img: 'data-1547633094304-08Q_2YEvH.png',
    value: [0.5, 0]
}

var charts = {
    nodes: [],
    links: [],
    linesData: []
}

var dataMap = new Map()
for (var j = 0; j < nodes.length; j++) {
    var node = {
        name: nodes[j].name,
        value: nodes[j].value || [1, nodes[j].angle],
        symbolSize: 50,
        alarm: nodes[j].alarm,
        symbol: 'image:///asset/get/s/' + nodes[j].img,
        itemStyle: {
            normal: {
                color: '#12b5d0',
            }
        }
    }
    dataMap.set(nodes[j].name, node.value)
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
}

for (var i = 0; i < lines.length; i++) {
    // 组装动态移动的效果数据
    var line = {
        coords: [
            dataMap.get(lines[i].source),
            dataMap.get(lines[i].target)
        ]
    }

    charts.linesData.push(line)
}

option = {
    title: {
        text: '网络拓扑图2'
    },
    backgroundColor: "#F5F5F5",
    polar: {},
    radiusAxis: {
        show: false
    },
    angleAxis: {
        type: 'category',
        show: false
    },
    series: [{
        type: 'graph',
        layout: 'none',
        coordinateSystem: 'polar',
        symbolSize: 50,
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
        edgeSymbolSize: 8,
        data: charts.nodes,
        links: charts.links,
        // nodes: charts.nodes,
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
    }, {
        name: 'A',
        type: 'lines',
        coordinateSystem: 'polar',
        lineStyle: {
            color: '#a6c84c',
            width: 1,
            opacity: 0.6,
            curveness: 0.5
        },
        effect: {
            show: true,
            // trailLength: 0,
            symbol: 'triangle',
            color: '#12b5d0',
            symbolSize: 8
        },
        data: charts.linesData
    }]
};
// 用于告警的动态效果
setInterval(() => {
    var dataI = []
    for (var n = 0; n < nodes.length; n++) {
        var alarm = nodes[n].alarm
        if (alarm !== null && alarm !== '' && alarm !== undefined) {
            option.series[0].data[n].symbolSize = 60
            option.series[0].data[n].label = {
                normal: {
                    color: '#DC143C'
                }
            }
            option.series[0].itemStyle.normal.label.formatter = function(item) {
                if (item.data.alarm !== undefined) {
                    return item.data.name + '\n[ ' + item.data.alarm + ' ]'
                } else {
                    return item.data.name
                }
            }
            dataI.push(n)
        }
    }
    myChart.setOption(option)
    setTimeout(() => {
        for (var m = 0; m < dataI.length; m++) {
            option.series[0].data[dataI[m]].symbolSize = 50
            option.series[0].data[dataI[m]].label = {
                normal: {
                    color: '#12b5d0'
                }
            }
            option.series[0].itemStyle.normal.label.formatter = function(item) {
                return item.data.name
            }
        }
        myChart.setOption(option)
    }, 2500)
}, 5000)