var nodes = [{
        x: '200',
        y: '700',
        name: '服务器A',
        img: 'data-1547632686885-o5Rfi3tyk.png'
    },
    {
        x: '100',
        y: '100',
        name: '服务器Aa',
        img: 'data-1547633192258-2EYYUDdcd.png'
    },
    {
        x: '300',
        y: '100',
        name: '服务器Ab',
        img: 'data-1547633192258-2EYYUDdcd.png',
        alarm: '产生告警了哦'
    }
]
var links = [{
    source: '服务器A',
    target: '服务器Aa',
    name: '连通'
}, {
    source: '服务器A',
    target: '服务器Ab',
    name: '不连通'
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
        symbolSize: 50,
        alarm: nodes[j].alarm,
        //symbol: 'image://./images/' + nodes[j].img,//图片路径
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
    if (links[i].name == "不连通") {
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
                    color: 'red'
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
    } else {
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
                    color: '#00FFFF'
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
}
option = {
    title: {
        text: '网络拓扑图',
        textStyle: {
            fontWeight: 'normal',
            color: "#00FFFF",
        }
    },
    backgroundColor: "#1b2735",
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: {
        show: false,
        type: 'value'
    },
    series: [{
        type: 'graph',
        layout: 'none',
        coordinateSystem: 'cartesian2d',
        symbolSize: 50,
        label: {
            normal: {
                show: true,
                position: 'bottom',
                color: '#00FFFF'
            }
        },
        lineStyle: {
            normal: {
                width: 2,
                shadowColor: 'none'
            }
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        data: charts.nodes,
        links: charts.links,
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
        coordinateSystem: 'cartesian2d',
        effect: {
            show: true,
            trailLength: 0,
            symbol: 'arrow',
            color: '#00FFFF',
            symbolSize: 8
        },
        data: charts.linesData
    }]
};