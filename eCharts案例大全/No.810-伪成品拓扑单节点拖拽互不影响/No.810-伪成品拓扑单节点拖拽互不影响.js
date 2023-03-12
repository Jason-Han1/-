/*
    【备注】
        转载于x丝男爵，感谢提供资源
        并在此基础修改保存
    内容说明：
    由于不知道是不是echart版本问题导致在这官网demo中不能拖拽，
    但本地亲测可以，这里的代码也可以作为参考，欢迎改进
    另博客地址：
    https://blog.csdn.net/u012138137/article/details/89456199
**/
var nodes = [{
        x: '8',
        y: '12',
        name: 'DNS',
        img: 'data-1547632686885-o5Rfi3tyk.png',
    },
    {
        x: '1',
        y: '3',
        name: '爬虫数据',
        img: 'data-1547632686885-o5Rfi3tyk.png',
    },
    {
        x: '3',
        y: '12',
        name: '域名缓存',
        img: 'data-1547632686885-o5Rfi3tyk.png',
    },
    {
        x: '3',
        y: '8',
        name: 'DPI用户面',
        img: 'data-1547632686885-o5Rfi3tyk.png',
    },
    {
        x: '3',
        y: '5',
        name: '场景特征',
        img: 'data-1547632686885-o5Rfi3tyk.png',
    },
    {
        x: '3',
        y: '1',
        name: '终端特征',
        img: 'data-1547632686885-o5Rfi3tyk.png',
    },
    {
        x: '5',
        y: '10',
        name: '增强特征',
        img: 'data-1547632686885-o5Rfi3tyk.png',
    },
    {
        x: '7',
        y: '12',
        name: 'HTTP',
        img: 'data-1547632686885-o5Rfi3tyk.png',
    },
    {
        x: '7',
        y: '8',
        name: '通用',
        img: 'data-1547632686885-o5Rfi3tyk.png',
    },
    {
        x: '9',
        y: '10',
        name: '用户中间表',
        img: 'data-1547632686885-o5Rfi3tyk.png',
    },
    {
        x: '9',
        y: '6',
        name: '网元信息表',
        img: 'data-1547632686885-o5Rfi3tyk.png',
    },
    {
        x: '11',
        y: '8',
        name: '质差网元',
        img: 'data-1547632686885-o5Rfi3tyk.png',
    },
]
var links = [{
        source: 'DNS',
        target: '域名缓存',
        name: '访问'
    },
    {
        source: '爬虫数据',
        target: '场景特征',
        name: '访问'
    },
    {
        source: '爬虫数据',
        target: '终端特征',
        name: '访问'
    },
    {
        source: '域名缓存',
        target: '增强特征',
        name: '访问'
    },
    {
        source: 'DPI用户面',
        target: '增强特征',
        name: '访问'
    },
    {
        source: '场景特征',
        target: '增强特征',
        name: '访问'
    },
    {
        source: '终端特征',
        target: '增强特征',
        name: '访问'
    },
    {
        source: '增强特征',
        target: 'HTTP',
        name: '访问'
    },
    {
        source: '增强特征',
        target: '通用',
        name: '访问'
    },
    {
        source: 'HTTP',
        target: '用户中间表',
        name: '访问'
    },
    {
        source: '通用',
        target: '用户中间表',
        name: '访问'
    },
    {
        source: '用户中间表',
        target: '质差网元',
        name: '访问'
    },
    {
        source: '网元信息表',
        target: '质差网元',
        name: '访问'
    },

]
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
option = {
    title: {
        text: '网络拓扑图'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}',
    },
    backgroundColor: "#F5F5F5",
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
    series: [{
        type: 'graph',
        layout: 'none',
        id: 'a',
        coordinateSystem: 'cartesian2d',
        edgeSymbol: ['', 'arrow'],
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
    }, {
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

    }]
};
myChart.setOption(option);



myChart.on('click', function(param) {
    var nodeses = [{
            x: '1',
            y: '12',
            name: 'DNS',
            img: 'data-1547632686885-o5Rfi3tyk.png',
        },
        {
            x: '1',
            y: '3',
            name: '爬虫数据',
            img: 'data-1547632686885-o5Rfi3tyk.png',
        }
    ]
    var linkses = [{
            source: 'DNS',
            target: '爬虫数据',
            name: '访问'
        }

    ]
    console.info(1)
    var chartses = {
        nodeses: [],
        linkses: [],
        linesDataes: []
    }
    var dataMapes = new Map()
    for (var j = 0; j < nodeses.length; j++) {
        var x = parseInt(nodeses[j].x)
        var y = parseInt(nodeses[j].y)
        var node = {
            name: nodeses[j].name,
            value: [x, y],
            symbolSize: 50,
            alarm: nodeses[j].alarm,
            symbol: 'image:///asset/get/s/' + nodeses[j].img,
            itemStyle: {
                normal: {
                    color: '#12b5d0',
                }
            }
        }
        dataMapes.set(nodeses[j].name, [x, y])
        chartses.nodeses.push(node)
    }
    for (var i = 0; i < linkses.length; i++) {
        var link = {
            source: linkses[i].source,
            target: linkses[i].target,
            label: {
                normal: {
                    show: true,
                    formatter: linkses[i].name
                }
            },
            lineStyle: {
                normal: {
                    color: '#12b5d0'
                }
            }
        }

        chartses.linkses.push(link)
        // 组装动态移动的效果数据
        var linesess = [{
            coord: dataMapes.get(linkses[i].source)
        }, {
            coord: dataMapes.get(linkses[i].target)
        }]
        chartses.linesDataes.push(linesess)
    }
    myChart.setOption({
        notMerge: true,
        series: [{
            data: chartses.nodeses,
            links: chartses.linkses,
        }, {
            data: chartses.linesDataes,
        }],

    })
});

myChart.setOption({
    graphic: echarts.util.map(charts.nodes, function(item, dataIndex) {
        return {
            type: 'circle',
            position: myChart.convertToPixel('grid', item.value),
            shape: {
                cx: 5,
                cy: 5,
                r: 20
            },
            invisible: true,
            draggable: true,
            ondrag: echarts.util.curry(onPointDragging, dataIndex),
            onmousemove: echarts.util.curry(showTooltip, dataIndex),
            onmouseout: echarts.util.curry(hideTooltip, dataIndex),
            z: 100
        };
    })
});

function onPointDragging(dataIndex, dx, dy) {
    console.log("tempV-----");
    var tempV = myChart.convertFromPixel('grid', this.position);
    console.log("tempV", tempV);
    charts.nodes[dataIndex].value = [tempV[0], tempV[1]];
    // Update data
    myChart.setOption({
        series: [{
            id: 'a',
            data: charts.nodes
        }]
    });
}

function showTooltip(dataIndex) {
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: dataIndex
    });
}

function hideTooltip(dataIndex) {
    myChart.dispatchAction({
        type: 'hideTip'
    });
}

window.addEventListener('resize', function() {
    myChart.resize();
    myChart.setOption({
        series: [{
            id: 'a',
            data: charts.nodes
        }]
    });
});