// 环节信息
var nodes = [{
        name: '节点信息看看看看1',
        code: 'node1000000001',
        x: 0 + 64,
        y: -60 - 20,
        width: 138,
        height: 40,
        status: 2,
        ext: {
            finishTime: '2019-01-01'
        }
    },
    {
        name: '节点信息看看看看2',
        code: 'node1000000002',
        x: 228 + 64,
        y: -108 - 20,
        width: 138,
        height: 40,
        status: 0,
        ext: {}
    },
    {
        name: '节点信息看看看看3',
        code: 'node1000000003',
        x: 228 + 64,
        y: 0 - 20,
        width: 138,
        height: 40,
        status: 1,
        ext: {}
    },
    {
        name: '节点信息看看看看4',
        code: 'node1000000004',
        x: 492 + 64,
        y: -48 - 20,
        width: 138,
        height: 40,
        status: 0,
        ext: {}
    }
];

// 连接信息
var links = [{
        source: 'node1000000001',
        target: 'node1000000002',
        status: 0
    },
    {
        source: 'node1000000001',
        target: 'node1000000003',
        status: 1
    },
    {
        source: 'node1000000003',
        target: 'node1000000004',
        status: 0
    }
];

function getScatterData() {
    var scatterData = [];

    for (var i = 0; i < nodes.length; i++) {
        scatterData.push({
            name: nodes[i].name,
            value: [nodes[i].x, nodes[i].y],
            type: 'title',
            w: 30,
            h: 30,
            ext: nodes[i].ext,
            node_status: nodes[i].status,
            label: {
                normal: {
                    textStyle: {
                        color: '#000',
                        fontSize: 14
                    }
                }
            }
        });
    }
    return scatterData;
}

function getLinesData() {
    var linesData = [];
    var map = {};
    for (var i = 0; i < nodes.length; i++) {
        map[nodes[i].code] = nodes[i];
    }

    for (var i = 0; i < links.length; i++) {
        var source = map[links[i].source];
        var target = map[links[i].target];

        // 计算信息框的四个边中点的位置
        source.top = {
            x: source.x,
            y: (source.y + (1 / 2 * 30))
        };
        source.right = {
            x: (source.x + (1 / 2 * 30)),
            y: source.y
        };
        source.bottom = {
            x: source.x,
            y: (source.y - (1 / 2 * 30))
        };
        source.left = {
            x: (source.x - (1 / 2 * 30)),
            y: source.y
        };

        target.top = {
            x: target.x,
            y: (target.y + (1 / 2 * 30))
        };
        target.right = {
            x: (target.x + (1 / 2 * 30)),
            y: target.y
        };
        target.bottom = {
            x: target.x,
            y: (target.y - (1 / 2 * 30))
        };
        target.left = {
            x: (target.x - (1 / 2 * 30)),
            y: target.y
        };

        //s->t：s左：t右
        if (source.right.x < target.left.x) {
            linesData.push(getLine([
                [source.right.x, source.right.y],
                [target.left.x, target.left.y]
            ], links[i].status));
        }
        //t<-s：s右：t左
        else if (source.left.x > target.right.x) {
            linesData.push(getLine([
                [source.left.x, source.left.y],
                [target.right.x, target.right.y]
            ], links[i].status));
        }
        //s
        //|
        //t
        else if (source.bottom.y > target.top.y) {
            linesData.push(getLine([
                [source.bottom.x, source.bottom.y],
                [target.top.x, target.top.y]
            ], links[i].status));
        }
        //t
        //|
        //s
        else if (source.top.y < target.bottom.y) {
            linesData.push(getLine([
                [source.top.x, source.top.y],
                [target.bottom.x, target.bottom.y]
            ], links[i].status));
        }
    }
    return linesData;
}

function getLine(coords, status) {
    var lineColor = '#e1e1e1';
    var lineSymbol = 'none';
    if (status == 2) {
        lineColor = '#41a51e';
    } else if (status == 1) {
        lineSymbol = 'arrow';
        lineColor = '#ff9f1d';
    }
    return {
        name: '',
        type: 'lines',
        coordinateSystem: 'cartesian2d',
        symbol: ['none', 'arrow'],
        symbolSize: 10,
        zlevel: 4,
        lineStyle: {
            normal: {
                type: 'solid',
                color: lineColor,
                width: 2,
                curveness: 0
            }
        },
        data: [{
            coords: coords
        }]
    };
}

function getSeries() {
    var series = [];
    series.push({
        type: 'scatter',
        symbol: 'circle',
        zlevel: 333,
        silent: true,
        symbolSize: function(value, params) {
            return [30, 30];
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: function(params) {
                    if (params.data.type == 'title') {
                        if (params.data.node_status == 2) {
                            return '#41a51e';
                        } else if (params.data.node_status == 1) {
                            return '#ff9f1d';
                        } else {
                            return '#e1e1e1';
                        }
                    }
                }
            }
        },
        label: {
            normal: {
                show: true,
                position: 'bottom',
                formatter: function(params) {
                    var ext = params.data.ext;
                    var finishTime = "";
                    if ("undefined" != typeof ext && "undefined" != typeof ext.finishTime) {
                        finishTime = ext.finishTime;
                    }
                    if (params.data.type == 'title') {
                        return params.data.name + "\n\n" + finishTime;
                    }

                },
                textStyle: {
                    color: '#000'
                }
            }
        },
        data: getScatterData(),
    });
    return series; //.concat(getLinesData());
}

// 指定图表的配置项和数据
var option = {
    backgroundColor: '#fff',
    title: [{
        // text: "流程跟踪图",
        x: '5%',
        y: 0,
        textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 14
        }
    }],
    tooltip: {
    },
    grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    xAxis: {
        type: 'value',
        show: false,
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false
        },
        max: 900,
        min: 0
    },
    yAxis: {
        type: 'value',
        show: false,
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false
        },
        max: 0,
        min: -900
    },
    series: getSeries()
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

myChart.on("click", function(param){
    console.log(param);
    alert();
});