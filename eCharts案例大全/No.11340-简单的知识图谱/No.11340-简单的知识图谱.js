var nodes = [{
        x: '0',
        y: '5',
        name: '函数的概念',
        status: 1
    },
    {
        x: '2',
        y: '6',
        name: '方程与应用',
        status: 2
    },
    {
        x: '4',
        y: '4',
        name: '函数的计算',
        status: 1
    },
    {
        x: '5',
        y: '2',
        name: '函数的求解',
        status: 3
    },
    {
        x: '6',
        y: '5',
        name: '一元一次',
        status: 4
    },
    {
        x: '8',
        y: '5',
        name: '初等函数',
        status: 1
    },
    {
        x: '7',
        y: '3',
        name: '函数与方程',
        status: 2
    },
    {
        x: '9',
        y: '6',
        name: '函数四则运算',
        status: 1
    },
    {
        x: '11',
        y: '5',
        name: '函数加法',
        status: 3
    },
    {
        x: '13',
        y: '4',
        name: '函数减法',
        status: 1
    },
    {
        x: '15',
        y: '5',
        name: '函数除法',
        status: 0
    },
    {
        x: '16',
        y: '3',
        name: '函数乘法',
        status: 0
    },
    {
        x: '18',
        y: '4',
        name: '函数除法多项式',
        status: 1
    }
]
var STATUS_COLOR = ['#CCCCCC', '#6ACB97', '#FCCF27', '#FC6B44', '#12B5D0'];
var links = [{
        source: '函数的概念',
        target: '方程与应用',
        name: ''
    },
    {
        source: '方程与应用',
        target: '函数的计算',
        name: ''
    },
    {
        source: '函数的计算',
        target: '一元一次',
        name: ''
    },
    {
        source: '函数的计算',
        target: '函数的求解',
        name: ''
    },
    {
        source: '一元一次',
        target: '初等函数',
        name: ''
    },
    {
        source: '一元一次',
        target: '函数与方程',
        name: ''
    },
    {
        source: '初等函数',
        target: '函数四则运算',
        name: ''
    },
    {
        source: '函数四则运算',
        target: '函数加法',
        name: ''
    },
    {
        source: '函数加法',
        target: '函数减法',
        name: ''
    },
    {
        source: '函数减法',
        target: '函数乘法',
        name: ''
    },
    {
        source: '函数乘法',
        target: '函数除法',
        name: ''
    },
    {
        source: '函数除法',
        target: '函数除法多项式',
        name: ''
    }
]
var charts = {
    nodes: [],
    links: []
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
        // symbol: 'image:///asset/get/s/' + nodes[j].img,
        itemStyle: {
            normal: {
                color: STATUS_COLOR[nodes[j].status],
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
                color: '#CCCCCC'
            }
        }
    }
    charts.links.push(link)
}

// legend
var legendData = ['待测评', '优秀', '一般', '较差', '预测'].map(function(val) {
    return {
        name: val,
        icon: 'circle',
        textStyle: {
            color: '#CCCCCC'
        }
    }
});
var categories = [{
        name: '待测评',
        itemStyle: {
            normal: {
                color: "#CCCCCC",
            }
        }
    },
    {
        name: '优秀',
        itemStyle: {
            normal: {
                color: "#6ACB97",
            }
        }
    },
    {
        name: '一般',
        itemStyle: {
            normal: {
                color: "#FCCF27",
            }
        }
    },
    {
        name: '较差',
        itemStyle: {
            normal: {
                color: "#FC6B44",
            }
        }
    },
    {
        name: '预测',
        itemStyle: {
            normal: {
                color: "#12B5D0",
            }
        }
    }
];
option = {
    legend: {
        data: legendData,
        tooltip: {
            show: true
        },
        bottom: 10
    },
    title: {
        text: '',
        textStyle: {
            margin: 15,
            fontWeight: 'normal',
            color: "#00FFFF",
        }
    },
    backgroundColor: "#fff",
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
        width: 2000,
        label: {
            normal: {
                show: true,
                position: 'top',
                color: '#CCCCCC'
            }
        },
        lineStyle: {
            normal: {
                width: 2,
                shadowColor: 'none'
            }
        },
        edgeSymbolSize: 8,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    formatter: function(item) {
                        return item.data.name
                    }
                }
            }
        },
        force: {
            repulsion: 500
        },
        categories: categories,
        data: charts.nodes,
        links: charts.links,
    }]
};
myChart.on('click', function(params) {
    if (params.dataType === "node") {
        alert(JSON.stringify(params.data))
    }
});