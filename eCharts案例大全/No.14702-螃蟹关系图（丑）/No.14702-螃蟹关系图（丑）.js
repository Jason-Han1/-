option = {
    backgroundColor: '#212121',
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        type: 'graph',
        layout: 'none',
        symbolSize: (value) => {
            return value * 2;
        },
        coordinateSystem: null,
        label: {
            normal: {
                show: true,
                position: 'bottom',
                color: '#ffffff'
            }
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: 8,
        categories: [{
            name: '资本',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#f5cb62'
                    }, {
                        offset: 1,
                        color: 'rgba(245, 203, 98, 0.5)'
                    }]),
                }
            },
            label: {
                normal: {
                    fontSize: '14'
                }
            },
        }, {
            name: '大公司',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#43a6f7'
                    }, {
                        offset: 1,
                        color: 'rgba(67, 166, 247, 0.5)'
                    }]),
                }
            },
            label: {
                normal: {
                    fontSize: '20'
                }
            },
        }, {
            name: '小公司',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#1ccada'
                    }, {
                        offset: 1,
                        color: 'rgba(28, 202, 218, 0.5)'
                    }]),
                }
            },
            label: {
                normal: {
                    fontSize: '14'
                }
            },
        }],
        data: [{
            name: '节点1',
            x: 300,
            y: 80,
            value: 20,
            category: 0
        }, {
            name: '节点2',
            x: 300,
            y: 150,
            value: 30,
            category: 0
        }, {
            name: '节点3',
            x: 550,
            y: 150,
            value: 40,
            category: 1
        }, {
            name: '节点4',
            x: 750,
            y: 80,
            value: 25,
            category: 2
        }, {
            name: '节点5',
            x: 750,
            y: 150,
            value: 25,
            category: 2
        }, {
            name: '节点6',
            x: 750,
            y: 220,
            value: 25,
            category: 2
        }],
        links: [{
            source: '节点1',
            target: '节点3',
            lineStyle: {
                normal: {
                    color: '#f5cb62',
                    curveness: -0.1,
                }
            },
        }, {
            source: '节点2',
            target: '节点3',
            lineStyle: {
                normal: {
                    curveness: 0,
                    color: '#f5cb62'
                }
            },
        }, {
            source: '节点3',
            target: '节点4',
            lineStyle: {
                normal: {
                    curveness: -0.1,
                    color: '#43a6f7'
                }
            }
        }, {
            source: '节点3',
            target: '节点5',
            lineStyle: {
                normal: {
                    curveness: 0,
                    color: '#43a6f7'
                }
            }
        }, {
            source: '节点3',
            target: '节点6',
            lineStyle: {
                normal: {
                    curveness: 0.1,
                    color: '#43a6f7'
                }
            }
        }]
    }]
};

function cal(i, length, item) {
    var curveness = 0;
    if (length === 1) {
        curveness = 0;
    } else if (i < length / 2) {
        curveness = -item * (i + 1);
    } else if (i * 1.0 === parseInt(length / 2)) {
        curveness = 0;
    } else {
        curveness = item * (length - i);
    }
    return curveness;
}
function calX(i, length, x, item) {
    var curveness = 0;
    if (length === 1) {
        curveness = x;
    } else if (i < length / 2) {
        curveness = x+item * (i + 1);
    } else if (i * 1.0 === parseInt(length / 2)) {
        curveness = x;
    } else {
        curveness = x+item * (length - i);
    }
    return curveness;
}
function getRandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
}
app.timeTicket = setInterval(function() {
    var data = [];
    var links = [];
    data.push({
        name: '中间点',
        x: 522,
        y: cal(0, 1, 50),
        value: 30,
        category: 1
    });
    var source = getRandomNum(5, 6);
    for (var i = 0; i < source; i++) {
        data.push({
            name: '起点' + i,
            x: calX(i, source, 300, 15),
            y: cal(i, source, 50),
            value: 20,
            category: 0
        });
        links.push({
            source: '起点' + i,
            target: '中间点',
            lineStyle: {
                normal: {
                    curveness: cal(i, source, 0.1),
                    color: '#f5cb62'
                }
            }
        });
    }
    var direction = getRandomNum(5, 6);
    for (var i = 0; i < direction; i++) {
        data.push({
            name: '终点' + i,
            x: calX(i, source, 750, -15),
            y: cal(i, direction, 50),
            value: 20,
            category: 2
        });
        links.push({
            source: '中间点',
            target: '终点' + i,
            lineStyle: {
                normal: {
                    curveness: cal(i, direction, 0.1),
                    color: '#43a6f7'
                }
            }
        });
    }
    option.series[0].data = data;
    option.series[0].links = links;
    myChart.setOption(option, true);
}, 1000);